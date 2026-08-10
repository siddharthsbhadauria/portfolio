// ==========================================================================
// Portfolio Web Application Frontend Engine
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPortfolio();
});

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
    });
  }
}

function renderPortfolio() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  renderStats(data.stats || []);
  renderProjects(data.featured_projects || []);
  renderExperience(data.experience || []);
  renderSkills(data.skills || []);
  renderCertifications(data.certifications || []);
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

  grid.innerHTML = projects.map(p => `
    <div class="project-card">
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
        ${p.live_url ? `<a href="${p.live_url}" target="_blank" rel="noopener" class="btn-sm btn-live">⚡ Live App</a>` : ''}
        <a href="${p.github_url}" target="_blank" rel="noopener" class="btn-sm btn-repo">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          Repository
        </a>
      </div>
    </div>
  `).join('');
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
      <div class="skill-cat-title">⚡ ${s.category}</div>
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
    <div class="cert-card">
      <div class="cert-title">${c.title}</div>
      <span class="cert-issuer">${c.issuer}</span>
      <span class="cert-date">${c.date}</span>
    </div>
  `).join('');
}
