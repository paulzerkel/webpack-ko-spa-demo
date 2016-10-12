const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "KnockOut Single Page App!",
      template: "template.ejs",
    }),
  ]
};
