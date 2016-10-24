var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var config = {
  entry: './app/src/index.jsx',
  output: {
    filename: './app/public/bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.css$/, 
        loaders: [
          'style-loader',
          'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.jsx$/,
        loader : 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'localhost:3000'
    }, { reload: true } )
  ]
};

module.exports = config;
