const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["to-string-loader", "style-loader", "css-loader"]
            },
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
                test: /\.scss$/,
                loader: ["raw-loader", "sass-loader?sourceMap"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        })
    ],
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
    }
};