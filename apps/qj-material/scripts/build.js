const common = require('./common');
const { merge } = require('webpack-merge');

const defaultConfig = {
  plugins: [

  ]
}
module.exports = () => {
  return merge(defaultConfig, common);
}
