const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '../src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test:  /\.scss$/,
        use: 
      }
    ]
  },
   plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
  ]
}