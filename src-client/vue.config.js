module.exports = {
  outputDir: "../src/main/resources/assets/client",

  chainWebpack: config => {
    config.module
    .rule('svg')
    .use('file-loader')
    .loader('vue-svg-loader');

    if(config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css');
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: '[name].css',
        chunkFilename: '[name].css'
      }])
    }
  },

  configureWebpack: {
    output: {
      filename: '[name].js',
        chunkFilename: '[name].js'
    }
  }
};