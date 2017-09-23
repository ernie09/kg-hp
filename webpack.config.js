const path = require('path');
const CustomAntThemeModifyVars = require('./app/theme/antVars.js');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      './app/index.js'
    ]
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: 'http://www.mir-hale-pool.de/'
  },

  devServer: {
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: './app',
    port: 3000
  },

  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader',
        options: {
          paths: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'app/less')
          ],
          modifyVars: CustomAntThemeModifyVars()
        }
      }]
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.(jpe?g|JPE?G|png|gif)$/i,
      loaders: [
        'file-loader?name=img/[hash].[ext]',
        'image-webpack-loader'
      ]
    }]
  },

  plugins: []
};
