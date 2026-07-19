/* REA Store — blog: artículo destacado + grid. */
(function () {
  const { ARTICLES } = window.REA;

  const cover = (title) => `
    <div class="blog-cover">
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#eceef1"/><stop offset="1" stop-color="#dfe1e6"/>
        </linearGradient></defs>
        <rect width="400" height="260" fill="url(#g1)"/>
        <circle cx="320" cy="60" r="90" fill="#6b7280" opacity="0.10"/>
        <circle cx="80" cy="210" r="70" fill="#23262d" opacity="0.07"/>
      </svg>
      <span class="blog-cover-mark"></span>
    </div>`;

  const feature = ARTICLES[0];
  document.getElementById('blogFeature').innerHTML = `
    <a class="blog-feature-link" href="#">
      ${cover(feature.title)}
      <div class="blog-feature-body">
        <span class="blog-tag">${feature.tag} · ${feature.date}</span>
        <h2>${feature.title}</h2>
        <p>${feature.excerpt}</p>
        <span class="link">Read article →</span>
      </div>
    </a>`;

  document.getElementById('blogGrid').innerHTML = ARTICLES.slice(1).map((a) => `
    <a class="blog-card" href="#">
      ${cover(a.title)}
      <div class="blog-card-body">
        <span class="blog-tag">${a.tag} · ${a.date}</span>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
      </div>
    </a>`).join('');
})();
