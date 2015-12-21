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
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    babel: {
      presets: ['react', 'es2015']
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'isparta',
        include: path.join(__dirname, 'src')
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass!'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
        exclude:[
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules')
        ]
      }
    ],
    noParse: [
      /node_modules\/sinon\//,
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'TRELLO_API_KEY'
    ]),
    new webpack.DefinePlugin({
      __DEV__: true
    })
  ],
  resolve: {
    alias: {
      'sinon': 'sinon/pkg/sinon'
    }
  },
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'text-encoding': 'window'
  }
};
