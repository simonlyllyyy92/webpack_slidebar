
module.exports = {
    // entry:['babel-polyfill', './src/index.js'],
    entry:{
        main:"./src/index.js",
        // vendor: "./src/vender.js"
    },
  
    module:{  
        //webpack can only read json and vanilla js file, if we want webpack to be able to deal with other type of file 
        // like css file and sass file and es6 js, we need the respective loader
        rules:[
            {
                test:/\.html$/,
                use:["html-loader"] // export html file as a string
            },
            {
                test:/\.(svg|png|jpg|gif|heic|heif)$/,
                use:{
                    loader:"file-loader", // support dealing with <img src =' '/> so that it will understand how to process (require image and load image ) "
                    options:{
                        name: "[name].[hash].[ext]",
                        outputPath:"imgs"
                    }
                }
            },
            {
                test : /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader', //transfer es6 --> es5
                  options: {
                    presets: [
                        '@babel/preset-env',
                        "@babel/preset-react"
                    ],
                    plugins: [
                        'transform-class-properties'
                    ]
                  }
                }
            }
        ]
    }
}