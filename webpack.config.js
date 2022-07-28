const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    plugins: [ new HtmlWebpackPlugin() ],

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }
                ],
            },
        ],
    },
    devServer: {
        static: './dist',
        compress: true,
        port: 9000,
      },
};



