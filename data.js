/* Codex Research — shared data (catalog, articles, FAQ, testimonials).
   Catalog = current available inventory with real prices.
   Each product: `mg` = strength, `sizes` = purchase options (single vial / 10-vial kit).
   Exposed on window.REA for every page to use. */

const PRODUCTS = [
  {
    slug: 'tirzepatide', name: 'Tirzepatide', cas: '2023788-19-2', tag: 'CAS # 2023788-19-2',
    mg: '20 mg', from: 190, formula: 'C225H348N48O68', weight: '4813.45 g/mol', pubchem: '156588324',
    photo: 'assets/products/tirzepatide.jpg',
    sizes: [
      { label: 'Single vial', price: 190 },
      { label: 'Kit · 10 vials', price: 1691, save: '11%' },
    ],
    overview: 'Tirzepatide is a dual GIP and GLP-1 receptor agonist studied in models of metabolic signaling, glucose regulation and energy balance.',
    research: ['GIP signaling', 'GLP-1 signaling', 'Glucose regulation', 'Metabolism'],
  },
  {
    slug: 'retatrutide', name: 'Retatrutide', cas: '2381089-83-2', tag: 'CAS # 2381089-83-2',
    mg: '10 mg', from: 150, formula: 'C228H350N48O66', weight: '4894.58 g/mol', pubchem: '—',
    photo: 'assets/products/retatrutide.jpg',
    sizes: [
      { label: 'Single vial', price: 150 },
      { label: 'Kit · 10 vials', price: 1335, save: '11%' },
    ],
    overview: 'Retatrutide is a triple GIP / GLP-1 / glucagon receptor agonist studied in models of metabolic signaling, glucose regulation and energy balance.',
    research: ['GIP signaling', 'GLP-1 signaling', 'Glucagon signaling', 'Metabolism'],
  },
  {
    slug: 'bpc-157', name: 'BPC-157', cas: '137525-51-0', tag: 'CAS # 137525-51-0',
    mg: '10 mg', from: 79, formula: 'C62H98N16O22', weight: '1419.53 g/mol', pubchem: '9941957',
    photo: 'assets/products/bpc-157.jpg',
    sizes: [
      { label: 'Single vial', price: 79 },
      { label: 'Kit · 10 vials', price: 703.10, save: '11%' },
    ],
    overview: 'BPC-157 is a pentadecapeptide derived from a protective protein found in gastric juice. In research settings it has been studied for its interaction with signaling pathways associated with tissue repair and angiogenesis.',
    research: ['Tissue repair', 'Angiogenesis', 'Nitric oxide signaling', 'Gastrointestinal integrity'],
  },
  {
    slug: 'mots-c', name: 'MOTS-c', cas: '1627580-64-6', tag: 'CAS # 1627580-64-6',
    mg: '10 mg', from: 49, formula: 'C101H152N28O22S2', weight: '2174.6 g/mol', pubchem: '85718457',
    photo: 'assets/products/mots-c.jpg',
    sizes: [
      { label: 'Single vial', price: 49 },
      { label: 'Kit · 10 vials', price: 450.80, save: '8%' },
    ],
    overview: 'MOTS-c is a mitochondrial-derived peptide studied in models of metabolic homeostasis and cell signaling.',
    research: ['Metabolic homeostasis', 'Mitochondrial function', 'Cell signaling'],
  },
  {
    slug: 'ipamorelin', name: 'Ipamorelin', cas: '170851-70-4', tag: 'CAS # 170851-70-4',
    mg: '10 mg', from: 75, formula: 'C38H49N9O5', weight: '711.86 g/mol', pubchem: '9831659',
    photo: 'assets/products/ipamorelin.jpg',
    sizes: [
      { label: 'Single vial', price: 75 },
      { label: 'Kit · 10 vials', price: 615, save: '18%' },
    ],
    overview: 'Ipamorelin is a selective growth hormone secretagogue and ghrelin receptor agonist studied in models of growth hormone regulation.',
    research: ['GH secretagogues', 'Ghrelin receptor', 'Endocrine regulation'],
  },
  {
    slug: 'ghk-cu', name: 'GHK-Cu', cas: '89030-95-5', tag: 'CAS # 89030-95-5',
    mg: '100 mg', from: 95, formula: 'C14H24CuN6O4', weight: '403.9 g/mol', pubchem: '—',
    photo: 'assets/products/ghk-cu.jpg',
    sizes: [
      { label: 'Single vial', price: 95 },
      { label: 'Kit · 10 vials', price: 845.50, save: '11%' },
    ],
    overview: 'GHK-Cu (copper tripeptide-1, Gly-His-Lys–copper) is a naturally occurring copper-binding peptide studied in models of tissue remodeling, collagen synthesis and wound repair.',
    research: ['Tissue remodeling', 'Collagen synthesis', 'Wound repair', 'Skin biology'],
  },
  {
    slug: 'pt-141', name: 'PT-141', cas: '189691-06-3', tag: 'CAS # 189691-06-3',
    mg: '10 mg', from: 49, formula: 'C50H68N14O10', weight: '1025.16 g/mol', pubchem: '9941379',
    photo: 'assets/products/pt-141.jpg',
    sizes: [
      { label: 'Single vial', price: 49 },
      { label: 'Kit · 10 vials', price: 450.80, save: '8%' },
    ],
    overview: 'PT-141 (bremelanotide) is a melanocortin receptor agonist studied in models of receptor signaling and neurobehavioral pathways.',
    research: ['Melanocortin signaling', 'Receptor binding', 'Neurobehavioral models'],
  },
  {
    slug: 'nad-plus', name: 'NAD+', cas: '53-84-9', tag: 'CAS # 53-84-9',
    mg: '1000 mg', from: 130, formula: 'C21H27N7O14P2', weight: '663.43 g/mol', pubchem: '5892',
    photo: 'assets/products/nad-plus.jpg',
    sizes: [
      { label: 'Single vial', price: 130 },
      { label: 'Kit · 10 vials', price: 1157, save: '11%' },
    ],
    overview: 'NAD+ (nicotinamide adenine dinucleotide) is an essential coenzyme studied in models of cellular metabolism, mitochondrial function and sirtuin signaling.',
    research: ['Cellular metabolism', 'Mitochondrial function', 'Sirtuin signaling'],
  },
  {
    slug: 'ahk-cu', name: 'AHK-Cu', cas: '682809-81-0', tag: 'CAS # 682809-81-0',
    mg: '50 mg', from: 120, formula: '—', weight: '—', pubchem: '—',
    photo: 'assets/products/ahk-cu.jpg',
    sizes: [
      { label: 'Single vial', price: 120 },
      { label: 'Kit · 10 vials', price: 1068, save: '11%' },
    ],
    overview: 'AHK-Cu (copper tripeptide-3, Ala-His-Lys–copper) is a copper-binding peptide studied in models of dermal cell proliferation, collagen deposition and hair follicle biology.',
    research: ['Dermal proliferation', 'Collagen deposition', 'Hair follicle biology', 'Tissue repair'],
  },
  {
    slug: 'bac-water', name: 'Bacteriostatic Water', cas: '—', tag: 'Reconstitution supply · 3 ml',
    mg: '3 ml', from: 10, formula: 'Water + 0.9% benzyl alcohol', weight: '—', pubchem: '—',
    photo: 'assets/products/bac-water.jpg',
    sizes: [
      { label: 'Single vial', price: 10 },
      { label: 'Kit · 10 vials', price: 95, save: '5%' },
    ],
    overview: 'Bacteriostatic water (sterile water with 0.9% benzyl alcohol as a preservative) is used to reconstitute lyophilized peptides, allowing multiple draws from a single vial over time using aseptic technique.',
    research: ['Sterile diluent', '0.9% benzyl alcohol', 'Multi-dose reconstitution'],
  },
  {
    slug: 'bac-water-10ml', name: 'Bacteriostatic Water', cas: '—', tag: 'Reconstitution supply · 10 ml',
    mg: '10 ml', from: 17, formula: 'Water + 0.9% benzyl alcohol', weight: '—', pubchem: '—',
    photo: 'assets/products/bac-water-10ml.jpg', outOfStock: true,
    sizes: [
      { label: 'Single vial', price: 17 },
      { label: 'Kit · 10 vials', price: 161.50, save: '5%' },
    ],
    overview: 'Bacteriostatic water (sterile water with 0.9% benzyl alcohol as a preservative) is used to reconstitute lyophilized peptides, allowing multiple draws from a single vial over time using aseptic technique. This 10 ml presentation is a larger multi-dose bottle.',
    research: ['Sterile diluent', '0.9% benzyl alcohol', 'Multi-dose reconstitution'],
  },
];

const ARTICLES = [
  { slug: 'mass-spectrometry', date: 'Oct 11, 2025', title: 'Mass spectrometry in peptide research', excerpt: 'How this technique confirms the identity and molecular mass of each compound.', tag: 'Methods' },
  { slug: 'what-is-hplc', date: 'Aug 29, 2025', title: 'What is high-performance liquid chromatography (HPLC)?', excerpt: 'The standard for verifying a batch’s purity before it ships.', tag: 'Quality' },
  { slug: 'amino-acids-peptides-proteins', date: 'Aug 16, 2025', title: 'Amino acids, peptides and proteins: what’s the difference?', excerpt: 'A short guide to the hierarchy of biological molecules.', tag: 'Basics' },
  { slug: 'lyophilization', date: 'Aug 03, 2025', title: 'Lyophilization: how it works', excerpt: 'Why peptides are freeze-dried to preserve their stability.', tag: 'Processes' },
  { slug: 'excipients-in-peptides', date: 'Sep 06, 2025', title: 'Excipients in peptides: what they are and how they’re used', excerpt: 'The role of bulking agents in a lyophilized vial.', tag: 'Basics' },
  { slug: 'peptide-synthesis', date: 'Jul 22, 2025', title: 'Peptide synthesis: how they’re made in the lab', excerpt: 'From the peptide bond to final purification, step by step.', tag: 'Processes' },
  { slug: 'what-is-mots-c', date: 'May 02, 2025', title: 'What is MOTS-c?', excerpt: 'A mitochondrial-derived peptide and its current areas of study.', tag: 'Compounds' },
  { slug: 'investigating-nad', date: 'Jan 07, 2025', title: 'Investigating NAD+: what studies have revealed', excerpt: 'An overview of the research around this key coenzyme.', tag: 'Compounds' },
  { slug: 'in-vitro-vs-in-vivo', date: 'Mar 13, 2024', title: 'In vitro vs. in vivo', excerpt: 'The difference between these two experimental contexts.', tag: 'Basics' },
];

const FAQS = [
  { q: 'Are your products verified?', a: 'Yes. Every batch comes with a certificate of analysis (COA) from an independent lab, with HPLC and mass spectrometry testing. You can request your batch’s COA on WhatsApp.' },
  { q: 'Where do you ship from and how long does it take?', a: 'Orders ship from local stock in each country. Panamá: $4 shipping, delivered in 1–2 hours in Panama City (interior: next day). United States: $20 shipping from our U.S. stock, delivered in up to 5 days. Free shipping over $100 (Panamá) or $250 (U.S.). Always in neutral packaging.' },
  { q: 'Are these products for human consumption?', a: 'No. All products are sold strictly for research and development purposes and are not intended for human or animal consumption.' },
  { q: 'Do you ship internationally?', a: 'Message us on WhatsApp with your destination country and we’ll confirm coverage, timing and cost before you pay.' },
  { q: 'What payment methods do you accept?', a: 'Panamá: Yappy, ACH transfer or cash on delivery. United States: Zelle or crypto (USDT · USDC · BTC). Your specialist confirms the details on WhatsApp before you pay.' },
  { q: 'How should I store the products?', a: 'Lyophilized vials are stored cool and protected from light, and kept refrigerated (2–8 °C) after reconstitution. Every vial label shows its storage conditions.' },
];

const TESTIMONIALS = [
  { name: 'Dr. M. Herrera', role: 'Researcher · private lab', rating: 5, quote: 'The batch-to-batch consistency is what made me stay. The COA arrives before I pay and the numbers match what I receive.' },
  { name: 'L. Castillo', role: 'Graduate student', rating: 5, quote: 'I had a couple of questions before ordering and they replied on WhatsApp within minutes. Shipped next day, discreet packaging.' },
  { name: 'A. Ríos', role: 'Lab technician', rating: 5, quote: 'I’ve worked with other suppliers and the difference here is traceability: every vial with its batch and its certificate. No guesswork.' },
];

// Sample stock (drives scarcity messaging). Low stock (< 10) shows "Only N left".
const STOCK = { 'retatrutide': 6, 'pt-141': 4 };
PRODUCTS.forEach((p) => { p.stock = STOCK[p.slug] != null ? STOCK[p.slug] : 25; });

// Per-country config: shipping, delivery promise and payment methods.
// Both countries use USD, product prices are identical.
const COUNTRIES = {
  US: {
    code: 'US', label: 'United States', flag: '🇺🇸',
    shipping: { flat: 20, freeThreshold: 250 },
    eta: 'Delivery in up to 5 days', etaShort: 'up to 5 days',
    payments: [
      { id: 'zelle', label: 'Zelle' },
      { id: 'crypto', label: 'Crypto (USDT · USDC · BTC)' },
    ],
  },
  PA: {
    code: 'PA', label: 'Panamá', flag: '🇵🇦',
    shipping: { flat: 4, freeThreshold: 100 },
    eta: 'Panama City: 1–2 h · Interior: next-day', etaShort: '1–2 h in Panama City',
    payments: [
      { id: 'yappy', label: 'Yappy' },
      { id: 'ach', label: 'ACH transfer' },
      { id: 'cash', label: 'Cash on delivery' },
    ],
  },
};

const COUPONS = {
  WELCOME10: { type: 'percent', value: 10, label: '10% off' },
  FREESHIP: { type: 'freeship', label: 'Free shipping' },
};

// Pago por correo (US · Zelle). Rellena estos valores desde tu cuenta de EmailJS
// para activar el envío de correos. Vacío = Zelle usa el flujo de WhatsApp (fallback).
const EMAILJS = {
  publicKey: '',        // EmailJS · Account · Public Key
  serviceId: '',        // EmailJS · Email Services · Service ID
  templateMerchant: '', // plantilla que te envía la orden a TI
  templateCustomer: '', // plantilla de confirmación al CLIENTE
  merchantEmail: 'sales@codexresearchlab.com',
};

window.REA = { PRODUCTS, ARTICLES, FAQS, TESTIMONIALS, COUNTRIES, COUPONS, WHATSAPP: '50763454619', EMAILJS };
