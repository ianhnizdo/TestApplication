const path = require('path');
const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sassLoader = require('sass-loader');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = (env, argv) => {
  return {
    mode: argv.mode === 'development' ? 'development' : 'production',
    entry: {
      app: path.join(__dirname, './src/client/index.jsx'),
      // hot: "webpack/hot/dev-server.js",
      // client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
    },
    //plugins are intended to handle actions on chunks or compilations of bundled modules.
    plugins: [
      //This generates HTML files based on a tempalate and injects the output JavaScript and CSS files into them.
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
        filename: './index.html',
        title: 'Weather Application',
      }),
      //plugin for hot module replacement
      new webpack.HotModuleReplacementPlugin({
        title: 'Hot Module Replacement',
      }),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      clean: true,
      publicPath: '/',
    },
    devtool: 'inline-source-map',
    //Need this when working wigth express, otherwise it fails
    node: {
      __dirname: false, //if you don't put this is, __dirname
      __filename: false, //and _fliename return blank or /
    },
    //Dev server client for web socket transport, hot and live reload logic
    devServer: {
      historyApiFallback: true,
      compress: true,
      static: {
        directory: path.join(__dirname, './src/client'),
      },
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          // pathRewrite: { '^/api': '' },
        },
      },
    },
    optimization: {
      runtimeChunk: 'single',
    },
    target: 'web',
    resolve: {
      extensions: ['.*', '.js', '.jsx'],
      fallback: {
        fs: false,
      },
    },
    //Loaders handle actions on a file by file basis. Plugins are responsible for optimizing the output or customizing the build process.
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(jpg|jpeg)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/',
            },
          },
        },
        {
          test: /\.html$/,
          use: [{ loader: 'html-loader' }],
        },
      ],
    },
    resolveLoader: {
      modules: ['node_modules'],
    },
  };
};
