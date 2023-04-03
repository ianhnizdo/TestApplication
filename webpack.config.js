const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sassLoader = require("sass-loader");

module.exports = {
  entry: path.resolve(__dirname, "./client/index.jsx"),
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  resolveLoader: {
    modules: ["node_modules"],
  },
  devServer: {
    static: path.resolve(__dirname, "./public"),
  },
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
};
