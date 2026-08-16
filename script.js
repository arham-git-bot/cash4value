/* ============================================================
   Cash4Value — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Current year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky nav state ---------- */
  var navbar = document.getElementById('navbar');
  var onScroll = function () {
    if (navbar) navbar.classList.toggle('is-scrolled', window.scrollY > 12);

    // scroll-to-top visibility
    if (toTop) {
      var show = window.scrollY > 600;
      toTop.classList.toggle('opacity-0', !show);
      toTop.classList.toggle('translate-y-4', !show);
      toTop.classList.toggle('pointer-events-none', !show);
    }
  };

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuIcon = document.getElementById('menuIcon');
  var menuOpen = false;

  var ICON_MENU = 'M4 7h16M4 12h16M4 17h16';
  var ICON_CLOSE = 'M6 6l12 12M18 6L6 18';

  function setMenu(open) {
    menuOpen = open;
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
    if (menuIcon) menuIcon.querySelector('path').setAttribute('d', open ? ICON_CLOSE : ICON_MENU);
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', function () { setMenu(!menuOpen); });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuOpen) setMenu(false);
  });

  /* ---------- Scroll to top ---------- */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- FAQ: single-open accordion ---------- */
  var faqItems = document.querySelectorAll('#faqList .faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  /* ---------- Lead form validation + submit ---------- */
  var form = document.getElementById('leadForm');
  if (!form) return;

  var success = document.getElementById('formSuccess');

  function setError(name, msg) {
    var input = form.querySelector('[name="' + name + '"]');
    var errEl = form.querySelector('.error[data-for="' + name + '"]');
    if (input) input.classList.toggle('invalid', !!msg);
    if (errEl) errEl.textContent = msg || '';
  }

  // Translation helper — falls back to English strings if i18n isn't loaded
  function t(key, fallback) {
    return (window.I18N && window.I18N.t) ? window.I18N.t(key) : fallback;
  }

  function validate() {
    var ok = true;

    var name = form.fullName.value.trim();
    if (!name) { setError('fullName', t('form.err.name', 'Please enter your name.')); ok = false; }
    else setError('fullName', '');

    var mobile = form.mobile.value.trim();
    if (!mobile) { setError('mobile', t('form.err.mobileReq', 'Please enter a mobile number.')); ok = false; }
    else if (mobile.replace(/[^0-9]/g, '').length < 7) { setError('mobile', t('form.err.mobileValid', 'Please enter a valid number.')); ok = false; }
    else setError('mobile', '');

    var email = form.email.value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('email', t('form.err.email', 'Please enter a valid email.')); ok = false;
    } else setError('email', '');

    return ok;
  }

  // Live-clear errors as the user types
  ['fullName', 'mobile', 'email'].forEach(function (n) {
    var el = form.querySelector('[name="' + n + '"]');
    if (el) el.addEventListener('input', function () {
      if (el.classList.contains('invalid')) setError(n, '');
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) {
      var firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    var label = btn.querySelector('.btn-label');
    var arrow = btn.querySelector('.btn-arrow');
    var spinner = btn.querySelector('.btn-spinner');

    // loading state
    btn.disabled = true;
    if (label) label.textContent = t('form.sending', 'Sending…');
    if (arrow) arrow.classList.add('hidden');
    if (spinner) spinner.classList.remove('hidden');

    // Simulated submission — replace with real endpoint (fetch/POST) when ready.
    setTimeout(function () {
      form.querySelectorAll('.field').forEach(function (f) { f.style.display = 'none'; });
      btn.style.display = 'none';
      var note = form.querySelector('p.text-center');
      if (note) note.style.display = 'none';
      if (success) {
        success.classList.remove('hidden');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1100);
  });
})();
