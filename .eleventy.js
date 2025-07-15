module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy JavaScript files to output
  eleventyConfig.addPassthroughCopy("js");
  
  // Copy any images if you add them later
  eleventyConfig.addPassthroughCopy("images");
  
  // Copy simulations folder for individual simulation pages
  eleventyConfig.addPassthroughCopy("simulations");
  
  // Set custom directories
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};