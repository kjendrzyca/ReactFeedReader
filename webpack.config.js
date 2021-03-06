
var webpack = require('webpack');

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common', 'common.js');

module.exports = {
    entry: {
        app: ['./components/app.jsx'],
        common: ['react']
    },
    output: {
        path: './public',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
          { test: /\.jsx$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }, // loaders can take parameters as a querystring
          { test: /\.js$/, exclude: /(node_modules|bower_components|app|public|app-compiled)/, loader: 'babel' },
          { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.jsx', '.json', '.coffee']
    },
    plugins: [commonsPlugin]
};