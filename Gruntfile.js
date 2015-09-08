var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-sftp-deploy');

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'webpack': {
      options: webpackConfig,
      build: {
        plugins: [
          new webpack.DefinePlugin({
            "process.env": {
              "NODE_ENV": JSON.stringify("production")
            }
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
              warnings: false
            }
          })
        ]
      }
    },
    'webpack-dev-server': {
      options: {
        webpack: webpackConfig
      },
      start: {
        keepAlive: true,
        contentBase: 'public',
        webpack: {
          devtool: 'eval',
          debug: true
        }
      }
    },
    'open': {
      default: {
        path: 'http://localhost:8080/',
        app: 'Google Chrome'
      }
    },
    'sftp-deploy': {
      build: {
        auth: {
          host: 'zoeetrope.com',
          authKey: 'privateKey',
          port: 22
        },
        src: 'public',
        dest: '/home/deployer/trello-paper',
        serverSep: '/',
        progress: true
      }
    }
  });

  grunt.registerTask('default', ['webpack-dev-server:start', 'open:dev']);
  grunt.registerTask('build', ['webpack:build']);
  grunt.registerTask('deploy', ['webpack:build', 'sftp-deploy']);
};
