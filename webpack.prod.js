const path = require("path")
const config = require("./webpack.config")
const {merge} = require("webpack-merge")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode:"production", // decide build on development or production, default: production
    output:{
        filename:"[name].[contentHash].js", // contentHash: Evertime we made a change there will be a new contentHash appears in the middle of the file name 
        path: path.resolve(__dirname, "public/"),
        publicPath:'/'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:"[name].[contentHash].css"
        })
    ],
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template:"./src/template.html",
                minify:{
                    removeAttributeQuotes:true,
                    collapseWhitespace:true,
                    removeComments:true
                }
            }) 
        ]
    },
    module:{
        rules:[
            {
                test:/\.scss$/i,
                use:[
                    MiniCssExtractPlugin.loader,// 3. Extract css into files
                    'css-loader', //2. turn css to commonjs
                    'sass-loader' // 1. turn scss to css
                ]// css loader can only 
                //!!!!! Be careful here, style-loader can only work after css-loader, but here we put style-loader at the front of css-loader
                // cause it actually load in reverse order
            },
        ]
    }
})