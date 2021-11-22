const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');


module.exports = {
    //入口
    entry: './src/index.js',
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[hash].js',
    },
    //模式
    mode: 'development',
    //loader
    module:
    {
        rules: [
            {
                test: /\.css$|\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:
                        {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader :"sass-loader"    
                    },
                ],
            },
            {
                test: /\.(jpg|png)/,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    },
    //模板
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new MiniCssExtractPlugin(
            {
                filename:'index.[hash].css'
            }
        ),
        new CleanWebpackPlugin(),
       
    ],
    //source-map開啟方式，debug使用
    devtool: "source-map",
    
}