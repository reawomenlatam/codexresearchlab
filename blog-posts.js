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
        <p class="lead">A certificate that reports purity and identity has answered two questions about the peptide. Endotoxin content answers a third, about something the other two methods are not built to see, and it only appears when the intended work is sensitive to it.</p>

        <h2>What an endotoxin is</h2>
        <p>The term names a specific molecule: lipopolysaccharide, a component of the outer membrane of Gram-negative bacteria. It has a lipid portion anchored in the membrane and a chain of sugars extending outward, and the lipid portion is the part responsible for its biological activity. <a class="cite" href="https://doi.org/10.1146/annurev.biochem.71.110601.135414" target="_blank" rel="noopener nofollow">(Reference: Raetz &amp; Whitfield, 2002)</a></p>
        <p>Two properties make it a practical problem. It is shed by living bacteria and released when they die, so removing the organism does not remove the molecule. And it is far more robust than the bacterium: conditions that sterilise a solution leave endotoxin intact.</p>

        <h2>Why sterile and endotoxin-free are different claims</h2>
        <p>Sterility is about whether viable organisms are present. Endotoxin content is about whether a bacterial molecule is present. A solution can be sterile and carry a significant endotoxin load, because the sterilisation killed the source without destroying what it left behind.</p>
        <p>Anyone treating the two as interchangeable is making a substitution that the chemistry does not support.</p>

        <h2>Why purity testing misses it entirely</h2>
        <p>A <a href="article/high-performance-liquid-chromatography-hplc/">chromatographic purity figure</a> measures the share of detected peaks that correspond to the target peptide. Endotoxin is not a peptide, does not behave like one on a reversed-phase column, and has no useful absorbance at the wavelengths used for peptide detection. It contributes nothing to the total, so it cannot lower the percentage.</p>
        <p><a href="article/mass-spectrometry-peptide-research/">Mass spectrometry</a> is no better placed. It is set up to confirm the mass of the intended molecule, not to survey everything else in the vial. A batch can be 99 percent pure, correctly identified, and carry endotoxin at a level that would ruin an experiment.</p>

        <h2>How it is measured</h2>
        <p>Endotoxin is quantified by its own assay, based on a clotting reaction from horseshoe crab blood cells that is triggered by the molecule. The reaction is sensitive enough to detect very small quantities, and results are reported in endotoxin units per millilitre or per milligram. <a class="cite" href="https://doi.org/10.1177/096805199400100407" target="_blank" rel="noopener nofollow">(Reference: Novitsky, 1994)</a></p>
        <p>An endotoxin unit is defined against a reference standard rather than as a mass, which is worth knowing when comparing numbers: the unit reflects activity in the assay.</p>


        <h2>Why it survives so much</h2>
        <p>The robustness has a structural explanation. Lipopolysaccharide is not a protein, so it has no folded structure to denature, and the bonds holding it together are the ordinary bonds of a lipid and a sugar chain. Heat that unfolds and destroys a protein leaves it largely intact, and it takes considerably harsher treatment, sustained dry heat rather than the usual sterilisation conditions, to break it down.</p>
        <p>It also aggregates in water, forming assemblies instead of dissolving as single molecules. That behaviour affects how readily it is removed by filtration and why a filter that retains bacteria does not reliably retain what they left behind.</p>

        <h2>Keeping it out is easier than taking it out</h2>
        <p>Removing endotoxin from a finished preparation is difficult, because the molecule sticks to surfaces and resembles nothing that a peptide purification is designed to separate. Controlling it upstream is the practical route: endotoxin-free water, clean glassware, and handling that does not introduce bacteria in the first place.</p>
        <p>The same logic applies after the vial leaves the supplier. A batch measured as low at the point of manufacture can pick up contamination from the water used to dissolve it, which is one more reason the quality of that water is worth attention. Our note on <a href="article/bacteriostatic-water-for-peptide-reconstitution/">bacteriostatic water</a> covers what the fluid contains.</p>

        <h2>When it matters and when it does not</h2>
        <p>The answer depends entirely on the experiment. Work with cultured cells, particularly immune cells, is the classic case: these cells respond to endotoxin, so a contaminated reagent produces a response that looks like an effect of the compound under study. An apparent result can be an artefact of the vial, not an effect of the molecule.</p>
        <p>For an analytical comparison, a binding measurement in a cell-free system, or a chemistry experiment, endotoxin is usually irrelevant. This is why the line appears on some certificates and not others, and why its absence from a document is not automatically a gap.</p>

        <h2>Where it comes from</h2>
        <p>A synthetic peptide made by <a href="article/peptide-synthesis/">solid-phase synthesis</a> has no bacterial step, so the compound itself is not a source. Contamination arrives from everything around it: water, buffers, glassware, resins and handling. Water is the most common route, since bacteria grow in it readily and leave their membranes behind when they die.</p>
        <p>The practical implication is that endotoxin content is a property of the batch and its handling, not of the sequence. Two batches of the same compound can differ.</p>

        <h2>Reading the line on a certificate</h2>
        <p>A useful entry states a number, a unit and a method. A statement with no number attached says less than it appears to, and a limit is not a measurement: "below 1 EU/mg" reports a threshold, while a measured value reports what was found.</p>
        <p>The same principle runs through every line of a <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a>: a figure tied to a named method and a named batch is a result, and anything else is a claim. The batch number is what connects the two, and it can be <a href="verify/">checked</a>. Where endotoxin has not been measured for a batch, the honest description is that it was not measured, not that the material is free of it.</p>
      `,
      faq: [
        {
          "q": "What are endotoxins?",
          "a": "Lipopolysaccharide molecules from the outer membrane of Gram-negative bacteria. The lipid portion carries the biological activity. They are shed by living bacteria and released when the cells die, so removing the organism does not remove them."
        },
        {
          "q": "Is a sterile solution endotoxin-free?",
          "a": "No. Sterility means no viable organisms are present. Endotoxin is a molecule that survives conditions which kill bacteria, so a sterile solution can still carry a significant load."
        },
        {
          "q": "Why does an HPLC purity result not detect endotoxin?",
          "a": "Because it is not a peptide. It does not behave like one on a reversed-phase column and has no useful absorbance at the wavelengths used for peptide detection, so it contributes nothing to the peak areas that make up the percentage."
        },
        {
          "q": "How is endotoxin measured?",
          "a": "By a dedicated assay based on a clotting reaction from horseshoe crab blood cells that the molecule triggers. Results are reported in endotoxin units, which are defined against a reference standard rather than as a mass."
        },
        {
          "q": "When does endotoxin content matter?",
          "a": "Mainly in work with cultured cells, especially immune cells, which respond to it. A contaminated reagent can produce a response that looks like an effect of the compound being studied. For cell-free or purely analytical work it is usually irrelevant."
        },
        {
          "q": "Where does endotoxin in a synthetic peptide come from?",
          "a": "Not from the synthesis, which has no bacterial step. It arrives from water, buffers, glassware, resins and handling, with water the most common route. Endotoxin content is therefore a property of the batch and its handling, and two batches of one compound can differ."
        }
      ],
      references: [
        {
          "text": "Raetz, C.R.H., &amp; Whitfield, C. (2002). Lipopolysaccharide endotoxins. Annual Review of Biochemistry, 71, 635-700.",
          "url": "https://doi.org/10.1146/annurev.biochem.71.110601.135414"
        },
        {
          "text": "Novitsky, T.J. (1994). Limulus amebocyte lysate (LAL) detection of endotoxin in human blood. Journal of Endotoxin Research, 1(4), 253-263.",
          "url": "https://doi.org/10.1177/096805199400100407"
        },
        {
          "text": "Wang, W. (2000). Lyophilization and development of solid protein pharmaceuticals. International Journal of Pharmaceutics, 203(1-2), 1-60.",
          "url": "https://doi.org/10.1016/S0378-5173(00)00423-3"
        },
        {
          "text": "Manning, M.C., Chou, D.K., Murphy, B.M., Payne, R.W., &amp; Katayama, D.S. (2010). Stability of protein pharmaceuticals: an update. Pharmaceutical Research, 27(4), 544-575.",
          "url": "https://doi.org/10.1007/s11095-009-0045-6"
        }
      ],
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
        <p class="lead">Dipeptide, oligopeptide, polypeptide, protein. The vocabulary for peptide length looks like a classification and behaves like a set of habits. Knowing where the conventions are firm and where they are loose keeps you from reading precision into a word that does not carry any.</p>

        <h2>Residue, not amino acid</h2>
        <p>The first thing the terminology gets right is worth stating. A chain is counted in residues, and a residue is what remains of an amino acid after the bond forms: the free molecule minus the water that condensation removes. A tripeptide contains three residues, which is not the same as containing three amino acids.</p>
        <p>The distinction is arithmetic as much as pedantry. A residue weighs about eighteen less than the amino acid it came from, so counting the wrong one throws a <a href="article/molecular-weight-of-peptides/">molecular weight</a> calculation off by eighteen per position.</p>

        <h2>The counting prefixes</h2>
        <p>Short chains take Greek numeric prefixes: dipeptide for two residues, tripeptide for three, tetrapeptide for four, and so on. These are unambiguous, and the naming conventions for amino acids and peptides are set out formally by the joint IUPAC and IUB commission. <a class="cite" href="https://doi.org/10.1042/bj2190345" target="_blank" rel="noopener nofollow">(Reference: IUPAC-IUB, 1984)</a></p>
        <p>Beyond about ten the prefixes stop being useful and two vaguer words take over. Oligopeptide describes a short chain, conventionally up to around ten or twenty residues. Polypeptide describes a long one. Neither has a boundary anyone enforces.</p>

        <h2>Where peptide ends and protein begins</h2>
        <p>The usual convention puts the line around fifty residues. Nothing chemical happens there. The same bond links residue fifty-one as linked residue two, and a chain does not acquire a new property by crossing a count.</p>
        <p>What changes across that range is behaviour. Short chains tend to stay flexible in solution, while longer ones have enough internal interactions to hold a stable fold. The convention is a rough marker for that shift, and it is applied inconsistently: the same molecule is called a peptide in one paper and a small protein in the next. Our note on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides and proteins</a> covers the underlying distinction.</p>

        <h2>Direction and numbering</h2>
        <p>A sequence is written and numbered from the amino terminus to the carboxyl terminus. Residue 1 is the N-terminal one. This is not arbitrary decoration: reading a sequence backwards produces a different molecule that, in most cases, has exactly the same mass, so direction is part of the identity and a mass measurement will not catch the error.</p>
        <p>Chemical <a href="article/peptide-synthesis/">synthesis</a> runs the other way, building from the C-terminus toward the N-terminus, which is the opposite of how a ribosome works. The numbering follows the sequence, not the order of assembly.</p>


        <h2>One-letter and three-letter codes</h2>
        <p>Sequences are written two ways. The three-letter code spells each residue as an abbreviation, Gly-His-Lys, and the one-letter code compresses it to GHK. Short sequences usually appear in three-letter form because it is unambiguous to read aloud; long ones appear in one-letter form because the three-letter version becomes unmanageable.</p>
        <p>The one-letter codes are not all first initials, since several residues start with the same letter and only one can have it. That is why tryptophan is W and asparagine is N. A compound name built from one-letter codes, as GHK-Cu is, is quoting a sequence rather than an abbreviation of a longer word.</p>

        <h2>Residues outside the standard set</h2>
        <p>Chemistry is not limited to the twenty residues biology uses, and a synthetic sequence can contain units that have no one-letter code at all. Those appear in three-letter form with their own abbreviations, and D-configured residues are marked as such because the mirror image is a different compound with an identical mass.</p>
        <p>A sequence written with such residues is therefore longer to state and more informative. Our note on <a href="article/what-is-ipamorelin/">ipamorelin</a> covers a pentapeptide in which three of the five residues sit outside the standard set.</p>

        <h2>Fragment notation</h2>
        <p>Hormones cut from a longer precursor carry a numeric range that says which part of the parent they are. A notation such as 7-36 means residues seven through thirty-six of the precursor numbering, and the same hormone can exist as more than one fragment.</p>
        <p>A suffix sometimes follows, most often to mark that the chain ends in an amide instead of a free acid. That ending changes the formula and the mass by about a dalton, so the notation is quoting something measurable. Our note on the <a href="article/what-are-incretins/">incretins</a> covers a case where this matters.</p>

        <p>Precursor numbering also outlives the cut. A fragment keeps the numbers it had in the parent, so its first residue is rarely residue 1, and two papers describing the same molecule can appear to disagree when one numbers from the precursor and the other from the fragment.</p>

        <h2>Words that describe shape, not length</h2>
        <p>Some terms in the same sentence as a length are describing something else entirely. Cyclic says the chain is closed into a ring, which changes the mass by the water lost in closing it; see <a href="article/cyclic-vs-linear-peptides/">cyclic and linear peptides</a>. Branched says a side chain carries another chain. Neither is a length.</p>
        <p>Peptidomimetic goes further and describes something that is not a peptide at all, built to present a similar shape without the same backbone.</p>

        <p>Conjugate is another word in that category. It says something is attached to the chain, a fatty acid or a label, without saying where or how much, and the attachment changes the mass by whatever it weighs.</p>

        <h2>Why any of this reaches a specification</h2>
        <p>A specification that says tripeptide is telling you the count, which sets the expected mass range and says something about how the material was made. A three-residue chain is three coupling cycles; a forty-residue chain is forty, with proportionally more opportunity for a <a href="article/peptide-synthesis/">deletion sequence</a> that a purity method then has to resolve.</p>
        <p>The vocabulary describes the molecule. What is in the vial comes from the measurements on the <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> and from a batch you can <a href="verify/">check</a>.</p>
      `,
      faq: [
        {
          "q": "What is the difference between a residue and an amino acid?",
          "a": "A residue is what remains of an amino acid after the peptide bond forms, which is the free molecule minus a water. A residue therefore weighs about eighteen less, and chain lengths are counted in residues."
        },
        {
          "q": "What do dipeptide, oligopeptide and polypeptide mean?",
          "a": "Dipeptide and tripeptide give exact counts of two and three residues. Oligopeptide means a short chain, conventionally up to around ten or twenty, and polypeptide means a long one. The last two have no enforced boundary."
        },
        {
          "q": "Where is the line between a peptide and a protein?",
          "a": "Conventionally around fifty residues, though nothing chemical happens at that count. What changes across the range is whether the chain has enough internal interactions to hold a stable fold, and the convention is applied inconsistently."
        },
        {
          "q": "Which direction is a peptide sequence written?",
          "a": "From the amino terminus to the carboxyl terminus, with residue 1 at the N-terminal end. Reading a sequence backwards gives a different molecule that usually has the same mass, so direction is part of the identity and mass will not catch the error."
        },
        {
          "q": "What does a notation like 7-36 mean?",
          "a": "That the peptide is residues seven through thirty-six of a longer precursor, in the precursor numbering. A suffix often follows to mark a C-terminal amide, which changes the mass by about a dalton."
        },
        {
          "q": "Is cyclic a length term?",
          "a": "No. It describes shape: the chain is closed into a ring, which changes the mass by the water lost in closing it. Branched and peptidomimetic likewise describe structure rather than length."
        }
      ],
      references: [
        {
          "text": "IUPAC-IUB Joint Commission on Biochemical Nomenclature (1984). Nomenclature and symbolism for amino acids and peptides. Biochemical Journal, 219(2), 345-373.",
          "url": "https://doi.org/10.1042/bj2190345"
        },
        {
          "text": "Merrifield, R.B. (1963). Solid Phase Peptide Synthesis. I. The Synthesis of a Tetrapeptide. Journal of the American Chemical Society, 85(14), 2149-2154.",
          "url": "https://doi.org/10.1021/ja00897a025"
        },
        {
          "text": "Senko, M.W., Beu, S.C., &amp; McLafferty, F.W. (1995). Determination of monoisotopic masses and ion populations for large biomolecules from resolved isotopic distributions. Journal of the American Society for Mass Spectrometry, 6(4), 229-233.",
          "url": "https://doi.org/10.1016/1044-0305(95)00017-8"
        },
        {
          "text": "White, C.J., &amp; Yudin, A.K. (2011). Contemporary strategies for peptide macrocyclization. Nature Chemistry, 3, 509-524.",
          "url": "https://doi.org/10.1038/nchem.1062"
        }
      ],
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
        <p class="lead">A cyclic peptide is a chain joined back to itself. The change sounds cosmetic and is not: closing the ring alters the mass, the stability, the behaviour on a column, and what an identity measurement can and cannot settle.</p>

        <h2>Three ways to close a ring</h2>
        <ul>
          <li><b>Head to tail.</b> The amino terminus joins the carboxyl terminus, leaving a continuous backbone with no free ends at all.</li>
          <li><b>Side chain to side chain.</b> Two side chains several positions apart are joined, most often as a lactam between an amine on one and a carboxyl on the other. The backbone keeps its ends; the loop sits inside the molecule.</li>
          <li><b>Disulfide.</b> Two cysteine side chains are oxidised together. This one is reversible, which matters below.</li>
        </ul>
        <p>Peptides in this catalogue that are cyclic, such as <a href="article/what-is-pt-141/">PT-141</a>, use the side-chain lactam route. A lactam is an ordinary amide bond, the same kind that links the backbone, built in a different place.</p>

        <h2>The mass changes, and by a known amount</h2>
        <p>Joining an amine to a carboxyl releases a water, so a peptide closed by a lactam or head to tail weighs about eighteen daltons less than the linear precursor it came from. A disulfide is different: it removes two hydrogens, about two daltons.</p>
        <p>Both differences are easy to measure, so a mass check confirms that cyclisation happened. That is the part a <a href="article/mass-spectrometry-peptide-research/">mass measurement</a> settles cleanly.</p>

        <h2>What it cannot settle</h2>
        <p>If more than one pair of side chains could have reacted, every possible product has the same formula and the same mass. A single mass measurement cannot say where the ring closed. Distinguishing the alternatives requires fragmenting the molecule and reading the pieces, which is what tandem mass spectrometry provides.</p>
        <p>This is the reason a certificate for a cyclic peptide is carrying more than it appears to when it reports a matching mass. The number answers a real question and not every question.</p>

        <h2>What the constraint buys</h2>
        <p>A linear chain samples an enormous number of shapes. Closing it removes most of them, so the molecule spends its time in a narrower set of conformations. That is the point of making one: a constrained shape is a defined shape.</p>
        <p>Removing the chain ends has a second effect. Enzymes that degrade peptides by chewing inward from a free terminus have nothing to grip on a head-to-tail cycle, so cyclic peptides are generally more resistant to that route. The strategy is well documented across the field. <a class="cite" href="https://doi.org/10.1038/nchem.1062" target="_blank" rel="noopener nofollow">(Reference: White &amp; Yudin, 2011)</a></p>
        <p>Constraint was also the design move that produced the potent melanocortin analogues of the late 1980s, which is where several compounds in this family trace their structure. <a class="cite" href="https://doi.org/10.1021/ja00191a044" target="_blank" rel="noopener nofollow">(Reference: Al-Obeidi et al., 1989)</a></p>

        <h2>Nature does it too</h2>
        <p>Cyclic peptides are not only a laboratory trick. Plants make head-to-tail cyclic peptides with internal disulfides that are unusually resistant to heat and to enzymes, and those natural products are studied partly as evidence of how much stability the topology can deliver. <a class="cite" href="https://doi.org/10.1016/s0041-0101(01)00129-5" target="_blank" rel="noopener nofollow">(Reference: Craik et al., 2001)</a></p>


        <h2>Size sets the difficulty</h2>
        <p>Not all rings are equally easy to close. Very small cycles strain the bond angles, and very large ones give the two ends too much room to find each other, so the ends spend their time apart. The sizes in between close most readily, and a chemist choosing where to put a bridge is partly choosing a ring size that cooperates.</p>
        <p>The position of the bridge also decides how much of the chain is inside the loop. A bridge between residues two and seven constrains a different portion of the molecule than one between residues one and eight, even though both produce a cyclic peptide by the same chemistry. <a class="cite" href="https://doi.org/10.1038/nchem.1062" target="_blank" rel="noopener nofollow">(Reference: White &amp; Yudin, 2011)</a></p>

        <h2>Partly cyclic is a real category</h2>
        <p>A molecule can carry a ring and still have free ends, which is what a side-chain bridge produces. Descriptions sometimes call this cyclic without qualification, and the difference matters: a head-to-tail cycle has no terminus for an enzyme to attack, while a side-chain bridge leaves both termini exposed.</p>
        <p>Reading a specification, the useful question is not whether the word cyclic appears but which atoms were joined.</p>

        <h2>Making one is harder than making a chain</h2>
        <p>The linear sequence is ordinary <a href="article/peptide-synthesis/">solid-phase synthesis</a>. The closure is an extra step with its own yield, and it competes with an unwanted reaction: at high concentration, chains join to each other instead of closing on themselves, producing dimers and larger species.</p>
        <p>Two approaches manage that. Closing the ring while the chain is still attached to the resin keeps chains physically separated, so each is more likely to find its own other end. Closing it in solution achieves the same effect by working dilute, which means large volumes for small amounts of product. Either way, whatever failed to cyclise is still present when purification begins. <a class="cite" href="https://doi.org/10.1038/nchem.1062" target="_blank" rel="noopener nofollow">(Reference: White &amp; Yudin, 2011)</a></p>

        <h2>On a column they behave differently</h2>
        <p>A constrained molecule presents a different surface than the open chain, so retention time on a <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase column</a> is not predictable from the sequence alone. The uncyclised precursor and the product usually separate, which is useful, since it means the purity measurement sees the failure.</p>

        <p>Storage follows the same logic as any dry peptide, with one addition: a compound held closed by a disulfide should be kept away from conditions that reduce it, since the ring is only as durable as the bond holding it. Our guide to <a href="article/how-to-store-research-peptides/">storing research peptides</a> covers the general case.</p>

        <h2>Reading a specification</h2>
        <p>A specification that says cyclic should say how: head to tail, a named side-chain bridge, or a disulfide. The three give different masses and different stabilities, and a disulfide can be reduced and reopened while a lactam cannot. Whatever it says, the material is established by the <a href="article/how-to-read-a-certificate-of-analysis/">certificate</a> and a batch you can <a href="verify/">check</a>.</p>
      `,
      faq: [
        {
          "q": "What makes a peptide cyclic?",
          "a": "The chain is joined back to itself: amino terminus to carboxyl terminus, one side chain to another, or two cysteines oxidised into a disulfide. Each route gives a different structure and a different mass change."
        },
        {
          "q": "How much does cyclisation change the mass?",
          "a": "Joining an amine to a carboxyl releases a water, so the product is about eighteen daltons lighter than the linear precursor. A disulfide instead removes two hydrogens, about two daltons."
        },
        {
          "q": "Can mass spectrometry confirm where a peptide cyclised?",
          "a": "Not from a single mass measurement. If more than one pair of side chains could have reacted, every product has the same formula and mass. Telling them apart requires fragmenting the molecule, which tandem mass spectrometry does."
        },
        {
          "q": "Why make a cyclic peptide at all?",
          "a": "A linear chain samples many shapes and a closed one samples far fewer, so the constraint gives a defined shape. Removing free chain ends also makes the molecule more resistant to enzymes that degrade peptides from a terminus."
        },
        {
          "q": "What goes wrong when a peptide is cyclised?",
          "a": "At high concentration chains react with each other instead of closing on themselves, producing dimers and larger species. Closing on the resin or working dilute in solution reduces that, and whatever failed to cyclise remains for purification to remove."
        },
        {
          "q": "Is a disulfide the same as a lactam bridge?",
          "a": "No. A disulfide can be reduced and reopened, so the constraint does not hold under reducing conditions. A lactam is an amide bond like those in the backbone and does not come apart that way."
        }
      ],
      references: [
        {
          "text": "White, C.J., &amp; Yudin, A.K. (2011). Contemporary strategies for peptide macrocyclization. Nature Chemistry, 3, 509-524.",
          "url": "https://doi.org/10.1038/nchem.1062"
        },
        {
          "text": "Al-Obeidi, F., Hadley, M.E., Pettitt, B.M., &amp; Hruby, V.J. (1989). Design of a new class of superpotent cyclic alpha-melanotropins. Journal of the American Chemical Society, 111(9), 3413-3416.",
          "url": "https://doi.org/10.1021/ja00191a044"
        },
        {
          "text": "Craik, D.J., Daly, N.L., Mulvenna, J., Plan, M.R., &amp; Trabi, M. (2001). Plant cyclotides: circular, knotted peptide toxins. Toxicon, 39(11), 1809-1813.",
          "url": "https://doi.org/10.1016/s0041-0101(01)00129-5"
        },
        {
          "text": "Chan, W.C., &amp; White, P.D. (1999). Fmoc Solid Phase Peptide Synthesis: A Practical Approach. Oxford University Press.",
          "url": "https://doi.org/10.1093/oso/9780199637256.001.0001"
        }
      ],
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
        <p class="lead">The molecular weight on a peptide specification is the number an identity measurement is checked against. It looks like a single fixed value and it is not: the same molecule has at least two legitimate masses, and the form in the vial can differ from the form in the calculation.</p>

        <h2>Calculating it from the sequence</h2>
        <p>A peptide is built by joining residues and losing a molecule of water at each bond. The mass follows directly: add up the residue masses for the sequence, then add the mass of one water for the two ends that were never joined. Nothing else is required, which is why a sequence alone determines a mass.</p>
        <p>Residue masses are tabulated, and they are not the masses of the free amino acids. A free amino acid weighs about eighteen more, because it still has the water that condensation removes. Confusing the two is the most common arithmetic error in this calculation. Our note on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides and proteins</a> covers the distinction.</p>

        <h2>Two masses, both correct</h2>
        <p>Elements occur as mixtures of isotopes, and the standard atomic weights are averages over those mixtures. <a class="cite" href="https://doi.org/10.1351/pac200678112051" target="_blank" rel="noopener nofollow">(Reference: Wieser, 2006)</a> That gives two ways to add up a formula.</p>
        <ul>
          <li><b>Average mass</b> uses those weighted values. It is the number to quote when you are weighing out material, because a milligram of powder contains the natural isotope mixture.</li>
          <li><b>Monoisotopic mass</b> uses the lightest abundant isotope of each element: carbon-12, hydrogen-1, nitrogen-14, oxygen-16. It is the number a mass spectrometer reports for a resolved peak, because the instrument separates the isotopes instead of averaging them.</li>
        </ul>
        <p>For a short peptide the two differ by a fraction of a dalton. The gap widens with size, since a larger molecule has more carbon atoms available to carry a heavier isotope, and above a few thousand daltons it exceeds a dalton. <a class="cite" href="https://doi.org/10.1016/1044-0305(95)00017-8" target="_blank" rel="noopener nofollow">(Reference: Senko et al., 1995)</a></p>


        <h2>Where residue masses come from</h2>
        <p>The tabulated residue mass for each amino acid is the mass of the free amino acid minus one water, because that is what condensation leaves behind in a chain. Glycine contributes about 57, alanine about 71, tryptophan about 186. The spread across the twenty standard residues runs from roughly 57 to roughly 186, which is why sequences of the same length can differ substantially in mass.</p>
        <p>Two consequences follow for anyone reading a spectrum. The difference between consecutive fragments in a tandem measurement equals the residue that was lost, which is how a sequence is read from a spectrum. And because leucine and isoleucine share a residue mass exactly, a mass measurement cannot separate them.</p>

        <h2>Modifications change the number</h2>
        <p>Anything attached to the chain adds its own mass. A fatty acid on an acylated peptide contributes a large increment; acetylation at the amino terminus adds about 42; forming a disulfide bond removes two hydrogens. Cyclisation removes a water, about 18, because closing the ring is another condensation.</p>
        <p>Each of these is large enough to see, so a specification that names a modification is naming something a measurement can confirm. It also means a calculated mass taken from the bare sequence will disagree with a modified compound, which is a common source of apparent mismatches.</p>

        <h2>Why an observed mass can sit beside the expected one</h2>
        <p>A measured value that differs from the specification is not automatically a problem. Several ordinary explanations come first.</p>
        <ul>
          <li><b>The two conventions.</b> A monoisotopic measurement compared against an average calculation will differ by about the gap described above.</li>
          <li><b>The C-terminus.</b> A chain ending in an amide weighs about one dalton less than the same chain ending in a free acid. They are different compounds, and the linker used in <a href="article/peptide-synthesis/">synthesis</a> decides which one you have.</li>
          <li><b>The salt form.</b> Peptides are usually isolated with a counterion from purification. The calculated mass of the free peptide does not include it.</li>
        </ul>
        <p>A specification that states which convention it uses and which form it describes removes all three ambiguities at once.</p>

        <h2>Mass and mass-to-charge are different numbers</h2>
        <p>An instrument using electrospray does not report mass. It reports mass-to-charge ratio, and a peptide in that source picks up several protons, so one molecule produces a series of peaks at different charge states. Software combines that series into a single mass.</p>
        <p>The series is why a spectrum with several evenly spaced peaks is usually one compound rather than several. The detail matters when reading a raw spectrum on a certificate instead of the summary figure. Our note on <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> covers the ionisation side.</p>

        <h2>What the number is doing on a certificate</h2>
        <p>Identity on a <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> is a comparison between a calculated mass and a measured one. The calculation comes from the intended sequence; the measurement comes from the batch. Agreement is evidence that the material is the intended molecule.</p>
        <p>It is evidence and not proof. Two sequences built from the same residues in a different order weigh the same, and a D-amino acid weighs exactly what its L counterpart weighs. Mass narrows the possibilities sharply without closing them, which is why purity and identity are reported together and why a batch can be tied to its paperwork by <a href="verify/">batch number</a>.</p>

        <p>Resolution decides which of the two conventions an instrument can report. An instrument that separates the isotope peaks gives a monoisotopic value; one that does not gives an average-like figure for the unresolved envelope. That is why the same batch measured on two instruments can yield two numbers that are both honest.</p>

        <h2>Weight is not content</h2>
        <p>One last distinction, because it causes real confusion. Molecular weight describes one molecule. It says nothing about how much of the powder in a vial is that molecule. Counterion, absorbed water and any <a href="article/excipients-in-peptides/">excipients</a> are part of the weighed mass, which is why net peptide content is a separate figure from both the molecular weight and the <a href="article/high-performance-liquid-chromatography-hplc/">chromatographic purity</a>.</p>
      `,
      faq: [
        {
          "q": "How is the molecular weight of a peptide calculated?",
          "a": "Add the residue masses for the sequence and add one water for the two ends that were never joined. Residue masses are about eighteen less than the corresponding free amino acids, because condensation removes a water at every bond."
        },
        {
          "q": "What is the difference between average and monoisotopic mass?",
          "a": "Average mass uses the standard atomic weights, which are averages over natural isotope mixtures, and is the number for weighing material. Monoisotopic mass uses the lightest abundant isotope of each element and is what a mass spectrometer reports for a resolved peak."
        },
        {
          "q": "Why do the two masses diverge as a peptide gets larger?",
          "a": "A larger molecule has more atoms that can carry a heavier isotope, so the average pulls further from the all-light value. For a short peptide the difference is a fraction of a dalton; above a few thousand daltons it exceeds one."
        },
        {
          "q": "Why might an observed mass differ from the specification?",
          "a": "Usually for one of three ordinary reasons: a monoisotopic measurement compared against an average calculation, a C-terminal amide instead of a free acid, which is about a dalton lighter, or a salt form whose counterion is not in the calculated mass."
        },
        {
          "q": "Does a mass spectrometer measure mass directly?",
          "a": "No. An electrospray instrument reports mass-to-charge ratio, and a peptide picks up several protons, producing a series of peaks at different charge states that software combines into one mass."
        },
        {
          "q": "Does molecular weight tell me how much peptide is in the vial?",
          "a": "No. It describes one molecule. Counterion, absorbed water and any excipients are part of the weighed powder, which is why net peptide content is a separate figure from both molecular weight and chromatographic purity."
        }
      ],
      references: [
        {
          "text": "Wieser, M.E. (2006). Atomic weights of the elements 2005 (IUPAC Technical Report). Pure and Applied Chemistry, 78(11), 2051-2066.",
          "url": "https://doi.org/10.1351/pac200678112051"
        },
        {
          "text": "Senko, M.W., Beu, S.C., &amp; McLafferty, F.W. (1995). Determination of monoisotopic masses and ion populations for large biomolecules from resolved isotopic distributions. Journal of the American Society for Mass Spectrometry, 6(4), 229-233.",
          "url": "https://doi.org/10.1016/1044-0305(95)00017-8"
        },
        {
          "text": "IUPAC-IUB Joint Commission on Biochemical Nomenclature (1984). Nomenclature and symbolism for amino acids and peptides. Biochemical Journal, 219(2), 345-373.",
          "url": "https://doi.org/10.1042/bj2190345"
        },
        {
          "text": "Aebersold, R., &amp; Mann, M. (2003). Mass spectrometry-based proteomics. Nature, 422, 198-207.",
          "url": "https://doi.org/10.1038/nature01511"
        }
      ],
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
        <p class="lead">A CAS number is a label, not a description. It carries no information about structure, formula or mass, and it cannot be derived from any of them. Its value is that it is unique and unambiguous: one registered substance, one number, no synonyms to argue about.</p>

        <h2>How the number is built</h2>
        <p>The format is up to ten digits in three parts separated by hyphens, as in 137525-51-0. The parts have no chemical meaning. Numbers are assigned in sequence as substances are registered, so a high first block indicates a recent registration and nothing else.</p>
        <p>The last digit is the exception. It is a check digit calculated from the others, which means a mistyped CAS number usually fails arithmetic rather than pointing at a different compound. That is a small but real safeguard when a number is copied by hand between a label, a certificate and a purchase order.</p>

        <h2>What the number identifies</h2>
        <p>It identifies a substance as registered, and the registry treats forms of the same compound as separate substances. A free acid and its sodium salt have different numbers. A hydrate and the anhydrous form have different numbers. Stereoisomers have different numbers.</p>
        <p>The practical consequence is that a CAS number on a label makes a claim about the form, not only the molecule. If a specification quotes the number for a free base and the vial contains a salt, the label and the material disagree even though the peptide is the same.</p>

        <h2>Where this gets awkward for peptides</h2>
        <p>Peptides purified by reversed-phase chromatography are usually isolated as salts, carrying trifluoroacetate or acetate from the purification. The peptide and its salt forms are different registered substances, so more than one number can be correct depending on which form is being described.</p>
        <p>Metal complexes are worse. A copper peptide exists as a species in equilibrium whose charge and counterion depend on conditions, so the registry number attaches to one particular way of writing it. Our notes on <a href="article/what-are-copper-peptides/">copper peptides</a> and on <a href="article/what-is-ghk-cu/">GHK-Cu</a> cover why the name does not pin down a formula there.</p>

        <h2>Not every compound has one</h2>
        <p>Registration is not automatic. A compound can be well characterised in the literature, catalogued elsewhere, and still have no CAS number attached to it in public sources. Newer research compounds sit in this position more often than older ones.</p>
        <p>The absence of a number is not evidence of anything about the material. It means the public chemical record is thinner, which shifts the burden onto the batch documentation.</p>

        <p>Catalogues compound the problem by renaming things for commercial reasons. A compound sold under a house name still has whatever registry number its structure earned, and the number is the thread back to the chemistry when the name has drifted.</p>

        <h2>The other identifiers you will meet</h2>
        <ul>
          <li><b>PubChem CID:</b> a database record number, assigned by the database. It links to a structure, a formula and computed properties.</li>
          <li><b>ChEMBL ID:</b> the same idea in a different database, oriented toward bioactivity data.</li>
          <li><b>InChI and the InChI Key:</b> an identifier derived from the structure itself by a published algorithm, so two people with the same structure generate the same string without consulting any registry. <a class="cite" href="https://doi.org/10.1186/s13321-015-0068-4" target="_blank" rel="noopener nofollow">(Reference: Heller et al., 2015)</a></li>
        </ul>
        <p>The last one is the important contrast. A CAS number has to be looked up because it was assigned. An InChI can be computed, so it carries the structure inside it.</p>


        <h2>Why a unique label was needed at all</h2>
        <p>Chemical names are not unique. One compound can carry a systematic name, several trivial names, a research code, an international nonproprietary name and whatever a catalogue decides to print. Some of those names are ambiguous on their own, and some are shared between compounds that differ in ways a name does not capture.</p>
        <p>Nomenclature rules exist and they help. The conventions for naming amino acids and peptides, for instance, are set out by the joint IUPAC and IUB commission. <a class="cite" href="https://doi.org/10.1042/bj2190345" target="_blank" rel="noopener nofollow">(Reference: IUPAC-IUB, 1984)</a> But a systematic name for a forty-residue peptide is unusable in practice, which is why a short arbitrary number earns its place.</p>

        <h2>The number is not the measurement</h2>
        <p>One habit worth resisting is treating a matching CAS number as a verification step. It confirms that the label names the substance the specification intends. It cannot confirm that the material is that substance, because nothing about the number is measured from the sample.</p>
        <p>Every identifier shares this limitation, including the computed ones. An InChI derived from a drawn structure describes the structure someone drew, not the powder someone weighed.</p>

        <h2>Checking one</h2>
        <p>A CAS number resolves in the public chemical databases. Entering it should return a compound whose name, formula and mass match what the specification says. Three things are worth comparing rather than one: if the number resolves but the formula does not match the label, the disagreement is real and worth asking about.</p>
        <p>This is also the fastest way to catch the difference between a free peptide and its complex or salt, because the two resolve to different records with different masses.</p>

        <p>One more comparison is worth making while you are there. The mass in the database record is calculated from the structure, and the mass on a certificate is measured from the batch. Two numbers arrived at by different routes agreeing is a stronger statement than either alone.</p>

        <h2>What a CAS number does not establish</h2>
        <p>It says a substance with that identity has been registered. It says nothing about the vial: not the purity, not whether the material is that substance, not which batch it came from.</p>
        <p>Those questions are answered by measurement. A purity figure from <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and an identity result from <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, reported on a <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> tied to a batch number you can <a href="verify/">check</a>, are what connect a registry entry to the powder in front of you.</p>
      `,
      faq: [
        {
          "q": "What is a CAS number?",
          "a": "A unique registry identifier for a chemical substance, up to ten digits in three hyphenated parts. It carries no structural information and cannot be derived from a formula; numbers are assigned in sequence as substances are registered."
        },
        {
          "q": "Does the last digit mean anything?",
          "a": "Yes. It is a check digit calculated from the preceding digits, so a mistyped CAS number usually fails the arithmetic instead of resolving to a different compound."
        },
        {
          "q": "Do a peptide and its salt have the same CAS number?",
          "a": "No. The registry treats a free acid, its salts, hydrates and stereoisomers as separate substances with separate numbers. Since peptides are usually isolated as salts after purification, more than one number can be correct depending on which form is described."
        },
        {
          "q": "Does every compound have a CAS number?",
          "a": "Registration is not automatic, so a well characterised compound can lack one in public sources. The absence says nothing about the material; it means the public record is thinner and the batch documentation carries more weight."
        },
        {
          "q": "How is an InChI different from a CAS number?",
          "a": "An InChI is computed from the structure by a published algorithm, so anyone with the same structure produces the same string. A CAS number is assigned by a registry and has to be looked up."
        },
        {
          "q": "Does a CAS number on a label prove what is in the vial?",
          "a": "No. It states which substance the label claims. Purity and identity come from measurement, reported on a certificate of analysis tied to a specific batch."
        }
      ],
      references: [
        {
          "text": "Heller, S.R., McNaught, A., Pletnev, I., Stein, S., &amp; Tchekhovskoi, D. (2015). InChI, the IUPAC International Chemical Identifier. Journal of Cheminformatics, 7, 23.",
          "url": "https://doi.org/10.1186/s13321-015-0068-4"
        },
        {
          "text": "IUPAC-IUB Joint Commission on Biochemical Nomenclature (1984). Nomenclature and symbolism for amino acids and peptides. Biochemical Journal, 219(2), 345-373.",
          "url": "https://doi.org/10.1042/bj2190345"
        },
        {
          "text": "Senko, M.W., Beu, S.C., &amp; McLafferty, F.W. (1995). Determination of monoisotopic masses and ion populations for large biomolecules from resolved isotopic distributions. Journal of the American Society for Mass Spectrometry, 6(4), 229-233.",
          "url": "https://doi.org/10.1016/1044-0305(95)00017-8"
        },
        {
          "text": "Wieser, M.E. (2006). Atomic weights of the elements 2005 (IUPAC Technical Report). Pure and Applied Chemistry, 78(11), 2051-2066.",
          "url": "https://doi.org/10.1351/pac200678112051"
        }
      ],
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
        <p class="lead">Ninety-nine percent by HPLC is the most quoted number in this field and the least examined. It is a real measurement with a precise meaning, and that meaning is narrower than most people assume.</p>

        <h2>What the number is</h2>
        <p>The sample is pushed through a column that separates its components, a detector records each one as it leaves, and the result is a chromatogram: a trace with peaks. The target peptide is the main peak. Purity is the area under that peak divided by the total area of all the peaks the detector saw, expressed as a percentage.</p>
        <p>So 99 percent says the target accounted for about 99 percent of what this method detected under these conditions. Every part of that sentence is doing work.</p>

        <h2>Area is not mass</h2>
        <p>This is the misreading that matters most. Area percent answers a question about the peaks. It does not answer what share of the powder in the vial is peptide.</p>
        <p>Counterion from purification, absorbed water and any <a href="article/excipients-in-peptides/">excipients</a> are part of the weighed material and contribute no peak at the detection wavelength. A batch can be 99 percent pure by area and well under 99 percent peptide by mass, with no contradiction between the two figures. Net peptide content is the separate number that answers the second question, and a thorough <a href="article/how-to-read-a-certificate-of-analysis/">certificate</a> reports both.</p>

        <h2>Detected is doing work too</h2>
        <p>Peptide methods normally detect in the ultraviolet, and the wavelength decides what is visible. Around 214 nm the amide bond itself absorbs, so essentially any peptide registers. At 280 nm the signal comes mainly from tryptophan and tyrosine, so a sequence without aromatic residues is nearly invisible.</p>
        <p>Anything with no chromophore at the chosen wavelength contributes nothing to the total, which means it cannot reduce the percentage. The same sample analysed at two wavelengths can return two different purity figures, both honest.</p>

        <h2>Under these conditions is doing work as well</h2>
        <p>The column, the gradient, the flow rate and the run time all change what separates from what. A shallow gradient resolves species that a steep one merges into a single peak, and two laboratories can report different figures for the same batch because one gave the separation more room. <a class="cite" href="https://doi.org/10.1002/0471973106" target="_blank" rel="noopener nofollow">(Reference: Dong, 2006)</a> <a class="cite" href="https://doi.org/10.1002/9780470508183" target="_blank" rel="noopener nofollow">(Reference: Snyder et al., 2009)</a></p>
        <p>A percentage quoted without its conditions is a statement rather than a result. Guidance on validating analytical procedures exists because a number is inseparable from the procedure that produced it. <a class="cite" href="https://doi.org/10.1201/b12039" target="_blank" rel="noopener nofollow">(Reference: Swartz &amp; Krull, 2012)</a></p>


        <h2>Why the acid in the mobile phase matters to the number</h2>
        <p>Peptide methods run at low pH with an ion-pairing additive, usually trifluoroacetic acid, which sharpens peaks and improves the separation of closely related sequences. The concentration of that additive changes retention and resolution, and the effect has been studied systematically. <a class="cite" href="https://doi.org/10.1016/j.chroma.2005.02.047" target="_blank" rel="noopener nofollow">(Reference: Shibue et al., 2005)</a></p>
        <p>Two consequences reach the certificate. A method with too little additive may fail to resolve an impurity that a better-tuned one separates, which raises the apparent purity. And for anything that is not a simple peptide, such as a metal complex, acidic conditions can shift the material toward its dissociated form, so the peak being measured may not be the species named on the label.</p>

        <h2>A percentage has a precision</h2>
        <p>Integration is not exact. Where the software places the start and end of a peak, how it draws the baseline under a drifting trace, and whether it groups a shoulder with the main peak or separates it all move the result. Two analysts integrating the same chromatogram can differ in the first decimal place.</p>
        <p>This is why the difference between 99.1 and 99.4 percent usually carries less information than it appears to, while the difference between 95 and 99 is real.</p>

        <h2>What hides inside the main peak</h2>
        <p>An impurity that leaves the column at the same time as the target is counted as target. The usual candidates are the ones <a href="article/peptide-synthesis/">synthesis</a> produces: deletion sequences missing a single residue, or chains that kept a protecting group. They resemble the target closely enough that resolving them is exactly what the method has to do well.</p>
        <p>A shoulder on the main peak, or a small peak sitting very close to it, is therefore more informative than a clean number. If the certificate includes the trace, the trace is worth reading. <a class="cite" href="https://doi.org/10.1002/0470087951" target="_blank" rel="noopener nofollow">(Reference: Kazakevich &amp; LoBrutto, 2006)</a></p>

        <h2>Purity says nothing about identity</h2>
        <p>A chromatogram reports that one component dominates. It has no opinion about what that component is. A sample could be 99 percent pure and be 99 percent of the wrong molecule, and the chromatogram would look the same.</p>
        <p>Identity comes from <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, which measures mass and compares it with the mass calculated from the intended sequence. Purity and identity are two questions, and a document answering one of them is half a document.</p>

        <h2>And nothing about contamination of other kinds</h2>
        <p>Endotoxin is the clearest example. It is not a peptide, it does not behave like one on the column, and a purity figure is not designed to see it. Where the intended work is sensitive to it, <a href="article/endotoxins-in-research-peptides/">endotoxin content</a> is measured by its own method and reported as its own line.</p>
        <p>The same applies to residual solvents and to water content. Each is a separate determination, and none of them moves the purity percentage.</p>

        <h2>Reading a specification</h2>
        <p>A figure such as "≥99% by HPLC" is a specification, not a result: it states the threshold the batch was required to meet. A result is a measured number for a named batch on a named date. The two look similar on a page and mean different things, which is why the batch number is the thread that connects a claim to a measurement you can <a href="verify/">check</a>. A specification applies to every batch; a result applies to one.</p>
      `,
      faq: [
        {
          "q": "What does 99 percent by HPLC mean?",
          "a": "That the target peak accounted for about 99 percent of the total peak area the method detected, under the conditions used. It is a statement about the detected components, not about the weight of the powder."
        },
        {
          "q": "Is 99 percent pure the same as 99 percent peptide?",
          "a": "No. Counterion, absorbed water and any excipients are part of the weighed material and produce no peak. A batch can be 99 percent pure by area and considerably less than that by mass. Net peptide content is the separate figure."
        },
        {
          "q": "Can the same sample give two different purity figures?",
          "a": "Yes. The detection wavelength changes what is visible, and the gradient and column change what separates. A shallow gradient can resolve species that a steep one merges. Both results can be honest."
        },
        {
          "q": "Can an impurity hide in the main peak?",
          "a": "Yes. Anything that leaves the column at the same time as the target is counted as target. Deletion sequences missing a single residue are the usual candidates, which is why a shoulder on the main peak is worth looking at."
        },
        {
          "q": "Does a purity figure confirm the peptide is the right one?",
          "a": "No. A chromatogram shows that one component dominates without identifying it. Identity comes from mass spectrometry, comparing the measured mass with the mass calculated from the intended sequence."
        },
        {
          "q": "What is the difference between a specification and a result?",
          "a": "A specification such as ≥99% states the threshold a batch was required to meet. A result is a measured value for a named batch on a named date. The batch number is what connects the two."
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
          "text": "Kazakevich, Y.V., &amp; LoBrutto, R. (Eds.). (2006). HPLC for Pharmaceutical Scientists. Wiley.",
          "url": "https://doi.org/10.1002/0470087951"
        },
        {
          "text": "Swartz, M.E., &amp; Krull, I.S. (2012). Handbook of Analytical Validation. CRC Press.",
          "url": "https://doi.org/10.1201/b12039"
        },
        {
          "text": "Shibue, M., Mant, C.T., &amp; Hodges, R.S. (2005). Effect of anionic ion-pairing reagent concentration (1-60 mM) on reversed-phase liquid chromatography elution behaviour of peptides. Journal of Chromatography A, 1080(1), 58-67.",
          "url": "https://doi.org/10.1016/j.chroma.2005.02.047"
        }
      ],
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
        <p class="lead">Calling a compound a melanocortin receptor agonist names a family, not a target. There are five of these receptors, spread across different tissues, and a molecule that reaches one will usually touch some of the others. Which ones, and how strongly, is the question that most work on these compounds is built around.</p>

        <h2>Five receptors, cloned in a burst</h2>
        <p>The family is labelled MC1R through MC5R. The first members were cloned in 1992, and the rest followed quickly, which is why so much of the foundational literature clusters in a few years. <a class="cite" href="https://doi.org/10.1126/science.1325670" target="_blank" rel="noopener nofollow">(Reference: Mountjoy et al., 1992)</a> They are G protein-coupled receptors, and they are among the smaller ones: the extracellular portions that many receptors use to grip a large ligand are short here. Recognition happens mostly within the membrane-spanning bundle, which sets a limit on how much of a ligand the receptor can read.</p>
        <p>Their distribution across tissues differs, and that distribution is most of what separates them functionally. A receptor only acts where it is expressed.</p>

        <h2>One precursor, several signals</h2>
        <p>The natural ligands for these receptors come from a single precursor protein, proopiomelanocortin, which is cut into several smaller peptides. One gene therefore yields several distinct signalling molecules, and which ones appear depends on how the precursor is processed in a given tissue. <a class="cite" href="https://doi.org/10.1210/er.2006-0034" target="_blank" rel="noopener nofollow">(Reference: Cone, 2006)</a></p>
        <p>Those fragments overlap in sequence, and several of them bind more than one receptor subtype. The system was built with cross-talk in it, which is why selectivity is difficult to achieve and interesting to measure.</p>

        <h2>A family with natural antagonists</h2>
        <p>Most receptor systems are studied with agonists that occur in nature and antagonists that chemists build. The melanocortin family has endogenous antagonists as well: proteins that bind these receptors and block them instead of switching them on. <a class="cite" href="https://doi.org/10.1210/er.2006-0034" target="_blank" rel="noopener nofollow">(Reference: Cone, 2006)</a></p>
        <p>The existence of a natural blocker matters when reading results, because the baseline state of the receptor in a tissue is set by the balance between two opposing signals. Our note on <a href="article/agonist-vs-antagonist/">agonists and antagonists</a> covers the vocabulary, including why a receptor can carry activity with nothing bound to it at all.</p>

        <h2>What the subtypes are associated with</h2>
        <p>The subtypes are linked to different processes. MC1R is the one associated with pigmentation, which is where the family name comes from. Others are tied to central signalling in the nervous system, and others to peripheral tissues. <a class="cite" href="https://doi.org/10.1210/er.2006-0034" target="_blank" rel="noopener nofollow">(Reference: Cone, 2006)</a></p>
        <p>The honest summary is that a compound described as acting on melanocortin receptors has not been described precisely. The subtype, and how cleanly it is reached, is the information that matters.</p>

        <h2>Why selectivity is hard here</h2>
        <p>Receptors in one family share the regions that recognise a ligand, and the melanocortin family shares them closely. A peptide shaped to fit one subtype fits its relatives to some degree, so selectivity is measured as a ratio rather than claimed as an absolute: this subtype over that one, by some factor, under stated conditions.</p>
        <p>One route around the problem is to constrain the peptide's shape. Cyclic analogues, in which a bridge between two side chains locks the backbone, were developed for this family in the 1980s and proved considerably more potent than their flexible counterparts. <a class="cite" href="https://doi.org/10.1021/ja00191a044" target="_blank" rel="noopener nofollow">(Reference: Al-Obeidi et al., 1989)</a> <a href="article/what-is-pt-141/">PT-141</a> belongs to that structural lineage, and our note on <a href="article/cyclic-vs-linear-peptides/">cyclic and linear peptides</a> covers what the constraint does.</p>


        <h2>The shared core of the ligands</h2>
        <p>The melanocortin peptides overlap in a short stretch of sequence that carries most of the receptor recognition. A handful of residues in that stretch does the essential work, which is why very short synthetic analogues can still activate these receptors while much longer fragments of the precursor are not needed. <a class="cite" href="https://doi.org/10.1210/er.2006-0034" target="_blank" rel="noopener nofollow">(Reference: Cone, 2006)</a></p>
        <p>That compact recognition motif is convenient for a chemist and inconvenient for selectivity. A small set of residues gives fewer positions to vary, so the differences that distinguish one subtype from another have to be found within a narrow space. It is also why constraining the backbone, rather than lengthening the sequence, became the main design strategy for this family.</p>

        <h2>What a receptor number does not tell you</h2>
        <p>Subtype labels are useful shorthand and easy to over-read. MC1R and MC4R are different proteins with different distributions, but a compound that reaches one at a given concentration may reach the other at a concentration only a few times higher. A selectivity of tenfold and a selectivity of a thousandfold are both reported as selective, and only one of them supports attributing an observation to a single subtype.</p>

        <h2>Reading a claim about selectivity</h2>
        <p>A selectivity figure is a comparison produced by an assay, so it carries the assay's assumptions with it. How many receptors were present, which downstream event was measured, and which subtypes were included in the comparison all shape the number. Two papers can report different selectivity for the same compound without either being wrong. The number belongs to the experiment as much as to the molecule.</p>

        <p>The same caution applies to the word potent. Potency and selectivity are separate measurements, and a compound can be strong at a receptor while being poor at telling that receptor apart from its neighbours.</p>

        <h2>What none of this tells you about a vial</h2>
        <p>Receptor pharmacology describes a molecule. It says nothing about the material in front of you: whether this batch contains that molecule, and how much of it does. Those come from a purity measurement by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and an identity measurement by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, reported on a <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> tied to a batch you can <a href="verify/">check</a>.</p>

        <h2>Research use only</h2>
        <p>This article is background pharmacology for laboratory context. All products sold by Codex Research are strictly for research and development, are not for human or animal consumption, and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What are melanocortin receptors?",
          "a": "A family of five G protein-coupled receptors, labelled MC1R through MC5R, distributed across different tissues. The first members were cloned in 1992. They respond to peptides derived from a single precursor protein."
        },
        {
          "q": "Where do the natural ligands come from?",
          "a": "From one precursor protein, proopiomelanocortin, which is cut into several smaller peptides. A single gene therefore yields several signalling molecules, and which ones appear depends on how the precursor is processed in a given tissue."
        },
        {
          "q": "Does this family have natural antagonists?",
          "a": "Yes, which is unusual. Proteins exist that bind these receptors and block them instead of activating them, so the baseline state of a receptor in a tissue reflects the balance between two opposing signals."
        },
        {
          "q": "Why is subtype selectivity difficult for melanocortin compounds?",
          "a": "Because the receptors in the family share the regions that recognise a ligand. A peptide shaped to fit one subtype fits its relatives to some degree, so selectivity is reported as a ratio between subtypes under stated conditions, not as an absolute."
        },
        {
          "q": "How do cyclic analogues fit in?",
          "a": "Constraining a peptide into a ring with a bridge between two side chains narrows the shapes it can adopt. Cyclic analogues developed for this family in the 1980s proved considerably more potent than flexible ones, and later melanocortin peptides belong to that lineage."
        },
        {
          "q": "Can two papers report different selectivity for the same compound?",
          "a": "Yes. A selectivity figure comes from an assay and carries its assumptions: how many receptors were present, which downstream event was measured, and which subtypes were compared. Different systems can give different numbers without either being wrong."
        }
      ],
      references: [
        {
          "text": "Mountjoy, K.G., Robbins, L.S., Mortrud, M.T., &amp; Cone, R.D. (1992). The cloning of a family of genes that encode the melanocortin receptors. Science, 257(5074), 1248-1251.",
          "url": "https://doi.org/10.1126/science.1325670"
        },
        {
          "text": "Cone, R.D. (2006). Studies on the physiological functions of the melanocortin system. Endocrine Reviews, 27(7), 736-749.",
          "url": "https://doi.org/10.1210/er.2006-0034"
        },
        {
          "text": "Al-Obeidi, F., Hadley, M.E., Pettitt, B.M., &amp; Hruby, V.J. (1989). Design of a new class of superpotent cyclic alpha-melanotropins. Journal of the American Chemical Society, 111(9), 3413-3416.",
          "url": "https://doi.org/10.1021/ja00191a044"
        },
        {
          "text": "Kenakin, T. (2004). Principles: receptor theory in pharmacology. Trends in Pharmacological Sciences, 25(4), 186-192.",
          "url": "https://doi.org/10.1016/j.tips.2004.02.012"
        }
      ],
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
        <p class="lead">Growth hormone secretagogue names a category by what a compound targets. The word secretagogue means something that prompts a cell to release a substance, so the label says where the molecule acts and leaves everything else open.</p>

        <h2>The receptor was found before its natural signal</h2>
        <p>The usual order in pharmacology is that a hormone is identified and its receptor found afterwards. This class ran the other way. Synthetic compounds that triggered growth hormone release were known first, and the receptor they acted on was identified in 1996 and named after them: the growth hormone secretagogue receptor. <a class="cite" href="https://doi.org/10.1126/science.273.5277.974" target="_blank" rel="noopener nofollow">(Reference: Howard et al., 1996)</a></p>
        <p>It remained an orphan receptor until 1999, when its endogenous ligand, ghrelin, was identified. <a class="cite" href="https://doi.org/10.1038/45230" target="_blank" rel="noopener nofollow">(Reference: Kojima et al., 1999)</a> That history is why the same receptor carries two names in the literature, and why a compound in this class is described both as a growth hormone secretagogue and as a ghrelin receptor agonist. Both are correct.</p>

        <h2>The natural ligand carries a fatty acid</h2>
        <p>Ghrelin has a feature that is unusual among peptide hormones: a fatty acid attached to one of its residues, added by a dedicated enzyme. The unmodified peptide does not activate the receptor the way the modified one does. <a class="cite" href="https://doi.org/10.1038/45230" target="_blank" rel="noopener nofollow">(Reference: Kojima et al., 1999)</a></p>
        <p>The detail is worth knowing when comparing compounds, because a synthetic secretagogue does not need to imitate that modification to reach the same receptor. Several of them are small peptides with no fatty acid at all.</p>


        <h2>Why an orphan receptor is a useful thing to find</h2>
        <p>A receptor identified before anyone knows what binds to it naturally is called an orphan. Finding one poses an immediate question, since a receptor that exists is presumably responding to something, and the search for that something is a well-defined project with a clear endpoint.</p>
        <p>The synthetic compounds that led to the receptor kept their usefulness afterwards. A molecule that activates a receptor is a tool for asking what that receptor does, independently of whether it resembles the natural ligand, and the compounds in this class were being used that way for years before ghrelin was found.</p>

        <h2>Upstream is doing work in that sentence</h2>
        <p>Describing a receptor as sitting upstream of a pathway says the signal passes through several steps before anything measurable happens at the other end. Each of those steps is a place where something else can intervene, and where the state of the system decides how much of the signal gets through.</p>
        <p>This is why observations from these compounds depend heavily on the model they were made in. A result from cultured cells and a result from an intact animal are answering related but different questions, and neither transfers automatically to the other.</p>

        <h2>The class is chemically mixed</h2>
        <p>Membership is defined by the target, not by structure, so the compounds grouped under this label have little in common as molecules. Some are short peptides, some are peptide-like, and some are not peptides. Our note on <a href="article/what-is-ipamorelin/">ipamorelin</a> covers a pentapeptide in the class whose five residues include units no organism builds.</p>
        <p>The consequence for reading a catalogue is that the label predicts nothing about the material: not the size, not the stability, not what the synthesis or the analysis required.</p>

        <h2>What selective means here</h2>
        <p>Earlier compounds in the class engaged their target and also touched other hormone axes. Selectivity, in this context, describes a compound that acts on its target pathway with limited activity elsewhere, and ipamorelin was characterised as the first with that profile. <a class="cite" href="https://doi.org/10.1530/eje.0.1390552" target="_blank" rel="noopener nofollow">(Reference: Raun et al., 1998)</a></p>
        <p>For a research tool the value of a clean profile is interpretive. The fewer pathways a compound touches, the fewer alternative explanations there are for an observation. Selectivity is always a comparison under stated conditions, never an absolute, which our note on <a href="article/agonist-vs-antagonist/">agonists and antagonists</a> covers alongside why two papers can report different figures for one compound.</p>
        <p>These are preclinical, model-based observations. Compounds in this class are supplied strictly as research compounds, and nothing here describes use in people or animals.</p>

        <h2>Secretagogue is not the same as the hormone</h2>
        <p>A distinction worth stating plainly, because the category name invites the confusion. A secretagogue is not growth hormone. It is a separate molecule studied for its action on a receptor that sits upstream of that pathway, and growth hormone itself is a protein of around two hundred residues, an entirely different kind of material to make and to verify.</p>
        <p>Our note on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides and proteins</a> covers why that size difference changes everything about handling.</p>

        <h2>What the label says about a vial</h2>
        <p>Nothing. It places a molecule in a category based on published work about its target. The category is drawn from published pharmacology, not from anything measured in the vial. Whether a batch contains that molecule, and what share of the powder it represents, comes from a purity measurement by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and an identity measurement by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>.</p>
        <p>For short peptides in this class the identity question carries a specific wrinkle: several contain D-configured residues, and a D residue has exactly the same mass as its L counterpart. Mass alone cannot catch that substitution, which is one more reason purity and identity are reported together on a <a href="article/how-to-read-a-certificate-of-analysis/">certificate</a> tied to a batch you can <a href="verify/">check</a>.</p>

        <p>Where a specification names a D residue explicitly, it is naming something the supplier has to have controlled during synthesis, since the correct isomer has to be used at that position in the first place.</p>

        <h2>Research use only</h2>
        <p>This article is background pharmacology for laboratory context. All products sold by Codex Research are strictly for research and development, are not for human or animal consumption, and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What is a growth hormone secretagogue?",
          "a": "A compound studied for its action on the receptor that sits upstream of growth hormone release. A secretagogue is anything that prompts a cell to release a substance, so the label names the target rather than a structure or an effect."
        },
        {
          "q": "Is the ghrelin receptor the same as the growth hormone secretagogue receptor?",
          "a": "Yes. The receptor was identified in 1996 through the synthetic compounds that acted on it and named after them. Its natural ligand, ghrelin, was identified in 1999, which is why the same receptor carries both names."
        },
        {
          "q": "What is unusual about ghrelin itself?",
          "a": "It carries a fatty acid attached to one of its residues, added by a dedicated enzyme, and the unmodified peptide does not activate the receptor the way the modified one does. Synthetic secretagogues do not need that modification to reach the same receptor."
        },
        {
          "q": "Do compounds in this class resemble each other?",
          "a": "Not necessarily. Membership is defined by the target, so the group includes short peptides, peptide-like molecules and compounds that are not peptides at all. The label predicts nothing about size, stability or how the material was made."
        },
        {
          "q": "What does selective mean for a secretagogue?",
          "a": "That the compound acts on its target pathway with limited activity at other hormone axes that earlier compounds also affected. It is a comparison under stated conditions, not an absolute property."
        },
        {
          "q": "Is a secretagogue the same as growth hormone?",
          "a": "No. Growth hormone is a protein of around two hundred residues. A secretagogue is a separate and usually much smaller molecule studied for its action on a receptor upstream of that pathway."
        }
      ],
      references: [
        {
          "text": "Howard, A.D., et al. (1996). A receptor in pituitary and hypothalamus that functions in growth hormone release. Science, 273(5277), 974-977.",
          "url": "https://doi.org/10.1126/science.273.5277.974"
        },
        {
          "text": "Kojima, M., et al. (1999). Ghrelin is a growth-hormone-releasing acylated peptide from stomach. Nature, 402, 656-660.",
          "url": "https://doi.org/10.1038/45230"
        },
        {
          "text": "Raun, K., et al. (1998). Ipamorelin, the first selective growth hormone secretagogue. European Journal of Endocrinology, 139(5), 552-561.",
          "url": "https://doi.org/10.1530/eje.0.1390552"
        },
        {
          "text": "Kenakin, T. (2004). Principles: receptor theory in pharmacology. Trends in Pharmacological Sciences, 25(4), 186-192.",
          "url": "https://doi.org/10.1016/j.tips.2004.02.012"
        }
      ],
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
        <p class="lead">GLP-1 and GIP appear together so often that they read as one thing with two names. They are two hormones, from two genes, released by two kinds of cell, acting on two receptors. The differences are what make a compound that engages both worth studying at all.</p>

        <h2>What they share</h2>
        <p>Both are <a href="article/what-are-incretins/">incretins</a>: gut hormones released when nutrients arrive, contributing to the insulin response that follows. Both act through receptors in the same structural family, the one that also contains the glucagon and secretin receptors. <a class="cite" href="https://doi.org/10.1124/pr.55.1.6" target="_blank" rel="noopener nofollow">(Reference: Mayo et al., 2003)</a> And both are cut by the same enzyme at the same position, which is covered below.</p>

        <h2>Different origins</h2>
        <p>Each hormone comes from its own precursor protein, encoded by its own gene, and each is released by a different population of enteroendocrine cells. The cells that release GIP are concentrated in the upper small intestine. The cells that release GLP-1 are more common further along. <a class="cite" href="https://doi.org/10.1053/j.gastro.2007.03.054" target="_blank" rel="noopener nofollow">(Reference: Baggio &amp; Drucker, 2007)</a></p>
        <p>That geography has a practical consequence for reading the literature. An experiment that changes where nutrients are absorbed changes the balance between the two signals, so two studies can describe the same system and see different mixtures.</p>

        <h2>Different receptors, and why that is the whole point</h2>
        <p>The GIP receptor and the GLP-1 receptor are separate proteins with separate distributions across tissues. Activating one does not activate the other. Both feed into the regulation of glucose, and both belong to the same receptor class, but they are not two doors into the same room.</p>
        <p>This is what makes a specific laboratory question possible: what changes when a single molecule engages both at once, compared with engaging either alone? A question like that only has meaning because the receptors are distinct.</p>

        <p>Tissue distribution is the second half of that answer. A receptor only matters where it is expressed, so two receptors that both regulate glucose can still reach different tissues and produce different patterns of activity from the same starting signal.</p>

        <h2>Both are clipped by the same enzyme</h2>
        <p>Dipeptidyl peptidase-4 removes the first two residues from the end of both hormones, and the clipped product no longer activates the receptor the way the intact form does. <a class="cite" href="https://doi.org/10.1016/s0167-0115(99)00089-0" target="_blank" rel="noopener nofollow">(Reference: Mentlein, 1999)</a></p>
        <p>The shared vulnerability explains a shared design pattern. Synthetic compounds aimed at either receptor tend to carry a substitution near that cleavage site, and many also carry a fatty acid chain that lets them associate with serum albumin and be cleared more slowly. <a class="cite" href="https://doi.org/10.1007/s13318-020-00664-y" target="_blank" rel="noopener nofollow">(Reference: Hijazi, 2021)</a> Both modifications are visible in the molecule, and both change its mass and its behaviour on a column.</p>


        <h2>How the receptors hold their ligand</h2>
        <p>Receptors in this family are built in two parts: a large domain outside the cell and the usual seven membrane-spanning helices. The peptide binds across both. One end of the hormone is gripped by the extracellular domain, and the other end reaches into the core of the transmembrane bundle, where it does the work of switching the receptor on. <a class="cite" href="https://doi.org/10.1124/pr.55.1.6" target="_blank" rel="noopener nofollow">(Reference: Mayo et al., 2003)</a></p>
        <p>The arrangement explains two things at once. It is why both hormones are long peptides instead of small molecules, since a short ligand cannot reach both sites. And it is why a chemist has room to work: a molecule that touches the receptor along an extended interface tolerates substitution at positions that are not doing the binding, which is where the modifications in synthetic compounds go.</p>

        <h2>Names and numbers</h2>
        <p>Both hormones appear in the literature with numeric ranges attached, because each is a fragment cut from a longer precursor and more than one fragment exists. Some circulating forms end in an amide instead of a free acid. Those details are not bookkeeping: they change the formula and therefore the mass, so a specification that quotes a range and an ending is quoting something an identity measurement can confirm or contradict.</p>

        <h2>Which is better studied</h2>
        <p>GLP-1 has the larger literature by a wide margin, and for years the GIP arm attracted less attention. That imbalance is part of why dual engagement became an active question: the less-studied receptor was the open variable.</p>
        <p>Anyone reading older work should keep the dates in view. Conclusions drawn when one arm was barely characterised are not wrong, but they were drawn with less of the picture available.</p>

        <h2>Counting receptors is not measuring activity</h2>
        <p>Compounds in this space are often described by how many receptors they engage: one for a GLP-1 agonist, two for a <a href="article/what-is-tirzepatide/">dual agonist</a>, three for a <a href="article/what-is-retatrutide/">triple agonist</a> that adds the glucagon receptor. The count is easy to state and easy to over-read. It describes how many targets a molecule was designed to reach, and says nothing about how strongly it reaches each one.</p>
        <p>A compound can engage two receptors unevenly, and it can favour one downstream route over another at the same receptor. One dual agonist has been characterised in exactly those terms. <a class="cite" href="https://doi.org/10.1172/jci.insight.140532" target="_blank" rel="noopener nofollow">(Reference: Willard et al., 2020)</a> The vocabulary for this sits in our note on <a href="article/agonist-vs-antagonist/">agonists and antagonists</a>, and the short version is that "dual" is a label, not a measurement.</p>

        <h2>What the comparison does not settle</h2>
        <p>Knowing how the two hormones differ tells you what a compound is designed to do. It tells you nothing about the material in a vial. Whether a given batch contains the intended molecule, and how much of it is that molecule, comes from a purity measurement by <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> and an identity measurement by <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>, reported on a <a href="article/how-to-read-a-certificate-of-analysis/">certificate</a> tied to a batch you can <a href="verify/">check</a>.</p>

        <h2>Research use only</h2>
        <p>This article is background biology for laboratory context. All products sold by Codex Research are strictly for research and development, are not for human or animal consumption, and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "Are GLP-1 and GIP the same thing?",
          "a": "No. They are two hormones from two genes, released by different populations of gut cells, acting through two separate receptors. They share a receptor family and a common route of degradation."
        },
        {
          "q": "Where is each hormone released?",
          "a": "The cells that release GIP are concentrated in the upper small intestine, and the cells that release GLP-1 are more common further along. An experiment that changes where nutrients are absorbed changes the balance between the two signals."
        },
        {
          "q": "Do the two receptors overlap?",
          "a": "They are separate proteins with separate distributions across tissues, and activating one does not activate the other. Both belong to the same receptor family and both feed into glucose regulation."
        },
        {
          "q": "Why are both hormones short-lived?",
          "a": "Dipeptidyl peptidase-4 removes the first two residues from each of them, and the clipped product no longer activates the receptor as the intact form does. That shared vulnerability explains a shared design pattern in synthetic compounds."
        },
        {
          "q": "Which of the two is better studied?",
          "a": "GLP-1, by a wide margin. The GIP arm attracted less attention for years, which is part of why engaging both at once became an active research question: the less-studied receptor was the open variable."
        },
        {
          "q": "Does a dual agonist affect both receptors equally?",
          "a": "Not necessarily. One dual agonist has been characterised as unbalanced across its two targets and as favouring some downstream routes over others. The number of receptors in a description is a label, not a measurement."
        }
      ],
      references: [
        {
          "text": "Baggio, L.L., &amp; Drucker, D.J. (2007). Biology of incretins: GLP-1 and GIP. Gastroenterology, 132(6), 2131-2157.",
          "url": "https://doi.org/10.1053/j.gastro.2007.03.054"
        },
        {
          "text": "Mayo, K.E., et al. (2003). International Union of Pharmacology. XXXV. The glucagon receptor family. Pharmacological Reviews, 55(1), 167-194.",
          "url": "https://doi.org/10.1124/pr.55.1.6"
        },
        {
          "text": "Mentlein, R. (1999). Dipeptidyl-peptidase IV (CD26): role in the inactivation of regulatory peptides. Regulatory Peptides, 85(1), 9-24.",
          "url": "https://doi.org/10.1016/s0167-0115(99)00089-0"
        },
        {
          "text": "Hijazi, Y. (2021). Prediction of half-life extension of peptides via serum albumin binding. European Journal of Drug Metabolism and Pharmacokinetics, 46(2), 163-172.",
          "url": "https://doi.org/10.1007/s13318-020-00664-y"
        },
        {
          "text": "Willard, F.S., et al. (2020). Tirzepatide is an imbalanced and biased dual GIP and GLP-1 receptor agonist. JCI Insight, 5(17), e140532.",
          "url": "https://doi.org/10.1172/jci.insight.140532"
        }
      ],
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
        <p class="lead">The word incretin turns up in every description of a modern metabolic research peptide, usually without explanation. It names a specific observation about how the body handles glucose, and that observation is the reason this whole family of compounds exists.</p>

        <h2>The observation the word names</h2>
        <p>Give the same amount of glucose two ways, by mouth and directly into a vein, and the insulin response is larger when it arrives through the gut. The gap between those two responses is the incretin effect, and it was quantified by comparing the two routes at matched glucose levels. <a class="cite" href="https://doi.org/10.1210/jcem-63-2-492" target="_blank" rel="noopener nofollow">(Reference: Nauck et al., 1986)</a></p>
        <p>Something released by the gut is therefore contributing to the response. Incretins are the hormones that do it.</p>

        <h2>The two that research concentrates on</h2>
        <ul>
          <li><b>GIP</b>, glucose-dependent insulinotropic polypeptide, released by enteroendocrine cells concentrated in the upper small intestine.</li>
          <li><b>GLP-1</b>, glucagon-like peptide-1, released by cells found further along the gut and the more heavily studied of the pair.</li>
        </ul>
        <p>Each acts through its own receptor, and the two receptors belong to the same structural family as the glucagon receptor. <a class="cite" href="https://doi.org/10.1124/pr.55.1.6" target="_blank" rel="noopener nofollow">(Reference: Mayo et al., 2003)</a> Our note on <a href="article/glp-1-vs-gip/">GLP-1 and GIP</a> compares the two directly.</p>


        <h2>Why the ligands are long peptides</h2>
        <p>The incretin receptors sit in the class of G protein-coupled receptors that includes the glucagon and secretin receptors. <a class="cite" href="https://doi.org/10.1124/pr.55.1.6" target="_blank" rel="noopener nofollow">(Reference: Mayo et al., 2003)</a> Receptors in this class carry a large extracellular domain in front of the membrane-spanning part, and the ligand binds across both: one end of the peptide is held by that outer domain while the other reaches down into the transmembrane core.</p>
        <p>Two consequences follow. The ligand has to be long enough to span both sites, which is why these hormones and the compounds built from them run to thirty or forty residues instead of a handful. And a molecule that binds across a long interface gives a chemist many positions to modify, which is what makes substitution at the cleavage site and acylation at a chosen residue practical in the first place.</p>

        <h2>Where each one comes from</h2>
        <p>The two hormones are released by different cells in different parts of the gut, which is why nutrients arriving at different points do not produce identical signals. GIP comes from cells concentrated in the upper small intestine. GLP-1 comes from cells that are more common further along. The distribution matters to anyone reading the literature, because a study that manipulates where nutrients are absorbed is manipulating the balance between the two. <a class="cite" href="https://doi.org/10.1053/j.gastro.2007.03.054" target="_blank" rel="noopener nofollow">(Reference: Baggio &amp; Drucker, 2007)</a></p>

        <h2>Both are cut by the same enzyme, and quickly</h2>
        <p>This is the fact that explains most of what synthetic peptides in this family look like. An enzyme called dipeptidyl peptidase-4 removes the first two residues from the end of both hormones, and that clipped form no longer activates the receptor the way the intact one does. The enzyme is widespread, so the native hormones are short-lived. <a class="cite" href="https://doi.org/10.1016/s0167-0115(99)00089-0" target="_blank" rel="noopener nofollow">(Reference: Mentlein, 1999)</a></p>
        <p>A molecule meant to be studied over hours instead of minutes has to survive that. Two design moves follow, and both are visible in the compounds themselves.</p>
        <ul>
          <li><b>Change the residues the enzyme reads.</b> Substituting near the cleavage site removes the enzyme's grip.</li>
          <li><b>Attach a fatty acid.</b> Acylation lets the molecule associate reversibly with serum albumin, and albumin-bound peptides are cleared more slowly. <a class="cite" href="https://doi.org/10.1007/s13318-020-00664-y" target="_blank" rel="noopener nofollow">(Reference: Hijazi, 2021)</a></li>
        </ul>
        <p>Both changes also make the molecule bigger and more hydrophobic, which is why these compounds behave differently from an ordinary short peptide on a <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase column</a>.</p>

        <h2>Why the receptors became targets</h2>
        <p>Once two receptors are known to sit on the same pathway, the obvious laboratory question is what changes when a single molecule engages one, the other, or both. That question produced the current generation of compounds: agonists selective for GLP-1, <a href="article/what-is-tirzepatide/">dual agonists</a> that engage GIP as well, and <a href="article/what-is-retatrutide/">triple agonists</a> that add the glucagon receptor.</p>
        <p>Engaging two receptors is not the same as engaging them equally. Receptor pharmacology work has described at least one dual agonist as unbalanced across its two targets, so the count of receptors in a description says less than it appears to. <a class="cite" href="https://doi.org/10.1172/jci.insight.140532" target="_blank" rel="noopener nofollow">(Reference: Willard et al., 2020)</a> The general vocabulary is covered in our note on <a href="article/agonist-vs-antagonist/">agonists and antagonists</a>.</p>

        <h2>A note on the numbers after the name</h2>
        <p>GLP-1 appears in the literature with a numeric range attached, because the active hormone is a fragment cut from a larger precursor and more than one fragment exists. One of the circulating forms also ends in an amide instead of a free acid. Those numbers and that ending are part of the identity of the molecule, and they change its mass, so a specification that quotes them is quoting something a measurement can confirm. <a class="cite" href="https://doi.org/10.1053/j.gastro.2007.03.054" target="_blank" rel="noopener nofollow">(Reference: Baggio &amp; Drucker, 2007)</a></p>

        <h2>Glucose dependence</h2>
        <p>The name GIP carries a detail worth reading: glucose-dependent. The insulin-releasing activity of these hormones is tied to glucose being present, so the signal is conditional on the state the system is already in. This is part of why the incretin axis is studied as a regulatory mechanism and not as a simple switch. <a class="cite" href="https://doi.org/10.1053/j.gastro.2007.03.054" target="_blank" rel="noopener nofollow">(Reference: Baggio &amp; Drucker, 2007)</a></p>

        <h2>What this means for a vial</h2>
        <p>Knowing the biology explains why these compounds are designed the way they are. It says nothing about the material in front of you. A long, acylated peptide is harder to synthesise cleanly than a short one, so the purity figure and the identity measurement on its <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> carry more weight here, and a batch can be checked against its paperwork by <a href="verify/">batch number</a>.</p>

        <h2>Scope</h2>
        <p>Everything above is background biology and laboratory context. All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What are incretins?",
          "a": "Hormones released by the gut that contribute to the insulin response when nutrients arrive that way. The same glucose load produces a larger response by mouth than directly into a vein, and the gap between the two is the incretin effect."
        },
        {
          "q": "Which are the two main incretins?",
          "a": "GIP, glucose-dependent insulinotropic polypeptide, and GLP-1, glucagon-like peptide-1. Each acts through its own receptor, and both receptors belong to the same structural family as the glucagon receptor."
        },
        {
          "q": "Why are native incretins short-lived?",
          "a": "An enzyme called dipeptidyl peptidase-4 removes the first two residues from both hormones, and the clipped form no longer activates the receptor the way the intact one does. The enzyme is widespread, so the native hormones do not last long."
        },
        {
          "q": "Why do synthetic incretin peptides carry a fatty acid?",
          "a": "Acylation lets the molecule associate reversibly with serum albumin, and albumin-bound peptides are cleared more slowly. It also makes the molecule more hydrophobic, which changes how it behaves on a reversed-phase column."
        },
        {
          "q": "What does glucose-dependent mean in the name GIP?",
          "a": "That the insulin-releasing activity is tied to glucose being present, so the signal depends on the state the system is already in. It is studied as a regulatory mechanism rather than a simple switch."
        },
        {
          "q": "Does engaging two incretin receptors mean twice the effect?",
          "a": "No. Receptor pharmacology work has described at least one dual agonist as unbalanced across its two targets, so the number of receptors named in a description says little about how the activity is distributed between them."
        }
      ],
      references: [
        {
          "text": "Nauck, M., Stöckmann, F., Ebert, R., &amp; Creutzfeldt, W. (1986). Incretin effects of increasing glucose loads in man calculated from venous insulin and C-peptide responses. Journal of Clinical Endocrinology and Metabolism, 63(2), 492-498.",
          "url": "https://doi.org/10.1210/jcem-63-2-492"
        },
        {
          "text": "Baggio, L.L., &amp; Drucker, D.J. (2007). Biology of incretins: GLP-1 and GIP. Gastroenterology, 132(6), 2131-2157.",
          "url": "https://doi.org/10.1053/j.gastro.2007.03.054"
        },
        {
          "text": "Mentlein, R. (1999). Dipeptidyl-peptidase IV (CD26): role in the inactivation of regulatory peptides. Regulatory Peptides, 85(1), 9-24.",
          "url": "https://doi.org/10.1016/s0167-0115(99)00089-0"
        },
        {
          "text": "Mayo, K.E., et al. (2003). International Union of Pharmacology. XXXV. The glucagon receptor family. Pharmacological Reviews, 55(1), 167-194.",
          "url": "https://doi.org/10.1124/pr.55.1.6"
        },
        {
          "text": "Hijazi, Y. (2021). Prediction of half-life extension of peptides via serum albumin binding. European Journal of Drug Metabolism and Pharmacokinetics, 46(2), 163-172.",
          "url": "https://doi.org/10.1007/s13318-020-00664-y"
        },
        {
          "text": "Willard, F.S., et al. (2020). Tirzepatide is an imbalanced and biased dual GIP and GLP-1 receptor agonist. JCI Insight, 5(17), e140532.",
          "url": "https://doi.org/10.1172/jci.insight.140532"
        }
      ],
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
        <p class="lead">Copper peptides are filed with the rest of the research peptides, and they belong to a different chemical category. They are coordination complexes: a short sequence holding a metal ion. The metal is part of the compound, which changes how they are made, how they behave on a column, and what a certificate has to establish.</p>

        <h2>Why copper, and why it is never loose</h2>
        <p>Copper is an essential trace element. Enzymes use it to move electrons, which is exactly what makes it useful and what makes it dangerous: a metal that readily changes oxidation state will drive reactions it was not invited to. <a class="cite" href="https://doi.org/10.1016/j.cub.2011.09.040" target="_blank" rel="noopener nofollow">(Reference: Festa &amp; Thiele, 2011)</a></p>
        <p>Biology handles that by never leaving it free. Copper is passed between binding proteins and delivered to its destination while still bound, so the pool of unbound copper inside a cell is effectively nil. <a class="cite" href="https://doi.org/10.1016/j.cbpa.2010.01.003" target="_blank" rel="noopener nofollow">(Reference: Lutsenko, 2010)</a> A peptide that binds copper tightly is therefore doing something the system already does constantly, which is part of why these sequences attract attention.</p>

        <h2>What makes a sequence a copper binder</h2>
        <p>Holding a metal takes several donor atoms positioned around it at once. Short peptides with a histidine near the amino terminus are a recognised class of copper binders, because the terminal amine, the imidazole of the histidine and one or more backbone nitrogens can be brought into position together. <a class="cite" href="https://doi.org/10.1021/ar9501535" target="_blank" rel="noopener nofollow">(Reference: Harford &amp; Sarkar, 1997)</a></p>
        <p>Using a backbone nitrogen as a donor has a consequence worth understanding: that nitrogen has to lose its proton to bind the metal. The complex therefore carries a different charge from the free peptide, and how much of the complex is present depends on pH. A copper peptide is not one fixed species but an equilibrium that sits somewhere depending on conditions.</p>

        <h2>The two you will meet</h2>
        <ul>
          <li><b><a href="article/what-is-ghk-cu/">GHK-Cu</a></b>, the copper complex of glycyl-histidyl-lysine, and the most studied of the group. The geometry of its copper complex in solution was determined in 1982. <a class="cite" href="https://doi.org/10.1021/bi00262a004" target="_blank" rel="noopener nofollow">(Reference: Freedman et al., 1982)</a></li>
          <li><b><a href="article/what-is-ahk-cu/">AHK-Cu</a></b>, where the first residue is alanine instead of glycine.</li>
        </ul>
        <p>One residue apart is precisely why the pair gets compared. Changing the first position changes the environment immediately next to one of the donor atoms, and comparing near-identical sequences is a standard way to ask what a single residue contributes.</p>


        <h2>Making one is two problems</h2>
        <p>The peptide half is routine. A tripeptide is a short <a href="article/peptide-synthesis/">solid-phase synthesis</a>, three coupling cycles and a cleavage, and the sequences involved carry no difficult residues.</p>
        <p>Forming the complex is the other half, and it is where a batch can go wrong without the peptide being at fault. The metal has to be introduced under controlled conditions so that the ratio comes out at one copper per peptide, and the pH has to sit where the intended species dominates. A preparation that is short of copper contains free peptide; one that is over-supplied carries copper that is not held by the sequence. Both are invisible to a purity figure that only looks at the peptide.</p>

        <h2>Colour is a weak check</h2>
        <p>Copper complexes with nitrogen donors absorb in the visible range, so the material is coloured while the free peptide is not. A vial of genuine complex does not look like a vial of white powder.</p>
        <p>Useful as a sanity check and nothing more. Colour says a copper species is present. It says nothing about stoichiometry, about the purity of the peptide, or about whether the complex is the one intended.</p>

        <h2>The name does not pin down the formula</h2>
        <p>For an ordinary peptide, the sequence defines the material. For a metal complex it does not. The written formula depends on whether the binding nitrogen is counted as deprotonated, what the overall charge is, which counterion balances it, and whether the entry describes one peptide per copper or two. Public databases resolve those choices differently, so the same name carries several formulas and several masses.</p>
        <p>This is not sloppiness in the databases. It reflects that the thing being named is a species in equilibrium. The practical consequence is that the batch documentation carries more weight here than the label does.</p>

        <h2>Copper leaves a fingerprint in the spectrum</h2>
        <p>Copper has two stable isotopes, copper-63 and copper-65, present in nature at roughly 69 and 31 percent. Any species containing a single copper atom therefore shows a pair of peaks two mass units apart in about that ratio, and the free peptide shows nothing of the sort.</p>
        <p>That pattern is an internal check built into the identity measurement, and it is one of the few places where <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a> confirms more than the number it reports.</p>

        <h2>Why a purity figure answers less here</h2>
        <p>A purity percentage from <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase chromatography</a> reports what share of the detected material was the target sequence. It does not report how much copper is present or whether it is bound in the intended ratio.</p>
        <p>There is also a methodological trap. Reversed-phase peptide methods run at low pH with an acidic additive, and acidic conditions shift a labile metal complex toward its dissociated form. A clean peak can be a clean peak of the free tripeptide. For a metal complex the analytical conditions are part of the result, and copper content is worth reporting as its own figure. Our guide to <a href="article/how-to-read-a-certificate-of-analysis/">reading a certificate</a> covers what a complete document carries.</p>

        <h2>Handling</h2>
        <p>These compounds ship <a href="article/lyophilization-freeze-drying/">lyophilized</a> and follow the usual rules: dry, cool, away from light, and let a cold vial reach room temperature before opening so condensation does not form inside. Any Codex Research vial can be checked against its paperwork by <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What is a copper peptide?",
          "a": "A coordination complex: a short peptide sequence holding a copper ion. The metal is part of the compound, which puts these in a different chemical category from ordinary research peptides."
        },
        {
          "q": "Why does biology keep copper bound?",
          "a": "Because copper readily changes oxidation state, which makes it useful in enzymes and reactive where it is not wanted. It is passed between binding proteins and delivered while still bound, so the pool of unbound copper inside a cell is effectively nil."
        },
        {
          "q": "What makes a peptide sequence bind copper?",
          "a": "Several donor atoms positioned around the metal at once. Short sequences with a histidine near the amino terminus can bring the terminal amine, the histidine imidazole and one or more backbone nitrogens into position together."
        },
        {
          "q": "Why do different sources give different formulas for the same copper peptide?",
          "a": "Because the written formula depends on whether the binding nitrogen is counted as deprotonated, the overall charge, the counterion, and whether the entry describes one peptide per copper or two. The compound is a species in equilibrium, not one fixed formula."
        },
        {
          "q": "Can mass spectrometry confirm the copper is present?",
          "a": "Yes, distinctively. Copper has two stable isotopes at roughly 69 and 31 percent natural abundance, so a species with one copper atom shows a characteristic pair of peaks two mass units apart. The free peptide shows no such pattern."
        },
        {
          "q": "Is an HPLC purity figure enough for a copper peptide?",
          "a": "No. It reports the share of detected material that was the target sequence, not how much copper is present or whether it is bound as intended. Acidic reversed-phase conditions can also shift the complex toward its dissociated form."
        }
      ],
      references: [
        {
          "text": "Festa, R.A., &amp; Thiele, D.J. (2011). Copper: an essential metal in biology. Current Biology, 21(21), R877-R883.",
          "url": "https://doi.org/10.1016/j.cub.2011.09.040"
        },
        {
          "text": "Lutsenko, S. (2010). Human copper homeostasis: a network of interconnected pathways. Current Opinion in Chemical Biology, 14(2), 211-217.",
          "url": "https://doi.org/10.1016/j.cbpa.2010.01.003"
        },
        {
          "text": "Harford, C., &amp; Sarkar, B. (1997). Amino terminal Cu(II)- and Ni(II)-binding (ATCUN) motif of proteins and peptides. Accounts of Chemical Research, 30(3), 123-130.",
          "url": "https://doi.org/10.1021/ar9501535"
        },
        {
          "text": "Freedman, J.H., Pickart, L., Weinstein, B., Mims, W.B., &amp; Peisach, J. (1982). Structure of the glycyl-L-histidyl-L-lysine-copper(II) complex in solution. Biochemistry, 21(19), 4540-4544.",
          "url": "https://doi.org/10.1021/bi00262a004"
        }
      ],
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
        <p class="lead">AHK-Cu differs from its better-known relative by one atom's worth of side chain. The tripeptide is alanyl-histidyl-lysine instead of glycyl-histidyl-lysine, which means a methyl group where the other has a hydrogen. That is the entire structural difference, and it sits directly beside the part of the molecule that holds the copper.</p>

        <h2>Two sets of numbers, as with any metal complex</h2>
        <ul>
          <li><b>AHK, the free tripeptide:</b> C<sub>15</sub>H<sub>26</sub>N<sub>6</sub>O<sub>4</sub>, about 354 g/mol, CAS 126828-32-8, PubChem CID 7408502.</li>
          <li><b>The copper complex:</b> CAS 682809-81-0, listed in PubChem as C<sub>15</sub>H<sub>24</sub>ClCuN<sub>6</sub>O<sub>4</sub><sup>-</sup> at about 451 g/mol (CID 168431292).</li>
        </ul>
        <p>The database entry for the complex carries a chloride and a negative charge. That is one way of writing it, not the only one: the formula of a coordination complex depends on the protonation state, the overall charge and the counterion chosen. Our note on <a href="article/what-are-copper-peptides/">copper peptides</a> covers why the name does not pin the formula down.</p>

        <h2>Where the copper sits, and why residue one matters</h2>
        <p>Short sequences with a histidine near the amino terminus bind copper by bringing several donor atoms around the metal at once: the terminal amine, the imidazole of the histidine, and a backbone nitrogen that has to lose its proton to participate. <a class="cite" href="https://doi.org/10.1021/ar9501535" target="_blank" rel="noopener nofollow">(Reference: Harford &amp; Sarkar, 1997)</a> The geometry of this arrangement was worked out for the glycine version in 1982. <a class="cite" href="https://doi.org/10.1021/bi00262a004" target="_blank" rel="noopener nofollow">(Reference: Freedman et al., 1982)</a></p>
        <p>The first residue contributes the terminal amine, which is one of those donors. Replacing glycine with alanine adds a methyl group on the carbon next to it. The substitution does not remove a donor or add one; it changes what sits beside the metal, and comparing the two complexes is how the contribution of that position gets measured.</p>


        <h2>What a methyl group can and cannot do</h2>
        <p>It is worth being precise about the scale of the change, because a single residue swap invites two opposite errors. One is to assume the two compounds are interchangeable, since they differ so little. The other is to assume the difference must be large, since chemists bothered to make both.</p>
        <p>A methyl group changes three things a chemist can reason about: it takes up space next to the terminal amine, it is slightly greasier than a hydrogen, and it removes the unusual flexibility that glycine gives a backbone. Glycine, with no side chain at all, can adopt conformations no other residue can. Replacing it therefore constrains the local geometry as well as adding bulk.</p>
        <p>Whether those changes matter in a given system is a measurement, not a deduction. The structural difference is small and precisely defined; the consequences are whatever an experiment reports.</p>

        <h2>Why comparing near-identical sequences is standard practice</h2>
        <p>Changing one residue at a time is the basic move of structure-activity work. If two compounds differ at a single position and behave differently, the difference is attributable. If they behave the same, that position is not doing the work.</p>
        <p>A pair like AHK and GHK is useful for exactly this reason, and it is also a trap for a supplier's paperwork: two compounds this similar are easy to mislabel and impossible to distinguish by eye.</p>


        <h2>The lysine at the end</h2>
        <p>Both tripeptides finish with lysine, whose side chain carries an amine that stays protonated at ordinary pH. That charge is not part of the copper site, and it does most of the work of keeping these compounds water-soluble.</p>
        <p>It also has an analytical consequence. A positively charged residue interacts with the acidic additive used in <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase methods</a>, so retention depends on the additive as well as on the sequence. Two laboratories running the same sample with different acid concentrations can see the peak in different places, which is one more reason the method conditions belong beside the purity figure.</p>

        <h2>Telling them apart</h2>
        <p>A methyl group is fourteen daltons. Both free tripeptides and both copper complexes differ by that amount, which is comfortably within the resolution of any <a href="article/mass-spectrometry-peptide-research/">mass spectrometer</a> used for this work. The identity measurement distinguishes them without difficulty.</p>
        <p>The copper adds a second, independent check. Copper has two stable isotopes, copper-63 and copper-65, present at roughly 69 and 31 percent, so any species carrying one copper atom shows a pair of peaks two mass units apart in about that ratio. A spectrum of the free peptide shows nothing of the kind.</p>

        <h2>What a purity figure does not cover</h2>
        <p>A percentage from <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase chromatography</a> reports what share of the detected material was the target sequence. For a metal complex that leaves two questions open: how much copper is present, and whether it is bound at one copper per peptide.</p>
        <p>Acidic conditions complicate it further. Reversed-phase peptide methods run at low pH with an acidic additive, and acid shifts a labile complex toward its dissociated form, so a clean peak can correspond to the free tripeptide. Copper content is worth reporting as a figure of its own, and the conditions of the analysis belong on the <a href="article/how-to-read-a-certificate-of-analysis/">certificate</a> alongside the number.</p>

        <h2>Making it</h2>
        <p>The peptide half is three coupling cycles of ordinary <a href="article/peptide-synthesis/">solid-phase synthesis</a> with no difficult residues. Forming the complex is the step where a batch can go wrong while the peptide is perfectly good: the copper has to be introduced under controlled conditions so the ratio comes out right, and the pH has to sit where the intended species dominates. Under-supplied copper leaves free peptide in the product; over-supplied copper leaves metal the sequence is not holding.</p>

        <h2>Handling and verification</h2>
        <p>Material ships <a href="article/lyophilization-freeze-drying/">lyophilized</a>, which is the stable form. Keep it dry, cool and out of direct light, and let a cold vial reach room temperature before opening so condensation does not form inside. Any Codex Research vial can be checked against its paperwork by <a href="verify/">batch number</a>.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including AHK-Cu, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What does AHK-Cu stand for?",
          "a": "The copper complex of the tripeptide alanyl-histidyl-lysine, whose one-letter codes are A, H and K. The free tripeptide is C15H26N6O4 at about 354 g/mol, CAS 126828-32-8; the copper complex carries CAS 682809-81-0."
        },
        {
          "q": "How is AHK-Cu different from GHK-Cu?",
          "a": "By one residue. The first position is alanine instead of glycine, which adds a methyl group next to the terminal amine that helps hold the copper. Nothing else in the sequence changes."
        },
        {
          "q": "Does that single change affect copper binding?",
          "a": "It does not remove or add a donor atom. It changes what sits immediately beside the metal, and comparing the two complexes is how the contribution of that position is measured."
        },
        {
          "q": "How are AHK-Cu and GHK-Cu told apart analytically?",
          "a": "By mass. A methyl group is fourteen daltons, a difference comfortably within the resolution of any mass spectrometer used for this work. The copper isotope pattern provides a second, independent check that the metal is present."
        },
        {
          "q": "Why does PubChem list a chloride in the formula?",
          "a": "Because a coordination complex has to be written with some charge and some counterion, and that entry makes one particular choice. Other sources write the same compound differently, which is why the name alone does not pin down a formula."
        },
        {
          "q": "Is a purity percentage enough for AHK-Cu?",
          "a": "No. It reports the share of detected material that was the target sequence and leaves open how much copper is present and whether it is bound one to one. Acidic chromatographic conditions can also dissociate the complex."
        }
      ],
      references: [
        {
          "text": "Alanyl-histidyl-lysine compound summary. PubChem, National Library of Medicine (CID 7408502).",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/7408502"
        },
        {
          "text": "AHK-Cu compound summary. PubChem, National Library of Medicine (CID 168431292).",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/168431292"
        },
        {
          "text": "Harford, C., &amp; Sarkar, B. (1997). Amino terminal Cu(II)- and Ni(II)-binding (ATCUN) motif of proteins and peptides. Accounts of Chemical Research, 30(3), 123-130.",
          "url": "https://doi.org/10.1021/ar9501535"
        },
        {
          "text": "Freedman, J.H., Pickart, L., Weinstein, B., Mims, W.B., &amp; Peisach, J. (1982). Structure of the glycyl-L-histidyl-L-lysine-copper(II) complex in solution. Biochemistry, 21(19), 4540-4544.",
          "url": "https://doi.org/10.1021/bi00262a004"
        }
      ],
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
        <p class="lead">NAD+ sits apart from everything else in this catalogue. It is not a peptide, has no sequence and no residues, and none of the analytical habits built around peptides transfer to it cleanly. It is a small organic cofactor, and reading a specification for one means reading different lines.</p>

        <h2>Identity</h2>
        <ul>
          <li><b>Molecular formula:</b> C<sub>21</sub>H<sub>27</sub>N<sub>7</sub>O<sub>14</sub>P<sub>2</sub></li>
          <li><b>Molecular weight:</b> approximately 663 g/mol</li>
          <li><b>PubChem CID:</b> 5892</li>
        </ul>
        <p>The name is an abbreviation of nicotinamide adenine dinucleotide, and the structure follows the name: two nucleotides joined through their phosphate groups, one carrying nicotinamide and the other adenine.</p>

        <h2>The plus sign is part of the name</h2>
        <p>NAD+ and NADH are the same molecule in two states. The cofactor works by accepting and giving up electrons, and the notation distinguishes the oxidised form from the reduced one. Writing NAD without a sign is ambiguous, because it does not say which state is meant.</p>
        <p>This is not pedantry over notation. The two forms differ in mass and in how they behave analytically, so a specification that omits the sign has left out part of the identity.</p>

        <h2>What it does in a cell</h2>
        <p>The cofactor carries electrons between reactions, which places it in the centre of energy metabolism. Beyond that role it is consumed as a substrate by several families of enzymes, so the cell both recycles it and spends it, and the pool has to be replenished. <a class="cite" href="https://doi.org/10.1016/j.cmet.2015.05.023" target="_blank" rel="noopener nofollow">(Reference: Cantó et al., 2015)</a></p>
        <p>Because it is both a recycled carrier and a consumed substrate, its concentration is regulated rather than fixed, and how that balance is maintained has been reviewed in detail. <a class="cite" href="https://doi.org/10.1038/s42255-019-0161-5" target="_blank" rel="noopener nofollow">(Reference: Katsyuba et al., 2020)</a> <a class="cite" href="https://doi.org/10.1016/j.tibs.2006.11.006" target="_blank" rel="noopener nofollow">(Reference: Belenky et al., 2007)</a></p>
        <p>These are laboratory and model-based observations. NAD+ is supplied strictly as a research compound, and nothing here describes use in people or animals.</p>


        <h2>Four related molecules, four different compounds</h2>
        <p>The abbreviations in this corner of a catalogue are close enough to misread at a glance, and each names a distinct substance with its own mass.</p>
        <ul>
          <li><b>NAD+</b> and <b>NADH</b>: the oxidised and reduced forms of the same cofactor.</li>
          <li><b>NADP+</b> and <b>NADPH</b>: the same pair carrying an additional phosphate, which makes them different molecules used by different enzymes.</li>
        </ul>
        <p>A specification that names one of the four is naming something a mass measurement can confirm, since the phosphate and the hydride each change the mass by an amount an instrument resolves without difficulty. A listing that says only NAD has not specified which of them it means.</p>

        <h2>Where the compound comes from</h2>
        <p>Research-grade material is produced by chemical or enzymatic synthesis and purified, not extracted in any quantity from tissue. That matters for the impurity profile: what ends up alongside the product reflects the route used to make it and the purification that followed, which is the same logic that applies to a synthetic peptide even though the chemistry has nothing in common with <a href="article/peptide-synthesis/">solid-phase synthesis</a>.</p>
        <p>It also means the compound carries no sequence to verify and no counterion story of the kind that complicates a peptide's <a href="article/excipients-in-peptides/">weighed mass</a>. The salt form, where one is present, is stated on the specification instead.</p>

        <h2>Why the analytical questions are different</h2>
        <p>For a peptide, identity means comparing a measured mass against one calculated from a sequence, and purity means resolving deletion sequences that differ by a single residue. Neither applies here.</p>
        <p>NAD+ is a defined small molecule made by chemical or enzymatic routes, not assembled residue by residue, so there are no deletion sequences. Its likely impurities are its own relatives: the reduced form, the phosphorylated version, and breakdown products from hydrolysis of the linkage between the two halves.</p>
        <p>That changes what a chromatographic method has to separate. Related nucleotides are polar, and the <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase conditions</a> tuned for peptides are not automatically the right conditions for them.</p>

        <h2>It absorbs where peptides do not</h2>
        <p>The nicotinamide and adenine rings absorb ultraviolet light strongly, with a maximum near 260 nm that comes from the adenine. That is a different wavelength from the ones used for peptide work, where detection sits near 214 nm for the amide bond or 280 nm for aromatic side chains.</p>
        <p>The reduced form adds a second absorbance band that the oxidised form lacks, which is the basis of the classic assay for following these reactions and a quick way to tell the two states apart.</p>

        <h2>It is less stable than a peptide in solution</h2>
        <p>The bond joining the two nucleotide halves is susceptible to hydrolysis, and the molecule is sensitive to both acid and base. In solution it degrades faster than a typical lyophilized peptide would, and warmth accelerates it.</p>
        <p>The handling rules are therefore the ordinary ones applied with more attention: keep the dry material dry and cool, let a cold vial reach room temperature before opening so condensation does not form inside, and treat a solution as short-lived. Our guide to <a href="article/how-to-store-research-peptides/">storing research peptides</a> covers why the dry state is the stable one.</p>

        <h2>What a certificate should carry</h2>
        <p>The same principle as everywhere else, with the lines adjusted to the compound.</p>
        <ul>
          <li><b>Identity</b> confirmed against the formula and mass above, with the oxidation state stated.</li>
          <li><b>Purity</b> from a method suited to polar nucleotides, with the conditions named.</li>
          <li><b>Water content,</b> since a hygroscopic solid takes up moisture and the water is part of what you weigh.</li>
          <li><b>A batch number</b> tying all of it to the vial, which can be <a href="verify/">checked</a>.</li>
        </ul>
        <p>Our guide to <a href="article/how-to-read-a-certificate-of-analysis/">reading a certificate of analysis</a> covers the general case; the fields differ for a cofactor, and the logic does not.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including NAD+, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What is NAD+?",
          "a": "Nicotinamide adenine dinucleotide, a small organic cofactor built from two nucleotides joined through their phosphates. Its formula is C21H27N7O14P2 and its molecular weight is about 663 g/mol. It is not a peptide and has no sequence."
        },
        {
          "q": "What does the plus sign mean?",
          "a": "It marks the oxidised form. NAD+ and NADH are the same molecule in two states, since the cofactor works by accepting and giving up electrons. Writing NAD without a sign leaves the state unspecified, and the two forms differ in mass."
        },
        {
          "q": "Why is NAD+ analysed differently from a peptide?",
          "a": "Because it is a defined small molecule rather than a chain assembled residue by residue, so there are no deletion sequences. Its likely impurities are related nucleotides and hydrolysis products, which are polar and need different chromatographic conditions."
        },
        {
          "q": "Is NAD+ stable in solution?",
          "a": "Less so than a lyophilized peptide. The bond joining its two halves is susceptible to hydrolysis and the molecule is sensitive to acid and base, so a solution should be treated as short-lived and kept cold."
        },
        {
          "q": "Why does water content matter for NAD+?",
          "a": "Because a hygroscopic solid takes up moisture from the air, and that water is part of what you weigh. It is also the reason a cold vial should reach room temperature before being opened."
        },
        {
          "q": "What should a certificate for NAD+ report?",
          "a": "Identity confirmed against the formula and mass with the oxidation state stated, purity from a method suited to polar nucleotides with the conditions named, water content, and a batch number tying all of it to the vial."
        }
      ],
      references: [
        {
          "text": "NAD+ compound summary. PubChem, National Library of Medicine (CID 5892).",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5892"
        },
        {
          "text": "Cantó, C., Menzies, K.J., &amp; Auwerx, J. (2015). NAD+ metabolism and the control of energy homeostasis: a balancing act between mitochondria and the nucleus. Cell Metabolism, 22(1), 31-53.",
          "url": "https://doi.org/10.1016/j.cmet.2015.05.023"
        },
        {
          "text": "Katsyuba, E., Romani, M., Hofer, D., &amp; Auwerx, J. (2020). NAD+ homeostasis in health and disease. Nature Metabolism, 2, 9-31.",
          "url": "https://doi.org/10.1038/s42255-019-0161-5"
        },
        {
          "text": "Belenky, P., Bogan, K.L., &amp; Brenner, C. (2007). NAD+ metabolism in health and disease. Trends in Biochemical Sciences, 32(1), 12-19.",
          "url": "https://doi.org/10.1016/j.tibs.2006.11.006"
        }
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

        <p>One point specific to small peptides: at the masses typically supplied, the freeze-dried material in the vial can be a thin film or a few flecks on the glass instead of a visible powder. A vial that looks empty has usually not lost anything; that is <a href="article/lyophilization-freeze-drying/">how the drying works</a>.</p>

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
        <p class="lead">Retatrutide is described as a triple agonist: one synthetic peptide built to act at three receptors, the two <a href="article/what-are-incretins/">incretin</a> receptors plus the receptor for glucagon. Adding a third target changes what the compound is useful for in the laboratory, and it also changes what has to be proved about a batch before the material means anything.</p>

        <h2>What is verifiable about its identity</h2>
        <p>Retatrutide carries the research code LY3437943 and is catalogued in ChEMBL as CHEMBL5095485, where it is classified as a protein-type entity with a defined sequence. It does not currently appear in PubChem under that name or that code, and a search of PubChem for the molecular formula quoted in some supplier listings returns no compound.</p>
        <p>For most compounds in this catalogue the public databases give a formula, a mass and a CAS number that anyone can check. Here the public record is thinner, so the weight shifts onto the batch documentation: the measured mass on the certificate and the purity figure behind it. Our note on <a href="article/cas-numbers-explained/">CAS numbers</a> covers what those identifiers do and do not establish.</p>

        <h2>Why a third receptor</h2>
        <p>GIP and GLP-1 are released by the gut and contribute to the insulin response that follows a meal. Glucagon sits on the other side of glucose regulation, and its receptor belongs to the same structural family as the two incretin receptors. <a class="cite" href="https://doi.org/10.1124/pr.55.1.6" target="_blank" rel="noopener nofollow">(Reference: Mayo et al., 2003)</a> <a class="cite" href="https://doi.org/10.1053/j.gastro.2007.03.054" target="_blank" rel="noopener nofollow">(Reference: Baggio &amp; Drucker, 2007)</a></p>
        <p>Because all three receptors share a family, a single peptide scaffold can be engineered to reach all three. The laboratory question that follows is narrow and testable: what changes when one molecule engages three of these receptors at once, measured against the same scaffold engaging one or two? Our note on <a href="article/glp-1-vs-gip/">GLP-1 and GIP</a> covers the two-receptor case.</p>


        <h2>Why one scaffold can reach three receptors</h2>
        <p>Receptors in this family are built in two parts, a large domain outside the cell and the seven membrane-spanning helices, and the peptide binds across both. One end is held by the outer domain while the other reaches into the transmembrane core. <a class="cite" href="https://doi.org/10.1124/pr.55.1.6" target="_blank" rel="noopener nofollow">(Reference: Mayo et al., 2003)</a></p>
        <p>Because the three receptors are relatives, the regions that grip the ligand resemble each other. A sequence can therefore be tuned position by position until it is tolerated by all three, which is the engineering problem behind a multi-receptor agonist. It also explains why the molecules end up long: a short ligand cannot span both binding sites, let alone span them in three different receptors at once.</p>

        <h2>Three targets make interpretation harder, not easier</h2>
        <p>Engaging two receptors is already not the same as engaging them equally. One dual agonist in this family has been characterised as unbalanced across its targets and as favouring some downstream routes over others. <a class="cite" href="https://doi.org/10.1172/jci.insight.140532" target="_blank" rel="noopener nofollow">(Reference: Willard et al., 2020)</a></p>
        <p>With three receptors the number of ways activity can be distributed grows, and an observed result has more possible explanations. The word triple counts targets. It does not describe the balance between them, and the balance is what an experiment has to establish. The vocabulary sits in our note on <a href="article/agonist-vs-antagonist/">agonists and antagonists</a>.</p>

        <h2>Why it carries a fatty acid</h2>
        <p>Native incretins are short-lived because an enzyme, dipeptidyl peptidase-4, removes the first two residues and the clipped form no longer activates its receptor as the intact one does. <a class="cite" href="https://doi.org/10.1016/s0167-0115(99)00089-0" target="_blank" rel="noopener nofollow">(Reference: Mentlein, 1999)</a> Compounds in this family answer that with two modifications: a substitution near the cleavage site, and a fatty acid attached to the backbone.</p>
        <p>Acylation lets the molecule associate reversibly with serum albumin, and albumin-bound peptides are cleared more slowly. <a class="cite" href="https://doi.org/10.1007/s13318-020-00664-y" target="_blank" rel="noopener nofollow">(Reference: Hijazi, 2021)</a> It also makes the molecule considerably more hydrophobic, so it is held longer on a <a href="article/high-performance-liquid-chromatography-hplc/">reversed-phase column</a> than its unmodified backbone would be.</p>

        <h2>A long chain is a hard synthesis</h2>
        <p>Peptides of this family run to several dozen residues, and length works against a clean <a href="article/peptide-synthesis/">synthesis</a>. Every coupling step that stops short of completion leaves a fraction of chains one residue behind, and those shortened chains continue through every remaining cycle. The result is a deletion sequence: a molecule differing from the target by a single residue, which makes it the impurity hardest to separate.</p>
        <p>The acylation step adds a second opportunity for error. Material that is otherwise correct but missing the fatty acid, or carrying it at the wrong position, is a distinct compound with a distinct mass.</p>

        <h2>What a batch has to establish</h2>
        <ul>
          <li><b>Purity</b> from chromatography: what share of the detected material is the target. Deletion sequences appear here, usually as small peaks close to the main one.</li>
          <li><b>Identity</b> from <a href="article/mass-spectrometry-peptide-research/">mass spectrometry</a>: whether the measured mass matches the mass calculated for the intended molecule. At several thousand daltons the gap between monoisotopic and average mass is no longer a rounding detail, so the certificate should say which convention it quotes.</li>
        </ul>
        <p>Given how thin the public chemical record is for this compound, those two numbers are doing more work than usual. Material ships <a href="article/lyophilization-freeze-drying/">lyophilized</a>, and a batch can be checked against its paperwork by <a href="verify/">batch number</a> before the vial is opened.</p>


        <p>One further consequence of the design is worth noting for anyone handling the material. A long, acylated peptide is more hydrophobic and often less soluble than a short unmodified one, and it presents more surface to the walls of a vial. Formulations in this family therefore tend to carry <a href="article/excipients-in-peptides/">excipients</a>, which means part of the weighed powder is not compound. That is a second reason the figure on the label and the figure on the certificate can differ.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including retatrutide, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What makes retatrutide a triple agonist?",
          "a": "It is a single synthetic peptide built to act at three receptors: the two incretin receptors, for GIP and GLP-1, plus the receptor for glucagon. All three belong to the same structural receptor family, which is what makes one scaffold able to reach them."
        },
        {
          "q": "How is retatrutide different from tirzepatide?",
          "a": "Tirzepatide engages two receptors, GIP and GLP-1. Retatrutide adds the glucagon receptor. The count of targets is the difference in design; how the activity is balanced between them is a separate question that an experiment has to settle."
        },
        {
          "q": "Does retatrutide have a CAS number and a PubChem entry?",
          "a": "It is catalogued in ChEMBL as CHEMBL5095485 under the research code LY3437943, but it does not appear in PubChem under that name or code, and the molecular formula quoted in some listings returns no compound there. The public chemical record for it is thinner than for most compounds."
        },
        {
          "q": "Why does retatrutide carry a fatty acid chain?",
          "a": "Acylation lets the molecule associate reversibly with serum albumin, and albumin-bound peptides are cleared more slowly. It also makes the molecule more hydrophobic, which lengthens its retention on a reversed-phase column."
        },
        {
          "q": "Why is a long peptide harder to synthesise cleanly?",
          "a": "Each coupling step that falls short of completion leaves a fraction of chains one residue behind, and those chains continue through the remaining cycles. The resulting deletion sequences differ from the target by a single residue, which makes them the hardest impurities to resolve."
        },
        {
          "q": "How is a retatrutide batch verified?",
          "a": "Chromatography establishes what share of the detected material is the target, and mass spectrometry establishes that the target is the intended molecule. With a thin public chemical record, those two measurements carry more weight than usual."
        }
      ],
      references: [
        {
          "text": "Retatrutide (LY3437943). ChEMBL, European Bioinformatics Institute (CHEMBL5095485).",
          "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL5095485/"
        },
        {
          "text": "Mayo, K.E., et al. (2003). International Union of Pharmacology. XXXV. The glucagon receptor family. Pharmacological Reviews, 55(1), 167-194.",
          "url": "https://doi.org/10.1124/pr.55.1.6"
        },
        {
          "text": "Baggio, L.L., &amp; Drucker, D.J. (2007). Biology of incretins: GLP-1 and GIP. Gastroenterology, 132(6), 2131-2157.",
          "url": "https://doi.org/10.1053/j.gastro.2007.03.054"
        },
        {
          "text": "Mentlein, R. (1999). Dipeptidyl-peptidase IV (CD26): role in the inactivation of regulatory peptides. Regulatory Peptides, 85(1), 9-24.",
          "url": "https://doi.org/10.1016/s0167-0115(99)00089-0"
        },
        {
          "text": "Hijazi, Y. (2021). Prediction of half-life extension of peptides via serum albumin binding. European Journal of Drug Metabolism and Pharmacokinetics, 46(2), 163-172.",
          "url": "https://doi.org/10.1007/s13318-020-00664-y"
        },
        {
          "text": "Willard, F.S., et al. (2020). Tirzepatide is an imbalanced and biased dual GIP and GLP-1 receptor agonist. JCI Insight, 5(17), e140532.",
          "url": "https://doi.org/10.1172/jci.insight.140532"
        }
      ],
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
        <p class="lead">Buying research peptides in Panama differs from ordering them from abroad in one way that matters more than price: the material is already in the country. Nothing is waiting on customs, and nothing spends weeks in transit. This guide covers how ordering works, what delivery costs and how long it takes, how payment is handled, and how to confirm a vial before you pay.</p>

        <h2>How ordering works</h2>
        <p>You add products to the cart and pay on the site. The order is placed at checkout, not negotiated in a chat, and the price the server charges is calculated at the moment of payment so it matches what the cart shows.</p>
        <p>A specialist answers questions on WhatsApp before and after an order, which is a support channel and not a purchase step. Nothing has to be arranged by message for an order to go through.</p>

        <h2>Delivery times and cost</h2>
        <ul>
          <li><b>Panama City:</b> same-day delivery, 1 to 2 hours, $4 flat.</li>
          <li><b>Interior cities</b> such as David, Chitré and Colón: next business day, by Fergunson transport.</li>
          <li><b>Free shipping</b> on orders over $100.</li>
        </ul>
        <p>Every order ships in sealed protective packaging, and each vial is labelled with its compound, its strength and its batch number. If a seal arrives broken, do not accept the package.</p>

        <h2>Why local stock changes the material, not only the wait</h2>
        <p>An international parcel spends weeks moving between warehouses and vehicles, and the relevant count is not the number of days but how many temperature and humidity cycles the package went through. A freeze-dried peptide is stable while it stays dry, and each warming and cooling is an opportunity for moisture to reach it.</p>
        <p>Two hours in a city is a short, single trip. This is a property of the material and how it travels, which our guide to <a href="article/how-to-store-research-peptides/">storing research peptides</a> covers in detail.</p>

        <h2>Paying in Panama</h2>
        <p>Payment happens at checkout on the site, with two methods available.</p>
        <ul>
          <li><b>Card:</b> Visa, Mastercard and American Express, processed by Stripe. The payment is completed on Stripe's own secure checkout, so card details never touch this site.</li>
          <li><b>Crypto:</b> USDC or USDT on Ethereum, sent from your own wallet and verified on-chain before the order is released.</li>
        </ul>
        <p>Prices are shown in U.S. dollars, the currency used in Panama, so there is no conversion at the point of payment.</p>

        <h2>Confirming a vial before you pay</h2>
        <p>This is the part worth doing regardless of where you buy. A batch number printed on a label is only useful if it connects to something.</p>
        <ul>
          <li>Enter the batch number on the <a href="verify/">batch verification page</a>. It tells you whether that batch exists and what document it corresponds to.</li>
          <li>Ask for the certificate of analysis for that batch. It can be requested before an order, not only after.</li>
          <li>Read the certificate, not only the purity figure. Our guide to <a href="article/how-to-read-a-certificate-of-analysis/">reading a certificate of analysis</a> explains what each field means and which absences matter.</li>
        </ul>
        <p>The three questions a complete document answers are which batch this is, how pure it is, and whether it is the right molecule. A document that answers only one of them is incomplete, wherever it came from.</p>

        <h2>What to check on the label</h2>
        <p>The compound name, the strength in milligrams, and the batch number should all be present and should match the certificate. A mismatch between the number on the paper and the number on the vial means the document describes different material.</p>
        <p>Storage instructions on the label take precedence over any general rule of thumb, including the ones in our own guides.</p>


        <h2>What to ask any supplier, here or anywhere</h2>
        <p>Three questions settle most of what matters, and they are worth asking before paying.</p>
        <ul>
          <li><b>Does the batch number on the document match the one on the vial?</b> If it does not, the certificate describes someone else's material.</li>
          <li><b>With what method was it measured, and on what date?</b> A percentage with no procedure behind it is a statement, not a result.</li>
          <li><b>Who signed the certificate, and do they also sell the material?</b> Independent testing separates the party making the claim from the party being paid.</li>
        </ul>
        <p>None of these is specific to Panama or to this supplier. They are the criteria that make any purchase checkable, and a supplier who cannot answer them has told you something useful.</p>

        <h2>Ordering from outside Panama City</h2>
        <p>The interior is served by ground transport with next business day delivery, which means an order placed late in the day arrives the following working day rather than the same evening. Public holidays shift that by a day.</p>
        <p>Packaging is the same regardless of destination: sealed, protective, and labelled per vial. The additional day in transit is a single controlled leg and not a customs process, since the stock is already in the country.</p>

        <h2>When it arrives</h2>
        <p>Freeze-dried material can look like very little: a thin film, a few flecks on the glass, sometimes nothing obvious at all. A vial that appears empty has usually not lost anything, which is a consequence of <a href="article/lyophilization-freeze-drying/">how freeze-drying works</a> and of whether a bulking agent was part of the formulation.</p>
        <p>Let a cold vial reach room temperature before opening it, so condensation does not form inside. Keep the material dry, cool and out of direct light.</p>

        <h2>Prices and stock</h2>
        <p>Prices are set on the site and the server calculates the charge at the moment of payment, so a price seen in the cart is the price charged. Stock is held locally, which is what makes same-day delivery possible and also what limits it: a compound that is out of stock in the country cannot be conjured onto a van, and the honest answer in that case is a date.</p>
        <p>The pack of three follows the catalogue formula, a unit price multiplied by three with a discount applied, so the saving is visible in dollars on the product page instead of being described in the abstract.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease. No guidance on use is given, before or after an order.</p>
      `,
      faq: [
        {
          "q": "How long does delivery take in Panama?",
          "a": "In Panama City, 1 to 2 hours on the same day, with $4 flat shipping. Interior cities such as David, Chitré and Colón receive orders the next business day by Fergunson transport. Shipping is free on orders over $100."
        },
        {
          "q": "How is payment handled?",
          "a": "At checkout on the site. Card payments with Visa, Mastercard or American Express are processed by Stripe and completed on Stripe’s own secure checkout, so card details never touch this site. Crypto is accepted as USDC or USDT on Ethereum, verified on-chain before the order is released."
        },
        {
          "q": "Do I have to order through WhatsApp?",
          "a": "No. Orders are placed and paid at checkout. WhatsApp is a support channel where a specialist answers questions before and after an order, not a step in the purchase."
        },
        {
          "q": "Can I see a certificate of analysis before ordering?",
          "a": "Yes. The certificate for a batch can be requested before an order rather than only after delivery, and the batch number can be entered on the verification page to confirm which document it corresponds to."
        },
        {
          "q": "Does buying locally change anything about the material?",
          "a": "It shortens transit. A freeze-dried peptide is stable while dry, and a long journey means more temperature and humidity cycles, each an opportunity for moisture to reach the material. A short local delivery is a single trip."
        },
        {
          "q": "My vial looks empty. Is something missing?",
          "a": "Usually not. At the masses typically supplied, freeze-dried material can be a thin film or a few flecks on the glass. Appearance depends on how the drying went and on whether a bulking agent was present, not on how much compound is there."
        }
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
        <p class="lead">Almost every peptide in a research catalogue is encoded in nuclear DNA. MOTS-c is not. It comes from a short open reading frame inside the mitochondrial genome, which is unusual enough that its discovery opened a category rather than adding to one.</p>

        <h2>Identity</h2>
        <ul>
          <li><b>Molecular formula:</b> C<sub>101</sub>H<sub>152</sub>N<sub>28</sub>O<sub>22</sub>S<sub>2</sub></li>
          <li><b>Molecular weight:</b> approximately 2,175 g/mol</li>
          <li><b>PubChem CID:</b> 146675088</li>
        </ul>
        <p>The name is an abbreviation of its origin: an open reading frame within the mitochondrial 12S ribosomal RNA gene. The two sulfur atoms in the formula come from its two methionine residues, which is worth noting for storage, since methionine is one of the residues most prone to oxidation.</p>

        <h2>Encoded where proteins are not usually found</h2>
        <p>The mitochondrial genome is small and was long treated as coding for a short list of components of the respiratory machinery. Short open reading frames within it were not expected to produce functional peptides. MOTS-c was identified as one that does. <a class="cite" href="https://doi.org/10.1016/j.cmet.2015.02.009" target="_blank" rel="noopener nofollow">(Reference: Lee et al., 2015)</a></p>
        <p>The finding mattered beyond the single molecule, because it implied a class. Work on mitochondrially derived peptides as a group followed. <a class="cite" href="https://doi.org/10.1113/jp274472" target="_blank" rel="noopener nofollow">(Reference: Kim et al., 2017)</a></p>

        <h2>A peptide that moves</h2>
        <p>One line of work reports that the peptide relocates to the nucleus under metabolic stress, where it has been studied in the context of gene expression. <a class="cite" href="https://doi.org/10.1016/j.cmet.2018.06.008" target="_blank" rel="noopener nofollow">(Reference: Kim et al., 2018)</a> A molecule made in one compartment and acting in another is the kind of observation that makes a signalling role plausible, and it is the mechanistic question most of the literature circles.</p>
        <p>Later work examined its regulation in the context of exercise and age in model systems. <a class="cite" href="https://doi.org/10.1038/s41467-020-20790-0" target="_blank" rel="noopener nofollow">(Reference: Reynolds et al., 2021)</a></p>
        <p>These are laboratory and model-based observations. MOTS-c is supplied strictly as a research compound, and nothing here describes use in people or animals.</p>


        <h2>Why a mitochondrial gene reads differently</h2>
        <p>Mitochondria use a genetic code that differs from the one in the nucleus at a few codons, a consequence of their separate evolutionary history. A sequence read with the nuclear code and the same sequence read with the mitochondrial code do not always give the same peptide.</p>
        <p>The detail matters for anyone comparing a published sequence against a supplier's specification, because a discrepancy can come from which code was applied rather than from the material. It is also part of why short open reading frames in mitochondrial DNA went unexamined for so long: the tools that scanned genomes for coding sequences were built around nuclear assumptions.</p>

        <h2>A class, not a one-off</h2>
        <p>MOTS-c is not the only peptide attributed to the mitochondrial genome. Humanin was described earlier, and the recognition that both exist prompted systematic searches for others. <a class="cite" href="https://doi.org/10.1113/jp274472" target="_blank" rel="noopener nofollow">(Reference: Kim et al., 2017)</a></p>
        <p>The practical reason this matters to a catalogue is that members of a class tend to be studied comparatively. Sequences from the same origin, examined side by side, is the same experimental logic that puts two copper tripeptides next to each other elsewhere in this catalogue.</p>

        <h2>Sixteen residues is small for a signalling peptide</h2>
        <p>At about 2,175 daltons this is a short chain by the standards of the other compounds here, where forty residues and an attached fatty acid are common. Short peptides tend to stay flexible in solution instead of holding one fold, which is normal and not a defect; our note on <a href="article/amino-acids-peptides-proteins-difference/">amino acids, peptides and proteins</a> covers why.</p>
        <p>Size also shapes what a vial looks like. A few milligrams of freeze-dried material may amount to a barely visible trace on the wall of the vial, which is a property of <a href="article/lyophilization-freeze-drying/">how the drying works</a>.</p>

        <h2>Sixteen residues is a short synthesis</h2>
        <p>At this length the <a href="article/peptide-synthesis/">solid-phase synthesis</a> is straightforward: sixteen coupling cycles, no unusual residues, no acylation step. The compound is far simpler to make than the acylated forty-residue peptides elsewhere in this catalogue, and the impurity profile is correspondingly simpler.</p>
        <p>Deletion sequences remain the impurity to watch. In a sixteen-residue chain a missing residue is a proportionally larger change than in a forty-residue one, which helps a purity method resolve it.</p>

        <h2>The methionines are the handling issue</h2>
        <p>Methionine oxidises. The reaction adds an oxygen, about sixteen daltons, and produces a species that a <a href="article/mass-spectrometry-peptide-research/">mass measurement</a> separates cleanly from the intact peptide. With two methionines, a singly and a doubly oxidised form are both possible.</p>
        <p>The practical consequence is ordinary and worth respecting: keep the material dry, cool and away from light, and let a cold vial reach room temperature before opening so condensation does not form inside. Our guide to <a href="article/how-to-store-research-peptides/">storing research peptides</a> covers the routes of degradation in more detail.</p>

        <h2>What verification establishes</h2>
        <p>Purity from <a href="article/high-performance-liquid-chromatography-hplc/">chromatography</a> reports what share of the detected material is the target. Identity from mass spectrometry compares the measured mass against the mass calculated from the sequence, and at about 2,175 daltons the difference between monoisotopic and average mass is small but not zero, so the convention used belongs on the document.</p>
        <p>Both figures, tied to a batch number, are what a <a href="article/how-to-read-a-certificate-of-analysis/">certificate of analysis</a> reports and what can be <a href="verify/">checked</a> against a vial.</p>

        <h2>Reading a specification for this one</h2>
        <p>Two details are worth checking against any listing. The formula should account for both sulfur atoms, since a sequence quoted with one methionine describes a different peptide. And the mass should be quoted with its convention, because at this size the monoisotopic and average values differ by under a dalton, which is small enough to be mistaken for measurement error when it is a difference of definition.</p>

        <h2>Research use only</h2>
        <p>All products sold by Codex Research, including MOTS-c, are strictly for laboratory research and development. They are not for human or animal consumption and are not intended to diagnose, treat, cure, or prevent any disease.</p>
      `,
      faq: [
        {
          "q": "What is MOTS-c?",
          "a": "A short peptide encoded by an open reading frame within the mitochondrial 12S ribosomal RNA gene, rather than by nuclear DNA. Its formula is C101H152N28O22S2 and its molecular weight is about 2,175 g/mol."
        },
        {
          "q": "Why is its mitochondrial origin notable?",
          "a": "The mitochondrial genome was long treated as coding only for a short list of respiratory components, and short open reading frames within it were not expected to yield functional peptides. Identifying one that does implied a whole class."
        },
        {
          "q": "What does the research literature examine?",
          "a": "Mechanistic work has reported relocation to the nucleus under metabolic stress and studied the peptide in the context of gene expression, with later work examining its regulation in exercise and age in model systems. These are laboratory and model-based observations."
        },
        {
          "q": "Is MOTS-c difficult to synthesise?",
          "a": "Less so than most compounds in this catalogue. Sixteen coupling cycles, no unusual residues and no acylation step make it a straightforward solid-phase synthesis with a correspondingly simpler impurity profile."
        },
        {
          "q": "Why do the two methionines matter for storage?",
          "a": "Methionine oxidises, adding about sixteen daltons per residue, and with two of them both singly and doubly oxidised forms are possible. Keeping the material dry, cool and out of light limits the reaction."
        },
        {
          "q": "Can mass spectrometry detect oxidised MOTS-c?",
          "a": "Yes. Each oxidation adds about sixteen daltons, a difference that a mass measurement resolves cleanly from the intact peptide."
        }
      ],
      references: [
        {
          "text": "MOTS-c compound summary. PubChem, National Library of Medicine (CID 146675088).",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/146675088"
        },
        {
          "text": "Lee, C., et al. (2015). The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis. Cell Metabolism, 21(3), 443-454.",
          "url": "https://doi.org/10.1016/j.cmet.2015.02.009"
        },
        {
          "text": "Kim, K.H., Son, J.M., Benayoun, B.A., &amp; Lee, C. (2018). The mitochondrial-encoded peptide MOTS-c translocates to the nucleus to regulate nuclear gene expression. Cell Metabolism, 28(3), 516-524.",
          "url": "https://doi.org/10.1016/j.cmet.2018.06.008"
        },
        {
          "text": "Kim, S.J., Xiao, J., Wan, J., Cohen, P., &amp; Yen, K. (2017). Mitochondrially derived peptides as novel regulators of metabolism. The Journal of Physiology, 595(21), 6613-6621.",
          "url": "https://doi.org/10.1113/jp274472"
        },
        {
          "text": "Reynolds, J.C., et al. (2021). MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis. Nature Communications, 12, 470.",
          "url": "https://doi.org/10.1038/s41467-020-20790-0"
        }
      ],
      cta: 'Explore our <a href="catalog/?q=mots-c">MOTS-c research peptide</a> and related mitochondrial peptides for laboratory study.',
      related: ['amino-acids-peptides-proteins-difference', 'peptide-synthesis', 'what-is-nad-plus'],
    },
  ];

  window.REA.POSTS = POSTS;
  window.REA.BLOG_DISCLAIMER = DISCLAIMER;
})();
