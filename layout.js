/* REA Store — layout compartido: header, footer y age gate.
   Cada página monta esto con <div data-header></div> / <div data-footer></div>.
   `active` se marca con <body data-nav="productos"> etc. */
(function () {
  const WA = window.REA.WHATSAPP;
  const nav = document.body.getAttribute('data-nav') || '';

  const link = (href, label, key) =>
    `<a href="${href}" class="${nav === key ? 'active' : ''}">${label}</a>`;

  const headerHTML = `
    <div class="announce">
      Need help? Message us on WhatsApp and we’ll reply in minutes ·
      <a href="https://wa.me/${WA}" target="_blank" rel="noopener">+507 6878-3214</a>
    </div>
    <header class="header">
      <div class="container header-inner">
        <a href="index.html" class="logo" aria-label="Codex Research">
          <img class="logo-full" src="assets/logo-horizontal-dark.png" alt="Codex Research">
          <img class="logo-icon" src="assets/logo-mark.svg" alt="">
        </a>
        <nav class="nav">
          ${link('index.html', 'Home', 'inicio')}
          ${link('catalog.html', 'Products', 'productos')}
          ${link('blog.html', 'Blog', 'blog')}
          ${link('index.html#proceso', 'Process', 'proceso')}
          ${link('index.html#faq', 'FAQ', 'faq')}
        </nav>
        <div class="header-actions">
          <a class="btn btn-primary hide-sm" href="catalog.html" style="padding:.6rem 1.2rem; font-size:.88rem;">Shop products</a>
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
      ${link('index.html', 'Home', 'inicio')}
      ${link('catalog.html', 'Products', 'productos')}
      ${link('blog.html', 'Blog', 'blog')}
      ${link('index.html#proceso', 'Process', 'proceso')}
      ${link('index.html#faq', 'FAQ', 'faq')}
      <a class="btn btn-primary mobile-nav-cta" href="catalog.html">Shop products</a>
    </nav>`;

  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="logo" aria-label="Codex Research"><img class="logo-full" src="assets/logo-horizontal-light.png" alt="Codex Research"></a>
            <p>Verified compounds, ready to ship. Human 1-to-1 support on WhatsApp.</p>
            <div class="footer-contact">
              <a href="https://wa.me/${WA}" target="_blank" rel="noopener">+507 6878-3214</a>
              <a href="mailto:meccastudiospa@gmail.com">meccastudiospa@gmail.com</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <a href="catalog.html">Catalog</a>
            <a href="index.html#proceso">Our process</a>
            <a href="index.html#faq">FAQ</a>
            <a href="blog.html">Blog</a>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Usage notice</a>
          </div>
        </div>
        <div class="footer-legal">
          <p class="copy">© Codex Research 2026. All rights reserved.</p>
          <p>
            All products on this site are sold solely for research and development use,
            and are not intended for human consumption of any kind. The statements on this site have not
            been evaluated by any health authority, and the products are not intended to diagnose,
            treat, cure or prevent any disease.
          </p>
        </div>
      </div>
    </footer>`;

  const gateHTML = `
    <div class="gate-overlay" id="gateOverlay" hidden>
      <div class="gate-card" role="dialog" aria-modal="true" aria-labelledby="gateTitle">
        <h2 id="gateTitle">Confirm you are 21 or older</h2>
        <p>
          By entering, you confirm you are at least 21 and acting for research purposes.
          All products are sold strictly for research use, not for human, animal, clinical
          or therapeutic use. You take responsibility for lawful, compliant handling.
        </p>
        <p class="gate-q">Where are you shopping from?</p>
        <div class="gate-countries">
          ${Object.values(window.REA.COUNTRIES).map((c) => `
            <button class="gate-country" data-country="${c.code}">
              <span class="flag">${c.flag}</span>
              <span><b>${c.label}</b><small>$${c.shipping.flat} shipping · ${c.etaShort}</small></span>
            </button>`).join('')}
        </div>
        <button class="gate-under" id="gateNo">I'm under 21</button>
      </div>
    </div>`;

  function mount(sel, htmlStr) {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = htmlStr;
  }

  mount('[data-header]', headerHTML);
  mount('[data-footer]', footerHTML);
  document.body.insertAdjacentHTML('beforeend', gateHTML);

  // Age gate + selección de país (una vez por sesión; elegir país confirma la edad)
  const gate = document.getElementById('gateOverlay');
  if (!sessionStorage.getItem('rea-gate-ok')) {
    gate.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  gate.querySelectorAll('.gate-country').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.REACountry.set(btn.getAttribute('data-country'));
      sessionStorage.setItem('rea-gate-ok', '1');
      gate.hidden = true;
      document.body.style.overflow = '';
    });
  });
  document.getElementById('gateNo').addEventListener('click', () => {
    // Salida cordial en lugar de redirigir de golpe
    gate.querySelector('.gate-card').innerHTML = `
      <h2>Thanks for visiting</h2>
      <p>This catalog is for research only and requires you to be 21 or older.
      If you reached this page by mistake, you can close this tab. Changed your mind?</p>
      <div class="gate-actions">
        <button class="btn btn-primary" id="gateBack">Yes, I'm 21 or older</button>
        <a class="btn btn-ghost" href="https://www.google.com">Leave site</a>
      </div>`;
    document.getElementById('gateBack').addEventListener('click', () => location.reload());
  });

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
