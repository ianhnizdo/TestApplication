const path = require('path');
const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sassLoader = require('sass-loader');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    app: './src/client/index.jsx',
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
  //Dev server client for web socket transport, hot and live reload logic
  devServer: {
    //Necessary to make react router to work when you reload the page
    // historyApiFallback: {
    //   index: "/",
    // },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true,
    static: './dist',
    proxy: {
      '/serverRoutes': {
        target: 'http://localhost:3000',
        router: () => 'http://localhost:8080',
        changeOrigin: true,
        // logLevel: 'debug' /*optional*/,
        // pathRewrite: { '^/api': '' },
      },
      '/api': {
        target: 'http://localhost:3000',
        router: () => 'https://api.weather.gov',
        pathRewrite: { '^/api': '' },
      },
    },
    client: {
      webSocketURL: 'http://localhost:3000/',
    },
  },
  optimization: {
    runtimeChunk: 'single',
  },
  target: 'web',
  node: {
    __dirname: false, //if you don't put this is, __dirname
    __filename: false, //and _fliename return blank or /
  },
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
