const path = require("path")
const config = require("./webpack.config")
const {merge} = require("webpack-merge")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode:"development", // decide build on development or production, default: production
    devtool: "cheap-module-eval-source-map", // show the source of error instead of main.js(bundler)
    output:{
        filename:"[name].js", // contentHash: Evertime we made a change there will be a new contentHash appears in the middle of the file name 
        path: path.resolve(__dirname, "dev/"),
        publicPath:'/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dev/'),
        historyApiFallback:true,
        compress: true,
        port: 9000
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html"
        }) 
        // enable adding <script> tag in html file automatically  <!-- <script src="./main.js"></script> --> to template.html file 
        // and create a index.html file in the output location (which is public/ in our case) copied from template.html file
    ],
    module:{
        rules: [
            {
                test:/\.scss$/i,
                use:[
                    'style-loader',// 3. Extract css into files
                    'css-loader', //2. turn css to commonjs
                    'sass-loader' // 1. turn scss to css
                ]// css loader can only 
                //!!!!! Be careful here, style-loader can only work after css-loader, but here we put style-loader at the front of css-loader
                // cause it actually load in reverse order
            },
        ]
    }
})