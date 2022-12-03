const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: { 
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          "img-loader"
        ]
      },
      {
        test:/\.(?:ico|gif|png|svg|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  }
};