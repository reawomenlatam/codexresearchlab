/* Codex Research - química de péptidos para las herramientas de /tools/.
   Funciones puras, sin DOM y sin red: el mismo archivo lo carga el navegador y
   lo exige Node en las pruebas, así lo que se publica es lo que se probó.

   Composición por residuo = aminoácido menos una molécula de agua. El péptido
   es la suma de los residuos más un H2O (el extremo N aporta H, el C aporta OH).
   Comprobado contra BPC-157 (GEPPPGKPADDAGLV = C62H98N16O22) y MOTS-c. */
(function (root) {
  'use strict';

  // Residuo -> átomos. Solo los 20 proteinogénicos: los análogos sintéticos
  // (Aib, D-2-Nal, Nle...) no tienen una letra estándar y la herramienta los
  // rechaza en vez de inventarles una masa.
  var RESIDUE = {
    G: { C: 2, H: 3, N: 1, O: 1, S: 0 }, A: { C: 3, H: 5, N: 1, O: 1, S: 0 },
    S: { C: 3, H: 5, N: 1, O: 2, S: 0 }, P: { C: 5, H: 7, N: 1, O: 1, S: 0 },
    V: { C: 5, H: 9, N: 1, O: 1, S: 0 }, T: { C: 4, H: 7, N: 1, O: 2, S: 0 },
    C: { C: 3, H: 5, N: 1, O: 1, S: 1 }, L: { C: 6, H: 11, N: 1, O: 1, S: 0 },
    I: { C: 6, H: 11, N: 1, O: 1, S: 0 }, N: { C: 4, H: 6, N: 2, O: 2, S: 0 },
    D: { C: 4, H: 5, N: 1, O: 3, S: 0 }, Q: { C: 5, H: 8, N: 2, O: 2, S: 0 },
    K: { C: 6, H: 12, N: 2, O: 1, S: 0 }, E: { C: 5, H: 7, N: 1, O: 3, S: 0 },
    M: { C: 5, H: 9, N: 1, O: 1, S: 1 }, H: { C: 6, H: 7, N: 3, O: 1, S: 0 },
    F: { C: 9, H: 9, N: 1, O: 1, S: 0 }, R: { C: 6, H: 12, N: 4, O: 1, S: 0 },
    Y: { C: 9, H: 9, N: 1, O: 2, S: 0 }, W: { C: 11, H: 10, N: 2, O: 1, S: 0 },
  };

  var THREE = {
    GLY: 'G', ALA: 'A', SER: 'S', PRO: 'P', VAL: 'V', THR: 'T', CYS: 'C',
    LEU: 'L', ILE: 'I', ASN: 'N', ASP: 'D', GLN: 'Q', LYS: 'K', GLU: 'E',
    MET: 'M', HIS: 'H', PHE: 'F', ARG: 'R', TYR: 'Y', TRP: 'W',
  };

  var NAME = {
    G: 'Glycine', A: 'Alanine', S: 'Serine', P: 'Proline', V: 'Valine',
    T: 'Threonine', C: 'Cysteine', L: 'Leucine', I: 'Isoleucine',
    N: 'Asparagine', D: 'Aspartic acid', Q: 'Glutamine', K: 'Lysine',
    E: 'Glutamic acid', M: 'Methionine', H: 'Histidine', F: 'Phenylalanine',
    R: 'Arginine', Y: 'Tyrosine', W: 'Tryptophan',
  };

  // Pesos atómicos estándar IUPAC 2021 (media) y masas del isótopo más ligero.
  var AVG = { C: 12.011, H: 1.008, N: 14.007, O: 15.999, S: 32.06 };
  var MONO = { C: 12, H: 1.00782503207, N: 14.0030740048, O: 15.9949146196, S: 31.97207100 };

  // Juego de pKa de EMBOSS. Hay varios publicados y dan pI algo distintos; se
  // nombra el que se usa porque un pI sin su juego de pKa no se puede repetir.
  var PKA = {
    nTerm: 8.6, cTerm: 3.6,
    pos: { K: 10.8, R: 12.5, H: 6.5 },
    neg: { D: 3.9, E: 4.1, C: 8.5, Y: 10.1 },
  };

  function clean(seq) {
    return String(seq || '').toUpperCase().replace(/[^A-Z]/g, '');
  }

  // Acepta "Gly-His-Lys" igual que "GHK". Devuelve null si algún triplete no es
  // un aminoácido: adivinar sería peor que no responder.
  function fromThreeLetter(text) {
    var parts = String(text || '').toUpperCase().split(/[^A-Z]+/).filter(Boolean);
    if (!parts.length) return null;
    var out = '';
    for (var i = 0; i < parts.length; i++) {
      if (!THREE[parts[i]]) return null;
      out += THREE[parts[i]];
    }
    return out;
  }

  function parse(input) {
    var raw = String(input || '').trim();
    if (!raw) return { ok: false, error: 'empty' };
    // Si hay separadores y todo son tripletes válidos, es código de 3 letras.
    if (/[^A-Za-z]/.test(raw)) {
      var three = fromThreeLetter(raw);
      if (three) return { ok: true, seq: three, notation: 'three' };
    }
    var seq = clean(raw);
    if (!seq) return { ok: false, error: 'empty' };
    var bad = [];
    for (var i = 0; i < seq.length; i++) {
      if (!RESIDUE[seq[i]] && bad.indexOf(seq[i]) < 0) bad.push(seq[i]);
    }
    if (bad.length) return { ok: false, error: 'unknown', unknown: bad };
    return { ok: true, seq: seq, notation: 'one' };
  }

  function composition(seq) {
    var a = { C: 0, H: 2, N: 0, O: 1, S: 0 }; // + H2O del cierre
    for (var i = 0; i < seq.length; i++) {
      var r = RESIDUE[seq[i]];
      a.C += r.C; a.H += r.H; a.N += r.N; a.O += r.O; a.S += r.S;
    }
    return a;
  }

  function formula(atoms) {
    var out = '';
    ['C', 'H', 'N', 'O', 'S'].forEach(function (el) {
      if (atoms[el] > 0) out += el + (atoms[el] > 1 ? atoms[el] : '');
    });
    return out;
  }

  function mass(atoms, table) {
    return ['C', 'H', 'N', 'O', 'S'].reduce(function (s, el) {
      return s + atoms[el] * table[el];
    }, 0);
  }

  // Carga neta por Henderson-Hasselbalch. Los extremos cuentan una vez cada uno.
  function netCharge(seq, pH) {
    var q = 1 / (1 + Math.pow(10, pH - PKA.nTerm));
    q -= 1 / (1 + Math.pow(10, PKA.cTerm - pH));
    for (var i = 0; i < seq.length; i++) {
      var c = seq[i];
      if (PKA.pos[c]) q += 1 / (1 + Math.pow(10, pH - PKA.pos[c]));
      if (PKA.neg[c]) q -= 1 / (1 + Math.pow(10, PKA.neg[c] - pH));
    }
    return q;
  }

  // Bisección sobre la carga neta. 100 pasos sobran para 0,001 de precisión y
  // el intervalo 0-14 contiene siempre la raíz porque la carga es monótona.
  function isoelectricPoint(seq) {
    var lo = 0, hi = 14, mid = 7;
    for (var i = 0; i < 100; i++) {
      mid = (lo + hi) / 2;
      if (netCharge(seq, mid) > 0) lo = mid; else hi = mid;
    }
    return mid;
  }

  function counts(seq) {
    var c = {};
    for (var i = 0; i < seq.length; i++) c[seq[i]] = (c[seq[i]] || 0) + 1;
    return c;
  }

  function analyse(input) {
    var p = parse(input);
    if (!p.ok) return p;
    var atoms = composition(p.seq);
    return {
      ok: true, seq: p.seq, notation: p.notation, length: p.seq.length,
      atoms: atoms, formula: formula(atoms),
      average: mass(atoms, AVG), monoisotopic: mass(atoms, MONO),
      pI: isoelectricPoint(p.seq), counts: counts(p.seq),
      chargeAt7: netCharge(p.seq, 7),
    };
  }

  // Dígito de control de un número CAS: se multiplica cada dígito por su
  // posición contada desde la derecha y la suma módulo 10 tiene que dar el
  // último. Comprobado contra cuatro CAS del propio catálogo.
  function checkCas(input) {
    var raw = String(input || '').trim();
    var m = raw.match(/^(\d{2,7})-(\d{2})-(\d)$/);
    if (!m) return { ok: false, error: 'format' };
    var digits = (m[1] + m[2]).split('');
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
      sum += Number(digits[digits.length - 1 - i]) * (i + 1);
    }
    var expected = sum % 10;
    return {
      ok: true, cas: m[1] + '-' + m[2] + '-' + m[3],
      given: Number(m[3]), expected: expected, valid: expected === Number(m[3]),
      sum: sum,
    };
  }

  var api = {
    RESIDUE: RESIDUE, NAME: NAME, THREE: THREE, PKA: PKA,
    parse: parse, composition: composition, formula: formula,
    netCharge: netCharge, isoelectricPoint: isoelectricPoint,
    analyse: analyse, checkCas: checkCas,
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else { root.REA = root.REA || {}; root.REA.chem = api; }
})(typeof window !== 'undefined' ? window : globalThis);
