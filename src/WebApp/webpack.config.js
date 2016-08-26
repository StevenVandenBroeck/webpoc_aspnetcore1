var path = require('path');
var webpack = require('webpack');

var webClientPath = path.resolve(__dirname, 'WebClient');

module.exports = {
     context: path.resolve(__dirname, 'WebClient/js'),
     entry: ['bootstrap-loader', './index.js'],
     output: {
          path: path.resolve(__dirname, 'wwwroot/js'),
          filename: 'index.bundle.js'
     },
     module:{
         loaders: [
             { test: /\.css$/, loaders: ['style', 'css'] }, 
             { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }, 
             { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
             { test: /\.(ttf|eot)$/, loader: 'file' },
             { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' }
         ]
     },
     plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
