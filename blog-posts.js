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
        <p class="lead">A research peptide can be verified, pure, and correctly identified, and still be wasted by careless storage. The good news is that storage is not complicated. It mostly comes down to understanding that a dry peptide and a dissolved one are two different situations, and the label on the vial is the final word.</p>

        <h2>Lyophilized powder is the stable form</h2>
        <p>Peptides usually arrive <a href="article/lyophilization-freeze-drying/">lyophilized</a>, meaning freeze-dried into a dry powder or thin cake. In that state they are relatively forgiving, because the water that drives most degradation has been removed. Kept cool, dry, and away from light, a lyophilized peptide holds up well. The main enemy is moisture, which is why a cold vial should be allowed to warm before it is opened, so condensation does not form inside.</p>

        <h2>A reconstituted solution is less stable</h2>
        <p>Once a peptide is dissolved into a liquid, the clock speeds up. A solution is more prone to degradation than the dry powder, so it usually goes into refrigeration and is protected from light. Using bacteriostatic water helps, since its preservative supports drawing from the vial more than once, but even then a solution is not something to leave sitting at room temperature.</p>

        <h2>Small habits that protect a batch</h2>
        <ul>
          <li>Let a cold vial reach room temperature before opening to avoid condensation.</li>
          <li>Keep vials away from direct light.</li>
          <li>Label a reconstituted vial with the date and concentration so nothing is guessed later.</li>
          <li>Minimize how long a solution spends warm or exposed.</li>
        </ul>

        <h2>The label is the final word</h2>
        <p>General guidance is useful, but the exact storage conditions for a given compound belong on its vial label and its certificate of analysis. Some peptides have specific temperature requirements, and those instructions override any rule of thumb. If you want to confirm a vial is genuine before you rely on it, you can check its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease. This guide describes laboratory handling only.</p>
      `,
      faq: [
        { q: 'How should lyophilized research peptides be stored?', a: 'Kept cool, dry, and away from light, a lyophilized (freeze-dried) peptide is relatively stable because the water that drives degradation has been removed. Moisture is the main risk, so let a cold vial warm before opening to avoid condensation.' },
        { q: 'Does a reconstituted peptide need different storage?', a: 'Yes. Once dissolved, a peptide solution is less stable than the dry powder, so it is usually refrigerated and protected from light. Even with bacteriostatic water, a solution should not be left at room temperature.' },
        { q: 'What is the most reliable storage guidance?', a: 'The exact conditions on the vial label and certificate of analysis, which override any general rule. Some peptides have specific temperature requirements that should be followed for that compound.' },
      ],
      references: [],
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
      excerpt: 'What the g/mol figure next to a peptide actually means, and where it quietly matters.',
      imageAlt: 'Molecular weight of a research peptide shown with its molecular formula',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Every peptide listing carries a molecular weight, usually a number followed by g/mol. It looks like a spec you can safely ignore, but it turns out to sit at the center of two things that matter in the lab: confirming a peptide is the right one, and working out how to reconstitute it.</p>

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
      excerpt: 'The unique identifier next to every compound name, and how to actually read it.',
      imageAlt: 'CAS registry number shown on a research compound label',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Next to almost every compound on a research listing sits a string of digits labeled CAS. It is easy to skip, but that little number is one of the most reliable ways to know exactly which chemical you are looking at. Names can be ambiguous. A CAS number is not.</p>

        <h2>What is a CAS number?</h2>
        <p>A CAS number is a unique identifier assigned to a chemical substance by the Chemical Abstracts Service. Each distinct substance gets its own number, and no two substances share one. That is the whole value: a compound might have several common names, an abbreviation, and a long systematic name, but it has exactly one CAS number. It cuts through the naming confusion.</p>

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
      excerpt: 'A field-by-field look at what a COA actually reports, so the document stops being a mystery.',
      imageAlt: 'Peptide certificate of analysis document with purity and identity results',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">A certificate of analysis, or COA, is the document that turns a claim on a label into something checkable. For research peptides it is the single most useful piece of paper you will handle, and yet most people glance at the purity number and move on. Here is how to read the rest of it.</p>

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
          <li><b>Net peptide content:</b> how much of the powder is actually peptide rather than salt and water.</li>
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
        <p>A certificate is a claim by whoever issued it, so independent testing matters because it separates the party making the claim from the party selling the material. Laboratories working to a recognised competence standard are assessed against defined criteria for competence and impartiality, and accreditation covers a specific list of methods rather than testing in general. The useful question is not only what the number says, but who produced it and under which method.</p>

        <h2>Red flags on a certificate</h2>
        <ul>
          <li><b>No batch or lot number,</b> or one that does not match the vial: the document describes someone else's material.</li>
          <li><b>No analysis date,</b> so the results cannot be tied to a point in that batch's life.</li>
          <li><b>No named methods.</b> "Purity: 99%" with no procedure behind it is a statement, not a result.</li>
          <li><b>No laboratory identity or signature,</b> which leaves no author to stand behind it.</li>
          <li><b>A low-resolution image</b> in which the chromatogram axes and header cannot be read.</li>
          <li><b>The same document for every product,</b> which means it is not batch-specific at all.</li>
        </ul>
        <p>At Codex Research every batch is tested by an independent laboratory using HPLC and mass spectrometry, the certificate is specific to that batch, and the full document is sent on request before you pay. The batch number on the label follows the format CDX-YYMM-NNN, and that string is what ties the vial to its paperwork. For checking a vial you already have, see our guide to <a href="article/verify-research-peptide-batch-coa-panama/">verifying a batch and its COA</a>.</p>

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
      excerpt: 'What a purity percentage really measures, and what it does not, when you read it on a COA.',
      imageAlt: 'HPLC chromatogram used to measure research peptide purity',
      image: 'assets/og-default.png',
      body: `
        <p class="lead">Almost every research peptide listing mentions a purity figure, often 99 percent by HPLC. It is one of the most quoted numbers in the field and one of the least explained. So it is worth spelling out what that number is measuring, and just as importantly, what it is not.</p>

        <h2>How purity is measured</h2>
        <p>Purity is usually determined by <a href="article/high-performance-liquid-chromatography-hplc/">high-performance liquid chromatography</a>, or HPLC. In simple terms, the sample is pushed through a column that separates its components, and each component shows up as a peak on a chart called a chromatogram. The target peptide is the main peak. Purity is the area of that main peak expressed as a percentage of all the peaks combined. So 99 percent means the target peptide accounts for about 99 percent of what the method detected.</p>

        <h2>What the number tells you</h2>
        <p>A high HPLC purity figure says that very little else showed up alongside the peptide. Small side peaks can come from related peptide fragments, incomplete sequences, or leftover material from synthesis. A clean chromatogram with one dominant peak is a good sign that the batch is mostly what it claims to be. That is genuinely useful information.</p>

        <h2>What it does not tell you</h2>
        <p>Purity is not identity. HPLC tells you how much of the sample is one main component, but it does not by itself prove that component is the right peptide. That is why identity is confirmed separately, usually by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> comparing the measured mass with the expected one. A trustworthy certificate of analysis reports both: purity from HPLC and identity from mass spectrometry. One number without the other is only half the picture.</p>

        <h2>Why it matters</h2>
        <p>For research, consistency depends on knowing what is actually in the vial. A purity figure backed by an identity check is what lets one batch be compared with another. If you want to confirm a Codex Research vial is genuine, you can check its <a href="verify/">batch number</a>, and its full certificate of analysis is available on request.</p>

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
        <p class="lead">Read a few peptide descriptions and two words show up constantly: agonist and antagonist. They sound like jargon, but they answer a very basic question about any compound that acts on a receptor. Does it switch the receptor on, or does it get in the way? That is the whole distinction.</p>

        <h2>What a receptor does</h2>
        <p>A receptor is a protein that receives a signal. When the right molecule binds to it, the receptor changes shape and triggers some activity inside the cell. Think of it as a lock waiting for a key. The interesting part is that not every key turns the lock, and some keys jam it.</p>

        <h2>Agonist: it activates</h2>
        <p>An agonist is a compound that binds a receptor and activates it, producing the response the receptor is built to give. Most of the peptides we describe are agonists. <a href="article/what-is-tirzepatide/">Tirzepatide</a> is an agonist at incretin receptors, <a href="article/what-is-ipamorelin/">ipamorelin</a> is an agonist at the ghrelin receptor, and <a href="article/what-is-pt-141/">PT-141</a> is an agonist at melanocortin receptors. In each case the word means the same thing: it turns the receptor on.</p>

        <h2>Antagonist: it blocks</h2>
        <p>An antagonist binds a receptor but does not activate it. Instead it occupies the site and prevents an agonist from doing its job. It is the key that fits the lock but will not turn, and while it sits there the real key cannot get in. Antagonists are studied as tools for asking what happens when a pathway is blocked rather than switched on.</p>

        <h2>Why the difference matters</h2>
        <p>When a research peptide is labeled a "receptor agonist," that single word tells you it is meant to activate its target, not block it. That is why the term appears in almost every compound description, including throughout our own catalog. Knowing agonist from antagonist turns those descriptions from jargon into plain information.</p>

        <h2>Research use only</h2>
        <p>This article is background pharmacology for laboratory context. All products sold by Codex Research are strictly for research and development, are not for human or animal consumption, and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What is the difference between an agonist and an antagonist?', a: 'An agonist binds a receptor and activates it, producing the receptor response. An antagonist binds the same receptor but does not activate it, blocking an agonist from acting. One switches the receptor on, the other gets in the way.' },
        { q: 'Are most research peptides agonists or antagonists?', a: 'Most of the research peptides described in this catalog are agonists, meaning they are studied for how they activate a target receptor. The label "receptor agonist" in a product description signals exactly that.' },
        { q: 'Why does the agonist vs antagonist distinction matter?', a: 'It tells you what a compound is meant to do at its receptor. When a peptide is called a receptor agonist, it activates the target; an antagonist would block it. The distinction turns technical descriptions into clear information.' },
      ],
      references: [],
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
        <p class="lead">The phrase "growth hormone secretagogue" is a mouthful, but it is really just a label for a category. When a research peptide like <a href="article/what-is-ipamorelin/">ipamorelin</a> gets described this way, it is being placed in a group defined by what it targets rather than by any one effect. Here is what the label actually means.</p>

        <h2>What the term means</h2>
        <p>A secretagogue is anything that prompts a cell to release, or secrete, a substance. So a growth hormone secretagogue is a compound studied for how it engages the signaling that leads to growth hormone release. Many of the peptides in this class act as agonists at the ghrelin receptor, which is also called the growth hormone secretagogue receptor. The receptor name and the compound class are two sides of the same coin.</p>

        <h2>The ghrelin receptor connection</h2>
        <p>The ghrelin receptor sits upstream of pathways connected to growth hormone signaling. A secretagogue that activates it is being used, in a research setting, as a way to probe that pathway. Different compounds in the class engage the receptor with different profiles, and that variation is a big part of what researchers compare. An agonist, in this context, is simply a compound that activates a receptor rather than blocking it.</p>

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
        <p>Research peptides in this space are often defined by how many of these receptors they hit. A GLP-1-only agonist engages one. A dual agonist like <a href="article/what-is-tirzepatide/">tirzepatide</a> engages both GLP-1 and GIP. A triple agonist like <a href="article/what-is-retatrutide/">retatrutide</a> adds glucagon on top. Understanding that GLP-1 and GIP are genuinely different receptors is what makes those distinctions make sense.</p>

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
        <p>A copper peptide is a peptide, usually very short, that binds a copper ion with high affinity. Copper is a trace element the body uses in many enzymes, and certain amino acid sequences happen to grab it and hold it in a stable arrangement. When researchers talk about a copper peptide, they are really talking about that peptide-plus-copper unit, not the bare sequence. For the basics of what a peptide is to begin with, see <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a>.</p>

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
        <p class="lead">When a lyophilized peptide needs a liquid to dissolve into, the default answer in most research settings is bacteriostatic water. It is not the only option, but it is the one people reach for first, and there is a specific reason why. The short version is that it lets a vial be used more than once.</p>

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
        <p class="lead">NAD+ is the odd one out in this series. It is not a peptide at all, it is a coenzyme, and it sits at the center of how cells manage energy. It shows up in research catalogs alongside peptides because it is a defined molecule that laboratories study in the same careful, batch-verified way. Here is what it actually is.</p>

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
        <p class="lead">PT-141 goes by two names, which trips people up. PT-141 is the research shorthand, and bremelanotide is the same molecule. It belongs to a different family than the metabolic peptides in this series: instead of incretin receptors, it works on the melanocortin system. That is where all of its research interest sits.</p>

        <h2>What is PT-141?</h2>
        <p>PT-141, also called bremelanotide, is a synthetic peptide that acts as an agonist at melanocortin receptors. It is a cyclic peptide, and it is structurally related to an earlier melanocortin compound from which it was derived. Its CAS number is 189691-06-3 and its molecular formula is C50H68N14O10. Like the other compounds we cover, it is made by <a href="article/peptide-synthesis/">solid-phase synthesis</a> and defined by its certificate of analysis rather than by its name.</p>

        <h2>The melanocortin system</h2>
        <p>Melanocortin receptors are a family of receptors involved in a range of signaling processes, from pigmentation to neurobehavioral pathways. PT-141 is studied as a tool for probing these receptors, particularly the subtypes tied to central signaling. Because the melanocortin family has several members, a recurring research question is how selectively a given agonist acts across them.</p>

        <h2>How is PT-141 studied?</h2>
        <p>In the laboratory, PT-141 appears in work on:</p>
        <ul>
          <li><b>Receptor binding:</b> how the peptide interacts with melanocortin receptor subtypes.</li>
          <li><b>Signaling pathways:</b> models of the downstream activity these receptors trigger.</li>
          <li><b>Neurobehavioral models:</b> research on central melanocortin signaling in animal systems.</li>
        </ul>
        <p>These are preclinical, model-based studies. PT-141 is supplied strictly as a research compound, and nothing here describes use in people or animals.</p>

        <h2>Handling and verification</h2>
        <p>PT-141 is a cyclic peptide, so confirming its identity matters as much as its purity. It is checked by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, ships lyophilized, and comes with its certificate of analysis. Any Codex Research vial can be confirmed by its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including PT-141, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'Are PT-141 and bremelanotide the same thing?', a: 'Yes. PT-141 is the research shorthand and bremelanotide is the same synthetic peptide. It is a melanocortin receptor agonist used strictly for laboratory research.' },
        { q: 'What receptor does PT-141 act on?', a: 'PT-141 acts as an agonist at melanocortin receptors, a family involved in signaling processes including pigmentation and central neurobehavioral pathways. Research often focuses on how selectively it acts across the receptor subtypes.' },
        { q: 'How is PT-141 verified for research?', a: 'Each batch is tested by HPLC for purity and mass spectrometry for identity and ships with a certificate of analysis. Codex Research vials can also be checked by batch number at codexresearchlab.com/verify/.' },
      ],
      references: [
        { text: 'Bremelanotide (PT-141) compound summary. PubChem, National Library of Medicine (CID 9941379).', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/9941379' },
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
        <p class="lead">Ipamorelin comes up a lot in discussions of growth hormone secretagogues, and the word researchers keep attaching to it is "selective." It is a small synthetic peptide designed to act at one receptor with limited activity elsewhere. That focus is the main reason it is used as a research tool rather than a blunt instrument.</p>

        <h2>What is ipamorelin?</h2>
        <p>Ipamorelin is a synthetic pentapeptide, meaning it is built from five amino acids. It is classed as a growth hormone secretagogue and acts as an agonist at the ghrelin receptor, also called the growth hormone secretagogue receptor. Its CAS number is 170851-70-4 and its molecular formula is C38H49N9O5. It is made by <a href="article/peptide-synthesis/">solid-phase peptide synthesis</a> and characterized by its certificate of analysis.</p>

        <h2>What does "selective" mean here?</h2>
        <p>The ghrelin receptor sits upstream of pathways connected to growth hormone signaling. Some secretagogues activate that pathway but also touch other hormone systems. Ipamorelin is studied precisely because it shows a more selective profile in laboratory models, which makes it easier to attribute an observed effect to one receptor rather than several. For a research tool, that cleanliness is the point.</p>

        <h2>How is ipamorelin studied?</h2>
        <p>Laboratory research involving ipamorelin tends to focus on:</p>
        <ul>
          <li><b>Ghrelin receptor pharmacology:</b> how the peptide binds and activates its target receptor.</li>
          <li><b>Growth hormone signaling:</b> models of the secretagogue pathway and its regulation.</li>
          <li><b>Selectivity comparisons:</b> contrasting ipamorelin with less selective secretagogues.</li>
        </ul>
        <p>These are preclinical, model-based observations. Ipamorelin is supplied strictly as a research compound, and this article does not describe use in people or animals.</p>

        <h2>Handling and verification</h2>
        <p>As with any short peptide, what matters in practice is the purity of the batch in front of you. Ipamorelin is verified by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, ships lyophilized, and comes with its certificate of analysis. A Codex Research vial can be checked by its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including ipamorelin, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What kind of peptide is ipamorelin?', a: 'Ipamorelin is a synthetic pentapeptide (five amino acids) classed as a growth hormone secretagogue. It acts as an agonist at the ghrelin receptor and is used strictly for laboratory research.' },
        { q: 'Why is ipamorelin called selective?', a: 'In laboratory models it shows a more focused activity at the ghrelin receptor with limited activity at other hormone systems, which makes it useful for attributing an observed effect to a single receptor.' },
        { q: 'How is ipamorelin verified for research?', a: 'Each batch is tested by HPLC for purity and mass spectrometry for identity and ships with a certificate of analysis. Codex Research vials can also be checked by batch number at codexresearchlab.com/verify/.' },
      ],
      references: [
        { text: 'Ipamorelin compound summary. PubChem, National Library of Medicine (CID 9831659).', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/9831659' },
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
        <p class="lead">Most of the peptides in this series are large, engineered molecules. GHK-Cu is the opposite. It is one of the smallest peptides you will come across, just three amino acids bound to a copper ion, and it occurs naturally in the body. That combination of a short sequence and a bound metal is what makes it interesting to study.</p>

        <h2>What is GHK-Cu?</h2>
        <p>GHK-Cu is a copper complex of the tripeptide glycyl-L-histidyl-L-lysine, which is where the letters G, H, and K come from. The "Cu" is the chemical symbol for copper. Its CAS number is 89030-95-5 and its molecular formula is C14H24CuN6O4. The peptide portion binds a copper ion with high affinity, and much of the research interest comes from that metal-binding behavior rather than the peptide alone. For context on how a short peptide differs from a full protein, see <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a>.</p>

        <h2>Where does it come from?</h2>
        <p>Unlike synthetic agonists, GHK is a sequence that appears naturally in human plasma and other tissues, and levels of it change with age in some studies. The research-grade material is produced synthetically and complexed with copper so that the exact ratio and purity are controlled. This is a case where the natural origin is part of the story, but the vial you receive is a defined, tested compound.</p>

        <h2>How is GHK-Cu studied?</h2>
        <p>Published laboratory work on GHK-Cu tends to cluster around a few themes:</p>
        <ul>
          <li><b>Copper transport:</b> how the peptide binds and moves copper, a trace element involved in many enzymes.</li>
          <li><b>Tissue and skin biology:</b> models looking at collagen and connective tissue signaling.</li>
          <li><b>Gene expression:</b> research on how the compound relates to patterns of cellular activity in culture.</li>
        </ul>
        <p>These are laboratory findings, not conclusions about people or animals. GHK-Cu is supplied strictly as a research compound.</p>

        <h2>Handling and verification</h2>
        <p>Because GHK-Cu carries a copper ion, its identity and purity are worth confirming rather than assuming from the label. It is checked by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, ships lyophilized, and comes with its certificate of analysis. Any Codex Research vial can be confirmed by its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including GHK-Cu, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What does GHK-Cu stand for?', a: 'GHK are the single-letter codes for the three amino acids in the tripeptide glycyl-L-histidyl-L-lysine, and Cu is the chemical symbol for copper. GHK-Cu is the copper complex of that tripeptide, used strictly for laboratory research.' },
        { q: 'Is GHK-Cu natural or synthetic?', a: 'The GHK sequence occurs naturally in the body, but the research-grade material is made synthetically and complexed with copper so the ratio and purity are controlled and verifiable.' },
        { q: 'Why is the copper important?', a: 'GHK binds a copper ion with high affinity, and a lot of the research interest centers on that metal-binding behavior, including how the peptide interacts with copper transport in model systems.' },
      ],
      references: [],
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
        <p class="lead">Tirzepatide is often described in short as a "dual agonist," which is accurate but hides what makes it interesting. It is a single synthetic peptide engineered to act on two different receptors involved in metabolism at the same time. That design is the reason it shows up so often in current laboratory research on glucose handling and energy balance.</p>

        <h2>What is tirzepatide?</h2>
        <p>Tirzepatide is a synthetic peptide that behaves as an agonist at two incretin receptors: the glucose-dependent insulinotropic polypeptide (GIP) receptor and the glucagon-like peptide-1 (GLP-1) receptor. Most earlier research peptides in this space targeted GLP-1 alone. Tirzepatide combines both activities in one molecule. Its CAS number is 2023788-19-2 and its molecular formula is C225H348N48O68, which reflects a fairly large peptide with a fatty acid chain that extends how long it stays intact.</p>

        <h2>Why two receptors?</h2>
        <p>GIP and GLP-1 are both incretins, signaling molecules the gut releases in response to nutrients. Each one interacts with pathways tied to insulin signaling and glucose regulation, but through different receptors. The idea behind a dual agonist is to study what happens when both are engaged together rather than separately. That is the central research question tirzepatide is used to explore.</p>

        <h2>How is tirzepatide studied?</h2>
        <p>In laboratory settings, tirzepatide appears in work on:</p>
        <ul>
          <li><b>Glucose regulation:</b> models of how incretin signaling relates to blood sugar handling.</li>
          <li><b>Energy balance:</b> research on appetite and metabolic signaling pathways.</li>
          <li><b>Receptor pharmacology:</b> comparing single-receptor and dual-receptor activation.</li>
        </ul>
        <p>These are laboratory and preclinical contexts. Tirzepatide is supplied strictly as a research compound, and nothing here describes use in people or animals.</p>

        <h2>Structure and quality</h2>
        <p>Because tirzepatide is a large, modified peptide, batch-to-batch consistency is not a given. It is verified for purity by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and for identity by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, and it ships lyophilized with its own certificate of analysis. You can confirm any Codex Research vial by its <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including tirzepatide, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        { q: 'What does tirzepatide do at the molecular level?', a: 'Tirzepatide is a synthetic peptide that acts as an agonist at two incretin receptors at once: the GIP receptor and the GLP-1 receptor. This dual activity is what distinguishes it from peptides that target GLP-1 alone. It is used strictly for laboratory research.' },
        { q: 'Is tirzepatide a GLP-1 peptide?', a: 'It acts on the GLP-1 receptor, but it is not GLP-1 only. Tirzepatide is a dual GIP and GLP-1 receptor agonist, meaning it engages both incretin pathways in the same molecule.' },
        { q: 'How is tirzepatide verified for research?', a: 'Each batch is tested by HPLC for purity and mass spectrometry for identity, and ships with a certificate of analysis. Codex Research vials can also be checked by batch number at codexresearchlab.com/verify/.' },
      ],
      references: [
        { text: 'Tirzepatide compound summary. PubChem, National Library of Medicine (CID 156588324).', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/156588324' },
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
        <p class="lead">BPC-157 is one of the most talked-about research peptides, and also one of the most misunderstood. It is a short synthetic peptide whose amino acid sequence is taken from a protein found in gastric juice. In the lab it is studied for the way it interacts with signaling pathways tied to tissue repair and blood vessel formation. Here is a plain look at what it actually is.</p>

        <h2>What is BPC-157?</h2>
        <p>BPC-157 is a pentadecapeptide, which simply means a peptide made of 15 amino acids. The name stands for "Body Protection Compound," and the sequence is derived from a larger protein present in the stomach. It is produced synthetically for research through <a href="article/peptide-synthesis/">solid-phase peptide synthesis</a> rather than extracted from tissue. Its CAS number is 137525-51-0 and its molecular formula is C62H98N16O22, with a molecular weight near 1419 g/mol. If the difference between a short peptide like this and a full protein is unclear, our note on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a> covers it.</p>

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
        <p>Because a short peptide is only as reliable as the batch you actually receive, purity matters more than the name on the label. Research-grade BPC-157 is verified by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> for purity and by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> for identity, and each batch should come with its own certificate of analysis. It typically ships lyophilized, and you can check any Codex Research vial by its <a href="verify/">batch number</a>.</p>

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
          <li><b>Card</b> — Visa, Mastercard and American Express, processed by Stripe. You finish on Stripe's own secure checkout, so your card details never touch our site.</li>
          <li><b>Crypto</b> — USDC or USDT on Ethereum, transferred from your own wallet and verified on-chain before the order is released.</li>
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
        <p>Verification runs in one direction: from the vial in your hand back to the paperwork. Every Codex Research vial carries a batch number in the format CDX-YYMM-NNN, and that string is the key to everything else. Read it off the label first, then check that the same string appears on the certificate you were sent. A COA that does not name your batch is a document about some other material, however impressive the numbers on it look.</p>

        <h2>Ask for the certificate before you pay, not after</h2>
        <p>The full COA is available on request before payment, which changes what you are able to do with it. Before an order is placed you can ask which batch you would receive, ask for that batch's certificate rather than a sample document, and read it while you still have the option to walk away. After payment the same certificate is only a record. The sequence matters more than the document.</p>
        <p>Three questions cover most of it: which batch does this certificate belong to, which methods produced these numbers, and who ran them. A supplier that can answer all three in writing is operating differently from one that sends a screenshot.</p>

        <h2>A one-minute check before you order</h2>
        <ul>
          <li><b>Batch match:</b> the number on the certificate is character-for-character the number on the label.</li>
          <li><b>A date:</b> the certificate says when the analysis was performed, not merely when the file was created.</li>
          <li><b>Named methods:</b> HPLC and mass spectrometry are identified as the procedures behind the figures, with numeric results rather than the word "pass".</li>
          <li><b>An author:</b> the testing laboratory is identified and the document is signed or otherwise attributable.</li>
          <li><b>Legibility:</b> you can actually read the header and the chromatogram, rather than a compressed image of them.</li>
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
        { q: 'What does a Codex Research batch number look like?', a: 'Batch numbers are printed on the vial label in the format CDX-YYMM-NNN. That string is what links the vial to its certificate of analysis, so it should appear character-for-character on the COA you are sent.' },
        { q: 'What should I do if the batch number does not match the COA?', a: 'Do not accept a verbal explanation. Ask for the certificate that carries the exact number printed on your vial, since a mismatch may simply be a transcription error. You can also enter the number on the batch verification page or send it to the team to check.' },
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
        <p class="lead">Mass spectrometry (MS) is an analytical technique that measures the mass-to-charge ratio of ionized molecules. In peptide research it is used to confirm identity, measure exact molecular weight, detect modifications, and assess purity, making it one of the most reliable tools for characterizing synthetic peptides.</p>

        <h2>What is mass spectrometry?</h2>
        <p>Mass spectrometry works by converting compounds into charged particles and separating them in an analyzer based on their mass-to-charge ratio. This allows researchers to determine molecular weights, identify unknown compounds, and analyze complex mixtures with high sensitivity.${cite('Reference: Aebersold &amp; Mann, 2003', 'https://doi.org/10.1038/nature01511')}</p>

        <h2>Why use mass spectrometry in peptide research?</h2>
        <p>Peptides are short chains of amino acids that can vary in sequence, modifications, and purity. If you want the fundamentals, see our guide on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a>. Mass spectrometry is essential for studying them because it provides precise molecular information. Researchers use MS to:</p>
        <ul>
          <li>Confirm peptide identity by measuring exact molecular weight.</li>
          <li>Detect post-translational or synthetic modifications.</li>
          <li>Assess purity and identify by-products in synthetic preparations.</li>
          <li>Sequence peptides through fragmentation analysis.</li>
        </ul>
        <p>${cite('Reference: Yates et al., 2009', 'https://doi.org/10.1146/annurev-bioeng-061008-124934').trim()}</p>

        <h2>Common approaches in peptide MS</h2>
        <p>Several methods are frequently applied in peptide analysis:</p>
        <ul>
          <li><b>MALDI-TOF</b> (Matrix-Assisted Laser Desorption/Ionization, Time of Flight): often used for rapid mass determination of peptides.</li>
          <li><b>ESI</b> (Electrospray Ionization): allows analysis of peptides in solution, suitable for coupling with liquid chromatography.</li>
          <li><b>LC-MS/MS</b> (Liquid Chromatography, Tandem Mass Spectrometry): combines separation with fragmentation for detailed sequencing and structural analysis.</li>
        </ul>
        <p>MS is frequently paired with <a href="article/high-performance-liquid-chromatography-hplc/">high performance liquid chromatography (HPLC)</a> for purity verification.${cite('Reference: Domon &amp; Aebersold, 2006', 'https://doi.org/10.1126/science.1111443')}</p>

        <h2>Research applications</h2>
        <p>Mass spectrometry is widely used in peptide science, including:</p>
        <ul>
          <li>Verifying synthetic peptide batches for identity and purity, a routine step after <a href="article/peptide-synthesis/">peptide synthesis</a>.</li>
          <li>Mapping peptide and protein interactions.</li>
          <li>Profiling endogenous peptides in biological samples.</li>
          <li>Supporting structural studies by pinpointing amino acid modifications.</li>
        </ul>
        <p>${cite('Reference: Aebersold &amp; Mann, 2016', 'https://doi.org/10.1038/nature19949').trim()}</p>
      `,
      faq: [
        { q: 'What does mass spectrometry measure in peptides?', a: 'It measures the mass-to-charge ratio of ionized peptide molecules, which gives their exact molecular weight and confirms identity and purity.' },
        { q: 'What is the difference between MALDI-TOF and ESI for peptides?', a: 'MALDI-TOF is used for rapid mass determination of peptides in solid matrix form, while ESI ionizes peptides in solution and couples easily with liquid chromatography.' },
        { q: 'Why is mass spectrometry important after peptide synthesis?', a: 'It confirms that the synthesized peptide has the correct sequence and molecular weight and helps detect by-products before the peptide is used in research.' },
      ],
      references: [
        { text: 'Aebersold, R., &amp; Mann, M. (2003). Mass spectrometry-based proteomics. Nature, 422, 198-207.', url: 'https://doi.org/10.1038/nature01511' },
        { text: 'Yates, J.R., Ruse, C.I., &amp; Nakorchevsky, A. (2009). Proteomics by mass spectrometry: approaches, advances, and applications. Annual Review of Biomedical Engineering, 11, 49-79.', url: 'https://doi.org/10.1146/annurev-bioeng-061008-124934' },
        { text: 'Domon, B., &amp; Aebersold, R. (2006). Mass spectrometry and protein analysis. Science, 312(5771), 212-217.', url: 'https://doi.org/10.1126/science.1111443' },
        { text: 'Aebersold, R., &amp; Mann, M. (2016). Mass-spectrometric exploration of proteome structure and function. Nature, 537, 347-355.', url: 'https://doi.org/10.1038/nature19949' },
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
        <p class="lead">High Performance Liquid Chromatography (HPLC) is an analytical technique used to separate, identify, and quantify the components of a mixture. A high-pressure pump pushes a liquid sample through a column packed with a stationary phase, and each compound exits at a different retention time, allowing precise analysis of peptides and other molecules.</p>

        <h2>How does HPLC work?</h2>
        <p>HPLC passes a liquid sample through a column packed with a stationary phase while a high-pressure pump drives the solvent, known as the mobile phase. Different compounds interact with the stationary phase at varying strengths, so they exit the column at different times. This principle is called retention time.${cite('Reference: Dong, 2013', 'https://doi.org/10.1002/0471973106')}</p>

        <h2>How is HPLC used in research?</h2>
        <p>HPLC is applied across many scientific fields. In peptide and pharmaceutical research it is commonly used to:</p>
        <ul>
          <li>Verify purity of synthesized compounds, a key quality step after <a href="article/peptide-synthesis/">peptide synthesis</a>.</li>
          <li>Separate peptide fragments or analogs.</li>
          <li>Detect small concentrations of impurities.</li>
          <li>Prepare samples for further structural or biological testing, often paired with <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>.</li>
        </ul>
        <p>${cite('Reference: Kazakevich &amp; LoBrutto, 2007', 'https://doi.org/10.1002/0470087951').trim()}</p>

        <h2>Key features of HPLC</h2>
        <p>Researchers value HPLC because it offers:</p>
        <ul>
          <li><b>High resolution:</b> ability to separate closely related compounds with precision.</li>
          <li><b>Quantitative accuracy:</b> reliable concentration data for analytes in complex mixtures.</li>
          <li><b>Versatility:</b> can analyze peptides, proteins, metabolites, and small organic molecules.</li>
          <li><b>Scalability:</b> methods adapt from microgram-level analysis to preparative purification.</li>
        </ul>
        <p>${cite('Reference: Swartz &amp; Krull, 2012', 'https://doi.org/10.1201/b12039').trim()}</p>

        <h2>What researchers have observed</h2>
        <p>Studies using HPLC consistently report its value in quality control and characterization of peptides. Peptide research often uses reverse-phase HPLC to confirm purity above 98 to 99 percent, while analytical runs let scientists detect even trace contaminants. Beyond peptides, HPLC has been applied to track metabolic intermediates, assess drug stability, and monitor chemical synthesis efficiency. It is also used to check reference standards prepared by <a href="article/lyophilization-freeze-drying/">lyophilization</a>.${cite('Reference: Dong, 2013', 'https://doi.org/10.1002/0471973106')}</p>
      `,
      faq: [
        { q: 'What is HPLC used for?', a: 'HPLC is used to separate, identify, and quantify the components of a mixture. In peptide research it verifies purity and detects impurities.' },
        { q: 'What is retention time in HPLC?', a: 'Retention time is how long a compound takes to travel through the column and exit. Different compounds have different retention times, which is how they are separated.' },
        { q: 'What purity can HPLC confirm for peptides?', a: 'Reverse-phase HPLC is commonly used to confirm peptide purity above 98 to 99 percent and to detect trace contaminants.' },
      ],
      references: [
        { text: 'Dong, M.W. (2006). Modern HPLC for Practicing Scientists. Wiley.', url: 'https://doi.org/10.1002/0471973106' },
        { text: 'Kazakevich, Y.V., &amp; LoBrutto, R. (Eds.). (2006). HPLC for Pharmaceutical Scientists. Wiley.', url: 'https://doi.org/10.1002/0470087951' },
        { text: 'Swartz, M.E., &amp; Krull, I.S. (2012). Handbook of Analytical Validation. CRC Press.', url: 'https://doi.org/10.1201/b12039' },
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
        <p class="lead">Amino acids, peptides, and proteins differ mainly in size and structure. Amino acids are single molecules and the building blocks. Peptides are short chains of 2 to about 50 amino acids. Proteins are long chains, often hundreds of residues, that fold into complex three-dimensional structures with specialized functions.</p>

        <h2>What are amino acids?</h2>
        <p>Amino acids are the building blocks of peptides and proteins. Each amino acid has a central carbon atom bonded to an amino group, a carboxyl group, a hydrogen atom, and a unique side chain, called the R-group. These side chains give each amino acid distinct chemical properties, from polar to nonpolar and acidic to basic.</p>

        <h2>What are peptides?</h2>
        <p>Peptides are short chains of amino acids linked by peptide bonds. A peptide bond forms when the carboxyl group of one amino acid reacts with the amino group of another, releasing water. In research, peptides are often made through <a href="article/peptide-synthesis/">peptide synthesis</a> to study signaling pathways, enzyme interactions, and structural motifs. Peptides are typically defined as chains of 2 to about 50 amino acids, though the exact cutoff varies. A well-studied example is <a href="article/what-is-mots-c/">MOTS-c</a>, a mitochondrial-derived peptide.${cite('Reference: Merrifield, 1963', 'https://doi.org/10.1021/ja00897a025')}</p>

        <h2>What are proteins?</h2>
        <p>Proteins are larger, more complex chains of amino acids, often containing hundreds of residues. Unlike short peptides, proteins fold into intricate three-dimensional structures that determine their function. They can act as enzymes, structural scaffolds, transporters, or receptors. Research into protein folding and misfolding has provided key insights into diseases such as Alzheimer's and Parkinson's.${cite('Reference: Dobson, 2003', 'https://doi.org/10.1038/nature02261')}</p>

        <h2>Key differences between amino acids, peptides, and proteins</h2>
        <ul>
          <li><b>Size:</b> amino acids are single molecules, peptides are short chains, and proteins are long folded chains.</li>
          <li><b>Structure:</b> proteins fold into stable 3D structures, while peptides often remain linear or only partially folded.</li>
          <li><b>Function:</b> amino acids serve as building blocks, peptides often act as signaling molecules, and proteins carry out complex biological functions.</li>
        </ul>
        <p>Analytical tools such as <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> are used to confirm the identity of peptides and proteins.${cite('Reference: Berg et al., 2002', 'https://www.ncbi.nlm.nih.gov/books/NBK21154/')}</p>
      `,
      faq: [
        { q: 'What is the difference between a peptide and a protein?', a: 'Peptides are short chains of roughly 2 to 50 amino acids, while proteins are much longer chains that fold into complex three-dimensional structures with specialized functions.' },
        { q: 'What is a peptide bond?', a: 'A peptide bond is the link between two amino acids. It forms when the carboxyl group of one amino acid reacts with the amino group of another, releasing a molecule of water.' },
        { q: 'How many amino acids make a peptide instead of a protein?', a: 'Peptides are usually defined as chains of 2 to about 50 amino acids. Longer chains that fold into stable structures are generally classified as proteins, though the cutoff varies.' },
      ],
      references: [
        { text: 'Nelson, D.L., &amp; Cox, M.M. (2017). Lehninger Principles of Biochemistry (7th ed.). W.H. Freeman.' },
        { text: 'Merrifield, R.B. (1963). Solid Phase Peptide Synthesis. I. The Synthesis of a Tetrapeptide. Journal of the American Chemical Society, 85(14), 2149-2154.', url: 'https://doi.org/10.1021/ja00897a025' },
        { text: 'Dobson, C.M. (2003). Protein folding and misfolding. Nature, 426, 884-890.', url: 'https://doi.org/10.1038/nature02261' },
        { text: 'Berg, J.M., Tymoczko, J.L., &amp; Stryer, L. (2002). Biochemistry. 5th edition. W.H. Freeman.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21154/' },
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

        <h2>What "lyophilized powder" actually means</h2>
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
        <p>Freezing is not just cooling. As the temperature falls, water separates out as ice and the remaining solutes are pushed into progressively more concentrated pockets, which freeze at lower temperatures than the surrounding water. Most samples behave as eutectics, a mixture of solutes and solvent that is only properly frozen once the entire eutectic mixture has solidified. Others never crystallise at all: the suspension simply grows more viscous as it cools until it sets as a vitreous solid at the glass transition point, and this second type is considerably harder to freeze-dry.${cite('Reference: Labconco, A Guide to Freeze Drying for the Laboratory', 'https://documents.thermofisher.com/TFS-Assets/ANZ/brochures/labconco-guide-fd.pdf')}</p>
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
      
        <h2>What the equipment is actually doing</h2>
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
        <p class="lead">Excipients are inactive substances added to a peptide formulation alongside the main compound. They do not provide biological activity, but they stabilize, protect, and help deliver the peptide, keeping it intact and usable during storage, handling, and experiments.</p>

        <h2>What are excipients?</h2>
        <p>Excipients are inactive substances added to a formulation alongside the primary compound. In peptide research, excipients help stabilize, protect, or deliver the peptide in a controlled way. While they provide no direct biological activity, they ensure peptides remain intact and usable during storage, handling, and experimental application.</p>

        <h2>Why are excipients important for peptides?</h2>
        <p>Peptides are highly sensitive molecules that can degrade from light, heat, moisture, or enzymatic activity. Excipients are added to reduce these risks. They can:</p>
        <ul>
          <li>Prevent peptide aggregation or oxidation.</li>
          <li>Adjust pH for stability.</li>
          <li>Enhance solubility for laboratory use.</li>
          <li>Serve as bulking agents during <a href="article/lyophilization-freeze-drying/">lyophilization</a>.</li>
        </ul>
        <p>${cite('Reference: Wang, 2000', 'https://doi.org/10.1016/S0378-5173(00)00423-3').trim()}</p>

        <h2>Common excipients in peptide formulations</h2>
        <p>Researchers often use a small set of excipients with well-documented properties:</p>
        <ul>
          <li><b>Mannitol and trehalose:</b> act as cryoprotectants and stabilizers during freeze-drying.</li>
          <li><b>Arginine or glycine:</b> improve solubility and reduce aggregation.</li>
          <li><b>Buffers (phosphate, citrate):</b> maintain pH and ionic strength.</li>
          <li><b>Polysorbates (Tween 20, Tween 80):</b> protect against surface adsorption and aggregation.</li>
        </ul>
        <p>${cite('Reference: Wang, 2000', 'https://doi.org/10.1016/S0378-5173(00)00423-3').trim()}</p>

        <h2>Research applications</h2>
        <p>Excipients are not studied for therapeutic effects, but they are critical in laboratory preparation. They help maintain peptide integrity in storage vials, support reproducibility in cell culture assays, and provide consistent results across repeated experiments. Their inclusion helps ensure that observed outcomes are due to the peptide under study, not instability of the sample. Purity of the final formulation is often confirmed by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a>.${cite('Reference: Carpenter et al., 2002', 'https://doi.org/10.1007/978-1-4615-0557-0_5')}</p>
      `,
      faq: [
        { q: 'What is an excipient in a peptide formulation?', a: 'An excipient is an inactive substance added alongside the peptide to stabilize, protect, or deliver it. It has no biological activity of its own.' },
        { q: 'What are common peptide excipients?', a: 'Common excipients include mannitol and trehalose as cryoprotectants, arginine or glycine for solubility, phosphate or citrate buffers, and polysorbates such as Tween 20 and Tween 80.' },
        { q: 'Why are excipients added to peptides?', a: 'They prevent aggregation and oxidation, adjust pH, improve solubility, and act as bulking agents during freeze-drying, keeping the peptide stable and reproducible.' },
      ],
      references: [
        { text: 'Rowe, R.C., Sheskey, P.J., &amp; Owen, S.C. (Eds.). (2006). Handbook of Pharmaceutical Excipients (5th ed.). Pharmaceutical Press.' },
        { text: 'Wang, W. (2000). Lyophilization and development of solid protein pharmaceuticals. International Journal of Pharmaceutics, 203(1-2), 1-60.', url: 'https://doi.org/10.1016/S0378-5173(00)00423-3' },
        { text: 'Wang, W. (2000). Lyophilization and development of solid protein pharmaceuticals. International Journal of Pharmaceutics, 203(1-2), 1-60.', url: 'https://doi.org/10.1016/S0378-5173(00)00423-3' },
        { text: 'Carpenter, J.F., Chang, B.S., Garzon-Rodriguez, W., &amp; Randolph, T.W. (2002). Rational design of stable lyophilized protein formulations: theory and practice. In Rational Design of Stable Protein Formulations (Pharmaceutical Biotechnology, pp. 109-133). Springer.', url: 'https://doi.org/10.1007/978-1-4615-0557-0_5' },
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
        <p class="lead">Peptide synthesis is the laboratory process of building short chains of amino acids linked by peptide bonds. Most modern synthesis uses solid-phase peptide synthesis (SPPS), where amino acids are added one at a time to a resin bead through repeated cycles of coupling and deprotection.</p>

        <h2>What is peptide synthesis?</h2>
        <p>Peptide synthesis is the laboratory process of creating short chains of amino acids linked by peptide bonds. These chains can mimic naturally occurring sequences or be custom-designed for research. Because peptides play roles in signaling, enzyme activity, and structural biology, synthetic production lets researchers study them in controlled ways. For the underlying concepts, see our guide on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a>.${cite('Reference: Merrifield, 1963', 'https://doi.org/10.1021/ja00897a025')}</p>

        <h2>How is peptide synthesis performed in the lab?</h2>
        <p>Most modern peptide synthesis uses solid-phase peptide synthesis (SPPS). The first amino acid is attached to a solid resin bead, and additional amino acids are added step by step. Each cycle involves:</p>
        <ol>
          <li><b>Activation:</b> preparing the next amino acid for coupling.</li>
          <li><b>Coupling:</b> forming a peptide bond between the growing chain and the new amino acid.</li>
          <li><b>Deprotection:</b> removing protective groups so the chain can continue extending.</li>
        </ol>
        <p>Once the sequence is complete, the peptide is cleaved from the resin and purified for research use.${cite('Reference: Chan &amp; White, 2000', 'https://doi.org/10.1093/oso/9780199637256.001.0001')}</p>

        <h2>Key features of synthetic peptide production</h2>
        <p>Peptide synthesis offers researchers:</p>
        <ul>
          <li><b>Precision:</b> the ability to design exact amino acid sequences.</li>
          <li><b>Flexibility:</b> incorporation of modifications such as non-natural amino acids or labels.</li>
          <li><b>Scalability:</b> production from small milligram amounts for experiments to larger quantities for assays.</li>
          <li><b>Purity control:</b> products are analyzed by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> to confirm identity and purity.</li>
        </ul>
        <p>${cite('Reference: Coin, 2010', 'https://doi.org/10.1038/nmeth.1403').trim()}</p>

        <h2>What researchers have observed</h2>
        <p>Automated synthesizers have greatly improved efficiency, allowing complex peptides to be produced with high reproducibility. Advances in coupling reagents and resin technologies have reduced side reactions and improved yield. Despite these advances, very long or highly hydrophobic peptides remain challenging, often requiring optimized conditions or specialized chemistries.${cite('Reference: Merrifield, 1986', 'https://doi.org/10.1002/anie.198606031')}</p>
      `,
      faq: [
        { q: 'How are peptides made in the lab?', a: 'Most peptides are made by solid-phase peptide synthesis (SPPS), attaching amino acids one at a time to a resin bead through repeated coupling and deprotection cycles, then cleaving and purifying the chain.' },
        { q: 'What is solid-phase peptide synthesis (SPPS)?', a: 'SPPS is a method where the growing peptide chain stays attached to a solid resin while amino acids are added step by step, making synthesis efficient and easy to automate.' },
        { q: 'How is peptide purity confirmed after synthesis?', a: 'Purity is confirmed with HPLC and mass spectrometry, which verify the correct sequence, molecular weight, and absence of significant by-products.' },
      ],
      references: [
        { text: 'Merrifield, R.B. (1963). Solid Phase Peptide Synthesis. I. The Synthesis of a Tetrapeptide. Journal of the American Chemical Society, 85(14), 2149-2154.', url: 'https://doi.org/10.1021/ja00897a025' },
        { text: 'Chan, W.C., &amp; White, P.D. (2000). Fmoc Solid Phase Peptide Synthesis: A Practical Approach. Oxford University Press.', url: 'https://doi.org/10.1093/oso/9780199637256.001.0001' },
        { text: 'Coin, I. (2010). High-throughput peptide synthesis and screening. Nature Methods, 7, 431-433.', url: 'https://doi.org/10.1038/nmeth.1403' },
        { text: 'Merrifield, R.B. (1986). Solid-phase synthesis: the early years. Angewandte Chemie International Edition, 25(9), 869-878.', url: 'https://doi.org/10.1002/anie.198606031' },
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
        <p>MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA type-c) is a small peptide encoded within the mitochondrial genome. Unlike most peptides, which are coded in nuclear DNA, MOTS-c originates from mitochondrial DNA. This highlights the organelle's role not only in energy metabolism but also in signaling. The discovery has expanded interest in mitochondrial-derived peptides as potential regulators of cellular processes. To understand where peptides fit among biomolecules, see <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides, and proteins</a>.${cite('Reference: Lee et al., 2015', 'https://doi.org/10.1016/j.cmet.2015.09.001')}</p>

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
