const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: '/src/index.js', // main js
  output: {
    path: path.resolve(__dirname, 'dist'), // output folder
    publicPath: '/',
  },
  devServer: {
    port: '8080',
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader', // for styles
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // base html
    }),
  ],
};
