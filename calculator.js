/* Codex Research - calculadora de reconstitución con registro (lead-gate).
   Solo matemática de concentración; NO recomienda dosis. El registro guarda un
   lead en el backend (lead.php) y desbloquea la herramienta. */
(function () {
  const REA = window.REA || {};
  const WA = REA.WHATSAPP;
  const ENDPOINT = 'https://hooks.codexresearchlab.com/lead.php';
  const KEY = 'rea-tool-unlocked-v1';

  const gate = document.getElementById('toolGate');
  const calc = document.getElementById('toolCalc');
  const form = document.getElementById('leadForm');
  if (!gate || !calc) return;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function unlock() {
    try { localStorage.setItem(KEY, '1'); } catch (e) {}
    gate.hidden = true;
    calc.hidden = false;
  }

  // Usuario que ya se registró antes: no volver a pedir.
  try { if (localStorage.getItem(KEY)) unlock(); } catch (e) {}

  // ---------- Registro (lead) ----------
  if (form) {
    const msg = document.getElementById('leadMsg');
    const btn = document.getElementById('leadSubmit');
    const setMsg = (text, ok) => { if (msg) { msg.hidden = false; msg.className = 'lead-msg ' + (ok ? 'ok' : 'err'); msg.textContent = text; } };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = (document.getElementById('leadName').value || '').trim();
      const email = (document.getElementById('leadEmail').value || '').trim();
      const whatsapp = (document.getElementById('leadPhone').value || '').trim();
      if (name.length < 2) return setMsg('Please enter your name.', false);
      if (!EMAIL_RE.test(email)) return setMsg('Please enter a valid email.', false);
      if (whatsapp.replace(/\D/g, '').length < 6) return setMsg('Please enter a valid WhatsApp number.', false);

      if (btn) { btn.disabled = true; btn.textContent = 'Unlocking…'; }
      if (msg) msg.hidden = true;

      try {
        const body = new URLSearchParams({ name, email, whatsapp, source: 'reconstitution-calculator' });
        const res = await fetch(ENDPOINT, { method: 'POST', body });
        if (!res.ok) throw new Error('status ' + res.status);
        // Eventos de conversión.
        if (typeof gtag === 'function') gtag('event', 'generate_lead', { source: 'reconstitution-calculator' });
        if (typeof fbq === 'function') fbq('track', 'Lead', { content_name: 'reconstitution-calculator' });
        unlock();
      } catch (err) {
        // Fallback: si el backend no responde, el lead llega por WhatsApp y desbloqueamos.
        if (btn) { btn.disabled = false; btn.textContent = 'Unlock the calculator'; }
        const waText = encodeURIComponent('Hi Codex Research, I’d like to use the reconstitution calculator.\nName: ' + name + '\nEmail: ' + email);
        const link = document.createElement('a');
        link.href = 'https://wa.me/' + WA + '?text=' + waText;
        link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'register on WhatsApp';
        if (msg) { msg.hidden = false; msg.className = 'lead-msg err'; msg.textContent = 'We couldn’t complete the registration right now. Please '; msg.append(link, ' to get access.'); }
      }
    });
  }

  // ---------- Calculadora de reconstitución ----------
  const $ = (id) => document.getElementById(id);
  const out = $('calcOut');

  function num(id) { const v = parseFloat(($(id) && $(id).value) || ''); return isFinite(v) ? v : NaN; }

  function compute() {
    if (!out) return;
    const mg = num('inVial');           // péptido en el vial (mg)
    const water = num('inWater');       // agua bacteriostática (mL)
    let dose = num('inDose');           // cantidad deseada por extracción
    const doseUnit = ($('inDoseUnit') && $('inDoseUnit').value) || 'mcg';

    if (!(mg > 0) || !(water > 0)) { out.hidden = true; return; }

    const concMgMl = mg / water;                 // mg/mL
    const concMcgMl = concMgMl * 1000;           // mcg/mL
    const mcgPerUnit = concMcgMl / 100;          // 1 unidad U-100 = 0.01 mL

    let rows = `
      <div><dt>Concentration</dt><dd>${concMgMl.toFixed(2)} mg/mL</dd></div>
      <div><dt>Per insulin unit (U-100)</dt><dd>${mcgPerUnit.toFixed(1)} mcg</dd></div>`;

    // Si ingresan una cantidad objetivo, mostramos cuánto extraer (solo conversión).
    if (dose > 0) {
      const doseMg = doseUnit === 'mg' ? dose : dose / 1000;
      const drawMl = doseMg / concMgMl;
      const drawUnits = drawMl * 100;
      const doseLabel = doseUnit === 'mg' ? dose + ' mg' : dose + ' mcg';
      rows += `
        <div class="hl"><dt>To draw ${doseLabel}</dt><dd>${drawMl.toFixed(3)} mL = <b>${drawUnits.toFixed(1)} units</b></dd></div>`;
    }

    out.innerHTML = `<dl class="calc-rows">${rows}</dl>`;
    out.hidden = false;
  }

  ['inVial', 'inWater', 'inDose', 'inDoseUnit'].forEach((id) => {
    const el = $(id);
    if (el) { el.addEventListener('input', compute); el.addEventListener('change', compute); }
  });
})();
