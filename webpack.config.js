const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sassLoader = require("sass-loader");

module.exports = {
  entry: {
    server: "./server/server.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  target: "node",
  node: {
    __dirname: false, //if you don't put this is, __dirname
    __filename: false, //and _fliename return blank or /
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images/",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./public/index.html",
      excludeChunks: ["server"],
    }),
  ],
  resolveLoader: {
    modules: ["node_modules"],
  },
  // devServer: {
  //   static: path.resolve(__dirname, "./public"),
  // },
};
