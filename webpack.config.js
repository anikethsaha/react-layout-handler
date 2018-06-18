const path = require('path');
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, "dist"),
          filename: './app.bundle.js',
           publicPath: '/'

      },
    target : 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
