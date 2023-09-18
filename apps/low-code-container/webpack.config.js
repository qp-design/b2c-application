const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    // filename: '[contenthash:8].js',
    chunkFilename: "[name].[contenthash:8].js",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8888,
    historyApiFallback: true,
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
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 11118
    // }),
    new ModuleFederationPlugin({
      name: "kezi",
      shared: {
        ...deps,
        "@brushes/shared-store": {
          singleton: true,
          requiredVersion: deps['@brushes/shared-store'],
        },
        antd: {
          singleton: true,
          requiredVersion: deps.antd,
        },
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    })
  ],
};
