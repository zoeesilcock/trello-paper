require('dotenv').load();
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [
    {
      test: /\.scss$/,
      loader: 'style!css!sass!'
    },
    {
      test: /\.js$/,
      loaders: [
        'babel-loader'
      ],
      exclude: path.join(__dirname, 'node_modules')
    } ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'TRELLO_API_KEY'
    ])
  ]
};
