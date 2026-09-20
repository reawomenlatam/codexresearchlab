/* REA Store - carrito compartido
   Estado persistente en localStorage, drawer inyectado, contador en header.
   Funciona en cualquier página que cargue data.js y cart.js.

   API pública (window.REACart):
     add(slug, sizeLabel, qty)  - agrega o suma
     setQty(lineId, qty)        - cambia cantidad (0 = eliminar)
     remove(lineId)
     open() / close()
     items(), count(), total()
*/
(function () {
  const KEY = 'rea-cart-v1';
  const { PRODUCTS, WHATSAPP } = window.REA;

  const AVISO_KEY = 'rea-cart-notice';
  const money = (n) => '$' + n.toFixed(2);
  const lineId = (slug, size) => `${slug}::${size}`;

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY)) || [];
      // Descarta líneas cuyo producto o pack ya no exista (p. ej. cambios de catálogo)
      return raw.filter((i) => {
        const p = findProduct(i.slug);
        return p && !p.outOfStock && p.sizes.some((s) => s.label === i.size);
      });
    } catch { return []; }
  }
  function save(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    render();
    // Notifica a otras vistas (p. ej. la página de carrito) para re-render
    window.dispatchEvent(new CustomEvent('rea-cart-change'));
  }

  let items = load();

  function findProduct(slug) { return PRODUCTS.find((p) => p.slug === slug); }
  function priceFor(slug, size) {
    const p = findProduct(slug);
    const s = p && p.sizes.find((x) => x.label === size);
    return s ? s.price : 0;
  }

  const count = () => items.reduce((n, i) => n + i.qty, 0);
  const total = () => items.reduce((n, i) => n + i.qty * priceFor(i.slug, i.size), 0);

  // Líneas enriquecidas para la página de carrito
  const detailed = () => items.map((i) => {
    const p = findProduct(i.slug) || {};
    const unit = priceFor(i.slug, i.size);
    return { id: lineId(i.slug, i.size), slug: i.slug, size: i.size, qty: i.qty,
      name: p.name || i.slug, tag: p.tag || '', stock: p.stock, photo: p.photo, unit, subtotal: unit * i.qty };
  });

  function add(slug, size, qty = 1, opts = {}) {
    const prod = findProduct(slug);
    if (prod && prod.outOfStock) return; // no se agregan productos agotados
    const id = lineId(slug, size);
    const existing = items.find((i) => lineId(i.slug, i.size) === id);
    // Nunca dejar en el carrito más unidades de las que hay: con 1 en existencia
    // el cliente no puede terminar pidiendo 3.
    const max = prod && prod.stock != null ? prod.stock : Infinity;
    if (existing) existing.qty = Math.min(max, existing.qty + qty);
    else items.push({ slug, size, qty: Math.min(max, qty) });
    save(items);
    // Meta Pixel: evento de conversión AddToCart. Siempre se emite aquí: desde
    // el 2026-09-19 nada envuelve esta función (el gate de cuenta vive en el
    // checkout), así que este es el único punto que lo cuenta. `opts.noPixel`
    // queda para quien necesite añadir sin registrar conversión (p. ej. restaurar
    // un carrito), no para un paso previo.
    if (typeof fbq === 'function' && prod && !opts.noPixel) {
      fbq('track', 'AddToCart', {
        content_ids: [slug], content_name: prod.name, content_type: 'product',
        value: priceFor(slug, size) * qty, currency: 'USD',
      });
    }
    // GA4: add_to_cart
    if (typeof gtag === 'function' && prod && !opts.noPixel) {
      gtag('event', 'add_to_cart', {
        currency: 'USD', value: priceFor(slug, size) * qty,
        items: [{ item_id: slug, item_name: prod.name, price: priceFor(slug, size), quantity: qty }],
      });
    }
    if (!opts.silent) open();
  }
  function setQty(id, qty) {
    items = items
      .map((i) => (lineId(i.slug, i.size) === id ? { ...i, qty } : i))
      .filter((i) => i.qty > 0);
    save(items);
  }
  function remove(id) { setQty(id, 0); }

  // ---------- Markup del drawer (inyectado una vez) ----------
  function ensureDom() {
    if (document.getElementById('reaCartRoot')) return;
    const root = document.createElement('div');
    root.id = 'reaCartRoot';
    root.innerHTML = `
      <div class="cart-backdrop" id="cartBackdrop" hidden></div>
      <aside class="cart-drawer" id="cartDrawer" aria-label="${window.T('Shopping cart')}" hidden>
        <header class="cart-drawer-head">
          <h3>${window.T('Your cart')}</h3>
          <button class="cart-close" id="cartClose" aria-label="${window.T('Close cart')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </header>
        <div class="cart-lines" id="cartLines"></div>
        <footer class="cart-drawer-foot" id="cartFoot"></footer>
      </aside>`;
    document.body.appendChild(root);
    document.getElementById('cartClose').addEventListener('click', close);
    document.getElementById('cartBackdrop').addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    // Delegación de eventos dentro del drawer
    document.getElementById('cartLines').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      const id = btn.getAttribute('data-id');
      const act = btn.getAttribute('data-act');
      const line = items.find((i) => lineId(i.slug, i.size) === id);
      if (!line) return;
      if (act === 'inc') setQty(id, line.qty + 1);
      if (act === 'dec') setQty(id, line.qty - 1);
      if (act === 'rm') remove(id);
    });

    document.getElementById('cartFoot').addEventListener('click', (e) => {
      if (e.target.closest('[data-cart-continue]')) close();
    });
  }

  function open() { ensureDom(); document.getElementById('cartDrawer').hidden = false; document.getElementById('cartBackdrop').hidden = false; document.body.style.overflow = 'hidden'; }
  function close() { const d = document.getElementById('cartDrawer'); if (!d) return; d.hidden = true; document.getElementById('cartBackdrop').hidden = true; document.body.style.overflow = ''; }

  function render() {
    // Contador(es) en el header
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = count();
      el.style.visibility = count() ? 'visible' : 'hidden';
    });

    const linesEl = document.getElementById('cartLines');
    const footEl = document.getElementById('cartFoot');
    if (!linesEl) return;

    if (!items.length) {
      linesEl.innerHTML = `
        <div class="cart-empty">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <p>${window.T('Your cart is empty.')}</p>
          <a class="btn btn-primary" href="${window.U('catalog/')}">${window.T('View catalog')}</a>
        </div>`;
      footEl.innerHTML = '';
      return;
    }

    linesEl.innerHTML = items.map((i) => {
      const p = findProduct(i.slug);
      const id = lineId(i.slug, i.size);
      const unit = priceFor(i.slug, i.size);
      return `
        <div class="cart-line">
          <div class="cart-line-thumb">${p && p.photo ? `<img class="product-photo" src="${p.photo}" alt="${p.name}" loading="lazy">` : vialMini(p ? p.name : i.slug)}</div>
          <div class="cart-line-body">
            <div class="cart-line-top">
              <div>
                <b>${p ? p.name : i.slug}</b>
                <span class="cart-line-size">${window.T(i.size)}</span>
              </div>
              <button class="cart-line-rm" data-act="rm" data-id="${id}" aria-label="${window.T('Remove')}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </div>
            <div class="cart-line-bottom">
              <div class="qty-stepper">
                <button data-act="dec" data-id="${id}" aria-label="${window.T('Decrease')}">−</button>
                <span>${i.qty}</span>
                <button data-act="inc" data-id="${id}" aria-label="${window.T('Increase')}">+</button>
              </div>
              <b class="cart-line-price">${money(unit * i.qty)}</b>
            </div>
          </div>
        </div>`;
    }).join('');

    // Anticipo de la barra de envío gratis dentro del mini-carrito (según país)
    const ship = window.REACountry.config().shipping;
    const remaining = ship.freeThreshold - total();
    const shipHint = remaining > 0
      ? `<div class="cart-ship-hint">${window.T('Add <b>{n}</b> more for <b>free shipping</b>', { n: money(remaining) })}
           <span class="cart-ship-track"><i style="width:${Math.min(100, (total() / ship.freeThreshold) * 100)}%"></i></span></div>`
      : `<div class="cart-ship-hint ok">✓ ${window.T('You’ve unlocked <b>free shipping</b>')}
           <span class="cart-ship-track"><i style="width:100%"></i></span></div>`;

    footEl.innerHTML = `
      ${shipHint}
      <div class="cart-total-row"><span>${window.T('Subtotal')}</span><b>${money(total())}</b></div>
      <a class="btn btn-primary cart-checkout" href="${window.U('cart/')}">${window.T('Checkout')}</a>
      <button class="cart-continue-link" data-cart-continue>${window.T('Continue shopping')}</button>`;

    // Las imágenes recién inyectadas necesitan la clase .loaded o el fade-in
    // (opacity:0) las deja invisibles en el drawer tras cada re-render.
    if (window.REAmotion && window.REAmotion.images) window.REAmotion.images();
  }

  function vialMini(name) {
    return `<div class="vial vial-xs">
      <div class="vial-cap"></div><div class="vial-neck"></div>
      <div class="vial-body"><div class="vial-label"><b>${name}</b></div><div class="vial-powder"></div></div>
    </div>`;
  }

  // Vincular cualquier botón de carrito del header
  function wireHeaderButtons() {
    document.querySelectorAll('[data-cart-open]').forEach((el) => {
      el.addEventListener('click', open);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    ensureDom();
    wireHeaderButtons();
    render();
    avisoPendiente();
  });
  /* El cambio de país altera el umbral de envío gratis del drawer y, desde que
     el stock es por bodega, también puede dejar líneas sin existencias: load()
     las descarta. Descartarlas en silencio sería peor que el problema —el
     cliente vería el carrito vaciarse sin motivo—, así que se nombra lo que se
     quitó y por qué. */
  function avisarDescartes() {
    let crudo = [];
    try { crudo = JSON.parse(localStorage.getItem(KEY)) || []; } catch { return; }
    const fuera = [];
    crudo.forEach((i) => {
      const p = findProduct(i.slug);
      if (p && p.outOfStock && !fuera.includes(p.name)) fuera.push(p.name);
    });
    if (!fuera.length) return;

    // Se persiste el carrito ya limpio: si no, el aviso volvería a salir en
    // cada render mientras las líneas siguieran guardadas.
    save(load());

    const cfg = window.REACountry.config();
    const T = window.T || ((x) => x);
    const texto = fuera.join(', ') + ' ' +
      T('is not available for shipping to') + ' ' + T(cfg.label) + ', ' +
      T('so it was removed from your cart.');

    // La ficha de producto se recarga cuando cambia la disponibilidad, y una
    // recarga se llevaría por delante el aviso justo cuando más falta hace.
    // Se guarda con su hora: si la página vuelve a cargar enseguida, el aviso
    // reaparece; si no, esa copia caduca sola y no molesta en la siguiente visita.
    try { sessionStorage.setItem(AVISO_KEY, JSON.stringify({ texto, ts: Date.now() })); } catch {}
    pintarAviso(texto);
  }

  function pintarAviso(texto) {
    const el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.style.cssText = 'position:fixed;left:50%;bottom:1.2rem;transform:translateX(-50%);z-index:9999;' +
      'max-width:min(92vw,30rem);background:#1f2937;color:#fff;padding:.85rem 1.1rem;border-radius:10px;' +
      'font-size:.88rem;line-height:1.5;box-shadow:0 8px 30px rgba(0,0,0,.35);';
    el.textContent = texto;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 7000);
  }

  function avisoPendiente() {
    let g = null;
    try { g = JSON.parse(sessionStorage.getItem(AVISO_KEY) || 'null'); } catch { return; }
    if (!g) return;
    try { sessionStorage.removeItem(AVISO_KEY); } catch {}
    // Solo si la recarga fue consecuencia del mismo cambio de país.
    if (Date.now() - g.ts < 5000) pintarAviso(g.texto);
  }

  window.addEventListener('rea-country-change', () => { avisarDescartes(); render(); });

  window.REACart = { add, setQty, remove, open, close, items: () => items, detailed, count, total };
})();
