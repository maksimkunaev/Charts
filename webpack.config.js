const path = require('path');

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
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};
