var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rupture = require('rupture');
var typographic = require('typographic');

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  //watch: true,
  entry: './scripts/app.js',
  output: {
    path: path.resolve('build/'),
    filename: "bundle.js",
  },
  plugins: [
    new ExtractTextPlugin("main.css"),
    new UglifyJsPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  stylus: {
    use:[rupture(), typographic()],
    import: ['~typographic/stylus/typographic.styl']
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.css', '.styl']
  }
}
