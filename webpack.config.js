const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.hbs$/,
        loader: "handlebars",
        query: {
          partialDirs: [
            path.join(__dirname, "src", "views", "partials"),
          ]
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "KnockOut Single Page App!",
      template: "./src/views/template.hbs",
      filename: "index.html"
    }),
  ]
};
