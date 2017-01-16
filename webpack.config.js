const path           = require('path');
const TransferPlugin = require('transfer-webpack-plugin');
const StatsPlugin    = require('stats-webpack-plugin');
const webpack        = require('webpack');
const srcPath        = path.join(__dirname, 'src');
const buildPath      = path.join(__dirname, 'build');

let profile = false;
const production = process.env.NODE_ENV === 'production';
const plugins    = [
  new webpack.EnvironmentPlugin([
    'NODE_ENV'
  ]),
  new webpack.ProvidePlugin({
    strophe: 'strophe-core?fix-amd'
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new TransferPlugin([
    { from: 'html' }
  ], srcPath)
];
const babelPlugins = [ 'transform-runtime' ];

if (production) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: true
  }));

  babelPlugins.push(
    'transform-react-constant-elements',
    'transform-react-inline-elements'
  );
}

if (process.env.STATS) {
  plugins.push(new StatsPlugin('stats.json', {
    chunkModules: true
  }));

  profile = true;
}

module.exports = {
  context: srcPath,
  entry: {
    app: './app/index.jsx'
  },
  resolve: {
    alias: {
      'strophe-core': 'strophe.js/src/core',
      'strophe-bosh': 'strophe.js/src/bosh',
      'strophe-websocket': 'strophe.js/src/websocket',
      'strophe-sha1': 'strophe.js/src/sha1',
      'strophe-base64': 'strophe.js/src/base64',
      'strophe-md5': 'strophe.js/src/md5',
      'strophe-utils': 'strophe.js/src/utils',
      'strophe-polyfill': 'strophe.js/src/polyfills',
      'strophe': 'strophe.js/src/wrapper',
      'strophe-helper': 'util/strophe-helper'
    },
    extensions: [
      '.js',
      '.jsx',
      '.scss',
      '.css',
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'es2015',
            'react'
          ],
          plugins: babelPlugins
        }
      },
      {
        test: /\?fix-amd$/,
        loader: 'imports-loader?define=>false,this=>window'
      },
      {
        test: /strophejs-plugins/,
        loader: 'imports-loader?Strophe=>strophe.Strophe'
      }
    ]
  },
  output: {
    path: buildPath,
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  },
  devServer: {
    inline: true
  },
  plugins,
  profile
};
