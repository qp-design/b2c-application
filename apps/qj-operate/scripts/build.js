const common = require('./common');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const defaultConfig = {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      'process.env': `window._env_operate` //构建时定义process.env值为window._env_的值
    }),
  ]
}
module.exports = () => {
  return merge(defaultConfig, common);
}
