/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Building Path and ENV ============================================================================================
const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');
const isProd = process.env.NODE_ENV == 'production';
const isDev = process.env.NODE_ENV == 'development';

// Plugin define ===========================================================================================
//generate html
const HTMLwebpackplugin = new HtmlWebpackPlugin({
    title: 'Project',
    filename:  `${distDir}/index.html`,
    template:  `${srcDir}/index.html`,
});

// css solution
const extractSASS = new ExtractTextPlugin({
    filename: "[name]_global_style.[contenthash].css",
    disable: isDev
});

const extractSCSSModule = new ExtractTextPlugin({
    filename: "[name]_sass_module.[contenthash].css",
    disable: isDev
});

const extractCSSModule = new ExtractTextPlugin({
    filename: "[name]_css_module.[contenthash].css",
    disable: isDev
});


// webpack module ==============================================================================================
module.exports = {
    entry: {
        bundle: `${srcDir}/index.js`
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, 'src/utilities/'),
            Templates: path.resolve(__dirname, 'src/templates/'),
            Components: path.resolve(__dirname, 'src/component/'),
            Style: path.resolve(__dirname, 'src/style/'),
        }
    },
    module: {
        rules: [
            {enforce:'pre',test:/\.(js|jsx)$/,loader:'eslint-loader',exclude:/node_modules/},
            {test:/\.(js|jsx)$/,loader:'babel-loader',exclude:/node_modules/},
            {test: /\.scss$/,use: extractSASS.extract({use: [{loader: "css-loader"}, {loader: 'postcss-loader'}, {loader: "sass-loader"}],fallback: "style-loader"}),include: path.resolve(__dirname, 'src/style/')},
            {test: /\.scss$/,use: extractSCSSModule.extract({use: [{loader: "css-loader"},{loader: 'postcss-loader'}, {loader: "sass-loader"}],fallback: "style-loader"}),include: path.resolve(__dirname, 'src/component/')},
            {test:/\.css$/,use: extractCSSModule.extract({use: [{loader: "css-loader",options: {module:true,localIdentName: '[name]-[local]-[hash:base64:5]',camelCase: true}},{loader: 'postcss-loader'}], fallback: "style-loader"}), include: path.resolve(__dirname, 'src/component/')},

        ]
    },
    plugins: [HTMLwebpackplugin, extractSASS, extractCSSModule, extractSCSSModule],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 9000
    }
};