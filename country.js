/* Codex Research — selección de país (US / PA).
   Persiste en localStorage; al cambiar, notifica para que carrito y vistas
   recalculen envío, umbrales y métodos de pago.
   API: window.REACountry.get() | .code() | .config() | .set(code) */
(function () {
  const KEY = 'rea-country';
  const { COUNTRIES } = window.REA;

  function get() {
    const c = localStorage.getItem(KEY);
    return COUNTRIES[c] ? c : null;
  }
  // Si aún no eligió (p. ej. sesión vieja), Panamá es el mercado base.
  function code() { return get() || 'PA'; }
  function config() { return COUNTRIES[code()]; }

  function set(c) {
    if (!COUNTRIES[c]) return;
    localStorage.setItem(KEY, c);
    window.dispatchEvent(new CustomEvent('rea-country-change'));
    // El envío/umbral cambian: fuerza recálculo de drawer y página de carrito
    window.dispatchEvent(new CustomEvent('rea-cart-change'));
  }

  window.REACountry = { get, code, config, set };
})();
