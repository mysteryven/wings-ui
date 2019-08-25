const path = require('path')

module.exports = {
    entry: {
        'wen-design': './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            icons: path.resolve(__dirname, 'icons'),
            utils: path.resolve(__dirname, 'utils'),
            src: path.resolve(__dirname, 'src')
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'wings-ui',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png)$/,
                use: ['file-loader']
            }
        ]

    }
}