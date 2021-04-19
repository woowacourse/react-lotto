const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: { keep: /.git/ },
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
              cacheDirectory: true,
              cacheCompression: false,
              compact: !isDevelopment,
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'public/index.html' }),
      new MiniCssExtractPlugin({ filename: 'style.css' }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    performance: {
      hints: isDevelopment ? 'warning' : 'error',
    },
    // Check this out: https://github.com/webpack/webpack-dev-server/issues/2758
    target: isDevelopment ? 'web' : 'browserslist',
  };
};
