const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const {dependencies: deps} = require("../package.json");

require('dotenv').config()

module.exports = {
  output: {
    chunkFilename: "[name].[contenthash:8].js",
  },
  externals: {
    'lodash-es': '_',
    'antd/es': 'antd/es'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [

    new ModuleFederationPlugin({
      name: 'qj_operate',
      filename: 'remoteEntry.js',
      exposes: {
        './operate': './src/core',
        './operateData': './src/data',
      },
      shared: {
        ...deps,
        // alias
        "qj-shared-library": {
          singleton: true,
          // 实际引入名字
          import: "@brushes/qj-shared-library",
          requiredVersion: deps["@brushes/qj-shared-library"],
        },
        "antd": {
          singleton: true,
          requiredVersion: deps.antd,
        },
        "react": {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        }
      },
    }),
  ],
};
