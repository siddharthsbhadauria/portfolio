// ==========================================================================
// Portfolio Web Application Frontend Engine
// Multi-Cloud & AI Portfolio Interactive Engine
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTerminal();
  renderPortfolio();
  initCopyEmail();
  initContactForm();
  initBackToTop();
  initNavObserver();
});

/* --------------------------------------------------------------------------
   1. Theme Management
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');

  document.documentElement.setAttribute('data-theme', initialTheme);

  const themeToggleBtn = document.getElementById('themeToggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      showToast(newTheme === 'dark' ? '🌙 Dark Mode Activated' : '☀️ Light Mode Activated');
    });
  }
}

/* --------------------------------------------------------------------------
   2. Interactive Terminal CLI Engine (siddharth@github)
   -------------------------------------------------------------------------- */
function initTerminal() {
  const terminalBody = document.getElementById('terminalBody');
  if (!terminalBody) return;

  const defaultLogs = [
    { type: 'cmd', text: 'init --profile "Siddharth Singh Bhadauria"' },
    { type: 'success', text: '[OK] Role: Senior Cloud, Data & AI Engineer (11.5+ yrs exp)' },
    { type: 'info', text: '[OK] Certifications: 11 Digital Credentials (GCP, AWS, Terraform, Azure)' },
    { type: 'amber', text: '[READY] Location: London, UK | Open for Senior Cloud & AI Roles' },
    { type: 'cmd', text: 'Click quick command buttons below to execute diagnostics...' }
  ];

  renderTerminalLogs(defaultLogs);
}

function renderTerminalLogs(logs) {
  const terminalBody = document.getElementById('terminalBody');
  if (!terminalBody) return;

  terminalBody.innerHTML = logs.map(l => {
    if (l.type === 'cmd') {
      return `<div class="term-line"><span class="term-prompt">siddharth@github:~$</span> <span class="term-cmd">${l.text}</span></div>`;
    } else if (l.type === 'success') {
      return `<div class="term-line term-success">${l.text}</div>`;
    } else if (l.type === 'amber') {
      return `<div class="term-line term-amber">${l.text}</div>`;
    } else {
      return `<div class="term-line">${l.text}</div>`;
    }
  }).join('');

  terminalBody.scrollTop = terminalBody.scrollHeight;
}

window.executeTermCommand = function(cmdKey) {
  const terminalBody = document.getElementById('terminalBody');
  if (!terminalBody) return;

  if (cmdKey === 'clear') {
    terminalBody.innerHTML = `<div class="term-line"><span class="term-prompt">siddharth@github:~$</span> <span class="term-cmd">clear</span></div>`;
    return;
  }

  let newLogs = [];

  if (cmdKey === 'stats') {
    newLogs = [
      { type: 'cmd', text: 'fetch --metrics --summary' },
      { type: 'success', text: '-> 11.5+ Years Multi-Cloud Architecture Experience' },
      { type: 'success', text: '-> 14+ Enterprise Projects (Deloitte, JPMorgan, UBS, HSBC)' },
      { type: 'success', text: '-> 50M+ Daily Telemetry Log Ingestion Events to BigQuery' },
      { type: 'success', text: '-> 3,600+ Active Terraform AWS EKS Cluster Deployments' }
    ];
  } else if (cmdKey === 'finops') {
    newLogs = [
      { type: 'cmd', text: 'python -m cloud_finops_rag.evaluator' },
      { type: 'info', text: '-> Querying 15+ LLM Endpoints (Gemini, Claude, GPT-4.5, DeepSeek)...' },
      { type: 'success', text: '-> Great Expectations Schema Contract Gate: PASSED' },
      { type: 'success', text: '-> DuckDB Analytical Model: Cost-Per-Token Benchmark Generated' },
      { type: 'amber', text: '-> Output deployed live to GitHub Pages' }
    ];
  } else if (cmdKey === 'certs') {
    newLogs = [
      { type: 'cmd', text: 'credly verify --user "siddharthsbhadauria"' },
      { type: 'success', text: '[1] GCP Professional Machine Learning Engineer' },
      { type: 'success', text: '[2] GCP Professional Data Engineer' },
      { type: 'success', text: '[3] GCP Generative AI Leader' },
      { type: 'success', text: '[4] AWS Certified AI Practitioner' },
      { type: 'success', text: '[5] HashiCorp Terraform Associate (003)' }
    ];
  }

  const existingHTML = terminalBody.innerHTML;
  const appendHTML = newLogs.map(l => {
    if (l.type === 'cmd') {
      return `<div class="term-line" style="margin-top: 10px;"><span class="term-prompt">siddharth@github:~$</span> <span class="term-cmd">${l.text}</span></div>`;
    } else if (l.type === 'success') {
      return `<div class="term-line term-success">${l.text}</div>`;
    } else if (l.type === 'amber') {
      return `<div class="term-line term-amber">${l.text}</div>`;
    } else {
      return `<div class="term-line">${l.text}</div>`;
    }
  }).join('');

  terminalBody.innerHTML = existingHTML + appendHTML;
  terminalBody.scrollTop = terminalBody.scrollHeight;
};

/* --------------------------------------------------------------------------
   3. Render Portfolio Content
   -------------------------------------------------------------------------- */
function renderPortfolio() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  renderStats(data.stats || []);
  renderProjects(data.featured_projects || []);
  initProjectFilters(data.featured_projects || []);
  renderExperience(data.experience || []);
  renderSkills(data.skills || []);
  renderCertifications(data.certifications || []);
  initCertFilters(data.certifications || []);
  initProjectModal();
}

function renderStats(stats) {
  const grid = document.getElementById('statsGrid');
  if (!grid) return;

  grid.innerHTML = stats.map(stat => `
    <div class="stat-card">
      <span class="stat-number">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
}

function renderProjects(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  if (projects.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No projects match your search criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = projects.map(p => `
    <div class="project-card" data-id="${p.id}" data-category="${p.category || 'all'}">
      <div class="project-top">
        <div class="project-header">
          <h3 class="project-title">${p.title}</h3>
          <span class="project-badge">${p.badge}</span>
        </div>
        <p class="project-tagline">${p.tagline}</p>
        <p class="project-desc">${p.description}</p>
        <div class="tech-pills">
          ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
      </div>
      <div class="project-links">
        <div class="btn-group">
          ${p.live_url ? `<a href="${p.live_url}" target="_blank" rel="noopener" class="btn-sm btn-live" onclick="event.stopPropagation();">⚡ Live App</a>` : ''}
          <a href="${p.github_url}" target="_blank" rel="noopener" class="btn-sm btn-repo" onclick="event.stopPropagation();">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Repository
          </a>
        </div>
        <span class="details-prompt">Architecture Details &rarr;</span>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-id');
      const project = (window.PORTFOLIO_DATA.featured_projects || []).find(p => p.id === projectId);
      if (project) openProjectModal(project);
    });
  });
}

function initProjectFilters(allProjects) {
  const filterBtns = document.querySelectorAll('#projectFilters .filter-btn');
  const searchInput = document.getElementById('projectSearch');

  let activeCategory = 'all';
  let searchQuery = '';

  const applyFilters = () => {
    let filtered = allProjects;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q))
      );
    }

    renderProjects(filtered);
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }
}

function renderExperience(exp) {
  const timeline = document.getElementById('experienceTimeline');
  if (!timeline) return;

  timeline.innerHTML = exp.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="timeline-company">${item.company}</span>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="timeline-role">${item.role}</div>
        <ul class="timeline-list">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderSkills(skills) {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = skills.map(s => `
    <div class="skill-card">
      <div class="skill-cat-header">
        <div class="skill-cat-title">
          <span>${s.category}</span>
        </div>
        <span class="skill-count">${s.items.length} skills</span>
      </div>
      <div class="skill-items">
        ${s.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderCertifications(certs) {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;

  grid.innerHTML = certs.map(c => `
    <div class="cert-card" data-provider="${c.provider || 'other'}">
      <div class="cert-badge-accent" style="background: ${c.badge_color || 'var(--accent-cyan)'};"></div>
      <div class="cert-card-content">
        <div class="cert-header">
          <h4 class="cert-title">${c.title}</h4>
        </div>
        <span class="cert-issuer">${c.issuer}</span>
        <span class="cert-date">${c.date}</span>
      </div>
    </div>
  `).join('');
}

function initCertFilters(allCerts) {
  const filterBtns = document.querySelectorAll('#certFilters .filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-cert-filter');
      const filtered = filter === 'all' ? allCerts : allCerts.filter(c => c.provider === filter);
      renderCertifications(filtered);
    });
  });
}

/* --------------------------------------------------------------------------
   4. Contact Form Integration (Web3Forms API)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending Message...';

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showToast('✨ Message sent successfully! I will respond shortly.');
        form.reset();
      } else {
        showToast('❌ Submission error. Please email siddharthsbhadauria@gmail.com directly.');
      }
    } catch (err) {
      showToast('❌ Submission error. Please email siddharthsbhadauria@gmail.com directly.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message →';
    }
  });
}

/* --------------------------------------------------------------------------
   5. Project Detail Modal Setup
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}

function openProjectModal(p) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-header">
      <span class="modal-badge">${p.badge}</span>
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-tagline">${p.tagline}</p>
    </div>

    <p style="font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px;">
      ${p.long_description || p.description}
    </p>

    ${p.architecture && p.architecture.length > 0 ? `
      <h3 class="modal-section-title">Architectural Highlights</h3>
      <ul class="modal-arch-list">
        ${p.architecture.map(a => `<li>${a}</li>`).join('')}
      </ul>
    ` : ''}

    <h3 class="modal-section-title">Technology Stack</h3>
    <div class="tech-pills" style="margin-bottom: 24px;">
      ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
    </div>

    <div class="modal-actions">
      ${p.live_url ? `<a href="${p.live_url}" target="_blank" rel="noopener" class="btn btn-primary">⚡ Open Live Application</a>` : ''}
      <a href="${p.github_url}" target="_blank" rel="noopener" class="btn btn-secondary">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        View GitHub Repository
      </a>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

/* --------------------------------------------------------------------------
   6. Copy Email & Toast Feedback
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = window.PORTFOLIO_DATA?.profile?.email || 'siddharthsbhadauria@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('📋 Email copied to clipboard!');
    }).catch(() => {
      showToast('✉️ siddharthsbhadauria@gmail.com');
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --------------------------------------------------------------------------
   7. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   8. Active Section Navigation Observer
   -------------------------------------------------------------------------- */
function initNavObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}
