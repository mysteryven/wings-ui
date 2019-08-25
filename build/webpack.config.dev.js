const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = Object.assign({}, base, {
    mode: 'development', //production
    entry: {
        'wen-design': './docs/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'docs/'),
    },
});

