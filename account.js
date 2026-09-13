/* Codex Research - cuentas de investigador.
   Para comprar hay que tener cuenta y haber declarado 21+ y uso en laboratorio.
   El catálogo y los precios siguen siendo públicos: el gate está en añadir al
   carrito y en pagar, que es donde importa y donde el servidor lo comprueba.

   El servidor es el que manda: aunque alguien se salte esta capa, ni
   stripe-pay.php ni crypto-pay.php cotizan sin una sesión válida. */
(function () {
  const API = 'https://hooks.codexresearchlab.com/account.php';
  const KEY = 'rea-account-v1';
  const T = window.T || ((s) => s);

  let state = null;   // { token, account }
  try { state = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { state = null; }

  const save = (s) => {
    state = s;
    try { s ? localStorage.setItem(KEY, JSON.stringify(s)) : localStorage.removeItem(KEY); } catch (e) { /* modo privado */ }
    window.dispatchEvent(new CustomEvent('rea-account-change'));
  };

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  async function api(payload) {
    const headers = { 'Content-Type': 'application/json' };
    if (state && state.token) headers.Authorization = 'Bearer ' + state.token;
    const r = await fetch(API, { method: 'POST', headers, body: JSON.stringify(payload) });
    let b = {};
    try { b = await r.json(); } catch (e) { /* respuesta no-JSON */ }
    return b;
  }

  const ERRORS = {
    correo_invalido: 'Please enter a valid email address.',
    clave_corta: 'The password needs at least 8 characters.',
    nombre_invalido: 'Please enter your full name.',
    falta_declaracion: 'Please confirm the research-use statement.',
    correo_ya_registrado: 'That email already has an account. Sign in instead.',
    credenciales_invalidas: 'Email or password is not correct.',
    demasiados_intentos: 'Too many attempts. Please wait a few minutes.',
    cuenta_requerida: 'Please create an account or sign in to continue.',
  };

  /* ---------- Modal ---------- */
  let modal = null;
  let pending = null;    // lo que el visitante quería hacer antes del gate

  function html(mode) {
    const alta = mode === 'register';
    return `
      <div class="acc-backdrop" data-acc-close></div>
      <div class="acc-modal" role="dialog" aria-modal="true" aria-labelledby="accTitle">
        <button class="acc-x" data-acc-close aria-label="${T('Close')}">✕</button>
        <h2 id="accTitle">${alta ? T('Create your researcher account') : T('Sign in')}</h2>
        <p class="acc-sub">${alta
          ? T('Ordering is limited to researchers. It takes a minute and you only do it once.')
          : T('Welcome back. Sign in to continue with your order.')}</p>
        <form id="accForm" novalidate>
          ${alta ? `
          <label class="co-field"><span>${T('Full name')}</span>
            <input type="text" id="accName" required maxlength="80" autocomplete="name"></label>` : ''}
          <label class="co-field"><span>${T('Email')}</span>
            <input type="email" id="accEmail" required maxlength="120" autocomplete="email"></label>
          <label class="co-field"><span>${T('Password')}</span>
            <input type="password" id="accPass" required minlength="8" maxlength="200"
                   autocomplete="${alta ? 'new-password' : 'current-password'}"></label>
          ${alta ? `
          <label class="co-field"><span>${T('Organization or lab')} <em>${T('(optional)')}</em></span>
            <input type="text" id="accOrg" maxlength="120" autocomplete="organization"></label>
          <label class="co-ack">
            <input type="checkbox" id="accDecl" required>
            <span>${T('I confirm I am 21 or older and that I am purchasing these products for laboratory research use only. They are not for human or animal consumption.')}
              <a href="usage/" target="_blank" rel="noopener">${T('Read the usage notice')}</a></span>
          </label>` : ''}
          <p class="co-msg" id="accMsg" role="alert" hidden></p>
          <button type="submit" class="btn btn-primary acc-submit">${alta ? T('Create account') : T('Sign in')}</button>
        </form>
        <p class="acc-switch">${alta
          ? `${T('Already have an account?')} <button type="button" data-acc-mode="login">${T('Sign in')}</button>`
          : `${T('No account yet?')} <button type="button" data-acc-mode="register">${T('Create one')}</button>`}</p>
      </div>`;
  }

  function close() {
    if (!modal) return;
    modal.remove();
    modal = null;
    document.body.style.overflow = '';
    pending = null;
  }

  function open(mode) {
    close();
    modal = document.createElement('div');
    modal.className = 'acc-wrap';
    modal.innerHTML = html(mode || 'register');
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    modal.querySelectorAll('[data-acc-close]').forEach((el) => el.addEventListener('click', close));
    modal.querySelectorAll('[data-acc-mode]').forEach((el) =>
      el.addEventListener('click', () => open(el.getAttribute('data-acc-mode'))));
    document.addEventListener('keydown', onEsc);
    const first = modal.querySelector('input');
    if (first) first.focus();
    modal.querySelector('#accForm').addEventListener('submit', (e) => { e.preventDefault(); submit(mode || 'register'); });
  }

  function onEsc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); } }

  async function submit(mode) {
    const msg = document.getElementById('accMsg');
    const btn = modal.querySelector('.acc-submit');
    const val = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const err = (t) => { if (msg) { msg.className = 'co-msg err'; msg.hidden = false; msg.textContent = t; } };

    const alta = mode === 'register';
    if (alta && !document.getElementById('accDecl').checked) return err(T(ERRORS.falta_declaracion));

    btn.disabled = true;
    btn.textContent = T('One moment…');
    const payload = alta
      ? { action: 'register', email: val('accEmail'), password: val('accPass'), name: val('accName'),
          org: val('accOrg'), country: (window.REACountry && window.REACountry.config().code) || '',
          declaration: true, source_url: location.href }
      : { action: 'login', email: val('accEmail'), password: val('accPass') };

    let b = {};
    try { b = await api(payload); } catch (e) { b = { error: 'red' }; }

    if (!b.ok) {
      btn.disabled = false;
      btn.textContent = alta ? T('Create account') : T('Sign in');
      return err(T(ERRORS[b.error] || 'We couldn’t complete that. Please try again.'));
    }

    save({ token: b.token, account: b.account });
    const seguir = pending;
    close();
    if (seguir) seguir();
  }

  /* ---------- API pública ---------- */
  const isIn = () => !!(state && state.token);

  // Pide cuenta antes de seguir. Si ya la hay, ejecuta y punto.
  function require(fn) {
    if (isIn()) { fn(); return true; }
    pending = fn;
    open('register');
    return false;
  }

  async function refresh() {
    if (!isIn()) return;
    const b = await api({ action: 'me' });
    if (!b.ok) save(null);                       // sesión caducada
    else save({ token: state.token, account: b.account });
  }

  async function logout() {
    try { await api({ action: 'logout' }); } catch (e) { /* da igual: se borra local */ }
    save(null);
  }

  window.REAAccount = {
    isIn,
    require,
    open,
    close,
    logout,
    refresh,
    token: () => (state ? state.token : ''),
    get: () => (state ? state.account : null),
    authHeaders: () => (isIn() ? { Authorization: 'Bearer ' + state.token } : {}),
  };

  /* ---------- El gate: añadir al carrito pide cuenta ---------- */
  // Se envuelve el único punto por el que pasa todo: REACart.add. Así da igual
  // desde qué botón, página o atajo se añada.
  if (window.REACart && typeof window.REACart.add === 'function') {
    const add = window.REACart.add.bind(window.REACart);
    window.REACart.add = function (slug, size, qty, opts) {
      return require(() => add(slug, size, qty, opts));
    };
  }

  // Al abrir la tienda, se comprueba que la sesión siga viva (caduca a los 30 días).
  if (isIn()) refresh();
})();
