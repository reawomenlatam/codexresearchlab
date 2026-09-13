/* Codex Research - selección de país (US / PA).
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

  // Adivina el país sin preguntar: zona horaria primero (es la señal más fiable
  // en el navegador) y el idioma como desempate. Todo lo que no sea claramente
  // EE.UU. cae en Panamá, que es el mercado base.
  const US_TZ = /^America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Detroit|Anchorage|Boise|Indiana|Kentucky|North_Dakota|Juneau|Sitka|Nome|Adak|Menominee)/;
  function detect() {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (tz === 'America/Panama') return 'PA';
      if (US_TZ.test(tz) || tz === 'Pacific/Honolulu') return 'US';
      // Fuera de esas zonas, el idioma decide: en-US → US, el resto → PA.
      const lang = (navigator.language || '').toLowerCase();
      if (lang === 'en-us') return 'US';
    } catch (e) { /* Intl puede fallar en navegadores viejos */ }
    return 'PA';
  }

  // Si aún no eligió, se usa el país detectado (no se guarda: elegirlo sigue
  // siendo del visitante, y guardarlo haría creer al resto del sitio que ya lo hizo).
  function code() { return get() || detect(); }
  function config() { return COUNTRIES[code()]; }

  function set(c) {
    if (!COUNTRIES[c]) return;
    localStorage.setItem(KEY, c);
    window.dispatchEvent(new CustomEvent('rea-country-change'));
    // El envío/umbral cambian: fuerza recálculo de drawer y página de carrito
    window.dispatchEvent(new CustomEvent('rea-cart-change'));
  }

  window.REACountry = { get, code, config, set, detect };
})();
