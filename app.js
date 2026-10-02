/* REA Store - home. Usa window.REA (data.js) y window.REACart (cart.js). */
(function () {
  const { PRODUCTS } = window.REA;

  // ---------- Componentes reutilizables ----------
  window.REAui = window.REAui || {};

  window.REAui.vial = (name, sub) => `
    <div class="vial">
      <div class="vial-cap"></div>
      <div class="vial-neck"></div>
      <div class="vial-body">
        <div class="vial-label"><b>${name}</b>${sub ? `<span>${sub}</span>` : ''}</div>
        <div class="vial-powder"></div>
      </div>
    </div>`;

  // Foto real si el producto la tiene; si no, el vial dibujado en CSS.
  window.REAui.media = (p, sub) => (p && p.photo)
    ? `<img class="product-photo" src="${p.photo}" alt="${p.name}" width="1400" height="933" loading="lazy">`
    : window.REAui.vial(p ? p.name : '', sub);

  // Con la rebaja, algunos precios dejan de ser enteros: $63.2 se ve mal.
  // Enteros sin decimales, el resto con dos.
  const amt = (n) => (n % 1 === 0 ? String(n) : n.toFixed(2));

  // Distintivo de rebaja sobre la foto. No se pone en los agotados: ahí manda
  // el sello de "Out of stock" y dos etiquetas encimadas se ven mal.
  const SALE = window.REA.SALE || {};
  const saleBadge = (p) => (SALE.active && !p.outOfStock && p.listFrom)
    ? `<span class="sale-badge">−${SALE.percent}%</span>` : '';

  // Varios tamaños del mismo compuesto son tarjetas aparte; sin el tamaño en el
  // título se veían tres "GLP3-R" idénticos seguidos.
  const nameCount = window.REA.PRODUCTS.reduce((m, x) => m.set(x.name, (m.get(x.name) || 0) + 1), new Map());
  const cardTitle = (p) => (nameCount.get(p.name) > 1 ? `${p.name} <span class="pc-size">${p.mg}</span>` : p.name);

  // El número CAS no se parte por sus guiones en tarjetas estrechas; el resto
  // del tag sí puede pasar a otra línea.
  const cardTag = (p) => {
    const t = window.T(p.tag);
    return p.cas && t.includes(p.cas) ? t.replace(p.cas, `<span class="nowrap">${p.cas}</span>`) : t;
  };

  window.REAui.productCard = (p) => `
    <article class="product-card${p.outOfStock ? ' out' : ''}">
      <a class="product-media" href="${window.U('product/' + p.slug + '/')}" aria-label="${p.name}">
        ${window.REAui.media(p, 'lyophilized')}
        ${p.outOfStock ? `<span class="oos-badge">${window.T('Out of stock')}</span>` : saleBadge(p)}
      </a>
      <div class="product-info">
        <span class="mono-tag">${cardTag(p)}</span>
        <h3><a href="${window.U('product/' + p.slug + '/')}">${cardTitle(p)}</a></h3>
        <span class="product-price">${nameCount.get(p.name) > 1 ? '' : `${p.mg} · `}${p.outOfStock ? `<b>${window.T('Out of stock')}</b>`
          : `${window.T('from')} <b>$${amt(p.from)}</b>${p.listFrom ? ` <s class="was">$${amt(p.listFrom)}</s>` : ''}`}</span>
        <div class="product-cta">
          <a class="link" href="${window.U('product/' + p.slug + '/')}">${window.T('View product')} →</a>
          ${p.outOfStock ? '' : `<button class="add-btn" data-add="${p.slug}" aria-label="Add ${p.name} to cart">+</button>`}
        </div>
      </div>
    </article>`;

  window.REAui.wireAddButtons = (root) => {
    root.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-add]');
      if (!btn) return;
      const p = PRODUCTS.find((x) => x.slug === btn.getAttribute('data-add'));
      if (p) window.REACart.add(p.slug, p.sizes[0].label, 1);
    });
  };

  window.REAui.faqAccordion = (root, faqs) => {
    root.innerHTML = faqs.map((f) => `
      <div class="faq-item">
        <button class="faq-q">${f.q}
          <svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-a">${f.a}</div>
      </div>`).join('');
    root.addEventListener('click', (e) => {
      const q = e.target.closest('.faq-q');
      if (!q) return;
      const item = q.parentElement;
      const wasOpen = item.classList.contains('open');
      root.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  };

  // ---------- Render de la home ----------
  const grid = document.getElementById('productsGrid');
  if (grid) {
    const paintGrid = () => {
      // Escaparate: solo lo que se puede comprar en el país elegido, y una
      // tarjeta por compuesto (los tamaños se eligen en la ficha).
      const seen = new Set();
      const featured = PRODUCTS.filter((p) => !p.outOfStock && !seen.has(p.name) && seen.add(p.name));
      // Filas completas en el grid de 4: con 5 en stock (EE. UU.) quedaba una huérfana.
      const n = featured.length >= 8 ? 8 : featured.length >= 4 ? 4 : featured.length;
      grid.innerHTML = featured.slice(0, n).map(window.REAui.productCard).join('');
      window.REAui.wireAddButtons(grid);
    };
    paintGrid();
    // Cambiar de país cambia la bodega, y con ella qué está agotado: sin esto
    // las tarjetas seguirían ofreciendo algo que ya no se puede comprar.
    window.addEventListener('rea-country-change', paintGrid);
  }

  const faqList = document.getElementById('faqList');
  if (faqList) window.REAui.faqAccordion(faqList, window.REA.faqs());

  // Gancho de entrega en el hero (country-aware; no cambia el título).
  const heroDeliver = document.getElementById('heroDeliver');
  function updateHeroDeliver() {
    if (!heroDeliver || !window.REACountry) return;
    const isPA = window.REACountry.code() === 'PA';
    heroDeliver.innerHTML = isPA
      ? `<span class="hd-dot"></span><span>${window.T('<b>Same-day delivery in Panama City</b>, in your hands in 1-2 h')}</span>`
      : `<span class="hd-dot"></span><span>${window.T('<b>Fast, sealed delivery across the US</b>')}</span>`;
  }
  window.addEventListener('rea-country-change', updateHeroDeliver);
  updateHeroDeliver();

  // Tiempo de entrega en la cinta, siguiendo al país elegido.
  // El texto sale de COUNTRIES en data.js, no escrito a mano aquí: si mañana
  // cambia el tiempo de entrega, se cambia en un solo sitio.
  // Las dos listas de la cinta reciben el MISMO texto; si difirieran, el bucle
  // dejaría de ser continuo porque cada una mediría distinto.
  const marquee = document.getElementById('heroMarquee');
  function updateMarqueeEta() {
    if (!marquee || !window.REACountry) return;
    const c = window.REA.COUNTRIES[window.REACountry.code()];
    if (!c) return;
    const texto = c.code === 'PA' ? window.T(c.etaShort) : `${window.T('Delivered in')} ${c.etaShort}`;
    marquee.querySelectorAll('.mq-eta').forEach((el) => { el.textContent = texto; });
    // Las listas son aria-hidden, así que el texto accesible vive en el
    // contenedor y también tiene que actualizarse.
    marquee.setAttribute('aria-label', `HPLC verified · COA per batch · ${texto} · Batch traceable`);
  }
  window.addEventListener('rea-country-change', updateMarqueeEta);
  updateMarqueeEta();

  // Cifras de plazo de la portada: mismo origen que la cinta, para que la
  // página no prometa dos tiempos distintos.
  function updateEtaFigures() {
    if (!window.REACountry) return;
    const c = window.REA.COUNTRIES[window.REACountry.code()];
    if (!c || !c.etaFigure) return;
    document.querySelectorAll('[data-eta-figure]').forEach((el) => { el.textContent = c.etaFigure; });
    document.querySelectorAll('[data-eta-label]').forEach((el) => { el.textContent = window.T(c.etaFigureLabel); });
  }
  window.addEventListener('rea-country-change', updateEtaFigures);
  updateEtaFigures();
})();
