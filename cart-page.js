/* Codex Research — cart page.
   Conversion strategies: free-shipping progress bar, cross-sell ("complete your
   order"), discount codes, trust badges + guarantee, scarcity, social proof,
   sticky order summary with a single prominent checkout CTA. */
(function () {
  const { PRODUCTS, COUPONS, WHATSAPP, EMAILJS = {} } = window.REA;
  const cart = window.REACart;
  const ui = window.REAui;
  const root = document.getElementById('cartPageRoot');
  if (!root) return;

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

  // ---------- Pago por correo (US · Zelle) ----------
  const emailReady = () => !!(EMAILJS.publicKey && EMAILJS.serviceId && EMAILJS.templateMerchant && EMAILJS.templateCustomer);
  // El flujo por correo sólo aplica a US + Zelle, y sólo si EmailJS está configurado.
  const isEmailFlow = (cfg, payId) => cfg.code === 'US' && payId === 'zelle' && emailReady();
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Datos del comprador (contacto + envío); se conservan entre re-renders.
  const buyer = { name: '', email: '', phone: '', address1: '', address2: '', city: '', state: '', postal: '', notes: '' };
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
    if (c && c.type === 'percent') discount = subtotal * (c.value / 100);
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
        <div class="ship-progress-txt">✓ You’ve unlocked <b>free shipping</b></div>
        <div class="ship-track"><i style="width:100%"></i></div>
      </div>`;
    }
    const pct = Math.min(100, (subtotal / ship.freeThreshold) * 100);
    const left = ship.freeThreshold - subtotal;
    return `<div class="ship-progress">
      <div class="ship-progress-txt">Add <b>${money(left)}</b> more to get <b>free shipping</b></div>
      <div class="ship-track"><i style="width:${pct}%"></i></div>
    </div>`;
  }

  function stockNote(stock) {
    if (stock != null && stock < 10) return `<span class="stock-low">Only ${stock} left</span>`;
    return `<span class="stock-ok">In stock</span>`;
  }

  function itemRow(l) {
    return `
      <div class="ci-row">
        <a class="ci-thumb" href="product.html?slug=${l.slug}">${l.photo ? `<img class="product-photo" src="${l.photo}" alt="${l.name}" loading="lazy">` : ui.vial(l.name, l.size)}</a>
        <div class="ci-body">
          <div class="ci-head">
            <div>
              <a class="ci-name" href="product.html?slug=${l.slug}">${l.name}</a>
              <div class="ci-meta"><span class="mono-tag">${l.size}</span> · ${stockNote(l.stock)}</div>
            </div>
            <button class="ci-rm" data-act="rm" data-id="${l.id}" aria-label="Remove ${l.name}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
          <div class="ci-foot">
            <div class="qty-stepper">
              <button data-act="dec" data-id="${l.id}" aria-label="Decrease">−</button>
              <span>${l.qty}</span>
              <button data-act="inc" data-id="${l.id}" aria-label="Increase">+</button>
            </div>
            <div class="ci-price">
              <b>${money(l.subtotal)}</b>
              ${l.qty > 1 ? `<span>${money(l.unit)} each</span>` : ''}
            </div>
          </div>
        </div>
      </div>`;
  }

  // Texto del botón / nota según el método (Zelle envía correo; el resto, WhatsApp).
  const checkoutLabel = (cfg, payId) => (isEmailFlow(cfg, payId)
    ? { btn: 'Place order', icon: '', note: 'We’ll email you a confirmation and contact you to arrange your Zelle payment. No charge happens here.' }
    : { btn: 'Continue on WhatsApp', icon: WA_ICON, note: 'We’ll confirm your order and payment details on WhatsApp. No charge happens here.' });

  // Formulario único de checkout (US y Panamá, todos los métodos):
  // contacto + dirección obligatorios → método de pago → pagar.
  function checkoutForm(s, cfg, payId) {
    const postalReq = cfg.code === 'US';
    const region = cfg.code === 'US' ? 'State' : 'Province';
    const c = checkoutLabel(cfg, payId);
    return `
      <form class="checkout-form" id="checkoutForm" novalidate>
        <div class="co-section">
          <span class="co-title">Your details</span>
          <label class="co-field"><span>Full name</span>
            <input type="text" id="coName" required maxlength="80" autocomplete="name" value="${esc(buyer.name)}" placeholder="First and last name"></label>
          <label class="co-field"><span>Email</span>
            <input type="email" id="coEmail" required maxlength="120" autocomplete="email" value="${esc(buyer.email)}" placeholder="you@email.com"></label>
          <label class="co-field"><span>Phone</span>
            <input type="tel" id="coPhone" required maxlength="40" autocomplete="tel" value="${esc(buyer.phone)}" placeholder="Incl. country code"></label>
        </div>

        <div class="co-section">
          <span class="co-title">Shipping address</span>
          <label class="co-field"><span>Address</span>
            <input type="text" id="coAddr1" required maxlength="120" autocomplete="address-line1" value="${esc(buyer.address1)}" placeholder="Street and number"></label>
          <label class="co-field"><span>Apt, suite, etc. <em>(optional)</em></span>
            <input type="text" id="coAddr2" maxlength="80" autocomplete="address-line2" value="${esc(buyer.address2)}" placeholder="Optional"></label>
          <label class="co-field"><span>City</span>
            <input type="text" id="coCity" required maxlength="60" autocomplete="address-level2" value="${esc(buyer.city)}" placeholder="City"></label>
          <div class="co-grid">
            <label class="co-field"><span>${region}</span>
              <input type="text" id="coState" required maxlength="60" autocomplete="address-level1" value="${esc(buyer.state)}" placeholder="${region}"></label>
            <label class="co-field"><span>ZIP / Postal${postalReq ? '' : ' <em>(optional)</em>'}</span>
              <input type="text" id="coPostal" ${postalReq ? 'required' : ''} maxlength="20" autocomplete="postal-code" value="${esc(buyer.postal)}" placeholder="${postalReq ? 'ZIP code' : 'Optional'}"></label>
          </div>
          <label class="co-field"><span>Notes <em>(optional)</em></span>
            <textarea id="coNotes" maxlength="500" rows="2" placeholder="Anything we should know?">${esc(buyer.notes)}</textarea></label>
        </div>

        <div class="co-section pay-methods">
          <span class="co-title">Payment method · ${cfg.flag} ${esc(cfg.label)}</span>
          ${cfg.payments.map((p) => `
            <label class="pay-opt">
              <input type="radio" name="payMethod" value="${esc(p.id)}" ${p.id === payId ? 'checked' : ''}>
              <span>${esc(p.label)}</span>
            </label>`).join('')}
        </div>

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

  // Pantalla de éxito tras una orden aceptada por correo.
  function confirmationView(c) {
    return `
      <div class="order-success">
        <div class="order-success-mark" aria-hidden="true">✓</div>
        <h2>Order received</h2>
        <p>Thanks! Your order <b>${esc(c.id)}</b> has been accepted. We’ve emailed a confirmation to
        <b>${esc(c.email)}</b>, and our team will contact you shortly to arrange your Zelle payment and shipping.</p>
        <p class="order-success-sub">Didn’t get the email? Check your spam folder, or write to us at ${esc(EMAILJS.merchantEmail || '')}.</p>
        <a class="btn btn-primary" href="catalog.html">Continue shopping</a>
      </div>`;
  }

  function summary(s) {
    const cfg = country();
    const payId = currentPayment();
    const couponMsg = coupon
      ? (validCoupon(coupon)
          ? `<div class="coupon-msg ok">✓ Code <b>${esc(coupon)}</b> applied · ${esc(COUPONS[coupon].label)} <button data-coupon-remove aria-label="Remove code">✕</button></div>`
          : `<div class="coupon-msg err">Code “${esc(coupon)}” is not valid.</div>`)
      : '';

    return `
      <aside class="cartpage-aside">
        <div class="summary-card">
          <h3>Order summary</h3>

          <form class="coupon-row" id="couponForm">
            <input type="text" id="couponInput" placeholder="Discount code" aria-label="Discount code" value="${coupon && !validCoupon(coupon) ? esc(coupon) : ''}">
            <button type="submit" class="btn btn-ghost">Apply</button>
          </form>
          ${couponMsg}

          <div class="sum-rows">
            <div class="sum-row"><span>Subtotal</span><span>${money(s.subtotal)}</span></div>
            ${s.discount > 0 ? `<div class="sum-row disc"><span>Discount</span><span>−${money(s.discount)}</span></div>` : ''}
            <div class="sum-row"><span>Shipping</span><span>${s.shipping === 0 ? '<b class="free">Free</b>' : money(s.shipping)}</span></div>
            <p class="sum-eta">${cfg.flag} ${cfg.eta}</p>
            <div class="sum-row total"><span>Total</span><b>${money(s.total)}</b></div>
          </div>

          ${checkoutForm(s, cfg, payId)}

          <ul class="sum-trust">
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Secure & private</li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> Discreet packaging</li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Batch-verified with COA</li>
          </ul>
        </div>

        <div class="guarantee-card">
          <span class="guarantee-mark" aria-hidden="true"></span>
          <div>
            <b>Codex Guarantee</b>
            <p>Every batch is third-party tested. If your COA doesn’t match, we make it right.</p>
          </div>
        </div>
      </aside>`;
  }

  function crossSell() {
    const inCart = new Set(cart.items().map((i) => i.slug));
    const recs = PRODUCTS.filter((p) => !inCart.has(p.slug)).slice(0, 4);
    if (!recs.length) return '';
    return `
      <section class="cross-sell">
        <div class="section-head" style="margin-bottom:1.4rem;">
          <h2>Complete your order</h2>
          <p>Frequently added together. Verified and ready to ship.</p>
        </div>
        <div class="products-grid" id="crossSellGrid">
          ${recs.map(ui.productCard).join('')}
        </div>
      </section>`;
  }

  const socialProof = `
    <div class="cart-social">
      <div><strong class="count-up">4.9/5</strong><span>average rating</span></div>
      <div><strong class="count-up">1,200+</strong><span>orders shipped</span></div>
      <div><strong class="count-up">100%</strong><span>batches with COA</span></div>
      <div><strong>24–48 h</strong><span>dispatch</span></div>
    </div>`;

  function emptyState() {
    const popular = PRODUCTS.slice(0, 4);
    return `
      <div class="cart-empty-page">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h2>Your cart is empty</h2>
        <p>Browse our verified compounds. Every batch ships with its certificate of analysis.</p>
        <a class="btn btn-primary" href="catalog.html">Browse catalog</a>
      </div>
      <section class="cross-sell">
        <div class="section-head" style="margin-bottom:1.4rem;"><h2>Popular right now</h2></div>
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
            <a class="cartpage-continue" href="catalog.html">← Continue shopping</a>
          </div>
          ${summary(s)}
        </div>
        ${crossSell()}
        ${socialProof}`;
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

    // Método de pago: se guarda y sólo actualiza el botón/nota (conserva el formulario).
    root.querySelectorAll('input[name="payMethod"]').forEach((r) => {
      r.addEventListener('change', () => { localStorage.setItem(PAY_KEY, r.value); updateCheckoutButton(); });
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

  // ---------- Envío de la orden por correo (US · Zelle) ----------
  function sendEmail(templateId, params) {
    return fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: EMAILJS.serviceId,
        template_id: templateId,
        user_id: EMAILJS.publicKey,
        template_params: params,
      }),
    }).then((r) => { if (!r.ok) throw new Error('EmailJS ' + r.status); return r; });
  }

  const fireLead = (s) => {
    if (typeof fbq === 'function') fbq('track', 'Lead', { value: s.total, currency: 'USD', content_ids: s.lines.map((l) => l.slug) });
  };

  async function placeOrder() {
    if (placing) return;
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
    if (!s.lines.length) return setErr('Your cart is empty.');
    if (buyer.name.length < 2) return focusErr('coName', 'Please enter your full name.');
    if (buyer.email.length > 120 || !EMAIL_RE.test(buyer.email)) return focusErr('coEmail', 'Please enter a valid email address.');
    if (buyer.phone.replace(/\D/g, '').length < 6) return focusErr('coPhone', 'Please enter a valid phone number.');
    if (buyer.address1.length < 4) return focusErr('coAddr1', 'Please enter your shipping address.');
    if (buyer.city.length < 2) return focusErr('coCity', 'Please enter your city.');
    if (buyer.state.length < 2) return focusErr('coState', 'Please enter your ' + region + '.');
    if (postalReq && buyer.postal.length < 3) return focusErr('coPostal', 'Please enter your ZIP code.');

    const payId = currentPayment();
    const payLabel = (cfg.payments.find((p) => p.id === payId) || cfg.payments[0]).label;
    const id = orderId();
    const clean = (v) => String(v == null ? '' : v).replace(/[<>]/g, '').slice(0, 500);
    const cityLine = [buyer.city, buyer.state].map((x) => x.trim()).filter(Boolean).join(', ');
    const addressText = [buyer.address1, buyer.address2, cityLine, buyer.postal, cfg.label]
      .map((x) => clean(x)).filter(Boolean).join('\n');
    const itemsText = s.lines.map((l) => `${l.name} (${l.size}) x${l.qty} — ${money(l.subtotal)}`).join('\n');

    // ---- Ruta Zelle (US): envía la orden por correo ----
    if (isEmailFlow(cfg, payId)) {
      placing = true;
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      if (msg) msg.hidden = true;
      const params = {
        order_id: id, customer_name: clean(buyer.name), customer_email: clean(buyer.email),
        customer_phone: clean(buyer.phone), shipping_address: addressText.replace(/\n/g, '<br>'), notes: clean(buyer.notes) || '—',
        order_items: itemsText.replace(/\n/g, '<br>'), subtotal: money(s.subtotal),
        discount: s.discount > 0 ? '-' + money(s.discount) + (coupon ? ' (' + clean(coupon) + ')' : '') : '—',
        shipping: s.shipping === 0 ? 'Free' : money(s.shipping), total: money(s.total),
        country: cfg.label, payment: 'Zelle', eta: cfg.eta,
        merchant_email: EMAILJS.merchantEmail || '', reply_to: clean(buyer.email),
      };
      try {
        // 1) La orden llega a TI (crítico). 2) Confirmación al cliente (secundario).
        await sendEmail(EMAILJS.templateMerchant, Object.assign({ to_email: EMAILJS.merchantEmail || '' }, params));
        try { await sendEmail(EMAILJS.templateCustomer, Object.assign({ to_email: clean(buyer.email) }, params)); }
        catch (e) { /* la orden ya te llegó a ti */ }
        fireLead(s);
        confirmation = { id, email: clean(buyer.email) };
        resetBuyer();
        placing = false;
        cart.detailed().forEach((l) => cart.remove(l.id)); // vacía el carrito → render()
        render();
      } catch (err) {
        placing = false;
        if (btn) { btn.disabled = false; btn.textContent = 'Place order'; }
        const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Codex Research, order ' + id + ' failed to send online:\n' + itemsText + '\nTotal: ' + money(s.total))}`;
        const link = document.createElement('a');
        link.href = wa; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'send it on WhatsApp';
        if (msg) { msg.className = 'co-msg err'; msg.hidden = false; msg.textContent = ''; msg.append('We couldn’t send your order right now. Please try again, or ', link, '.'); }
      }
      return;
    }

    // ---- Demás métodos (US Crypto · Panamá): continúa en WhatsApp con toda la info ----
    const waText = encodeURIComponent(
      'Hi Codex Research, I’d like to place this order:\n' +
      s.lines.map((l) => `• ${l.name} (${l.size}) x${l.qty} — ${money(l.subtotal)}`).join('\n') +
      `\n\nOrder: ${id}` +
      `\nName: ${clean(buyer.name)}` +
      `\nEmail: ${clean(buyer.email)}` +
      `\nPhone: ${clean(buyer.phone)}` +
      `\nShipping address:\n${addressText}` +
      (buyer.notes ? `\nNotes: ${clean(buyer.notes)}` : '') +
      `\n\nPayment: ${clean(payLabel)}` +
      `\nSubtotal: ${money(s.subtotal)}` +
      (s.discount > 0 ? `\nDiscount (${clean(coupon)}): -${money(s.discount)}` : '') +
      `\nShipping: ${s.shipping === 0 ? 'Free' : money(s.shipping)} (${cfg.eta})` +
      `\nTotal: ${money(s.total)}`
    );
    placing = true; // evita doble apertura / doble Lead por doble clic
    fireLead(s);
    window.open(`https://wa.me/${WHATSAPP}?text=${waText}`, '_blank', 'noopener');
    if (msg) { msg.className = 'co-msg'; msg.hidden = false; msg.textContent = 'Opening WhatsApp… send the message to complete your order.'; }
    setTimeout(() => { placing = false; }, 1500);
  }

  // Re-render cuando cambia el carrito (drawer, otra pestaña, quick-add)
  window.addEventListener('rea-cart-change', render);
  // Re-render al cambiar de país: actualiza envío, métodos de pago y campos obligatorios.
  window.addEventListener('rea-country-change', render);
  render();

  // ---------- Meta Pixel: eventos de conversión ----------
  // InitiateCheckout: al llegar a la página de carrito con productos (una vez).
  if (typeof fbq === 'function') {
    const s0 = compute();
    if (s0.lines.length) {
      fbq('track', 'InitiateCheckout', {
        value: s0.total, currency: 'USD',
        num_items: s0.lines.reduce((n, l) => n + l.qty, 0),
        content_ids: s0.lines.map((l) => l.slug),
      });
    }
  }
  // Lead se dispara dentro de placeOrder() al colocar la orden (correo o WhatsApp).
})();
