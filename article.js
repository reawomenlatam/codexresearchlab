/* Codex Research — blog article renderer.
   Reads ?slug=…, renders the post, sets SEO meta, injects Article + FAQPage
   JSON-LD (with < escaped), and builds the related-articles cluster. */
(function () {
  const { POSTS, BLOG_DISCLAIMER } = window.REA;
  const ui = window.REAui;
  const main = document.getElementById('articleMain');
  const SITE = 'https://codexresearchlab.com';

  const slug = document.body.getAttribute('data-slug') || new URLSearchParams(location.search).get('slug');
  const p = POSTS.find((x) => x.slug === slug);

  if (!p) {
    main.innerHTML = `
      <section class="section"><div class="container" style="text-align:center;">
        <h1>Article not found</h1>
        <p style="color:var(--muted);margin:.6rem 0 1.4rem;">This article doesn’t exist or was moved.</p>
        <a class="btn btn-primary" href="blog.html">Back to the blog</a>
      </div></section>`;
    return;
  }

  // ---------- SEO meta ----------
  document.title = p.metaTitle;
  const setMeta = (name, val, attr = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
    el.setAttribute('content', val);
  };
  const url = `${SITE}/article/${p.slug}.html`;
  setMeta('description', p.metaDescription);
  setMeta('og:title', p.metaTitle, 'property');
  setMeta('og:description', p.metaDescription, 'property');
  setMeta('og:type', 'article', 'property');
  setMeta('og:url', url, 'property');
  // Canonical
  let canon = document.querySelector('link[rel="canonical"]');
  if (!canon) { canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
  canon.href = url;

  // ---------- JSON-LD (escape < to avoid </script> breakout) ----------
  const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: p.metaTitle, description: p.metaDescription,
    author: { '@type': 'Organization', name: 'Codex Research' },
    publisher: {
      '@type': 'Organization', name: 'Codex Research',
      logo: { '@type': 'ImageObject', url: `${SITE}/assets/logo-horizontal-dark.png` },
    },
    mainEntityOfPage: url,
    datePublished: p.dateISO, dateModified: p.dateISO,
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: p.faq.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog.html` },
      { '@type': 'ListItem', position: 3, name: p.title, item: url },
    ],
  };
  // En páginas estáticas el JSON-LD ya viene horneado; solo inyectarlo en el fallback.
  if (!document.body.dataset.slug) {
    [articleSchema, faqSchema, breadcrumbSchema].forEach((s) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.textContent = jsonLd(s);
      document.head.appendChild(el);
    });
  }

  // ---------- Featured image (infographic, shown uncropped) ----------
  // Convention: assets/blog/<slug>.jpg — override with post.image if needed.
  const imgSrc = p.image || `assets/blog/${p.slug}.jpg`;
  const cover = `
    <figure class="article-figure">
      <a href="${imgSrc}" target="_blank" rel="noopener" aria-label="Open full-size image">
        <img src="${imgSrc}" alt="${p.imageAlt}" width="1575" height="1800">
      </a>
      <figcaption>${p.imageAlt} · <span>Click to view full size</span></figcaption>
    </figure>`;
  setMeta('og:image', `${SITE}/${imgSrc}`, 'property');

  // ---------- Related cluster ----------
  const relatedCards = (p.related || [])
    .map((s) => POSTS.find((x) => x.slug === s))
    .filter(Boolean)
    .map((r) => `
      <a class="blog-card" href="article/${r.slug}.html">
        <div class="blog-card-body">
          <span class="blog-tag">${r.category} · ${r.date}</span>
          <h3>${r.title}</h3>
          <p>${r.excerpt}</p>
        </div>
      </a>`).join('');

  const refsHtml = p.references.map((r) =>
    `<li><a href="${r.url}" target="_blank" rel="noopener nofollow">${r.text}</a></li>`).join('');

  // ---------- Render ----------
  main.innerHTML = `
    <article>
      <div class="container">
        <nav class="breadcrumb">
          <a href="index.html">Home</a> <span>/</span>
          <a href="blog.html">Blog</a> <span>/</span>
          <span>${p.title}</span>
        </nav>
        <header class="article-head">
          <span class="blog-tag">${p.category} · ${p.date}</span>
          <h1>${p.title}</h1>
        </header>
      </div>

      <div class="container article-cover-wrap">${cover}</div>

      <div class="container article-layout">
        <div class="article-body">
          ${p.body}

          <section class="article-faq">
            <h2>Frequently asked questions</h2>
            <div class="faq-list" id="articleFaq"></div>
          </section>

          <section class="article-refs">
            <h2>References</h2>
            <ul>${refsHtml}</ul>
          </section>

          <div class="article-cta">${p.cta}</div>

          <p class="article-disclaimer"><b>Disclaimer:</b> ${BLOG_DISCLAIMER}</p>
        </div>
      </div>

      ${relatedCards ? `
      <div class="container">
        <section class="cross-sell">
          <div class="section-head" style="margin-bottom:1.4rem;"><h2>Related articles</h2></div>
          <div class="blog-grid">${relatedCards}</div>
        </section>
      </div>` : ''}
    </article>
  `;

  // FAQ accordion (reuse shared component: renders + wires toggle)
  ui.faqAccordion(document.getElementById('articleFaq'), p.faq);
})();
