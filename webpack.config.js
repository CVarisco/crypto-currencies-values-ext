const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'inline-sourcemap',
  entry: {
    bundle: './src/js/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
      },
      {
        from: 'src/manifest.json',
      },
      {
        from: 'src/assets',
        to: 'assets',
      },
      {
        from: 'src/css',
        to: 'css',
      },
    ]),
  ],
}
