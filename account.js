/* Codex Research - cuentas de investigador.
   Para comprar hay que tener cuenta APROBADA. El alta pide la institución para la
   que se compra (nombre, tipo, cargo, área de investigación) y la declaración de
   21+ y uso en laboratorio; la cuenta nace pendiente y paga cuando alguien la
   aprueba a mano en accounts.php. Es la medida que pidió Stripe el 2026-10-02:
   que el producto no esté al alcance de quien no investiga.
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
    // El token va también en el cuerpo: la cabecera Authorization depende de un
    // preflight CORS y eso ya tumbó el checkout una vez.
    const body = Object.assign({ account_token: (state && state.token) || '' }, payload);
    const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    const reloj = ctrl ? setTimeout(() => ctrl.abort(), 15000) : null;
    try {
      const r = await fetch(API, { method: 'POST', headers, body: JSON.stringify(body),
                                   signal: ctrl ? ctrl.signal : undefined });
      let b = {};
      try { b = await r.json(); } catch (e) { /* respuesta no-JSON */ }
      return b;
    } finally { if (reloj) clearTimeout(reloj); }
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
    falta_institucion: 'Please enter the institution or company you are purchasing for.',
    falta_tipo_institucion: 'Please choose the type of institution.',
    falta_cargo: 'Please enter your role or position.',
    falta_area: 'Please describe your research area in a sentence.',
    web_invalida: 'Please check the website address.',
  };

  // Las claves son las que acepta account.php (ACC_ORG_TYPES).
  const ORG_TYPES = [
    ['university', 'University or academic institute'],
    ['hospital', 'Hospital or clinical research center'],
    ['private_lab', 'Private research laboratory'],
    ['biotech', 'Biotech or pharmaceutical company'],
    ['cro', 'Contract research organization (CRO)'],
    ['other', 'Other research organization'],
  ];
  const approved = () => !!(state && state.account && state.account.status === 'approved');

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
          ? T('Codex Research sells only to research institutions and laboratories. Each new account is reviewed by hand before it can place an order.')
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
          <label class="co-field"><span>${T('Institution or company')}</span>
            <input type="text" id="accOrg" required maxlength="120" autocomplete="organization"></label>
          <label class="co-field"><span>${T('Type of institution')}</span>
            <select id="accOrgType" required>
              <option value="">${T('Choose one')}</option>
              ${ORG_TYPES.map(([v, l]) => `<option value="${v}">${T(l)}</option>`).join('')}
            </select></label>
          <label class="co-field"><span>${T('Your role or position')}</span>
            <input type="text" id="accRole" required maxlength="80" autocomplete="organization-title"></label>
          <label class="co-field"><span>${T('Research area')}</span>
            <textarea id="accArea" required maxlength="400" rows="3"
                      placeholder="${T('e.g. peptide stability in solution, receptor binding assays')}"></textarea></label>
          <label class="co-field"><span>${T('Institution website')} <em>${T('(optional)')}</em></span>
            <input type="text" id="accWeb" maxlength="200" inputmode="url" autocomplete="url"></label>
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
    const correo = modal.querySelector('#accEmail');
    if (correo && ultimoCorreo) correo.value = ultimoCorreo;
    const first = modal.querySelector(ultimoCorreo ? '#accPass' : 'input') || modal.querySelector('input');
    if (first) first.focus();
    modal.querySelector('#accForm').addEventListener('submit', (e) => { e.preventDefault(); submit(mode || 'register'); });
  }

  /* Pantalla de estado: la ve quien tiene cuenta pero aún no puede pagar. El
     carrito se conserva; sólo falta la revisión. */
  function showStatus() {
    close();
    const a = (state && state.account) || {};
    const rechazada = a.status === 'rejected';
    modal = document.createElement('div');
    modal.className = 'acc-wrap';
    modal.innerHTML = `
      <div class="acc-backdrop" data-acc-close></div>
      <div class="acc-modal" role="dialog" aria-modal="true" aria-labelledby="accTitle">
        <button class="acc-x" data-acc-close aria-label="${T('Close')}">✕</button>
        <h2 id="accTitle">${rechazada ? T('We can’t approve this account') : T('Your account is under review')}</h2>
        <p class="acc-sub">${rechazada
          ? T('Based on the details provided, this account can’t place orders. If you think this is a mistake, write to us from your institutional email.')
          : T('Codex Research sells only to research institutions and laboratories, so every new account is reviewed by hand before it can place an order. Your cart is saved. If we need more details we’ll write to {email}.', { email: esc(a.email || '') })}</p>
        <button type="button" class="btn btn-primary acc-submit" data-acc-close>${T('Close')}</button>
        <p class="acc-switch"><button type="button" data-acc-logout>${T('Sign out')}</button></p>
      </div>`;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    modal.querySelectorAll('[data-acc-close]').forEach((el) => el.addEventListener('click', close));
    modal.querySelector('[data-acc-logout]').addEventListener('click', () => { close(); logout(); });
    document.addEventListener('keydown', onEsc);
    const b = modal.querySelector('.acc-submit');
    if (b) b.focus();
  }

  function onEsc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); } }

  async function submit(mode) {
    const msg = document.getElementById('accMsg');
    const btn = modal.querySelector('.acc-submit');
    const val = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const err = (t) => { if (msg) { msg.className = 'co-msg err'; msg.hidden = false; msg.textContent = t; } };

    const alta = mode === 'register';
    if (alta) {
      if (val('accOrg').length < 2) return err(T(ERRORS.falta_institucion));
      if (!val('accOrgType')) return err(T(ERRORS.falta_tipo_institucion));
      if (val('accRole').length < 2) return err(T(ERRORS.falta_cargo));
      if (val('accArea').length < 15) return err(T(ERRORS.falta_area));
      if (!document.getElementById('accDecl').checked) return err(T(ERRORS.falta_declaracion));
    }

    btn.disabled = true;
    btn.textContent = T('One moment…');
    const payload = alta
      ? { action: 'register', email: val('accEmail'), password: val('accPass'), name: val('accName'),
          org: val('accOrg'), org_type: val('accOrgType'), role: val('accRole'),
          research_area: val('accArea'), website: val('accWeb'), country: (window.REACountry && window.REACountry.config().code) || '',
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
    // El alta es un paso real del embudo desde que el gate existe: sin este
    // evento, Meta no distingue al visitante que se registró del que se fue.
    if (alta) {
      try {
        if (typeof fbq === 'function') {
          fbq('track', 'CompleteRegistration', { content_name: 'researcher_account', status: true });
        }
        if (typeof gtag === 'function') gtag('event', 'sign_up', { method: 'codex' });
      } catch (e) { /* la medición nunca debe romper el alta */ }
    }
    ultimoCorreo = (b.account && b.account.email) || ultimoCorreo;
    const seguir = pending;
    close();
    // Una cuenta recién creada (o una que sigue en revisión) no sigue al pago:
    // ve su estado. Lo que quería hacer se retoma cuando esté aprobada.
    if (!approved()) { showStatus(); return; }
    if (seguir) seguir();
  }

  /* ---------- API pública ---------- */
  const isIn = () => !!(state && state.token);

  // Pide cuenta APROBADA antes de seguir. Si la cuenta existe pero no está
  // aprobada, se pregunta al servidor por si la aprobaron desde la última vez.
  function require(fn) {
    if (isIn() && approved()) { fn(); return true; }
    if (isIn()) {
      refresh().then(() => {
        if (approved()) fn();
        else if (isIn()) showStatus();
        else require(fn);                        // la sesión había muerto
      });
      return false;
    }
    pending = fn;
    // Si ya había comprado aquí, lo suyo es entrar, no crear otra cuenta.
    open(ultimoCorreo ? 'login' : 'register');
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

  // La sesión murió en el servidor (caducó, o la cuenta se desactivó). Se borra
  // aquí sin preguntar: seguir mostrando "sesión iniciada" es mentira. Se
  // recuerda el correo para no pedirle a un cliente de siempre que "cree una
  // cuenta" cuando lo único que necesita es volver a entrar.
  let ultimoCorreo = '';
  try { ultimoCorreo = (JSON.parse(localStorage.getItem(KEY) || 'null') || {}).account?.email || ''; } catch (e) { /* nada */ }
  function expire() {
    if (state && state.account) ultimoCorreo = state.account.email || ultimoCorreo;
    if (state) save(null);
  }

  window.REAAccount = {
    isIn,
    approved,
    showStatus,
    expire,
    require,
    open,
    close,
    logout,
    refresh,
    token: () => (state ? state.token : ''),
    get: () => (state ? state.account : null),
    authHeaders: () => (isIn() ? { Authorization: 'Bearer ' + state.token } : {}),
  };

  /* ---------- Dónde vive el gate (y dónde NO) ----------
     La cuenta se pide al PAGAR, en `placeOrder()` de cart-page.js, y el servidor
     la exige de verdad en `acc_require()` (stripe-pay.php / crypto-pay.php).
     Añadir al carrito es libre: el visitante arma su pedido y solo entonces se
     le pide registrarse, cuando ya hay algo que perder. El registro probatorio
     no cambia — la declaración se guarda en cada compra, que es donde ocurre.

     Hasta el 2026-09-19 el gate envolvía `window.REACart.add`, y esa decisión
     costó cinco días de medición: el `fbq('AddToCart')` vive DENTRO de esa
     función, así que un visitante sin cuenta no lo disparaba nunca y Meta se
     quedó sin señal intermedia con la que optimizar (gastó en Audience Network).
     La lección, por si alguien vuelve a necesitar un paso previo al carrito:
     **cualquier cosa que envuelva `REACart.add` envuelve también la analítica.**
     Antes de meter nada delante, comprobar qué eventos quedan detrás. */

  // Al abrir la tienda, se comprueba que la sesión siga viva (caduca a los 30 días).
  if (isIn()) refresh();
})();
