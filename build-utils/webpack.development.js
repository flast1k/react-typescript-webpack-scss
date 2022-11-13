const path = require('path');
const { getStyleLoader } = require('./common');

module.exports = () => ({
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    static: path.join(__dirname, 'static'),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
  module: {
    rules: [getStyleLoader()],
  },
});
