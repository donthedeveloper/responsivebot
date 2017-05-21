'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './browser/src/js/index.jsx',
  output: {
    path: __dirname + '/browser/public/js',
    filename: 'scripts.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};