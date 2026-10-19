/* Codex Research - shared micro-interactions.
   Scroll reveal, count-up stats, add-to-cart feedback (fly-to-cart + button),
   cart icon bounce, count pop, and image fade-in (skeleton). Respects reduced-motion. */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) document.documentElement.classList.add('js-motion');

  const REVEAL_SEL = '.trust-card,.product-card,.process-step,.blog-card,.lab-media,.lab-copy,' +
    '.blog-feature,.faq-item,.section-head,.tsm-proof,.cart-social,.pd-info-main,' +
    '.pd-info-side,.guarantee-card,.summary-card,.ship-progress,.cartpage-items,.disclaimer-band';

  // ---------- Video de la molécula del hero ----------
  // La portada pinta la imagen fija; aquí se le pone encima el video en bucle
  // cuando de verdad empieza a reproducirse. No se crea con reduced-motion ni
  // con ahorro de datos (pesa ~0,4-0,9 MB), y se elige la versión vertical en
  // móvil al crearlo (<video> no respeta media en <source>).
  (function heroVideo() {
    const bg = document.querySelector('.hero-bg');
    if (reduce || !bg) return;
    if (navigator.connection && navigator.connection.saveData) return;
    const tall = matchMedia('(max-width: 720px)').matches ? '-tall' : '';
    const v = document.createElement('video');
    v.className = 'hero-video';
    v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
    v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.setAttribute('aria-hidden', 'true');
    v.preload = 'auto';
    // MP4 (H.264) primero: lo decodifica cualquier teléfono por hardware. Con
    // el WebM delante, un Safari de iPhone que lo acepte pero no lo decodifique
    // se queda sin video: <video> no pasa a la siguiente <source> si falla la
    // decodificación (2026-10-18, «no se mueve en mi celular»).
    v.innerHTML =
      `<source src="assets/hero-molecule${tall}.mp4" type="video/mp4">` +
      `<source src="assets/hero-molecule${tall}.webm" type="video/webm">`;
    v.addEventListener('playing', () => v.classList.add('is-on'), { once: true });
    // Si falla también la última fuente no hay video posible: queda la foto.
    v.lastElementChild.addEventListener('error', () => v.remove());
    bg.insertAdjacentElement('afterend', v);
    // iPhone en modo de bajo consumo (y algunos Android) bloquean el autoplay:
    // en vez de quitar el video, se reintenta con el primer toque o scroll.
    const kick = () => {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    const p = v.play();
    if (p && p.catch) p.catch(() => {
      const evs = ['touchstart', 'pointerdown', 'scroll', 'keydown'];
      const once = () => { evs.forEach((e) => removeEventListener(e, once, true)); kick(); };
      evs.forEach((e) => addEventListener(e, once, { capture: true, passive: true }));
    });
  })();

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
          // Arranca cerca del objetivo, no en cero: son cifras de confianza y
          // durante la animación se leían solas ("2% batches with COA").
          const from = el.dataset.from !== undefined ? parseFloat(el.dataset.from) : target * 0.6;
          function tick(t) {
            const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
            el.textContent = fmt(from + (target - from) * eased);
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
    btn.textContent = window.T ? window.T('Added') : 'Added';
    setTimeout(() => {
      btn.innerHTML = orig; btn.classList.remove('added'); delete btn.dataset.busy;
    }, 1000);
  }

  // Delegación: solo feedback visual; la lógica del carrito vive en cart.js/handlers.
  // Sin sesión no se añade nada (sale el gate de cuenta), así que tampoco se
  // celebra: decir "✓ Added" con el carrito vacío es mentirle al cliente.
  const seAnade = () => !window.REAAccount || window.REAAccount.isIn();
  document.addEventListener('click', (e) => {
    const add = e.target.closest('[data-add]');
    const pd = e.target.closest('.pd-add, #pdStickyAdd');
    if (!(add || pd) || !seAnade()) return;
    const btn = add || pd;
    flyToCart(btn); addFeedback(btn); bounceCart();
  });

  window.addEventListener('rea-cart-change', () => {
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      if (reduce) return;
      el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
    });
  });

  // ---------- Imágenes: fade-in / skeleton ----------
  /* Las vistas repintan sus tarjetas con innerHTML cuando llega el stock en
     vivo (country.js dispara rea-country-change en cada carga), y esas <img>
     nuevas nacen en opacity:0. Escuchar load/error en captura a nivel de
     documento las alcanza a todas, sin depender de que cada vista avise. */
  const markLoaded = (e) => {
    const t = e.target;
    if (t && t.classList && t.classList.contains('product-photo')) t.classList.add('loaded');
  };
  document.addEventListener('load', markLoaded, true);
  document.addEventListener('error', markLoaded, true);

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

  // `images` re-marca como cargadas las .product-photo que aparezcan tras un
  // re-render (p. ej. el carrito al cambiar método de pago), evitando que el
  // fade-in las deje en opacity:0 para siempre.
  window.REAmotion = { flyToCart, bounceCart, refresh: init, images: setupImages };
})();
