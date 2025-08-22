export default function (eleventyConfig) {
    // Output directory: _site
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory(".");
    // Copy `img/` to `_site/img/`
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/config");
    eleventyConfig.addPassthroughCopy("src/sass");
};