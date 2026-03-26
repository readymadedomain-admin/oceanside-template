module.exports = function(eleventyConfig) {
  // This tells Eleventy to copy your CSS folder to the output
  eleventyConfig.addPassthroughCopy("src/css");
    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes",
        data: "_data"
      }
    };
  };