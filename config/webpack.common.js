const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        main: "./src/main.ts"
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    module: {
        rules: [
          {
              test: /\.ts$/,
              loaders: ["awesome-typescript-loader", "angular2-template-loader"]
          },
          {
              test: /\.ts$/,
              enforce: "pre",
              loader: 'tslint-loader'
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            test: /\.css$/,
            use: ['to-string-loader', 'css-loader']
          },
          {
            test: /\.scss$/,
            exclude: [/node_modules/, /.global.scss$/],
            use: ['to-string-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /global.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                'css-loader',
                'sass-loader',
              ],
            })
          },
          {
            test: /\.(svg|png|jpg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/images/[name].[ext]',
                },
              },
            ],
          },
          {
            test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            use:
            [
              {
                loader: 'url-loader',
              },
            ],
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        }),
        new ExtractTextPlugin('[name].bundle.css')
    ]
};