const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js', //文件名中hash的用途，http缓存中的Cache-Control 
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'XDML-写代码啦',
      template: 'src/assets/index.html'
    }),
  ],
};
