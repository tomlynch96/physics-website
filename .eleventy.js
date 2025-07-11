module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy any images if you add them later
  eleventyConfig.addPassthroughCopy("images");
  
  // Set custom directories
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};