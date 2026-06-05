module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  eleventyConfig.addFilter("dateJP", (dateObj) => {
    const d = new Date(dateObj);
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  });

  eleventyConfig.addFilter("dateISO", (dateObj) => {
    return new Date(dateObj).toISOString().slice(0, 10);
  });

  eleventyConfig.addCollection("news", (collection) =>
    collection.getFilteredByGlob("src/news/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("products", (collection) =>
    collection.getFilteredByGlob("src/products/*.md").sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
