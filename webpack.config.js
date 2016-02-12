var path = require('path');
var webpack = require('webpack');
var rupture = require('rupture');
var typographic = require('typographic');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: './scripts/app.js',
  output: {
    path: path.resolve('build/'),
    filename: "bundle.js",
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin("main.css"),
    new ngAnnotatePlugin({add: true})
  ],
  module: {
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
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "raw-loader"
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=10000!img?optimizationLevel=3&progressive=true'
      },
      {
        test: /\.(woff2|woff|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=10000'
      }
    ]
  },
  stylus: {
    use:[rupture(), typographic()],
    import: ['~typographic/stylus/typographic.styl']
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.css', '.styl', '.jpg', '.jpeg', '.png']
  }
}
