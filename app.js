// Portfolio front end. Renders window.PORTFOLIO_DATA into the page.

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

const VISIBLE_HIGHLIGHTS = 3;

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (data) {
    renderOutcomes(data.outcomes || []);
    renderProjects(data.featured_projects || []);
    renderRoles(data.experience || []);
    renderSkills(data.skills || []);
    renderCerts(data.certifications || []);
    renderSkillBadges(data.skill_badges || []);
  }
  initTheme();
  initContactForm();
  initNavHighlight();
  initReveal();
  // Content is rendered by JS, so re-apply a deep link (#experience, #role-3) once it exists.
  if (location.hash.length > 1) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- Theme ---------- */

function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  const current = () => root.dataset.theme || (systemDark.matches ? 'dark' : 'light');

  btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
}

/* ---------- Render ---------- */

function renderOutcomes(items) {
  const grid = document.getElementById('outcomes');
  grid.innerHTML = items.map((o) => `
    <div class="outcome">
      <dt class="outcome-label">${esc(o.label)}</dt>
      <dd class="outcome-value" data-value="${esc(o.value)}">${esc(o.value)}</dd>
      <dd class="outcome-context">${esc(o.context)}</dd>
    </div>
  `).join('');

  initBand(grid);
}

// On first view the band is just an orange line. Once the reader starts
// scrolling it opens into the full box, the figures rise in and count up.
function initBand(grid) {
  const band = grid.closest('.outcomes');
  if (!document.documentElement.classList.contains('motion')) { band.classList.add('in'); return; }

  const countUp = (el) => {
    const m = el.dataset.value.match(/^(\D*)([\d,]+)(.*)$/);
    if (!m) return;
    const [, pre, num, post] = m;
    const target = Number(num.replace(/,/g, ''));
    const fmt = (n) => (num.includes(',') ? n.toLocaleString('en-GB') : String(n));
    const start = performance.now();
    const tick = (t) => {
      const k = Math.min(1, Math.max(0, (t - start) / 1200));
      el.textContent = pre + fmt(Math.round(target * (1 - Math.pow(1 - k, 3)))) + post;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const open = () => {
    if (band.classList.contains('in')) return;
    band.classList.add('in');
    grid.querySelectorAll('.outcome-value').forEach(countUp);
    removeEventListener('scroll', check);
  };
  // Open after a little scroll, or straight away if the page loads with the band well in view.
  const check = () => {
    if (scrollY > 80 || band.getBoundingClientRect().top < innerHeight * 0.45) open();
  };
  addEventListener('scroll', check, { passive: true });
  check();
}

// The project dashboards still use the old visual style. Flip this once they're restyled.
const SHOW_LIVE_LINKS = false;

// Source links: one per repo when a project spans several.
const repoLinks = (p, label) => (p.repos || [{ name: label, url: p.github_url }])
  .map((r) => `<a href="${esc(r.url)}" rel="noopener">${esc(p.repos ? r.name : label)} ↗</a>`).join('');

const liveLink = (p, label) => (SHOW_LIVE_LINKS && p.live_url)
  ? `<a href="${esc(p.live_url)}" rel="noopener">${label} ↗</a>` : '';

function renderProjects(projects) {
  const list = document.getElementById('projects-list');
  list.innerHTML = projects.map((p, i) => `
    <li class="project reveal${i === 0 ? ' is-featured' : ''}">
      <div class="project-main">
        <h3 class="project-title"><button type="button" data-id="${esc(p.id)}">${esc(p.title)}<span class="arrow" aria-hidden="true">→</span></button></h3>
        <p class="project-summary">${esc(p.summary || p.tagline)}</p>
        <p class="stack">${p.tech.map(esc).join(' · ')}</p>
      </div>
      <div class="project-links">
        ${p.cadence ? `<span class="cadence">${esc(p.cadence)}</span>` : ''}
        ${liveLink(p, 'Live site')}
        ${repoLinks(p, 'Source')}
      </div>
    </li>
  `).join('');

  // Project titles and system-map nodes both open the details dialog.
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-id]');
    if (!btn) return;
    const project = projects.find((p) => p.id === btn.dataset.id);
    if (project) openProject(project);
  });
}

function openProject(p) {
  const dialog = document.getElementById('projectDialog');
  document.getElementById('dialogBody').innerHTML = `
    <p class="dialog-kicker">${esc(p.badge)}</p>
    <h2 id="dialogTitle">${esc(p.title)}</h2>
    <p class="dialog-text">${esc(p.long_description || p.description)}</p>
    ${p.architecture?.length ? `
      <h3>How it works</h3>
      <ul>${p.architecture.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>` : ''}
    <h3>Stack</h3>
    <p class="stack">${p.tech.map(esc).join(' · ')}</p>
    <p class="dialog-links">
      ${liveLink(p, 'Live site')}
      ${repoLinks(p, 'Source on GitHub')}
    </p>
  `;
  dialog.showModal();
}

/* ---------- Career timeline ---------- */

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function splitPeriod(period) {
  return period.includes('|') ? period.split('|').map((s) => s.trim()) : ['', period.trim()];
}

// "Aug 2024 - Sept 2025" -> [2024.58, 2025.75] in fractional years.
function parseSpan(dates) {
  const toYear = (s) => {
    if (/present/i.test(s)) { const d = new Date(); return d.getFullYear() + (d.getMonth() + 1) / 12; }
    const [mon, yr] = s.trim().split(/\s+/);
    return Number(yr) + MONTHS.indexOf(mon.slice(0, 3).toLowerCase()) / 12;
  };
  const [a, b] = dates.split(/\s+-\s+/);
  return [toYear(a), toYear(b) + 1 / 12];
}

function shortOrg(company) {
  if (/career break/i.test(company)) return 'Leave';
  const m = company.match(/\((?:Client|Internal):\s*([^)]+)\)/);
  return (m ? m[1] : company).replace(/\s*(Chase\s*&\s*Co\.|AG|Accelerator|Platform)\s*$/i, '').replace(/^GenAI\s+/, '');
}

function renderCareer(roles) {
  const chart = document.getElementById('careerChart');
  const items = roles.map((r, i) => {
    const [, dates] = splitPeriod(r.period);
    const [start, end] = parseSpan(dates);
    const lane = /^Infosys/.test(r.company) ? 'Infosys' : 'Deloitte';
    return { i, r, dates, start, end, lane };
  });

  const min = Math.floor(Math.min(...items.map((d) => d.start)));
  const max = Math.ceil(Math.max(...items.map((d) => d.end)));
  const span = max - min;
  const pct = (y) => ((y - min) / span) * 100;

  const lanes = ['Deloitte', 'Infosys'].map((name) => `
    <div class="lane">
      <span class="lane-name">${name}</span>
      <div class="track" style="--years:${span}">
        ${items.filter((d) => d.lane === name).map((d) => {
          const w = pct(d.end) - pct(d.start);
          const cls = /career break/i.test(d.r.company) ? 'is-break' : (name === 'Infosys' ? 'is-hsbc' : '');
          return `<button type="button" class="seg ${cls}" data-role="${d.i}"
            style="left:${pct(d.start)}%;width:${w}%"
            aria-label="${esc(`${d.r.role}, ${d.r.company}, ${d.dates}`)}">${w > 9 ? esc(shortOrg(d.r.company)) : ''}</button>`;
        }).join('')}
      </div>
    </div>`).join('');

  const ticks = Array.from({ length: span + 1 }, (_, k) => min + k)
    .map((y) => `<span style="left:${pct(y)}%">${y}</span>`).join('');

  chart.innerHTML = `${lanes}<div class="axis" aria-hidden="true">${ticks}</div>`;

  // Hide a segment's label when it doesn't fit, rather than clipping it mid-word.
  const fitLabels = () => chart.querySelectorAll('.seg').forEach((seg) => {
    seg.classList.remove('no-label');
    if (seg.scrollWidth > seg.clientWidth) seg.classList.add('no-label');
  });
  fitLabels();
  addEventListener('resize', fitLabels);

  const tip = document.getElementById('tip');
  const show = (seg) => {
    const d = items[Number(seg.dataset.role)];
    tip.innerHTML = `<strong>${esc(d.r.role)}</strong><span>${esc(d.r.company)}<br>${esc(d.dates)}</span>`;
    tip.hidden = false;
    const box = seg.getBoundingClientRect();
    const x = Math.min(Math.max(8, box.left + box.width / 2 - tip.offsetWidth / 2), innerWidth - tip.offsetWidth - 8);
    tip.style.left = `${x}px`;
    tip.style.top = `${box.top - tip.offsetHeight - 8}px`;
  };
  const hide = () => { tip.hidden = true; };

  chart.querySelectorAll('.seg').forEach((seg) => {
    seg.addEventListener('mouseenter', () => show(seg));
    seg.addEventListener('focus', () => show(seg));
    seg.addEventListener('mouseleave', hide);
    seg.addEventListener('blur', hide);
    seg.addEventListener('click', () => { hide(); location.hash = `role-${seg.dataset.role}`; });
  });
  addEventListener('scroll', hide, { passive: true });
}

/* ---------- Experience list ---------- */

function renderRoles(roles) {
  renderCareer(roles);
  document.getElementById('roles').innerHTML = roles.map((r, i) => {
    const [place, dates] = splitPeriod(r.period);
    const shown = r.highlights.slice(0, VISIBLE_HIGHLIGHTS);
    const more = r.highlights.slice(VISIBLE_HIGHLIGHTS);
    const isBreak = /career break/i.test(r.company);

    return `
      <li class="role reveal${isBreak ? ' is-break' : ''}" id="role-${i}">
        <p class="role-when"><span>${esc(dates)}</span><span>${esc(place)}</span></p>
        <div>
          <h3 class="role-title">${esc(r.role)}</h3>
          <p class="role-org">${esc(r.company)}</p>
          <ul>${shown.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
          ${more.length ? `
            <details>
              <summary>${more.length} more</summary>
              <ul>${more.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
            </details>` : ''}
        </div>
      </li>`;
  }).join('');
}

function renderSkills(skills) {
  document.getElementById('skillList').innerHTML = skills.map((s) => `
    <div><dt>${esc(s.category)}</dt><dd>${s.items.map(esc).join(', ')}</dd></div>
  `).join('');
}

function renderCerts(certs) {
  const initials = (issuer) => issuer.split(/\s+/).map((w) => w[0]).join('').slice(0, 3);
  document.getElementById('certList').innerHTML = certs.map((c) => `
    <li class="cert${c.expired ? ' is-expired' : ''}">
      ${c.badge_image
        ? `<img src="${esc(c.badge_image)}" alt="" width="44" height="44" loading="lazy">`
        : `<span class="cert-mark" aria-hidden="true">${esc(initials(c.issuer))}</span>`}
      <div>
        <p class="cert-name">${esc(c.title.replace(/^[^:]+:\s*/, ''))}</p>
        <p class="cert-meta">${esc(c.issuer)} · ${esc(c.date)}${c.expired ? ' · <span class="expired">expired</span>' : ''}</p>
      </div>
    </li>
  `).join('');
}

// Skill badges grouped by year, newest first.
function renderSkillBadges(badges) {
  document.getElementById('badgeCount').textContent = `(${badges.length})`;
  const years = [...new Set(badges.map((b) => b.date.slice(0, 4)))];
  document.getElementById('badgeGroups').innerHTML = years.map((y) => `
    <div class="badge-year">
      <p class="badge-year-label">${esc(y)}</p>
      <ul class="badge-list">
        ${badges.filter((b) => b.date.startsWith(y)).map((b) => `<li>${esc(b.name)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* ---------- Contact form (Web3Forms) ---------- */

function initContactForm() {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('contactSubmit');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.textContent = '';
    status.classList.remove('is-error');

    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || 'Send failed');
      form.reset();
      status.textContent = 'Thanks, your message has been sent. I’ll reply by email.';
    } catch (err) {
      status.classList.add('is-error');
      status.textContent = 'That didn’t send. Please email siddharthsbhadauria@gmail.com instead.';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send message';
    }
  });
}

/* ---------- Scroll reveal ---------- */

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!document.documentElement.classList.contains('motion') || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => io.observe(el));
}

/* ---------- Highlight current section in nav ---------- */

function initNavHighlight() {
  const links = [...document.querySelectorAll('.site-nav a')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => {
        if (a.getAttribute('href') === `#${entry.target.id}`) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach((s) => observer.observe(s));
}
