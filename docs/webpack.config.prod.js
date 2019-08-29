const base = require('./webpack.config')
const path = require('path')

module.exports = Object.assign({}, base, {
    mode: 'production', //production
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    }
})

