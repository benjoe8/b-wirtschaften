/**
 * b-wirtschaften.de — Main JavaScript
 * Handles: mobile nav, scroll effects, form submission, dynamic content loading
 */

// ── Mobile Navigation ──
function toggleMobile() {
  const nav = document.getElementById('mobile-nav');
  nav.classList.toggle('open');
}
function closeMobile() {
  document.getElementById('mobile-nav').classList.remove('open');
}

// ── Header Scroll Effect ──
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Contact Form Submission ──
async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (res.ok) {
      form.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } else {
      // Fallback: mailto
      window.location.href = `mailto:post@b-wirtschaften.de?subject=Anfrage: ${data.service || 'Allgemein'}&body=${encodeURIComponent(`Name: ${data.name}\nE-Mail: ${data.email}\nTelefon: ${data.phone || '-'}\n\n${data.message}`)}`;
    }
  } catch {
    // Fallback: mailto
    window.location.href = `mailto:post@b-wirtschaften.de?subject=Anfrage über Website&body=${encodeURIComponent(`Name: ${data.name}\nE-Mail: ${data.email}\nTelefon: ${data.phone || '-'}\n\n${data.message}`)}`;
  }
}

// ── Load Dynamic Content ──

// Testimonials
async function loadTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;
  
  try {
    const res = await fetch('/data/testimonials.json');
    const data = await res.json();
    const active = data.filter(t => t.active);
    
    if (active.length === 0) return; // Keep placeholder
    
    container.innerHTML = '<div class="testimonials-grid">' + active.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
        <p class="testimonial-text">"${escapeHtml(t.text)}"</p>
        <p class="testimonial-author">${escapeHtml(t.author)}</p>
        <p class="testimonial-meta">${escapeHtml(t.location)}${t.service ? ' · ' + escapeHtml(t.service) : ''}</p>
      </div>
    `).join('') + '</div>';
  } catch (err) {
    console.log('Testimonials not loaded:', err.message);
  }
}

// Projects
async function loadProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  
  try {
    const res = await fetch('/data/projects.json');
    const data = await res.json();
    const active = data.filter(p => p.active && (p.before_image || p.after_image));
    
    if (active.length === 0) return; // Keep placeholder
    
    container.innerHTML = '<div class="projects-grid">' + active.map(p => `
      <div class="project-card">
        <div class="project-card-img">
          <img src="${escapeHtml(p.after_image || p.before_image)}" alt="${escapeHtml(p.title)}" loading="lazy">
        </div>
        <div class="project-card-body">
          <span class="project-tag">${escapeHtml(p.category)}</span>
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.description)}</p>
          ${p.location ? `<p style="font-size:.8125rem;color:var(--stone-500);margin-top:.5rem">📍 ${escapeHtml(p.location)}</p>` : ''}
        </div>
      </div>
    `).join('') + '</div>';
  } catch (err) {
    console.log('Projects not loaded:', err.message);
  }
}

// Rental Products
async function loadProducts() {
  const container = document.getElementById('rental-products-container');
  if (!container) return;
  
  try {
    const res = await fetch('/data/products.json');
    const data = await res.json();
    
    if (data.length === 0) {
      container.innerHTML = '<p>Aktuell sind keine Produkte verfügbar.</p>';
      return;
    }
    
    container.innerHTML = '<div class="rental-grid">' + data.map(p => `
      <div class="rental-card">
        <div class="rental-card-img">
          ${p.image ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">` : ''}
          ${p.available ? '<span class="rental-badge">Verfügbar</span>' : ''}
        </div>
        <div class="rental-card-body">
          <span class="rental-category">${escapeHtml(p.category)}</span>
          <h3>${escapeHtml(p.name)}</h3>
          <p>${escapeHtml(p.description)}</p>
          <ul class="rental-features">
            ${(p.features || []).slice(0, 4).map(f => `<li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>${escapeHtml(f)}</li>`).join('')}
          </ul>
          <div class="rental-pricing">
            <div>
              <span class="rental-price">${p.daily_rate.toFixed(0)}€ <small>/Tag</small></span>
              <span style="display:block;font-size:.75rem;color:var(--stone-500)">${p.weekly_rate.toFixed(0)}€ /Woche</span>
            </div>
            <a href="mailto:${escapeHtml(p.email)}?subject=Mietanfrage: ${escapeHtml(p.name)}" class="rental-book">Anfragen</a>
          </div>
        </div>
      </div>
    `).join('') + '</div>';
  } catch (err) {
    console.log('Products not loaded:', err.message);
    container.innerHTML = '<p>Fehler beim Laden der Produkte.</p>';
  }
}

// ── Helper ──
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── FAQ Accordion ──
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.faq-question');
  if (!btn) return;
  btn.classList.toggle('open');
  const answer = btn.nextElementSibling;
  if (answer) answer.classList.toggle('open');
});

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  loadTestimonials();
  loadProjects();
  loadProducts();
});
