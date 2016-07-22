var path = require('path');
var webpack = require('webpack');

var JS_REGEX = /\.js$|\.jsx$|\.es6$|\.babel$/;

module.exports = {
  devtool: 'source-map',
  env: 'development',
  entry: {
    app: './src/js/mochawesome.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: '[name].js'
    // chunkFilename: '[name]-[hash].js'
  },
  module: {
    preLoaders: [
      { test: JS_REGEX, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      { test: JS_REGEX, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [],
  resolve: {
    extensions: [ '', '.js', '.json', '.jsx', '.es6', '.babel', '.css' ],
    modulesDirectories: [
      'node_modules',
      'src',
      path.resolve(__dirname, './node_modules')
    ]
  }
  // postcss: (wp) => [
  //   require('postcss-import')({
  //     addDependencyTo: wp,
  //     plugins: [ require('stylelint')() ]
  //   }),
  //   require('postcss-url')(),
  //   require('postcss-cssnext')({
  //     browsers: [ 'ie >= 8', 'last 2 versions' ],
  //     warnForDuplicates: false
  //   }),
  //   // add additional plugins here
  //   // require('postcss-browser-reporter')(),
  //   require('postcss-reporter')()
  // ]
};
