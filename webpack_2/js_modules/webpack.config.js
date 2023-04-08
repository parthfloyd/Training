const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,'build'),
        filename: "bundle.js",
        publicPath:'build/'
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/
            },
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test:/\.css$/
            },{
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit:40000}
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'style.css'
        })
    ]
};

module.exports = config;