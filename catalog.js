/* REA Store - catálogo: búsqueda, categorías, orden. */
(function () {
  const { PRODUCTS } = window.REA;
  const ui = window.REAui;

  // Deriva categorías simples desde el tag (Blend vs. CAS)
  const T = window.T;
  const CATEGORIES = [
    { key: 'all', label: T('All'), test: () => true },
    { key: 'single', label: T('Compounds'), test: (p) => p.cas !== 'Blend' },
    { key: 'blend', label: T('Blends'), test: (p) => p.cas === 'Blend' },
  ];

  const grid = document.getElementById('catGrid');
  const listEl = document.getElementById('catList');
  const searchEl = document.getElementById('catSearch');
  const sortEl = document.getElementById('catSort');
  const countEl = document.getElementById('catCount');
  const emptyEl = document.getElementById('catEmpty');

  let state = { cat: 'all', q: '', sort: 'name' };

  // Solo se ofrece un filtro si cambia algo: "Blends 0" era un callejón sin
  // salida y "Compounds 22" repetía a "All 22". Si no queda ninguno, fuera el bloque.
  const total = PRODUCTS.length;
  const useful = CATEGORIES.filter((c) => {
    const n = PRODUCTS.filter(c.test).length;
    return c.key === 'all' || (n > 0 && n < total);
  });
  if (useful.length > 1) {
    listEl.innerHTML = useful.map((c) => {
      const n = PRODUCTS.filter(c.test).length;
      return `<li><button data-cat="${c.key}" class="${c.key === 'all' ? 'active' : ''}">${c.label} <span>${n}</span></button></li>`;
    }).join('');
  } else {
    listEl.hidden = true;
    const head = listEl.previousElementSibling;
    if (head) head.hidden = true;
  }

  function apply() {
    const cat = CATEGORIES.find((c) => c.key === state.cat);
    let rows = PRODUCTS.filter(cat.test);
    if (state.q) {
      const q = state.q.toLowerCase();
      // `alias` guarda el nombre científico de los productos que se venden con
      // nombre comercial: quien llega buscando ese término lo sigue encontrando,
      // sin que aparezca en ninguna parte de la página.
      rows = rows.filter((p) => p.name.toLowerCase().includes(q)
        || (p.cas || '').toLowerCase().includes(q)
        || (p.alias || '').toLowerCase().includes(q));
    }
    // Lo agotado va al final en cualquier orden; a igual nombre se respeta el
    // orden de data.js, que va de menor a mayor tamaño.
    const idx = (p) => PRODUCTS.indexOf(p);
    rows.sort((a, b) => {
      if (!!a.outOfStock !== !!b.outOfStock) return a.outOfStock ? 1 : -1;
      if (state.sort === 'price-asc') return a.from - b.from;
      if (state.sort === 'price-desc') return b.from - a.from;
      return a.name.localeCompare(b.name) || idx(a) - idx(b);
    });

    grid.innerHTML = rows.map(ui.productCard).join('');
    countEl.textContent = rows.length === 1
      ? T('{n} product', { n: rows.length })
      : T('{n} products', { n: rows.length });
    emptyEl.hidden = rows.length > 0;
  }

  listEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cat]');
    if (!btn) return;
    state.cat = btn.getAttribute('data-cat');
    listEl.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === btn));
    apply();
  });
  searchEl.addEventListener('input', () => { state.q = searchEl.value.trim(); apply(); });
  // Otra bodega, otras existencias: hay que repintar para que los agotados de
  // ese país se marquen como tales.
  window.addEventListener('rea-country-change', apply);
  sortEl.addEventListener('change', () => { state.sort = sortEl.value; apply(); });

  ui.wireAddButtons(grid);
  apply();
})();
