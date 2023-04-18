const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sassLoader = require("sass-loader");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: {
    server: path.resolve(__dirname, "src", "public", "index.html"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html",
      title: "Weather Application",
    }),
    // new NodePolyfillPlugin({
    //   excludeAliases: ["console"],
    // }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  mode: "development",
  // target: "web",
  node: {
    __dirname: false, //if you don't put this is, __dirname
    __filename: false, //and _fliename return blank or /
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images/",
          },
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
    ],
  },
  resolve: {
    extensions: [".*", ".js", ".jsx"],
    fallback: {
      fs: false,
    },
  },
  resolveLoader: {
    modules: ["node_modules"],
  },
  // devServer: {
  //   static: path.resolve(__dirname, "./public"),
  // },
};
