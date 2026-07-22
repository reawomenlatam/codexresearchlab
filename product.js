/* REA Store — detalle de producto. Lee ?slug= y arma la ficha. */
(function () {
  const { PRODUCTS, FAQS } = window.REA;
  const ui = window.REAui;

  const slug = new URLSearchParams(location.search).get('slug');
  const p = PRODUCTS.find((x) => x.slug === slug) || PRODUCTS[0];
  const main = document.getElementById('productMain');

  const money = (n) => '$' + n.toFixed(2);
  const oos = !!p.outOfStock;
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 4);

  // ---------- SEO meta (per-product; article.js pattern) ----------
  const SITE = 'https://codexresearchlab.com';
  const url = `${SITE}/product.html?slug=${p.slug}`;
  const img = `${SITE}/${p.photo || 'assets/og-default.png'}`;
  const metaTitle = `${p.name} for research — ${p.mg}/vial | Codex Research`;
  const metaDesc = p.overview;
  document.title = metaTitle;

  const setMeta = (name, val, attr = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
    el.setAttribute('content', val);
  };
  setMeta('description', metaDesc);
  setMeta('og:title', metaTitle, 'property');
  setMeta('og:description', metaDesc, 'property');
  setMeta('og:type', 'product', 'property');
  setMeta('og:url', url, 'property');
  setMeta('og:image', img, 'property');
  setMeta('twitter:card', 'summary_large_image');
  let canon = document.querySelector('link[rel="canonical"]');
  if (!canon) { canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
  canon.href = url;

  // ---------- JSON-LD: Product + AggregateOffer + Breadcrumbs (escape < ) ----------
  const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');
  const prices = p.sizes.map((s) => s.price);
  const productSchema = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: p.name, description: metaDesc, image: [img], sku: p.slug,
    category: 'Research peptides',
    brand: { '@type': 'Brand', name: 'Codex Research' },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'CAS number', value: p.cas },
      { '@type': 'PropertyValue', name: 'Molecular formula', value: p.formula },
      { '@type': 'PropertyValue', name: 'Molecular weight', value: p.weight },
    ],
    offers: {
      '@type': 'AggregateOffer', priceCurrency: 'USD',
      lowPrice: Math.min(...prices).toFixed(2), highPrice: Math.max(...prices).toFixed(2),
      offerCount: p.sizes.length, url,
      availability: oos ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Catalog', item: `${SITE}/catalog.html` },
      { '@type': 'ListItem', position: 3, name: p.name, item: url },
    ],
  };
  [productSchema, breadcrumbSchema].forEach((s) => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = jsonLd(s);
    document.head.appendChild(el);
  });

  main.innerHTML = `
    <div class="container">
      <nav class="breadcrumb">
        <a href="index.html">Home</a> <span>/</span>
        <a href="catalog.html">Catalog</a> <span>/</span>
        <span>${p.name}</span>
      </nav>
    </div>

    <section class="section product-detail">
      <div class="container pd-grid">
        <!-- Gallery -->
        <div class="pd-media">
          <div class="pd-media-main">${ui.media(p, p.sizes[0].label)}</div>
          <div class="pd-badges">
            ${oos ? '<span class="pd-badge oos">Out of stock</span>' : ''}
            <span class="pd-badge"><span class="dot"></span> 99% purity (HPLC)</span>
            <span class="pd-badge">📄 COA per batch</span>
          </div>
        </div>

        <!-- Buy -->
        <div class="pd-buy">
          <span class="mono-tag">${p.tag}</span>
          <h1>${p.name}</h1>
          <p class="pd-strength">${p.mg} per vial</p>

          <div class="pd-field">
            <label>Pack</label>
            <div class="pd-options pd-packs" id="pdSizes">
              ${p.sizes.map((s, i) => `<button class="pd-opt ${i === 0 ? 'active' : ''}" data-size="${s.label}" data-price="${s.price}">
                <span class="pd-opt-label">${s.label}</span>
                <span class="pd-opt-price">${money(s.price)}</span>
                ${s.save ? `<span class="pd-opt-save">Save ${s.save}</span>` : ''}
              </button>`).join('')}
            </div>
          </div>

          <div class="pd-field">
            <label>Quantity</label>
            <div class="qty-stepper qty-lg" id="pdQty">
              <button data-q="dec" aria-label="Decrease">−</button>
              <span id="pdQtyVal">1</span>
              <button data-q="inc" aria-label="Increase">+</button>
            </div>
          </div>

          <div class="pd-price-row">
            <div>
              <span class="pd-price" id="pdPrice">${money(p.sizes[0].price)}</span>
              <span class="pd-price-note">One-time · ships today</span>
            </div>
          </div>

          <button class="btn btn-primary pd-add" id="pdAdd"${oos ? ' disabled' : ''}>${oos ? 'Out of stock' : 'Add to cart'}</button>

          <ul class="pd-trust">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <span id="pdEtaText"></span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Secure payment · confirm on WhatsApp before paying
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Batch-verified with third-party COA
            </li>
          </ul>

          <div class="pd-note">
            <b>For research use only.</b> All products are intended solely for laboratory
            research and not for human or animal consumption. By purchasing, you agree to
            use them in compliance with applicable law.
          </div>

          <div class="pd-coa">
            <div>
              <span class="mono-tag">Certificate of analysis</span>
              <b>Third-party verified: purity, identity and quantity.</b>
            </div>
            <button class="btn btn-ghost" id="pdCoa">View COA</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Details -->
    <section class="section" style="padding-top:0;">
      <div class="container pd-info-grid">
        <div class="pd-info-main">
          <h2>Description</h2>
          <p>${p.overview}</p>

          <h3>Research areas</h3>
          <ul class="pd-research">
            ${p.research.map((r) => `<li>${r}</li>`).join('')}
          </ul>
        </div>
        <aside class="pd-info-side">
          <h4>Structure</h4>
          <dl class="pd-specs">
            <div><dt>CAS #</dt><dd>${p.cas}</dd></div>
            <div><dt>Molecular formula</dt><dd>${p.formula}</dd></div>
            <div><dt>Molecular weight</dt><dd>${p.weight}</dd></div>
            <div><dt>PubChem ID</dt><dd>${p.pubchem}</dd></div>
          </dl>
        </aside>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="section-head"><h2>Frequently asked questions</h2></div>
        <div class="faq-list" id="pdFaq"></div>
      </div>
    </section>

    <!-- Related -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="section-head" style="margin-bottom:1.6rem;"><h2>You may also like</h2></div>
        <div class="products-grid" id="pdRelated">
          ${related.map(ui.productCard).join('')}
        </div>
      </div>
    </section>

    <!-- Sticky buy bar (mobile only) -->
    <div class="pd-sticky" id="pdSticky">
      <div class="pd-sticky-info">
        <b>${p.name}</b>
        <span id="pdStickyPrice">${money(p.sizes[0].price)}</span>
      </div>
      <button class="btn btn-primary" id="pdStickyAdd"${oos ? ' disabled' : ''}>${oos ? 'Out of stock' : 'Add'}</button>
    </div>

    <!-- COA modal -->
    <div class="coa-backdrop" id="coaBackdrop" hidden></div>
    <div class="coa-modal" id="coaModal" role="dialog" aria-modal="true" aria-labelledby="coaTitle" hidden>
      <div class="coa-modal-head">
        <h3 id="coaTitle">Certificate of analysis</h3>
        <button class="cart-close" id="coaClose" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="coa-sheet">
        <div class="coa-sheet-head">
          <span class="coa-mark" aria-hidden="true"></span>
          <div>
            <b>${p.name}</b>
            <span class="mono-tag">Batch #A-2419 · ${p.tag}</span>
          </div>
        </div>
        <dl class="coa-rows">
          <div><dt>Method</dt><dd>HPLC + mass spectrometry</dd></div>
          <div><dt>Purity</dt><dd>99.1%</dd></div>
          <div><dt>Identity</dt><dd>Confirmed</dd></div>
          <div><dt>Endotoxins</dt><dd>&lt; 0.5 EU/mg</dd></div>
          <div><dt>Analysis date</dt><dd>Jul 10, 2026</dd></div>
        </dl>
        <p class="coa-note">Sample document. Your batch’s real COA is shared on WhatsApp when you confirm your order.</p>
        <a class="btn btn-primary coa-cta" href="https://wa.me/${window.REA.WHATSAPP}?text=${encodeURIComponent('Hi, I’d like the COA for ' + p.name)}" target="_blank" rel="noopener">Request my batch COA</a>
      </div>
    </div>
  `;

  // ---------- Estado de compra ----------
  let selectedSize = p.sizes[0];
  let qty = 1;
  const priceEl = document.getElementById('pdPrice');
  const qtyValEl = document.getElementById('pdQtyVal');

  const stickyPriceEl = document.getElementById('pdStickyPrice');
  function refreshPrice() {
    const total = money(selectedSize.price * qty);
    priceEl.textContent = total;
    stickyPriceEl.textContent = total;
    priceEl.classList.remove('bump'); void priceEl.offsetWidth; priceEl.classList.add('bump');
  }

  document.getElementById('pdSizes').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-size]');
    if (!btn) return;
    selectedSize = { label: btn.getAttribute('data-size'), price: +btn.getAttribute('data-price') };
    document.querySelectorAll('#pdSizes .pd-opt').forEach((b) => b.classList.toggle('active', b === btn));
    refreshPrice();
  });

  document.getElementById('pdQty').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-q]');
    if (!btn) return;
    qty = Math.max(1, qty + (btn.getAttribute('data-q') === 'inc' ? 1 : -1));
    qtyValEl.textContent = qty;
    refreshPrice();
  });

  const addToCart = () => { if (oos) return; window.REACart.add(p.slug, selectedSize.label, qty); };
  document.getElementById('pdAdd').addEventListener('click', addToCart);
  document.getElementById('pdStickyAdd').addEventListener('click', addToCart);

  // Entrega según el país seleccionado (se actualiza si cambia)
  function setEta() {
    const cfg = window.REACountry.config();
    document.getElementById('pdEtaText').textContent = `${cfg.flag} ${cfg.eta} · discreet packaging`;
  }
  setEta();
  window.addEventListener('rea-country-change', setEta);

  // Barra fija: aparece cuando el botón principal sale de vista (móvil)
  const mainAddBtn = document.getElementById('pdAdd');
  const sticky = document.getElementById('pdSticky');
  const io = new IntersectionObserver((entries) => {
    sticky.classList.toggle('show', !entries[0].isIntersecting);
  }, { rootMargin: '0px 0px -40px 0px' });
  io.observe(mainAddBtn);

  // Modal COA
  const coaModal = document.getElementById('coaModal');
  const coaBackdrop = document.getElementById('coaBackdrop');
  const openCoa = () => { coaModal.hidden = false; coaBackdrop.hidden = false; document.body.style.overflow = 'hidden'; };
  const closeCoa = () => { coaModal.hidden = true; coaBackdrop.hidden = true; document.body.style.overflow = ''; };
  document.getElementById('pdCoa').addEventListener('click', openCoa);
  document.getElementById('coaClose').addEventListener('click', closeCoa);
  coaBackdrop.addEventListener('click', closeCoa);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCoa(); });

  // FAQ + relacionados
  ui.faqAccordion(document.getElementById('pdFaq'), FAQS.slice(0, 5));
  ui.wireAddButtons(document.getElementById('pdRelated'));
})();
