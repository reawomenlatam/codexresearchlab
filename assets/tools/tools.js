/* Codex Research - interfaz de las herramientas de /tools/.
   Un solo archivo para las cuatro: la página declara cuál con data-tool en el
   contenedor y las etiquetas van en data-* para no duplicar el guion por idioma.
   Todo el cálculo vive en peptide-chem.js, que se prueba aparte. */
(function () {
  'use strict';
  var chem = (window.REA || {}).chem;
  var root = document.querySelector('[data-tool]');
  if (!chem || !root) return;

  var L = root.dataset;
  var out = root.querySelector('[data-out]');
  var input = root.querySelector('input, textarea');
  var es = document.documentElement.lang === 'es';
  var nf = function (n, d) {
    return n.toLocaleString(es ? 'es-ES' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  };
  var esc = function (s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  function show(html, bad) {
    out.innerHTML = html;
    out.hidden = false;
    out.className = 'tool-out' + (bad ? ' tool-out-bad' : '');
  }
  function row(k, v) {
    return '<div class="tool-row"><dt>' + k + '</dt><dd>' + v + '</dd></div>';
  }
  // Fórmula con los subíndices en <sub>: C62H98N16O22 se lee mal en una línea.
  function fmt(f) {
    return esc(f).replace(/(\d+)/g, '<sub>$1</sub>');
  }
  function problem(r) {
    if (r.error === 'empty') return L.errEmpty;
    if (r.error === 'unknown') return L.errUnknown.replace('%s', esc(r.unknown.join(', ')));
    return L.errFormat;
  }

  var TOOLS = {
    weight: function (v) {
      var r = chem.analyse(v);
      if (!r.ok) return show(problem(r), true);
      show('<dl class="tool-grid">'
        + row(L.lblFormula, '<b>' + fmt(r.formula) + '</b>')
        + row(L.lblAverage, '<b>' + nf(r.average, 2) + '</b> g/mol')
        + row(L.lblMono, nf(r.monoisotopic, 4) + ' Da')
        + row(L.lblLength, r.length + ' ' + (r.length === 1 ? L.residue : L.residues))
        + row(L.lblSeq, '<code>' + esc(r.seq) + '</code>')
        + '</dl><p class="tool-note">' + L.noteSalt + '</p>');
    },
    cas: function (v) {
      var r = chem.checkCas(v);
      if (!r.ok) return show(L.errFormat, true);
      if (!r.valid) {
        return show('<p class="tool-verdict tool-bad">' + L.casBad.replace('%s', esc(r.cas)) + '</p>'
          + '<p class="tool-note">' + L.casExpected.replace('%d', r.expected).replace('%g', r.given) + '</p>', true);
      }
      show('<p class="tool-verdict tool-good">' + L.casGood.replace('%s', esc(r.cas)) + '</p>'
        + '<p class="tool-note">' + L.casNote + '</p>');
    },
    pi: function (v) {
      var r = chem.analyse(v);
      if (!r.ok) return show(problem(r), true);
      var pts = [1, 3, 5, 7, 9, 11, 13].map(function (pH) {
        return '<div class="tool-row"><dt>pH ' + pH + '</dt><dd>'
          + (chem.netCharge(r.seq, pH) >= 0 ? '+' : '') + nf(chem.netCharge(r.seq, pH), 2) + '</dd></div>';
      }).join('');
      show('<dl class="tool-grid">'
        + row(L.lblPi, '<b>' + nf(r.pI, 2) + '</b>')
        + row(L.lblCharge7, (r.chargeAt7 >= 0 ? '+' : '') + nf(r.chargeAt7, 2))
        + row(L.lblLength, r.length + ' ' + (r.length === 1 ? L.residue : L.residues))
        + '</dl><h3 class="tool-sub">' + L.lblCurve + '</h3><dl class="tool-grid">' + pts + '</dl>'
        + '<p class="tool-note">' + L.notePka + '</p>');
    },
  };

  var kind = root.dataset.tool;
  var run = TOOLS[kind];
  var form = root.querySelector('form');
  if (run && form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); run(input.value); });
    root.querySelectorAll('[data-example]').forEach(function (b) {
      b.addEventListener('click', function () {
        input.value = b.dataset.example;
        run(input.value);
        input.focus();
      });
    });
  }

  // Checklist: estado por casilla, contador y botón de imprimir. Nada se envía
  // a ningún sitio y nada se guarda: es una lista para usar delante de un COA.
  if (kind === 'checklist') {
    var boxes = Array.prototype.slice.call(root.querySelectorAll('input[type=checkbox]'));
    var tally = root.querySelector('[data-tally-out]');
    var update = function () {
      var n = boxes.filter(function (b) { return b.checked; }).length;
      tally.textContent = L.tally.replace('%d', n).replace('%t', boxes.length);
      tally.className = 'tool-tally' + (n === boxes.length ? ' tool-good' : '');
    };
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    var pr = root.querySelector('[data-print]');
    if (pr) pr.addEventListener('click', function () { window.print(); });
    update();
  }
})();
