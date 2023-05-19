

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            { test:  /\.css$/,  use: [ 'style-loader', 'css-loader' ] }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'})
    ]
}