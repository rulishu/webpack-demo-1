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
   module: {
    rules: [
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
      {
       test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',]
       },
       {
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          'less-loader'], 
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
           {
          loader: 'sass-loader',
          options: {
          implementation: require('dart-sass'),
          },
         }
        ],
      },
    ],
  },
};
