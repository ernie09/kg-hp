const path = require('path');
const webpack = require('webpack');
const TARGET = process.env.npm_lifecycle_event;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonWebpackConfig = {
  entry: {
    app: [
      'whatwg-fetch',
      '@babel/polyfill',
      './app/index.tsx'
    ]
  },

  output: {
    path: (TARGET === 'start') ? path.join(__dirname) : path.join(__dirname, '../build'),
    filename: '[name].js',
    publicPath: ''
  },

  module: {
    rules: [{
      test: /\.tsx?|\.jsx?$/,
      include: [
        path.resolve('app')
      ],
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        {
          loader: 'css-loader'
        }
      ]
    }, {
      test: /\.less$/,
      loaders: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }, {
      test: /\.(jpe?g|png|gif|ico)$/i,
      loaders: [
        'file-loader?name=img/[name].[ext]'
      ]
    }]
  },

  // outcomment to disable use of source-map. Source map doubles the size
  // of the app dev-build produced by webpack, so keep it off if possible:
  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'app'),
    disableHostCheck: true,
    host: '0.0.0.0',
    https: true,
    inline: true,
    port: 3000,
    publicPath: 'https://localhost:3000/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: './public/favicon.ico',
      hash: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      template: './public/index.html',
      title: 'KG "Mir hale Pool" Verscheid'
    }),
    new webpack.ProgressPlugin({ profile: false }),
    new webpack.DefinePlugin({
      '___PRODUCTION___': JSON.stringify(TARGET !== 'start')
    }),
    new webpack.ProvidePlugin({
      TextDecoder: ['text-encoding', 'TextDecoder']
    })
  ],

  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.css',
      '.less'
    ],
  },
};

module.exports = commonWebpackConfig;