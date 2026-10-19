/* REA Store - layout compartido: header, footer y gate de investigador.
   Cada página monta esto con <div data-header></div> / <div data-footer></div>.
   `active` se marca con <body data-nav="productos"> etc. */
(function () {
  const WA = window.REA.WHATSAPP;
  const nav = document.body.getAttribute('data-nav') || '';
  const T = window.T;
  const U = window.REAi18n.url;
  const LANG = window.REAi18n.lang;
  // OJO: las páginas en español llevan <base href="/">, no "/es/" (lo necesitan
  // para que styles.css y los scripts no den 404). Por eso un enlace relativo
  // como "blog/" resuelve a /blog/, la versión inglesa: todo enlace interno
  // tiene que pasar por U(), que añade el prefijo /es/ sólo a las rutas que
  // existen traducidas. La raíz y los anclas usan HOME.
  const HOME = LANG === 'es' ? '/es/' : '/';

  const link = (href, label, key) =>
    `<a href="${href}" class="${nav === key ? 'active' : ''}">${label}</a>`;

  // Páginas que existen en los dos idiomas: sólo ahí se ofrece el cambio.
  const PAIRED = [/^\/$/, /^\/catalog\/$/, /^\/cart\/$/, /^\/verify\/$/, /^\/product\/[^/]+\/$/];
  function altLang() {
    const p = location.pathname;
    if (LANG === 'es') {
      // Hay páginas propias del mercado hispanohablante que no tienen gemela en
      // inglés (p. ej. /es/comprar-peptidos-panama/). Sin esto el selector
      // mandaría a una URL que no existe.
      if (document.body.dataset.noAlt) return null;
      const en = p.replace(/^\/es/, '') || '/';
      return { href: en, label: 'English', code: 'EN' };
    }
    // El blog y los artículos sólo tienen gemela cuando están traducidos, y eso
    // no se puede consultar aquí: el bundle que trae la lista carga después.
    // build-seo.js lo marca con data-has-es en el <body> de las que sí la tienen.
    if (document.body.dataset.hasEs) return { href: '/es' + p, label: 'Español', code: 'ES' };
    return PAIRED.some((r) => r.test(p)) ? { href: '/es' + p, label: 'Español', code: 'ES' } : null;
  }
  const alt = altLang();
  const langLink = alt ? `<a class="lang-switch" href="${alt.href}" hreflang="${alt.code.toLowerCase()}">${alt.label}</a>` : '';

  const headerHTML = `
    <a class="skip-link" href="#mainContent">${T('Skip to content')}</a>
    <div class="announce" id="announceContact"></div>
    <header class="header">
      <div class="container header-inner">
        <a href="${HOME}" class="logo" aria-label="Codex Research">
          <img class="logo-full" src="assets/logo-horizontal-dark.png" alt="Codex Research" width="914" height="108">
          <img class="logo-icon" src="assets/logo-mark.svg" alt="" width="641" height="558">
        </a>
        <nav class="nav">
          ${link(U('catalog/'), T('Products'), 'productos')}
          ${link(U('verify/'), T('Verify batch'), 'verify')}
          ${link(U('blog/'), T('Blog'), 'blog')}
          ${link(U('tools/'), T('Tools'), 'tools')}
          ${link(HOME + '#faq', T('FAQ'), 'faq')}
        </nav>
        <div class="header-actions">
          ${langLink}
          <a class="btn btn-primary hide-sm" href="${U('catalog/')}" style="padding:.6rem 1.2rem; font-size:.88rem;">${T('Shop products')}</a>
          <div class="country-wrap">
            <button class="country-chip" id="countryChip" aria-haspopup="true" aria-expanded="false" aria-label="${T('Change country')}"></button>
            <div class="country-menu" id="countryMenu" hidden>
              ${Object.values(window.REA.COUNTRIES).map((c) => `
                <button data-country="${c.code}">
                  <span class="flag">${c.flag}</span>
                  <span>${c.label}<span class="cm-note">$${c.shipping.flat} ${T('shipping')} · ${T(c.etaShort)}</span></span>
                </button>`).join('')}
            </div>
          </div>
          ${/* Botón de cuenta (#accBtn) retirado el 2026-10-17: ya no hace falta
               cuenta para pedir. El código que lo maneja abajo sigue y no hace
               nada si el botón no existe. */ ''}
          <button class="cart-btn" aria-label="${T('Open cart')}" data-cart-open>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span class="cart-count" data-cart-count>0</span>
          </button>
          <button class="menu-btn" id="menuBtn" aria-label="${T('Open menu')}" aria-expanded="false" aria-controls="mobileNav">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop" hidden></div>
    <nav class="mobile-nav" id="mobileNav" aria-label="${T('Navigation')}" hidden>
      <div class="mobile-nav-head">
        <span class="mono-tag">${T('Menu')}</span>
        <button class="mobile-nav-close" id="menuClose" aria-label="${T('Close menu')}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      ${link(HOME, T('Home'), 'inicio')}
      ${link(U('catalog/'), T('Products'), 'productos')}
      ${link(U('verify/'), T('Verify batch'), 'verify')}
      ${link(U('blog/'), T('Blog'), 'blog')}
      ${link(U('tools/'), T('Tools'), 'tools')}
      ${link(HOME + '#proceso', T('Process'), 'proceso')}
      ${link(HOME + '#faq', T('FAQ'), 'faq')}
      ${alt ? `<a class="mobile-nav-lang" href="${alt.href}" hreflang="${alt.code.toLowerCase()}">${alt.label}</a>` : ''}
      <a class="btn btn-primary mobile-nav-cta" href="${U('catalog/')}">${T('Shop products')}</a>
    </nav>`;

  // Identidad legal: sólo se pinta lo que exista en data.js (nada inventado).
  const B = (window.REA && window.REA.BUSINESS) || {};
  const bizBits = [B.legalName, B.address].filter(Boolean).join(' · ');
  const bizContact = [
    B.email ? `<a href="mailto:${B.email}">${B.email}</a>` : '',
    B.phone ? `<a href="tel:${String(B.phone).replace(/[^+0-9]/g, '')}">${B.phone}</a>` : '',
  ].filter(Boolean).join(' · ');
  const BIZ = (bizBits || bizContact)
    ? `<p class="footer-biz">${[bizBits, bizContact].filter(Boolean).join(' · ')}</p>`
    : '';

  // Footer inspirado en elixalabs.com.au (2026-10-18): bloque oscuro con
  // esquinas redondeadas, frase de marca, contacto, caja de uso en
  // investigación, tres columnas de enlaces y barra final con los medios de
  // pago reales (no hay tarjeta desde que se cayó Stripe).
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="${HOME}" class="footer-mark" aria-label="Codex Research"><img src="assets/logo-mark.svg" alt="" width="641" height="558"></a>
            <p class="footer-lede">${T('Research compounds with a third-party COA for every batch, and a person on the other end when you write.')}</p>
            <div class="footer-talk">
              <p class="footer-talk-h">${T('Questions before you order?')}</p>
              <p class="footer-talk-sub">${T('Verified compounds, ready to ship. Human 1-to-1 support on WhatsApp.').replace('1-to-1', '1\u2011to\u20111')}</p>
              <div class="footer-contact" id="footerContact"></div>
            </div>
            <div class="footer-ruo">
              <p class="footer-ruo-h">${T('Research use only')}</p>
              <p>${T('All products on this site are sold solely for research and development use, and are not intended for human consumption of any kind. The statements on this site have not been evaluated by any health authority, and the products are not intended to diagnose, treat, cure or prevent any disease.')}</p>
              <p>${T('Sold only to adults 21 or older for laboratory research. We cancel any order that refers to human use, dosing or administration.')}</p>
            </div>
          </div>
          <nav class="footer-cols" aria-label="${T('Footer')}">
            <div class="footer-col">
              <h4>${T('Shop')}</h4>
              <a href="${U('catalog/')}">${T('Catalog')}</a>
              <a href="${U('verify/')}">${T('Verify a batch')}</a>
              <a href="${U('tools/')}">${T('Free tools')}</a>
            </div>
            <div class="footer-col">
              <h4>${T('Company')}</h4>
              <a href="${HOME}#proceso">${T('Our process')}</a>
              <a href="${HOME}#faq">${T('FAQ')}</a>
              <a href="${U('blog/')}">${T('Blog')}</a>
            </div>
            <div class="footer-col">
              <h4>${T('Legal')}</h4>
              <a href="privacy/">${T('Privacy Policy')}</a>
              <a href="terms/">${T('Terms of Service')}</a>
              <a href="usage/">${T('Usage notice')}</a>
              <a href="shipping/">${T('Shipping &amp; refunds')}</a>
            </div>
          </nav>
        </div>
        <div class="footer-bottom">
          <div class="footer-legal">
            <p class="copy">© ${new Date().getFullYear()} Codex Research. ${T('All rights reserved.')}</p>
            ${BIZ}
          </div>
          <ul class="footer-pay" id="footerPay" aria-label="${T('Payment methods')}"></ul>
          <p class="footer-note">${T('Research use only. Not for human consumption.')}</p>
        </div>
      </div>
    </footer>`;

  // Gate de entrada: el visitante declara que es investigador y mayor de 21
  // antes de ver la tienda (pedido del dueño, 2026-10-19). Sustituye a la barra
  // de aviso, que informaba sin bloquear. El país sigue detectándose solo
  // (country.js); aquí sólo se confirma y se deja cambiar.
  const gateHTML = `
    <div class="rgate" id="researchGate" hidden>
      <div class="rgate-card" role="dialog" aria-modal="true" aria-labelledby="rgateTitle" aria-describedby="rgateText">
        <p class="rgate-kicker">${T('Research use only')}</p>
        <h2 class="rgate-title" id="rgateTitle">${T('Are you a researcher?')}</h2>
        <p class="rgate-text" id="rgateText">${T('Our compounds are sold for laboratory research only. They are not for human or veterinary use, and are not drugs, food or cosmetics.')}</p>
        <ul class="rgate-list">
          <li>${T('I am a researcher or I buy for a research laboratory.')}</li>
          <li>${T('I am 21 or older.')}</li>
          <li>${T('I will not use these products on people or animals.')}</li>
        </ul>
        <p class="rgate-ship" id="rgateShip"></p>
        <div class="rgate-actions">
          <button type="button" class="btn btn-primary rgate-yes" id="rgateYes">${T('I confirm, enter')}</button>
          <button type="button" class="rgate-no" id="rgateNo">${T('I am not a researcher')}</button>
        </div>
        <p class="rgate-legal">${T('By entering you accept our')} <a href="terms/">${T('Terms')}</a>.</p>
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
  document.body.insertAdjacentHTML('beforeend', gateHTML);

  // ---------- Gate de investigador (cada 30 días por visitante) ----------
  const gate = document.getElementById('researchGate');
  const GATE_KEY = 'rea-research-ok-v1';
  const GATE_DAYS = 30;
  function gateAccepted() {
    try {
      const t = Number(localStorage.getItem(GATE_KEY));
      return t > 0 && Date.now() - t < GATE_DAYS * 864e5;
    } catch (e) { return false; }
  }
  function gateShipLine() {
    const cfg = window.REACountry.config();
    const others = Object.values(window.REA.COUNTRIES).filter((c) => c.code !== cfg.code);
    return `${cfg.flag} ${T('Shipping to')} <b>${cfg.label}</b> \u00b7 $${cfg.shipping.flat} \u00b7 ${T(cfg.etaShort)}. ` +
      others.map((c) => `<button type="button" class="rgate-country" data-country="${c.code}">${T('Ship to')} ${c.label}</button>`).join(' ');
  }
  // Mientras el gate está abierto el foco no sale de él: lo de atrás está tapado.
  function trapFocus(e) {
    if (gate.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); return; }
    if (e.key !== 'Tab') return;
    const f = [...gate.querySelectorAll('button, [href]')].filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function closeGate() {
    try { localStorage.setItem(GATE_KEY, String(Date.now())); } catch (e) { /* modo privado */ }
    gate.hidden = true;
    document.documentElement.classList.remove('rgate-open');
    document.removeEventListener('keydown', trapFocus);
  }
  if (gate && !gateAccepted()) {
    const ship = document.getElementById('rgateShip');
    const paint = () => { if (ship) ship.innerHTML = gateShipLine(); };
    paint();
    window.addEventListener('rea-country-change', paint);
    gate.hidden = false;
    document.documentElement.classList.add('rgate-open');
    document.addEventListener('keydown', trapFocus);
    setTimeout(() => { const y = document.getElementById('rgateYes'); if (y) y.focus(); }, 60);
    gate.addEventListener('click', (e) => {
      const c = e.target.closest('.rgate-country');
      if (c) { window.REACountry.set(c.getAttribute('data-country')); return; }
      if (e.target.closest('#rgateYes')) { closeGate(); return; }
      if (e.target.closest('#rgateNo')) {
        // Salida cordial: no se entra, pero se puede corregir si fue un error.
        gate.querySelector('.rgate-card').innerHTML = `
          <p class="rgate-kicker">${T('Research use only')}</p>
          <h2 class="rgate-title" id="rgateTitle">${T('Thanks for visiting')}</h2>
          <p class="rgate-text">${T('This store sells only to researchers aged 21 or older. If you got here by mistake, you can close this tab.')}</p>
          <div class="rgate-actions">
            <button type="button" class="btn btn-primary" id="rgateBack">${T('Go back')}</button>
            <a class="rgate-no" href="https://www.google.com">${T('Leave site')}</a>
          </div>`;
        const back = document.getElementById('rgateBack');
        if (back) { back.addEventListener('click', () => location.reload()); back.focus(); }
      }
    });
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
  // EE. UU. escribe al Gmail del negocio (pedido 2026-10-05). El resto del sitio
  // (políticas, BUSINESS en data.js, llms.txt) sigue con sales@.
  const EMAIL = 'codexresearchlab@gmail.com';
  function updateContact() {
    const isPA = window.REACountry.code() === 'PA';
    const waLink = `<a href="https://wa.me/${WA}" target="_blank" rel="noopener">+507 6335-4625</a>`;
    const mailLink = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
    const ann = document.getElementById('announceContact');
    if (ann) {
      // La barra decía "solo instituciones · cuenta aprobada" desde la revisión
      // de Stripe (2026-10-02). Sin Stripe (2026-10-17) se quitó el gate y la
      // barra dice cómo se paga en el país del visitante.
      const promo = `<b>${T('For laboratory research use only')}</b> · ${isPA ? T('Pay with Yappy or crypto') : T('Pay with Zelle or crypto')}`;
      ann.innerHTML = isPA
        ? `${promo}<span class="ann-contact"> · ${waLink}</span>`
        : `${promo}<span class="ann-contact"> · ${mailLink}</span>`;
    }
    const foot = document.getElementById('footerContact');
    if (foot) foot.innerHTML = isPA ? waLink : mailLink;
    // Medios de pago según el país: los mismos que anuncia la barra superior.
    const pay = document.getElementById('footerPay');
    if (pay) pay.innerHTML = [isPA ? 'Yappy' : 'Zelle', 'USDC', 'USDT']
      .map(m => `<li>${m}</li>`).join('');
  }
  window.addEventListener('rea-country-change', updateContact);
  updateContact();

  /* ---------- Cuenta ---------- */
  // El botón cambia según haya sesión: entrar, o el nombre y salir.
  const accBtn = document.getElementById('accBtn');
  function updateAccount() {
    if (!accBtn || !window.REAAccount) return;
    const a = window.REAAccount && window.REAAccount.get();
    accBtn.title = a ? (a.name + ' · ' + T('Sign out')) : T('Sign in');
    accBtn.setAttribute('aria-label', accBtn.title);
    accBtn.classList.toggle('is-in', !!a);
  }
  if (accBtn) {
    accBtn.addEventListener('click', () => {
      if (!window.REAAccount) return;
      if (window.REAAccount.isIn() && window.REAAccount.approved && !window.REAAccount.approved()) {
        window.REAAccount.showStatus();          // en revisión: estado + salir
      } else if (window.REAAccount.isIn()) {
        if (confirm(T('Sign out of your account?'))) window.REAAccount.logout();
      } else {
        window.REAAccount.open('login');
      }
    });
    window.addEventListener('rea-account-change', updateAccount);
    updateAccount();
  }

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
