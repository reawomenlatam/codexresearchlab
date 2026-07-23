/* REA Store — home. Usa window.REA (data.js) y window.REACart (cart.js). */
(function () {
  const { PRODUCTS, FAQS, TESTIMONIALS } = window.REA;

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
    ? `<img class="product-photo" src="${p.photo}" alt="${p.name}" loading="lazy">`
    : window.REAui.vial(p ? p.name : '', sub);

  window.REAui.productCard = (p) => `
    <article class="product-card${p.outOfStock ? ' out' : ''}">
      <a class="product-media" href="product/${p.slug}.html" aria-label="${p.name}">
        ${window.REAui.media(p, 'lyophilized')}
        ${p.outOfStock ? '<span class="oos-badge">Out of stock</span>' : ''}
      </a>
      <div class="product-info">
        <span class="mono-tag">${p.tag}</span>
        <h3><a href="product/${p.slug}.html">${p.name}</a></h3>
        <span class="product-price">${p.mg} · ${p.outOfStock ? '<b>Out of stock</b>' : `from <b>$${p.from}</b>`}</span>
        <div class="product-cta">
          <a class="link" href="product/${p.slug}.html">View product →</a>
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

  window.REAui.stars = (n) => {
    const star = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    return `<span class="stars" aria-label="${n} out of 5">${star.repeat(n)}</span>`;
  };

  window.REAui.testimonialCard = (t) => `
    <figure class="tsm-card">
      ${window.REAui.stars(t.rating)}
      <blockquote>${t.quote}</blockquote>
      <figcaption>
        <span class="tsm-avatar" aria-hidden="true">${t.name.replace(/^Dr\.\s*/, '').trim().charAt(0)}</span>
        <span><b>${t.name}</b><span class="tsm-role">${t.role}</span></span>
      </figcaption>
    </figure>`;

  // ---------- Render de la home ----------
  const grid = document.getElementById('productsGrid');
  if (grid) {
    grid.innerHTML = PRODUCTS.slice(0, 8).map(window.REAui.productCard).join('');
    window.REAui.wireAddButtons(grid);
  }

  const tsm = document.getElementById('testimonialsGrid');
  if (tsm && TESTIMONIALS) tsm.innerHTML = TESTIMONIALS.map(window.REAui.testimonialCard).join('');

  const faqList = document.getElementById('faqList');
  if (faqList) window.REAui.faqAccordion(faqList, FAQS);
})();
