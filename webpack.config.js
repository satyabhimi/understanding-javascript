var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// Using path package from node js
var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextWebpackPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: "./src/app.js",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                use:
                    {
                        loader:'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use:['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            files:['./*.html'],
            server: { baseDir: [''] }
        }),
        extractPlugin
    ]
}