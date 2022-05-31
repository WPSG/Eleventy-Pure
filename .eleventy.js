const modern = require('eleventy-plugin-modern');
const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = config => {
  config.addPlugin(modern());
  config.addPlugin(pluginRss);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};