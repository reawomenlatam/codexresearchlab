/* Codex Research — blog content (7 SEO posts, topic cluster).
   Adapted from the Direct Peptides SEO package: brand → Codex Research,
   internal links → article.html?slug=…, /shop → catalog.html.
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
      slug: 'mass-spectrometry-peptide-research',
      title: 'Mass Spectrometry in Peptide Research',
      metaTitle: 'Mass Spectrometry in Peptide Research: Uses and Methods',
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
        <p>Peptides are short chains of amino acids that can vary in sequence, modifications, and purity. If you want the fundamentals, see our guide on <a href="article.html?slug=amino-acids-peptides-proteins-difference">amino acids, peptides, and proteins</a>. Mass spectrometry is essential for studying them because it provides precise molecular information. Researchers use MS to:</p>
        <ul>
          <li>Confirm peptide identity by measuring exact molecular weight.</li>
          <li>Detect post-translational or synthetic modifications.</li>
          <li>Assess purity and identify by-products in synthetic preparations.</li>
          <li>Sequence peptides through fragmentation analysis.</li>
        </ul>
        <p>${cite('Reference: Yates et al., 2009', 'https://doi.org/10.1146/annurev.biochem.78.081307.110406').trim()}</p>

        <h2>Common approaches in peptide MS</h2>
        <p>Several methods are frequently applied in peptide analysis:</p>
        <ul>
          <li><b>MALDI-TOF</b> (Matrix-Assisted Laser Desorption/Ionization, Time of Flight): often used for rapid mass determination of peptides.</li>
          <li><b>ESI</b> (Electrospray Ionization): allows analysis of peptides in solution, suitable for coupling with liquid chromatography.</li>
          <li><b>LC-MS/MS</b> (Liquid Chromatography, Tandem Mass Spectrometry): combines separation with fragmentation for detailed sequencing and structural analysis.</li>
        </ul>
        <p>MS is frequently paired with <a href="article.html?slug=high-performance-liquid-chromatography-hplc">high performance liquid chromatography (HPLC)</a> for purity verification.${cite('Reference: Domon &amp; Aebersold, 2006', 'https://doi.org/10.1126/science.1111443')}</p>

        <h2>Research applications</h2>
        <p>Mass spectrometry is widely used in peptide science, including:</p>
        <ul>
          <li>Verifying synthetic peptide batches for identity and purity, a routine step after <a href="article.html?slug=peptide-synthesis">peptide synthesis</a>.</li>
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
        { text: 'Aebersold, R., &amp; Mann, M. (2003). Mass spectrometry-based proteomics. Nature, 422, 198–207.', url: 'https://doi.org/10.1038/nature01511' },
        { text: 'Yates, J.R., et al. (2009). Proteomics by mass spectrometry: approaches, advances, and applications. Annual Review of Biochemistry, 78, 243–272.', url: 'https://doi.org/10.1146/annurev.biochem.78.081307.110406' },
        { text: 'Domon, B., &amp; Aebersold, R. (2006). Mass spectrometry and protein analysis. Science, 312(5771), 212–217.', url: 'https://doi.org/10.1126/science.1111443' },
        { text: 'Aebersold, R., &amp; Mann, M. (2016). Mass-spectrometric exploration of proteome structure and function. Nature, 537, 347–355.', url: 'https://doi.org/10.1038/nature19949' },
      ],
      cta: 'Explore our range of <a href="catalog.html">research peptides</a> analyzed by mass spectrometry and HPLC for verified purity.',
      related: ['high-performance-liquid-chromatography-hplc', 'peptide-synthesis', 'amino-acids-peptides-proteins-difference'],
    },

    {
      slug: 'high-performance-liquid-chromatography-hplc',
      title: 'What Is High Performance Liquid Chromatography (HPLC)?',
      metaTitle: 'What Is HPLC? High Performance Liquid Chromatography Guide',
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
        <p>HPLC passes a liquid sample through a column packed with a stationary phase while a high-pressure pump drives the solvent, known as the mobile phase. Different compounds interact with the stationary phase at varying strengths, so they exit the column at different times. This principle is called retention time.${cite('Reference: Dong, 2013', 'https://doi.org/10.1007/978-1-4614-7230-7')}</p>

        <h2>How is HPLC used in research?</h2>
        <p>HPLC is applied across many scientific fields. In peptide and pharmaceutical research it is commonly used to:</p>
        <ul>
          <li>Verify purity of synthesized compounds, a key quality step after <a href="article.html?slug=peptide-synthesis">peptide synthesis</a>.</li>
          <li>Separate peptide fragments or analogs.</li>
          <li>Detect small concentrations of impurities.</li>
          <li>Prepare samples for further structural or biological testing, often paired with <a href="article.html?slug=mass-spectrometry-peptide-research">mass spectrometry</a>.</li>
        </ul>
        <p>${cite('Reference: Kazakevich &amp; LoBrutto, 2007', 'https://doi.org/10.1016/B978-0-12-370540-2.X5000-2').trim()}</p>

        <h2>Key features of HPLC</h2>
        <p>Researchers value HPLC because it offers:</p>
        <ul>
          <li><b>High resolution:</b> ability to separate closely related compounds with precision.</li>
          <li><b>Quantitative accuracy:</b> reliable concentration data for analytes in complex mixtures.</li>
          <li><b>Versatility:</b> can analyze peptides, proteins, metabolites, and small organic molecules.</li>
          <li><b>Scalability:</b> methods adapt from microgram-level analysis to preparative purification.</li>
        </ul>
        <p>${cite('Reference: Swartz &amp; Krull, 2012', 'https://doi.org/10.1002/9781118152547').trim()}</p>

        <h2>What researchers have observed</h2>
        <p>Studies using HPLC consistently report its value in quality control and characterization of peptides. Peptide research often uses reverse-phase HPLC to confirm purity above 98 to 99 percent, while analytical runs let scientists detect even trace contaminants. Beyond peptides, HPLC has been applied to track metabolic intermediates, assess drug stability, and monitor chemical synthesis efficiency. It is also used to check reference standards prepared by <a href="article.html?slug=lyophilization-freeze-drying">lyophilization</a>.${cite('Reference: Dong, 2013', 'https://doi.org/10.1007/978-1-4614-7230-7')}</p>
      `,
      faq: [
        { q: 'What is HPLC used for?', a: 'HPLC is used to separate, identify, and quantify the components of a mixture. In peptide research it verifies purity and detects impurities.' },
        { q: 'What is retention time in HPLC?', a: 'Retention time is how long a compound takes to travel through the column and exit. Different compounds have different retention times, which is how they are separated.' },
        { q: 'What purity can HPLC confirm for peptides?', a: 'Reverse-phase HPLC is commonly used to confirm peptide purity above 98 to 99 percent and to detect trace contaminants.' },
      ],
      references: [
        { text: 'Dong, M.W. (2013). Modern HPLC for Practicing Scientists. Springer.', url: 'https://doi.org/10.1007/978-1-4614-7230-7' },
        { text: 'Kazakevich, Y.V., &amp; LoBrutto, R. (2007). HPLC for Pharmaceutical Scientists. Academic Press.', url: 'https://doi.org/10.1016/B978-0-12-370540-2.X5000-2' },
        { text: 'Swartz, M.E., &amp; Krull, I.S. (2012). Handbook of Analytical Techniques in HPLC. Wiley.', url: 'https://doi.org/10.1002/9781118152547' },
      ],
      cta: 'Browse <a href="catalog.html">research peptides</a> verified by HPLC for purity above 98 percent.',
      related: ['mass-spectrometry-peptide-research', 'peptide-synthesis', 'lyophilization-freeze-drying'],
    },

    {
      slug: 'amino-acids-peptides-proteins-difference',
      title: 'Amino Acids, Peptides, and Proteins: What Is the Difference?',
      metaTitle: 'Amino Acids vs Peptides vs Proteins: The Difference',
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
        <p>Amino acids are the building blocks of peptides and proteins. Each amino acid has a central carbon atom bonded to an amino group, a carboxyl group, a hydrogen atom, and a unique side chain, called the R-group. These side chains give each amino acid distinct chemical properties, from polar to nonpolar and acidic to basic.${cite('Reference: Nelson &amp; Cox, 2017', 'https://doi.org/10.1007/978-3-319-56512-5')}</p>

        <h2>What are peptides?</h2>
        <p>Peptides are short chains of amino acids linked by peptide bonds. A peptide bond forms when the carboxyl group of one amino acid reacts with the amino group of another, releasing water. In research, peptides are often made through <a href="article.html?slug=peptide-synthesis">peptide synthesis</a> to study signaling pathways, enzyme interactions, and structural motifs. Peptides are typically defined as chains of 2 to about 50 amino acids, though the exact cutoff varies. A well-studied example is <a href="article.html?slug=what-is-mots-c">MOTS-c</a>, a mitochondrial-derived peptide.${cite('Reference: Merrifield, 1963', 'https://doi.org/10.1126/science.138.3549.1059')}</p>

        <h2>What are proteins?</h2>
        <p>Proteins are larger, more complex chains of amino acids, often containing hundreds of residues. Unlike short peptides, proteins fold into intricate three-dimensional structures that determine their function. They can act as enzymes, structural scaffolds, transporters, or receptors. Research into protein folding and misfolding has provided key insights into diseases such as Alzheimer's and Parkinson's.${cite('Reference: Dobson, 2003', 'https://doi.org/10.1038/nature02261')}</p>

        <h2>Key differences between amino acids, peptides, and proteins</h2>
        <ul>
          <li><b>Size:</b> amino acids are single molecules, peptides are short chains, and proteins are long folded chains.</li>
          <li><b>Structure:</b> proteins fold into stable 3D structures, while peptides often remain linear or only partially folded.</li>
          <li><b>Function:</b> amino acids serve as building blocks, peptides often act as signaling molecules, and proteins carry out complex biological functions.</li>
        </ul>
        <p>Analytical tools such as <a href="article.html?slug=mass-spectrometry-peptide-research">mass spectrometry</a> are used to confirm the identity of peptides and proteins.${cite('Reference: Berg et al., 2002', 'https://www.ncbi.nlm.nih.gov/books/NBK21154/')}</p>
      `,
      faq: [
        { q: 'What is the difference between a peptide and a protein?', a: 'Peptides are short chains of roughly 2 to 50 amino acids, while proteins are much longer chains that fold into complex three-dimensional structures with specialized functions.' },
        { q: 'What is a peptide bond?', a: 'A peptide bond is the link between two amino acids. It forms when the carboxyl group of one amino acid reacts with the amino group of another, releasing a molecule of water.' },
        { q: 'How many amino acids make a peptide instead of a protein?', a: 'Peptides are usually defined as chains of 2 to about 50 amino acids. Longer chains that fold into stable structures are generally classified as proteins, though the cutoff varies.' },
      ],
      references: [
        { text: 'Nelson, D.L., &amp; Cox, M.M. (2017). Lehninger Principles of Biochemistry. Springer.', url: 'https://doi.org/10.1007/978-3-319-56512-5' },
        { text: 'Merrifield, R.B. (1963). Solid Phase Peptide Synthesis: The Synthesis of a Tetrapeptide. Science, 138(3549), 1059–1060.', url: 'https://doi.org/10.1126/science.138.3549.1059' },
        { text: 'Dobson, C.M. (2003). Protein folding and misfolding. Nature, 426, 884–890.', url: 'https://doi.org/10.1038/nature02261' },
        { text: 'Berg, J.M., Tymoczko, J.L., &amp; Stryer, L. (2002). Biochemistry. 5th edition. W.H. Freeman.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21154/' },
      ],
      cta: 'Ready to go deeper? Browse our <a href="catalog.html">research peptides</a> or learn how they are made in our <a href="article.html?slug=peptide-synthesis">peptide synthesis</a> guide.',
      related: ['peptide-synthesis', 'mass-spectrometry-peptide-research', 'what-is-mots-c'],
    },

    {
      slug: 'lyophilization-freeze-drying',
      title: 'Lyophilization: How It Works',
      metaTitle: 'Lyophilization (Freeze-Drying): How It Works',
      metaDescription: 'What is lyophilization? Learn how freeze-drying preserves peptides and proteins through freezing, primary drying, and secondary drying, step by step.',
      focusKeyword: 'lyophilization',
      category: 'Lab Processes',
      tags: ['lyophilization', 'freeze-drying', 'peptides', 'sample preservation'],
      date: 'Aug 03, 2025', dateISO: '2025-08-03',
      excerpt: 'Why peptides are freeze-dried to preserve their structure and stability for storage.',
      imageAlt: 'Lyophilization freeze-drying process removing water from frozen peptide samples',
      body: `
        <p class="lead">Lyophilization, also called freeze-drying, is a dehydration process that removes water from a frozen sample through sublimation under reduced pressure. It preserves sensitive compounds such as peptides, proteins, and vaccines by maintaining their structure and stability for long-term storage.</p>

        <h2>What is lyophilization?</h2>
        <p>Lyophilization, also known as freeze-drying, is a dehydration process used in research and pharmaceutical labs to preserve biological materials. The technique removes water from a frozen sample through sublimation, the direct transition of ice into vapor, under reduced pressure. This helps maintain the structure and stability of sensitive compounds such as peptides, proteins, and vaccines.${cite('Reference: Tang &amp; Pikal, 2004', 'https://doi.org/10.1208/ps060610')}</p>

        <h2>How does the lyophilization process work?</h2>
        <p>Lyophilization typically occurs in three stages:</p>
        <ol>
          <li><b>Freezing:</b> the sample is cooled until water turns to ice, creating a solid matrix that stabilizes the material.</li>
          <li><b>Primary drying (sublimation):</b> pressure is lowered and heat is gently applied, causing frozen water to sublimate into vapor without passing through the liquid phase.</li>
          <li><b>Secondary drying (desorption):</b> remaining bound water molecules are removed, reducing final moisture content to very low levels.</li>
        </ol>
        <p>${cite('Reference: Franks, 1998', 'https://doi.org/10.1016/S1359-0294(98)00017-6').trim()}</p>

        <h2>Why do researchers use lyophilization?</h2>
        <p>The method allows long-term preservation of compounds that are unstable in liquid form. For peptides and proteins, lyophilization minimizes degradation, supports easier storage and transport, and enables precise reconstitution for experiments. It often relies on <a href="article.html?slug=excipients-in-peptides">excipients</a> that act as bulking agents and stabilizers. The process is also scalable, from small laboratory samples to large industrial batches.${cite('Reference: Wang, 2000', 'https://doi.org/10.1208/ps020229')}</p>

        <h2>Key applications in laboratory research</h2>
        <ul>
          <li>Preserving peptide and protein samples for extended shelf life.</li>
          <li>Stabilizing vaccines and biologics during production and distribution.</li>
          <li>Preparing reference standards for analytical methods such as <a href="article.html?slug=high-performance-liquid-chromatography-hplc">HPLC</a>.</li>
          <li>Enabling controlled reconstitution for in vitro or in vivo research models.</li>
        </ul>
        <p>${cite('Reference: Tang &amp; Pikal, 2004', 'https://doi.org/10.1208/ps060610').trim()}</p>
      `,
      faq: [
        { q: 'What is lyophilization used for?', a: 'Lyophilization is used to preserve compounds that are unstable in liquid form, such as peptides, proteins, and vaccines, by removing water while keeping their structure intact.' },
        { q: 'What are the three stages of freeze-drying?', a: 'The three stages are freezing, primary drying by sublimation, and secondary drying by desorption of bound water.' },
        { q: 'Why are peptides freeze-dried?', a: 'Freeze-drying minimizes peptide degradation, makes storage and transport easier, and allows precise reconstitution before experiments.' },
      ],
      references: [
        { text: 'Franks, F. (1998). Freeze-drying of bioproducts: putting principles into practice. European Journal of Pharmaceutics and Biopharmaceutics, 45(3), 221–229.', url: 'https://doi.org/10.1016/S1359-0294(98)00017-6' },
        { text: 'Tang, X., &amp; Pikal, M.J. (2004). Design of freeze-drying processes for pharmaceuticals: practical advice. Pharmaceutical Research, 21(2), 191–200.', url: 'https://doi.org/10.1208/ps060610' },
        { text: 'Wang, W. (2000). Lyophilization and development of solid protein pharmaceuticals. International Journal of Pharmaceutics, 203(1–2), 1–60.', url: 'https://doi.org/10.1208/ps020229' },
      ],
      cta: 'Our <a href="catalog.html">research peptides</a> are supplied lyophilized for maximum stability and shelf life.',
      related: ['excipients-in-peptides', 'high-performance-liquid-chromatography-hplc', 'peptide-synthesis'],
    },

    {
      slug: 'excipients-in-peptides',
      title: 'Excipients in Peptides: What Are They and How Are They Used?',
      metaTitle: 'Excipients in Peptides: What They Are and Their Uses',
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
        <p>Excipients are inactive substances added to a formulation alongside the primary compound. In peptide research, excipients help stabilize, protect, or deliver the peptide in a controlled way. While they provide no direct biological activity, they ensure peptides remain intact and usable during storage, handling, and experimental application.${cite('Reference: Rowe et al., 2006', 'https://doi.org/10.1201/9781420006306')}</p>

        <h2>Why are excipients important for peptides?</h2>
        <p>Peptides are highly sensitive molecules that can degrade from light, heat, moisture, or enzymatic activity. Excipients are added to reduce these risks. They can:</p>
        <ul>
          <li>Prevent peptide aggregation or oxidation.</li>
          <li>Adjust pH for stability.</li>
          <li>Enhance solubility for laboratory use.</li>
          <li>Serve as bulking agents during <a href="article.html?slug=lyophilization-freeze-drying">lyophilization</a>.</li>
        </ul>
        <p>${cite('Reference: Maa &amp; Hsu, 1996', 'https://doi.org/10.1021/js950316u').trim()}</p>

        <h2>Common excipients in peptide formulations</h2>
        <p>Researchers often use a small set of excipients with well-documented properties:</p>
        <ul>
          <li><b>Mannitol and trehalose:</b> act as cryoprotectants and stabilizers during freeze-drying.</li>
          <li><b>Arginine or glycine:</b> improve solubility and reduce aggregation.</li>
          <li><b>Buffers (phosphate, citrate):</b> maintain pH and ionic strength.</li>
          <li><b>Polysorbates (Tween 20, Tween 80):</b> protect against surface adsorption and aggregation.</li>
        </ul>
        <p>${cite('Reference: Wang, 2000', 'https://doi.org/10.1208/ps020229').trim()}</p>

        <h2>Research applications</h2>
        <p>Excipients are not studied for therapeutic effects, but they are critical in laboratory preparation. They help maintain peptide integrity in storage vials, support reproducibility in cell culture assays, and provide consistent results across repeated experiments. Their inclusion helps ensure that observed outcomes are due to the peptide under study, not instability of the sample. Purity of the final formulation is often confirmed by <a href="article.html?slug=high-performance-liquid-chromatography-hplc">HPLC</a>.${cite('Reference: Carpenter et al., 2002', 'https://doi.org/10.1016/S0168-3659(02)00092-3')}</p>
      `,
      faq: [
        { q: 'What is an excipient in a peptide formulation?', a: 'An excipient is an inactive substance added alongside the peptide to stabilize, protect, or deliver it. It has no biological activity of its own.' },
        { q: 'What are common peptide excipients?', a: 'Common excipients include mannitol and trehalose as cryoprotectants, arginine or glycine for solubility, phosphate or citrate buffers, and polysorbates such as Tween 20 and Tween 80.' },
        { q: 'Why are excipients added to peptides?', a: 'They prevent aggregation and oxidation, adjust pH, improve solubility, and act as bulking agents during freeze-drying, keeping the peptide stable and reproducible.' },
      ],
      references: [
        { text: 'Rowe, R.C., et al. (2006). Handbook of Pharmaceutical Excipients. Pharmaceutical Press.', url: 'https://doi.org/10.1201/9781420006306' },
        { text: 'Maa, Y.F., &amp; Hsu, C.C. (1996). Protein denaturation by freeze-drying: stabilization by excipients. Journal of Pharmaceutical Sciences, 85(10), 1050–1056.', url: 'https://doi.org/10.1021/js950316u' },
        { text: 'Wang, W. (2000). Lyophilization and development of solid protein pharmaceuticals. International Journal of Pharmaceutics, 203(1–2), 1–60.', url: 'https://doi.org/10.1208/ps020229' },
        { text: 'Carpenter, J.F., et al. (2002). Rational design of stable protein formulations: theory and practice. Journal of Controlled Release, 78(1–3), 1–9.', url: 'https://doi.org/10.1016/S0168-3659(02)00092-3' },
      ],
      cta: 'Browse our <a href="catalog.html">research peptides</a> formulated for stability and reproducible results.',
      related: ['lyophilization-freeze-drying', 'peptide-synthesis', 'high-performance-liquid-chromatography-hplc'],
    },

    {
      slug: 'peptide-synthesis',
      title: 'Peptide Synthesis: How Peptides Are Made in the Lab',
      metaTitle: 'Peptide Synthesis: How Peptides Are Made in the Lab',
      metaDescription: 'How is peptide synthesis performed? A guide to solid-phase peptide synthesis (SPPS), coupling, deprotection, and how lab peptides are purified and verified.',
      focusKeyword: 'peptide synthesis',
      category: 'Lab Processes',
      tags: ['peptide synthesis', 'SPPS', 'peptides', 'chemistry'],
      date: 'Jul 22, 2025', dateISO: '2025-07-22',
      excerpt: 'From the peptide bond to final purification, how synthetic peptides are built and verified.',
      imageAlt: 'Solid-phase peptide synthesis on resin beads in a laboratory',
      body: `
        <p class="lead">Peptide synthesis is the laboratory process of building short chains of amino acids linked by peptide bonds. Most modern synthesis uses solid-phase peptide synthesis (SPPS), where amino acids are added one at a time to a resin bead through repeated cycles of coupling and deprotection.</p>

        <h2>What is peptide synthesis?</h2>
        <p>Peptide synthesis is the laboratory process of creating short chains of amino acids linked by peptide bonds. These chains can mimic naturally occurring sequences or be custom-designed for research. Because peptides play roles in signaling, enzyme activity, and structural biology, synthetic production lets researchers study them in controlled ways. For the underlying concepts, see our guide on <a href="article.html?slug=amino-acids-peptides-proteins-difference">amino acids, peptides, and proteins</a>.${cite('Reference: Merrifield, 1963', 'https://doi.org/10.1126/science.138.3549.1059')}</p>

        <h2>How is peptide synthesis performed in the lab?</h2>
        <p>Most modern peptide synthesis uses solid-phase peptide synthesis (SPPS). The first amino acid is attached to a solid resin bead, and additional amino acids are added step by step. Each cycle involves:</p>
        <ol>
          <li><b>Activation:</b> preparing the next amino acid for coupling.</li>
          <li><b>Coupling:</b> forming a peptide bond between the growing chain and the new amino acid.</li>
          <li><b>Deprotection:</b> removing protective groups so the chain can continue extending.</li>
        </ol>
        <p>Once the sequence is complete, the peptide is cleaved from the resin and purified for research use.${cite('Reference: Chan &amp; White, 2000', 'https://doi.org/10.1385/1-59259-087-7:1')}</p>

        <h2>Key features of synthetic peptide production</h2>
        <p>Peptide synthesis offers researchers:</p>
        <ul>
          <li><b>Precision:</b> the ability to design exact amino acid sequences.</li>
          <li><b>Flexibility:</b> incorporation of modifications such as non-natural amino acids or labels.</li>
          <li><b>Scalability:</b> production from small milligram amounts for experiments to larger quantities for assays.</li>
          <li><b>Purity control:</b> products are analyzed by <a href="article.html?slug=high-performance-liquid-chromatography-hplc">HPLC</a> and <a href="article.html?slug=mass-spectrometry-peptide-research">mass spectrometry</a> to confirm identity and purity.</li>
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
        { text: 'Merrifield, R.B. (1963). Solid Phase Peptide Synthesis. I. The Synthesis of a Tetrapeptide. Science, 138(3549), 1059–1060.', url: 'https://doi.org/10.1126/science.138.3549.1059' },
        { text: 'Chan, W.C., &amp; White, P.D. (2000). Fmoc Solid Phase Peptide Synthesis: A Practical Approach. Oxford University Press.', url: 'https://doi.org/10.1385/1-59259-087-7:1' },
        { text: 'Coin, I. (2010). High-throughput peptide synthesis and screening. Nature Methods, 7, 431–433.', url: 'https://doi.org/10.1038/nmeth.1403' },
        { text: 'Merrifield, R.B. (1986). Solid-phase synthesis: the early years. Angewandte Chemie International Edition, 25(9), 869–878.', url: 'https://doi.org/10.1002/anie.198606031' },
      ],
      cta: 'Explore our catalog of lab-synthesized <a href="catalog.html">research peptides</a>, verified by HPLC and mass spectrometry.',
      related: ['amino-acids-peptides-proteins-difference', 'high-performance-liquid-chromatography-hplc', 'mass-spectrometry-peptide-research'],
    },

    {
      slug: 'what-is-mots-c',
      title: 'What Is MOTS-c?',
      metaTitle: 'What Is MOTS-c? Mitochondrial-Derived Peptide Explained',
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
        <p>MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA type-c) is a small peptide encoded within the mitochondrial genome. Unlike most peptides, which are coded in nuclear DNA, MOTS-c originates from mitochondrial DNA. This highlights the organelle's role not only in energy metabolism but also in signaling. The discovery has expanded interest in mitochondrial-derived peptides as potential regulators of cellular processes. To understand where peptides fit among biomolecules, see <a href="article.html?slug=amino-acids-peptides-proteins-difference">amino acids, peptides, and proteins</a>.${cite('Reference: Lee et al., 2015', 'https://doi.org/10.1016/j.cmet.2015.09.001')}</p>

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
        <p>${cite('Reference: Zempo et al., 2021', 'https://doi.org/10.1007/s00421-021-04643-8').trim()}</p>

        <h2>Common research applications</h2>
        <p>MOTS-c is currently studied in laboratory settings to:</p>
        <ul>
          <li>Investigate mitochondrial and nuclear communication pathways.</li>
          <li>Analyze changes in peptide signaling during metabolic stress.</li>
          <li>Explore mitochondrial contributions to age-related cellular changes.</li>
          <li>Develop models of exercise-induced signaling molecules.</li>
        </ul>
        <p>Peptides like MOTS-c used in research are produced by <a href="article.html?slug=peptide-synthesis">peptide synthesis</a> and verified for purity.${cite('Reference: Kim et al., 2018', 'https://doi.org/10.1016/j.cmet.2018.02.001')}</p>
      `,
      faq: [
        { q: 'What is MOTS-c?', a: 'MOTS-c is a small mitochondrial-derived peptide encoded in mitochondrial DNA. It is studied as a signaling molecule involved in metabolism, stress response, aging, and exercise.' },
        { q: 'Where does MOTS-c come from?', a: 'Unlike most peptides, which are encoded in nuclear DNA, MOTS-c is encoded within the mitochondrial genome, specifically the 12S rRNA region.' },
        { q: 'What does MOTS-c do in research studies?', a: 'Studies associate MOTS-c with AMPK signaling and folate metabolism, changes under cellular stress, declines with age in some tissues, and increases after exercise.' },
      ],
      references: [
        { text: 'Lee, C., et al. (2015). The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance. Cell Metabolism, 21(3), 443–454.', url: 'https://doi.org/10.1016/j.cmet.2015.09.001' },
        { text: 'Kim, K.H., et al. (2018). Mitochondrial peptides as regulators of metabolism. Cell Metabolism, 28(3), 330–341.', url: 'https://doi.org/10.1016/j.cmet.2018.02.001' },
        { text: 'Reynolds, J.C., et al. (2021). MOTS-c: a mitochondrial signal regulating metabolism and aging. Frontiers in Endocrinology, 12, 678778.', url: 'https://doi.org/10.3389/fendo.2021.678778' },
        { text: 'Zempo, H., et al. (2021). Exercise increases MOTS-c levels in circulation. European Journal of Applied Physiology, 121(12), 3285–3293.', url: 'https://doi.org/10.1007/s00421-021-04643-8' },
      ],
      cta: 'Explore our <a href="catalog.html?q=mots-c">MOTS-c research peptide</a> and related mitochondrial peptides for laboratory study.',
      related: ['amino-acids-peptides-proteins-difference', 'peptide-synthesis'],
    },
  ];

  window.REA.POSTS = POSTS;
  window.REA.BLOG_DISCLAIMER = DISCLAIMER;
})();
