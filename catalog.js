/* REA Store — catálogo: búsqueda, categorías, orden. */
(function () {
  const { PRODUCTS } = window.REA;
  const ui = window.REAui;

  // Deriva categorías simples desde el tag (Blend vs. CAS)
  const CATEGORIES = [
    { key: 'all', label: 'All', test: () => true },
    { key: 'single', label: 'Compounds', test: (p) => p.cas !== 'Blend' },
    { key: 'blend', label: 'Blends', test: (p) => p.cas === 'Blend' },
  ];

  const grid = document.getElementById('catGrid');
  const listEl = document.getElementById('catList');
  const searchEl = document.getElementById('catSearch');
  const sortEl = document.getElementById('catSort');
  const countEl = document.getElementById('catCount');
  const emptyEl = document.getElementById('catEmpty');

  let state = { cat: 'all', q: '', sort: 'name' };

  listEl.innerHTML = CATEGORIES.map((c) => {
    const n = PRODUCTS.filter(c.test).length;
    return `<li><button data-cat="${c.key}" class="${c.key === 'all' ? 'active' : ''}">${c.label} <span>${n}</span></button></li>`;
  }).join('');

  function apply() {
    const cat = CATEGORIES.find((c) => c.key === state.cat);
    let rows = PRODUCTS.filter(cat.test);
    if (state.q) {
      const q = state.q.toLowerCase();
      rows = rows.filter((p) => p.name.toLowerCase().includes(q) || p.cas.toLowerCase().includes(q));
    }
    rows.sort((a, b) => {
      if (state.sort === 'price-asc') return a.from - b.from;
      if (state.sort === 'price-desc') return b.from - a.from;
      return a.name.localeCompare(b.name);
    });

    grid.innerHTML = rows.map(ui.productCard).join('');
    countEl.textContent = `${rows.length} product${rows.length === 1 ? '' : 's'}`;
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
  sortEl.addEventListener('change', () => { state.sort = sortEl.value; apply(); });

  ui.wireAddButtons(grid);
  apply();
})();
