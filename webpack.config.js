const HTMLWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                },
            },
            { 
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer:{
        port: 4000,
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/index.html'
        })
    ]
};