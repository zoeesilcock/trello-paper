require('dotenv').load();
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: 'mocha!./test/index.js',
  output: {
    path: path.join(__dirname, 'dev', 'test'),
    publicPath: '/test',
    filename: 'index.test.js'
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
    ]),
    new webpack.DefinePlugin({
      __DEV__: true
    })
  ]
};
