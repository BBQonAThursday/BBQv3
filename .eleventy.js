const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {  
  // Set custom directories for input, output, includes, and data  

  // eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPlugin(eleventySass);
  return { 
    // addPassthroughFileCopy: true,
    dir: {      
      input: "src",      
      includes: "_includes",
      layouts: "_layouts",      
      data: "_data",      
      output: "_site"    
    }  
  };
};