/* Codex Research — shared micro-interactions.
   Scroll reveal, count-up stats, add-to-cart feedback (fly-to-cart + button),
   cart icon bounce, count pop, and image fade-in (skeleton). Respects reduced-motion. */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) document.documentElement.classList.add('js-motion');

  const REVEAL_SEL = '.trust-card,.product-card,.tsm-card,.process-step,.blog-card,' +
    '.blog-feature,.faq-item,.section-head,.tsm-proof,.cart-social,.pd-info-main,' +
    '.pd-info-side,.guarantee-card,.summary-card,.ship-progress,.cartpage-items,.disclaimer-band';

  // ---------- Scroll reveal (fade-up, con stagger) ----------
  function setupReveal() {
    if (reduce || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -7% 0px', threshold: 0.06 });

    document.querySelectorAll(REVEAL_SEL).forEach((el) => {
      if (el.classList.contains('reveal')) return;
      el.classList.add('reveal');
      const sibs = [].slice.call(el.parentElement.children).filter((c) => c.matches(REVEAL_SEL));
      const i = sibs.indexOf(el);
      if (i > 0) el.style.transitionDelay = Math.min(i * 55, 300) + 'ms';
      io.observe(el);
    });
  }

  // ---------- Count-up de estadísticas ----------
  function setupCounters() {
    document.querySelectorAll('.count-up').forEach((el) => {
      if (el.dataset.counted) return;
      const raw = el.textContent.trim();
      const m = raw.match(/[\d.,]+/);
      if (!m) return;
      const numStr = m[0].replace(/,/g, '');
      const target = parseFloat(numStr);
      if (isNaN(target)) return;
      const decimals = (numStr.split('.')[1] || '').length;
      const grouped = m[0].indexOf(',') >= 0;
      const prefix = raw.slice(0, m.index), suffix = raw.slice(m.index + m[0].length);
      const fmt = (v) => {
        let s = decimals ? v.toFixed(decimals) : String(Math.round(v));
        if (grouped) s = Number(s).toLocaleString('en-US');
        return prefix + s + suffix;
      };
      if (reduce || !('IntersectionObserver' in window)) { el.dataset.counted = 1; return; }
      const io = new IntersectionObserver((ents) => {
        ents.forEach((e) => {
          if (!e.isIntersecting) return;
          io.disconnect(); el.dataset.counted = 1;
          const dur = 950, t0 = performance.now();
          function tick(t) {
            const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
            el.textContent = fmt(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          // Garantía: si rAF se pausa (pestaña en segundo plano), nunca queda un valor a medias
          setTimeout(() => { el.textContent = fmt(target); }, dur + 300);
        });
      }, { threshold: 0.6 });
      io.observe(el);
    });
  }

  // ---------- Carrito: fly-to-cart, bounce, count pop ----------
  const cartBtn = () => document.querySelector('[data-cart-open]');

  function flyToCart(fromEl) {
    const cart = cartBtn();
    if (reduce || !cart || !fromEl) return;
    const a = fromEl.getBoundingClientRect(), b = cart.getBoundingClientRect();
    const sx = a.left + a.width / 2, sy = a.top + a.height / 2;
    const dot = document.createElement('div');
    dot.className = 'fly-dot';
    dot.style.left = sx + 'px'; dot.style.top = sy + 'px';
    document.body.appendChild(dot);
    requestAnimationFrame(() => {
      dot.style.transform = 'translate(' + (b.left + b.width / 2 - sx) + 'px,' + (b.top + b.height / 2 - sy) + 'px) scale(.25)';
      dot.style.opacity = '.15';
    });
    setTimeout(() => dot.remove(), 650);
  }

  function bounceCart() {
    const c = cartBtn();
    if (!c || reduce) return;
    c.classList.remove('bounce'); void c.offsetWidth; c.classList.add('bounce');
  }

  function addFeedback(btn) {
    if (btn.dataset.busy) return;
    btn.dataset.busy = '1';
    const orig = btn.innerHTML;
    btn.classList.add('added');
    btn.textContent = btn.classList.contains('add-btn') ? '✓' : '✓ Added';
    setTimeout(() => {
      btn.innerHTML = orig; btn.classList.remove('added'); delete btn.dataset.busy;
    }, 1000);
  }

  // Delegación: solo feedback visual; la lógica del carrito vive en cart.js/handlers
  document.addEventListener('click', (e) => {
    const add = e.target.closest('[data-add]');
    const pd = e.target.closest('.pd-add, #pdStickyAdd');
    if (add) { flyToCart(add); addFeedback(add); bounceCart(); }
    else if (pd) { flyToCart(pd); addFeedback(pd); bounceCart(); }
  });

  window.addEventListener('rea-cart-change', () => {
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      if (reduce) return;
      el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
    });
  });

  // ---------- Imágenes: fade-in / skeleton ----------
  function setupImages() {
    document.querySelectorAll('.product-photo').forEach((img) => {
      const done = () => img.classList.add('loaded');
      if (img.complete && img.naturalWidth > 0) done();
      else { img.addEventListener('load', done, { once: true }); img.addEventListener('error', done, { once: true }); }
    });
  }

  function init() { setupReveal(); setupCounters(); setupImages(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.REAmotion = { flyToCart, bounceCart, refresh: init };
})();
