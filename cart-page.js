/* Codex Research - cart page.
   Conversion strategies: free-shipping progress bar, cross-sell ("complete your
   order"), discount codes, trust badges + guarantee, scarcity, social proof,
   sticky order summary with a single prominent checkout CTA. */
(function () {
  const { PRODUCTS, COUPONS, WHATSAPP, BUSINESS = {}, SALE = {} } = window.REA;
  const cart = window.REACart;
  const ui = window.REAui;
  const T = window.T;
  const U = window.REAi18n.url;
  const root = document.getElementById('cartPageRoot');
  if (!root) return;

  // Si account.js no cargó (bloqueador, red), el carrito no puede reventar: se
  // sigue adelante y el servidor decide, que para eso valida él.
  const ACC = window.REAAccount || {
    isIn: () => false, token: () => '', authHeaders: () => ({}), get: () => null,
    open: () => {}, require: (fn) => { fn(); return true; },
  };

  const money = (n) => '$' + n.toFixed(2);
  // Escapa HTML para que ninguna entrada del usuario (código de cupón) se
  // interprete como markup al inyectarla en innerHTML o en un atributo.
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // Sólo cupones propios (evita claves del prototipo como "constructor").
  const validCoupon = (c) => Object.prototype.hasOwnProperty.call(COUPONS, c);
  const COUPON_KEY = 'rea-coupon-v1';
  const PAY_KEY = 'rea-payment-v1';
  let coupon = localStorage.getItem(COUPON_KEY) || '';

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Datos del comprador (contacto + envío); se conservan entre re-renders.
  const buyer = { name: '', email: '', phone: '', address1: '', address2: '', city: '', state: '', postal: '', notes: '' };
  // Datos que ya dio al crear la cuenta: no se piden dos veces.
  function prefillFromAccount() {
    const a = ACC.get();
    if (!a) return false;
    let tocado = false;
    if (!buyer.name && a.name) { buyer.name = a.name; tocado = true; }
    if (!buyer.email && a.email) { buyer.email = a.email; tocado = true; }
    if (!buyer.phone && a.phone) { buyer.phone = a.phone; tocado = true; }
    return tocado;
  }
  prefillFromAccount();

  // Quien se registra DESDE el carrito (el caso normal: intenta comprar, le sale
  // el gate, se registra) tenía el formulario pintado antes de existir la sesión.
  // Sin esto, acaba de escribir su nombre y correo y el checkout se los vuelve a
  // pedir en blanco.
  window.addEventListener('rea-account-change', () => {
    if (prefillFromAccount()) render();
  });
  const resetBuyer = () => Object.keys(buyer).forEach((k) => { buyer[k] = ''; });
  let placing = false;      // evita doble envío
  let confirmation = null;  // { id, email } tras una orden aceptada
  const orderId = () => 'CR-' + Date.now().toString(36).toUpperCase().slice(-6);
  const WA_ICON = `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;

  const country = () => window.REACountry.config();
  // Método de pago elegido; si no es válido para el país actual, usa el primero
  function currentPayment() {
    const cfg = country();
    const saved = localStorage.getItem(PAY_KEY);
    return cfg.payments.some((p) => p.id === saved) ? saved : cfg.payments[0].id;
  }

  // ---------- Cálculos ----------
  function compute() {
    const ship = country().shipping;
    const lines = cart.detailed();
    const subtotal = lines.reduce((n, l) => n + l.subtotal, 0);
    const c = coupon && validCoupon(coupon) ? COUPONS[coupon] : null;
    let discount = 0;
    // Los descuentos NO se combinan: mientras la rebaja general esté activa,
    // los precios ya vienen rebajados y un código no aplica nada encima.
    // El código sigue siendo válido para atribuir la venta al influencer.
    if (c && c.type === 'percent' && !SALE.active) discount = subtotal * (c.value / 100);
    const freeByThreshold = subtotal >= ship.freeThreshold;
    const freeByCoupon = !!(c && c.type === 'freeship');
    const freeShip = subtotal > 0 && (freeByThreshold || freeByCoupon);
    const shipping = subtotal === 0 ? 0 : (freeShip ? 0 : ship.flat);
    const total = Math.max(0, subtotal - discount + shipping);
    return { lines, subtotal, discount, shipping, freeShip, total, coupon: c };
  }

  // ---------- Sub-vistas ----------
  function shipProgress(subtotal) {
    const ship = country().shipping;
    if (subtotal >= ship.freeThreshold) {
      return `<div class="ship-progress ok">
        <div class="ship-progress-txt">✓ ${T('You’ve unlocked <b>free shipping</b>')}</div>
        <div class="ship-track"><i style="width:100%"></i></div>
      </div>`;
    }
    const pct = Math.min(100, (subtotal / ship.freeThreshold) * 100);
    const left = ship.freeThreshold - subtotal;
    return `<div class="ship-progress">
      <div class="ship-progress-txt">${T('Add <b>{n}</b> more to get <b>free shipping</b>', { n: money(left) })}</div>
      <div class="ship-track"><i style="width:${pct}%"></i></div>
    </div>`;
  }

  function stockNote(stock) {
    if (stock != null && stock < 10) return `<span class="stock-low">${T('Only {n} left', { n: stock })}</span>`;
    return `<span class="stock-ok">${T('In stock')}</span>`;
  }

  function itemRow(l) {
    return `
      <div class="ci-row">
        <a class="ci-thumb" href="${U('product/' + l.slug + '/')}">${l.photo ? `<img class="product-photo" src="${l.photo}" alt="${l.name}" width="1400" height="933" loading="lazy">` : ui.vial(l.name, l.size)}</a>
        <div class="ci-body">
          <div class="ci-head">
            <div>
              <a class="ci-name" href="${U('product/' + l.slug + '/')}">${l.name}</a>
              <div class="ci-meta"><span class="mono-tag">${T(l.size)}</span> · ${stockNote(l.stock)}</div>
            </div>
            <button class="ci-rm" data-act="rm" data-id="${l.id}" aria-label="${T('Remove')} ${l.name}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
          <div class="ci-foot">
            <div class="qty-stepper">
              <button data-act="dec" data-id="${l.id}" aria-label="${T('Decrease')}">−</button>
              <span>${l.qty}</span>
              <button data-act="inc" data-id="${l.id}" aria-label="${T('Increase')}">+</button>
            </div>
            <div class="ci-price">
              <b>${money(l.subtotal)}</b>
              ${l.qty > 1 ? `<span>${money(l.unit)} ${T('each')}</span>` : ''}
            </div>
          </div>
        </div>
      </div>`;
  }

  // Texto del botón / nota según el método. Los dos cobran de verdad en este
  // paso, así que ninguno puede prometer "no charge happens here".
  const checkoutLabel = (cfg, payId) => {
    if (payId === 'crypto') {
      return { btn: T('Pay with crypto'), icon: '',
        note: T('You’ll pay now from your own wallet. The amount is transferred on-chain when you confirm — network fees are paid by you.') };
    }
    return { btn: T('Pay by card'), icon: '',
      note: T('You’ll finish payment on Stripe’s secure checkout and come straight back. Your card details never touch our site.') };
  };

  // Formulario único de checkout (US y Panamá, todos los métodos):
  // contacto + dirección obligatorios → método de pago → pagar.
  function checkoutForm(s, cfg, payId) {
    const postalReq = cfg.code === 'US';
    const region = cfg.code === 'US' ? 'State' : 'Province';
    const regionLabel = T(region);
    const c = checkoutLabel(cfg, payId);
    return `
      <form class="checkout-form" id="checkoutForm" novalidate>
        <div class="co-section">
          <span class="co-title">${T('Your details')}</span>
          <label class="co-field"><span>${T('Full name')}</span>
            <input type="text" id="coName" required maxlength="80" autocomplete="name" value="${esc(buyer.name)}" placeholder="${T('First and last name')}"></label>
          <label class="co-field"><span>${T('Email')}</span>
            <input type="email" id="coEmail" required maxlength="120" autocomplete="email" value="${esc(buyer.email)}" placeholder="${T('you@email.com')}"></label>
          <label class="co-field"><span>${T('Phone')}</span>
            <input type="tel" id="coPhone" required maxlength="40" autocomplete="tel" value="${esc(buyer.phone)}" placeholder="${T('Incl. country code')}"></label>
        </div>

        <div class="co-section">
          <span class="co-title">${T('Shipping address')}</span>
          <label class="co-field"><span>${T('Address')}</span>
            <input type="text" id="coAddr1" required maxlength="120" autocomplete="address-line1" value="${esc(buyer.address1)}" placeholder="${T('Street and number')}"></label>
          <label class="co-field"><span>${T('Apt, suite, etc.')} <em>${T('(optional)')}</em></span>
            <input type="text" id="coAddr2" maxlength="80" autocomplete="address-line2" value="${esc(buyer.address2)}" placeholder="${T('Optional')}"></label>
          <label class="co-field"><span>${T('City')}</span>
            <input type="text" id="coCity" required maxlength="60" autocomplete="address-level2" value="${esc(buyer.city)}" placeholder="${T('City')}"></label>
          <div class="co-grid">
            <label class="co-field"><span>${regionLabel}</span>
              <input type="text" id="coState" required maxlength="60" autocomplete="address-level1" value="${esc(buyer.state)}" placeholder="${regionLabel}"></label>
            <label class="co-field"><span>${T('ZIP / Postal')}${postalReq ? '' : ` <em>${T('(optional)')}</em>`}</span>
              <input type="text" id="coPostal" ${postalReq ? 'required' : ''} maxlength="20" autocomplete="postal-code" value="${esc(buyer.postal)}" placeholder="${postalReq ? T('ZIP code') : T('Optional')}"></label>
          </div>
          <label class="co-field"><span>${T('Notes')} <em>${T('(optional)')}</em></span>
            <textarea id="coNotes" maxlength="500" rows="2" placeholder="${T('Anything we should know?')}">${esc(buyer.notes)}</textarea></label>
        </div>

        <fieldset class="co-section pay-methods">
          <legend class="co-title">${T('Payment method')} · ${cfg.flag} ${esc(cfg.label)}</legend>
          ${cfg.payments.map((p) => `
            <label class="pay-opt">
              <input type="radio" name="payMethod" value="${esc(p.id)}" ${p.id === payId ? 'checked' : ''}>
              <span class="pay-opt-main">
                ${esc(T(p.label))}
              </span>
            </label>`).join('')}
          ${cfg.payments.some((p) => p.id === 'crypto') ? `
            <div class="co-field pay-asset" id="coAssetRow" ${payId === 'crypto' ? '' : 'hidden'}>
              <label for="coAsset">${T('Stablecoin')}</label>
              <select id="coAsset">
                <option value="USDC">USDC</option>
                <option value="USDT">USDT</option>
              </select>
              <small class="pay-note">${T('You\'ll pay from your own wallet on Ethereum. Network fees are paid by you.')}</small>
            </div>` : ''}
        </fieldset>

        <label class="co-ack">
          <input type="checkbox" id="coAck" required>
          <span>${T('I confirm I am 21 or older and that I am purchasing these products for laboratory research use only. They are not for human or animal consumption.')} <a href="usage/" target="_blank" rel="noopener">${T('Read the usage notice')}</a></span>
        </label>

        <p class="co-msg" id="coMsg" role="alert" hidden></p>
        <button type="submit" class="btn btn-primary sum-checkout" id="coSubmit">${c.icon}${c.btn}</button>
        <p class="sum-note" id="coNote">${c.note}</p>
      </form>`;
  }

  // Actualiza sólo el botón/nota al cambiar de método (sin re-render, conserva lo escrito).
  function updateCheckoutButton() {
    const btn = document.getElementById('coSubmit');
    const note = document.getElementById('coNote');
    if (!btn) return;
    const c = checkoutLabel(country(), currentPayment());
    btn.innerHTML = c.icon + c.btn;
    if (note) note.textContent = c.note;
  }

  // Pantalla de éxito tras una orden aceptada.
  function confirmationView(c) {
    // Tras un pago crypto el dinero YA se cobró: un texto de "te contactaremos
    // para coordinar el pago" sería falso aquí. Además se le da un canal
    // directo para que no quede sin saber a quién escribir.
    if (c.crypto) {
      const waText = encodeURIComponent(
        'Hi Codex Research, I just paid order ' + c.id + ' with ' + c.asset + '.' +
        '\nAmount: $' + c.amount +
        '\nTransaction: ' + c.tx
      );
      return `
        <div class="order-success">
          <div class="order-success-mark" aria-hidden="true">✓</div>
          <h2>${T('Payment received')}</h2>
          <p>${T('Thanks! We received your payment for order')} <b>${esc(c.id)}</b> ${T('and verified it on the blockchain. We’re preparing your shipment')}${c.email ? ` ${T('and will email')} <b>${esc(c.email)}</b> ${T('with the tracking details')}` : ''}.</p>
          <p class="order-success-sub">
            ${T('Your receipt:')} <a href="https://etherscan.io/tx/${esc(c.tx)}" target="_blank" rel="noopener">${T('view the transaction')} ↗</a>
          </p>
          <a class="btn btn-primary" href="https://wa.me/${WHATSAPP}?text=${waText}" target="_blank" rel="noopener">${WA_ICON}${T('Message us on WhatsApp')}</a>
          <p class="order-success-sub">${T('Any question about your order, write to us and we’ll reply there.')}</p>
          <a class="btn" href="${U('catalog/')}">${T('Continue shopping')}</a>
        </div>`;
    }
    // Tarjeta: el cobro ya pasó por Stripe y el recibo lo manda Stripe.
    return `
      <div class="order-success">
        <div class="order-success-mark" aria-hidden="true">✓</div>
        <h2>${T('Payment received')}</h2>
        <p>${T('Thanks! We received your payment for order')} <b>${esc(c.id)}</b>. ${T('Stripe sent your receipt to')}
        <b>${esc(c.email)}</b>${T(', and we’re preparing your shipment. We’ll be in touch with the tracking details.')}</p>
        <p class="order-success-sub">${T('Any question about your order, write to us at')} ${esc(BUSINESS.email || '')}.</p>
        <a class="btn btn-primary" href="${U('catalog/')}">${T('Continue shopping')}</a>
      </div>`;
  }

  function summary(s) {
    const cfg = country();
    const payId = currentPayment();
    const couponMsg = coupon
      ? (validCoupon(coupon)
          ? (SALE.active && COUPONS[coupon].type === 'percent'
              ? `<div class="coupon-msg ok">✓ ${T('Code')} <b>${esc(coupon)}</b> ${T('registered · the')} <b>${SALE.percent}% OFF</b> ${T('already applied is a better deal, and discounts don’t stack')} <button data-coupon-remove aria-label="${T('Remove code')}">✕</button></div>`
              : `<div class="coupon-msg ok">✓ ${T('Code')} <b>${esc(coupon)}</b> ${T('applied')} · ${esc(T(COUPONS[coupon].label))} <button data-coupon-remove aria-label="${T('Remove code')}">✕</button></div>`)
          : `<div class="coupon-msg err">${T('Code')} “${esc(coupon)}” ${T('is not valid.')}</div>`)
      : '';

    return `
      <aside class="cartpage-aside">
        <div class="summary-card">
          <h3>${T('Order summary')}</h3>

          <form class="coupon-row" id="couponForm">
            <input type="text" id="couponInput" placeholder="${T('Discount code')}" aria-label="${T('Discount code')}" value="${coupon && !validCoupon(coupon) ? esc(coupon) : ''}">
            <button type="submit" class="btn btn-ghost">${T('Apply')}</button>
          </form>
          ${couponMsg}
          ${!SALE.active && !(coupon && validCoupon(coupon)) ? `<button type="button" class="coupon-hint" data-apply-welcome>🎁 ${T('First order? Tap to apply')} <b>WELCOME10</b> ${T('for 10% off')}</button>` : ''}

          <div class="sum-rows">
            <div class="sum-row"><span>${T('Subtotal')}</span><span>${money(s.subtotal)}</span></div>
            ${s.discount > 0 ? `<div class="sum-row disc"><span>${T('Discount')}</span><span>−${money(s.discount)}</span></div>` : ''}
            <div class="sum-row"><span>${T('Shipping')}</span><span>${s.shipping === 0 ? `<b class="free">${T('Free')}</b>` : money(s.shipping)}</span></div>
            <p class="sum-eta">${cfg.flag} ${T(cfg.eta)}</p>
            <div class="sum-row total"><span>${T('Total')}</span><b>${money(s.total)}</b></div>
          </div>

          ${checkoutForm(s, cfg, payId)}

          <ul class="sum-trust">
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg> <span><b>${T('Card payments secured by Stripe')}</b></span></li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span>${T('Secure & private')}</span></li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> <span>${T('Sealed packaging')}</span></li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> <span>${T('Batch-verified with COA')}</span></li>
          </ul>
        </div>

        <div class="guarantee-card">
          <span class="guarantee-mark" aria-hidden="true"></span>
          <div>
            <b>${T('Codex Guarantee')}</b>
            <p>${T('Every batch is third-party tested. If your COA doesn’t match, we make it right.')}</p>
          </div>
        </div>
      </aside>`;
  }

  // Recomendaciones del carrito. Antes eran los primeros 4 del catálogo (péptidos
  // de $150-190 junto a un carrito de $79). Ahora manda lo que de verdad completa
  // el pedido: el agua para reconstituir y lo que cierra el envío gratis.
  const isWater = (p) => p.slug.indexOf('bac-water') === 0;

  function recommendations(s) {
    const inCart = new Set(cart.items().map((i) => i.slug));
    const ship = country().shipping;
    const gap = Math.max(0, ship.freeThreshold - s.subtotal);
    const hasPeptide = [...inCart].some((sl) => sl.indexOf('bac-water') !== 0);
    const hasWater = [...inCart].some((sl) => sl.indexOf('bac-water') === 0);
    const pool = PRODUCTS.filter((p) => !inCart.has(p.slug) && !p.outOfStock);
    const recs = [];
    const push = (p) => { if (p && recs.indexOf(p) < 0 && recs.length < 4) recs.push(p); };

    // 1. Sin agua no se puede reconstituir nada: va primero.
    if (hasPeptide && !hasWater) {
      const waters = pool.filter(isWater).sort((a, b) => a.from - b.from);
      push(gap > 0 ? (waters.find((p) => p.from >= gap) || waters[waters.length - 1]) : waters[0]);
    }
    // 2. Lo que mejor cierra el envío gratis: lo más cercano al faltante, con
    //    preferencia por lo que lo cubre entero (quedarse corto no lo desbloquea).
    if (gap > 0) {
      pool.slice()
        .sort((a, b) => {
          const d = (p) => (p.from >= gap ? p.from - gap : (gap - p.from) * 1.3);
          return d(a) - d(b);
        })
        .slice(0, 2).forEach(push);
    }
    // 3. Se rellena con el resto del catálogo.
    pool.forEach(push);
    return { recs, gap };
  }

  function crossSell(s) {
    const { recs, gap } = recommendations(s);
    if (!recs.length) return '';
    const head = gap > 0
      ? `<h2>${T('Add {n} more, shipping is on us', { n: money(gap) })}</h2><p>${T('These complete your order and unlock free shipping.')}</p>`
      : `<h2>${T('Complete your order')}</h2><p>${T('Frequently added together. Verified and ready to ship.')}</p>`;
    return `
      <section class="cross-sell">
        <div class="section-head" style="margin-bottom:1.4rem;">
          ${head}
        </div>
        <div class="products-grid" id="crossSellGrid">
          ${recs.map(ui.productCard).join('')}
        </div>
      </section>`;
  }

  const socialProof = `
    <div class="cart-social">
      <div><strong>HPLC + MS</strong><span>${T('third-party tested')}</span></div>
      <div><strong class="count-up" data-from="92">100%</strong><span>${T('batches with COA')}</span></div>
      <div><strong>24-48 h</strong><span>${T('dispatch')}</span></div>
    </div>`;

  function emptyState() {
    const popular = PRODUCTS.slice(0, 4);
    return `
      <div class="cart-empty-page">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h2>${T('Your cart is empty')}</h2>
        <p>${T('Browse our verified compounds. Every batch ships with its certificate of analysis.')}</p>
        <a class="btn btn-primary" href="${U('catalog/')}">${T('Browse catalog')}</a>
      </div>
      <section class="cross-sell">
        <div class="section-head" style="margin-bottom:1.4rem;"><h2>${T('Popular right now')}</h2></div>
        <div class="products-grid" id="crossSellGrid">
          ${popular.map(ui.productCard).join('')}
        </div>
      </section>
      ${socialProof}`;
  }

  // ---------- Render principal ----------
  function render() {
    // Tras una orden aceptada, mostramos la confirmación (el carrito ya se vació).
    if (confirmation) { root.innerHTML = confirmationView(confirmation); return; }
    const s = compute();
    if (!s.lines.length) {
      root.innerHTML = emptyState();
    } else {
      root.innerHTML = `
        <div class="cartpage-grid">
          <div class="cartpage-main">
            ${shipProgress(s.subtotal)}
            <div class="cartpage-items">${s.lines.map(itemRow).join('')}</div>
            <a class="cartpage-continue" href="${U('catalog/')}">← ${T('Continue shopping')}</a>
          </div>
          ${summary(s)}
        </div>
        ${crossSell(s)}
        ${socialProof}
        <div class="cart-sticky" id="cartSticky" hidden>
          <div class="cart-sticky-total"><span>${T('Total')}</span><b>${money(s.total)}</b></div>
          <button class="btn btn-primary" id="cartStickyGo">${T('Checkout')}</button>
        </div>`;
    }
    wire();
    // Las imágenes recién inyectadas necesitan la clase .loaded o el fade-in
    // (opacity:0) las deja invisibles tras un re-render (cambio de pago, cupón…).
    if (window.REAmotion && window.REAmotion.images) window.REAmotion.images();
  }

  // ---------- Eventos ----------
  function wire() {
    // Items: qty y remove
    const items = root.querySelector('.cartpage-items');
    if (items) {
      items.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-act]');
        if (!btn) return;
        const id = btn.getAttribute('data-id');
        const act = btn.getAttribute('data-act');
        const line = cart.detailed().find((l) => l.id === id);
        if (!line) return;
        if (act === 'inc') cart.setQty(id, line.qty + 1);
        if (act === 'dec') cart.setQty(id, line.qty - 1);
        if (act === 'rm') cart.remove(id);
      });
    }

    // Cupón
    const form = document.getElementById('couponForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const code = document.getElementById('couponInput').value.trim().toUpperCase();
        coupon = code;
        if (code) localStorage.setItem(COUPON_KEY, code); else localStorage.removeItem(COUPON_KEY);
        render();
      });
    }
    const rm = root.querySelector('[data-coupon-remove]');
    if (rm) rm.addEventListener('click', () => { coupon = ''; localStorage.removeItem(COUPON_KEY); render(); });
    const applyWelcome = root.querySelector('[data-apply-welcome]');
    if (applyWelcome) applyWelcome.addEventListener('click', () => { coupon = 'WELCOME10'; localStorage.setItem(COUPON_KEY, coupon); render(); });

    // Método de pago: se guarda y sólo actualiza el botón/nota (conserva el formulario).
    root.querySelectorAll('input[name="payMethod"]').forEach((r) => {
      r.addEventListener('change', () => {
        localStorage.setItem(PAY_KEY, r.value);
        const row = document.getElementById('coAssetRow');
        if (row) row.hidden = r.value !== 'crypto';
        updateCheckoutButton();
      });
    });

    // Checkout unificado: conserva lo escrito y coloca la orden (correo o WhatsApp).
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
      const bind = (id, key) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', () => { buyer[key] = el.value; });
      };
      bind('coName', 'name'); bind('coEmail', 'email'); bind('coPhone', 'phone');
      bind('coAddr1', 'address1'); bind('coAddr2', 'address2'); bind('coCity', 'city');
      bind('coState', 'state'); bind('coPostal', 'postal'); bind('coNotes', 'notes');
      checkoutForm.addEventListener('submit', (e) => { e.preventDefault(); placeOrder(); });
    }

    // Barra sticky (móvil): lleva al formulario; se oculta cuando el botón real ya se ve.
    const stickyGo = document.getElementById('cartStickyGo');
    if (stickyGo) stickyGo.addEventListener('click', () => {
      const f = document.getElementById('checkoutForm');
      if (f) f.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const first = document.getElementById('coName');
      if (first) setTimeout(() => first.focus({ preventScroll: true }), 350);
    });
    const sticky = document.getElementById('cartSticky');
    const submit = document.getElementById('coSubmit');
    if (sticky && submit && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((en) => { sticky.hidden = en[0].isIntersecting; }, { threshold: 0 });
      io.observe(submit);
    } else if (sticky) {
      sticky.hidden = false;
    }

    // Cross-sell quick-add (sin abrir el drawer; la página se re-renderiza sola)
    const grid = document.getElementById('crossSellGrid');
    if (grid) {
      grid.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-add]');
        if (!btn) return;
        const p = PRODUCTS.find((x) => x.slug === btn.getAttribute('data-add'));
        if (p) cart.add(p.slug, p.sizes[0].label, 1, { silent: true });
      });
    }
  }

  const fireLead = (s) => {
    if (typeof fbq === 'function') fbq('track', 'Lead', { value: s.total, currency: 'USD', content_ids: s.lines.map((l) => l.slug) });
    if (typeof gtag === 'function') gtag('event', 'generate_lead', {
      currency: 'USD', value: s.total,
      items: s.lines.map((l) => ({ item_id: l.slug, item_name: l.name, price: l.unit, quantity: l.qty })),
    });
  };

  // Registra el uso de un código (para el panel de influencers). Fire-and-forget:
  // no bloquea ni afecta al cliente aunque el contador esté caído.
  const TRACK_URL = 'https://hooks.codexresearchlab.com/track.php';

  // --- Meta CAPI: guarda el pedido + cookies de atribucion para el Purchase
  // server-side que se dispara cuando el pedido se confirma por WhatsApp.
  const CAPI_URL = 'https://hooks.codexresearchlab.com/capi.php';
  function cookie(name) {
    const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return m ? m.pop() : '';
  }
  function fbcValue() {
    const c = cookie('_fbc');
    if (c) return c;
    const id = new URLSearchParams(location.search).get('fbclid');
    return id ? 'fb.1.' + Date.now() + '.' + id : '';
  }
  function stageForCapi(s, id, cfg) {
    try {
      const data = new URLSearchParams({
        action: 'stage', order_id: id,
        email: buyer.email || '', phone: buyer.phone || '',
        first_name: (buyer.name || '').split(' ')[0] || '',
        city: buyer.city || '', region: buyer.state || '', postal: buyer.postal || '',
        country: (cfg && cfg.code === 'US') ? 'us' : 'pa',
        total: s.total.toFixed(2), currency: 'USD',
        skus: s.lines.map((l) => l.slug).join(','),
        num_items: String(s.lines.reduce((n, l) => n + l.qty, 0)),
        fbp: cookie('_fbp'), fbc: fbcValue(),
        source_url: location.href,
      });
      if (navigator.sendBeacon) navigator.sendBeacon(CAPI_URL, data);
      else fetch(CAPI_URL, { method: 'POST', body: data, keepalive: true, mode: 'no-cors' });
    } catch (e) { /* nunca romper el checkout por el tracking */ }
  }
  // --- Registro del pedido en nuestro servidor.
  // El checkout termina abriendo WhatsApp con el mensaje ya escrito, pero es el
  // cliente quien tiene que darle a "enviar". Si no lo hace, el pedido no
  // existía en ningún lado: nombre, correo, telefono, direccion y carrito se
  // perdian. Esto lo guarda ANTES del salto, asi queda el registro y se le
  // puede escribir aunque nunca haya mandado el mensaje.
  //
  // Fire-and-forget igual que el resto del tracking: pase lo que pase con el
  // servidor, el cliente completa su compra.
  const ORDER_URL = 'https://hooks.codexresearchlab.com/order.php';
  function saveOrder(s, id, cfg, payLabel, status, extraNote) {
    try {
      const notes = [buyer.notes || '', extraNote || ''].filter(Boolean).join(' · ');
      const data = new URLSearchParams({
        order_id: id, status: status || 'pending',
        name: buyer.name || '', email: buyer.email || '', phone: buyer.phone || '',
        address1: buyer.address1 || '', address2: buyer.address2 || '',
        city: buyer.city || '', state: buyer.state || '', postal: buyer.postal || '',
        notes: notes, country: (cfg && cfg.label) || '', payment: payLabel || '',
        items: JSON.stringify(s.lines.map((l) => ({
          slug: l.slug, name: l.name, size: l.size, qty: l.qty, subtotal: l.subtotal,
        }))),
        subtotal: s.subtotal.toFixed(2), discount: s.discount.toFixed(2), coupon: coupon || '',
        shipping: s.shipping.toFixed(2), total: s.total.toFixed(2),
        source_url: location.href,
      });
      if (navigator.sendBeacon) navigator.sendBeacon(ORDER_URL, data);
      else fetch(ORDER_URL, { method: 'POST', body: data, keepalive: true, mode: 'no-cors' });
    } catch (e) { /* nunca romper el checkout por el registro */ }
  }

  function trackCoupon(s, id, cfg, methodLabel) {
    if (!(coupon && validCoupon(coupon))) return; // sólo códigos válidos
    try {
      const data = new URLSearchParams({
        code: coupon, order_id: id, total: s.total.toFixed(2),
        currency: 'USD', country: cfg.label, method: methodLabel || '',
      });
      if (navigator.sendBeacon) navigator.sendBeacon(TRACK_URL, data);
      else fetch(TRACK_URL, { method: 'POST', body: data, keepalive: true, mode: 'no-cors' });
    } catch (e) { /* nunca romper el checkout por el contador */ }
  }

  // ---------- Pago crypto (stablecoins ERC-20 en Ethereum) ----------
  // El servidor cotiza y verifica en la cadena; aquí sólo se abre la wallet.
  const CRYPTO_API = 'https://hooks.codexresearchlab.com/crypto-pay.php';

  // El SDK pesa varios MB: se carga SÓLO cuando alguien va a pagar con crypto,
  // así el resto de los clientes no descargan nada de esto.
  function loadPaySdk() {
    if (window.REAPay) return Promise.resolve();
    if (loadPaySdk._p) return loadPaySdk._p;
    loadPaySdk._p = new Promise((resolve, reject) => {
      const sc = document.createElement('script');
      // Se sirve desde nuestro backend, no desde GitHub Pages: sus 4 MB hacían
      // que el build de Pages tardara ~25 min y fallara la mitad de las veces.
      sc.src = 'https://hooks.codexresearchlab.com/reown-pay.js';
      sc.async = true;
      sc.onload = () => (window.REAPay ? resolve() : reject(new Error('sdk_unavailable')));
      sc.onerror = () => { loadPaySdk._p = null; reject(new Error('sdk_load_failed')); };
      document.head.appendChild(sc);
    });
    return loadPaySdk._p;
  }

  async function cryptoApi(payload) {
    const r = await fetch(CRYPTO_API, {
      method: 'POST',
      headers: Object.assign({ 'Content-Type': 'application/json' }, ACC.authHeaders()),
      body: JSON.stringify(Object.assign({ account_token: ACC.token() }, payload)),
    });
    let body = {};
    try { body = await r.json(); } catch (e) { /* respuesta no-JSON */ }
    return body;
  }

  // Tras pagar hay que esperar confirmaciones de la red (~12 s por bloque).
  async function cryptoConfirm(intentId, txHash, asset, onWait) {
    for (let i = 0; i < 15; i++) {
      const b = await cryptoApi({ action: 'confirm', intent_id: intentId, tx_hash: txHash, asset, buyer });
      if (b.ok) return b;
      if (!b.pending) throw new Error(b.error || 'not_verified');
      if (onWait) onWait(b.confirmations || 0);
      await new Promise((r) => setTimeout(r, 8000));
    }
    throw new Error('confirmation_timeout');
  }

  // ---------- Pago con tarjeta (Stripe Checkout hospedado) ----------
  // El servidor crea la sesión con SU precio y devuelve la URL; aquí sólo se
  // salta a Stripe y, al volver, se pregunta si quedó pagada.
  const STRIPE_API = 'https://hooks.codexresearchlab.com/stripe-pay.php';
  const PENDING_KEY = 'rea-stripe-pending-v1';

  const STRIPE_ERRORS = {
    cuenta_requerida: T('Please create an account or sign in to continue.'),
    stripe_no_configurado: T('Card payments are not available right now. You can pay with crypto, or write to us.'),
    stripe_no_disponible: T('The payment provider didn’t respond. Please try again in a moment.'),
    price_mismatch: T('The order total changed. Please review your cart and try again.'),
    producto_agotado: T('One of the items just went out of stock.'),
    correo_invalido: T('Please enter a valid email address.'),
    falta_confirmacion_uso: T('Please confirm the research-use statement before placing your order.'),
    demasiadas_peticiones: T('Too many attempts. Please wait a minute and try again.'),
  };

  const CRYPTO_ERRORS = {
    cuenta_requerida: T('Please create an account or sign in to continue.'),
    sdk_load_failed: T('We couldn’t load the payment module. Check your connection and try again.'),
    sdk_unavailable: T('The payment module didn’t start correctly. Please reload the page.'),
    price_mismatch: T('The order total changed. Please review your cart and try again.'),
    monto_insuficiente: T('The amount received was lower than the order total.'),
    hash_ya_usado: T('That transaction was already used for another order.'),
    cotizacion_expirada: T('The quote expired. Please place the order again.'),
    confirmation_timeout: T('Your payment is still confirming on the network.'),
    producto_agotado: T('One of the items just went out of stock.'),
  };

  async function placeOrder() {
    if (placing) return;
    if (!ACC.isIn()) { ACC.require(() => placeOrder()); return; }
    const s = compute();
    const msg = document.getElementById('coMsg');
    const btn = document.getElementById('coSubmit');
    const setErr = (text) => { if (msg) { msg.className = 'co-msg err'; msg.hidden = false; msg.textContent = text; } };
    const focusErr = (id, text) => { setErr(text); const el = document.getElementById(id); if (el) el.focus(); };
    const get = (id) => { const el = document.getElementById(id); return (el ? el.value : '').trim(); };

    // Recoger + persistir todos los campos.
    buyer.name = get('coName'); buyer.email = get('coEmail'); buyer.phone = get('coPhone');
    buyer.address1 = get('coAddr1'); buyer.address2 = get('coAddr2'); buyer.city = get('coCity');
    buyer.state = get('coState'); buyer.postal = get('coPostal'); buyer.notes = get('coNotes');

    const cfg = country();
    const region = cfg.code === 'US' ? 'state' : 'province';
    const postalReq = cfg.code === 'US';

    // Validación: contacto + dirección obligatorios (dirección 2, notas y postal-fuera-de-US opcionales).
    if (!s.lines.length) return setErr(T('Your cart is empty.'));
    if (buyer.name.length < 2) return focusErr('coName', T('Please enter your full name.'));
    if (buyer.email.length > 120 || !EMAIL_RE.test(buyer.email)) return focusErr('coEmail', T('Please enter a valid email address.'));
    if (buyer.phone.replace(/\D/g, '').length < 6) return focusErr('coPhone', T('Please enter a valid phone number.'));
    if (buyer.address1.length < 4) return focusErr('coAddr1', T('Please enter your shipping address.'));
    if (buyer.city.length < 2) return focusErr('coCity', T('Please enter your city.'));
    if (buyer.state.length < 2) return focusErr('coState', T('Please enter your {region}.', { region: T(region) }));
    if (postalReq && buyer.postal.length < 3) return focusErr('coPostal', T('Please enter your ZIP code.'));
    const ack = document.getElementById('coAck');
    if (!ack || !ack.checked) return focusErr('coAck', T('Please confirm the research-use statement before placing your order.'));

    const payId = currentPayment();
    const payLabel = (cfg.payments.find((p) => p.id === payId) || cfg.payments[0]).label;
    const id = orderId();
    const clean = (v) => String(v == null ? '' : v).replace(/[<>]/g, '').slice(0, 500);
    const cityLine = [buyer.city, buyer.state].map((x) => x.trim()).filter(Boolean).join(', ');
    const addressText = [buyer.address1, buyer.address2, cityLine, buyer.postal, cfg.label]
      .map((x) => clean(x)).filter(Boolean).join('\n');
    const itemsText = s.lines.map((l) => `${l.name} (${l.size}) x${l.qty} - ${money(l.subtotal)}`).join('\n');

    // ---- Ruta tarjeta (Stripe Checkout): el cobro ocurre en Stripe ----
    if (payId === 'stripe') {
      placing = true;
      if (msg) msg.hidden = true;
      if (btn) { btn.disabled = true; btn.textContent = T('Opening secure checkout…'); }

      // Se registra antes del salto: si abandona la pasarela, el pedido existe
      // igual y se le puede dar seguimiento.
      saveOrder(s, id, cfg, 'Card (Stripe)', 'pending');
      fireLead(s);
      stageForCapi(s, id, cfg);

      try {
        const r = await fetch(STRIPE_API, {
          method: 'POST',
          // El servidor no cotiza sin cuenta: el token va en cada llamada.
          headers: Object.assign({ 'Content-Type': 'application/json' }, ACC.authHeaders()),
          body: JSON.stringify({
            action: 'session', order_id: id, country: cfg.code, coupon: coupon || '',
            account_token: ACC.token(),
            // Para que Stripe devuelva al carrito en el idioma en que se compró.
            lang: (window.REAi18n && window.REAi18n.lang) || 'en',
            research_use_ack: true,
            // Cookies de atribución de Meta: sólo existen en el navegador y el
            // Purchase de servidor las necesita para emparejar la compra.
            fbp: cookie('_fbp'), fbc: fbcValue(), source_url: location.href,
            items: s.lines.map((l) => ({ slug: l.slug, size: l.size, qty: l.qty })),
            buyer,
          }),
        });
        let b = {};
        try { b = await r.json(); } catch (e) { /* respuesta no-JSON */ }
        // La sesión caducó entre que llenó el formulario y le dio a pagar: se
        // limpia y se le pide entrar, en vez de dejarlo con un error a secas.
        if (r.status === 401 || b.error === 'cuenta_requerida') {
          if (ACC.expire) ACC.expire();
          placing = false;
          if (btn) { btn.disabled = false; btn.textContent = T('Pay by card'); }
          ACC.require(() => placeOrder());
          return;
        }
        if (!b.ok || !b.url) throw new Error(b.error || 'session_failed');
        // El servidor manda sobre el precio: si no coincide con lo que ve el
        // cliente, no se le manda a pagar un importe distinto al mostrado.
        if (Math.abs(Number(b.amount) - s.total) > 0.01) throw new Error('price_mismatch');

        sessionStorage.setItem(PENDING_KEY, JSON.stringify({ id: b.order_id, email: buyer.email }));
        window.location.href = b.url;   // adiós: el resto ocurre en Stripe
      } catch (err) {
        placing = false;
        if (btn) { btn.disabled = false; btn.textContent = T('Pay by card'); }
        const code = String(err && err.message ? err.message : err);
        setErr(STRIPE_ERRORS[code] || T('We couldn’t open the secure checkout. Please try again or contact us.'));
      }
      return;
    }

    // ---- Ruta Crypto: cobro on-chain, verificado por el servidor ----
    if (payId === 'crypto') {
      placing = true;
      if (msg) msg.hidden = true;
      const assetEl = document.getElementById('coAsset');
      const asset = (assetEl && assetEl.value) || 'USDC';
      const setBtn = (t) => { if (btn) { btn.disabled = true; btn.textContent = t; } };
      const restore = () => { placing = false; if (btn) { btn.disabled = false; btn.textContent = T('Pay with crypto'); } };
      let txHash = null;

      // Se guarda antes de abrir la wallet: si abandona en ese paso, el pedido
      // igual queda registrado y se le puede dar seguimiento.
      saveOrder(s, id, cfg, 'Crypto ' + asset, 'pending');

      try {
        setBtn(T('Preparing payment…'));
        const q = await cryptoApi({
          action: 'quote', country: cfg.code, coupon: coupon || '',
          items: s.lines.map((l) => ({ slug: l.slug, size: l.size, qty: l.qty })),
        });
        // Misma cortesía que en tarjeta: si la sesión murió, se pide entrar.
        if (q.error === 'cuenta_requerida') {
          if (ACC.expire) ACC.expire();
          restore();
          ACC.require(() => placeOrder());
          return;
        }
        if (!q.ok) throw new Error(q.error || 'quote_failed');
        // El servidor manda sobre el precio; si no coincide con lo que ve el
        // cliente, se detiene en vez de cobrar un importe distinto al mostrado.
        if (Math.abs(Number(q.amount) - s.total) > 0.01) throw new Error('price_mismatch');

        setBtn(T('Opening wallet…'));
        await loadPaySdk();

        setBtn(T('Confirm in your wallet…'));
        const res = await window.REAPay.pay({ asset, amount: Number(q.amount), recipient: q.recipient });
        if (!res.success) throw new Error(res.error || 'cancelled');
        txHash = res.txHash;

        setBtn(T('Verifying payment…'));
        const conf = await cryptoConfirm(q.intent_id, txHash, res.asset, (c) => setBtn(T('Confirming… {n}/3', { n: c })));

        if (typeof fbq === 'function') fbq('track', 'Purchase',
          { value: Number(conf.amount), currency: 'USD', content_ids: s.lines.map((l) => l.slug) },
          { eventID: conf.order_id });
        if (typeof gtag === 'function') gtag('event', 'purchase', {
          transaction_id: conf.order_id, value: Number(conf.amount), currency: 'USD',
          items: s.lines.map((l) => ({ item_id: l.slug, item_name: l.name, price: l.unit, quantity: l.qty })),
        });
        stageForCapi(s, conf.order_id, cfg);
        trackCoupon(s, conf.order_id, cfg, 'Crypto ' + conf.asset);
        // Mismo order_id que el guardado de arriba: actualiza la fila, no la duplica.
        saveOrder(s, id, cfg, 'Crypto ' + conf.asset, 'paid', 'cobro ' + conf.order_id + ' tx ' + txHash);
        confirmation = {
          id: conf.order_id, email: clean(buyer.email),
          crypto: true, tx: txHash, asset: conf.asset, amount: conf.amount,
        };
        resetBuyer();
        placing = false;
        cart.detailed().forEach((l) => cart.remove(l.id)); // vacía el carrito → render()
        render();
      } catch (err) {
        restore();
        const code = String(err && err.message ? err.message : err);
        if (code === 'cancelled' || /reject|denied|cancel/i.test(code)) {
          if (msg) { msg.className = 'co-msg'; msg.hidden = false; msg.textContent = T('Payment cancelled. Your cart is untouched.'); }
          return;
        }
        // Caso delicado: el dinero YA salió pero no pudimos cerrar la orden.
        // Nunca dejar al cliente sin comprobante: se le muestra el hash y un
        // canal directo para que no pierda ni el pago ni el pedido.
        if (txHash) {
          const waMsg = T('Hi Codex Research, I paid order {id} with {asset} but the site could not confirm it.',
            { id: id, asset: asset }) + '\n' + T('Transaction') + ': ' + txHash + '\n' + T('Total') + ': ' + money(s.total);
          const link = document.createElement('a');
          link.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(waMsg);
          link.target = '_blank'; link.rel = 'noopener'; link.textContent = T('send us the receipt on WhatsApp');
          if (msg) {
            msg.className = 'co-msg err'; msg.hidden = false; msg.textContent = '';
            msg.append(T('Your payment went through, but we couldn’t confirm it automatically') + ' (' +
              (CRYPTO_ERRORS[code] || code) + ') ' + T('Transaction') + ' ' + txHash + '. ' + T('Please') + ' ',
              link, ' ' + T('and we’ll release your order.'));
          }
          return;
        }
        setErr(CRYPTO_ERRORS[code] || T('We couldn’t start the payment. Please try again or contact us.'));
      }
      return;
    }

    // Ningún otro método cobra en este sitio: si llegara aquí, es un estado
    // imposible (país mal configurado) y es mejor decirlo que fingir un pedido.
    setErr(T('That payment method is no longer available. Please choose card or crypto.'));
  }

  /* ---------- Vuelta desde Stripe ----------
     Stripe devuelve al cliente con ?paid=<session_id>. Ese parámetro NO prueba
     nada por sí solo: se le pregunta al servidor, que a su vez se lo pregunta a
     Stripe. El cobro se cierra igual por webhook aunque aquí falle la consulta. */
  async function handleStripeReturn() {
    const qs = new URLSearchParams(location.search);
    const sid = qs.get('paid');
    const canceled = qs.get('canceled');
    if (!sid && !canceled) return false;

    // La URL se limpia siempre: recargar no debe repetir nada.
    history.replaceState(null, '', location.pathname);

    if (canceled) {
      // El aviso va ENCIMA del carrito, no en su lugar: quien cancela quiere
      // volver a su pedido, no quedarse mirando un mensaje suelto.
      render();
      const note = document.createElement('p');
      note.className = 'co-msg cart-notice';
      note.textContent = T('Payment cancelled. Your cart is untouched.');
      root.prepend(note);
      return true;
    }

    let pending = {};
    try { pending = JSON.parse(sessionStorage.getItem(PENDING_KEY) || '{}'); } catch (e) { /* vacío */ }
    sessionStorage.removeItem(PENDING_KEY);

    root.innerHTML = `<div class="order-success"><p>${T('Confirming your payment…')}</p></div>`;
    const s = compute();

    let b = {};
    try {
      const r = await fetch(STRIPE_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'status', session_id: sid }),
      });
      b = await r.json();
    } catch (e) { /* sin red: se trata como no confirmado */ }

    if (!b.ok) {
      // El dinero puede estar cobrado aunque esta consulta falle: nunca se le
      // dice al cliente que no pagó, se le da un canal directo.
      const waMsg = T('Hi Codex Research, I paid order {id} by card but the site could not confirm it.',
        { id: (b.order_id || pending.id || '') });
      root.innerHTML = `
        <div class="order-success">
          <h2>${T('We’re still confirming your payment')}</h2>
          <p>${T('If your card was charged, your order is safe: we receive the confirmation directly from Stripe. Write to us and we’ll check it right away.')}</p>
          <a class="btn btn-primary" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}" target="_blank" rel="noopener">${WA_ICON}${T('Message us on WhatsApp')}</a>
        </div>`;
      return true;
    }

    const orderId = b.order_id || pending.id || '';
    if (s.lines.length) {
      if (typeof fbq === 'function') fbq('track', 'Purchase',
        { value: Number(b.amount), currency: 'USD', content_ids: s.lines.map((l) => l.slug) },
        { eventID: orderId });
      if (typeof gtag === 'function') gtag('event', 'purchase', {
        transaction_id: orderId, value: Number(b.amount), currency: 'USD',
        items: s.lines.map((l) => ({ item_id: l.slug, item_name: l.name, price: l.unit, quantity: l.qty })),
      });
      trackCoupon(s, orderId, country(), 'Card (Stripe)');
    }

    confirmation = { id: orderId, email: b.email || pending.email || '' };
    cart.detailed().forEach((l) => cart.remove(l.id)); // vacía el carrito → render()
    render();
    return true;
  }

  // Re-render cuando cambia el carrito (drawer, otra pestaña, quick-add)
  window.addEventListener('rea-cart-change', render);
  // Re-render al cambiar de país: actualiza envío, métodos de pago y campos obligatorios.
  window.addEventListener('rea-country-change', render);
  handleStripeReturn().then((handled) => { if (!handled) render(); });

  // ---------- Meta Pixel: eventos de conversión ----------
  // InitiateCheckout: al llegar a la página de carrito con productos (una vez).
  {
    const s0 = compute();
    if (s0.lines.length) {
      if (typeof fbq === 'function') fbq('track', 'InitiateCheckout', {
        value: s0.total, currency: 'USD',
        num_items: s0.lines.reduce((n, l) => n + l.qty, 0),
        content_ids: s0.lines.map((l) => l.slug),
      });
      if (typeof gtag === 'function') gtag('event', 'begin_checkout', {
        currency: 'USD', value: s0.total,
        items: s0.lines.map((l) => ({ item_id: l.slug, item_name: l.name, price: l.unit, quantity: l.qty })),
      });
    }
  }
  // Lead se dispara dentro de placeOrder(); Purchase, al volver pagado de Stripe
  // o al verificarse el cobro en cadena.
})();
