const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV_INJECTED = {
  NODE_ENV: process.env.NODE_ENV,
};

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: './',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(ENV_INJECTED),
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'React Boilerplate Production Mode',
      filename: 'index.html',
      template: 'template.html',
    }),
  ],
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'airbnb', 'stage-0'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
      }, {
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
        test: /\.sass$/,
        exclude: /node_modules/,
      }, {
        test: /\.(png|jpg|svg|gif|otf|ttf|woff|eot)$/,
        loaders: ['file'],
        exclude: /node_modules/,
      },
    ],
  },
};
