// .eleventy.js - Updated to use _data/chapters.js as single source

module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy JavaScript files to output
  eleventyConfig.addPassthroughCopy("js");
  
  // Copy any images if you add them later
  eleventyConfig.addPassthroughCopy("images");
  
  // Copy simulations folder for individual simulation pages
  eleventyConfig.addPassthroughCopy("simulations");
  
  // Helper function to find chapter by ID
  function findChapter(chapters, chapterId) {
    return chapters.chapters.find(chapter => chapter.id === chapterId);
  }
  
  // Helper function to find page in chapter
  function findPage(chapter, pageSlug) {
    if (!chapter || !chapter.pages) return null;
    return chapter.pages.find(page => page.slug === pageSlug);
  }
  
  // Add shortcode for automatic chapter navigation
  eleventyConfig.addShortcode('chapterNav', function(chapterSlug, currentPageSlug) {
    const chapters = this.ctx.chapters;
    const chapter = findChapter(chapters, chapterSlug);
    if (!chapter) return '';
    
    const currentIndex = chapter.pages.findIndex(page => page.slug === currentPageSlug);
    if (currentIndex === -1) return '';
    
    const prevPage = currentIndex > 0 ? chapter.pages[currentIndex - 1] : null;
    const nextPage = currentIndex < chapter.pages.length - 1 ? chapter.pages[currentIndex + 1] : null;
    
    return `
      <div class="navigation">
        ${prevPage ? `
          <a href="/physics-website/chapters/${chapterSlug}/${prevPage.slug}/" class="nav-link nav-prev">
            ← Previous: ${prevPage.title}
          </a>
        ` : '<div></div>'}
        
        <a href="/physics-website/chapters/${chapterSlug}/" class="nav-link nav-chapter">
          📚 Chapter Overview
        </a>
        
        ${nextPage ? `
          <a href="/physics-website/chapters/${chapterSlug}/${nextPage.slug}/" class="nav-link nav-next">
            Next: ${nextPage.title} →
          </a>
        ` : '<div></div>'}
      </div>
    `;
  });
  
  // Add shortcode for chapter index generation
  eleventyConfig.addShortcode('chapterIndex', function(chapterSlug) {
    const chapters = this.ctx.chapters;
    const chapter = findChapter(chapters, chapterSlug);
    if (!chapter) return '';
    
    return chapter.pages.map((page, index) => `
      <a href="/physics-website/chapters/${chapterSlug}/${page.slug}/" class="chapter-link">
        <span class="page-number">${index + 1}</span>
        <div class="page-info">
          <strong>${page.title}</strong>
          <p>${page.description}</p>
        </div>
        <span class="page-arrow">→</span>
      </a>
    `).join('');
  });
  
  // Add filter to get navigation data for templates
  eleventyConfig.addFilter('getPageNav', function(chapterSlug, currentPageSlug) {
    const chapters = this.ctx.chapters;
    const chapter = findChapter(chapters, chapterSlug);
    if (!chapter) return null;
    
    const currentIndex = chapter.pages.findIndex(page => page.slug === currentPageSlug);
    if (currentIndex === -1) return null;
    
    const prevPage = currentIndex > 0 ? chapter.pages[currentIndex - 1] : null;
    const nextPage = currentIndex < chapter.pages.length - 1 ? chapter.pages[currentIndex + 1] : null;
    
    return {
      current: chapter.pages[currentIndex],
      previous: prevPage ? {
        ...prevPage,
        url: `/physics-website/chapters/${chapterSlug}/${prevPage.slug}/`
      } : null,
      next: nextPage ? {
        ...nextPage,
        url: `/physics-website/chapters/${chapterSlug}/${nextPage.slug}/`
      } : null,
      chapterOverview: `/physics-website/chapters/${chapterSlug}/`
    };
  });
  
  // Add computed data to automatically detect chapter and page
  eleventyConfig.addGlobalData('eleventyComputed', {
    chapterSlug: (data) => {
      const match = data.page.inputPath.match(/chapters\/(chapter-\d+)\//);
      return match ? match[1] : null;
    },
    pageSlug: (data) => {
      const match = data.page.inputPath.match(/chapters\/chapter-\d+\/([^\/]+)\//);
      return match ? match[1] : null;
    }
  });
  
  // Set custom directories
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};