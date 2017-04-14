var webpack = require('webpack');
var path = require('path');

var config = {
    devtool: 'eval',
    entry: __dirname + '/app/index.js',
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/
        }]
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
};

module.exports = config;