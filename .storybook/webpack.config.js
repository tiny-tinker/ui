const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.styl(us)?$/,
    use: ["style-loader", "css-loader", "stylus-loader"],
  });

  defaultConfig.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  defaultConfig.plugins.push(new VueLoaderPlugin());

  return defaultConfig;
};