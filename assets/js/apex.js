/* ============================================================
   APEX DATA CLOUD ESPAÑA — comportamiento común
   Barra de progreso, estado de la navegación, menú móvil
   y animaciones de aparición al hacer scroll.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Barra de progreso de lectura ────────────────────────────
  var progressBar = document.getElementById('scrollProgress');
  function updateProgress() {
    if (!progressBar) return;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
  }

  // ── Estado de la barra de navegación ────────────────────────
  var nav = document.getElementById('mainNav');
  function updateNav() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.pageYOffset > 40);
  }

  // ── Menú móvil ──────────────────────────────────────────────
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('active');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function openMenu() {
    mobileMenu.classList.add('active');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', function () {
      if (mobileMenu.classList.contains('active')) { closeMenu(); } else { openMenu(); }
    });
    Array.prototype.forEach.call(document.querySelectorAll('.mobile-link'), function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) { closeMenu(); }
    });
  }

  // ── Aparición al hacer scroll ───────────────────────────────
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(revealEls, function (el) { observer.observe(el); });
  } else {
    Array.prototype.forEach.call(revealEls, function (el) { el.classList.add('visible'); });
  }

  // ── Scroll con throttle ─────────────────────────────────────
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateProgress();
        updateNav();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateNav();
  updateProgress();
})();
