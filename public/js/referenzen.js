/**
 * referenzen.js – Lädt Projekte von /api/projects und zeigt sie auf der Startseite an.
 * Wird in public/index.html eingebunden.
 * Injiziert einen Abschnitt "Unsere Referenzen" vor dem Testimonials-Bereich.
 */
(function () {
  'use strict';

  // Nur auf der Startseite ausführen
  var path = window.location.pathname;
  if (path !== '/' && path !== '/index.html') return;

  function buildCard(p) {
    var img = p.after_image || p.before_image
      ? '<img src="' + (p.after_image || p.before_image) + '" alt="' + p.title + '" loading="lazy" style="width:100%;height:200px;object-fit:cover;display:block">'
      : '';
    var cat = p.category
      ? '<span style="font-size:.75rem;font-weight:600;color:#16a34a;background:#dcfce7;padding:.2rem .65rem;border-radius:99px;display:inline-block;margin-bottom:.5rem">' + p.category + '</span>'
      : '';
    var loc = p.location
      ? '<p style="font-size:.875rem;color:#78716c;margin:.25rem 0">📍 ' + p.location + '</p>'
      : '';
    var desc = p.description
      ? '<p style="font-size:.875rem;color:#44403c;margin:.5rem 0 0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">' + p.description + '</p>'
      : '';
    return '<div style="background:#fff;border-radius:12px;box-shadow:0 1px 6px rgba(0,0,0,.1);overflow:hidden">'
      + img
      + '<div style="padding:1.25rem">'
      + cat
      + '<h3 style="font-size:1.05rem;font-weight:700;margin:.25rem 0;color:#1c1917">' + p.title + '</h3>'
      + loc + desc
      + '</div></div>';
  }

  function injectSection() {
    var anchor = document.getElementById('testimonials-section');
    if (!anchor) return;

    var section = document.createElement('section');
    section.id = 'referenzen-section';
    section.className = 'section';
    section.style.display = 'none';
    section.innerHTML =
      '<div class="container">'
      + '<div class="section-header">'
      + '<h2>Unsere Referenzen</h2>'
      + '<p>Aktuelle Projekte aus Ihrer Region.</p>'
      + '</div>'
      + '<div id="referenzen-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem;margin-top:2rem"></div>'
      + '</div>';

    anchor.parentNode.insertBefore(section, anchor);

    fetch('/api/projects')
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (projects) {
        if (!projects || !projects.length) return;
        var grid = document.getElementById('referenzen-grid');
        if (!grid) return;
        grid.innerHTML = projects.map(buildCard).join('');
        section.style.display = 'block';
      })
      .catch(function () {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSection);
  } else {
    injectSection();
  }
})();
