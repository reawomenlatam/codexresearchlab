/* Codex Research — blog: featured article + grid. Uses window.REA.POSTS. */
(function () {
  const POSTS = window.REA.POSTS || [];

  // Portada = la infografía del post (assets/blog/<slug>.jpg), encuadrada desde arriba
  const cover = (post) => `
    <div class="blog-cover">
      <img src="${post.image || `assets/blog/${post.slug}.jpg`}" alt="${post.imageAlt}" loading="lazy">
    </div>`;

  const feature = POSTS[0];
  if (feature) {
    document.getElementById('blogFeature').innerHTML = `
      <a class="blog-feature-link" href="article.html?slug=${feature.slug}">
        ${cover(feature)}
        <div class="blog-feature-body">
          <span class="blog-tag">${feature.category} · ${feature.date}</span>
          <h2>${feature.title}</h2>
          <p>${feature.excerpt}</p>
          <span class="link">Read article →</span>
        </div>
      </a>`;
  }

  document.getElementById('blogGrid').innerHTML = POSTS.slice(1).map((a) => `
    <a class="blog-card" href="article.html?slug=${a.slug}">
      ${cover(a)}
      <div class="blog-card-body">
        <span class="blog-tag">${a.category} · ${a.date}</span>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
      </div>
    </a>`).join('');
})();
