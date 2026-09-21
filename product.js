/* REA Store - detalle de producto. Lee ?slug= y arma la ficha. */
(function () {
  const { PRODUCTS, batchFor } = window.REA;
  const ui = window.REAui;
  const T = window.T;
  const U = window.REAi18n.url;

  // Slug: página estática (data-slug) o fallback /product.html?slug= (shim)
  const slug = document.body.getAttribute('data-slug') || new URLSearchParams(location.search).get('slug');
  const p = PRODUCTS.find((x) => x.slug === slug) || PRODUCTS[0];
  const main = document.getElementById('productMain');

  const money = (n) => '$' + n.toFixed(2);
  const oos = !!p.outOfStock;
  // Anclaje del pack: la referencia honesta es lo que costaría comprar esos
  // mismos vials sueltos. Si hay rebaja general, manda su `list` (precio previo).
  const packUnits = (label) => { const m = /(\d+)\s*vial/i.exec(label); return m ? parseInt(m[1], 10) : 1; };
  const unitPrice = p.sizes[0].price;
  const refList = (s) => (s.list != null ? s.list : (packUnits(s.label) > 1 ? unitPrice * packUnits(s.label) : null));
  const perVial = (s) => (packUnits(s.label) > 1
    ? window.T('{n} per vial', { n: money(s.price / packUnits(s.label)) }) : '');
  // Regla de los 100: por encima de $100 el ahorro absoluto pesa más que el
  // porcentaje ($35.76 se lee mayor que 8%), y por debajo pasa lo contrario
  // ($2.40 se lee menor que 8%), así que el pack barato conserva el porcentaje.
  // El absoluto sale del mismo ancla honesta que el precio tachado, de modo que
  // no puede desviarse de él ni de `prices.json`.
  const saveAmount = (s) => {
    const r = refList(s);
    if (!r || r <= s.price || s.price < 100) return null;
    return money(r - s.price);
  };
  // La opción que más ahorra se marca como recomendada, pero NO se preselecciona:
  // la entrada barata sigue siendo el vial suelto (compromiso pequeño primero).
  const savedValue = (s) => (refList(s) ? Math.max(0, refList(s) - s.price) : 0);
  const bestIdx = p.sizes.reduce((best, s, i) => (savedValue(s) > savedValue(p.sizes[best]) ? i : best), 0);
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 4);
  // Lote real en registro: la prueba se enseña ANTES de pagar, no después.
  // `purity`, `date` y `lab` son opcionales en data.js y solo se pintan si existen.
  const batch = (typeof batchFor === 'function' && batchFor(p.slug, p.mg)) || null;

  // Meta Pixel: evento ViewContent al ver la ficha de producto
  if (typeof fbq === 'function') {
    fbq('track', 'ViewContent', {
      content_ids: [p.slug], content_name: p.name, content_type: 'product',
      value: p.sizes[0].price, currency: 'USD',
    });
  }
  // GA4: view_item (mismo momento que ViewContent)
  if (typeof gtag === 'function') {
    gtag('event', 'view_item', {
      currency: 'USD', value: p.sizes[0].price,
      items: [{ item_id: p.slug, item_name: p.name, price: p.sizes[0].price }],
    });
  }

  // ---------- SEO meta (per-product; article.js pattern) ----------
  const SITE = 'https://codexresearchlab.com';
  const url = `${SITE}/product/${p.slug}/`;
  const img = `${SITE}/${p.photo || 'assets/og-default.png'}`;
  const esPage = window.REAi18n.lang === 'es';
  const metaTitle = esPage
    ? `${p.name} para investigación, ${p.mg}/vial | Codex Research`
    : `${p.name} for research, ${p.mg}/vial | Codex Research`;
  const metaDesc = window.REA.overview(p);
  // Las fichas generadas ya traen su title/description/canonical horneados por
  // build-seo.js; sólo el fallback product.html?slug= necesita que se escriban.
  const baked = !!document.body.dataset.slug;
  if (!baked) document.title = metaTitle;

  const setMeta = (name, val, attr = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
    el.setAttribute('content', val);
  };
  if (!baked) {
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
  }

  // ---------- JSON-LD: Product + AggregateOffer + Breadcrumbs (escape < ) ----------
  const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');
  const prices = p.sizes.map((s) => s.price);
  const productSchema = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: p.name, description: metaDesc, image: [img], sku: p.slug,
    category: 'Research peptides',
    brand: { '@type': 'Brand', name: 'Codex Research' },
    additionalProperty: [
      ...(p.cas ? [{ '@type': 'PropertyValue', name: 'CAS number', value: p.cas }] : []),
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
      { '@type': 'ListItem', position: 2, name: 'Catalog', item: `${SITE}/catalog/` },
      { '@type': 'ListItem', position: 3, name: p.name, item: url },
    ],
  };
  // En páginas estáticas el JSON-LD ya viene horneado; solo inyectarlo en el fallback.
  if (!document.body.dataset.slug) {
    [productSchema, breadcrumbSchema].forEach((s) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.textContent = jsonLd(s);
      document.head.appendChild(el);
    });
  }

  main.innerHTML = `
    <div class="container">
      <nav class="breadcrumb">
        <a href="${window.REAi18n.lang === 'es' ? '/es/' : '/'}">${T('Home')}</a> <span>/</span>
        <a href="${U('catalog/')}">${T('Catalog')}</a> <span>/</span>
        <span>${p.name}</span>
      </nav>
    </div>

    <section class="section product-detail">
      <div class="container pd-grid">
        <!-- Gallery -->
        <div class="pd-media">
          <div class="pd-media-main">${ui.media(p, p.sizes[0].label)}</div>
          <div class="pd-badges">
            ${oos ? `<span class="pd-badge oos">${T('Out of stock')}</span>` : ''}
            <span class="pd-badge"><span class="dot"></span> ${T('99% purity (HPLC)')}</span>
            <button type="button" class="pd-badge pd-badge-btn" data-coa>${T('COA per batch')}</button>
          </div>
        </div>

        <!-- Buy -->
        <div class="pd-buy">
          <span class="mono-tag">${T(p.tag)}</span>
          <h1>${p.name}</h1>
          <p class="pd-strength">${p.mg} ${T('per vial')}</p>

          <div class="pd-field">
            <label>${T('Pack')}</label>
            <div class="pd-options pd-packs" id="pdSizes">
              ${p.sizes.map((s, i) => `<button class="pd-opt ${i === 0 ? 'active' : ''}${i === bestIdx && savedValue(s) > 0 ? ' pd-opt-best' : ''}" data-size="${s.label}" data-price="${s.price}">
                ${i === bestIdx && savedValue(s) > 0 ? `<span class="pd-opt-flag">${T('Best value')}</span>` : ''}
                <span class="pd-opt-label">${T(s.label)}</span>
                <span class="pd-opt-price">${money(s.price)}${refList(s) ? ` <s class="was">${money(refList(s))}</s>` : ''}</span>
                ${perVial(s) ? `<span class="pd-opt-unit">${perVial(s)}</span>` : ''}
                ${saveAmount(s) || s.save ? `<span class="pd-opt-save">${T('Save {n}', { n: saveAmount(s) || s.save })}</span>` : ''}
              </button>`).join('')}
            </div>
          </div>

          <div class="pd-field">
            <label>${T('Quantity')}</label>
            <div class="qty-stepper qty-lg" id="pdQty">
              <button data-q="dec" aria-label="${T('Decrease')}">−</button>
              <span id="pdQtyVal">1</span>
              <button data-q="inc" aria-label="${T('Increase')}">+</button>
            </div>
          </div>

          <div class="pd-price-row">
            <div>
              <span class="pd-price" id="pdPrice">${money(p.sizes[0].price)}</span>
              <span class="pd-price-was" id="pdPriceWas">${refList(p.sizes[0]) ? money(refList(p.sizes[0])) : ''}</span>
              <span class="pd-price-note"><span id="pdPriceUnit">${perVial(p.sizes[0])}</span>${T('One-time · ships today')}</span>
            </div>
          </div>

          <button class="btn btn-primary pd-add" id="pdAdd"${oos ? ' disabled' : ''}>${oos ? T('Out of stock') : T('Add to cart')}</button>

          <ul class="pd-trust">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <span id="pdEtaText"></span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              ${T('Secure checkout · card or crypto, paid on this site')}
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>${batch ? T('Batch {n} · third-party COA', { n: batch.code }) : T('Batch-verified with third-party COA')} \u00b7
                <button type="button" class="pd-trust-link" data-coa>${T('see the certificate')}</button></span>
            </li>
          </ul>

          <div class="pd-note">
            <b>${T('For research use only.')}</b> ${T('All products are intended solely for laboratory research and not for human or animal consumption. By purchasing, you agree to use them in compliance with applicable law.')}
          </div>

          <div class="pd-coa">
            <div>
              <span class="mono-tag">${T('Certificate of analysis')}</span>
              <b>${T('Third-party verified: purity, identity and quantity.')}</b>
            </div>
            <button class="btn btn-ghost" id="pdCoa">${T('View COA')}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Details -->
    <section class="section" style="padding-top:0;">
      <div class="container pd-info-grid">
        <div class="pd-info-main">
          <h2>${T('Description')}</h2>
          <p>${window.REA.overview(p)}</p>

          <h3>${T('Research areas')}</h3>
          <ul class="pd-research">
            ${p.research.map((r) => `<li>${T(r)}</li>`).join('')}
          </ul>
        </div>
        <aside class="pd-info-side">
          <h4>${T('Structure')}</h4>
          <dl class="pd-specs">
            ${p.cas ? `<div><dt>CAS #</dt><dd>${p.cas}</dd></div>` : ''}
            <div><dt>${T('Molecular formula')}</dt><dd>${p.formula}</dd></div>
            <div><dt>${T('Molecular weight')}</dt><dd>${p.weight}</dd></div>
            <div><dt>PubChem ID</dt><dd>${p.pubchem}</dd></div>
          </dl>
        </aside>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="section-head"><h2>${T('Frequently asked questions')}</h2></div>
        <div class="faq-list" id="pdFaq"></div>
      </div>
    </section>

    <!-- Related -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="section-head" style="margin-bottom:1.6rem;"><h2>${T('You may also like')}</h2></div>
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
      <button class="btn btn-primary" id="pdStickyAdd"${oos ? ' disabled' : ''}>${oos ? T('Out of stock') : T('Add')}</button>
    </div>

    <!-- COA modal -->
    <div class="coa-backdrop" id="coaBackdrop" hidden></div>
    <div class="coa-modal" id="coaModal" role="dialog" aria-modal="true" aria-labelledby="coaTitle" hidden>
      <div class="coa-modal-head">
        <h3 id="coaTitle">${T('Certificate of analysis')}</h3>
        <button class="cart-close" id="coaClose" aria-label="${T('Close')}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="coa-sheet">
        <div class="coa-sheet-head">
          <span class="coa-mark" aria-hidden="true"></span>
          <div>
            <b>${p.name}</b>
            <span class="mono-tag">${batch ? T('Batch') + ' ' + batch.code : p.tag} · ${p.mg}</span>
          </div>
        </div>
        <dl class="coa-rows">
          <div><dt>${T('Method')}</dt><dd>${T('HPLC + mass spectrometry')}</dd></div>
          <div><dt>${T('Purity spec')}</dt><dd>${T('99% minimum')}</dd></div>
          ${batch && batch.purity ? `<div><dt>${T('Purity, this batch')}</dt><dd>${batch.purity}</dd></div>` : ''}
          ${batch && batch.date ? `<div><dt>${T('Analysis date')}</dt><dd>${batch.date}</dd></div>` : ''}
          ${batch && batch.lab ? `<div><dt>${T('Laboratory')}</dt><dd>${batch.lab}</dd></div>` : ''}
          <div><dt>${T('The certificate reports')}</dt><dd>${T('Purity, identity and quantity')}</dd></div>
        </dl>
        <p class="coa-note">${T('This is the batch currently in stock. Its full certificate is available on request — before you order, if you want to see it first.')} <a href="verify/${batch ? '?batch=' + encodeURIComponent(batch.code) : ''}">${T('Check this batch number')}</a>.</p>
        <a class="btn btn-primary coa-cta" href="https://wa.me/${window.REA.WHATSAPP}?text=${encodeURIComponent(T('Hi, I’d like the COA for') + ' ' + p.name + (batch ? ' (' + T('batch') + ' ' + batch.code + ')' : ''))}" target="_blank" rel="noopener">${T('Ask for this batch COA')}</a>
      </div>
    </div>
  `;

  // ---------- Estado de compra ----------
  let selectedSize = p.sizes[0];
  let qty = 1;
  const priceEl = document.getElementById('pdPrice');
  const qtyValEl = document.getElementById('pdQtyVal');

  const stickyPriceEl = document.getElementById('pdStickyPrice');
  const priceWasEl = document.getElementById('pdPriceWas');
  const priceUnitEl = document.getElementById('pdPriceUnit');
  function refreshPrice() {
    const total = money(selectedSize.price * qty);
    priceEl.textContent = total;
    stickyPriceEl.textContent = total;
    // Precio de lista tachado: también se multiplica por la cantidad.
    const ref = refList(selectedSize);
    if (priceWasEl) priceWasEl.textContent = ref ? money(ref * qty) : '';
    if (priceUnitEl) priceUnitEl.textContent = perVial(selectedSize);
    priceEl.classList.remove('bump'); void priceEl.offsetWidth; priceEl.classList.add('bump');
  }

  document.getElementById('pdSizes').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-size]');
    if (!btn) return;
    // Tomar la presentación real del catálogo, no reconstruirla desde el DOM:
    // así conserva `list` (precio antes de la rebaja) y no se pierde el tachado.
    const label = btn.getAttribute('data-size');
    selectedSize = p.sizes.find((s) => s.label === label) || selectedSize;
    document.querySelectorAll('#pdSizes .pd-opt').forEach((b) => b.classList.toggle('active', b === btn));
    refreshPrice();
  });

  document.getElementById('pdQty').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-q]');
    if (!btn) return;
    // Tope en las existencias: no ofrecer más unidades de las que hay.
    const max = p.stock != null ? p.stock : Infinity;
    qty = Math.min(max, Math.max(1, qty + (btn.getAttribute('data-q') === 'inc' ? 1 : -1)));
    qtyValEl.textContent = qty;
    refreshPrice();
  });

  const addToCart = () => { if (oos) return; window.REACart.add(p.slug, selectedSize.label, qty); };
  document.getElementById('pdAdd').addEventListener('click', addToCart);
  document.getElementById('pdStickyAdd').addEventListener('click', addToCart);

  // Entrega según el país seleccionado (se actualiza si cambia)
  function setEta() {
    const cfg = window.REACountry.config();
    document.getElementById('pdEtaText').textContent = `${cfg.flag} ${T(cfg.eta)} · ${T('sealed packaging')}`;
  }
  setEta();
  window.addEventListener('rea-country-change', setEta);

  /* La ficha lee el estado agotado y el tope de unidades una sola vez, al
     pintarse. Si al cambiar de país ese estado cambia —hay bodegas donde el
     producto no está— la página entera queda mintiendo: botón activo, tope de
     cantidad viejo. Repintar pieza por pieza sería fácil de olvidar al tocar
     la ficha, así que se recarga, y solo cuando de verdad cambió. */
  window.addEventListener('rea-country-change', () => {
    const ahora = !!p.outOfStock;
    if (ahora !== oos) location.reload();
  });

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
  // Otros disparadores del mismo modal (badge de la galería, línea de confianza).
  document.addEventListener('click', (e) => { if (e.target.closest('[data-coa]')) openCoa(); });
  document.getElementById('coaClose').addEventListener('click', closeCoa);
  coaBackdrop.addEventListener('click', closeCoa);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCoa(); });

  // FAQ + relacionados
  // El mismo FAQ que build-seo.js hornea en el HTML y en el JSON-LD FAQPage:
  // si aquí se pintara otro, el schema declararía preguntas que nadie ve.
  ui.faqAccordion(document.getElementById('pdFaq'), window.REA.productFaq(p));

  // Enlace al artículo que explica el compuesto. El HTML horneado lo trae, pero
  // este archivo reemplaza el <main> entero al hidratar, así que hay que
  // reponerlo. El slug lo declara build-seo.js en data-article del <body>, para
  // no duplicar aquí el mapa de producto a artículo.
  const artSlug = document.body.dataset.article;
  if (artSlug) {
    const host = document.querySelector('.pd-info-main') || main.querySelector('.container') || main;
    const sec = document.createElement('section');
    sec.className = 'pd-related-reading';
    sec.innerHTML = `<h3>Related reading</h3>
      <p><a href="article/${artSlug}/">Read the research explainer on ${p.alias || p.name}</a></p>`;
    host.appendChild(sec);
  }
  ui.wireAddButtons(document.getElementById('pdRelated'));
})();
