const AntdDayjsWebpackPlugin =  require('antd-dayjs-webpack-plugin');
const webpack = require('webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const {dependencies: deps} = require("../package.json");

const path = require("./paths");

module.exports = {
  output: {
    chunkFilename: "[name].[contenthash:8].js",
  },
  cache: {
    type: 'filesystem',
    idleTimeout: 10,
    compression: 'gzip',
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      '@': path('src'),
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
        test: /\.json$/,
        use: ["json-loader"]
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
    new AntdDayjsWebpackPlugin(),
    // new CompressionPlugin(),
    // new CssMinimizerWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'qj_material',
      filename: 'remoteEntry.js',
      remotes: {
        'app-container': 'app_container@http://localhost:8888/remoteEntry.js',
      },
      exposes: {
        './menu': path('src/App'),
      },
      shared: {
        "s-material-react": {
          import: "s-material-react",
          requiredVersion: process.env.NODE_ENV === 'development' ? require("../../s-material-react/package.json").version : deps["s-material-react"],
        },
        "qj-shared-library": {
          singleton: true,
          import: "@brushes/qj-shared-library",
          requiredVersion: deps["@brushes/qj-shared-library"],
        },
        // "antd": {
        //   singleton: true,
        //   requiredVersion: deps.antd,
        // },
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
    new webpack.DefinePlugin({
      'process.env': `window._env_` //构建时定义process.env值为window._env_的值
    }),
  ],
};