/* Codex Research - blog content (7 SEO posts, topic cluster).
   Adapted from the Direct Peptides SEO package: brand → Codex Research,
   internal links → article/<slug>/, /shop → catalog/.
   Exposed on window.REA.POSTS (array, ordered for the blog listing).
   Each post: slug, title, metaTitle, metaDescription, category, tags,
   date (display), dateISO, excerpt, imageAlt, body(HTML), faq[], references[],
   cta(HTML), related[]. */
(function () {
  const DISCLAIMER =
    'All products sold by Codex Research are strictly for laboratory research purposes only. ' +
    'They are not intended for human or animal consumption, medical, or therapeutic use. ' +
    'The information provided on this website is for educational and informational purposes only.';

  const cite = (text, url) =>
    ` <a class="cite" href="${url}" target="_blank" rel="noopener nofollow">(${text})</a>`;

  const POSTS = [
    {
      slug: 'endotoxins-in-research-peptides',
      title: 'Endotoxins and Research Peptide Quality',
      metaTitle: 'Endotoxins in Peptides: When the COA Should Report Them',
      metaDescription: 'What bacterial endotoxins are, why they matter for cell-based laboratory work, and when a peptide certificate of analysis should report them.',
      focusKeyword: 'endotoxins research peptides',
      category: 'Peptide Research',
      tags: ['endotoxins', 'quality', 'COA', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A contaminant that purity testing alone will not catch, and how it is measured.',
      imageAlt: 'Endotoxin testing as part of research peptide quality control',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Purity and identity get most of the attention on a certificate of analysis, and for good reason. But there is a third quality measure that sometimes appears next to them, endotoxin content, and it answers a different question entirely. Not "is this the right peptide," but "is it clean of a specific kind of contamination."</p>

        <h2>What are endotoxins?</h2>
        <p>Endotoxins are components of the outer membrane of certain bacteria, specifically a molecule called lipopolysaccharide. They can be left behind even after the bacteria themselves are gone, and they are notably tough, surviving conditions that would destroy the organism. In a research context they are treated as a contaminant to be measured and kept low, because they can interfere with sensitive biological assays.</p>

        <h2>Why purity testing does not catch them</h2>
        <p>This is the key point. A <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> purity result and a <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> identity check tell you about the peptide itself, how much of it there is and whether it is the right molecule. Neither is designed to detect endotoxin. A peptide can be highly pure and correctly identified and still carry endotoxin, which is why it is tested separately when it matters.</p>

        <h2>How endotoxins are measured</h2>
        <p>Endotoxin content is usually reported in endotoxin units per milligram, written as EU/mg. A lower number is better. On a certificate of analysis you might see a limit expressed as less than a certain value, for example under 0.5 EU/mg, which states an upper bound rather than an exact count. The takeaway is not the specific method but the fact that it is a distinct measurement with its own units.</p>

        <h2>Where it fits in quality</h2>
        <p>Think of endotoxin as the third leg of a stool. Identity says the compound is correct, purity says little else is present, and endotoxin says a specific biological contaminant is controlled. Not every research use requires endotoxin testing, but when an assay is sensitive to it, the figure belongs on the <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> alongside the others.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What are endotoxins?', a: 'Endotoxins are components of the outer membrane of certain bacteria, specifically lipopolysaccharide. They can remain even after the bacteria are gone and are treated as a contaminant to be measured and kept low, since they can interfere with sensitive biological assays.' },
        { q: 'Does HPLC purity detect endotoxins?', a: 'No. HPLC purity and mass spectrometry identity describe the peptide itself. Neither detects endotoxin, so a peptide can be pure and correctly identified and still carry endotoxin, which is why it is tested separately when it matters.' },
        { q: 'How are endotoxins measured?', a: 'Endotoxin content is usually reported in endotoxin units per milligram (EU/mg), where lower is better. A certificate of analysis may state an upper bound, such as less than 0.5 EU/mg.' },
      ],
      references: [],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['how-to-read-a-certificate-of-analysis', 'peptide-purity-hplc-explained'],
    },
    {
      slug: 'peptide-length-terminology',
      title: 'Peptide Length: Di, Tri, Oligo, and Poly',
      metaTitle: 'Di, Tri, Oligo, Poly: How Peptide Length Is Named',
      metaDescription: 'A clear guide to peptide length terminology: what dipeptide, tripeptide, oligopeptide, and polypeptide mean, and where the line to a protein sits.',
      focusKeyword: 'peptide length terminology',
      category: 'Peptide Research',
      tags: ['peptide length', 'oligopeptide', 'polypeptide', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'The prefixes that describe how many amino acids a peptide has, and where peptide ends and protein begins.',
      imageAlt: 'Chain of amino acids illustrating peptide length terminology',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Peptide descriptions are full of prefixes: di, tri, penta, oligo, poly. They are not decoration. Each one is just counting amino acids, and once you know the pattern, a term like pentapeptide tells you something concrete before you read another word.</p>

        <h2>Counting by amino acids</h2>
        <p>A peptide is a chain of <a href="article/amino-acids-peptides-proteins-difference/">amino acids</a> linked together. The prefix in its name usually tells you how many links are in the chain. The most common ones you will run into are:</p>
        <ul>
          <li><b>Dipeptide:</b> two amino acids.</li>
          <li><b>Tripeptide:</b> three amino acids, like the copper peptides <a href="article/what-is-ghk-cu/">GHK-Cu</a> and AHK-Cu.</li>
          <li><b>Pentapeptide:</b> five amino acids, like <a href="article/what-is-ipamorelin/">ipamorelin</a>.</li>
          <li><b>Pentadecapeptide:</b> fifteen amino acids, like <a href="article/what-is-bpc-157/">BPC-157</a>.</li>
        </ul>

        <h2>Oligopeptides and polypeptides</h2>
        <p>Not every peptide gets a specific numeric name. When a chain is short, roughly a handful up to around ten or so amino acids, it is often called an oligopeptide, where "oligo" just means "a few." When the chain gets long, it becomes a polypeptide, where "poly" means "many." These are loose, descriptive terms rather than strict counts, but they give a quick sense of scale.</p>

        <h2>Where peptide ends and protein begins</h2>
        <p>There is no hard, universally agreed number where a long peptide officially becomes a protein. As a rough convention, chains of up to around fifty amino acids are usually called peptides, and larger folded structures are called proteins. The line is fuzzy on purpose, because the more meaningful difference is often about folding and function, not just length.</p>

        <h2>Why the terms are useful</h2>
        <p>For anyone reading a catalog, the length prefix is a fast orientation. It hints at how large a molecule is, which relates to its <a href="article/molecular-weight-of-peptides/">molecular weight</a> and, loosely, to how it is handled. A tripeptide and a pentadecapeptide are very different molecules, and their names say so up front.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What do dipeptide and tripeptide mean?', a: 'The prefix counts amino acids. A dipeptide has two amino acids and a tripeptide has three. For example, the copper peptides GHK-Cu and AHK-Cu are tripeptides.' },
        { q: 'What is the difference between an oligopeptide and a polypeptide?', a: 'An oligopeptide is a short chain, roughly a few up to around ten amino acids ("oligo" means a few). A polypeptide is a long chain ("poly" means many). Both are loose descriptive terms rather than exact counts.' },
        { q: 'At what length does a peptide become a protein?', a: 'There is no strict cutoff, but as a rough convention chains of up to around fifty amino acids are called peptides and larger folded structures are called proteins. The more meaningful difference is often folding and function.' },
      ],
      references: [],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['amino-acids-peptides-proteins-difference', 'molecular-weight-of-peptides'],
    },
    {
      slug: 'how-to-store-research-peptides',
      title: 'How to Store Research Peptides',
      metaTitle: 'Storing Research Peptides: Dry Vial vs Solution',
      metaDescription: 'Storage conditions for lyophilized peptides and for solutions: temperature, light, aliquots, and why the dry vial lasts far longer.',
      focusKeyword: 'how to store research peptides',
      category: 'Peptide Research',
      tags: ['peptide storage', 'lyophilized', 'handling', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'Why the dry powder is forgiving, the solution is not, and the small habits that protect both.',
      imageAlt: 'Research peptide vials stored cool and protected from light',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">A batch can be pure, correctly identified and fully documented, and still be worthless by the time it is used. Storage is where that happens, and it comes down to one distinction: a dry peptide and a dissolved one are two different situations, governed by different rules.</p>

        <h2>Why the dry form is the stable one</h2>
        <p>Water is not a neutral bystander. It takes part in the reactions that break peptides down, and it gives molecules the mobility to reach each other and react at all. Removing it by <a href="article/lyophilization-freeze-drying/">freeze-drying</a> removes both the reactant and the mobility.</p>
        <p>The mobility part is the one that gets overlooked. A properly dried formulation is an amorphous solid, and below a certain temperature that solid behaves as a glass in which molecular motion is effectively frozen. Absorbed water lowers the temperature at which that glass softens, so a powder that has taken up moisture has become a system in which things can move, and therefore react. <a class="cite" href="https://doi.org/10.1023/A:1018941810744" target="_blank" rel="noopener nofollow">(Reference: Hancock &amp; Zografi, 1994)</a></p>
        <p>That is the real reason moisture is the main enemy, and why water content appears as a figure on a thorough <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a>.</p>

        <h2>What degrades</h2>
        <p>Degradation is not a single vague process. A few specific chemical routes account for most of it, and knowing them explains every piece of storage advice.</p>
        <ul>
          <li><b>Deamidation.</b> Asparagine and glutamine residues lose their amide group and convert to acidic forms, sometimes by way of a cyclic intermediate that can also flip the residue's configuration. It is the most common route for peptides in water, it depends strongly on pH, and it changes the mass by about one dalton. <a class="cite" href="https://doi.org/10.1073/pnas.98.3.944" target="_blank" rel="noopener nofollow">(Reference: Robinson &amp; Robinson, 2001)</a></li>
          <li><b>Oxidation.</b> Methionine, cysteine and tryptophan are the vulnerable residues. Oxygen, light and trace metals all accelerate it.</li>
          <li><b>Hydrolysis.</b> The backbone itself can be cut, with some residue pairs far more susceptible than others.</li>
          <li><b>Aggregation.</b> Molecules associate into species that no longer dissolve properly. Unlike the others it is physical rather than chemical, so the mass is unchanged and only some methods will see it.</li>
        </ul>
        <p>These routes are well characterised. <a class="cite" href="https://doi.org/10.1002/bit.260480511" target="_blank" rel="noopener nofollow">(Reference: Li et al., 1995)</a> <a class="cite" href="https://doi.org/10.1007/s11095-009-0045-6" target="_blank" rel="noopener nofollow">(Reference: Manning et al., 2010)</a></p>

        <h2>The condensation problem</h2>
        <p>This is the most common handling mistake and the easiest to avoid. A vial taken from cold storage is colder than the room, so moisture from the air condenses on and in it the moment it is opened. The water goes straight into the powder.</p>
        <p>Letting a cold vial reach room temperature before opening costs nothing and removes the problem entirely. In a humid climate it matters more, not less.</p>

        <h2>Temperature, and why cycling is worse than warmth</h2>
        <p>Reaction rates rise with temperature, so colder storage slows every route above. What is less obvious is that repeatedly moving material between temperatures can do more damage than holding it at a steady, slightly warmer one. Each cycle is another opportunity for condensation and another pass through the range where the dried matrix softens.</p>
        <p>Taking a vial out once and keeping it out is usually worse. Taking it out, putting it back, and repeating is worse still.</p>


        <h2>What transit does</h2>
        <p>Material that has spent weeks moving between warehouses and vehicles has been through a series of temperature and humidity swings. The count that matters is how many of those cycles it went through and how wide each one was.</p>
        <p>A dry, well-sealed vial is robust and tolerates a reasonable journey. What it tolerates less well is repeated warming and cooling in humid air with a seal that is not what it should be. This is a property of the material rather than a claim about anyone's logistics: the chemistry above does not care who moved the box, only what the box experienced.</p>

        <h2>Light</h2>
        <p>Light drives oxidation, particularly of the aromatic residues. Amber vials and a closed box are enough; nothing elaborate is required. It is the variable most often ignored because its effect is invisible until an analysis reveals it.</p>

        <h2>Once it is in solution the clock speeds up</h2>
        <p>Dissolving the material restores everything that drying removed. Degradation that took months in the dry state can take days. The pH of the solution matters directly, because deamidation rates depend on it, which is part of why <a href="article/bacteriostatic-water-for-peptide-reconstitution/">bacteriostatic water</a> sits where it does on the pH scale.</p>
        <p>A solution is also a container that has been opened, so refrigeration and protection from light stop being optional. Labelling it with the date is not tidiness; it is the only way to know later what you are working with.</p>

        <h2>Habits that protect a batch</h2>
        <ul>
          <li>Let a cold vial reach room temperature before opening.</li>
          <li>Keep vials dry, cool and out of direct light.</li>
          <li>Avoid repeated temperature cycling.</li>
          <li>Label anything in solution with its date.</li>
          <li>Minimise how long a solution spends warm or exposed.</li>
        </ul>


        <p>One more thing worth saying plainly, because it causes unnecessary alarm: at the small masses typical of research quantities, the dried material can be a thin film, a few flecks on the glass, or not visibly present at all. A vial that looks empty has usually not lost anything. Appearance is a property of <a href="article/lyophilization-freeze-drying/">how the drying went</a> and of whether a <a href="article/excipients-in-peptides/">bulking agent</a> was present, not a measure of content.</p>

        <h2>The label is the final word</h2>
        <p>Everything above is the general case. The conditions for a specific compound belong on its vial label and its certificate, and those instructions override any rule of thumb, including this article. Some sequences have requirements of their own. If you want to confirm a vial is genuine before relying on it, check its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease. This guide describes laboratory handling only.</p>
      `,
      faq: [
        {
          "q": "Why is a lyophilized peptide more stable than a solution?",
          "a": "Because water both takes part in the reactions that break peptides down and gives molecules the mobility to react at all. Removing it removes both. A properly dried formulation behaves as a glass in which molecular motion is effectively frozen."
        },
        {
          "q": "Why does moisture matter so much?",
          "a": "Absorbed water lowers the temperature at which the dried matrix softens. A powder that has taken up moisture has become a system in which molecules can move and therefore react. It is also why water content appears on a thorough certificate."
        },
        {
          "q": "Why should a cold vial warm up before it is opened?",
          "a": "Because it is colder than the room, so moisture from the air condenses on and inside it the moment it is opened, and that water goes into the powder. Letting it reach room temperature first removes the problem entirely."
        },
        {
          "q": "What reactions degrade a peptide?",
          "a": "Mainly deamidation of asparagine and glutamine, oxidation of methionine, cysteine and tryptophan, hydrolysis of the backbone, and aggregation. The first three change the mass; aggregation is physical, so the mass is unchanged and only some methods detect it."
        },
        {
          "q": "Is repeated temperature cycling worse than steady warmth?",
          "a": "It can be. Each cycle is another opportunity for condensation and another pass through the range where the dried matrix softens. Taking a vial out and putting it back repeatedly is generally worse than a single steady condition."
        },
        {
          "q": "Does the label override general storage advice?",
          "a": "Yes. Conditions for a specific compound belong on its vial label and its certificate of analysis, and those instructions take precedence over any general rule of thumb."
        }
      ],
      references: [
        {
          "text": "Hancock, B.C., &amp; Zografi, G. (1994). The relationship between the glass transition temperature and the water content of amorphous pharmaceutical solids. Pharmaceutical Research, 11(4), 471-477.",
          "url": "https://doi.org/10.1023/A:1018941810744"
        },
        {
          "text": "Robinson, N.E., &amp; Robinson, A.B. (2001). Molecular clocks. Proceedings of the National Academy of Sciences, 98(3), 944-949.",
          "url": "https://doi.org/10.1073/pnas.98.3.944"
        },
        {
          "text": "Li, S., Schöneich, C., &amp; Borchardt, R.T. (1995). Chemical instability of protein pharmaceuticals: mechanisms of oxidation and strategies for stabilization. Biotechnology and Bioengineering, 48(5), 490-500.",
          "url": "https://doi.org/10.1002/bit.260480511"
        },
        {
          "text": "Manning, M.C., Chou, D.K., Murphy, B.M., Payne, R.W., &amp; Katayama, D.S. (2010). Stability of protein pharmaceuticals: an update. Pharmaceutical Research, 27(4), 544-575.",
          "url": "https://doi.org/10.1007/s11095-009-0045-6"
        },
        {
          "text": "Wang, W. (2000). Lyophilization and development of solid protein pharmaceuticals. International Journal of Pharmaceutics, 203(1-2), 1-60.",
          "url": "https://doi.org/10.1016/S0378-5173(00)00423-3"
        }
      ],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['lyophilization-freeze-drying', 'how-to-read-a-certificate-of-analysis', 'bacteriostatic-water-for-peptide-reconstitution'],
    },
    {
      slug: 'cyclic-vs-linear-peptides',
      title: 'Cyclic vs Linear Peptides',
      metaTitle: 'Cyclic vs Linear Peptides: Why the Ring Changes Things',
      metaDescription: 'Cyclic vs linear peptides: how the two structural forms differ, why a ring shape changes a peptide behavior, and where each shows up in research.',
      focusKeyword: 'cyclic vs linear peptides',
      category: 'Peptide Research',
      tags: ['cyclic peptides', 'linear peptides', 'peptide structure', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A ring or a chain, and why that single structural choice changes how a peptide behaves.',
      imageAlt: 'Comparison of cyclic and linear peptide structures in research',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Peptides come in two broad shapes, and the difference is easy to picture. A linear peptide is a chain with two loose ends. A cyclic peptide is a chain that has been joined into a ring. It sounds like a small detail, but that closed loop changes how the molecule behaves in ways researchers care about.</p>

        <h2>Linear peptides</h2>
        <p>A linear peptide is the default form: a sequence of <a href="article/amino-acids-peptides-proteins-difference/">amino acids</a> linked end to end, with a distinct start and finish. Most short research peptides are linear. The two open ends make them straightforward to build by <a href="article/peptide-synthesis/">solid-phase synthesis</a>, and their flexibility is part of what makes them useful, though it can also make them easier to break down.</p>

        <h2>Cyclic peptides</h2>
        <p>A cyclic peptide takes that chain and closes it into a loop, usually by forming a bond between two points on the sequence. The ring can be the full backbone or just a portion of it. Removing the loose ends and locking the shape tends to make a cyclic peptide more rigid and, in many cases, more resistant to the enzymes that would chew through a linear one.</p>

        <h2>Why the shape matters</h2>
        <p>Structure drives behavior. A locked ring holds its atoms in a more fixed arrangement, which can change how tightly and selectively a peptide fits a receptor. It can also affect stability. This is not a small effect. Some research peptides are cyclic by design precisely because the ring gives them properties a linear version would not have. <a href="article/what-is-pt-141/">PT-141</a> is one example of a cyclic peptide in the research space.</p>

        <h2>How it shows up in practice</h2>
        <p>For someone handling these compounds, the practical takeaway is simple: the shape is part of the identity. Whether a peptide is cyclic or linear, its structure is confirmed the same way, by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> and purity testing, and reported on its certificate of analysis. The form is a feature of the molecule, not a variable in your workflow.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What is the difference between cyclic and linear peptides?', a: 'A linear peptide is a chain of amino acids with two open ends. A cyclic peptide is a chain joined into a ring. Closing the loop removes the loose ends and locks the shape, which changes rigidity and often stability.' },
        { q: 'Why are some peptides made cyclic?', a: 'A ring holds the molecule in a more fixed arrangement, which can change how it fits a receptor and can make it more resistant to enzymes that break down linear peptides. Some research peptides are cyclic by design for those reasons.' },
        { q: 'Is PT-141 a cyclic peptide?', a: 'Yes, PT-141 is an example of a cyclic peptide studied in research. Its structure, like any peptide, is confirmed by mass spectrometry and purity testing and reported on its certificate of analysis.' },
      ],
      references: [],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['peptide-synthesis', 'what-is-pt-141'],
    },
    {
      slug: 'molecular-weight-of-peptides',
      title: 'Molecular Weight of Peptides, Explained',
      metaTitle: 'Peptide Molecular Weight: Average vs Monoisotopic Mass',
      metaDescription: 'How peptide molecular weight is calculated, the difference between average and monoisotopic mass, and which one a mass spectrum reports.',
      focusKeyword: 'molecular weight of peptides',
      category: 'Peptide Research',
      tags: ['molecular weight', 'daltons', 'mass spectrometry', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'What the g/mol figure next to a peptide means, and where it matters.',
      imageAlt: 'Molecular weight of a research peptide shown with its molecular formula',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Every peptide listing carries a molecular weight, usually a number followed by g/mol. That number anchors two things in the lab: confirming a peptide is the one you ordered, and the arithmetic of turning milligrams into a concentration.</p>

        <h2>What molecular weight means</h2>
        <p>Molecular weight is the mass of one molecule, added up from the masses of all its atoms. For a peptide, that means summing the amino acids in the sequence, minus the water lost each time two of them join. The result is expressed in grams per mole (g/mol), or equivalently in daltons. A larger peptide with more amino acids has a higher molecular weight, which is why a compound like tirzepatide sits far above a small tripeptide.</p>

        <h2>Where the number comes from</h2>
        <p>The molecular weight follows directly from the molecular formula, the count of each type of atom in the molecule. If you know the formula, the weight is just arithmetic. That is why a good listing shows both, for example a formula like C62H98N16O22 alongside a weight near 1419 g/mol for <a href="article/what-is-bpc-157/">BPC-157</a>. The two are tied together.</p>

        <h2>Why it matters for identity</h2>
        <p>Molecular weight is the anchor of an identity check. When a lab runs <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, it measures the mass of the molecule and compares it with the expected molecular weight. A match is strong evidence that the compound is the intended peptide. A mismatch is a red flag. This is the second half of the story that a purity figure alone cannot tell you.</p>

        <h2>Why it matters for reconstitution</h2>
        <p>Molecular weight also shows up in practical bench work. When you convert between mass and moles, the weight is part of the arithmetic. For everyday concentration math the amount in milligrams and the volume of diluent are usually enough, but the molecular weight is the value underneath any mole-based calculation.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What does molecular weight mean for a peptide?', a: 'It is the mass of one molecule, summed from the masses of all its atoms. For a peptide it comes from adding up the amino acids in the sequence, minus the water lost as they join, and it is expressed in grams per mole or daltons.' },
        { q: 'How is a peptide molecular weight calculated?', a: 'It follows from the molecular formula, the count of each atom in the molecule. If you know the formula, the weight is arithmetic. A good listing shows both the formula and the weight together.' },
        { q: 'Why does molecular weight matter in the lab?', a: 'It anchors identity checks, since mass spectrometry compares the measured mass with the expected molecular weight, and it underlies any mole-based reconstitution or concentration calculation.' },
      ],
      references: [],
      cta: 'Browse the <a href="catalog/">Codex Research catalog</a>, which lists the formula and molecular weight of each compound.',
      related: ['mass-spectrometry-peptide-research', 'cas-numbers-explained', 'cyclic-vs-linear-peptides'],
    },
    {
      slug: 'cas-numbers-explained',
      title: 'CAS Numbers Explained',
      metaTitle: 'CAS Numbers: How to Check a Compound in 30 Seconds',
      metaDescription: 'What a CAS Registry Number is, how its check digit works, and how to use one to confirm a compound is the one you think it is.',
      focusKeyword: 'CAS number',
      category: 'Peptide Research',
      tags: ['CAS number', 'chemical identifier', 'quality', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'The unique identifier next to every compound name, and how to read it.',
      imageAlt: 'CAS registry number shown on a research compound label',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Next to almost every compound on a research listing sits a string of digits labeled CAS. It is easy to skip, but that little number is one of the most reliable ways to know exactly which chemical you are looking at. Names can be ambiguous. A CAS number is not.</p>

        <h2>What is a CAS number?</h2>
        <p>A CAS number is a unique identifier assigned to a chemical substance by the Chemical Abstracts Service. Each distinct substance gets its own number, and no two substances share one. A compound might have several common names, an abbreviation, and a long systematic name, but it has exactly one CAS number. It cuts through the naming confusion.</p>

        <h2>How the number is structured</h2>
        <p>A CAS number is written as three groups of digits separated by hyphens, in the pattern of a longer group, then two digits, then a single digit, for example 137525-51-0. That final single digit is a check digit, calculated from the others, which lets software catch a typo. The digits themselves carry no hidden meaning about the structure. They are just a registry entry, like a catalog number.</p>

        <h2>Why it appears on peptide listings</h2>
        <p>Research peptides often have overlapping names and abbreviations, so a CAS number is a precise way to confirm which compound is being sold. On the Codex Research catalog you will see the CAS number listed with each product, for instance <a href="article/what-is-bpc-157/">BPC-157</a> at 137525-51-0. It is a small detail that makes the listing verifiable rather than just descriptive.</p>

        <h2>Using it to check a compound</h2>
        <p>Because a CAS number is unique, you can use it to look a substance up in public chemical databases and confirm you are dealing with the compound you expect. Paired with a <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> and a verifiable batch number, it is part of how a research supplier makes its material traceable rather than anonymous.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What is a CAS number?', a: 'A CAS number is a unique identifier assigned to a chemical substance by the Chemical Abstracts Service. Each distinct substance has exactly one, which makes it a precise way to confirm which compound is meant, regardless of naming.' },
        { q: 'How is a CAS number formatted?', a: 'It is written as three groups of digits separated by hyphens, such as 137525-51-0: a longer group, then two digits, then a single check digit calculated from the others to catch typos.' },
        { q: 'Why do research peptides list a CAS number?', a: 'Peptides often have several names and abbreviations, so a CAS number is an unambiguous way to identify the exact compound. It also lets you look the substance up in public chemical databases to confirm it.' },
      ],
      references: [],
      cta: 'Browse the <a href="catalog/">Codex Research catalog</a>, where each product lists its CAS number, or <a href="verify/">check a batch number</a>.',
      related: ['how-to-read-a-certificate-of-analysis', 'what-is-bpc-157'],
    },
    {
      slug: 'how-to-read-a-certificate-of-analysis',
      title: 'How to Read a Peptide Certificate of Analysis',
      metaTitle: 'Reading a Peptide COA: Purity, Identity and Net Content',
      metaDescription: 'What each field on a peptide COA means, why chromatographic purity is not net peptide content, and the red flags of an unreliable certificate.',
      focusKeyword: 'read a peptide certificate of analysis',
      category: 'Peptide Research',
      tags: ['certificate of analysis', 'COA', 'quality', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'What a certificate of analysis reports, field by field.',
      imageAlt: 'Peptide certificate of analysis document with purity and identity results',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">A certificate of analysis, or COA, turns a claim on a label into something checkable. The purity number gets all the attention, and the rest of the document is where the number gets its meaning.</p>

        <h2>Batch or lot number</h2>
        <p>Every COA is tied to a specific batch, and the batch number is the link between the paper and the vial in your hand. If the number on the document does not match the number on the label, the COA does not describe your material. This is also the number you would enter to <a href="verify/">verify a batch</a> is genuine.</p>

        <h2>Purity</h2>
        <p>Purity is usually reported as a percentage from <a href="article/peptide-purity-hplc-explained/">HPLC</a>, often near 99 percent. It tells you how much of the sample is the target peptide versus everything else the method detected. A high figure with a clean result is a good sign, but remember that purity alone does not confirm what the peptide is.</p>

        <h2>Identity</h2>
        <p>Identity is the other half of the picture, and it is usually confirmed by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>. The COA reports the measured mass and compares it with the expected mass for that peptide. When the two match, you have evidence that the compound is what it claims to be, not just that it is pure.</p>

        <h2>Analysis date and methods</h2>
        <p>A COA should say when the testing was done and which methods were used, typically HPLC and mass spectrometry. The date matters because it ties the results to a moment in that batch's life. The methods matter because they tell you how the numbers were produced rather than asking you to take them on faith.</p>

        <h2>Putting it together</h2>
        <p>Read as a whole, a good COA answers three questions: which batch is this, how pure is it, and is it the right molecule. If a document only answers one of those, it is incomplete. At Codex Research the full COA is available on request before you pay, and any vial can be checked by its batch number.</p>

        <h2>The other fields a complete COA carries</h2>
        <p>Batch, purity and identity are the headline items, but a thorough certificate reports more than three lines. Depending on the compound, you may also see:</p>
        <ul>
          <li><b>Product name and identifiers,</b> including a <a href="article/cas-numbers-explained/">CAS number</a> where one exists, so the document cannot be confused with a similar compound.</li>
          <li><b>Appearance:</b> a short qualitative description of the material, usually a lyophilised powder.</li>
          <li><b>Net peptide content:</b> how much of the powder is peptide rather than salt and water.</li>
          <li><b>Water content,</b> usually by Karl Fischer titration, because lyophilised peptides take up moisture.</li>
          <li><b>Counterion content:</b> trifluoroacetate or acetate left over from purification.</li>
          <li><b>Residual solvents:</b> traces of the solvents used in synthesis and purification.</li>
          <li><b>Bacterial endotoxin,</b> reported when the intended laboratory work is sensitive to it, such as cell-based assays.</li>
          <li><b>Methods, date and signature:</b> which procedure produced each number, when, and who is answerable for it.</li>
        </ul>
        <p>Not every certificate carries every line. What matters is that the ones it does carry are numbers tied to a named method, not adjectives.</p>

        <h2>Chromatographic purity is not net peptide content</h2>
        <p>This is the most common misreading of a peptide COA. Chromatographic purity asks a question about the peaks: of everything the method detected, what share was the target peptide? Net peptide content asks a question about the powder: of the material you weighed out, what share is peptide at all?</p>
        <p>The gap between them is real. Peptides purified by reversed-phase HPLC are typically isolated as salts, so part of the powder is counterion and part is absorbed water. A batch can be 99 percent pure by HPLC and still be well under 99 percent peptide by mass, with no contradiction between the two figures. They measure different things, and a certificate reporting only one is not wrong, just incomplete.</p>

        <h2>Reading the chromatogram itself</h2>
        <p>If the COA includes the chromatogram and not only the percentage, look at the trace and not just the number beside it. One tall, symmetrical peak on a flat baseline is the picture you want. Small peaks near the main one are common in peptide synthesis and usually correspond to closely related species, such as truncated or modified sequences the column separates only narrowly. A secondary peak sitting very close to the main one tells you the method had to work to resolve it, which is why the method conditions belong on the certificate.</p>

        <h2>What mass spectrometry adds that HPLC cannot</h2>
        <p>HPLC separates and quantifies; it does not name. Two different compounds can elute at a similar time under the same conditions, and a UV detector reports both as peaks without opinion. Mass spectrometry answers what chromatography leaves open by measuring mass directly, so the observed value can be compared with the mass calculated from the sequence, and tandem approaches fragment the molecule to support the sequence itself. That is why purity without an identity method is half a document.</p>

        <h2>Who signs it, and why that matters</h2>
        <p>A certificate is a claim by whoever issued it, so independent testing matters because it separates the party making the claim from the party selling the material. Laboratories working to a recognised competence standard are assessed against defined criteria for competence and impartiality, and accreditation covers a specific list of methods rather than testing in general. The useful question is who produced the number, and under which method.</p>

        <h2>Red flags on a certificate</h2>
        <ul>
          <li><b>No batch or lot number,</b> or one that does not match the vial: the document describes someone else's material.</li>
          <li><b>No analysis date,</b> so the results cannot be tied to a point in that batch's life.</li>
          <li><b>No named methods.</b> "Purity: 99%" with no procedure behind it is a statement, not a result.</li>
          <li><b>No laboratory identity or signature,</b> which leaves no author to stand behind it.</li>
          <li><b>A low-resolution image</b> in which the chromatogram axes and header cannot be read.</li>
          <li><b>The same document for every product,</b> which means it is not batch-specific at all.</li>
        </ul>
        <p>At Codex Research every batch is tested by an independent laboratory using HPLC and mass spectrometry, the certificate is specific to that batch, and the full document is sent on request before you pay. The batch number on the label follows the format CDX-NNNN (for example, CDX-1017), and that string is what ties the vial to its paperwork. For checking a vial you already have, see our guide to <a href="article/verify-research-peptide-batch-coa-panama/">verifying a batch and its COA</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What is on a peptide certificate of analysis?', a: 'A COA reports the batch or lot number, the purity (usually from HPLC), the identity (usually from mass spectrometry), the analysis date, and the testing methods used. Together these say which batch it is, how pure it is, and whether it is the right molecule.' },
        { q: 'Why does the batch number on a COA matter?', a: 'The batch number links the document to a specific vial. If the number on the COA does not match the number on the label, the certificate does not describe your material. It is also the number used to verify a batch is genuine.' },
        { q: 'Is a purity percentage enough on its own?', a: 'No. Purity tells you how much of the sample is one main component, but not that the component is the correct peptide. A complete COA pairs HPLC purity with a mass spectrometry identity check.' },
        { q: 'What is the difference between HPLC purity and net peptide content?', a: 'HPLC purity is the share of the detected peaks that corresponds to the target peptide. Net peptide content is the share of the powder that is peptide rather than counterion and absorbed water. A batch can be 99 percent pure by HPLC and still be well below 99 percent peptide by mass; the two figures measure different things.' },
        { q: 'Why does a COA list counterions such as TFA or acetate?', a: 'Peptides purified by reversed-phase HPLC are usually isolated as salts, so trifluoroacetate or acetate remains bound to the material. It is reported because it is part of the weighed powder and because it is a known residual of the purification process.' },
        { q: 'What are the warning signs of an unreliable certificate of analysis?', a: 'No batch number, or one that does not match the vial; no analysis date; no named test methods; no identified laboratory or signature; an image too low in resolution to read the chromatogram; or the same document reused across every product instead of being specific to one batch.' },
      ],
      references: [
        { text: 'Q6A Specifications: Test Procedures and Acceptance Criteria for New Drug Substances and New Drug Products: Chemical Substances. ICH guidance, U.S. Food and Drug Administration.', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q6a-specifications-test-procedures-and-acceptance-criteria-new-drug-substances-and-new-drug-products' },
        { text: 'General Chapter 1503, Quality Attributes of Synthetic Peptide Drug Substances. United States Pharmacopeia (USP-NF).', url: 'https://doi.usp.org/USPNF/USPNF_M12935_02_01.html' },
        { text: 'General Chapter 503.1, Trifluoroacetic Acid (TFA) in Peptides. United States Pharmacopeia (USP-NF).', url: 'https://doi.usp.org/USPNF/USPNF_M9393_01_01.html' },
        { text: 'Quality Control of Amino Acids and Peptides: A Guide. Bachem Knowledge Center.', url: 'https://www.bachem.com/knowledge-center/quality-control-of-amino-acids-peptides-a-guide/' },
        { text: 'Elsayed YY, Kuhl T, Imhof D. Regulatory Guidelines for the Analysis of Therapeutic Peptides and Proteins. Journal of Peptide Science, 2025.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11806371/' },
      ],
      cta: '<a href="verify/">Verify a batch number</a> or browse the <a href="catalog/">Codex Research catalog</a>. Every batch ships with its certificate of analysis.',
      related: ['peptide-purity-hplc-explained', 'mass-spectrometry-peptide-research', 'endotoxins-in-research-peptides'],
    },
    {
      slug: 'peptide-purity-hplc-explained',
      title: 'Peptide Purity: What 99% by HPLC Means',
      metaTitle: 'Peptide Purity: What 99% by HPLC Does Not Tell You',
      metaDescription: 'What a 99% HPLC purity figure measures, what it leaves out, and why identity by mass spectrometry answers the question purity cannot.',
      focusKeyword: 'peptide purity HPLC',
      category: 'Peptide Research',
      tags: ['peptide purity', 'HPLC', 'quality', 'research peptides', 'COA'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'What a purity percentage measures, and what it does not, when you read it on a COA.',
      imageAlt: 'HPLC chromatogram used to measure research peptide purity',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Almost every research peptide listing mentions a purity figure, often 99 percent by HPLC. It is one of the most quoted numbers in the field and one of the least explained. Worth spelling out what that number measures, and what it does not.</p>

        <h2>How purity is measured</h2>
        <p>Purity is usually determined by <a href="article/high-performance-liquid-chromatography-hplc/">high-performance liquid chromatography</a>, or HPLC. In simple terms, the sample is pushed through a column that separates its components, and each component shows up as a peak on a chart called a chromatogram. The target peptide is the main peak. Purity is the area of that main peak expressed as a percentage of all the peaks combined. So 99 percent means the target peptide accounts for about 99 percent of what the method detected.</p>

        <h2>What the number tells you</h2>
        <p>A high HPLC purity figure says that very little else showed up alongside the peptide. Small side peaks can come from related peptide fragments, incomplete sequences, or leftover material from synthesis. A clean chromatogram with one dominant peak is a good sign that the batch is mostly what it claims to be.</p>

        <h2>What it does not tell you</h2>
        <p>Purity is not identity. HPLC tells you how much of the sample is one main component, but it does not by itself prove that component is the right peptide. That is why identity is confirmed separately, usually by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> comparing the measured mass with the expected one. A trustworthy certificate of analysis reports both: purity from HPLC and identity from mass spectrometry. One number without the other is only half the picture.</p>

        <h2>Why it matters</h2>
        <p>For research, consistency depends on knowing what is in the vial. A purity figure backed by an identity check is what lets one batch be compared with another. If you want to confirm a Codex Research vial is genuine, you can check its <a href="verify/">batch number</a>, and its full certificate of analysis is available on request.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What does 99% purity by HPLC mean?', a: 'It means the target peptide accounts for about 99 percent of what HPLC detected in the sample. HPLC separates the components into peaks, and purity is the area of the main peak as a percentage of all peaks combined.' },
        { q: 'Does HPLC purity confirm the peptide identity?', a: 'No. HPLC measures how much of the sample is one main component, but it does not prove that component is the correct peptide. Identity is confirmed separately, usually by mass spectrometry comparing the measured mass with the expected mass.' },
        { q: 'Why does peptide purity matter in research?', a: 'Consistency depends on knowing what is in the vial. A purity figure backed by an identity check lets one batch be compared with another. A certificate of analysis should report both HPLC purity and mass spectrometry identity.' },
      ],
      references: [],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['high-performance-liquid-chromatography-hplc', 'mass-spectrometry-peptide-research', 'endotoxins-in-research-peptides'],
    },
    {
      slug: 'what-are-melanocortin-receptors',
      title: 'What Are Melanocortin Receptors?',
      metaTitle: 'Melanocortin Receptors: The MC1R to MC5R Family',
      metaDescription: 'What are melanocortin receptors? A clear look at this receptor family, the subtypes researchers study, and how peptides like PT-141 are used to probe them.',
      focusKeyword: 'melanocortin receptors',
      category: 'Peptide Research',
      tags: ['melanocortin receptors', 'PT-141', 'receptor pharmacology', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A receptor family behind processes from pigmentation to central signaling, and the peptides used to study it.',
      imageAlt: 'Concept of melanocortin receptor signaling studied in peptide research',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">When a peptide like <a href="article/what-is-pt-141/">PT-141</a> is described as a melanocortin receptor agonist, the receptor name does a lot of quiet work. Melanocortin receptors are a whole family, not a single target, and knowing that makes the compounds that act on them much easier to understand.</p>

        <h2>What are melanocortin receptors?</h2>
        <p>Melanocortin receptors are a family of receptors that respond to a group of signaling molecules called melanocortins. There are several members in the family, usually labeled MC1R through MC5R, and they are spread across different tissues. The name hints at one of their better-known roles, since "melano" points to pigmentation, but the family reaches well beyond that.</p>

        <h2>A family, not one target</h2>
        <p>The reason researchers care about the distinction is that the subtypes do different things. Some are tied to pigmentation, others to central signaling in the nervous system, and others to processes like energy balance. A compound that acts on the family is not automatically acting on all of it, so a recurring research question is how selectively a given agonist engages one subtype over another. If the word agonist is unfamiliar, our note on <a href="article/agonist-vs-antagonist/">agonists vs antagonists</a> covers it.</p>

        <h2>Where peptides come in</h2>
        <p>Peptides that bind these receptors are used as tools to probe the family. PT-141, also known as bremelanotide, is one example studied for its activity at melanocortin receptors, particularly subtypes tied to central signaling. In that setting the peptide is a way to ask what a specific receptor does, and how cleanly a compound can target it.</p>

        <h2>How they are studied</h2>
        <p>Laboratory work on melanocortin receptors typically looks at receptor binding across subtypes, the signaling pathways each one triggers, and neurobehavioral models tied to central melanocortin activity. These are preclinical, model-based studies. The peptides involved are supplied strictly as research compounds.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What are melanocortin receptors?', a: 'They are a family of receptors that respond to signaling molecules called melanocortins. There are several subtypes, commonly labeled MC1R through MC5R, spread across different tissues and involved in processes from pigmentation to central signaling.' },
        { q: 'How many melanocortin receptors are there?', a: 'The family is usually described as having five members, MC1R through MC5R. They are found in different tissues and are associated with different processes, which is why selectivity across subtypes is a common research question.' },
        { q: 'Which peptide acts on melanocortin receptors?', a: 'PT-141, also called bremelanotide, is a well-known example studied as a melanocortin receptor agonist, particularly at subtypes tied to central signaling. It is used strictly for laboratory research.' },
      ],
      references: [],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-is-pt-141', 'agonist-vs-antagonist'],
    },
    {
      slug: 'agonist-vs-antagonist',
      title: 'Agonist vs Antagonist: A Simple Explanation',
      metaTitle: 'Agonist vs Antagonist: One Receptor, Two Outcomes',
      metaDescription: 'What separates an agonist from an antagonist at a receptor, plus partial agonists and inverse agonists, in research terms.',
      focusKeyword: 'agonist vs antagonist',
      category: 'Peptide Research',
      tags: ['agonist', 'antagonist', 'receptor pharmacology', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'Two words that describe what a compound does at a receptor, and why the difference keeps coming up.',
      imageAlt: 'Diagram concept of agonist and antagonist binding at a receptor',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Agonist and antagonist are the two words that appear in almost every compound description, and most explanations stop at "one turns the receptor on, the other blocks it". That is true and it is not enough, because a compound can bind a receptor tightly and still do nothing, and two compounds can both be agonists while producing different outcomes at the same receptor.</p>

        <h2>Binding and doing are separate properties</h2>
        <p>The lock-and-key picture hides the most useful idea in receptor pharmacology: a molecule's ability to attach to a receptor and its ability to produce a response are two independent things.</p>
        <p>The first is affinity, which describes how readily the compound occupies the site. The second is efficacy, which describes what happens once it is there. The distinction was formalised in the 1950s and it is the reason the classification exists at all: agonists and antagonists can have identical affinity and differ entirely in efficacy. <a class="cite" href="https://doi.org/10.1111/j.1476-5381.1956.tb00006.x" target="_blank" rel="noopener nofollow">(Reference: Stephenson, 1956)</a></p>

        <h2>Agonists come in degrees</h2>
        <p>An agonist binds and activates. But activation is not all-or-nothing.</p>
        <ul>
          <li><b>A full agonist</b> produces the maximum response the system can give.</li>
          <li><b>A partial agonist</b> produces a submaximal response even when every receptor is occupied. Adding more does not close the gap, because the ceiling is a property of the compound rather than of the dose.</li>
        </ul>
        <p>A partial agonist in the presence of a full one therefore behaves partly like a blocker, since it occupies sites that would otherwise give a full response. The categories are not as clean as the vocabulary suggests.</p>

        <h2>Antagonists block, in more than one way</h2>
        <p>An antagonist occupies the receptor without activating it. How it blocks matters.</p>
        <ul>
          <li><b>Competitive antagonists</b> compete for the same site. Enough agonist will outcompete them, so the block can be overcome.</li>
          <li><b>Non-competitive and allosteric antagonists</b> act elsewhere on the receptor, changing its behaviour without contesting the binding site. Adding more agonist does not restore the full response.</li>
        </ul>
        <p>In the laboratory the difference shows up as a shift in the concentration-response curve for the first case and a reduction of its maximum for the second.</p>

        <h2>Receptors can be active with nothing bound</h2>
        <p>The classical picture assumes a receptor sits silent until something arrives. Many do not. A fraction of receptors adopts the active conformation spontaneously, producing what is called constitutive activity, and a compound can bind and reduce that baseline below where it would sit with nothing present at all. That compound is an inverse agonist, a third category that the on-or-off framing has no room for. <a class="cite" href="https://doi.org/10.1124/mol.64.6.1271" target="_blank" rel="noopener nofollow">(Reference: Milligan, 2003)</a></p>

        <p>The practical consequence is historical as much as technical. Compounds catalogued as neutral antagonists before constitutive activity was widely recognised were later re-examined, and a number of them turned out to be inverse agonists. The classification depends on what the assay was able to see.</p>

        <h2>Two agonists at one receptor are not necessarily equivalent</h2>
        <p>A receptor usually has more than one downstream route available. A compound can engage a receptor and favour one of those routes over another, so two agonists at the same target can produce different patterns of activity rather than more or less of the same thing. This is called biased agonism or functional selectivity. <a class="cite" href="https://doi.org/10.1124/jpet.110.173948" target="_blank" rel="noopener nofollow">(Reference: Kenakin, 2011)</a></p>
        <p>It is not an exotic edge case. <a href="article/what-is-tirzepatide/">Tirzepatide</a> has been characterised in exactly those terms: it engages two receptors, and it engages them unevenly. Calling it a dual agonist is accurate and tells you nothing about the balance.</p>


        <h2>Where selectivity fits</h2>
        <p>Few receptors exist alone. Most belong to families whose members share enough structure that a compound shaped for one will often touch its relatives, and selectivity is the word for how cleanly it avoids doing so. It is a comparison, never an absolute: a compound is selective for one subtype over another by some factor, under some conditions.</p>
        <p>This is why <a href="article/what-is-ipamorelin/">ipamorelin</a> is described as selective, and why the recurring question for any melanocortin agonist such as <a href="article/what-is-pt-141/">PT-141</a> is which of the <a href="article/what-are-melanocortin-receptors/">receptor subtypes</a> it engages and how strongly. For a research tool, selectivity is what makes an observation attributable: the cleaner the profile, the fewer alternative explanations for what was measured.</p>

        <h2>The label is partly a property of the experiment</h2>
        <p>Most explanations leave this out. Whether a compound looks like a full agonist or a partial one depends on the compound and on the system it is measured in: how many receptors are present, how strongly the readout amplifies the signal, and which downstream event is being observed. Frameworks exist precisely to separate what belongs to the molecule from what belongs to the assay. <a class="cite" href="https://doi.org/10.1098/rspb.1983.0093" target="_blank" rel="noopener nofollow">(Reference: Black &amp; Leff, 1983)</a> <a class="cite" href="https://doi.org/10.1016/j.tips.2004.02.012" target="_blank" rel="noopener nofollow">(Reference: Kenakin, 2004)</a></p>
        <p>The practical reading: a compound described as an agonist in one paper and a partial agonist in another may not be a contradiction. It may be two systems.</p>

        <h2>What the word tells you about a vial, and what it does not</h2>
        <p>Almost every compound in this catalogue is described as a receptor agonist. <a href="article/what-is-ipamorelin/">Ipamorelin</a> at the ghrelin receptor, <a href="article/what-is-pt-141/">PT-141</a> at melanocortin receptors, <a href="article/what-is-tirzepatide/">tirzepatide</a> at the incretin receptors. The term describes what the molecule is understood to do at its target, drawn from published work.</p>
        <p>What it does not describe is the material in front of you. "Agonist" is a statement about a structure; it says nothing about whether this batch contains that structure, how pure it is, or whether the right molecule is in the vial. Those questions are answered by a <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> and by checking a <a href="verify/">batch number</a>, not by a word in a description.</p>

        <h2>Research use only</h2>
        <p>This article is background pharmacology for laboratory context. All products sold by Codex Research are strictly for research and development, are not for human or animal consumption, and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What is the difference between an agonist and an antagonist?",
          "a": "An agonist binds a receptor and activates it. An antagonist binds but does not activate, occupying the site so an agonist cannot act there. The distinction is about efficacy, not about how well the compound binds."
        },
        {
          "q": "What is the difference between affinity and efficacy?",
          "a": "Affinity describes how readily a compound occupies a receptor. Efficacy describes what happens once it is bound. They are independent, which is why two compounds can bind equally well and produce completely different outcomes."
        },
        {
          "q": "What is a partial agonist?",
          "a": "One that produces a submaximal response even when every receptor is occupied. Adding more does not close the gap, because the ceiling belongs to the compound. In the presence of a full agonist it can behave partly like a blocker."
        },
        {
          "q": "What is an inverse agonist?",
          "a": "A compound that reduces a receptor below the baseline activity it shows with nothing bound. It only makes sense for receptors with constitutive activity, meaning a fraction that adopts the active conformation spontaneously."
        },
        {
          "q": "What does biased agonism mean?",
          "a": "That a compound engaging a receptor can favour one downstream route over another. Two agonists at the same target may therefore produce different patterns of activity rather than more or less of the same response."
        },
        {
          "q": "Does calling a peptide an agonist say anything about the vial?",
          "a": "No. It describes what the molecule is understood to do at its target, based on published work. Whether a particular batch contains that molecule, and how pure it is, is answered by a certificate of analysis and a batch check."
        }
      ],
      references: [
        {
          "text": "Stephenson, R.P. (1956). A modification of receptor theory. British Journal of Pharmacology and Chemotherapy, 11(4), 379-393.",
          "url": "https://doi.org/10.1111/j.1476-5381.1956.tb00006.x"
        },
        {
          "text": "Black, J.W., &amp; Leff, P. (1983). Operational models of pharmacological agonism. Proceedings of the Royal Society B, 220(1219), 141-162.",
          "url": "https://doi.org/10.1098/rspb.1983.0093"
        },
        {
          "text": "Milligan, G. (2003). Constitutive activity and inverse agonists of G protein-coupled receptors: a current perspective. Molecular Pharmacology, 64(6), 1271-1276.",
          "url": "https://doi.org/10.1124/mol.64.6.1271"
        },
        {
          "text": "Kenakin, T. (2004). Principles: receptor theory in pharmacology. Trends in Pharmacological Sciences, 25(4), 186-192.",
          "url": "https://doi.org/10.1016/j.tips.2004.02.012"
        },
        {
          "text": "Kenakin, T. (2011). Functional selectivity and biased receptor signaling. The Journal of Pharmacology and Experimental Therapeutics, 336(2), 296-302.",
          "url": "https://doi.org/10.1124/jpet.110.173948"
        }
      ],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-is-ipamorelin', 'what-is-pt-141', 'what-are-melanocortin-receptors'],
    },
    {
      slug: 'what-is-a-growth-hormone-secretagogue',
      title: 'What Is a Growth Hormone Secretagogue?',
      metaTitle: 'Growth Hormone Secretagogues: How Selectivity Differs',
      metaDescription: 'What a growth hormone secretagogue is, how the ghrelin receptor is involved, and why selectivity differs between research compounds.',
      focusKeyword: 'growth hormone secretagogue',
      category: 'Peptide Research',
      tags: ['growth hormone secretagogue', 'ghrelin receptor', 'ipamorelin', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'The class of compounds that acts on the ghrelin receptor, and why selectivity is the whole game.',
      imageAlt: 'Growth hormone secretagogue research peptide studied at the ghrelin receptor',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">"Growth hormone secretagogue" names a category rather than an effect. When a research peptide like <a href="article/what-is-ipamorelin/">ipamorelin</a> gets described this way, it is being placed in a group defined by what it targets rather than by any one effect.</p>

        <h2>What the term means</h2>
        <p>A secretagogue is anything that prompts a cell to release, or secrete, a substance. So a growth hormone secretagogue is a compound studied for how it engages the signaling that leads to growth hormone release. Many of the peptides in this class act as agonists at the ghrelin receptor, which is also called the growth hormone secretagogue receptor. The receptor name and the compound class are two sides of the same coin.</p>

        <h2>The ghrelin receptor connection</h2>
        <p>The ghrelin receptor sits upstream of pathways connected to growth hormone signaling. A secretagogue that activates it is being used, in a research setting, as a way to probe that pathway. Different compounds in the class engage the receptor with different profiles, and that variation is a big part of what researchers compare. An agonist, in this context, is a compound that activates a receptor rather than blocking it.</p>

        <h2>Why selectivity matters</h2>
        <p>Not every secretagogue is equally focused. Some activate the growth hormone pathway but also touch other hormone systems, which makes their effects harder to interpret. Others, like ipamorelin, are studied precisely because they show a more selective profile in laboratory models. For a research tool, that cleanliness is valuable: the more selective a compound, the easier it is to attribute an observed result to one receptor rather than several.</p>

        <h2>How they are studied</h2>
        <p>Laboratory work on growth hormone secretagogues typically looks at ghrelin receptor binding and activation, the secretagogue pathway itself, and comparisons between more and less selective compounds. These are preclinical, model-based studies. The peptides are supplied strictly as research compounds, and this article does not describe use in people or animals.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What is a growth hormone secretagogue?', a: 'It is a class of compounds studied for how they engage the signaling that leads to growth hormone release. Many act as agonists at the ghrelin receptor, also called the growth hormone secretagogue receptor. They are used strictly for laboratory research.' },
        { q: 'How does a secretagogue relate to the ghrelin receptor?', a: 'The ghrelin receptor sits upstream of growth hormone signaling pathways, and many secretagogues act as agonists there. That is why the receptor is also named the growth hormone secretagogue receptor.' },
        { q: 'Why is selectivity important for these peptides?', a: 'A more selective secretagogue engages the growth hormone pathway with limited activity elsewhere, which makes laboratory results easier to attribute to a single receptor. Ipamorelin is often cited as an example of a more selective compound.' },
      ],
      references: [],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-is-ipamorelin', 'peptide-synthesis'],
    },
    {
      slug: 'glp-1-vs-gip',
      title: 'GLP-1 vs GIP: What Is the Difference?',
      metaTitle: 'GLP-1 vs GIP: Two Incretins, Two Receptor Profiles',
      metaDescription: 'GLP-1 vs GIP: how the two main incretin hormones compare, why they act through different receptors, and what that means for metabolic peptide research.',
      focusKeyword: 'GLP-1 vs GIP',
      category: 'Peptide Research',
      tags: ['GLP-1', 'GIP', 'incretins', 'metabolism', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'Two incretin hormones, two receptors, and the reason researchers keep comparing them.',
      imageAlt: 'Comparison of GLP-1 and GIP incretin signaling in metabolic research',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">GLP-1 and GIP get mentioned in the same breath so often that it is easy to assume they are two names for the same thing. They are not. They are two different hormones from the same family, and the differences between them are exactly what makes modern metabolic peptides worth studying.</p>

        <h2>What they have in common</h2>
        <p>Both GLP-1 and GIP are <a href="article/what-are-incretins/">incretins</a>, gut hormones released in response to nutrients. Both connect to pathways tied to insulin signaling and glucose handling, and both belong to the group of targets that metabolic research peptides are designed to engage. So the shared ground is real: same family, same general job of helping the body respond to incoming glucose.</p>

        <h2>Where they differ</h2>
        <p>The key difference is that each acts through its own receptor:</p>
        <ul>
          <li><b>GLP-1</b> (glucagon-like peptide-1) works through the GLP-1 receptor and is the more heavily studied of the two.</li>
          <li><b>GIP</b> (glucose-dependent insulinotropic polypeptide) works through the GIP receptor.</li>
        </ul>
        <p>Because the receptors are distinct, activating one is not the same as activating the other, even though both feed into glucose regulation. That separation is the whole reason a research question like "what happens when you engage both at once" is even meaningful.</p>

        <h2>Why the comparison matters for peptides</h2>
        <p>Research peptides in this space are often defined by how many of these receptors they hit. A GLP-1-only agonist engages one. A dual agonist like <a href="article/what-is-tirzepatide/">tirzepatide</a> engages both GLP-1 and GIP. A triple agonist like <a href="article/what-is-retatrutide/">retatrutide</a> adds glucagon on top. Understanding that GLP-1 and GIP are different receptors is what makes those distinctions make sense.</p>

        <h2>Research use only</h2>
        <p>This article is background biology for laboratory context. All products sold by Codex Research are strictly for research and development, are not for human or animal consumption, and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'Are GLP-1 and GIP the same thing?', a: 'No. They are two different incretin hormones from the same family. Each acts through its own receptor, GLP-1 through the GLP-1 receptor and GIP through the GIP receptor, so activating one is not the same as activating the other.' },
        { q: 'Which is more studied, GLP-1 or GIP?', a: 'GLP-1 has historically been the more heavily studied of the two, though interest in GIP has grown as dual-receptor research peptides became a focus.' },
        { q: 'Why does the GLP-1 vs GIP difference matter for peptides?', a: 'Research peptides are often described by how many of these receptors they engage. Single, dual, and triple agonists build on the fact that GLP-1 and GIP are distinct receptors that feed into glucose regulation.' },
      ],
      references: [],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-are-incretins', 'what-is-tirzepatide'],
    },
    {
      slug: 'what-are-incretins',
      title: 'What Are Incretins? GIP and GLP-1 Explained',
      metaTitle: 'Incretins: What GIP and GLP-1 Do in Metabolic Research',
      metaDescription: 'What incretins are, how GIP and GLP-1 differ in their receptors, and why both appear in metabolic research on peptide agonists.',
      focusKeyword: 'what are incretins',
      category: 'Peptide Research',
      tags: ['incretins', 'GIP', 'GLP-1', 'metabolism', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'The gut hormones behind the incretin effect, and the reason so many research peptides target them.',
      imageAlt: 'Illustration of incretin signaling studied in metabolic peptide research',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">If you have read about peptides like <a href="article/what-is-tirzepatide/">tirzepatide</a> or <a href="article/what-is-retatrutide/">retatrutide</a>, you have run into the word incretin. It sounds technical, but the idea behind it is fairly simple, and understanding it makes the whole family of metabolic research peptides easier to follow.</p>

        <h2>What are incretins?</h2>
        <p>Incretins are hormones the gut releases when it detects nutrients, usually after eating. Their defining trick is the incretin effect: they help drive an insulin response that is stronger when glucose arrives through the gut than when the same amount is given another way. In other words, the body pays attention to how glucose shows up, and incretins are part of how it does that.</p>

        <h2>The two main incretins</h2>
        <p>Research centers on two of them:</p>
        <ul>
          <li><b>GIP</b> (glucose-dependent insulinotropic polypeptide): one of the two primary incretin hormones.</li>
          <li><b>GLP-1</b> (glucagon-like peptide-1): the other, and the more widely studied of the pair.</li>
        </ul>
        <p>Each one acts through its own receptor, and each connects to pathways tied to insulin signaling and glucose handling. They are not interchangeable, which is exactly why comparing them is interesting.</p>

        <h2>Why they matter in peptide research</h2>
        <p>A lot of modern metabolic research peptides are built to act on incretin receptors. Some target GLP-1 alone. A dual agonist like tirzepatide engages both GIP and GLP-1, and a triple agonist like retatrutide adds the glucagon receptor on top. The common thread is the incretin system, so knowing what these hormones do makes those compounds far less mysterious. If you want to compare the two head to head, see our note on <a href="article/glp-1-vs-gip/">GLP-1 vs GIP</a>.</p>

        <h2>A note on scope</h2>
        <p>Everything here is background biology and laboratory context. The research peptides that target these receptors are supplied strictly as research compounds, and nothing in this article describes use in people or animals.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What are incretins in simple terms?', a: 'Incretins are hormones the gut releases in response to nutrients. They help produce a stronger insulin response when glucose arrives through the gut, which is called the incretin effect.' },
        { q: 'What is the difference between GIP and GLP-1?', a: 'They are the two main incretin hormones, each acting through its own receptor. GLP-1 is the more widely studied, while GIP is the other primary incretin. Both connect to insulin signaling and glucose handling.' },
        { q: 'Why do research peptides target incretins?', a: 'Many metabolic research peptides are designed to act on incretin receptors. Single, dual, and triple agonists all build on this system, so understanding incretins makes those compounds easier to follow.' },
      ],
      references: [],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-is-tirzepatide', 'what-is-retatrutide'],
    },
    {
      slug: 'what-are-copper-peptides',
      title: 'What Are Copper Peptides?',
      metaTitle: 'Copper Peptides Compared: GHK-Cu vs AHK-Cu',
      metaDescription: 'GHK-Cu and AHK-Cu compared: how each copper tripeptide is built, how they differ in sequence, and how copper binding is described.',
      focusKeyword: 'what are copper peptides',
      category: 'Peptide Research',
      tags: ['copper peptides', 'GHK-Cu', 'AHK-Cu', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'The small family of peptides defined by a bound copper ion, and why that metal is the point.',
      imageAlt: 'Copper peptides research vials with certificates of analysis',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Copper peptides are a small, tidy category, and the name tells you most of what defines them. They are short peptides that hold onto a copper ion. That single feature, a peptide bound to a metal, is what sets them apart from the rest of the research peptides you will come across.</p>

        <h2>What makes a peptide a copper peptide?</h2>
        <p>A copper peptide is a peptide, usually very short, that binds a copper ion with high affinity. Copper is a trace element the body uses in many enzymes, and certain amino acid sequences happen to grab it and hold it in a stable arrangement. When researchers talk about a copper peptide, they are talking about that peptide-plus-copper unit, not the bare sequence. For the basics of what a peptide is to begin with, see <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a>.</p>

        <h2>The two you will see most</h2>
        <p>Two copper tripeptides come up again and again:</p>
        <ul>
          <li><b><a href="article/what-is-ghk-cu/">GHK-Cu</a>:</b> the copper complex of glycyl-histidyl-lysine, and the most studied of the group.</li>
          <li><b><a href="article/what-is-ahk-cu/">AHK-Cu</a>:</b> a close relative where the first amino acid is alanine instead of glycine.</li>
        </ul>
        <p>The fact that these two differ by a single amino acid is exactly why they get compared. Small changes in sequence can change how a peptide binds copper, and that is a useful thing to study.</p>

        <h2>Why the copper matters</h2>
        <p>Most of the research interest in these compounds comes from the metal, not the peptide alone. Copper binding is central to how these molecules behave in model systems, and laboratory work often looks at copper transport, connective tissue and collagen signaling, and skin or hair follicle cell activity. These are model-based observations, and copper peptides are supplied strictly as research compounds.</p>

        <h2>Handling and verification</h2>
        <p>Because a copper ion is part of the molecule, identity and purity are worth confirming rather than assuming. Copper peptides are checked by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, ship lyophilized, and come with a certificate of analysis. Any Codex Research vial can be confirmed by its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including copper peptides such as GHK-Cu and AHK-Cu, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What is a copper peptide?', a: 'A copper peptide is a short peptide that binds a copper ion with high affinity. The peptide-plus-copper unit is what defines the category, and it is studied strictly for laboratory research.' },
        { q: 'What are examples of copper peptides?', a: 'The two most common are GHK-Cu (copper complex of glycyl-histidyl-lysine) and AHK-Cu (with alanine in place of glycine). They differ by a single amino acid, which is why they are often compared.' },
        { q: 'Why is copper important in these peptides?', a: 'Most of the research interest comes from the metal binding rather than the peptide alone. Laboratory work looks at copper transport and pathways related to connective tissue and skin cell activity in model systems.' },
      ],
      references: [],
      cta: 'Explore <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-is-ghk-cu', 'what-is-ahk-cu'],
    },
    {
      slug: 'what-is-ahk-cu',
      title: 'What Is AHK-Cu?',
      metaTitle: 'AHK-Cu: A Copper Tripeptide and How It Differs',
      metaDescription: 'AHK-Cu, the alanyl-histidyl-lysine copper tripeptide: sequence, how it differs from GHK-Cu, and how purity is verified by HPLC.',
      focusKeyword: 'what is AHK-Cu',
      category: 'Peptide Research',
      tags: ['AHK-Cu', 'copper peptide', 'tripeptide', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A copper-binding tripeptide that sits close to GHK-Cu, and the research that separates the two.',
      imageAlt: 'AHK-Cu copper tripeptide research vial with certificate of analysis',
      image: 'assets/products/ahk-cu.jpg',
      body: `
        <p class="lead">AHK-Cu is easy to confuse with its better-known cousin, and the confusion is understandable. It is another short copper-binding peptide, only three amino acids long, and it shows up in the same corners of skin and tissue research as <a href="article/what-is-ghk-cu/">GHK-Cu</a>. The interesting part is where the two differ.</p>

        <h2>What is AHK-Cu?</h2>
        <p>AHK-Cu is the copper complex of the tripeptide alanyl-histidyl-lysine, which is where the letters A, H, and K come from. The "Cu" is copper. Its CAS number is 682809-81-0. Like other copper peptides, the sequence binds a copper ion, and much of the research attention sits on that metal-binding behavior rather than on the peptide by itself. If the idea of a three-amino-acid peptide is new, our note on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a> puts it in context.</p>

        <h2>How is it different from GHK-Cu?</h2>
        <p>GHK-Cu and AHK-Cu share the same basic idea, a tripeptide carrying copper, but the first amino acid is different: glycine in GHK, alanine in AHK. That single change matters to researchers because it can alter how the peptide binds copper and how it behaves in a model system. Comparing closely related sequences like these is a common way to study what a specific residue contributes.</p>

        <h2>How is AHK-Cu studied?</h2>
        <p>Laboratory work on AHK-Cu tends to focus on:</p>
        <ul>
          <li><b>Dermal cell activity:</b> models looking at skin cell proliferation.</li>
          <li><b>Collagen and connective tissue:</b> research on tissue signaling pathways.</li>
          <li><b>Hair follicle biology:</b> studies of follicle-related cell behavior in culture.</li>
        </ul>
        <p>These are laboratory observations, not conclusions about people or animals. AHK-Cu is supplied strictly as a research compound.</p>

        <h2>Handling and verification</h2>
        <p>Because AHK-Cu carries a copper ion, confirming its identity and purity is worthwhile. It is checked by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, ships lyophilized, and comes with its certificate of analysis. Any Codex Research vial can be confirmed by its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including AHK-Cu, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What does AHK-Cu stand for?', a: 'AHK are the single-letter codes for the amino acids in the tripeptide alanyl-histidyl-lysine, and Cu is the chemical symbol for copper. AHK-Cu is the copper complex of that tripeptide, used strictly for laboratory research.' },
        { q: 'How is AHK-Cu different from GHK-Cu?', a: 'Both are copper-binding tripeptides, but the first amino acid differs: glycine in GHK-Cu and alanine in AHK-Cu. That change can affect copper binding and behavior in model systems, which is why the two are studied and compared.' },
        { q: 'How is AHK-Cu verified for research?', a: 'Each batch is tested by HPLC for purity and mass spectrometry for identity and ships with a certificate of analysis. Codex Research vials can also be checked by batch number at codexresearchlab.com/verify/.' },
      ],
      references: [],
      cta: 'Explore <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-is-ghk-cu', 'amino-acids-peptides-proteins-difference', 'what-are-copper-peptides'],
    },
    {
      slug: 'bacteriostatic-water-for-peptide-reconstitution',
      title: 'Bacteriostatic Water for Peptide Reconstitution',
      metaTitle: 'Bacteriostatic Water: Benzyl Alcohol, pH and Solubility',
      metaDescription: 'Bacteriostatic water for peptide reconstitution: benzyl alcohol content, pH, choosing a solvent, and how long a solution stays usable.',
      focusKeyword: 'bacteriostatic water for peptides',
      category: 'Peptide Research',
      tags: ['bacteriostatic water', 'reconstitution', 'diluent', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'What sets bacteriostatic water apart from plain sterile water, and why labs reach for it first.',
      imageAlt: 'Bacteriostatic water vial used to reconstitute research peptides',
      image: 'assets/products/bac-water.jpg',
      body: `
        <p class="lead">When a lyophilized peptide needs a liquid to dissolve into, the default answer in most research settings is bacteriostatic water. Most laboratories reach for it first, for a specific reason. The short version is that it lets a vial be used more than once.</p>

        <h2>What is bacteriostatic water?</h2>
        <p>Bacteriostatic water is sterile water that contains a small amount of benzyl alcohol, usually around 0.9 percent, added as a preservative. The word "bacteriostatic" describes what that preservative does: it slows or stops the growth of bacteria rather than killing everything outright. That single ingredient is the whole difference between it and plain water for injection.</p>

        <h2>The specification, in numbers</h2>
        <p>The USP product label is specific about what the fluid contains:</p>
        <table>
          <tr><th>Attribute</th><th>Value</th></tr>
          <tr><td>Preservative</td><td>Benzyl alcohol, 0.9% (9 mg/mL)</td></tr>
          <tr><td>pH</td><td>5.7 (range 4.5 to 7.0)</td></tr>
          <tr><td>Presentation</td><td>Sterile, nonpyrogenic, multiple-dose container</td></tr>
          <tr><td>Other additives</td><td>None</td></tr>
        </table>
        <p>The mildly acidic pH is a detail that occasionally matters, since it sits inside the range where deamidation, the most common degradation route for peptides in water, proceeds most slowly.</p>


        <h2>How it differs from sterile water</h2>
        <p>Sterile water for injection is exactly that, water with nothing added, and it is intended for single use. Once opened it has no preservative to hold back contamination. Bacteriostatic water, because of the benzyl alcohol, can tolerate being entered more than once over a period of time, which is why it suits a multi-dose research vial that gets drawn from repeatedly. For peptides that are studied over days or weeks, that reusability is the practical advantage.</p>

        <h2>Why labs use it for peptides</h2>
        <p>Bacteriostatic water suits laboratory work well: it dissolves most peptides cleanly, the preservative supports multiple draws from one vial, and it is widely available in standard volumes. It is also worth knowing that benzyl alcohol counts as a kind of <a href="article/excipients-in-peptides/">excipient</a>, an inactive ingredient that supports the formulation without being the active compound.</p>

        <h2>What reconstitution means as a laboratory operation</h2>
        <p>Reconstitution is dissolving a known mass of lyophilized solid in a measured volume of solvent so that the result is a solution of known concentration. The arithmetic is mass divided by volume, and nothing more:</p>
        <table>
          <tr><th>Solid in the vial</th><th>Solvent added</th><th>Resulting concentration</th></tr>
          <tr><td>5 mg</td><td>1.00 mL</td><td>5 mg/mL</td></tr>
          <tr><td>5 mg</td><td>2.00 mL</td><td>2.5 mg/mL</td></tr>
          <tr><td>10 mg</td><td>2.00 mL</td><td>5 mg/mL</td></tr>
          <tr><td>10 mg</td><td>5.00 mL</td><td>2 mg/mL</td></tr>
        </table>
        <p>Two things make that arithmetic less trivial than it looks. The first is that a freeze-dried cake occupies volume of its own, so the final volume of the solution is not exactly the volume of solvent added; for work where the concentration has to be accurate rather than approximate, the solution is made up to a mark rather than by adding a nominal volume. The second is that the mass printed on the label is the mass of solid, not the mass of peptide. Material purified by reversed-phase chromatography is isolated as a salt and carries a counterion plus residual water, so the net peptide content of the powder is typically well below 100 percent and is reported per batch on the <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a>. A concentration calculated from the label mass alone is a nominal figure.</p>

        <h2>Choosing a solvent</h2>
        <p>Bacteriostatic water is the default because most short peptides carrying a reasonable number of charged residues dissolve in it readily, but it is a default, not a rule. Peptide manufacturers give the same general guidance: basic peptides are usually taken up in a small amount of an acidic solvent such as dilute acetic acid and then diluted; acidic peptides in a small amount of a basic solvent such as 0.1 percent aqueous ammonia and then diluted; markedly hydrophobic sequences may need an organic solvent such as DMSO, DMF or acetonitrile before any aqueous dilution. Test on a small portion first rather than committing the whole vial, and check the solvent suggested on the lot's own analytical data sheet. If material is slow to dissolve, a few minutes of sonication in a water bath can help, though excessive warming should be avoided.</p>

        <h2>The preservative is not inert</h2>
        <p>Benzyl alcohol is the most widely used antimicrobial preservative in multi-dose protein formulations, and its effect on the dissolved molecule has been studied directly. Preservatives of this class promote partial unfolding, and partial unfolding is what triggers aggregation; in a published comparison the tendency to induce aggregation ran m-cresol &gt; phenol &gt; benzyl alcohol &gt; phenoxyethanol &gt; chlorobutanol. Benzyl alcohol is therefore in the middle of that range rather than at the harmless end. For work where aggregation or an accurate physical characterisation is the point, plain sterile water or a defined buffer may be the better diluent, and whichever is chosen should be recorded alongside the concentration, because the diluent is part of the experimental condition.</p>

        <h2>How long a reconstituted solution lasts</h2>
        <p>Much less time than the dry solid, and for chemical reasons rather than microbial ones. The degradation routes that dominate in water are deamidation of asparagine and glutamine side chains, which is fastest at neutral and alkaline pH and slowest around pH 3 to 6; hydrolysis of the backbone, which is acid-catalysed and particularly noticeable at Asp-Gly and Asp-Pro junctions; and oxidation of methionine, histidine, lysine, tryptophan and tyrosine. All of them accelerate with temperature. A preservative does nothing about any of this, which is why the shelf life of a peptide in solution is short compared with the same peptide as a lyophilizate.</p>
        <p>The practical consequences are the ones manufacturers publish: divide the solution into aliquots rather than returning to one vial repeatedly, keep those aliquots frozen below about minus fifteen degrees Celsius, avoid repeated freeze-thaw cycles, and treat long-term storage in solution as something to design around rather than rely on, especially for sequences containing asparagine, glutamine, cysteine, methionine or tryptophan.</p>

        <h2>Handling the dry vial before anything is added</h2>
        <p>Lyophilized peptides are hygroscopic, so the order of steps matters. A vial taken from cold storage should reach ambient temperature in a desiccator before it is opened, so moisture does not condense onto the cake, and should then be weighed out quickly and resealed tightly. Anything introduced into the vial after that, solvent included, becomes part of the system, which is the whole argument for a preserved diluent when a container will be entered more than once.</p>


        <h2>Handling and storage</h2>
        <p>Like the peptides it dissolves, a reconstituted solution is generally kept cool and protected from light, with the exact conditions on the product label. Bacteriostatic water itself is stored per its own label. If you are pairing it with a peptide vial, you can confirm that vial is genuine by its <a href="verify/">batch number</a>.</p>

        <h2>What this article does not cover</h2>
        <p>This describes a laboratory operation on a research material: dissolving a defined solid in a defined volume to obtain a defined concentration. It is not preparation guidance for administration to humans or animals, and it contains no dosing information of any kind.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease. This article describes laboratory use only.</p>
      `,
      faq: [
        { q: 'What is bacteriostatic water?', a: 'Bacteriostatic water is sterile water with a small amount of benzyl alcohol (around 0.9 percent) added as a preservative. The preservative slows bacterial growth, which is what makes it suitable for a vial that will be entered more than once.' },
        { q: 'What is the difference between bacteriostatic and sterile water?', a: 'Sterile water for injection has nothing added and is meant for single use. Bacteriostatic water contains benzyl alcohol as a preservative, so it can tolerate being drawn from multiple times, which suits a multi-dose research vial.' },
        { q: 'Why is bacteriostatic water used to reconstitute peptides?', a: 'It dissolves most peptides cleanly and its preservative supports multiple draws from a single vial over the days or weeks a peptide might be studied. That reusability is the main practical reason labs choose it.' },
        { q: 'How is a lyophilized peptide reconstituted in the laboratory?', a: 'A known mass of the freeze-dried solid is dissolved in a measured volume of solvent to give a solution of known concentration: 10 mg in 2.00 mL is 5 mg/mL. Two corrections matter for accurate work: the cake occupies volume of its own, so precise solutions are made up to a mark rather than by adding a nominal volume; and the labelled mass is solid, not net peptide, since the material carries a counterion and residual water. This describes a laboratory operation on a research material only.' },
        { q: 'How long is a reconstituted peptide solution stable?', a: 'Much less time than the dry solid. In water, deamidation of asparagine and glutamine, hydrolysis of the backbone and oxidation of methionine, histidine, lysine, tryptophan and tyrosine all proceed, and all accelerate with temperature. A preservative does not slow any of them. Manufacturers advise dividing solutions into aliquots, keeping them frozen below about minus fifteen degrees Celsius, and avoiding repeated freeze-thaw cycles.' },
        { q: 'Can plain sterile water be used instead of bacteriostatic water?', a: 'Yes, and sometimes it is preferable. Benzyl alcohol is not inert: preservatives of its class promote partial unfolding and aggregation, with benzyl alcohol falling mid-range in a published comparison. For work where aggregation or physical characterisation is the point, plain sterile water or a defined buffer may be the better diluent. Whichever is used should be recorded, because the diluent is part of the experimental condition.' },
      ],
      references: [
        { text: 'Bacteriostatic Water for Injection, USP: product labeling. DailyMed, U.S. National Library of Medicine.', url: 'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=69485218-9343-952d-e053-2a91aa0ad4e8' },
        { text: 'Peptide solubility. Bachem Knowledge Center, technical note.', url: 'https://www.bachem.com/knowledge-center/technical-notes/peptide-solubility/' },
        { text: 'Handling and storage guidelines for peptides. Bachem Knowledge Center.', url: 'https://www.bachem.com/knowledge-center/handling-and-storage-guidelines-for-peptides/' },
        { text: 'Hutchings RL, Singh SM, Cabello-Villegas J, Mallela KMG. Effect of antimicrobial preservatives on partial protein unfolding and aggregation. Journal of Pharmaceutical Sciences, 2013;102(2):365-376.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3990441/' },
        { text: 'Shi M, McHugh KJ. Strategies for overcoming protein and peptide instability in biodegradable drug delivery systems. Advanced Drug Delivery Reviews, 2023;199:114904.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10526705/' },
      ],
      cta: 'Browse <a href="catalog/">research peptides and supplies</a> at Codex Research, or <a href="verify/">check a batch number</a>.',
      related: ['excipients-in-peptides', 'how-to-store-research-peptides'],
    },
    {
      slug: 'what-is-nad-plus',
      title: 'What Is NAD+?',
      metaTitle: 'NAD+: The Coenzyme, and Why It Is Not a Peptide',
      metaDescription: 'What NAD+ is as a coenzyme, why it is not a peptide despite appearing in peptide catalogues, and how research grade material is verified.',
      focusKeyword: 'what is NAD+',
      category: 'Peptide Research',
      tags: ['NAD+', 'coenzyme', 'metabolism', 'research compounds'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'An essential coenzyme found in every living cell, and the metabolism and aging research it appears in.',
      imageAlt: 'NAD+ research compound vial with certificate of analysis',
      image: 'assets/products/nad-plus.jpg',
      body: `
        <p class="lead">NAD+ is the odd one out in this series. It is not a peptide at all, it is a coenzyme, and it sits at the center of how cells manage energy. It shows up in research catalogs alongside peptides because it is a defined molecule that laboratories study in the same careful, batch-verified way.</p>

        <h2>What is NAD+?</h2>
        <p>NAD+ stands for nicotinamide adenine dinucleotide. It is a coenzyme present in every living cell, built from two nucleotides joined together. Its CAS number is 53-84-9 and its molecular formula is C21H27N7O14P2. The "plus" refers to its oxidized form, which pairs with a reduced form called NADH. That pairing is the whole point of the molecule, since it lets NAD+ shuttle electrons during metabolism.</p>

        <h2>What does NAD+ do?</h2>
        <p>In basic biochemistry, NAD+ acts as an electron carrier. Cells constantly cycle it between its oxidized form (NAD+) and its reduced form (NADH) to move energy around during processes like glycolysis and cellular respiration. Beyond that classic role, NAD+ is also a substrate for a group of enzymes called sirtuins, which is a big part of why it draws interest in aging research.</p>

        <h2>How is NAD+ studied?</h2>
        <p>Laboratory research involving NAD+ commonly looks at:</p>
        <ul>
          <li><b>Cellular metabolism:</b> its role as an electron carrier in energy pathways.</li>
          <li><b>Mitochondrial function:</b> how NAD+ availability relates to the machinery that produces cellular energy.</li>
          <li><b>Sirtuin signaling:</b> NAD+ as a substrate for enzymes tied to aging and stress response in model systems.</li>
        </ul>
        <p>These are laboratory and preclinical contexts. NAD+ is supplied strictly as a research compound, and this article does not describe use in people or animals. If you are comparing it with the small peptide <a href="article/what-is-mots-c/">MOTS-c</a>, both come up in mitochondrial research but they are very different molecules.</p>

        <h2>Handling and verification</h2>
        <p>NAD+ is sensitive to moisture and light, so how it is stored matters. It is verified by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a>, ships lyophilized, and comes with its certificate of analysis. Any Codex Research vial can be confirmed by its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including NAD+, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'Is NAD+ a peptide?', a: 'No. NAD+ (nicotinamide adenine dinucleotide) is a coenzyme built from two nucleotides, not a peptide. It appears in research catalogs alongside peptides because it is a defined, batch-verified compound studied in metabolism research.' },
        { q: 'What is the difference between NAD+ and NADH?', a: 'They are two forms of the same coenzyme. NAD+ is the oxidized form and NADH is the reduced form. Cells cycle between them to carry electrons during energy metabolism.' },
        { q: 'Why is NAD+ studied in aging research?', a: 'Beyond its role as an electron carrier, NAD+ is a substrate for enzymes called sirtuins that are associated with stress response and aging in laboratory models, which is a major reason it appears in that research.' },
      ],
      references: [
        { text: 'NAD+ (NAD) compound summary. PubChem, National Library of Medicine (CID 5892).', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/5892' },
      ],
      cta: 'Browse <a href="catalog/">research compounds</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-is-mots-c', 'lyophilization-freeze-drying'],
    },
    {
      slug: 'what-is-pt-141',
      title: 'What Is PT-141 (Bremelanotide)?',
      metaTitle: 'PT-141 (Bremelanotide): A Melanocortin Research Peptide',
      metaDescription: 'PT-141, also called bremelanotide: a melanocortin receptor peptide, its sequence, and how batches are verified by HPLC and mass spectrometry.',
      focusKeyword: 'what is PT-141',
      category: 'Peptide Research',
      tags: ['PT-141', 'bremelanotide', 'melanocortin', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A synthetic melanocortin receptor agonist, and the receptor research that surrounds it.',
      imageAlt: 'PT-141 bremelanotide research peptide vial with certificate of analysis',
      image: 'assets/products/pt-141.jpg',
      body: `
        <p class="lead">PT-141 and bremelanotide are the same molecule under two names, which is the first thing that trips people up. The second is that it is cyclic. That single structural feature changes how it is made, how it behaves on a column, and what it takes to prove that a vial contains what the label says.</p>

        <h2>Identity on paper</h2>
        <ul>
          <li><b>CAS number:</b> 189691-06-3</li>
          <li><b>Molecular formula:</b> C<sub>50</sub>H<sub>68</sub>N<sub>14</sub>O<sub>10</sub></li>
          <li><b>Molecular weight:</b> approximately 1,025 g/mol</li>
          <li><b>PubChem CID:</b> 9941379</li>
        </ul>
        <p>PT-141 is the research shorthand and bremelanotide the nonproprietary name. Neither is an identifier in the way the formula and the CAS number are, which is the argument for reading a <a href="article/how-to-read-a-certificate-of-analysis/">certificate</a> rather than a label.</p>

        <h2>Where the structure comes from</h2>
        <p>PT-141 belongs to a lineage of melanocortin peptides that began with modified analogues of the natural hormone. A key step in that lineage was the design of cyclic analogues in which a bridge between two side chains locks the backbone into a constrained shape, a strategy introduced in the late 1980s and shown to produce markedly more potent compounds than their flexible counterparts. <a class="cite" href="https://doi.org/10.1021/ja00191a044" target="_blank" rel="noopener nofollow">(Reference: Al-Obeidi et al., 1989)</a></p>


        <h2>The bridge itself</h2>
        <p>The usual way to constrain a peptide of this kind is a side-chain to side-chain lactam: an amide bond formed between the amine on one side chain and the carboxyl on another, several positions apart in the sequence. It is the same kind of bond that links the backbone, built in a different place.</p>
        <p>A disulfide bridge would also close a ring, but it can be reduced and reopened. A lactam cannot, so the constraint holds under conditions that would undo a disulfide. That stability is why the strategy became standard for this family.</p>

        <h2>What cyclisation does</h2>
        <p>Closing a peptide into a ring has three consequences that matter in the laboratory, and none of them are about potency.</p>
        <ul>
          <li><b>It restricts conformation.</b> A linear chain samples many shapes. A constrained ring holds a narrower set, which is the point of making it.</li>
          <li><b>It removes chain ends.</b> Enzymes that chew inward from a free terminus have nothing to grip, so cyclic peptides are generally more resistant to that route of degradation.</li>
          <li><b>It changes chromatographic behaviour.</b> The folded, constrained form presents a different surface to a reversed-phase column than the open chain would, so retention time is not predictable from sequence alone.</li>
        </ul>
        <p>Our note on <a href="article/cyclic-vs-linear-peptides/">cyclic and linear peptides</a> covers the general case.</p>

        <h2>The melanocortin receptors</h2>
        <p>The melanocortin family comprises several receptor subtypes distributed across different tissues and associated with a range of signalling processes, and the physiology has been reviewed in detail. <a class="cite" href="https://doi.org/10.1210/er.2006-0034" target="_blank" rel="noopener nofollow">(Reference: Cone, 2006)</a> Because the family has several members with overlapping ligand preferences, the recurring research question for any melanocortin agonist is selectivity: which subtypes it engages and how strongly, relative to the others. Our note on <a href="article/what-are-melanocortin-receptors/">melanocortin receptors</a> introduces the family, and the general distinction between <a href="article/agonist-vs-antagonist/">agonists and antagonists</a> is covered separately.</p>
        <p>This is laboratory and model-based work. PT-141 is supplied strictly as a research compound, and nothing here describes use in people or animals.</p>

        <h2>The verification problem cyclic peptides create</h2>
        <p>This is the part that is rarely mentioned and is worth knowing. Forming a ring is a condensation: a bond is made and a molecule of water is released. The cyclic product therefore weighs about eighteen daltons less than the linear precursor it came from.</p>
        <p>Eighteen daltons is an easy difference to measure, so a simple mass check will tell you whether cyclisation happened. What a single mass measurement will not tell you is <em>where</em> the ring closed, if more than one pair of side chains could have reacted, because every one of those products has the same formula and the same mass. Distinguishing them requires fragmentation, which is what tandem <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> provides. A certificate that reports a matching mass has answered a real question, not every question.</p>

        <h2>Making it</h2>
        <p>The chain is assembled by <a href="article/peptide-synthesis/">solid-phase synthesis</a> like any other sequence, and the cyclisation is an additional step with its own yield. Run at high concentration, chains tend to react with each other rather than with themselves, producing dimers and larger species instead of the intended ring. Those by-products are part of what a purity method has to separate, which is one reason a cyclic peptide is more than a linear peptide with one more step.</p>


        <h2>When the ring is closed</h2>
        <p>Cyclisation can be done while the chain is still attached to the resin or after it has been cleaved into solution. On-resin has a practical advantage: the beads keep the chains physically separated, so a chain is more likely to find its own other end than a neighbour's. In solution the same reaction has to be run dilute to achieve the same effect, which means large volumes for small amounts of product.</p>
        <p>Either way the step has a yield, and whatever did not cyclise correctly is still in the mixture when purification begins.</p>

        <h2>Handling and verification</h2>
        <p>Material ships <a href="article/lyophilization-freeze-drying/">lyophilized</a>, which is the stable form, and the usual rule applies: keep it dry, keep it cool, and let a cold vial warm before opening so condensation does not form inside. Purity is established by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and identity by mass spectrometry, and any Codex Research vial can be checked against its paperwork by <a href="verify/">batch number</a>.</p>

        <p>One detail specific to this compound is worth carrying into the paperwork. Because part of the analytical question is whether the ring closed and closed in the right place, a certificate for a cyclic peptide that reports only a purity percentage is answering less than it appears to. The identity line is doing more work here than it does for a linear sequence.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including PT-141, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "Are PT-141 and bremelanotide the same thing?",
          "a": "Yes. PT-141 is the research shorthand and bremelanotide is the nonproprietary name for the same synthetic peptide, CAS 189691-06-3, formula C50H68N14O10. It is supplied strictly for laboratory research."
        },
        {
          "q": "What does it mean that PT-141 is a cyclic peptide?",
          "a": "A bridge between two side chains closes the backbone into a ring. That restricts the shapes the molecule can adopt, removes the free chain ends that some enzymes degrade from, and changes how it is retained on a reversed-phase column."
        },
        {
          "q": "What receptors does PT-141 act on?",
          "a": "It acts as an agonist at melanocortin receptors, a family of several subtypes distributed across different tissues and associated with a range of signalling processes. Because the subtypes have overlapping ligand preferences, selectivity is the recurring research question."
        },
        {
          "q": "Why does a cyclic peptide weigh less than its linear precursor?",
          "a": "Because forming the ring is a condensation. A bond is made and a molecule of water is released, so the cyclic product is about eighteen daltons lighter than the open chain it was made from."
        },
        {
          "q": "Can mass spectrometry confirm where a peptide cyclised?",
          "a": "Not from a single mass measurement. If more than one pair of side chains could have reacted, every possible product has the same formula and the same mass. Telling them apart requires fragmentation, which tandem mass spectrometry provides."
        },
        {
          "q": "What by-products does cyclisation produce?",
          "a": "Mainly dimers and larger species, formed when chains react with each other instead of closing on themselves. They are part of what a purity method has to separate, which is why cyclisation is more than one extra step."
        }
      ],
      references: [
        {
          "text": "Bremelanotide (PT-141) compound summary. PubChem, National Library of Medicine (CID 9941379).",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/9941379"
        },
        {
          "text": "Al-Obeidi, F., Hadley, M.E., Pettitt, B.M., &amp; Hruby, V.J. (1989). Design of a new class of superpotent cyclic alpha-melanotropins. Journal of the American Chemical Society, 111(9), 3413-3416.",
          "url": "https://doi.org/10.1021/ja00191a044"
        },
        {
          "text": "Cone, R.D. (2006). Studies on the physiological functions of the melanocortin system. Endocrine Reviews, 27(7), 736-749.",
          "url": "https://doi.org/10.1210/er.2006-0034"
        },
        {
          "text": "Chan, W.C., &amp; White, P.D. (1999). Fmoc Solid Phase Peptide Synthesis: A Practical Approach. Oxford University Press.",
          "url": "https://doi.org/10.1093/oso/9780199637256.001.0001"
        }
      ],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['peptide-synthesis', 'what-is-bpc-157', 'what-are-melanocortin-receptors'],
    },
    {
      slug: 'what-is-ipamorelin',
      title: 'What Is Ipamorelin?',
      metaTitle: 'Ipamorelin: A Selective Ghrelin Receptor Peptide',
      metaDescription: 'Ipamorelin, a selective ghrelin receptor peptide: its sequence, what selectivity means here, and how research batches are verified.',
      focusKeyword: 'what is ipamorelin',
      category: 'Peptide Research',
      tags: ['ipamorelin', 'ghrelin receptor', 'growth hormone secretagogue', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A short synthetic peptide known for its selectivity at the ghrelin receptor, and the research around it.',
      imageAlt: 'Ipamorelin research peptide vial with certificate of analysis',
      image: 'assets/products/ipamorelin.jpg',
      body: `
        <p class="lead">Ipamorelin is a pentapeptide, which makes it sound simple. It is not. Three of its five residues are things no organism builds, two of them are in the mirror-image configuration, and the chain ends in an amide rather than an acid. Every one of those choices is deliberate, and together they explain both why the molecule behaves the way it does and why confirming a batch takes more than a mass measurement.</p>

        <h2>Identity on paper</h2>
        <ul>
          <li><b>CAS number:</b> 170851-70-4</li>
          <li><b>Molecular formula:</b> C<sub>38</sub>H<sub>49</sub>N<sub>9</sub>O<sub>5</sub></li>
          <li><b>Molecular weight:</b> approximately 712 g/mol</li>
          <li><b>PubChem CID:</b> 9831659</li>
        </ul>

        <h2>Five residues, three of them unusual</h2>
        <p>The sequence is Aib-His-D-2-Nal-D-Phe-Lys-NH<sub>2</sub>. Reading that from left to right: an α-aminoisobutyric acid residue, a histidine, a D-configured 2-naphthylalanine, a D-phenylalanine, and a lysine whose C-terminus is amidated. <a class="cite" href="https://doi.org/10.1530/eje.0.1390552" target="_blank" rel="noopener nofollow">(Reference: Raun et al., 1998)</a></p>
        <p>Only histidine and lysine are among the twenty standard amino acids. Aib carries two methyl groups on the α-carbon instead of a side chain and a hydrogen, which stiffens the backbone. 2-naphthylalanine is a bulkier aromatic than anything in the natural set. And the two D residues are mirror images of the forms biology uses, which is a common way to make a short peptide resistant to enzymes that only recognise the L configuration. Our note on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides and proteins</a> covers why the standard twenty are not a limit in synthetic chemistry.</p>

        <h2>The amide at the end</h2>
        <p>The C-terminal amide is not a detail. Whether a chain finishes as a free carboxylic acid or as an amide is decided by the linker used to attach the first residue to the resin during <a href="article/peptide-synthesis/">solid-phase synthesis</a>, and the two forms differ in mass by about one dalton. They are different compounds, and a specification that names one is making a claim an identity measurement can check.</p>


        <h2>Length is only one variable</h2>
        <p>Aib is the case in point. Because it carries two methyl groups where most residues carry one hydrogen, the reactive nitrogen is crowded, and hindered residues of this type couple more slowly and less completely than ordinary ones. A step that does not go to completion leaves a fraction of chains missing that residue, and in a five-residue sequence a single deletion is proportionally a large change, not a subtle one.</p>
        <p>The unusual residues are also more expensive than the standard set, and each one has to be supplied already protected in a form compatible with the rest of the synthesis. A short sequence built from four ordinary amino acids and one difficult one is not four-fifths of an ordinary problem.</p>

        <h2>The receptor was found before its natural ligand</h2>
        <p>The pharmacology here has an unusual history. Synthetic compounds that released growth hormone were known before anyone knew what the body's own signal was. The receptor they acted on was identified in 1996 and named for the compounds that found it, the growth hormone secretagogue receptor. <a class="cite" href="https://doi.org/10.1126/science.273.5277.974" target="_blank" rel="noopener nofollow">(Reference: Howard et al., 1996)</a> It sat as an orphan until 1999, when its endogenous ligand, ghrelin, was identified. <a class="cite" href="https://doi.org/10.1038/45230" target="_blank" rel="noopener nofollow">(Reference: Kojima et al., 1999)</a></p>
        <p>That is why the same receptor goes by two names in the literature, and why ipamorelin is described both as a growth hormone secretagogue and as a ghrelin receptor agonist. Both are correct. For the broader class, see our note on <a href="article/what-is-a-growth-hormone-secretagogue/">growth hormone secretagogues</a>.</p>

        <h2>The meaning of selective</h2>
        <p>Ipamorelin was characterised as the first selective compound of its class, meaning that in the models used it acted on its target pathway with limited activity at other hormone axes that earlier secretagogues also touched. <a class="cite" href="https://doi.org/10.1530/eje.0.1390552" target="_blank" rel="noopener nofollow">(Reference: Raun et al., 1998)</a> For a research tool that property is the whole value: the cleaner the profile, the more confidently an observation can be attributed to one receptor rather than several. The general distinction between <a href="article/agonist-vs-antagonist/">agonists and antagonists</a> is covered separately.</p>
        <p>These are preclinical, model-based observations. Ipamorelin is supplied strictly as a research compound, and this article does not describe use in people or animals.</p>

        <h2>Why a mass measurement is not enough here</h2>
        <p>This is where the unusual residues come back. A D-amino acid and its L counterpart have the same formula and the same mass. Nothing in a standard <a href="article/mass-spectrometry-peptide-research/">mass spectrum</a> separates them, so a batch in which a D residue was accidentally supplied as the L form would return the expected mass and the expected formula while being a different molecule.</p>
        <p>What does distinguish them is behaviour on a column. Diastereomeric impurities, chains that differ only in the configuration of one residue, generally elute at a slightly different time, so they appear in the <a href="article/high-performance-liquid-chromatography-hplc/">chromatographic run</a> as a peak close to the main one. It is a good illustration of why purity and identity are two separate questions and why a <a href="article/how-to-read-a-certificate-of-analysis/">certificate</a> that answers only one is incomplete.</p>

        <h2>Handling and verification</h2>
        <p>Ipamorelin ships <a href="article/lyophilization-freeze-drying/">lyophilized</a>, which is the stable form. Keep it dry and cool, and let a cold vial reach room temperature before opening so condensation does not form inside; our guide to <a href="article/how-to-store-research-peptides/">storing research peptides</a> covers the general case. Each batch can be checked against its paperwork by <a href="verify/">batch number</a> before the vial is opened.</p>

        <p>One point specific to small peptides: at the masses typically supplied, the freeze-dried material in the vial can be a thin film or a few flecks on the glass rather than a visible powder. A vial that looks empty has usually not lost anything; that is <a href="article/lyophilization-freeze-drying/">how the drying works</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including ipamorelin, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What is ipamorelin, chemically?",
          "a": "A synthetic pentapeptide with the sequence Aib-His-D-2-Nal-D-Phe-Lys-NH2, formula C38H49N9O5 and a molecular weight of about 712 g/mol. Its CAS number is 170851-70-4."
        },
        {
          "q": "Why does ipamorelin contain amino acids that are not among the standard twenty?",
          "a": "Aib stiffens the backbone by carrying two methyl groups on the alpha carbon, and 2-naphthylalanine provides a bulkier aromatic side chain than anything in the natural set. Synthetic chemistry is not restricted to the residues biology uses."
        },
        {
          "q": "What do the D residues do?",
          "a": "They are mirror images of the forms biology uses. Enzymes that recognise only the L configuration do not act on them, which is a common way to make a short peptide more resistant to degradation."
        },
        {
          "q": "Is the ghrelin receptor the same as the growth hormone secretagogue receptor?",
          "a": "Yes. The receptor was identified in 1996 through the synthetic compounds that acted on it and named after them. Its natural ligand, ghrelin, was identified in 1999, which is why the same receptor carries both names in the literature."
        },
        {
          "q": "What does selective mean for ipamorelin?",
          "a": "It was characterised as acting on its target pathway with limited activity at other hormone axes that earlier secretagogues also affected. For a research tool that matters because it narrows the number of receptors an observation could be attributed to."
        },
        {
          "q": "Can mass spectrometry confirm the D residues in ipamorelin?",
          "a": "No. A D residue and its L counterpart have identical formulas and identical masses. A chain built with the wrong configuration would return the expected mass. What distinguishes them is retention time, since such diastereomers generally separate on a chromatographic column."
        }
      ],
      references: [
        {
          "text": "Ipamorelin compound summary. PubChem, National Library of Medicine (CID 9831659).",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/9831659"
        },
        {
          "text": "Raun, K., et al. (1998). Ipamorelin, the first selective growth hormone secretagogue. European Journal of Endocrinology, 139(5), 552-561.",
          "url": "https://doi.org/10.1530/eje.0.1390552"
        },
        {
          "text": "Howard, A.D., et al. (1996). A receptor in pituitary and hypothalamus that functions in growth hormone release. Science, 273(5277), 974-977.",
          "url": "https://doi.org/10.1126/science.273.5277.974"
        },
        {
          "text": "Kojima, M., et al. (1999). Ghrelin is a growth-hormone-releasing acylated peptide from stomach. Nature, 402, 656-660.",
          "url": "https://doi.org/10.1038/45230"
        }
      ],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['peptide-synthesis', 'what-is-mots-c', 'what-is-a-growth-hormone-secretagogue'],
    },
    {
      slug: 'what-is-ghk-cu',
      title: 'What Is GHK-Cu?',
      metaTitle: 'GHK-Cu: The Copper Tripeptide, Structure and Purity',
      metaDescription: 'GHK-Cu, the glycyl-histidyl-lysine copper tripeptide: structure, copper binding, and how purity and identity are confirmed per batch.',
      focusKeyword: 'what is GHK-Cu',
      category: 'Peptide Research',
      tags: ['GHK-Cu', 'copper peptide', 'tripeptide', 'research peptides'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A tiny copper-binding tripeptide found naturally in the body, and the research built around it.',
      imageAlt: 'GHK-Cu copper peptide research vial with certificate of analysis',
      image: 'assets/products/ghk-cu.jpg',
      body: `
        <p class="lead">GHK-Cu is usually filed alongside the other peptides in a catalogue, and that is misleading. It is a coordination complex: a three-residue peptide holding a copper ion. The metal is part of the compound, and it changes what a certificate has to prove.</p>

        <h2>Two things with two sets of numbers</h2>
        <p>The peptide on its own is glycyl-L-histidyl-L-lysine, which is where the letters come from.</p>
        <ul>
          <li><b>GHK, free tripeptide:</b> C<sub>14</sub>H<sub>24</sub>N<sub>6</sub>O<sub>4</sub>, about 340 g/mol, CAS 49557-75-7, PubChem CID 73587.</li>
          <li><b>The copper complex:</b> CAS 89030-95-5, listed in PubChem as C<sub>14</sub>H<sub>23</sub>CuN<sub>6</sub>O<sub>4</sub><sup>+</sup> at about 403 g/mol (CID 71587328).</li>
        </ul>
        <p>Notice that the complex is written as a cation. That is not a typographical quirk, and it is the first thing worth understanding about this material.</p>

        <h2>Why the formula moves around</h2>
        <p>A peptide has one formula. A metal complex's written formula depends on how you account for it: whether the peptide is deprotonated at the nitrogen that binds the metal, what the overall charge is, which counterion balances it, and whether the entry describes one peptide per copper or two. Different databases and suppliers resolve those choices differently, which is why you will see several formulas and several masses attached to the same name.</p>
        <p>For an ordinary peptide, the name plus the sequence effectively defines the material. For this one it does not, so the certificate is carrying more weight than usual.</p>

        <h2>How the copper is held</h2>
        <p>Short peptides with a histidine near the amino terminus are a well known class of copper binders, because several donor atoms can be brought into position around the metal at once. <a class="cite" href="https://doi.org/10.1021/ar9501535" target="_blank" rel="noopener nofollow">(Reference: Harford &amp; Sarkar, 1997)</a> For this particular tripeptide, the geometry of the copper complex in solution was worked out in 1982, and the binding involves the terminal amine, the imidazole of the histidine and a backbone nitrogen, with the metal held in a roughly planar arrangement. <a class="cite" href="https://doi.org/10.1021/bi00262a004" target="_blank" rel="noopener nofollow">(Reference: Freedman et al., 1982)</a></p>
        <p>Binding a metal through a backbone nitrogen requires that nitrogen to lose its proton, which is why the complex carries a different charge from the free peptide and why pH matters to how the species is distributed. Our note on <a href="article/what-are-copper-peptides/">copper peptides</a> introduces the family, and <a href="article/what-is-ahk-cu/">AHK-Cu</a> is a related complex built on a different tripeptide.</p>

        <h2>The copper leaves a fingerprint</h2>
        <p>This compound is easier to verify than most, if the method is right. Copper has two stable isotopes, copper-63 and copper-65, present in nature at roughly 69 and 31 percent. Any species that contains a single copper atom therefore shows a pair of peaks two mass units apart in that ratio.</p>
        <p>That pattern is hard to fake and easy to read. A <a href="article/mass-spectrometry-peptide-research/">mass spectrum</a> of genuine material shows it; a spectrum of the free peptide with no metal does not. It is one of the few cases where the identity measurement carries a built-in internal check.</p>


        <h2>The one thing you can see</h2>
        <p>Almost nothing about a research peptide is visible to the eye. This compound is the exception, up to a point. Copper(II) complexes with nitrogen donors absorb in the visible range, so the material is coloured, while the free tripeptide is not. A vial of genuine complex does not look like a vial of white powder.</p>
        <p>That is a useful sanity check and nothing more. Colour tells you a copper species is present; it does not tell you the stoichiometry, the purity of the peptide, or whether the complex is the intended one. Treat it the way you would treat a seal on a box: worth noticing if it is wrong, not evidence of much if it is right.</p>

        <h2>Why purity alone tells you less here</h2>
        <p>A purity percentage from <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase chromatography</a> answers a question about the peptide: what share of the detected material was the target sequence. It does not, on its own, tell you how much copper is present or whether it is bound in the intended one-to-one ratio.</p>
        <p>There is also a methodological trap. Reversed-phase methods for peptides normally run at low pH with an acidic additive, and acidic conditions can shift a labile metal complex toward its dissociated form. A run that reports a clean peak may be reporting a clean peak of the free tripeptide. This is why, for a metal complex, the conditions of the analysis are part of the result in a way that goes beyond the usual, and why copper content is worth reporting as its own figure rather than inferred from peptide purity. Our guide to <a href="article/how-to-read-a-certificate-of-analysis/">reading a certificate</a> covers what a complete document carries.</p>

        <h2>Where the sequence comes from</h2>
        <p>Unlike engineered agonists, GHK is a sequence that occurs naturally in human plasma. The research-grade material is made synthetically by <a href="article/peptide-synthesis/">solid-phase synthesis</a> and then complexed with copper under controlled conditions, so the ratio and the purity are defined rather than inherited. Natural origin is part of the story; it is not a substitute for a batch record.</p>
        <p>This is laboratory work. GHK-Cu is supplied strictly as a research compound, and nothing here describes use in people or animals.</p>

        <h2>Handling and verification</h2>
        <p>Material ships <a href="article/lyophilization-freeze-drying/">lyophilized</a> and the usual rules apply: dry, cool, away from light, and let a cold vial warm before opening so condensation does not form inside. Any Codex Research vial can be checked against its paperwork by <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including GHK-Cu, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What is GHK-Cu?",
          "a": "A coordination complex of the tripeptide glycyl-L-histidyl-L-lysine with a copper ion. The free peptide is C14H24N6O4 at about 340 g/mol, CAS 49557-75-7; the copper complex carries CAS 89030-95-5 and is listed in PubChem as a cation of about 403 g/mol."
        },
        {
          "q": "Why do different sources give different formulas for GHK-Cu?",
          "a": "Because a metal complex can be written several ways depending on whether the binding nitrogen is counted as deprotonated, what the overall charge is, which counterion balances it, and whether the entry describes one peptide per copper or two. The name does not define the material as tightly as it would for an ordinary peptide."
        },
        {
          "q": "How does the peptide bind copper?",
          "a": "Through several donor atoms brought into position at once: the terminal amine, the imidazole nitrogen of the histidine, and a backbone nitrogen, holding the metal in a roughly planar arrangement. The geometry of the complex in solution was determined in 1982."
        },
        {
          "q": "Can mass spectrometry confirm the copper is there?",
          "a": "Yes, and distinctively. Copper has two stable isotopes at roughly 69 and 31 percent natural abundance, so any species containing one copper atom shows a characteristic pair of peaks two mass units apart in that ratio. The free peptide shows no such pattern."
        },
        {
          "q": "Is an HPLC purity figure enough for GHK-Cu?",
          "a": "No. It reports what share of the detected material was the target sequence, not how much copper is present or whether it is bound in the intended ratio. Copper content is worth reporting as its own figure."
        },
        {
          "q": "Can the complex come apart during analysis?",
          "a": "It can. Reversed-phase peptide methods usually run at low pH with an acidic additive, and acidic conditions can shift a labile metal complex toward its dissociated form, so a clean peak may correspond to the free tripeptide. For a metal complex the analytical conditions matter more than usual."
        }
      ],
      references: [
        {
          "text": "Glycyl-L-histidyl-L-lysine compound summary. PubChem, National Library of Medicine (CID 73587).",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/73587"
        },
        {
          "text": "Prezatide copper (GHK-Cu) compound summary. PubChem, National Library of Medicine (CID 71587328).",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/71587328"
        },
        {
          "text": "Freedman, J.H., Pickart, L., Weinstein, B., Mims, W.B., &amp; Peisach, J. (1982). Structure of the glycyl-L-histidyl-L-lysine-copper(II) complex in solution. Biochemistry, 21(19), 4540-4544.",
          "url": "https://doi.org/10.1021/bi00262a004"
        },
        {
          "text": "Harford, C., &amp; Sarkar, B. (1997). Amino terminal Cu(II)- and Ni(II)-binding (ATCUN) motif of proteins and peptides. Accounts of Chemical Research, 30(3), 123-130.",
          "url": "https://doi.org/10.1021/ar9501535"
        }
      ],
      cta: 'Explore <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['amino-acids-peptides-proteins-difference', 'what-is-bpc-157', 'what-are-copper-peptides'],
    },
    {
      slug: 'what-is-retatrutide',
      title: 'What Is Retatrutide?',
      metaTitle: 'Retatrutide: The Triple GIP/GLP-1/Glucagon Agonist',
      metaDescription: 'Retatrutide, a triple GIP, GLP-1 and glucagon receptor agonist studied in metabolic research: structure, identifiers and batch verification.',
      focusKeyword: 'what is retatrutide',
      category: 'Peptide Research',
      tags: ['retatrutide', 'GLP-1', 'glucagon', 'research peptides', 'metabolism'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A synthetic peptide that engages three metabolic receptors at once, and the research questions it raises.',
      imageAlt: 'Retatrutide research peptide vial with certificate of analysis',
      image: 'assets/products/retatrutide.jpg',
      body: `
        <p class="lead">If a dual agonist like <a href="article/what-is-tirzepatide/">tirzepatide</a> engages two receptors, retatrutide takes the same idea one step further. It is a single synthetic peptide built to act on three metabolic receptors at once. That extra target is the whole reason it has become a focal point in current incretin research.</p>

        <h2>What is retatrutide?</h2>
        <p>Retatrutide is a synthetic peptide described as a triple agonist. It acts on the receptors for glucose-dependent insulinotropic polypeptide (GIP), glucagon-like peptide-1 (GLP-1), and glucagon. Its molecular formula is C228H350N48O66. Like other peptides in this family, it carries a fatty acid chain that affects how long the molecule stays intact, and it is produced by <a href="article/peptide-synthesis/">solid-phase synthesis</a> rather than isolated from a natural source.</p>

        <h2>Why a third receptor?</h2>
        <p>GIP and GLP-1 are incretins, but glucagon sits on the other side of glucose regulation. Adding a glucagon receptor component changes the balance of signals a single molecule can send. For researchers, that raises a specific and testable question: what happens to metabolic pathways when all three receptors are engaged together instead of one or two? Retatrutide exists to study exactly that comparison.</p>

        <h2>How is retatrutide studied?</h2>
        <p>In the laboratory, retatrutide appears in research on:</p>
        <ul>
          <li><b>Glucose regulation:</b> how combined incretin and glucagon signaling relates to blood sugar handling in model systems.</li>
          <li><b>Energy metabolism:</b> pathways connected to energy expenditure and metabolic balance.</li>
          <li><b>Receptor pharmacology:</b> mapping the effect of triple activation against single and dual agonists.</li>
        </ul>
        <p>These are preclinical observations. Retatrutide is a research compound, and this article does not describe use in people or animals.</p>

        <h2>Structure and verification</h2>
        <p>Retatrutide is a large, modified peptide, so its identity and purity have to be confirmed rather than assumed. Purity is measured by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and identity by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, and each batch ships lyophilized with its certificate of analysis. A Codex Research vial can be checked by its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including retatrutide, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What makes retatrutide a triple agonist?', a: 'Retatrutide is a single synthetic peptide that acts on three receptors at once: GIP, GLP-1, and glucagon. That combination is what separates it from dual agonists like tirzepatide. It is used strictly for laboratory research.' },
        { q: 'How is retatrutide different from tirzepatide?', a: 'Tirzepatide targets two receptors (GIP and GLP-1). Retatrutide adds a third, the glucagon receptor, so research with it looks at what triple activation does compared with single or dual activation.' },
        { q: 'How is retatrutide verified for research?', a: 'Each batch is tested by HPLC for purity and mass spectrometry for identity, and ships with a certificate of analysis. Codex Research vials can also be checked by batch number at codexresearchlab.com/verify/.' },
      ],
      references: [],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-is-tirzepatide', 'what-is-mots-c'],
    },
    {
      slug: 'what-is-tirzepatide',
      title: 'What Is Tirzepatide?',
      metaTitle: 'Tirzepatide: The Dual GIP and GLP-1 Receptor Agonist',
      metaDescription: 'Tirzepatide, a dual GIP and GLP-1 receptor agonist studied in metabolic research: structure, CAS number and how each batch is verified.',
      focusKeyword: 'what is tirzepatide',
      category: 'Peptide Research',
      tags: ['tirzepatide', 'GIP', 'GLP-1', 'research peptides', 'metabolism'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A synthetic peptide that acts on two incretin receptors at once, and the metabolic research built around it.',
      imageAlt: 'Tirzepatide research peptide vial with certificate of analysis',
      image: 'assets/products/tirzepatide.jpg',
      body: `
        <p class="lead">Tirzepatide is usually introduced as a "dual agonist", which is accurate and tells you almost nothing. What is worth knowing about it, from the point of view of someone handling a vial, is that it is a large acylated synthetic peptide: near 4,800 daltons, built by stepwise synthesis, and carrying a fatty acid chain that makes it behave differently from an ordinary peptide during purification and analysis.</p>

        <h2>Identity on paper</h2>
        <p>Before anything else, the numbers that define the molecule:</p>
        <ul>
          <li><b>CAS number:</b> 2023788-19-2</li>
          <li><b>Molecular formula:</b> C<sub>225</sub>H<sub>348</sub>N<sub>48</sub>O<sub>68</sub></li>
          <li><b>Molecular weight:</b> approximately 4,813 g/mol</li>
          <li><b>PubChem CID:</b> 156588324</li>
        </ul>
        <p>Those identifiers are what a <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> should tie a batch to. A name on a label can be a marketing decision. A formula and a mass cannot.</p>


        <h2>A name is not an identifier</h2>
        <p>Over its life a single molecule collects several names. There is usually a development code assigned by whoever first made it, then an international nonproprietary name, then whatever a supplier or a catalogue chooses to call it. All of them point at the same structure and none of them is the structure.</p>
        <p>This matters more than it sounds when you are buying material. A name can be changed by a decision. A CAS number, a molecular formula and a measured mass cannot. The useful question about a vial is what the certificate says it weighs and how pure it is. Our note on <a href="article/cas-numbers-explained/">CAS numbers</a> covers why that particular identifier is worth checking.</p>

        <h2>Why the fatty acid chain is there</h2>
        <p>Tirzepatide is not a bare peptide. A fatty diacid chain is attached to the backbone through a linker, and that modification is deliberate. Acylating a peptide with a fatty acid gives it the ability to associate reversibly with serum albumin, and peptides that bind albumin are cleared more slowly than those that do not. It is a general strategy in peptide chemistry. <a class="cite" href="https://doi.org/10.1007/s13318-020-00664-y" target="_blank" rel="noopener nofollow">(Reference: Hijazi, 2021)</a></p>
        <p>The practical consequence for anyone analysing the material is that the fatty chain makes the molecule considerably more hydrophobic, so it is retained longer on a <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase column</a> than its unmodified backbone would be.</p>

        <h2>Two receptors, and the incretin background</h2>
        <p>GIP and GLP-1 are incretins: signalling molecules released by the gut in response to nutrients, each acting through its own receptor and each connected to pathways involved in insulin signalling and glucose handling. The biology of the two has been reviewed extensively. <a class="cite" href="https://doi.org/10.1053/j.gastro.2007.03.054" target="_blank" rel="noopener nofollow">(Reference: Baggio &amp; Drucker, 2007)</a> Most earlier compounds in this space engaged GLP-1 alone. Tirzepatide engages both receptors, which is the research question it exists to explore. For the background, see our notes on <a href="article/what-are-incretins/">incretins</a> and on <a href="article/glp-1-vs-gip/">how GLP-1 and GIP differ</a>.</p>

        <h2>Engaging two receptors is not the same as engaging them equally</h2>
        <p>Receptor pharmacology work has characterised tirzepatide as an imbalanced and biased agonist: its activity is not evenly distributed between the two receptors, and at a given receptor it does not necessarily trigger every downstream branch in the same proportion that the native ligand does. <a class="cite" href="https://doi.org/10.1172/jci.insight.140532" target="_blank" rel="noopener nofollow">(Reference: Willard et al., 2020)</a> That asymmetry is the interesting part of the molecule from a laboratory standpoint, and it is why "dual agonist" says less than it appears to.</p>

        <h2>Why a 4,800 dalton peptide is hard to make well</h2>
        <p>Length is the enemy of a clean synthesis. Each coupling cycle in <a href="article/peptide-synthesis/">solid-phase synthesis</a> that falls short of completion leaves a fraction of chains one residue behind, and those shortened chains carry on through every cycle that follows. In a long sequence there are many opportunities for that to happen, and the resulting deletion sequences differ from the target by a single residue, which makes them the hardest impurities to separate.</p>
        <p>The acylation step adds a second thing that can go wrong: material that is otherwise correct but missing the fatty acid, or carrying it in the wrong place, is a distinct compound with a distinct mass.</p>

        <p>Chains of this length also sit near the practical limit of building a sequence one residue at a time, which is why long syntheses are often assembled from shorter fragments joined afterwards rather than run as a single uninterrupted loop. Whichever route is used, the consequence for the buyer is the same: the purity figure is doing real work, and a batch without one is a batch you know nothing about.</p>

        <h2>What verification has to establish</h2>
        <p>For a molecule of this size, the two routine measurements answer different questions and neither is optional.</p>
        <ul>
          <li><b>Purity</b> comes from chromatography and reports what share of the detected material is the target. It is where deletion sequences show up, usually as small peaks close to the main one.</li>
          <li><b>Identity</b> comes from <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>. At nearly 4,813 daltons, the gap between the monoisotopic and average mass is no longer a rounding detail, so a certificate that reports an observed mass should say which convention it used.</li>
        </ul>
        <p>Material arrives <a href="article/lyophilization-freeze-drying/">lyophilized</a>, and each batch can be checked against its paperwork by <a href="verify/">batch number</a> before the vial is opened.</p>


        <h2>Storage follows from the chemistry</h2>
        <p>Nothing about the acylation changes the basic rule for a freeze-dried peptide: the dry form is the stable one, and moisture is what degrades it. A cold vial should be allowed to reach room temperature before it is opened, so that condensation does not form inside, and the water content of the powder is one of the figures a thorough certificate reports. Our guide to <a href="article/how-to-store-research-peptides/">storing research peptides</a> covers the general case.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including tirzepatide, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What is tirzepatide, chemically?",
          "a": "A large synthetic peptide with the formula C225H348N48O68 and a molecular weight of approximately 4,813 g/mol, carrying a fatty diacid chain attached to the backbone through a linker. Its CAS number is 2023788-19-2."
        },
        {
          "q": "Why does tirzepatide have a fatty acid attached?",
          "a": "Acylation with a fatty acid lets a peptide associate reversibly with serum albumin, and albumin-bound peptides are cleared more slowly. It is a general strategy in peptide chemistry. For analysis, the chain also makes the molecule more hydrophobic and therefore more strongly retained on a reversed-phase column."
        },
        {
          "q": "Is tirzepatide a GLP-1 peptide?",
          "a": "It acts at the GLP-1 receptor but not only there. It engages both the GIP and the GLP-1 receptor, which is what distinguishes it from compounds targeting GLP-1 alone."
        },
        {
          "q": "What does it mean that tirzepatide is a biased agonist?",
          "a": "Receptor pharmacology work has described its activity as unevenly distributed between the two receptors, and as not necessarily triggering every downstream branch in the same proportion as the native ligand would. Engaging two receptors is not the same as engaging them equally."
        },
        {
          "q": "Why is a long peptide harder to synthesise cleanly?",
          "a": "Every coupling cycle that falls short leaves a fraction of chains one residue behind, and those chains continue through the remaining cycles. Long sequences give that more chances to happen, and the resulting deletion sequences differ from the target by a single residue, which makes them difficult to separate."
        },
        {
          "q": "How is a tirzepatide batch verified?",
          "a": "Chromatography establishes what share of the detected material is the target, and mass spectrometry establishes that the target is the intended molecule. At this molecular weight the difference between monoisotopic and average mass is significant, so the certificate should state which one it reports."
        }
      ],
      references: [
        {
          "text": "Tirzepatide compound summary. PubChem, National Library of Medicine (CID 156588324).",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/156588324"
        },
        {
          "text": "Willard, F.S., et al. (2020). Tirzepatide is an imbalanced and biased dual GIP and GLP-1 receptor agonist. JCI Insight, 5(17), e140532.",
          "url": "https://doi.org/10.1172/jci.insight.140532"
        },
        {
          "text": "Baggio, L.L., &amp; Drucker, D.J. (2007). Biology of incretins: GLP-1 and GIP. Gastroenterology, 132(6), 2131-2157.",
          "url": "https://doi.org/10.1053/j.gastro.2007.03.054"
        },
        {
          "text": "Hijazi, Y. (2021). Prediction of half-life extension of peptides via serum albumin binding. European Journal of Drug Metabolism and Pharmacokinetics, 46(2), 163-172.",
          "url": "https://doi.org/10.1007/s13318-020-00664-y"
        }
      ],
      cta: 'Browse <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['what-is-bpc-157', 'what-is-mots-c'],
    },
    {
      slug: 'what-is-bpc-157',
      title: 'What Is BPC-157?',
      metaTitle: 'BPC-157: Sequence, Molecular Weight and Formula',
      metaDescription: 'BPC-157 sequence (GEPPPGKPADDAGLV), molecular formula C62H98N16O22, molecular weight, CAS number and how the pentadecapeptide is synthesised.',
      focusKeyword: 'what is BPC-157',
      category: 'Peptide Research',
      tags: ['BPC-157', 'research peptides', 'pentadecapeptide', 'peptide research'],
      date: 'Aug 03, 2026', dateISO: '2026-08-03',
      excerpt: 'A synthetic 15-amino-acid peptide with a sequence drawn from a gastric protein, and the research around it.',
      imageAlt: 'BPC-157 pentadecapeptide research peptide vial with certificate of analysis',
      image: 'assets/products/bpc-157.jpg',
      body: `
        <p class="lead">BPC-157 is one of the most talked-about research peptides, and also one of the most misunderstood. It is a short synthetic peptide whose amino acid sequence is taken from a protein found in gastric juice. In the lab it is studied for the way it interacts with signaling pathways tied to tissue repair and blood vessel formation.</p>

        <h2>What is BPC-157?</h2>
        <p>BPC-157 is a pentadecapeptide, which means a peptide made of 15 amino acids. The name stands for "Body Protection Compound," and the sequence is derived from a larger protein present in the stomach. It is produced synthetically for research through <a href="article/peptide-synthesis/">solid-phase peptide synthesis</a> rather than extracted from tissue. Its CAS number is 137525-51-0 and its molecular formula is C62H98N16O22, with a molecular weight near 1419 g/mol. If the difference between a short peptide like this and a full protein is unclear, our note on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a> covers it.</p>

        <h2>Where does the sequence come from?</h2>
        <p>The BPC-157 sequence corresponds to a fragment of a protective protein identified in gastric juice. That origin is part of why it draws attention in research: peptides that stay intact in an acidic environment are interesting to study, and much of the early literature looked at BPC-157 in exactly that context. The version used in labs today is fully synthetic and characterized by its certificate of analysis rather than by its source.</p>

        <h2>The BPC-157 amino acid sequence</h2>
        <p>A pentadecapeptide has fifteen residues. In BPC-157 they run, N-terminus to C-terminus, in three-letter code:</p>
        <p><b>Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val</b></p>
        <p>In one-letter code the same chain is <b>GEPPPGKPADDAGLV</b>, and the free-acid form is written <b>H-GEPPPGKPADDAGLV-OH</b>. Both notations are registered synonyms on the PubChem record, so either can be used to confirm that a listing describes the same molecule.</p>
        <table>
          <tr><th>Position</th><th>Residue</th><th>Code</th><th>Position</th><th>Residue</th><th>Code</th></tr>
          <tr><td>1</td><td>Glycine</td><td>Gly / G</td><td>9</td><td>Alanine</td><td>Ala / A</td></tr>
          <tr><td>2</td><td>Glutamic acid</td><td>Glu / E</td><td>10</td><td>Aspartic acid</td><td>Asp / D</td></tr>
          <tr><td>3</td><td>Proline</td><td>Pro / P</td><td>11</td><td>Aspartic acid</td><td>Asp / D</td></tr>
          <tr><td>4</td><td>Proline</td><td>Pro / P</td><td>12</td><td>Alanine</td><td>Ala / A</td></tr>
          <tr><td>5</td><td>Proline</td><td>Pro / P</td><td>13</td><td>Glycine</td><td>Gly / G</td></tr>
          <tr><td>6</td><td>Glycine</td><td>Gly / G</td><td>14</td><td>Leucine</td><td>Leu / L</td></tr>
          <tr><td>7</td><td>Lysine</td><td>Lys / K</td><td>15</td><td>Valine</td><td>Val / V</td></tr>
          <tr><td>8</td><td>Proline</td><td>Pro / P</td><td></td><td></td><td></td></tr>
        </table>
        <p>Only eight of the twenty standard amino acids appear. Proline is the most frequent with four residues, glycine appears three times, alanine and aspartic acid twice each, and glutamic acid, lysine, leucine and valine once each. Two structural points follow directly. There is no cysteine, so the molecule has no disulfide bridge and no free thiol. And positions 3, 4 and 5 are three consecutive prolines, a run described in the review literature as conformationally rigid and likely to adopt a polyproline II helix, a left-handed structure that is sterically awkward for proteolytic enzymes to attack.</p>
        <p>The term itself is only a count. "Pentadeca-" is Greek for fifteen, from <i>penta</i> (five) and <i>deka</i> (ten), so a pentadecapeptide has exactly fifteen residues, the same way a dipeptide has two.</p>

        <h2>Molecular formula, molecular weight and identifiers</h2>
        <p>These are the public identifiers a catalogue listing and a certificate of analysis should agree on:</p>
        <table>
          <tr><th>Attribute</th><th>Value</th></tr>
          <tr><td>Molecular formula</td><td>C<sub>62</sub>H<sub>98</sub>N<sub>16</sub>O<sub>22</sub></td></tr>
          <tr><td>Average molecular weight</td><td>1419.5 g/mol (often quoted as 1419.53 Da)</td></tr>
          <tr><td>Monoisotopic mass</td><td>1418.704 Da</td></tr>
          <tr><td>CAS Registry Number</td><td>137525-51-0</td></tr>
          <tr><td>PubChem CID</td><td>9941957</td></tr>
          <tr><td>UNII</td><td>8ED8NXK95P</td></tr>
          <tr><td>ChEMBL ID</td><td>CHEMBL4297358</td></tr>
        </table>
        <p>The formula can be checked against the sequence. Add up the atoms of the fifteen free amino acids, subtract the fourteen water molecules lost as the peptide bonds form, and the result is exactly C<sub>62</sub>H<sub>98</sub>N<sub>16</sub>O<sub>22</sub>: the sixteen nitrogens, for example, are the fifteen backbone amide nitrogens plus the one side-chain nitrogen of the lysine at position 7.</p>
        <p>The two mass figures do different jobs. The average weight near 1419.5 accounts for natural isotope abundances and is the number used for weighing and concentration arithmetic. The monoisotopic mass of 1418.704 uses only the most abundant isotope of each element, and it is the figure a <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> identity check is matched against.</p>

        <h2>Where the name comes from, and when it was described</h2>
        <p>BPC is short for Body Protection Compound. The name belongs first to a larger protein of roughly 40 kDa found in gastric juice; BPC-157 is the fifteen-residue fragment taken from its N-terminal end, a relationship stated in the same terms in both the patent and the analytical literature. It entered the scientific literature in 1993, in a paper by Sikiric, Petek, Rucman, Seiwerth and colleagues in Zagreb, with the chemistry developed in parallel at the Slovenian company Diagen.</p>
        <p>The patent trail is public. The earliest filings, including US Patent 5,288,708, concern the natural BPC protein isolated from gastric juice. Later filings, EP 0572688 and US Patent 6,268,346, concern the synthetic fragment. A 2014 international application, WO2014142764A1, assigned to Diagen with Rudolf Rucman named as inventor, covers stable salts of the pentadecapeptide and restates both the sequence and its gastric origin. A patent describes a claimed invention, not a regulatory status.</p>


        <h2>How is BPC-157 studied?</h2>
        <p>Published research on BPC-157 has mostly used cell culture and animal models. Recurring themes in that work include:</p>
        <ul>
          <li><b>Angiogenesis:</b> how the peptide relates to the formation of new blood vessels in model systems.</li>
          <li><b>Nitric oxide signaling:</b> its interaction with a pathway involved in vascular tone and tissue response.</li>
          <li><b>Tissue and connective structures:</b> models looking at tendon, muscle, and gastrointestinal tissue.</li>
        </ul>
        <p>It is worth being precise here. These are observations from laboratory models, not conclusions about people or animals. BPC-157 is a research compound, and the honest summary is that it remains an active area of preclinical study rather than a settled one.</p>

        <h2>How BPC-157 is made</h2>
        <p>Nothing is extracted from tissue. Research-grade BPC-157 is assembled residue by residue using <a href="article/peptide-synthesis/">solid-phase peptide synthesis</a>, which builds the chain on an insoluble polymeric support; the Diagen patent documents credit Sikiric and Rucman with the synthetic route and reference preparation on solid polymeric carriers. The starting materials are protected amino acid derivatives, not biological material. After assembly the chain is cleaved from the support, purified by reversed-phase <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a>, confirmed by mass spectrometry and freeze-dried. Because reversed-phase purification isolates peptides as salts, the dried solid carries a counterion such as trifluoroacetate plus residual water, so the weighed mass is not one hundred percent peptide; our guide to <a href="article/how-to-read-a-certificate-of-analysis/">reading a certificate of analysis</a> explains how that is reported.</p>
        <p>One storage detail follows from the sequence itself: BPC-157 contains no asparagine, glutamine, cysteine, methionine or tryptophan, the residues peptide manufacturers single out as shortening shelf life because they are the most prone to deamidation or oxidation.</p>

        <h2>Quality, purity, and handling</h2>
        <p>Because a short peptide is only as reliable as the batch you receive, purity matters more than the name on the label. Research-grade BPC-157 is verified by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> for purity and by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> for identity, and each batch should come with its own certificate of analysis. It typically ships lyophilized, and you can check any Codex Research vial by its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including BPC-157, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What does BPC-157 stand for?', a: 'BPC stands for "Body Protection Compound." BPC-157 is a synthetic pentadecapeptide (15 amino acids) whose sequence is derived from a protein found in gastric juice. It is used strictly for laboratory research.' },
        { q: 'Is BPC-157 a natural or synthetic peptide?', a: 'The sequence originates from a naturally occurring gastric protein, but the BPC-157 used in research is made synthetically by solid-phase peptide synthesis and verified by HPLC and mass spectrometry.' },
        { q: 'How is BPC-157 studied in the lab?', a: 'Most published work uses cell culture and animal models, looking at pathways associated with angiogenesis, nitric oxide signaling, and connective tissue. These are preclinical observations, not conclusions about use in people or animals.' },
        { q: 'What is the amino acid sequence of BPC-157?', a: 'In one-letter code the sequence is GEPPPGKPADDAGLV; in three-letter code, Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val, read from the N-terminus to the C-terminus. The free-acid form is written H-GEPPPGKPADDAGLV-OH. Only eight different amino acids appear in the chain, and proline occupies four of the fifteen positions.' },
        { q: 'What is the molecular formula and molecular weight of BPC-157?', a: 'The molecular formula is C62H98N16O22. PubChem lists the average molecular weight as 1419.5 g/mol, commonly quoted in the literature as 1419.53 Da, and the monoisotopic mass as 1418.704 Da. Its CAS Registry Number is 137525-51-0 and its PubChem CID is 9941957.' },
        { q: 'Why is BPC-157 called a pentadecapeptide?', a: '"Pentadeca-" is Greek for fifteen, from penta (five) and deka (ten), so a pentadecapeptide is a peptide of exactly fifteen amino acid residues. The term describes chain length and nothing else.' },
        { q: 'When was BPC-157 first described, and is there a patent?', a: 'It entered the scientific literature in 1993 in a paper by Sikiric, Petek, Rucman, Seiwerth and colleagues in Zagreb, with the chemistry developed at the Slovenian company Diagen. The related patent family includes US 5,288,708 on the natural gastric protein, EP 0572688 and US 6,268,346 on the synthetic fragment, and the 2014 application WO2014142764A1 on stable salts of the pentadecapeptide.' },
      ],
      references: [
        { text: 'BPC-157 compound summary (CID 9941957). PubChem, National Library of Medicine.', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/9941957' },
        { text: 'Mateescu et al. BPC-157 as an investigational peptide: biopharmaceutical challenges, formulation strategies and translational development barriers. Pharmaceutics, 2026.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13210877/' },
        { text: 'Tian T, Jing J, Li Y, Wang Y, Deng X, Shan Y. Characterization of the in vitro metabolic profile of BPC-157 by UHPLC-HRMS. Molecules, 2023.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10650108/' },
        { text: 'Patent WO2014142764A1, stable pentadecapeptide salts (applicant Diagen d.o.o.; inventor R. Rucman). Google Patents.', url: 'https://patents.google.com/patent/WO2014142764A1/en' },
        { text: 'Sikiric P, Petek M, Rucman R, Seiwerth S, et al. Journal of Physiology (Paris), 1993;87(5):313-327 (PMID 8298609). First published description of the gastric juice peptide BPC.', url: 'https://pubmed.ncbi.nlm.nih.gov/8298609/' },
      ],
      cta: 'Explore <a href="catalog/">research peptides</a> at Codex Research, each batch-verified with its certificate of analysis, or <a href="verify/">check a batch number</a>.',
      related: ['peptide-synthesis', 'amino-acids-peptides-proteins-difference', 'peptide-length-terminology'],
    },
    {
      slug: 'buy-research-peptides-panama',
      title: 'How to Buy Research Peptides in Panama',
      metaTitle: 'Buying Research Peptides in Panama: COA, Shipping, Payment',
      metaDescription: 'Buying research peptides in Panama: how batch verification works, what the COA should show, delivery in Panama City and payment options.',
      focusKeyword: 'buy research peptides Panama',
      category: 'Buying Guide',
      tags: ['Panama', 'research peptides', 'buying guide', 'shipping', 'COA'],
      date: 'Aug 02, 2026', dateISO: '2026-08-02',
      excerpt: 'Same-day delivery in Panama City, local payment methods, and how to verify every batch before you pay.',
      imageAlt: 'Research peptide vial delivered in Panama with its certificate of analysis',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Buying research peptides in Panama is straightforward when you know how ordering, delivery, and verification work locally. This guide covers same-day delivery in Panama City, shipping to the interior, the payment methods available in Panama, and how to confirm that every vial is genuine before you pay. All products are for laboratory research use only.</p>

        <h2>How ordering works in Panama</h2>
        <p>At Codex Research you add products to your cart on the website and confirm the order with a specialist on WhatsApp (+507 6335-4625). No payment is charged on the website itself: your order details, delivery, and payment are arranged directly in the chat, so you can ask questions before you pay. Prices are shown in U.S. dollars, which is the currency used in Panama.</p>

        <h2>Delivery in Panama City and the interior</h2>
        <ul>
          <li><b>Panama City:</b> $4 flat shipping, delivered in <b>1-2 hours</b> from local stock.</li>
          <li><b>Interior cities</b> such as David, Chitré, and Colón: next business day via Fergunson transport.</li>
          <li><b>Free shipping</b> on orders over $100.</li>
          <li>Every order ships in <b>sealed, protective packaging</b>, with each vial labeled with its compound, strength and batch number.</li>
        </ul>
        <p>Because stock is held locally, you are not waiting weeks for an international parcel or dealing with customs.</p>

        <h2>Payment methods in Panama</h2>
        <p>Payment happens on the site itself, at checkout:</p>
        <ul>
          <li><b>Card</b>: Visa, Mastercard and American Express, processed by Stripe. You finish on Stripe's own secure checkout, so your card details never touch our site.</li>
          <li><b>Crypto</b>: USDC or USDT on Ethereum, transferred from your own wallet and verified on-chain before the order is released.</li>
        </ul>
        <p>The amount charged is calculated by our server at the moment of payment, so it always matches what your cart shows. Any question before or after ordering is answered by a specialist on WhatsApp.</p>

        <h2>How to verify authenticity before you pay</h2>
        <p>Every batch is third-party tested with <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, and its certificate of analysis (COA) is available on request, before you order if you want to see it first. You can also confirm that a vial is genuine by entering its batch number on the <a href="verify/">batch verification page</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'Do you deliver research peptides in Panama City?', a: 'Yes. Codex Research ships from local stock with $4 flat shipping and 1-2 hour delivery in Panama City. Interior cities like David, Chitré, and Colón receive orders the next business day via Fergunson transport, and shipping is free on orders over $100.' },
        { q: 'What payment methods can I use in Panama?', a: 'Card (Visa, Mastercard, American Express) processed by Stripe, or crypto (USDC or USDT on Ethereum). Payment is completed on the site at checkout, and the amount is calculated by the server so it always matches your cart.' },
        { q: 'How do I know the peptides are genuine?', a: 'Every batch is third-party tested by HPLC and mass spectrometry, and its certificate of analysis is available on request before you pay. You can also verify a vial by entering its batch number on the verification page at codexresearchlab.com/verify/.' },
      ],
      references: [],
      cta: 'Browse the <a href="catalog/">Codex Research catalog</a> or <a href="verify/">verify a batch number</a>. Orders in Panama are confirmed on WhatsApp before you pay.',
      related: ['verify-research-peptide-batch-coa-panama', 'high-performance-liquid-chromatography-hplc'],
    },
    {
      slug: 'verify-research-peptide-batch-coa-panama',
      title: 'How to Verify a Research Peptide Batch and COA',
      metaTitle: 'Check a Peptide COA Matches Your Vial Before Paying',
      metaDescription: 'How to confirm a certificate of analysis belongs to your batch: what to check on the label, what to ask before paying, and what a mismatch means.',
      focusKeyword: 'verify research peptide batch COA',
      category: 'Buying Guide',
      tags: ['COA', 'batch verification', 'quality', 'Panama', 'research peptides'],
      date: 'Aug 01, 2026', dateISO: '2026-08-01',
      excerpt: 'What a certificate of analysis shows, and how to confirm your vial is genuine before you pay.',
      imageAlt: 'Certificate of analysis and batch number verification for research peptides',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">A certificate of analysis (COA) is how you confirm that a research peptide is what the label says. This guide explains what a COA shows, how HPLC and mass spectrometry are used to test each batch, and how to verify your specific vial by its batch number. All products are for laboratory research use only.</p>

        <h2>What is a certificate of analysis?</h2>
        <p>A COA is a document produced by an analytical laboratory that reports the identity, purity, and quantity of a compound for a specific batch. For research peptides, a credible COA is based on independent testing rather than a supplier's own claim, and it is tied to the batch number printed on the vial.</p>

        <h2>What a COA shows</h2>
        <ul>
          <li><b>Identity:</b> confirmation that the compound matches the expected peptide, typically by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>.</li>
          <li><b>Purity:</b> the percentage of the target peptide, measured by <a href="article/high-performance-liquid-chromatography-hplc/">high-performance liquid chromatography (HPLC)</a>.</li>
          <li><b>Batch reference:</b> the batch or lot number, an analysis date, and the testing methods used.</li>
        </ul>

        <h2>How to verify your batch number</h2>
        <p>At Codex Research, every batch is third-party tested with HPLC and mass spectrometry, and the full COA is available on request before you pay. To confirm a vial is genuine, enter its batch number on the <a href="verify/">batch verification page</a>: a valid number returns the product and confirms it is on record. If a number does not match, you can send it to the team to check.</p>

        <h2>Buying in Panama</h2>
        <p>In Panama, you can ask for the COA before you order, pay by card or crypto at checkout, and receive your order in 1-2 hours in Panama City. See the full guide to <a href="article/buy-research-peptides-panama/">buying research peptides in Panama</a> for shipping and payment details.</p>

        <h2>Start from the label, not from the listing</h2>
        <p>Verification runs in one direction: from the vial in your hand back to the paperwork. Every Codex Research vial carries a batch number in the format CDX-NNNN (for example, CDX-1017), and that string is the key to everything else. Read it off the label first, then check that the same string appears on the certificate you were sent. A COA that does not name your batch is a document about some other material, however impressive the numbers on it look.</p>

        <h2>Ask for the certificate before you pay, not after</h2>
        <p>The full COA is available on request before payment, which changes what you are able to do with it. Before an order is placed you can ask which batch you would receive, ask for that batch's certificate rather than a sample document, and read it while you still have the option to walk away. After payment the same certificate is only a record. The sequence matters more than the document.</p>
        <p>Three questions cover most of it: which batch does this certificate belong to, which methods produced these numbers, and who ran them. A supplier that can answer all three in writing is operating differently from one that sends a screenshot.</p>

        <h2>A one-minute check before you order</h2>
        <ul>
          <li><b>Batch match:</b> the number on the certificate is character-for-character the number on the label.</li>
          <li><b>A date:</b> the certificate says when the analysis was performed, not merely when the file was created.</li>
          <li><b>Named methods:</b> HPLC and mass spectrometry are identified as the procedures behind the figures, with numeric results rather than the word "pass".</li>
          <li><b>An author:</b> the testing laboratory is identified and the document is signed or otherwise attributable.</li>
          <li><b>Legibility:</b> you can read the header and the chromatogram, rather than a compressed image of them.</li>
          <li><b>One batch, one document:</b> the certificate is specific to that lot, not a single file reused across a catalogue.</li>
        </ul>
        <p>What each of those fields means, and the difference between chromatographic purity and net peptide content, is covered in detail in <a href="article/how-to-read-a-certificate-of-analysis/">how to read a certificate of analysis</a>. This guide is about confirming that the certificate in front of you belongs to the vial in front of you.</p>

        <h2>What makes testing independent</h2>
        <p>Third-party testing means the laboratory reporting the result is not the party selling the material. That separation is the entire value of the arrangement, and it is why the laboratory's identity belongs on the certificate rather than being described in the abstract. Recognised competence standards for testing laboratories are built around exactly these two ideas, competence and impartiality, and where a laboratory holds accreditation it applies to a defined list of methods rather than to testing in general. At Codex Research, every batch is tested by an independent laboratory using HPLC and mass spectrometry.</p>

        <h2>Verifying a batch in Panama</h2>
        <p>Local delivery in Panama City makes one step easier than it is anywhere else: you can compare the printed label against the certificate at the moment of handover, with the vial in your hand rather than in a photograph. In practice the useful order is to request the COA before ordering, read it, place the order, and then confirm the label at delivery. The verification is the same everywhere; the difference is that here the last step happens face to face instead of after a customs queue.</p>

        <h2>If the number does not match</h2>
        <p>A mismatch is not automatically evidence of a bad batch. Transcription errors happen, and a number can be misread off a small label. The response is the same either way: do not accept an explanation given verbally, and ask for the certificate that carries the exact string on your vial. If a supplier cannot produce a batch-specific document for the batch you were sent, the material is effectively untested from your side of the transaction, whatever was tested upstream. You can also enter the number on the <a href="verify/">batch verification page</a> or send it to the team to check.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What is a certificate of analysis (COA)?', a: 'A COA is a laboratory document that reports the identity, purity, and quantity of a compound for a specific batch. For research peptides it is based on independent HPLC and mass spectrometry testing and is tied to the batch number on the vial.' },
        { q: 'How do I verify a Codex Research batch number?', a: 'Enter the batch number printed on your vial label at codexresearchlab.com/verify/. A valid number confirms the product and that it is on record. The full COA is also available on request before you pay.' },
        { q: 'What purity should a research peptide COA show?', a: 'Research peptides are commonly verified at around 99% purity by HPLC, with identity confirmed by mass spectrometry. The exact figure appears on the batch COA.' },
        { q: 'Can I see the certificate of analysis before I pay?', a: 'Yes. The full batch COA is sent on request before payment. Ask which batch you would receive and request that batch\u2019s certificate specifically, rather than a sample document, so you can read it while you still have the option not to order.' },
        { q: 'What does a Codex Research batch number look like?', a: 'Batch numbers are printed on the vial label in the format CDX-NNNN (for example, CDX-1017). That string is what links the vial to its certificate of analysis, so it should appear character-for-character on the COA you are sent.' },
        { q: 'What should I do if the batch number does not match the COA?', a: 'Do not accept a verbal explanation. Ask for the certificate that carries the exact number printed on your vial, since a mismatch may be a transcription error. You can also enter the number on the batch verification page or send it to the team to check.' },
      ],
      references: [
        { text: 'Q7A Good Manufacturing Practice Guidance for Active Pharmaceutical Ingredients. ICH guidance, U.S. Food and Drug Administration.', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q7a-good-manufacturing-practice-guidance-active-pharmaceutical-ingredients' },
        { text: 'WHO model certificate of analysis. WHO Technical Report Series 1010, Annex 4, World Health Organization, 2018.', url: 'https://www.who.int/publications/m/item/trs1010-annex4' },
        { text: 'ISO/IEC 17025, General requirements for the competence of testing and calibration laboratories. International Organization for Standardization.', url: 'https://help.iso.org/en/articles/376299-iso-iec-17025-general-requirements-for-the-competence-of-testing-and-calibration-laboratories' },
        { text: 'Frequently Asked Questions: scope of accreditation and the ILAC MRA Signatory Search. International Laboratory Accreditation Cooperation (ILAC).', url: 'https://ilac.org/about-ilac/faqs/' },
        { text: 'ICH Q2(R2) Validation of analytical procedures, scientific guideline. European Medicines Agency.', url: 'https://www.ema.europa.eu/en/ich-q2r2-validation-analytical-procedures-scientific-guideline' },
      ],
      cta: '<a href="verify/">Verify a batch number</a> or browse the <a href="catalog/">Codex Research catalog</a>. Every batch ships with its certificate of analysis.',
      related: ['buy-research-peptides-panama', 'mass-spectrometry-peptide-research'],
    },
    {
      slug: 'mass-spectrometry-peptide-research',
      title: 'Mass Spectrometry in Peptide Research',
      metaTitle: 'Mass Spectrometry: Confirming a Peptide Is What It Says',
      metaDescription: 'How mass spectrometry is used in peptide research to confirm identity, detect modifications, and assess purity, including MALDI-TOF, ESI, and LC-MS/MS.',
      focusKeyword: 'mass spectrometry peptide research',
      category: 'Analytical Techniques',
      tags: ['mass spectrometry', 'peptides', 'analytical chemistry', 'proteomics'],
      date: 'Oct 11, 2025', dateISO: '2025-10-11',
      excerpt: 'How this technique confirms the identity, molecular mass and purity of every compound.',
      imageAlt: 'Mass spectrometry instrument used for peptide research analysis',
      body: `
        <p class="lead">Mass spectrometry measures the mass-to-charge ratio of ionized molecules. In peptide work it answers a question that no purity number can answer on its own: is this the right molecule? A chromatogram tells you how much of one thing is present. A mass spectrum tells you what that thing weighs, and therefore what it probably is.</p>

        <h2>What the instrument measures</h2>
        <p>A mass spectrometer does three things in sequence. It turns neutral molecules into ions, it separates those ions according to their mass-to-charge ratio, and it counts them. The output is a spectrum: intensity plotted against m/z. Nothing in that process weighs a molecule directly. What it measures is how an ion behaves in an electric or magnetic field, and mass is inferred from that behaviour. <a class="cite" href="https://doi.org/10.1038/nature01511" target="_blank" rel="noopener nofollow">(Reference: Aebersold &amp; Mann, 2003)</a></p>

        <h2>How a peptide becomes an ion</h2>
        <p>Peptides are large, fragile and non-volatile, which made them very hard to analyse until two ionization methods solved the problem in the late 1980s.</p>
        <ul>
          <li><b>Electrospray ionization (ESI).</b> The sample is sprayed from a fine needle held at high voltage. The solvent evaporates from the resulting droplets until bare ions are left in the gas phase. Because it works from solution, ESI couples directly to a liquid chromatograph. <a class="cite" href="https://doi.org/10.1126/science.2675315" target="_blank" rel="noopener nofollow">(Reference: Fenn et al., 1989)</a></li>
          <li><b>Matrix-assisted laser desorption/ionization (MALDI).</b> The sample is co-crystallised with a light-absorbing matrix and hit with a laser pulse. The matrix absorbs the energy and carries the peptide into the gas phase with it. <a class="cite" href="https://doi.org/10.1021/ac00171a028" target="_blank" rel="noopener nofollow">(Reference: Karas &amp; Hillenkamp, 1988)</a></li>
        </ul>
        <p>The practical difference shows up in the spectrum. MALDI usually produces singly charged ions, so the spectrum is simple to read. ESI produces a series of multiply charged ions of the same molecule, and software combines that series into one mass. A spectrum with several evenly spaced peaks is not several compounds; it is one compound carrying different numbers of protons.</p>

        <h2>Monoisotopic mass and average mass</h2>
        <p>A certificate that reports an observed mass is reporting one of two different numbers, and they are not interchangeable.</p>
        <p><b>Monoisotopic mass</b> is calculated using the lightest and most abundant isotope of every element in the formula: carbon-12, hydrogen-1, nitrogen-14, oxygen-16. <b>Average mass</b> weights every element by the natural abundance of all its isotopes. For a small peptide the two figures differ by well under a dalton. As the molecule gets larger the gap widens, because there are more carbon atoms available to carry a heavier isotope. <a class="cite" href="https://doi.org/10.1016/1044-0305(95)00017-8" target="_blank" rel="noopener nofollow">(Reference: Senko et al., 1995)</a></p>
        <p>This is why an observed mass that sits a dalton away from what you expected is not automatically a problem. It may be the same molecule reported on the other convention. It is also why a good certificate says which mass it is quoting.</p>

        <h2>Tandem mass spectrometry and the sequence</h2>
        <p>Measuring the whole molecule confirms its mass. It does not confirm the order of the residues, and two different sequences built from the same amino acids weigh exactly the same. Tandem mass spectrometry closes that gap by selecting one ion, breaking it apart, and measuring the pieces.</p>
        <p>Peptides tend to break along the amide backbone, producing two families of fragments: one series that keeps the N-terminus and one that keeps the C-terminus. The naming convention for those fragments has been standard since 1984, and the spacing between consecutive fragments corresponds to the residue that was lost. Read across the series and the sequence falls out. <a class="cite" href="https://doi.org/10.1002/bms.1200111109" target="_blank" rel="noopener nofollow">(Reference: Roepstorff &amp; Fohlman, 1984)</a> <a class="cite" href="https://doi.org/10.1126/science.1124619" target="_blank" rel="noopener nofollow">(Reference: Domon &amp; Aebersold, 2006)</a></p>

        <h2>What it pairs with, and why</h2>
        <p><a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> separates and quantifies but does not name. Two compounds can leave the column at a similar time, and a UV detector reports both as peaks without opinion. Mass spectrometry names but does not, on its own, tell you what share of the sample each component represents. Run together as LC-MS, the two cover each other's blind spot, which is why a complete <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> carries a result from each. <a class="cite" href="https://doi.org/10.1146/annurev-bioeng-061008-124934" target="_blank" rel="noopener nofollow">(Reference: Yates et al., 2009)</a></p>


        <h2>The configurations you will see named</h2>
        <p>Three combinations cover most peptide analysis, and a certificate will usually name one of them.</p>
        <ul>
          <li><b>MALDI-TOF.</b> Laser ionization paired with a time-of-flight analyzer, which separates ions by how long they take to travel a fixed distance. Fast, tolerant of salts, and well suited to confirming the mass of a purified sample.</li>
          <li><b>ESI-MS.</b> Electrospray feeding the analyzer directly from solution. The natural choice when the sample is already in liquid form.</li>
          <li><b>LC-MS/MS.</b> Liquid chromatography in front, tandem mass spectrometry behind. The chromatograph separates, the first analyzer selects one component, and the second measures its fragments. This is the configuration that gives separation, mass and sequence evidence in a single run.</li>
        </ul>
        <p>None of them is better in the abstract. They answer slightly different questions, and which one was used is part of what a result means.</p>

        <h2>What mass spectrometry cannot tell you</h2>
        <p>The limits matter as much as the capabilities, and they are rarely stated.</p>
        <ul>
          <li><b>Isomers weigh the same.</b> Leucine and isoleucine have identical residue masses, so a standard measurement cannot distinguish sequences that differ only by swapping one for the other.</li>
          <li><b>Stereochemistry is invisible.</b> A D-amino acid and its L counterpart are the same mass. Nothing in the spectrum separates them.</li>
          <li><b>Peak height is not concentration.</b> Different molecules ionize with different efficiency, so intensity does not translate directly into how much is present without a reference standard.</li>
          <li><b>It sees what gets ionized.</b> Salts, water and counterions that make up part of the weighed powder do not appear as the peptide does, which is one reason mass is not the same question as <a href="article/excipients-in-peptides/">what else is in the vial</a>.</li>
        </ul>

        <h2>Where it fits in a batch record</h2>
        <p>For a synthetic peptide the routine sequence is straightforward. The material is made, it is purified, a chromatographic run establishes how much of it is the target, and a mass measurement establishes that the target is the intended molecule. Both results, tied to a batch number, are what turns a label into something checkable. You can look up the batch on a vial at our <a href="verify/">batch verification page</a>. <a class="cite" href="https://doi.org/10.1038/nature19949" target="_blank" rel="noopener nofollow">(Reference: Aebersold &amp; Mann, 2016)</a></p>
      `,
      faq: [
        {
          "q": "What does mass spectrometry measure in peptides?",
          "a": "It measures the mass-to-charge ratio of ionized peptide molecules. From that, the molecular mass is inferred and compared with the mass calculated from the intended sequence, which is what confirms identity."
        },
        {
          "q": "What is the difference between MALDI and ESI for peptides?",
          "a": "MALDI ionizes the peptide from a solid matrix hit by a laser and usually gives singly charged ions, so the spectrum is simple. ESI ionizes from solution and gives a series of multiply charged ions, which software combines into one mass. ESI couples directly to liquid chromatography; MALDI does not."
        },
        {
          "q": "What is the difference between monoisotopic and average mass?",
          "a": "Monoisotopic mass uses the lightest abundant isotope of each element. Average mass weights every element by the natural abundance of all its isotopes. The two differ by well under a dalton for small peptides and diverge as the molecule gets larger, so a certificate should state which one it reports."
        },
        {
          "q": "Can mass spectrometry confirm a peptide sequence?",
          "a": "Tandem mass spectrometry can. It selects one ion, fragments it along the backbone, and measures the pieces. The spacing between consecutive fragments corresponds to the residue lost, so the sequence can be read across the series."
        },
        {
          "q": "What can mass spectrometry not detect?",
          "a": "It cannot distinguish isomers of equal mass, such as leucine and isoleucine, and it cannot see stereochemistry. Peak intensity also does not translate directly into concentration, because different molecules ionize with different efficiency."
        },
        {
          "q": "Why is purity without a mass measurement incomplete?",
          "a": "Chromatographic purity reports how much of the detected material is one main component. It does not establish that the component is the correct molecule. Pairing a purity result with an identity measurement is what makes a certificate complete."
        }
      ],
      references: [
        {
          "text": "Aebersold, R., &amp; Mann, M. (2003). Mass spectrometry-based proteomics. Nature, 422, 198-207.",
          "url": "https://doi.org/10.1038/nature01511"
        },
        {
          "text": "Fenn, J.B., Mann, M., Meng, C.K., Wong, S.F., &amp; Whitehouse, C.M. (1989). Electrospray ionization for mass spectrometry of large biomolecules. Science, 246(4926), 64-71.",
          "url": "https://doi.org/10.1126/science.2675315"
        },
        {
          "text": "Karas, M., &amp; Hillenkamp, F. (1988). Laser desorption ionization of proteins with molecular masses exceeding 10,000 daltons. Analytical Chemistry, 60(20), 2299-2301.",
          "url": "https://doi.org/10.1021/ac00171a028"
        },
        {
          "text": "Senko, M.W., Beu, S.C., &amp; McLafferty, F.W. (1995). Determination of monoisotopic masses and ion populations for large biomolecules from resolved isotopic distributions. Journal of the American Society for Mass Spectrometry, 6(4), 229-233.",
          "url": "https://doi.org/10.1016/1044-0305(95)00017-8"
        },
        {
          "text": "Roepstorff, P., &amp; Fohlman, J. (1984). Proposal for a common nomenclature for sequence ions in mass spectra of peptides. Biomedical Mass Spectrometry, 11(11), 601.",
          "url": "https://doi.org/10.1002/bms.1200111109"
        },
        {
          "text": "Domon, B., &amp; Aebersold, R. (2006). Mass spectrometry and protein analysis. Science, 312(5771), 212-217.",
          "url": "https://doi.org/10.1126/science.1124619"
        },
        {
          "text": "Yates, J.R., Ruse, C.I., &amp; Nakorchevsky, A. (2009). Proteomics by mass spectrometry: approaches, advances, and applications. Annual Review of Biomedical Engineering, 11, 49-79.",
          "url": "https://doi.org/10.1146/annurev-bioeng-061008-124934"
        },
        {
          "text": "Aebersold, R., &amp; Mann, M. (2016). Mass-spectrometric exploration of proteome structure and function. Nature, 537, 347-355.",
          "url": "https://doi.org/10.1038/nature19949"
        }
      ],
      cta: 'Explore our range of <a href="catalog/">research peptides</a> analyzed by mass spectrometry and HPLC for verified purity.',
      related: ['high-performance-liquid-chromatography-hplc', 'peptide-synthesis', 'amino-acids-peptides-proteins-difference'],
    },

    {
      slug: 'high-performance-liquid-chromatography-hplc',
      title: 'What Is High Performance Liquid Chromatography (HPLC)?',
      metaTitle: 'HPLC: How a Peptide Purity Number Is Produced',
      metaDescription: 'A clear guide to high performance liquid chromatography (HPLC): how it separates and quantifies compounds, and why it is key in peptide research.',
      focusKeyword: 'high performance liquid chromatography',
      category: 'Analytical Techniques',
      tags: ['HPLC', 'chromatography', 'peptides', 'purity analysis'],
      date: 'Aug 29, 2025', dateISO: '2025-08-29',
      excerpt: 'The standard for verifying a batch’s purity before it ships, explained step by step.',
      imageAlt: 'High performance liquid chromatography HPLC system separating peptide samples',
      body: `
        <p class="lead">High performance liquid chromatography is where a purity percentage comes from. A pump pushes the sample through a packed column, the components travel at different speeds, and a detector records them as they leave. The number on a certificate is a measurement of that recording, which means it is only as meaningful as the conditions that produced it.</p>

        <h2>How the separation happens</h2>
        <p>The column is packed with a stationary phase. A solvent, the mobile phase, is driven through it under high pressure, carrying the sample along. Each component interacts with the stationary phase to a different degree, so each spends a different amount of time held back. That time is the retention time, and it is what separates one compound from another. <a class="cite" href="https://doi.org/10.1002/0471973106" target="_blank" rel="noopener nofollow">(Reference: Dong, 2006)</a></p>

        <h2>For peptides it is almost always reversed phase</h2>
        <p>The word reversed is historical. The stationary phase is non-polar, usually silica with C18 alkyl chains bonded to it, and the mobile phase is polar. Peptides stick to the non-polar surface and are then washed off by gradually increasing the proportion of organic solvent, typically acetonitrile. More hydrophobic sequences hold on longer, so they come off later. <a class="cite" href="https://doi.org/10.1002/9780470508183" target="_blank" rel="noopener nofollow">(Reference: Snyder et al., 2009)</a></p>

        <h2>Why there is acid in the mobile phase</h2>
        <p>Peptide methods usually include a small amount of trifluoroacetic acid. It has two jobs: it keeps the pH low so that ionisable groups stay in one consistent state, and it acts as an ion-pairing agent, associating with protonated basic sites on the peptide. The result is sharper peaks and better separation of closely related sequences. The effect depends on concentration and on which acid is used, and it has been studied systematically. <a class="cite" href="https://doi.org/10.1016/j.chroma.2005.02.047" target="_blank" rel="noopener nofollow">(Reference: Shibue et al., 2005)</a></p>
        <p>This connects to something that appears later on the certificate. That same trifluoroacetate can remain bound to the material after purification, which is why a peptide is typically isolated as a salt and why part of the powder you weigh is counterion rather than peptide.</p>

        <h2>What the detector sees</h2>
        <p>Most peptide work uses ultraviolet detection, and the wavelength is not arbitrary.</p>
        <ul>
          <li><b>Around 214 nm</b> the amide bond itself absorbs. Every peptide has amide bonds, so this wavelength detects essentially any sequence.</li>
          <li><b>At 280 nm</b> the absorbance comes mainly from aromatic side chains, tryptophan and tyrosine. A peptide with no aromatic residues is close to invisible at this wavelength.</li>
        </ul>
        <p>That difference has a consequence worth knowing. Two runs of the same sample at different wavelengths can produce different purity figures, because they are not detecting the same things with the same sensitivity.</p>


        <h2>Gradient and isocratic runs</h2>
        <p>An isocratic method holds the mobile phase composition constant for the whole run. A gradient method changes it, usually raising the organic proportion steadily over time. Peptides are almost always run as gradients, because a single fixed composition that releases one sequence promptly will hold another on the column far too long, or wash both off together with no separation at all.</p>
        <p>The shape of that gradient is a real variable. A shallow gradient spreads peaks out and resolves species that a steep one merges into a single peak. Two laboratories can analyse the same batch, both report honestly, and arrive at different purity figures because one gave the separation more room than the other. It is another reason the conditions belong next to the number.</p>

        <h2>What the trace shows</h2>
        <p>If a certificate includes the trace, look at it. One tall, symmetrical peak on a flat baseline is the picture you want. Small peaks close to the main one are common in synthesis and usually correspond to closely related species, such as truncated or modified sequences. A shoulder on the main peak means the method resolved it with little margin, which is exactly why the method conditions belong on the document. <a class="cite" href="https://doi.org/10.1002/0470087951" target="_blank" rel="noopener nofollow">(Reference: Kazakevich &amp; LoBrutto, 2006)</a></p>

        <h2>Area percent is not weight percent</h2>
        <p>This is the most common misreading of an HPLC result. Purity is normally reported as the area of the target peak divided by the total area of all detected peaks. It answers a question about the detected material: of everything this method saw, what share was the target?</p>
        <p>It does not answer what share of the powder is peptide. Counterion, absorbed water and anything without a chromophore at the chosen wavelength are not in that calculation at all. A batch can be 99 percent pure by area and still be well below 99 percent peptide by mass, with no contradiction between the two figures. They measure different things, which is why a thorough <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> reports both.</p>

        <h2>The conditions are part of the result</h2>
        <p>A purity figure with no method behind it is a statement, not a measurement. The column, the gradient, the flow rate, the detection wavelength and the run time all change what the number comes out as. Reported together, they let someone else repeat the analysis. Reported alone, the percentage asks to be taken on trust. Guidance on validating analytical procedures exists precisely because a result is inseparable from the procedure that produced it. <a class="cite" href="https://doi.org/10.1201/b12039" target="_blank" rel="noopener nofollow">(Reference: Swartz &amp; Krull, 2012)</a></p>

        <h2>What HPLC cannot do</h2>
        <ul>
          <li><b>It separates, it does not identify.</b> A detector reports a peak at a retention time. It has no opinion about what the molecule is, which is why purity is paired with <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>.</li>
          <li><b>Things can hide under the peak.</b> An impurity that elutes at the same time as the target is counted as target. Deletion sequences, which differ from the intended peptide by a single residue, are the usual candidates.</li>
          <li><b>Response is not uniform.</b> Two compounds at the same concentration do not necessarily give peaks of the same area.</li>
        </ul>
        <p>Used for what it is good at, it remains the standard way to establish how much of a batch is the thing it claims to be, and the number it produces is one of the two results you should expect to see tied to a batch on any <a href="verify/">vial you can check</a>.</p>
      `,
      faq: [
        {
          "q": "What is HPLC used for in peptide work?",
          "a": "It separates the components of a sample and quantifies them, which is how a purity percentage is produced. It is the standard method for establishing how much of a batch is the target compound."
        },
        {
          "q": "What is retention time?",
          "a": "How long a compound takes to travel through the column and reach the detector. Components that interact more strongly with the stationary phase are held back longer, and that difference is what separates them."
        },
        {
          "q": "Why is reversed-phase HPLC used for peptides?",
          "a": "The stationary phase is non-polar and the mobile phase is polar, so peptides bind to the column and are released as the proportion of organic solvent rises. More hydrophobic sequences elute later, which separates closely related peptides well."
        },
        {
          "q": "Why is trifluoroacetic acid added to the mobile phase?",
          "a": "It holds the pH low so ionisable groups stay in a consistent state, and it acts as an ion-pairing agent that sharpens peaks. The same trifluoroacetate can remain with the material afterwards as a counterion."
        },
        {
          "q": "Does 214 nm or 280 nm matter for a purity result?",
          "a": "Yes. At around 214 nm the amide bond absorbs, so essentially any peptide is detected. At 280 nm the signal comes mainly from tryptophan and tyrosine, so a peptide without aromatic residues is barely visible. The same sample can give different purity figures at different wavelengths."
        },
        {
          "q": "Is 99 percent by HPLC the same as 99 percent peptide?",
          "a": "No. HPLC purity is the target peak area as a share of total detected peak area. Net peptide content is the share of the weighed powder that is peptide rather than counterion and water. A batch can be 99 percent pure by area and well below that by mass."
        }
      ],
      references: [
        {
          "text": "Dong, M.W. (2006). Modern HPLC for Practicing Scientists. Wiley.",
          "url": "https://doi.org/10.1002/0471973106"
        },
        {
          "text": "Snyder, L.R., Kirkland, J.J., &amp; Dolan, J.W. (2009). Introduction to Modern Liquid Chromatography (3rd ed.). Wiley.",
          "url": "https://doi.org/10.1002/9780470508183"
        },
        {
          "text": "Shibue, M., Mant, C.T., &amp; Hodges, R.S. (2005). Effect of anionic ion-pairing reagent concentration (1-60 mM) on reversed-phase liquid chromatography elution behaviour of peptides. Journal of Chromatography A, 1080(1), 58-67.",
          "url": "https://doi.org/10.1016/j.chroma.2005.02.047"
        },
        {
          "text": "Kazakevich, Y.V., &amp; LoBrutto, R. (Eds.). (2006). HPLC for Pharmaceutical Scientists. Wiley.",
          "url": "https://doi.org/10.1002/0470087951"
        },
        {
          "text": "Swartz, M.E., &amp; Krull, I.S. (2012). Handbook of Analytical Validation. CRC Press.",
          "url": "https://doi.org/10.1201/b12039"
        }
      ],
      cta: 'Browse <a href="catalog/">research peptides</a> verified by HPLC for purity above 98 percent.',
      related: ['mass-spectrometry-peptide-research', 'peptide-synthesis', 'lyophilization-freeze-drying'],
    },

    {
      slug: 'amino-acids-peptides-proteins-difference',
      title: 'Amino Acids, Peptides, and Proteins: What Is the Difference?',
      metaTitle: 'Amino Acid, Peptide or Protein? Where the Line Falls',
      metaDescription: 'Amino acids, peptides, and proteins explained. Understand the differences in size, structure, and function, from single molecules to folded proteins.',
      focusKeyword: 'difference between amino acids peptides and proteins',
      category: 'Peptide Basics',
      tags: ['amino acids', 'peptides', 'proteins', 'biochemistry'],
      pillar: true,
      date: 'Aug 16, 2025', dateISO: '2025-08-16',
      excerpt: 'A short guide to the hierarchy of biological molecules, from single residues to folded proteins.',
      imageAlt: 'Diagram comparing amino acids, peptides, and proteins by size and structure',
      body: `
        <p class="lead">Amino acid, peptide and protein describe the same kind of molecule at three scales. An amino acid is a single unit. A peptide is a short chain of them. A protein is a long chain that folds into a defined shape. The boundaries between the three are conventions rather than laws of chemistry, which is worth knowing before treating any of them as a hard cutoff.</p>

        <h2>The amino acid</h2>
        <p>Every standard amino acid is built the same way: a central carbon carrying an amino group, a carboxyl group, a hydrogen, and a side chain. Only the side chain changes, and that is where all the variety comes from. Some side chains are charged, some are polar, some are oily and avoid water, and two contain rings that absorb ultraviolet light, which is the property that makes a peptide visible to a detector at 280 nm.</p>
        <p>That central carbon has four different groups attached, so it is a stereocentre. Almost all amino acids in biology are the L form. The D form is the mirror image, chemically identical in mass and formula, and a mass measurement cannot tell the two apart. It is one of the few things a certificate cannot settle by mass alone.</p>

        <h2>The bond that links them</h2>
        <p>A peptide bond forms when the carboxyl group of one amino acid reacts with the amino group of another and a molecule of water is released. The bond that results is not a simple single bond. The electrons are shared across the linkage, giving it partial double-bond character, and the consequence is that the six atoms around it sit in a plane and cannot rotate freely.</p>
        <p>That rigidity is what makes folding possible at all. A chain that could twist anywhere would have no reason to adopt one shape over another. In the laboratory, forming this bond on purpose and in a chosen order is the whole problem that <a href="article/peptide-synthesis/">peptide synthesis</a> exists to solve.</p>


        <h2>Twenty standard residues, and the ones outside the list</h2>
        <p>Protein synthesis in living cells draws on twenty standard amino acids, plus two that are incorporated by special mechanisms. Chemistry is not restricted to that list. A synthetic sequence can include residues that no organism builds: D-amino acids, residues with modified side chains, or entirely artificial units introduced to change how the chain behaves.</p>
        <p>The ends of the chain can also be altered. The N-terminus is often acetylated and the C-terminus amidated, both of which remove a charge that would otherwise sit at the end of the molecule. A chain can also be joined head to tail or through side chains, which is the difference between a <a href="article/cyclic-vs-linear-peptides/">cyclic and a linear peptide</a>.</p>
        <p>Sequences are written from the N-terminus to the C-terminus, using either a three-letter code or a single letter per residue. A specification that quotes a sequence is quoting it in that direction, and reading it backwards produces a different molecule with, in most cases, exactly the same mass.</p>

        <p>Each of these changes the formula, and therefore the mass. That is why a specification listing a modified terminus is not decoration: it states a number that an identity measurement either matches or does not.</p>

        <h2>Where the line between peptide and protein is drawn</h2>
        <p>The common convention is that a peptide runs from two residues up to roughly fifty, and that longer chains are proteins. The number is useful but arbitrary. Nothing chemical happens at residue fifty-one. Behaviour changes across that range: short chains usually stay flexible in solution, while longer ones have enough interactions to hold a stable structure.</p>
        <p>Related terms overlap in the same fuzzy way. Oligopeptide describes a short chain, polypeptide a long one, and both are used loosely. Our note on <a href="article/peptide-length-terminology/">peptide length terminology</a> covers how the names are used in practice.</p>

        <h2>Structure has levels</h2>
        <p>The sequence of residues is the primary structure, and it is the only level that has to be specified to define the molecule. Local repeating patterns held together by hydrogen bonds along the backbone, mainly the helix and the sheet, are the secondary structure; both were predicted from bond geometry before they were seen experimentally. The overall three-dimensional arrangement of the whole chain is the tertiary structure. <a class="cite" href="https://doi.org/10.1073/pnas.37.4.205" target="_blank" rel="noopener nofollow">(Reference: Pauling et al., 1951)</a></p>

        <h2>Why sequence matters so much</h2>
        <p>Classic experiments showed that a denatured protein can recover its original shape and activity on its own, which established that the information needed to fold is carried in the sequence itself rather than supplied from outside. <a class="cite" href="https://doi.org/10.1126/science.181.4096.223" target="_blank" rel="noopener nofollow">(Reference: Anfinsen, 1973)</a> The corollary is that folding can also go wrong, and the study of misfolding has been a substantial field in its own right. <a class="cite" href="https://doi.org/10.1038/nature02261" target="_blank" rel="noopener nofollow">(Reference: Dobson, 2003)</a></p>

        <h2>Not everything folds, and that is normal</h2>
        <p>The tidy picture of a sequence collapsing into one fixed shape does not apply to every chain. Many functional regions have no stable structure on their own and only adopt one when they meet a binding partner. Short peptides frequently fall into this category, which is why describing a peptide as unfolded is a description and not a defect. <a class="cite" href="https://doi.org/10.1006/jmbi.1999.3110" target="_blank" rel="noopener nofollow">(Reference: Wright &amp; Dyson, 1999)</a></p>

        <h2>Telling them apart in practice</h2>
        <p>A laboratory measures none of these definitions. What gets measured is mass, and how the material behaves on a column.</p>
        <ul>
          <li><b>Mass</b> distinguishes one sequence from another, since every residue contributes a known increment. This is what <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> reports, and it is how the identity line on a certificate is produced.</li>
          <li><b>Hydrophobicity</b> determines how long the molecule is retained on a reversed-phase column, which is the basis of the <a href="article/high-performance-liquid-chromatography-hplc/">purity measurement</a>.</li>
          <li><b>Size</b> matters for method choice. Approaches that suit a fifteen-residue peptide are not always the ones used for a folded protein.</li>
        </ul>
        <p>Read together, those two measurements are what turn a name on a label into a claim that can be checked against a <a href="verify/">specific batch</a>. <a class="cite" href="https://www.ncbi.nlm.nih.gov/books/NBK21154/" target="_blank" rel="noopener nofollow">(Reference: Berg et al., 2002)</a></p>
      `,
      faq: [
        {
          "q": "What is the difference between a peptide and a protein?",
          "a": "Length and behaviour. A peptide is conventionally a chain of two to about fifty amino acids and usually stays flexible in solution; a protein is longer and typically folds into a stable three-dimensional structure. The cutoff is a convention, not a chemical boundary."
        },
        {
          "q": "What is a peptide bond?",
          "a": "The link between two amino acids, formed when a carboxyl group reacts with an amino group and water is released. Electrons are shared across the linkage, giving it partial double-bond character, so the atoms around it lie in a plane and cannot rotate freely."
        },
        {
          "q": "How many amino acids make a peptide rather than a protein?",
          "a": "Usually two to about fifty. Nothing chemical changes at a specific residue count; what changes across that range is whether the chain has enough interactions to hold a stable shape."
        },
        {
          "q": "What is the difference between L and D amino acids?",
          "a": "They are mirror images at the central carbon. Biology uses the L form almost exclusively. The two have identical formulas and identical masses, so mass spectrometry cannot distinguish them."
        },
        {
          "q": "What are the levels of protein structure?",
          "a": "Primary is the sequence of residues. Secondary is local repeating patterns such as helices and sheets, held by backbone hydrogen bonds. Tertiary is the overall three-dimensional arrangement of the whole chain."
        },
        {
          "q": "Do all peptides fold into a defined shape?",
          "a": "No. Many chains, and short peptides in particular, have no stable structure on their own and only adopt one when bound to a partner. An unfolded peptide is being described, not diagnosed as faulty."
        }
      ],
      references: [
        {
          "text": "Pauling, L., Corey, R.B., &amp; Branson, H.R. (1951). The structure of proteins: two hydrogen-bonded helical configurations of the polypeptide chain. PNAS, 37(4), 205-211.",
          "url": "https://doi.org/10.1073/pnas.37.4.205"
        },
        {
          "text": "Anfinsen, C.B. (1973). Principles that govern the folding of protein chains. Science, 181(4096), 223-230.",
          "url": "https://doi.org/10.1126/science.181.4096.223"
        },
        {
          "text": "Dobson, C.M. (2003). Protein folding and misfolding. Nature, 426, 884-890.",
          "url": "https://doi.org/10.1038/nature02261"
        },
        {
          "text": "Wright, P.E., &amp; Dyson, H.J. (1999). Intrinsically unstructured proteins: re-assessing the protein structure-function paradigm. Journal of Molecular Biology, 293(2), 321-331.",
          "url": "https://doi.org/10.1006/jmbi.1999.3110"
        },
        {
          "text": "Nelson, D.L., &amp; Cox, M.M. (2017). Lehninger Principles of Biochemistry (7th ed.). W.H. Freeman."
        },
        {
          "text": "Berg, J.M., Tymoczko, J.L., &amp; Stryer, L. (2002). Biochemistry. 5th edition. W.H. Freeman.",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK21154/"
        }
      ],
      cta: 'Ready to go deeper? Browse our <a href="catalog/">research peptides</a> or learn how they are made in our <a href="article/peptide-synthesis/">peptide synthesis</a> guide.',
      related: ['peptide-synthesis', 'mass-spectrometry-peptide-research', 'what-is-mots-c', 'peptide-length-terminology'],
    },

    {
      slug: 'lyophilization-freeze-drying',
      title: 'Lyophilization: How It Works',
      metaTitle: 'Lyophilized Powder: Why Peptides Ship Freeze-Dried',
      metaDescription: 'What is lyophilization? Learn how freeze-drying preserves peptides and proteins through freezing, primary drying, and secondary drying, step by step.',
      focusKeyword: 'lyophilization',
      category: 'Lab Processes',
      tags: ['lyophilization', 'freeze-drying', 'peptides', 'sample preservation'],
      date: 'Aug 03, 2025', dateISO: '2025-08-03',
      excerpt: 'Why peptides are freeze-dried to preserve their structure and stability for storage.',
      imageAlt: 'Lyophilization freeze-drying process removing water from frozen peptide samples',
      body: `
        <p class="lead">Lyophilization, also called freeze-drying, is a dehydration process that removes water from a frozen sample through sublimation under reduced pressure. It preserves sensitive compounds such as peptides, proteins, and vaccines by maintaining their structure and stability for long-term storage.</p>

        <h2>What "lyophilized powder" means</h2>
        <p>The phrase describes the physical state of the material, not a grade or a formulation. What is left in the vial after freeze-drying is a porous solid that occupies roughly the same shape and volume the frozen solution did, which is why it is usually called a cake rather than a powder. The ice sublimes away and the solid matrix it was holding stays behind. Some cakes are dense and uniform, some are flaky or crumble at the edges, and at the small masses typical of research peptides the cake can be a thin film or a few flecks on the wall of the vial, or look like nothing at all. A vial that appears empty has not necessarily lost its contents.</p>


        <h2>What is lyophilization?</h2>
        <p>Lyophilization, also known as freeze-drying, is a dehydration process used in research and pharmaceutical labs to preserve biological materials. The technique removes water from a frozen sample through sublimation, the direct transition of ice into vapor, under reduced pressure. This helps maintain the structure and stability of sensitive compounds such as peptides, proteins, and vaccines.${cite('Reference: Tang &amp; Pikal, 2004', 'https://doi.org/10.1023/B:PHAM.0000016234.73023.75')}</p>

        <h2>How does the lyophilization process work?</h2>
        <p>Lyophilization typically occurs in three stages:</p>
        <ol>
          <li><b>Freezing:</b> the sample is cooled until water turns to ice, creating a solid matrix that stabilizes the material.</li>
          <li><b>Primary drying (sublimation):</b> pressure is lowered and heat is gently applied, causing frozen water to sublimate into vapor without passing through the liquid phase.</li>
          <li><b>Secondary drying (desorption):</b> remaining bound water molecules are removed, reducing final moisture content to very low levels.</li>
        </ol>
        <p>${cite('Reference: Franks, 1998', 'https://doi.org/10.1016/S0939-6411(98)00004-6').trim()}</p>

        <h2>Why the freezing step decides most of the outcome</h2>
        <p>Freezing is not just cooling. As the temperature falls, water separates out as ice and the remaining solutes are pushed into progressively more concentrated pockets, which freeze at lower temperatures than the surrounding water. Most samples behave as eutectics, a mixture of solutes and solvent that is only properly frozen once the entire eutectic mixture has solidified. Others never crystallise at all: the suspension grows more viscous as it cools until it sets as a vitreous solid at the glass transition point, and this second type is considerably harder to freeze-dry.${cite('Reference: Labconco, A Guide to Freeze Drying for the Laboratory', 'https://documents.thermofisher.com/TFS-Assets/ANZ/brochures/labconco-guide-fd.pdf')}</p>
        <p>Cooling rate matters for the same reason. Rapid cooling gives small ice crystals, useful when a structure has to be preserved for microscopy, but it leaves narrow channels in the matrix and makes the sample slower to dry. Slower cooling gives larger crystals and less restrictive channels for vapour to escape through. Either way, the product has to be frozen below its eutectic or glass transition temperature before drying begins, because pockets of unfrozen material will expand under vacuum and compromise the structure of the finished cake.</p>

        <h2>Collapse temperature, and what a bad cake tells you</h2>
        <p>There is a temperature above which the macroscopic structure of the drying product gives way; it is called the collapse temperature, and it generally sits about two degrees above the glass transition temperature of the formulation in its frozen state.${cite('Reference: Chen et al., 2021', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8107147/')} Drying has to be run below it. Push the product temperature too high to save time and the matrix slumps, which is visible afterwards as a shrunken, glassy or melted-back cake. A collapsed cake is not only a cosmetic problem: it is associated with higher residual moisture and slower redissolution, so appearance is a genuine quality indicator rather than a preference.</p>

        <h2>Residual moisture</h2>
        <p>Sublimation does not remove all the water. Depending on the formulation and the cycle, the product leaving primary drying may still hold something in the region of five to twenty percent water by weight, bound to the solid rather than present as ice.${cite('Reference: Chen et al., 2021', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8107147/')} That is what secondary drying is for, and it is normally continued until residual water is down to roughly one to two percent. The reason to care is that water acts as a plasticiser: the more of it that remains in an amorphous solid, the lower the glass transition temperature of the finished cake and the more molecular mobility there is at any given storage temperature. Residual moisture is measured by Karl Fischer titration and is one of the attributes a complete <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> can report.</p>


        <h2>Why do researchers use lyophilization?</h2>
        <p>The method allows long-term preservation of compounds that are unstable in liquid form. For peptides and proteins, lyophilization minimizes degradation, supports easier storage and transport, and enables precise reconstitution for experiments. It often relies on <a href="article/excipients-in-peptides/">excipients</a> that act as bulking agents and stabilizers. The process is also scalable, from small laboratory samples to large industrial batches.${cite('Reference: Wang, 2000', 'https://doi.org/10.1016/S0378-5173(00)00423-3')}</p>

        <h2>Key applications in laboratory research</h2>
        <ul>
          <li>Preserving peptide and protein samples for extended shelf life.</li>
          <li>Stabilizing vaccines and biologics during production and distribution.</li>
          <li>Preparing reference standards for analytical methods such as <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a>.</li>
          <li>Enabling controlled reconstitution for in vitro or in vivo research models.</li>
        </ul>
        <p>${cite('Reference: Tang &amp; Pikal, 2004', 'https://doi.org/10.1023/B:PHAM.0000016234.73023.75').trim()}</p>
      
        <h2>What the equipment does</h2>
        <p>A freeze dryer sets up a pressure difference and then supplies heat across it. Sublimation depends on the difference in vapour pressure between the product and the ice collector, so the collector, a cold trap, has to be held significantly colder than the product; water molecules migrate from the higher-pressure sample toward the lower-pressure collector, where they condense, while the vacuum pump removes the gases that will not condense. Heat is the driving force, not an afterthought: subliming a gram of water from ice to vapour takes on the order of ten times the energy needed to freeze that gram in the first place.${cite('Reference: Labconco, A Guide to Freeze Drying for the Laboratory', 'https://documents.thermofisher.com/TFS-Assets/ANZ/brochures/labconco-guide-fd.pdf')}</p>

        <h2>A note on "lyophilized powder for injection"</h2>
        <p>That phrase is a dosage-form designation from pharmaceutical labelling. It identifies a licensed, sterile drug product manufactured and released under a regulatory filing, and it carries a set of legal obligations that have nothing to do with the drying method itself. A research compound supplied lyophilized is not that, regardless of how it looks in the vial. The two share a physical state and nothing else, and the distinction is worth keeping straight when comparing catalogue descriptions.</p>

        <h2>Why research peptides are supplied this way</h2>
        <p>Because the dry state is the stable one. Peptides in solution have a markedly shorter usable life than the same material as a lyophilizate, since the degradation routes that matter most, hydrolysis of the backbone and deamidation of side chains, need water to proceed.${cite('Reference: Shi and McHugh, 2023', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10526705/')} Freeze-drying also makes small quantities practical to weigh, ship at ambient temperature and store, and it lets the material be presented as a defined mass in a sealed vial. What happens next, dissolving that solid in a measured volume of solvent to obtain a solution of known concentration, is covered separately in our note on <a href="article/bacteriostatic-water-for-peptide-reconstitution/">reconstituting lyophilized peptides</a>.</p>
      `,
      faq: [
        { q: 'What is lyophilization used for?', a: 'Lyophilization is used to preserve compounds that are unstable in liquid form, such as peptides, proteins, and vaccines, by removing water while keeping their structure intact.' },
        { q: 'What are the three stages of freeze-drying?', a: 'The three stages are freezing, primary drying by sublimation, and secondary drying by desorption of bound water.' },
        { q: 'Why are peptides freeze-dried?', a: 'Freeze-drying minimizes peptide degradation, makes storage and transport easier, and allows precise reconstitution before experiments.' },
        { q: 'What does "lyophilized powder" mean?', a: 'It describes the physical state of the material after freeze-drying, not a grade or a formulation. What remains in the vial is a porous solid, usually called a cake, that keeps roughly the shape and volume the frozen solution had once the ice has sublimed away.' },
        { q: 'Why does a vial of lyophilized peptide sometimes look empty?', a: 'At the small masses typical of research peptides, the cake can be a thin film or a few flecks on the wall of the vial rather than a visible volume of powder. A vial that looks empty has not necessarily lost its contents; the labelled mass and the certificate of analysis are what define what is in it.' },
        { q: 'What is the collapse temperature in freeze-drying?', a: 'It is the temperature above which the macroscopic structure of the drying product gives way, and it generally sits about two degrees above the glass transition temperature of the frozen formulation. Drying above it produces a shrunken or melted-back cake, which is associated with higher residual moisture and slower redissolution.' },
        { q: 'How much water is left after freeze-drying?', a: 'Product leaving primary drying can still hold roughly five to twenty percent water by weight. Secondary drying removes the bound water, typically down to about one to two percent, which is measured by Karl Fischer titration.' },
      ],
      references: [
        { text: 'Franks, F. (1998). Freeze-drying of bioproducts: putting principles into practice. European Journal of Pharmaceutics and Biopharmaceutics, 45(3), 221-229.', url: 'https://doi.org/10.1016/S0939-6411(98)00004-6' },
        { text: 'Tang, X., &amp; Pikal, M.J. (2004). Design of freeze-drying processes for pharmaceuticals: practical advice. Pharmaceutical Research, 21(2), 191-200.', url: 'https://doi.org/10.1023/B:PHAM.0000016234.73023.75' },
        { text: 'Wang, W. (2000). Lyophilization and development of solid protein pharmaceuticals. International Journal of Pharmaceutics, 203(1-2), 1-60.', url: 'https://doi.org/10.1016/S0378-5173(00)00423-3' },
      
        { text: 'Chen Y, Mutukuri TT, Wilson NE, Zhou Q. Pharmaceutical protein solids: drying technology, solid-state characterization and stability. Advanced Drug Delivery Reviews, 2021;172:211-233.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8107147/' },
        { text: 'A Guide to Freeze Drying for the Laboratory. Labconco technical publication.', url: 'https://documents.thermofisher.com/TFS-Assets/ANZ/brochures/labconco-guide-fd.pdf' },
        { text: 'Shi M, McHugh KJ. Strategies for overcoming protein and peptide instability in biodegradable drug delivery systems. Advanced Drug Delivery Reviews, 2023;199:114904.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10526705/' },
      ],
      cta: 'Our <a href="catalog/">research peptides</a> are supplied lyophilized for maximum stability and shelf life.',
      related: ['excipients-in-peptides', 'high-performance-liquid-chromatography-hplc', 'peptide-synthesis', 'bacteriostatic-water-for-peptide-reconstitution'],
    },

    {
      slug: 'excipients-in-peptides',
      title: 'Excipients in Peptides: What Are They and How Are They Used?',
      metaTitle: 'Excipients in Peptides: What Else Is in the Vial',
      metaDescription: 'What are excipients in peptide formulations? Learn how stabilizers, buffers, and cryoprotectants keep research peptides intact during storage and handling.',
      focusKeyword: 'excipients in peptides',
      category: 'Formulation',
      tags: ['excipients', 'peptides', 'formulation', 'stabilizers'],
      date: 'Sep 06, 2025', dateISO: '2025-09-06',
      excerpt: 'The role of stabilizers, buffers and bulking agents in a lyophilized vial.',
      imageAlt: 'Common excipients used to stabilize research peptide formulations',
      body: `
        <p class="lead">Open a vial of lyophilized peptide and, in many cases, most of what you are looking at is not peptide. Excipients are the other ingredients: substances with no activity of their own, added because a peptide alone does not survive freeze-drying and storage particularly well. Knowing what they are changes how you read a mass on a label.</p>

        <h2>Not filler</h2>
        <p>The word excipient sounds like padding, and that is the wrong idea. Each one is there for a specific failure it prevents. Freeze-drying is a harsh process: the material is frozen, most of its water is removed by sublimation, and what is left has to remain intact through storage and then dissolve cleanly. A peptide taken through that unaided can aggregate, oxidise, or come out as a collapsed residue that will not redissolve properly. <a class="cite" href="https://doi.org/10.1016/S0378-5173(00)00423-3" target="_blank" rel="noopener nofollow">(Reference: Wang, 2000)</a></p>

        <h2>Sugars: replacing the water that was removed</h2>
        <p>Trehalose and sucrose are the usual stabilisers, and the mechanism is more interesting than "they protect it". In a dried formulation the sugar forms an amorphous glass: a solid so viscous that molecular motion within it is effectively arrested. The peptide is immobilised in that matrix, and the hydrogen bonds it would have made with water are made with the sugar's hydroxyl groups instead.</p>
        <p>The idea came out of work on organisms that survive near-total desiccation, which accumulate exactly these sugars before drying out. <a class="cite" href="https://doi.org/10.1146/annurev.physiol.60.1.73" target="_blank" rel="noopener nofollow">(Reference: Crowe et al., 1998)</a></p>

        <h2>Mannitol: the one that builds the cake</h2>
        <p>Mannitol does a different job. It is a bulking agent: at the milligram quantities typical of research peptides there is not enough material to form a solid <a href="article/lyophilization-freeze-drying/">cake</a> at all, and mannitol provides the structure that holds its shape after the ice is gone.</p>
        <p>It also behaves differently from the glass formers. Mannitol tends to crystallise rather than stay amorphous, which is good for a firm cake and less good for protecting a molecule that relies on being locked in a glass. Formulations often use both, one for structure and one for stabilisation.</p>

        <h2>Buffers, and the trap inside them</h2>
        <p>Peptides degrade at rates that depend strongly on pH, so a buffer holds the solution where degradation is slowest. The complication is what happens on the way down: as a solution freezes, pure ice separates out and everything else concentrates into the shrinking liquid fraction. If one component of a buffer pair crystallises before the other, the pH of that fraction shifts, sometimes by units, precisely when the material is most vulnerable.</p>
        <p>This is why the choice of buffer for a freeze-dried product is not interchangeable with the choice for a solution.</p>

        <h2>Surfactants: protecting the surfaces</h2>
        <p>Polysorbate 20 and polysorbate 80 appear at very low concentrations, and their job is the interfaces: air-liquid, liquid-solid, the wall of the vial. Peptides and proteins accumulate at surfaces and can unfold or aggregate there, and a surfactant occupies those interfaces first.</p>
        <p>They come with a caveat worth knowing, since polysorbates themselves degrade over time by oxidation and hydrolysis, and their breakdown products are not inert. A stabiliser is not a permanent solution. <a class="cite" href="https://doi.org/10.1002/jps.21190" target="_blank" rel="noopener nofollow">(Reference: Kerwin, 2008)</a></p>

        <h2>Amino acids as excipients</h2>
        <p>Glycine is used as a bulking agent in the same role as mannitol. Arginine is used for a different reason: it suppresses aggregation and improves solubility, which matters for sequences that are reluctant to redissolve. Histidine is both buffer and stabiliser. <a class="cite" href="https://doi.org/10.1007/978-1-4615-0557-0_5" target="_blank" rel="noopener nofollow">(Reference: Carpenter et al., 2002)</a></p>
        <p>These are free amino acids rather than residues in a chain, and they do not appear in the sequence of the compound. Our note on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides and proteins</a> covers that distinction.</p>


        <h2>Some vials contain nothing but the compound</h2>
        <p>None of this means every research peptide is formulated. Plenty are supplied as the purified compound and its counterion and nothing else, particularly where the quantity is large enough to form a cake on its own and the sequence is not especially prone to aggregation.</p>
        <p>Suppliers choose this deliberately, and in some laboratory contexts it is preferred: an excipient that stabilises a vial can also interfere with an assay, contribute to background in an analytical method, or be one more variable to account for. You need to know either way.</p>

        <h2>Why this matters when you weigh the powder</h2>
        <p>Excipients are part of the mass in the vial. So is the counterion left over from purification, and so is absorbed water.</p>
        <p>That is why chromatographic purity and net peptide content answer different questions. A batch can be 99 percent pure by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a>, meaning almost all of the detected peptide was the target, while the peptide is a minority of the weighed powder. Neither figure is wrong. A <a href="article/how-to-read-a-certificate-of-analysis/">certificate</a> that reports only one is incomplete.</p>

        <h2>What a specification should tell you</h2>
        <p>Excipients also explain something that otherwise looks like an inconsistency between two vials of the same compound. One may appear as a firm white cake filling the base and another as a barely visible film, and the difference can be formulation rather than content: a bulking agent builds visible structure, and material supplied without one has nothing to build with. Appearance is not a measure of how much is there.</p>

        <p>For research material the useful question is whether the formulation is stated. A vial described only by its compound and its milligram figure leaves open whether that figure is peptide or total solids, and whether anything else is present at all. Where it matters for the work, the specification should say.</p>
      `,
      faq: [
        {
          "q": "What are excipients in a peptide formulation?",
          "a": "Substances added alongside the peptide that have no activity of their own. They exist to prevent specific failures during freeze-drying and storage: aggregation, oxidation, collapse of the cake, or difficulty redissolving."
        },
        {
          "q": "Why are sugars such as trehalose used?",
          "a": "They form an amorphous glass in the dried state, a solid so viscous that molecular motion is effectively arrested, and they hydrogen bond with the peptide in place of the water that was removed. The strategy comes from organisms that survive near-total desiccation."
        },
        {
          "q": "What does mannitol do?",
          "a": "It is a bulking agent. At milligram quantities there is not enough material to form a solid cake, and mannitol provides the structure. It forms crystals where a sugar forms a glass, so it builds a firm cake but stabilises less."
        },
        {
          "q": "Why does the buffer matter in a freeze-dried peptide?",
          "a": "Because as a solution freezes, pure ice separates and everything else concentrates into a shrinking liquid fraction. If one component of a buffer pair crystallises before the other, the pH of that fraction can shift by units, exactly when the material is most vulnerable."
        },
        {
          "q": "Do excipients affect the amount of peptide I have?",
          "a": "Yes. Excipients are part of the mass in the vial, as are the counterion from purification and absorbed water. This is why chromatographic purity and net peptide content are different figures and why a complete certificate reports both."
        },
        {
          "q": "Are the amino acids used as excipients part of the peptide?",
          "a": "No. Arginine, glycine and histidine can be present as free amino acids for bulking, solubility or buffering. They are separate molecules and do not appear in the sequence of the compound."
        }
      ],
      references: [
        {
          "text": "Wang, W. (2000). Lyophilization and development of solid protein pharmaceuticals. International Journal of Pharmaceutics, 203(1-2), 1-60.",
          "url": "https://doi.org/10.1016/S0378-5173(00)00423-3"
        },
        {
          "text": "Crowe, J.H., Carpenter, J.F., &amp; Crowe, L.M. (1998). The role of vitrification in anhydrobiosis. Annual Review of Physiology, 60, 73-103.",
          "url": "https://doi.org/10.1146/annurev.physiol.60.1.73"
        },
        {
          "text": "Kerwin, B.A. (2008). Polysorbates 20 and 80 used in the formulation of protein biotherapeutics: structure and degradation pathways. Journal of Pharmaceutical Sciences, 97(8), 2924-2935.",
          "url": "https://doi.org/10.1002/jps.21190"
        },
        {
          "text": "Carpenter, J.F., Chang, B.S., Garzon-Rodriguez, W., &amp; Randolph, T.W. (2002). Rational design of stable lyophilized protein formulations: theory and practice. In Rational Design of Stable Protein Formulations (Pharmaceutical Biotechnology, pp. 109-133). Springer.",
          "url": "https://doi.org/10.1007/978-1-4615-0557-0_5"
        },
        {
          "text": "Rowe, R.C., Sheskey, P.J., &amp; Owen, S.C. (Eds.). (2006). Handbook of Pharmaceutical Excipients (5th ed.). Pharmaceutical Press."
        }
      ],
      cta: 'Browse our <a href="catalog/">research peptides</a> formulated for stability and reproducible results.',
      related: ['lyophilization-freeze-drying', 'peptide-synthesis', 'high-performance-liquid-chromatography-hplc'],
    },

    {
      slug: 'peptide-synthesis',
      title: 'Peptide Synthesis: How Peptides Are Made in the Lab',
      metaTitle: 'Peptide Synthesis: From SPPS to a 99% HPLC Batch',
      metaDescription: 'How research peptides are made: solid-phase synthesis, cleavage and purification by HPLC, and why the final solid is not pure peptide by mass.',
      focusKeyword: 'peptide synthesis',
      category: 'Lab Processes',
      tags: ['peptide synthesis', 'SPPS', 'peptides', 'chemistry'],
      date: 'Jul 22, 2025', dateISO: '2025-07-22',
      excerpt: 'From the peptide bond to final purification, how synthetic peptides are built and verified.',
      imageAlt: 'Solid-phase peptide synthesis on resin beads in a laboratory',
      body: `
        <p class="lead">A synthetic peptide is built one residue at a time, in a fixed order, with a wash between every step. The method that makes this practical is solid-phase peptide synthesis, and understanding it explains several things that later show up on a certificate of analysis: why the powder contains a counterion, why some sequences cost more than others, and why purity has to be measured rather than assumed.</p>

        <h2>The bond that has to form, over and over</h2>
        <p>A peptide bond forms when the carboxyl group of one amino acid joins the amino group of the next, releasing water. Left alone the reaction is slow and unselective, so in practice the carboxyl group is chemically activated first, and every group that must not react is blocked with a protecting group. Each cycle of a synthesis is a small controlled version of that problem. For the underlying vocabulary, see our guide to <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides and proteins</a>.</p>

        <h2>Why anchoring the chain to a bead changed everything</h2>
        <p>In solution, every step of a synthesis ends with a purification, because the product has to be separated from everything else in the flask. Attaching the growing chain to an insoluble resin removes that problem. The peptide stays on the bead, and reagents and by-products are washed away through a filter. The idea was introduced in 1963 and it is the reason peptide synthesis can be automated at all. <a class="cite" href="https://doi.org/10.1021/ja00897a025" target="_blank" rel="noopener nofollow">(Reference: Merrifield, 1963)</a> <a class="cite" href="https://doi.org/10.1002/anie.198507993" target="_blank" rel="noopener nofollow">(Reference: Merrifield, 1985)</a></p>


        <h2>The resin decides how the chain ends</h2>
        <p>The first residue is not attached to the bead directly but through a linker, and the linker chemistry determines what the C-terminus looks like once the peptide is cut free. One linker releases a free carboxylic acid; another releases an amide. That is not a detail of manufacturing trivia: the two forms differ in mass by about one dalton and they are different compounds, so a specification that says the C-terminus is amidated is describing something a mass measurement can confirm or contradict.</p>
        <p>The linker also sets how harsh the cleavage has to be. Some are designed to release the peptide under mild conditions, which is useful when the sequence carries groups that would not survive a strong acid.</p>

        <h2>The cycle</h2>
        <p>Synthesis runs from the C-terminus toward the N-terminus, which is the opposite direction to how a ribosome builds a protein. Each residue added repeats the same four steps:</p>
        <ol>
          <li><b>Deprotection.</b> The temporary protecting group on the chain's free end is removed, exposing an amine ready to react.</li>
          <li><b>Washing.</b> Reagents and cleaved protecting groups are flushed out.</li>
          <li><b>Coupling.</b> The next amino acid, activated at its carboxyl group, forms the new bond.</li>
          <li><b>Washing again.</b> Excess reagent leaves before the next cycle starts.</li>
        </ol>
        <p>A twenty-residue peptide is that loop run twenty times. Nothing is purified in between.</p>

        <h2>Fmoc and Boc</h2>
        <p>Two protecting-group strategies dominate, named after the group that guards the chain's N-terminus between cycles. Boc chemistry removes it with acid. Fmoc chemistry removes it with a mild base, which means the side-chain protecting groups, removed later with acid, are untouched during the synthesis. That separation of conditions is what makes Fmoc the common choice today. <a class="cite" href="https://doi.org/10.1021/jo00795a005" target="_blank" rel="noopener nofollow">(Reference: Carpino &amp; Han, 1972)</a> <a class="cite" href="https://doi.org/10.1093/oso/9780199637256.001.0001" target="_blank" rel="noopener nofollow">(Reference: Chan &amp; White, 1999)</a></p>

        <h2>Coupling reagents and the cost of an incomplete step</h2>
        <p>The reagent that activates each amino acid decides how completely the coupling goes. This matters more than it sounds. If a coupling is 99 percent complete, one chain in a hundred is left one residue short, and that shortened chain continues through every remaining cycle. The result is a deletion sequence: a molecule almost identical to the target, differing by one residue. Better activating reagents exist precisely to push each step closer to completion. <a class="cite" href="https://doi.org/10.1021/ja00063a082" target="_blank" rel="noopener nofollow">(Reference: Carpino, 1993)</a></p>
        <p>Those deletion sequences are the impurities a purity method has to resolve, and they are the reason a small peak sitting very close to the main one in a chromatogram is worth looking at.</p>

        <h2>Checking a step before moving on</h2>
        <p>Because nothing is purified between cycles, a failed coupling is best caught immediately. A simple colour test for free amine groups on the resin has been used for this since 1970: beads that still carry unreacted amines change colour, indicating the coupling did not go to completion. <a class="cite" href="https://doi.org/10.1016/0003-2697(70)90146-6" target="_blank" rel="noopener nofollow">(Reference: Kaiser et al., 1970)</a></p>

        <h2>Cleavage, and where the counterion comes from</h2>
        <p>When the sequence is complete, the peptide is cut from the resin and the side-chain protecting groups are removed, usually in one acidic step with trifluoroacetic acid and a mixture of scavengers that mop up the reactive fragments released along the way. This is the first place trifluoroacetate enters the picture. It appears again during <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase purification</a>, and some of it stays with the material, which is why a peptide is typically isolated as a salt and why part of the weighed powder is counterion rather than peptide.</p>

        <h2>Sequences that fight back</h2>
        <p>Not every sequence behaves. Chains rich in hydrophobic residues can aggregate on the resin, folding against themselves so that the reactive end is physically blocked and couplings stall. Long syntheses compound the problem, since every extra cycle is another chance for a small loss. Standard procedures and the modifications used for difficult sequences are well documented. <a class="cite" href="https://doi.org/10.1038/nprot.2007.454" target="_blank" rel="noopener nofollow">(Reference: Coin et al., 2007)</a></p>
        <p>Beyond a certain length, stepwise synthesis stops being practical at all. The usual answer is to build two shorter fragments and join them chemically, an approach that made fully synthetic proteins possible. <a class="cite" href="https://doi.org/10.1126/science.7973629" target="_blank" rel="noopener nofollow">(Reference: Dawson et al., 1994)</a></p>

        <h2>What comes off the resin is not the finished product</h2>
        <p>Crude material contains the target, deletion sequences, incompletely deprotected chains and the remains of the cleavage cocktail. It is purified, normally by reversed-phase chromatography, and only then is it characterised: a chromatographic run establishes how much of it is the target, and <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> establishes that the target is the intended molecule. Those two results, tied to a batch number, are what a <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> reports, and what you can check against a <a href="verify/">vial in your hand</a>.</p>
      `,
      faq: [
        {
          "q": "How are research peptides made?",
          "a": "Almost always by solid-phase peptide synthesis. The first residue is anchored to an insoluble resin and the chain is extended one amino acid at a time through repeated cycles of deprotection, washing and coupling. The finished chain is then cleaved from the resin and purified."
        },
        {
          "q": "Why is the peptide attached to a resin?",
          "a": "Because it removes the need to purify after every step. The chain stays on the solid support while reagents and by-products are washed away through a filter, which is what makes the process repeatable and automatable."
        },
        {
          "q": "What is the difference between Fmoc and Boc synthesis?",
          "a": "They differ in how the temporary N-terminal protecting group is removed. Boc uses acid; Fmoc uses a mild base, leaving the acid-labile side-chain protection untouched until the end. That separation of conditions makes Fmoc the more common choice."
        },
        {
          "q": "What is a deletion sequence?",
          "a": "A chain that missed one residue because a coupling step did not go to completion, then continued through the remaining cycles. It is almost identical to the target and differs by a single residue, which makes it the impurity a purity method most has to resolve."
        },
        {
          "q": "Why does a synthetic peptide contain trifluoroacetate?",
          "a": "Trifluoroacetic acid is used to cleave the peptide from the resin and again as an additive during reversed-phase purification. Some of it remains associated with the material, so the peptide is usually isolated as a salt and part of the weighed powder is counterion."
        },
        {
          "q": "Why are some peptides harder to synthesise than others?",
          "a": "Hydrophobic sequences can aggregate on the resin, physically blocking the reactive end so couplings stall. Length also compounds small losses, since every additional cycle is another opportunity for an incomplete step."
        }
      ],
      references: [
        {
          "text": "Merrifield, R.B. (1963). Solid Phase Peptide Synthesis. I. The Synthesis of a Tetrapeptide. Journal of the American Chemical Society, 85(14), 2149-2154.",
          "url": "https://doi.org/10.1021/ja00897a025"
        },
        {
          "text": "Merrifield, R.B. (1985). Solid Phase Synthesis (Nobel Lecture). Angewandte Chemie International Edition, 24(10), 799-810.",
          "url": "https://doi.org/10.1002/anie.198507993"
        },
        {
          "text": "Carpino, L.A., &amp; Han, G.Y. (1972). The 9-fluorenylmethoxycarbonyl amino-protecting group. The Journal of Organic Chemistry, 37(22), 3404-3409.",
          "url": "https://doi.org/10.1021/jo00795a005"
        },
        {
          "text": "Chan, W.C., &amp; White, P.D. (1999). Fmoc Solid Phase Peptide Synthesis: A Practical Approach. Oxford University Press.",
          "url": "https://doi.org/10.1093/oso/9780199637256.001.0001"
        },
        {
          "text": "Carpino, L.A. (1993). 1-Hydroxy-7-azabenzotriazole. An efficient peptide coupling additive. Journal of the American Chemical Society, 115(10), 4397-4398.",
          "url": "https://doi.org/10.1021/ja00063a082"
        },
        {
          "text": "Kaiser, E., Colescott, R.L., Bossinger, C.D., &amp; Cook, P.I. (1970). Color test for detection of free terminal amino groups in the solid-phase synthesis of peptides. Analytical Biochemistry, 34(2), 595-598.",
          "url": "https://doi.org/10.1016/0003-2697(70)90146-6"
        },
        {
          "text": "Coin, I., Beyermann, M., &amp; Bienert, M. (2007). Solid-phase peptide synthesis: from standard procedures to the synthesis of difficult sequences. Nature Protocols, 2(12), 3247-3256.",
          "url": "https://doi.org/10.1038/nprot.2007.454"
        },
        {
          "text": "Dawson, P.E., Muir, T.W., Clark-Lewis, I., &amp; Kent, S.B.H. (1994). Synthesis of proteins by native chemical ligation. Science, 266(5186), 776-779.",
          "url": "https://doi.org/10.1126/science.7973629"
        }
      ],
      cta: 'Explore our catalog of lab-synthesized <a href="catalog/">research peptides</a>, verified by HPLC and mass spectrometry.',
      related: ['amino-acids-peptides-proteins-difference', 'high-performance-liquid-chromatography-hplc', 'mass-spectrometry-peptide-research', 'cyclic-vs-linear-peptides'],
    },

    {
      slug: 'what-is-mots-c',
      title: 'What Is MOTS-c?',
      metaTitle: 'MOTS-c: The Mitochondrial-Derived Peptide, Explained',
      metaDescription: 'What is MOTS-c? Learn about this mitochondrial-derived peptide and how it is studied in metabolism, cellular stress, aging, and exercise research.',
      focusKeyword: 'what is MOTS-c',
      category: 'Peptide Research',
      tags: ['MOTS-c', 'mitochondrial peptide', 'metabolism', 'peptide research'],
      date: 'May 02, 2025', dateISO: '2025-05-02',
      excerpt: 'A mitochondrial-derived peptide and the areas of metabolism and aging research it appears in.',
      imageAlt: 'MOTS-c mitochondrial-derived peptide studied in metabolism and aging research',
      body: `
        <p class="lead">MOTS-c is a small peptide encoded within the mitochondrial genome, unlike most peptides that come from nuclear DNA. It is studied as a mitochondrial-derived signaling molecule involved in metabolism, cellular stress responses, aging, and exercise.</p>

        <h2>What is MOTS-c?</h2>
        <p>MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA type-c) is a small peptide encoded within the mitochondrial genome. Unlike most peptides, which are coded in nuclear DNA, MOTS-c originates from mitochondrial DNA. That origin puts the organelle in signaling as well as energy metabolism, and it opened interest in other mitochondrial-derived peptides as regulators of cellular processes. To understand where peptides fit among biomolecules, see <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a>.${cite('Reference: Lee et al., 2015', 'https://doi.org/10.1016/j.cmet.2015.09.001')}</p>

        <h2>How has MOTS-c been studied?</h2>
        <p>Research on MOTS-c spans in vitro, animal, and human models:</p>
        <ul>
          <li><b>Cell culture studies</b> have examined how MOTS-c influences metabolic pathways, including glucose utilization and stress responses.</li>
          <li><b>Animal models</b> have explored its role in energy balance, skeletal muscle activity, and mitochondrial function.</li>
          <li><b>Human studies</b> have measured circulating MOTS-c levels in contexts such as exercise and aging, showing how the peptide behaves under different physiological states.</li>
        </ul>
        <p>${cite('Reference: Reynolds et al., 2021', 'https://doi.org/10.3389/fendo.2021.678778').trim()}</p>

        <h2>Key research observations</h2>
        <p>Across published studies, several observations about MOTS-c have emerged:</p>
        <ul>
          <li><b>Metabolic regulation:</b> MOTS-c interacts with pathways related to AMPK signaling and folate metabolism.</li>
          <li><b>Stress response:</b> MOTS-c levels change under cellular and environmental stress, suggesting a role in adaptive responses.</li>
          <li><b>Age-related patterns:</b> research notes that MOTS-c concentrations decline with age in some tissues and circulating samples.</li>
          <li><b>Exercise association:</b> human studies have measured increases in MOTS-c after acute bouts of physical activity.</li>
        </ul>
        <p>${cite('Reference: Reynolds et al., 2021', 'https://doi.org/10.1038/s41467-020-20790-0').trim()}</p>

        <h2>Common research applications</h2>
        <p>MOTS-c is currently studied in laboratory settings to:</p>
        <ul>
          <li>Investigate mitochondrial and nuclear communication pathways.</li>
          <li>Analyze changes in peptide signaling during metabolic stress.</li>
          <li>Explore mitochondrial contributions to age-related cellular changes.</li>
          <li>Develop models of exercise-induced signaling molecules.</li>
        </ul>
        <p>Peptides like MOTS-c used in research are produced by <a href="article/peptide-synthesis/">peptide synthesis</a> and verified for purity.${cite('Reference: Kim et al., 2018', 'https://doi.org/10.1016/j.cmet.2018.02.001')}</p>
      `,
      faq: [
        { q: 'What is MOTS-c?', a: 'MOTS-c is a small mitochondrial-derived peptide encoded in mitochondrial DNA. It is studied as a signaling molecule involved in metabolism, stress response, aging, and exercise.' },
        { q: 'Where does MOTS-c come from?', a: 'Unlike most peptides, which are encoded in nuclear DNA, MOTS-c is encoded within the mitochondrial genome, specifically the 12S rRNA region.' },
        { q: 'What does MOTS-c do in research studies?', a: 'Studies associate MOTS-c with AMPK signaling and folate metabolism, changes under cellular stress, declines with age in some tissues, and increases after exercise.' },
      ],
      references: [
        { text: 'Lee, C., et al. (2015). The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance. Cell Metabolism, 21(3), 443-454.', url: 'https://doi.org/10.1016/j.cmet.2015.09.001' },
        { text: 'Kim, K.H., et al. (2018). Mitochondrial peptides as regulators of metabolism. Cell Metabolism, 28(3), 330-341.', url: 'https://doi.org/10.1016/j.cmet.2018.02.001' },
        { text: 'Reynolds, J.C., et al. (2021). MOTS-c: a mitochondrial signal regulating metabolism and aging. Frontiers in Endocrinology, 12, 678778.', url: 'https://doi.org/10.3389/fendo.2021.678778' },
        { text: 'Reynolds, J.C., et al. (2021). MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis. Nature Communications, 12, 470.', url: 'https://doi.org/10.1038/s41467-020-20790-0' },
      ],
      cta: 'Explore our <a href="catalog/?q=mots-c">MOTS-c research peptide</a> and related mitochondrial peptides for laboratory study.',
      related: ['amino-acids-peptides-proteins-difference', 'peptide-synthesis', 'what-is-nad-plus'],
    },
  ];

  window.REA.POSTS = POSTS;
  window.REA.BLOG_DISCLAIMER = DISCLAIMER;
})();
