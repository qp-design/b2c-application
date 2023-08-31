const common = require('./common');
const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');

const defaultConfig = {

  devServer: {
    port: 4002,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 11112
    // }),
    new webpack.DefinePlugin({
      'process.env': `window._env_operate` //构建时定义process.env值为window._env_的值
    }),
  ]
}
module.exports = () => {
  return merge(defaultConfig, common);
}
