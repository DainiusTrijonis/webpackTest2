const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);


module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname,'./src/js/index.js'),
    },
    devtool: 'inline-source-map',
    plugins: [ new HtmlWebpackPlugin({ template: './public/index.html' }) ],

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
        static: './public',
        compress: true,
        port: 9000,
      },
};



