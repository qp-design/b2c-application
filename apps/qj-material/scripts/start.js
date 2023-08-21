const common = require('./common');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require("./paths");

const defaultConfig = {
  devServer: {
    static: {
      directory: path('dist'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 4001,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 11111
    }),
  ]
}
module.exports = () => {
  return merge(defaultConfig, common);
}
