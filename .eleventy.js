const { ChapterNavigation, CHAPTER_STRUCTURE } = require('./js/chapter-navigation.js');

module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy JavaScript files to output
  eleventyConfig.addPassthroughCopy("js");
  
  // Copy any images if you add them later
  eleventyConfig.addPassthroughCopy("images");
  
  // Copy simulations folder for individual simulation pages
  eleventyConfig.addPassthroughCopy("simulations");
  
  // Add global data for navigation
  eleventyConfig.addGlobalData('chapterStructure', CHAPTER_STRUCTURE);
  
  // Add shortcode for automatic chapter navigation
  eleventyConfig.addShortcode('chapterNav', function(chapterSlug, currentPageSlug) {
    return ChapterNavigation.generateNavigationHTML(chapterSlug, currentPageSlug);
  });
  
  // Add shortcode for chapter index generation
  eleventyConfig.addShortcode('chapterIndex', function(chapterSlug) {
    return ChapterNavigation.generateChapterIndex(chapterSlug);
  });
  
  // Add filter to get navigation data for templates
  eleventyConfig.addFilter('getPageNav', function(chapterSlug, currentPageSlug) {
    return ChapterNavigation.getPageNavigation(chapterSlug, currentPageSlug);
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