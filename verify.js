/* Codex Research - verificador de lote (verify.html).
   Comprueba el número de lote contra window.REA.BATCHES.
   BATCHES puede ser un objeto {codigo: datos|null} o un array de códigos. */
(function () {
  const REA = window.REA || {};
  const WA = REA.WHATSAPP;
  const form = document.getElementById('verifyForm');
  const input = document.getElementById('verifyInput');
  const out = document.getElementById('verifyResult');
  if (!form || !input || !out) return;

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // Normaliza: sin espacios, sin "#" inicial, en mayúsculas.
  const norm = (s) => String(s).trim().replace(/^#/, '').replace(/\s+/g, '').toUpperCase();

  // Mapa normalizado: código -> datos (objeto) | null (lote válido sin datos).
  const map = {};
  const raw = REA.BATCHES || {};
  if (Array.isArray(raw)) raw.forEach((c) => { map[norm(c)] = null; });
  else Object.keys(raw).forEach((k) => { map[norm(k)] = raw[k]; });

  function verifiedCard(code, b) {
    const withProduct = b && b.product;
    const waText = encodeURIComponent('Hi Codex Research, I’d like the full COA for batch ' + code +
      (withProduct ? ' (' + b.product + ' ' + (b.mg || '') + ')' : '') + '.');
    const rows = withProduct
      ? `<div><dt>Product</dt><dd><a href="product/${esc(b.slug)}.html">${esc(b.product)}</a></dd></div>
         <div><dt>Strength</dt><dd>${esc(b.mg)}</dd></div>
         <div><dt>Status</dt><dd>Genuine, on record</dd></div>
         <div><dt>Testing</dt><dd>HPLC + mass spectrometry</dd></div>`
      : `<div><dt>Status</dt><dd>Genuine, on record</dd></div>
         <div><dt>Testing</dt><dd>HPLC + mass spectrometry</dd></div>
         <div><dt>Certificate</dt><dd>Available on request</dd></div>`;
    return `
      <div class="verify-card ok">
        <div class="verify-badge"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        <h2>Batch verified</h2>
        <p class="verify-sub">Batch <b>${esc(code)}</b> is a genuine Codex Research batch.</p>
        <dl class="verify-rows">${rows}</dl>
        <p class="verify-help">Want the full certificate of analysis? Request it on WhatsApp and we’ll send it right over.</p>
        <a class="btn btn-primary verify-cta" href="https://wa.me/${WA}?text=${waText}" target="_blank" rel="noopener">Request the full COA on WhatsApp</a>
      </div>`;
  }

  function notFoundCard(code) {
    const waText = encodeURIComponent('Hi Codex Research, I’d like to verify batch ' + code + '. Please confirm its COA.');
    return `
      <div class="verify-card err">
        <div class="verify-badge"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
        <h2>We couldn’t find that batch</h2>
        <p class="verify-sub">No record for <b>${esc(code)}</b>. Double-check the number on your vial label, or send it to us and we’ll verify it for you.</p>
        <a class="btn btn-primary verify-cta" href="https://wa.me/${WA}?text=${waText}" target="_blank" rel="noopener">Verify with our team on WhatsApp</a>
      </div>`;
  }

  function run(rawValue, scroll) {
    const code = norm(rawValue);
    if (!code) { out.hidden = true; return; }
    const found = Object.prototype.hasOwnProperty.call(map, code);
    out.innerHTML = found ? verifiedCard(code, map[code]) : notFoundCard(code);
    out.hidden = false;
    if (scroll) out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  form.addEventListener('submit', (e) => { e.preventDefault(); run(input.value, true); });

  // Auto-verifica si llega ?batch=CODE (por ejemplo, desde el buscador de la home).
  try {
    const q = new URLSearchParams(location.search).get('batch');
    if (q) { input.value = q; run(q, true); }
  } catch (e) { /* sin params, nada que hacer */ }
})();
