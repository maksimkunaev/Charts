const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: "ts-loader", exclude: /node_modules/, },
            { test: /\.js?$/, loader: "ts-loader", exclude: /node_modules/, },
            // {
            //     test:  /\.(styl|css)$/,
            //     exclude: /node_modules/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 // modules: true,
            //                 // localIdentName: '[path][name]__[local]--[hash:base64:5]'
            //             }
            //         },
            //         {
            //             loader: 'stylus-loader',
            //             options: {
            //                 // modules: true,
            //                 // localIdentName: '[path][name]__[local]--[hash:base64:5]'
            //             }
            //         },
            //     ],
            // },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: "styles.css",
    //         chunkFilename: "[id].css"
    //     }),
    //     new HtmlWebpackPlugin({
    //         template: './src/index.html'
    //     }),
    // ]
};
