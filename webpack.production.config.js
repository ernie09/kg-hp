const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

let commonWebpackConfig = commonConfig.commonWebpackConfig;

// prepare the InterpolateHtmlPlugin
const interpolations = {
  'NODE_ENV': 'production',
  'PUBLIC_URL': ''
};

commonWebpackConfig.plugins = [
  ...commonWebpackConfig.plugins || [],
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new CopyWebpackPlugin([
    // Note: This can be removed as soon as the SHOGun2 interface is being called.
    {
      from: './src/resources/appContext.json',
      to: './resources/'
    }, {
      from: './src/resources/i18n/',
      to: './resources/i18n/'
    }, {
      from: './src/resources/logos/',
      to: './resources/logos/'
    }, {
      from: './src/resources/img/',
      to: './resources/img/'
    }
  ]),
  new HtmlWebpackPlugin({
    title: 'progemis client',
    filename: 'index.html',
    favicon: './public/favicon.ico',
    template: './public/index.html',
    files: {
      css: []
    },
    headers: {
      csrfToken: '${_csrf.token}',
      csrfHeader: '${_csrf.headerName}',
      csrfParameterName: '${_csrf.parameterName}'
    },
    hash: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  }),
  new webpack.ProgressPlugin({ profile: false }),
  new InterpolateHtmlPlugin(interpolations)
];

commonWebpackConfig.mode = 'production';

module.exports = commonWebpackConfig;
