const civetWebpackPlugin = require('@danielx/civet/webpack').default;

module.exports = {
  mode: 'development',
  entry: './main.civet',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
    clean: true
  },
  devtool: 'source-map',
  plugins: [
    // for more options, see https://github.com/DanielXMoore/Civet/tree/main/source/unplugin#options
    civetWebpackPlugin({
      ts: 'civet'
  })],
};
