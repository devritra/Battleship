// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
