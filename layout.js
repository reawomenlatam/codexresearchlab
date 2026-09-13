/* REA Store - layout compartido: header, footer y barra de aviso.
   Cada página monta esto con <div data-header></div> / <div data-footer></div>.
   `active` se marca con <body data-nav="productos"> etc. */
(function () {
  const WA = window.REA.WHATSAPP;
  const nav = document.body.getAttribute('data-nav') || '';

  const link = (href, label, key) =>
    `<a href="${href}" class="${nav === key ? 'active' : ''}">${label}</a>`;

  const headerHTML = `
    <a class="skip-link" href="#mainContent">Skip to content</a>
    <div class="announce" id="announceContact"></div>
    <header class="header">
      <div class="container header-inner">
        <a href="/" class="logo" aria-label="Codex Research">
          <img class="logo-full" src="assets/logo-horizontal-dark.png" alt="Codex Research" width="914" height="108">
          <img class="logo-icon" src="assets/logo-mark.svg" alt="" width="641" height="558">
        </a>
        <nav class="nav">
          ${link('/', 'Home', 'inicio')}
          ${link('catalog/', 'Products', 'productos')}
          ${link('verify/', 'Verify batch', 'verify')}
          ${link('blog/', 'Blog', 'blog')}
          ${link('/#proceso', 'Process', 'proceso')}
          ${link('/#faq', 'FAQ', 'faq')}
        </nav>
        <div class="header-actions">
          <a class="btn btn-primary hide-sm" href="catalog/" style="padding:.6rem 1.2rem; font-size:.88rem;">Shop products</a>
          <div class="country-wrap">
            <button class="country-chip" id="countryChip" aria-haspopup="true" aria-expanded="false" aria-label="Change country"></button>
            <div class="country-menu" id="countryMenu" hidden>
              ${Object.values(window.REA.COUNTRIES).map((c) => `
                <button data-country="${c.code}">
                  <span class="flag">${c.flag}</span>
                  <span>${c.label}<span class="cm-note">$${c.shipping.flat} shipping · ${c.etaShort}</span></span>
                </button>`).join('')}
            </div>
          </div>
          <button class="cart-btn" aria-label="Open cart" data-cart-open>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span class="cart-count" data-cart-count>0</span>
          </button>
          <button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop" hidden></div>
    <nav class="mobile-nav" id="mobileNav" aria-label="Navigation" hidden>
      <div class="mobile-nav-head">
        <span class="mono-tag">Menu</span>
        <button class="mobile-nav-close" id="menuClose" aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      ${link('/', 'Home', 'inicio')}
      ${link('catalog/', 'Products', 'productos')}
      ${link('verify/', 'Verify batch', 'verify')}
      ${link('calculator/', 'Calculator', 'calculator')}
      ${link('blog/', 'Blog', 'blog')}
      ${link('/#proceso', 'Process', 'proceso')}
      ${link('/#faq', 'FAQ', 'faq')}
      <a class="btn btn-primary mobile-nav-cta" href="catalog/">Shop products</a>
    </nav>`;

  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="/" class="logo" aria-label="Codex Research"><img class="logo-full" src="assets/logo-horizontal-light.png" alt="Codex Research" width="914" height="108"></a>
            <p>Verified compounds, ready to ship. Human 1-to-1 support on WhatsApp.</p>
            <div class="footer-contact" id="footerContact"></div>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <a href="catalog/">Catalog</a>
            <a href="verify/">Verify a batch</a>
            <a href="calculator/">Reconstitution calculator</a>
            <a href="/#proceso">Our process</a>
            <a href="/#faq">FAQ</a>
            <a href="blog/">Blog</a>
            <a href="creators/">Creator program</a>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <a href="privacy/">Privacy Policy</a>
            <a href="terms/">Terms of Service</a>
            <a href="usage/">Usage notice</a>
            <a href="shipping/">Shipping &amp; refunds</a>
          </div>
        </div>
        <div class="footer-legal">
          <p class="copy">© Codex Research 2023. All rights reserved.</p>
          <p>
            All products on this site are sold solely for research and development use,
            and are not intended for human consumption of any kind. The statements on this site have not
            been evaluated by any health authority, and the products are not intended to diagnose,
            treat, cure or prevent any disease.
          </p>
        </div>
      </div>
    </footer>`;

  // Aviso de entrega + uso (no bloquea). Antes esto era un modal que tapaba la
  // tienda hasta elegir país: el país ahora se detecta solo (country.js) y este
  // aviso solo confirma a dónde enviamos y deja cambiarlo.
  const noticeHTML = `
    <div class="site-notice" id="siteNotice" hidden>
      <div class="site-notice-card">
        <div class="sn-row">
          <p class="sn-ship" id="snShip"></p>
          <button class="sn-ok" id="snOk">Got it</button>
        </div>
        <p class="sn-legal">
          Research use only \u00b7 by continuing you confirm you are of legal age \u00b7
          <a href="terms/">Terms</a>
        </p>
      </div>
    </div>`;

  function mount(sel, htmlStr) {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = htmlStr;
  }

  mount('[data-header]', headerHTML);
  // Destino del enlace de salto. Las páginas generadas tienen <main> con un id
  // propio (productMain, articleMain); las demás no tienen <main>, así que el
  // ancla se coloca justo detrás de la cabecera.
  if (!document.getElementById('mainContent')) {
    const mainEl = document.querySelector('main');
    if (mainEl) {
      // Fuera del <main>, no dentro: product.js y article.js reescriben su
      // innerHTML al hidratar y se llevarían el ancla por delante.
      const anchor = document.createElement('span');
      anchor.id = 'mainContent';
      anchor.tabIndex = -1;
      mainEl.insertAdjacentElement('beforebegin', anchor);
    } else {
      const header = document.querySelector('[data-header]');
      if (header) {
        const anchor = document.createElement('span');
        anchor.id = 'mainContent';
        anchor.tabIndex = -1;
        header.insertAdjacentElement('afterend', anchor);
      }
    }
  }
  mount('[data-footer]', footerHTML);
  document.body.insertAdjacentHTML('beforeend', noticeHTML);

  // ---------- Barra de aviso (una vez por visitante) ----------
  const notice = document.getElementById('siteNotice');
  const NOTICE_KEY = 'rea-notice-v1';
  function noticeShipLine() {
    const cfg = window.REACountry.config();
    return `${cfg.flag} Shipping to <b>${cfg.label}</b> \u00b7 $${cfg.shipping.flat} \u00b7 ${cfg.etaShort}. ` +
      `<button type="button" class="sn-change" id="snChange">Not your country?</button>`;
  }
  function closeNotice() {
    if (!notice || notice.hidden) return;
    notice.classList.remove('show');
    notice.hidden = true;
    try { localStorage.setItem(NOTICE_KEY, '1'); } catch (e) { /* modo privado */ }
    window.removeEventListener('scroll', onNoticeScroll);
  }
  // Un scroll largo ya es señal de que el visitante siguió adelante; además
  // evita que la barra choque con las barras fijas de producto y carrito.
  function onNoticeScroll() { if (window.scrollY > 400) closeNotice(); }

  if (notice) {
    let seen = false;
    try { seen = !!localStorage.getItem(NOTICE_KEY); } catch (e) { seen = false; }
    if (!seen) {
      const ship = document.getElementById('snShip');
      const paint = () => { if (ship) ship.innerHTML = noticeShipLine(); };
      paint();
      window.addEventListener('rea-country-change', paint);
      notice.hidden = false;
      requestAnimationFrame(() => notice.classList.add('show'));
      // En ficha y carrito hay una barra fija abajo con el botón de compra:
      // el aviso se sube para no taparla. Esas barras las pintan product.js y
      // cart-page.js después de este script, de ahí la espera.
      setTimeout(() => {
        if (!notice.hidden && document.querySelector('.pd-sticky, .cart-sticky')) {
          notice.classList.add('sn-raised');
        }
      }, 400);
      window.addEventListener('scroll', onNoticeScroll, { passive: true });
      notice.addEventListener('click', (e) => {
        if (e.target.closest('#snOk')) closeNotice();
        if (e.target.closest('#snChange')) {
          closeNotice();
          const c = document.getElementById('countryChip');
          // En el mismo tick, este click seguiría burbujeando hasta el document,
          // cuyo handler cierra el menú que acabamos de abrir.
          if (c) setTimeout(() => c.click(), 0);
        }
      });
    }
  }

  // ---------- Selector de país (header) ----------
  const chip = document.getElementById('countryChip');
  const cmenu = document.getElementById('countryMenu');
  function updateChip() {
    const cfg = window.REACountry.config();
    chip.innerHTML = `<span class="flag">${cfg.flag}</span><span class="cc">${cfg.code}</span>` +
      `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
  }
  function closeMenu2() { cmenu.hidden = true; chip.setAttribute('aria-expanded', 'false'); }
  chip.addEventListener('click', (e) => {
    e.stopPropagation();
    cmenu.hidden = !cmenu.hidden;
    chip.setAttribute('aria-expanded', String(!cmenu.hidden));
  });
  cmenu.querySelectorAll('[data-country]').forEach((b) => {
    b.addEventListener('click', () => { window.REACountry.set(b.getAttribute('data-country')); closeMenu2(); });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.country-wrap')) closeMenu2(); });
  window.addEventListener('rea-country-change', updateChip);
  updateChip();

  // ---------- Contacto por país: Panamá → WhatsApp · EE.UU. → correo ----------
  const EMAIL = 'sales@codexresearchlab.com';
  function updateContact() {
    const isPA = window.REACountry.code() === 'PA';
    const waLink = `<a href="https://wa.me/${WA}" target="_blank" rel="noopener">+507 6335-4625</a>`;
    const mailLink = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
    const ann = document.getElementById('announceContact');
    if (ann) {
      // Con la rebaja general activa, la barra anuncia la oferta. Al apagarla
      // (SALE.active = false en data.js) vuelve sola al código de bienvenida.
      const SALE = window.REA.SALE || {};
      // Fecha de fin en formato legible ("August 20"). Se parsea a mediodía UTC
      // para que la zona horaria del visitante no la corra un día.
      const saleEnds = SALE.until
        ? new Date(SALE.until + 'T12:00:00Z').toLocaleDateString('en-US',
            { month: 'long', day: 'numeric', timeZone: 'UTC' })
        : '';
      const promo = SALE.active
        ? `🔥 <b>${SALE.percent}% OFF</b> on everything${saleEnds ? ` · through ${saleEnds}` : ' · limited time'}`
        : `🎁 <b>10% off your first order</b> · code <b>WELCOME10</b>`;
      ann.innerHTML = isPA
        ? `${promo} · ${waLink}`
        : `${promo} · ${mailLink}`;
    }
    const foot = document.getElementById('footerContact');
    if (foot) foot.innerHTML = isPA ? waLink : mailLink;
  }
  window.addEventListener('rea-country-change', updateContact);
  updateContact();

  // ---------- Menú móvil ----------
  const mnav = document.getElementById('mobileNav');
  const mback = document.getElementById('mobileNavBackdrop');
  const mbtn = document.getElementById('menuBtn');
  function openMenu() {
    mnav.hidden = false; mback.hidden = false;
    mbtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mnav.hidden = true; mback.hidden = true;
    mbtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  mbtn.addEventListener('click', openMenu);
  document.getElementById('menuClose').addEventListener('click', closeMenu);
  mback.addEventListener('click', closeMenu);
  mnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
})();
