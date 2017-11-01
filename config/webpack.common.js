const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        polyfills: "./src/polyfills.ts",
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
            use: ExtractTextPlugin.extract(
              'to-string-loader', 'style-loader', 'css-loader'
            ),
          },
          {
            test: /\.scss$/,
            use: [
              "raw-loader", "sass-loader?sourceMap"
            ],
          }
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