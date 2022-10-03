const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Roulette',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]

}