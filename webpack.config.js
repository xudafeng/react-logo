'use strict';

var path = require('path');

var config = {
  entry: {
    homepage: path.resolve('homepage')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;
