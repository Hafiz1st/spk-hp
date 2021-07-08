const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'bundle.js',
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, './docs/'),
    compress: false,
    hot: true,
    port: 8080,
    publicPath: '/',
    watchContentBase: true,
  },
};
