const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sassLoader = require("sass-loader");

module.exports = {
  entry: {
    server: "./src/server/server.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: "./src/public/index.html",
      // filename: "./src/public/index.html",
      // excludeChunks: ["server"],
      title: "Weather Application",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
  target: "node",
  node: {
    __dirname: false, //if you don't put this is, __dirname
    __filename: false, //and _fliename return blank or /
  },
  externals: [nodeExternals()],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
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
    extensions: ["*", ".js", ".jsx"],
  },
  resolveLoader: {
    modules: ["node_modules"],
  },
  // devServer: {
  //   static: path.resolve(__dirname, "./public"),
  // },
};
