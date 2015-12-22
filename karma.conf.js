var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.test');

webpackConfig.entry = './src/index';

module.exports = function(config) {
  config.set({
    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    },
    frameworks: ['mocha'],
    files: [ 'test/index.js' ],
    preprocessors: { 'test/*': ['webpack'] },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true
      }
    },
    reporters: ['spec', 'progress', 'coverage'],
    coverageReporter: {
      type: 'text'
    },
    autoWatch: true,
    singleRun: false,
    plugins: [
      require("karma-mocha"),
      require("karma-spec-reporter"),
      require("karma-webpack"),
      require("karma-coverage")
    ]
  })
};
