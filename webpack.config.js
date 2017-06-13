const webpack = require('webpack');
const path = require('path');
 //'webpack-dev-server/client?http://192.168.80.128:8080',
 //webpack-dev-server --hot --inline
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'babel-polyfill',
    path.join(__dirname, 'client/index')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192000'
    }, {
      test: /\.html$/,
      loader: "html"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    hot: true,
    inline: true
  }
};