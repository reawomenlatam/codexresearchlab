/* Codex Research - shared data (catalog, articles, FAQ).
   Catalog = current available inventory with real prices.
   Each product: `mg` = strength, `sizes` = purchase options (single vial / 3-vial pack).
   Exposed on window.REA for every page to use. */

const PRODUCTS = [
  {
    slug: 'tirzepatide', name: 'GLP-2', alias: 'tirzepatide', cas: '2023788-19-2', tag: 'CAS # 2023788-19-2',
    mg: '20 mg', from: 149, formula: 'C225H348N48O68', weight: '4813.45 g/mol', pubchem: '156588324',
    photo: 'assets/products/tirzepatide.jpg',
    sizes: [
      { label: 'Single vial', price: 149 },
      { label: 'Pack · 3 vials', price: 411.24, save: '8%' },
    ],
    overview: 'A dual GIP and GLP-1 receptor agonist studied in models of metabolic signaling, glucose regulation and energy balance.',
    overviewEs: 'Agonista dual de los receptores GIP y GLP-1, estudiado en modelos de señalización metabólica, regulación de la glucosa y balance energético.',
    research: ['GIP signaling', 'GLP-1 signaling', 'Glucose regulation', 'Metabolism'],
  },
  {
    slug: 'retatrutide', name: 'GLP-3', alias: 'retatrutide', cas: '', tag: 'Research use only',
    mg: '10 mg', from: 150, formula: 'C228H350N48O66', weight: '4894.58 g/mol', pubchem: 'N/A',
    photo: 'assets/products/retatrutide.jpg',
    sizes: [
      { label: 'Single vial', price: 150 },
      { label: 'Pack · 3 vials', price: 414.00, save: '8%' },
    ],
    overview: 'A triple GIP / GLP-1 / glucagon receptor agonist studied in models of metabolic signaling, glucose regulation and energy balance.',
    overviewEs: 'Agonista triple de los receptores GIP / GLP-1 / glucagón, estudiado en modelos de señalización metabólica, regulación de la glucosa y balance energético.',
    research: ['GIP signaling', 'GLP-1 signaling', 'Glucagon signaling', 'Metabolism'],
  },
  {
    slug: 'bpc-157', name: 'BPC-157', cas: '137525-51-0', tag: 'CAS # 137525-51-0',
    mg: '10 mg', from: 79, formula: 'C62H98N16O22', weight: '1419.53 g/mol', pubchem: '9941957',
    photo: 'assets/products/bpc-157.jpg',
    sizes: [
      { label: 'Single vial', price: 79 },
      { label: 'Pack · 3 vials', price: 218.04, save: '8%' },
    ],
    overview: 'BPC-157 is a pentadecapeptide derived from a protective protein found in gastric juice. In research settings it has been studied for its interaction with signaling pathways associated with tissue repair and angiogenesis.',
    overviewEs: 'BPC-157 es un pentadecapéptido derivado de una proteína protectora presente en el jugo gástrico. En investigación se ha estudiado por su interacción con vías de señalización asociadas a la reparación de tejidos y a la angiogénesis.',
    research: ['Tissue repair', 'Angiogenesis', 'Nitric oxide signaling', 'Gastrointestinal integrity'],
  },
  {
    slug: 'mots-c', name: 'MOTS-c', cas: '1627580-64-6', tag: 'CAS # 1627580-64-6',
    mg: '10 mg', from: 85, formula: 'C101H152N28O22S2', weight: '2174.6 g/mol', pubchem: '85718457',
    photo: 'assets/products/mots-c.jpg',
    sizes: [
      { label: 'Single vial', price: 85 },
      { label: 'Pack · 3 vials', price: 234.60, save: '8%' },
    ],
    overview: 'MOTS-c is a mitochondrial-derived peptide studied in models of metabolic homeostasis and cell signaling.',
    overviewEs: 'MOTS-c es un péptido de origen mitocondrial estudiado en modelos de homeostasis metabólica y señalización celular.',
    research: ['Metabolic homeostasis', 'Mitochondrial function', 'Cell signaling'],
  },
  {
    slug: 'ipamorelin', name: 'Ipamorelin', cas: '170851-70-4', tag: 'CAS # 170851-70-4',
    mg: '10 mg', from: 135, formula: 'C38H49N9O5', weight: '711.86 g/mol', pubchem: '9831659',
    photo: 'assets/products/ipamorelin.jpg',
    sizes: [
      { label: 'Single vial', price: 135 },
      { label: 'Pack · 3 vials', price: 372.60, save: '8%' },
    ],
    overview: 'Ipamorelin is a selective growth hormone secretagogue and ghrelin receptor agonist studied in models of growth hormone regulation.',
    overviewEs: 'Ipamorelina es un secretagogo selectivo de hormona de crecimiento y agonista del receptor de grelina, estudiado en modelos de regulación de la hormona de crecimiento.',
    research: ['GH secretagogues', 'Ghrelin receptor', 'Endocrine regulation'],
  },
  {
    slug: 'ghk-cu', name: 'GHK-Cu', cas: '89030-95-5', tag: 'CAS # 89030-95-5',
    mg: '100 mg', from: 95, formula: 'C14H24CuN6O4', weight: '403.9 g/mol', pubchem: 'N/A',
    photo: 'assets/products/ghk-cu.jpg',
    sizes: [
      { label: 'Single vial', price: 95 },
      { label: 'Pack · 3 vials', price: 262.20, save: '8%' },
    ],
    overview: 'GHK-Cu (copper tripeptide-1, Gly-His-Lys-copper) is a naturally occurring copper-binding peptide studied in models of tissue remodeling, collagen synthesis and wound repair.',
    overviewEs: 'GHK-Cu (tripéptido de cobre-1, Gli-His-Lis-cobre) es un péptido natural con afinidad por el cobre, estudiado en modelos de remodelación de tejidos, síntesis de colágeno y reparación de heridas.',
    research: ['Tissue remodeling', 'Collagen synthesis', 'Wound repair', 'Skin biology'],
  },
  {
    slug: 'pt-141', name: 'PT-141', cas: '189691-06-3', tag: 'CAS # 189691-06-3',
    mg: '10 mg', from: 85, formula: 'C50H68N14O10', weight: '1025.16 g/mol', pubchem: '9941379',
    photo: 'assets/products/pt-141.jpg',
    sizes: [
      { label: 'Single vial', price: 85 },
      { label: 'Pack · 3 vials', price: 234.60, save: '8%' },
    ],
    overview: 'PT-141 (bremelanotide) is a melanocortin receptor agonist studied in models of receptor signaling and neurobehavioral pathways.',
    overviewEs: 'PT-141 (bremelanotida) es un agonista de los receptores de melanocortina, estudiado en modelos de señalización de receptores y vías neuroconductuales.',
    research: ['Melanocortin signaling', 'Receptor binding', 'Neurobehavioral models'],
  },
  {
    slug: 'nad-plus', name: 'NAD+', cas: '53-84-9', tag: 'CAS # 53-84-9',
    mg: '1000 mg', from: 130, formula: 'C21H27N7O14P2', weight: '663.43 g/mol', pubchem: '5892',
    photo: 'assets/products/nad-plus.jpg',
    sizes: [
      { label: 'Single vial', price: 130 },
      { label: 'Pack · 3 vials', price: 358.80, save: '8%' },
    ],
    overview: 'NAD+ (nicotinamide adenine dinucleotide) is an essential coenzyme studied in models of cellular metabolism, mitochondrial function and sirtuin signaling.',
    overviewEs: 'NAD+ (nicotinamida adenina dinucleótido) es una coenzima esencial estudiada en modelos de metabolismo celular, función mitocondrial y señalización de sirtuinas.',
    research: ['Cellular metabolism', 'Mitochondrial function', 'Sirtuin signaling'],
  },
  {
    slug: 'ahk-cu', name: 'AHK-Cu', cas: '682809-81-0', tag: 'CAS # 682809-81-0',
    mg: '50 mg', from: 120, formula: 'N/A', weight: 'N/A', pubchem: 'N/A',
    photo: 'assets/products/ahk-cu.jpg',
    sizes: [
      { label: 'Single vial', price: 120 },
    ],
    overview: 'AHK-Cu (copper tripeptide-3, Ala-His-Lys-copper) is a copper-binding peptide studied in models of dermal cell proliferation, collagen deposition and hair follicle biology.',
    overviewEs: 'AHK-Cu (tripéptido de cobre-3, Ala-His-Lis-cobre) es un péptido con afinidad por el cobre, estudiado en modelos de proliferación de células dérmicas, depósito de colágeno y biología del folículo piloso.',
    research: ['Dermal proliferation', 'Collagen deposition', 'Hair follicle biology', 'Tissue repair'],
  },
  {
    slug: 'bac-water', name: 'Bacteriostatic Water', cas: 'N/A', tag: 'Reconstitution supply · 3 ml',
    mg: '3 ml', from: 10, formula: 'Water + 0.9% benzyl alcohol', weight: 'N/A', pubchem: 'N/A',
    photo: 'assets/products/bac-water.jpg',
    sizes: [
      { label: 'Single vial', price: 10 },
      { label: 'Pack · 3 vials', price: 27.60, save: '8%' },
    ],
    overview: 'Bacteriostatic water (sterile water with 0.9% benzyl alcohol as a preservative) is used to reconstitute lyophilized peptides, allowing multiple draws from a single vial over time using aseptic technique.',
    overviewEs: 'El agua bacteriostática (agua estéril con alcohol bencílico al 0,9% como conservante) se usa para reconstituir péptidos liofilizados, permitiendo varias extracciones de un mismo vial a lo largo del tiempo con técnica aséptica.',
    research: ['Sterile diluent', '0.9% benzyl alcohol', 'Multi-dose reconstitution'],
  },
  {
    slug: 'bac-water-10ml', name: 'Bacteriostatic Water', cas: 'N/A', tag: 'Reconstitution supply · 10 ml',
    mg: '10 ml', from: 17, formula: 'Water + 0.9% benzyl alcohol', weight: 'N/A', pubchem: 'N/A',
    photo: 'assets/products/bac-water-10ml.jpg',
    sizes: [
      { label: 'Single vial', price: 17 },
      { label: 'Pack · 3 vials', price: 46.92, save: '8%' },
    ],
    overview: 'Bacteriostatic water (sterile water with 0.9% benzyl alcohol as a preservative) is used to reconstitute lyophilized peptides, allowing multiple draws from a single vial over time using aseptic technique. This 10 ml presentation is a larger multi-dose bottle.',
    overviewEs: 'El agua bacteriostática (agua estéril con alcohol bencílico al 0,9% como conservante) se usa para reconstituir péptidos liofilizados, permitiendo varias extracciones de un mismo vial a lo largo del tiempo con técnica aséptica. Esta presentación de 10 ml es un frasco multidosis más grande.',
    research: ['Sterile diluent', '0.9% benzyl alcohol', 'Multi-dose reconstitution'],
  },
];


const FAQS = [
  { q: 'Are your products verified?', a: 'Yes. Every batch comes with a certificate of analysis (COA) from an independent lab, with HPLC and mass spectrometry testing. Your vial’s batch number can be checked at codexresearchlab.com/verify/, and the full COA is available on request — before you order if you want to see it first.' },
  { q: 'Where do you ship from and how long does it take?', a: 'Orders ship from local stock in each country. Panamá: $4 shipping, delivered in 1-2 hours in Panama City (interior cities like David, Chitré and Colón: next business day via Fergunson transport). United States: $20 shipping from our U.S. stock, delivered in 48-72 hours. Free shipping over $100 (Panamá) or $250 (U.S.). Always in sealed, protective packaging.' },
  { q: 'Are these products for human consumption?', a: 'No. All products are sold strictly for research and development purposes and are not intended for human or animal consumption.' },
  { q: 'Do you ship internationally?', a: 'Message us on WhatsApp with your destination country and we’ll confirm coverage, timing and cost before you pay.' },
  { q: 'What payment methods do you accept?', a: 'Card (Visa, Mastercard, American Express) processed by Stripe, or crypto (USDC or USDT on Ethereum). You pay on our own checkout, in both Panamá and the United States. Card details go straight to Stripe and never touch our site.' },
  { q: 'How should I store the products?', a: 'Lyophilized vials are stored cool and protected from light, and kept refrigerated (2-8 °C) after reconstitution. Every vial label shows its storage conditions.' },
];

// Mismo FAQ en español. Las dos listas tienen que decir lo mismo: el JSON-LD
// FAQPage de cada portada declara justo estas preguntas.
const FAQS_ES = [
  { q: '¿Sus productos están verificados?', a: 'Sí. Cada lote viene con un certificado de análisis (COA) de un laboratorio independiente, con pruebas de HPLC y espectrometría de masas. El número de lote de tu vial se puede comprobar en codexresearchlab.com/verify/, y el COA completo está disponible si lo pides — también antes de comprar.' },
  { q: '¿Desde dónde envían y cuánto tarda?', a: 'Los pedidos salen de stock local en cada país. Panamá: $4 de envío, entrega en 1-2 horas en Ciudad de Panamá (interior como David, Chitré y Colón: siguiente día hábil por transporte Fergunson). Estados Unidos: $20 de envío desde nuestro stock en EE.UU., entrega en 48-72 horas. Envío gratis sobre $100 (Panamá) o $250 (EE.UU.). Siempre en empaque sellado y protegido.' },
  { q: '¿Estos productos son para consumo humano?', a: 'No. Todos los productos se venden estrictamente para fines de investigación y desarrollo, y no están destinados al consumo humano ni animal.' },
  { q: '¿Hacen envíos internacionales?', a: 'Escríbenos por WhatsApp con tu país de destino y te confirmamos cobertura, tiempo y costo antes de que pagues.' },
  { q: '¿Qué métodos de pago aceptan?', a: 'Tarjeta (Visa, Mastercard, American Express) procesada por Stripe, o cripto (USDC o USDT en Ethereum). Pagas en nuestro propio checkout, tanto en Panamá como en Estados Unidos. Los datos de la tarjeta van directo a Stripe y nunca pasan por nuestro sitio.' },
  { q: '¿Cómo debo almacenar los productos?', a: 'Los viales liofilizados se guardan en un lugar fresco y protegidos de la luz, y refrigerados (2-8 °C) una vez reconstituidos. La etiqueta de cada vial indica sus condiciones de almacenamiento.' },
];


// Existencias reales POR BODEGA. Panamá y Estados Unidos son almacenes
// distintos: un vial en Panamá no sirve para despachar un pedido de Miami.
//
// GENERADO desde el panel de inventario (inventory.php → "Llevar estos
// números a la tienda"). No editar a mano: lo que aquí se escriba se pierde
// en la siguiente copia, y peor, dejaría de coincidir con lo que el servidor
// permite cobrar.
//
// Con menos de 10 se muestra "Only N left" y la cantidad no puede pasar de
// ahí. Con cero, el producto queda agotado para ese país.
const STOCK_BY_COUNTRY = {
  PA: { 'ahk-cu': 1, 'bac-water': 0, 'bac-water-10ml': 67, 'bpc-157': 6, 'ghk-cu': 23, 'ipamorelin': 17, 'mots-c': 13, 'nad-plus': 10, 'pt-141': 19, 'retatrutide': 35, 'tirzepatide': 10 },
  US: { 'ahk-cu': 0, 'bac-water': 140, 'bac-water-10ml': 0, 'bpc-157': 20, 'ghk-cu': 30, 'ipamorelin': 0, 'mots-c': 30, 'nad-plus': 0, 'pt-141': 0, 'retatrutide': 80, 'tirzepatide': 0 },
};

// Lo que el inventario todavía no controla sigue como antes, con 25: un
// producto ausente de la tabla no debe quedar bloqueado por omisión.
const STOCK_DEFAULT = 25;

/* Las páginas de producto y los artículos son los MISMOS para los dos países
   (build-seo.js genera un solo HTML). Para ese marcado vale el mejor caso:
   algo con existencias en cualquier bodega está disponible. Quien decide de
   verdad es el servidor cuando se va a cobrar. */
STOCK_BY_COUNTRY.ANY = PRODUCTS.reduce((acc, p) => {
  const pa = STOCK_BY_COUNTRY.PA[p.slug], us = STOCK_BY_COUNTRY.US[p.slug];
  if (pa != null || us != null) acc[p.slug] = Math.max(pa || 0, us || 0);
  return acc;
}, {});

// El catálogo puede marcar un producto agotado a mano (outOfStock en el
// producto). Esa decisión manda siempre sobre el conteo.
PRODUCTS.forEach((p) => { p.catalogOut = !!p.outOfStock; });

/* Aplica las existencias de una bodega. Se llama al cargar y cada vez que el
   visitante cambia de país, desde country.js. Además de p.stock ajusta
   p.outOfStock, que es lo que ya respetan el catálogo, la ficha y el carrito:
   así un cero en la bodega bloquea la compra sin tocar cada vista. */
function applyStock(code) {
  const tabla = STOCK_BY_COUNTRY[code] || STOCK_BY_COUNTRY.ANY || {};
  PRODUCTS.forEach((p) => {
    const n = tabla[p.slug];
    p.stock = n != null ? n : STOCK_DEFAULT;
    p.outOfStock = p.catalogOut || p.stock === 0;
  });
}

// Base hasta que country.js diga cuál es el país: el mejor caso, para que una
// página que se pinta antes de resolver el país no marque nada agotado de más.
applyStock('ANY');

// ---------------------------------------------------------------------------
// REBAJA GENERAL DE LA TIENDA
// ---------------------------------------------------------------------------
// Para APAGAR la oferta: `active: false`. Los precios vuelven solos a los de
// lista, sin tener que tocar ningún producto.
//
// El descuento se aplica UNA sola vez, aquí: cada presentación guarda su precio
// de lista en `list` y `price` pasa a ser el precio rebajado. Todo lo demás
// (tarjetas, página de producto, carrito, checkout y el prices.json que usa el
// servidor para cotizar los pagos en cripto) sigue leyendo `price` sin
// enterarse de que hay oferta. Es importante que sea así: si el navegador y el
// servidor calcularan el descuento por separado, un centavo de diferencia
// tumbaría el pago en cripto.
// `until` es la fecha en que termina (inclusive). Solo se usa para el texto
// que ve el cliente: la oferta NO se apaga sola, hay que poner active en
// false, re-generar prices.json y volver a subirlo a Hostinger.
const SALE = { active: false, percent: 20, until: '2026-08-20', label: '20% OFF everything' };

const salePrice = (list) => Math.round(list * (100 - SALE.percent)) / 100;

if (SALE.active) {
  PRODUCTS.forEach((p) => {
    p.listFrom = p.from;
    p.from = salePrice(p.from);
    p.sizes.forEach((s) => { s.list = s.price; s.price = salePrice(s.price); });
  });
}

// Per-country config: shipping, delivery promise and payment methods.
// Both countries use USD, product prices are identical.
const COUNTRIES = {
  US: {
    code: 'US', label: 'United States', flag: '🇺🇸',
    shipping: { flat: 20, freeThreshold: 250 },
    eta: 'Delivery in 48-72 h', etaShort: '48-72 h',
    payments: [
      { id: 'stripe', label: 'Card · Visa, Mastercard, Amex' },
      { id: 'crypto', label: 'Crypto · USDC or USDT (Ethereum)' },
    ],
  },
  PA: {
    code: 'PA', label: 'Panamá', flag: '🇵🇦',
    shipping: { flat: 4, freeThreshold: 100 },
    eta: 'Panama City: 1-2 h · Interior: next-day', etaShort: '1-2 h in Panama City',
    payments: [
      { id: 'stripe', label: 'Card · Visa, Mastercard, Amex' },
      { id: 'crypto', label: 'Crypto · USDC or USDT (Ethereum)' },
    ],
  },
};

const COUPONS = {
  WELCOME10: { type: 'percent', value: 10, label: '10% off' },
  FREESHIP: { type: 'freeship', label: 'Free shipping' },
  // Códigos de influencer (se rastrea su uso vía track.php). Agrega más aquí.
  MORA10: { type: 'percent', value: 10, label: '10% off', influencer: 'andres mora' },
};

// Lotes válidos (/verify/). Clave = número de lote. Valor = datos del producto
// (o null para un lote genérico/universal). Agrega o actualiza aquí.
/* Lotes reales en registro. Cada entrada admite además tres campos OPCIONALES
   copiados del certificado real: `purity` ('99.1%'), `date` ('Jul 10, 2026') y
   `lab` (nombre del laboratorio). La ficha los muestra solo si existen: sin
   ellos enseña la especificación de compra, nunca un resultado inventado. */
const BATCHES = {
  'CDX-2607-001': { product: 'Retatrutide', slug: 'retatrutide', mg: '10 mg' },
  'CDX-2607-002': { product: 'BPC-157',     slug: 'bpc-157',     mg: '10 mg' },
  'CDX-2607-003': { product: 'GHK-Cu',      slug: 'ghk-cu',      mg: '100 mg' },
  'CDX-2607-004': { product: 'AHK-Cu',      slug: 'ahk-cu',      mg: '50 mg' },
  'CDX-2607-005': { product: 'Tirzepatide', slug: 'tirzepatide', mg: '20 mg' },
  'CDX-2607-006': { product: 'MOTS-c',      slug: 'mots-c',      mg: '10 mg' },
  'CDX-2607-007': { product: 'Ipamorelin',  slug: 'ipamorelin',  mg: '10 mg' },
  'CDX-2607-008': { product: 'PT-141',      slug: 'pt-141',      mg: '10 mg' },
  'CDX-2607-009': { product: 'Retatrutide', slug: 'retatrutide', mg: '30 mg' },
};

/* Lote en stock de un producto, para que la ficha muestre un número que el
   visitante puede comprobar en /verify/ sin escribirle a nadie. Empareja por
   concentración cuando hay más de uno (retatrutide tiene 10 y 30 mg). */
function batchFor(slug, mg) {
  const hits = Object.keys(BATCHES).filter((c) => BATCHES[c] && BATCHES[c].slug === slug);
  if (!hits.length) return null;
  const code = (mg && hits.find((c) => BATCHES[c].mg === mg)) || hits[0];
  return Object.assign({ code }, BATCHES[code]);
}

const SHIPPING_LINE_ES = 'Los pedidos salen de stock local en cada país. Panamá: $4 de envío, entrega en 1-2 horas en ' +
  'Ciudad de Panamá (interior como David, Chitré y Colón: siguiente día hábil por transporte Fergunson). ' +
  'Estados Unidos: $20 desde nuestro stock en EE.UU., 48-72 horas. Envío gratis sobre $100 (Panamá) o $250 (EE.UU.). ' +
  'Siempre en empaque sellado y protegido, con cada vial etiquetado con su compuesto, concentración y número de lote.';

/* Envío y pagos: un solo origen para el FAQ de producto, pricing.md y llms-full.txt. */
const SHIPPING_LINE = 'Panama City: same-day delivery in 1-2 hours, $4 flat. Interior cities ' +
  '(David, Chitre, Colon and more): next business day via Fergunson transport. United States: ' +
  '$20 from U.S. stock, 48-72 hours. Free shipping over $100 (Panama) or $250 (U.S.). ' +
  'Always in sealed, protective packaging, with each vial labeled with its compound, strength and batch number.';
const PAYMENT_LINE = 'Card (Visa, Mastercard, American Express) processed by Stripe, or crypto ' +
  '(USDC or USDT on Ethereum). Payment is completed on our own checkout, in both Panama and the ' +
  'United States. Card details go straight to Stripe and never touch our site.';

/* FAQ por producto, derivado del propio producto: build-seo.js lo hornea en el HTML
   y en el JSON-LD, y product.js lo pinta al hidratar. Vive aquí para que las dos
   versiones digan lo mismo — un FAQPage que declara preguntas que la página no
   muestra es justo lo que Google penaliza (ya pasó con el FAQ de la portada).
   Solo datos de tienda y de ficha: nada clínico ni de dosis. */
function productFaq(p) {
  if (esLang()) return productFaqEs(p);
  const list = p.sizes.map((z) => `${z.label}: $${z.price.toFixed(2)} USD`).join('. ');
  return [
    { q: `What is ${p.name}?`,
      a: `${p.overview} It is supplied as a lyophilized ${p.mg} vial for laboratory research use only.` },
    { q: `How much does ${p.name} cost?`,
      a: `${list}. Prices are in USD${p.outOfStock ? '. This presentation is currently out of stock' : ''}.` },
    { q: `Is ${p.name} tested, and do you provide a certificate of analysis?`,
      a: 'Yes. Every batch is tested at 99% purity by HPLC and mass spectrometry. The certificate of ' +
         'analysis is available on request, before you order if you want to see it first, and any ' +
         'vial\'s batch number can be checked at https://codexresearchlab.com/verify/.' },
    { q: `How is ${p.name} shipped and how long does delivery take?`, a: SHIPPING_LINE },
    { q: `How should ${p.name} be stored?`,
      a: 'Lyophilized vials are kept cool and protected from light. Once reconstituted they are kept ' +
         'refrigerated at 2-8 degrees Celsius. Every vial label shows its storage conditions.' },
    { q: `Is ${p.name} intended for human use?`,
      a: `No. ${p.name} is sold strictly for laboratory research and development. It is not for human ` +
         'or animal consumption and is not intended to diagnose, treat, cure or prevent any disease.' },
  ];
}

// El idioma se lee en el momento de usarlo: data.js carga antes que i18n.js.
function esLang() {
  // build-seo.js evalúa este archivo en Node con un document simulado: ahí no
  // hay idioma de página y el generador llama a las versiones ES a propósito.
  const el = typeof document !== 'undefined' && document.documentElement;
  return !!el && (el.getAttribute('lang') || 'en').slice(0, 2) === 'es';
}

const SIZE_ES = { 'Single vial': 'Vial individual', 'Pack · 3 vials': 'Pack · 3 viales' };

function productFaqEs(p) {
  const list = p.sizes.map((z) => `${SIZE_ES[z.label] || z.label}: $${z.price.toFixed(2)} USD`).join('. ');
  return [
    { q: `¿Qué es ${p.name}?`,
      a: `${p.overviewEs || p.overview} Se suministra como vial liofilizado de ${p.mg}, solo para uso en investigación de laboratorio.` },
    { q: `¿Cuánto cuesta ${p.name}?`,
      a: `${list}. Precios en dólares${p.outOfStock ? '. Esta presentación está agotada por ahora' : ''}.` },
    { q: `¿${p.name} está analizado? ¿Entregan certificado de análisis?`,
      a: 'Sí. Cada lote se analiza al 99% de pureza por HPLC y espectrometría de masas. El certificado de ' +
         'análisis está disponible si lo pides, también antes de comprar, y el número de lote de cualquier ' +
         'vial se puede comprobar en https://codexresearchlab.com/verify/.' },
    { q: `¿Cómo se envía ${p.name} y cuánto tarda la entrega?`, a: SHIPPING_LINE_ES },
    { q: `¿Cómo se debe almacenar ${p.name}?`,
      a: 'Los viales liofilizados se mantienen frescos y protegidos de la luz. Una vez reconstituidos se ' +
         'guardan refrigerados entre 2 y 8 grados Celsius. La etiqueta de cada vial indica sus condiciones ' +
         'de almacenamiento.' },
    { q: `¿${p.name} es para uso humano?`,
      a: `No. ${p.name} se vende estrictamente para investigación y desarrollo de laboratorio. No es para ` +
         'consumo humano ni animal, y no pretende diagnosticar, tratar, curar ni prevenir ninguna enfermedad.' },
  ];
}

// Contenido según el idioma de la página. Las vistas llaman a estos, no a las
// listas sueltas, para que /es/ y / no se desincronicen.
const faqs = () => (esLang() ? FAQS_ES : FAQS);
const overview = (p) => (esLang() && p.overviewEs ? p.overviewEs : p.overview);

/* Identidad legal del negocio. Va en el footer de todas las páginas: los
   procesadores de pago (Stripe) la buscan y su ausencia se lee como opacidad.
   RELLENAR legalName y address con los datos reales de la LLC; mientras estén
   vacíos, el footer simplemente no pinta esa línea. */
const BUSINESS = {
  legalName: 'Codex Research LLC',
  address: '30 N Gould St, Sheridan, WY 82801, United States',
  email: 'sales@codexresearchlab.com',
  phone: '+507 6335-4625',
};

window.REA = { PRODUCTS, FAQS, FAQS_ES, BUSINESS, COUNTRIES, COUPONS, BATCHES, batchFor, SALE,
  STOCK_BY_COUNTRY, applyStock,
  WHATSAPP: '50763354625', productFaq, productFaqEs, SHIPPING_LINE, SHIPPING_LINE_ES, PAYMENT_LINE,
  faqs, overview };
