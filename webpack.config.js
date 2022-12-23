// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const miniCss = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const stylesHandler = "style-loader";

const config = {
  entry: "./src/index.js",
  output: {
    clean: true,
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new miniCss({
      filename: "style.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/images", to: "images" }],
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
