(() => {
var exports = {};
exports.id = "server";
exports.ids = ["server"];
exports.modules = {

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// import express from "express";
var express = __webpack_require__(/*! express */ "express");
var path = __webpack_require__(/*! path */ "path");
var webpack = __webpack_require__(/*! webpack */ "webpack");
var webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");
var app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "../dist/public/index.html");
var config = __webpack_require__(/*! ../../webpack.config.js */ "./webpack.config.js");
var compiler = webpack(config);
var cors = __webpack_require__(/*! cors */ "cors");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// app.use(express.static(DIST_DIR));

// console.log("test");

// app.get("*", (req, res) => {
//   res.sendFile(HTML_FILE);
// });

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  return console.log("Server started on port 3000");
});

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(/*! path */ "path");
var webpack = __webpack_require__(/*! webpack */ "webpack");
var nodeExternals = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");
var HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ "html-webpack-plugin");
var sassLoader = __webpack_require__(/*! sass-loader */ "sass-loader");
module.exports = {
  entry: {
    server: "./src/server/server.js"
  },
  plugins: [new HtmlWebpackPlugin({
    // template: "./src/public/index.html",
    // filename: "./src/public/index.html",
    // excludeChunks: ["server"],
    title: "Weather Application"
  })],
  output: {
    filename: "[name].bundle.js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    "static": "./dist"
  },
  optimization: {
    runtimeChunk: "single"
  },
  target: "node",
  node: {
    __dirname: false,
    //if you don't put this is, __dirname
    __filename: false //and _fliename return blank or /
  },

  externals: [nodeExternals()],
  mode: "development",
  module: {
    rules: [{
      test: /\.(js|jsx)?$/i,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    }, {
      test: /\.(sa|sc|c)ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.(jpg|jpeg)$/i,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "images/"
        }
      }
    }, {
      test: /\.html$/,
      use: [{
        loader: "html-loader"
      }]
    }]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  resolveLoader: {
    modules: ["node_modules"]
  }
  // devServer: {
  //   static: path.resolve(__dirname, "./public"),
  // },
};

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "sass-loader":
/*!******************************!*\
  !*** external "sass-loader" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("sass-loader");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-node-externals");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.bundle.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/server/server.js"));

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFFO1VBQ1BDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLHFCQUFxQjtRQUN0RDtNQUNGO0lBQ0YsQ0FBQyxFQUNEO01BQ0VKLElBQUksRUFBRSxpQkFBaUI7TUFDdkIvQixHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWE7SUFDbkQsQ0FBQyxFQUNEO01BQ0UrQixJQUFJLEVBQUUsZ0JBQWdCO01BQ3RCL0IsR0FBRyxFQUFFO1FBQ0hpQyxNQUFNLEVBQUUsYUFBYTtRQUNyQkMsT0FBTyxFQUFFO1VBQ1BFLElBQUksRUFBRSxxQkFBcUI7VUFDM0JDLFVBQVUsRUFBRTtRQUNkO01BQ0Y7SUFDRixDQUFDLEVBQ0Q7TUFDRU4sSUFBSSxFQUFFLFNBQVM7TUFDZi9CLEdBQUcsRUFBRSxDQUFDO1FBQUVpQyxNQUFNLEVBQUU7TUFBYyxDQUFDO0lBQ2pDLENBQUM7RUFFTCxDQUFDO0VBQ0RiLE9BQU8sRUFBRTtJQUNQa0IsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNO0VBQ2pDLENBQUM7RUFDREMsYUFBYSxFQUFFO0lBQ2JDLE9BQU8sRUFBRSxDQUFDLGNBQWM7RUFDMUI7RUFDQTtFQUNBO0VBQ0E7QUFDRixDQUFDOzs7Ozs7Ozs7OztBQy9FRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RhcHBsaWNhdGlvbi8uL3NyYy9zZXJ2ZXIvc2VydmVyLmpzIiwid2VicGFjazovL3Rlc3RhcHBsaWNhdGlvbi8uL3dlYnBhY2suY29uZmlnLmpzIiwid2VicGFjazovL3Rlc3RhcHBsaWNhdGlvbi9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vdGVzdGFwcGxpY2F0aW9uL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL3Rlc3RhcHBsaWNhdGlvbi9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly90ZXN0YXBwbGljYXRpb24vZXh0ZXJuYWwgY29tbW9uanMgXCJodG1sLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vdGVzdGFwcGxpY2F0aW9uL2V4dGVybmFsIGNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3Rlc3RhcHBsaWNhdGlvbi9leHRlcm5hbCBjb21tb25qcyBcInNhc3MtbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vdGVzdGFwcGxpY2F0aW9uL2V4dGVybmFsIGNvbW1vbmpzIFwid2VicGFja1wiIiwid2VicGFjazovL3Rlc3RhcHBsaWNhdGlvbi9leHRlcm5hbCBjb21tb25qcyBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly90ZXN0YXBwbGljYXRpb24vZXh0ZXJuYWwgY29tbW9uanMgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKFwid2VicGFja1wiKTtcclxuY29uc3Qgd2VicGFja0Rldk1pZGRsZXdhcmUgPSByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKSxcclxuICBESVNUX0RJUiA9IF9fZGlybmFtZSxcclxuICBIVE1MX0ZJTEUgPSBwYXRoLmpvaW4oRElTVF9ESVIsIFwiLi4vZGlzdC9wdWJsaWMvaW5kZXguaHRtbFwiKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uLy4uL3dlYnBhY2suY29uZmlnLmpzXCIpO1xyXG5jb25zdCBjb21waWxlciA9IHdlYnBhY2soY29uZmlnKTtcclxuXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKTtcclxuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcclxuXHJcbmFwcC51c2UoXHJcbiAgd2VicGFja0Rldk1pZGRsZXdhcmUoY29tcGlsZXIsIHtcclxuICAgIHB1YmxpY1BhdGg6IGNvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcclxuICB9KVxyXG4pO1xyXG5cclxuLy8gYXBwLnVzZShleHByZXNzLnN0YXRpYyhESVNUX0RJUikpO1xyXG5cclxuLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xyXG5cclxuLy8gYXBwLmdldChcIipcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgcmVzLnNlbmRGaWxlKEhUTUxfRklMRSk7XHJcbi8vIH0pO1xyXG5cclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4gY29uc29sZS5sb2coXCJTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0IDMwMDBcIikpO1xyXG4iLCJjb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKFwid2VicGFja1wiKTtcclxuY29uc3Qgbm9kZUV4dGVybmFscyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpO1xyXG5jb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoXCJodG1sLXdlYnBhY2stcGx1Z2luXCIpO1xyXG5jb25zdCBzYXNzTG9hZGVyID0gcmVxdWlyZShcInNhc3MtbG9hZGVyXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZW50cnk6IHtcclxuICAgIHNlcnZlcjogXCIuL3NyYy9zZXJ2ZXIvc2VydmVyLmpzXCIsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xyXG4gICAgICAvLyB0ZW1wbGF0ZTogXCIuL3NyYy9wdWJsaWMvaW5kZXguaHRtbFwiLFxyXG4gICAgICAvLyBmaWxlbmFtZTogXCIuL3NyYy9wdWJsaWMvaW5kZXguaHRtbFwiLFxyXG4gICAgICAvLyBleGNsdWRlQ2h1bmtzOiBbXCJzZXJ2ZXJcIl0sXHJcbiAgICAgIHRpdGxlOiBcIldlYXRoZXIgQXBwbGljYXRpb25cIixcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgb3V0cHV0OiB7XHJcbiAgICBmaWxlbmFtZTogXCJbbmFtZV0uYnVuZGxlLmpzXCIsXHJcbiAgICBjbGVhbjogdHJ1ZSxcclxuICAgIHBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGlzdFwiKSxcclxuICAgIHB1YmxpY1BhdGg6IFwiL1wiLFxyXG4gIH0sXHJcbiAgZGV2dG9vbDogXCJpbmxpbmUtc291cmNlLW1hcFwiLFxyXG4gIGRldlNlcnZlcjoge1xyXG4gICAgc3RhdGljOiBcIi4vZGlzdFwiLFxyXG4gIH0sXHJcbiAgb3B0aW1pemF0aW9uOiB7XHJcbiAgICBydW50aW1lQ2h1bms6IFwic2luZ2xlXCIsXHJcbiAgfSxcclxuICB0YXJnZXQ6IFwibm9kZVwiLFxyXG4gIG5vZGU6IHtcclxuICAgIF9fZGlybmFtZTogZmFsc2UsIC8vaWYgeW91IGRvbid0IHB1dCB0aGlzIGlzLCBfX2Rpcm5hbWVcclxuICAgIF9fZmlsZW5hbWU6IGZhbHNlLCAvL2FuZCBfZmxpZW5hbWUgcmV0dXJuIGJsYW5rIG9yIC9cclxuICB9LFxyXG4gIGV4dGVybmFsczogW25vZGVFeHRlcm5hbHMoKV0sXHJcbiAgbW9kZTogXCJkZXZlbG9wbWVudFwiLFxyXG4gIG1vZHVsZToge1xyXG4gICAgcnVsZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRlc3Q6IC9cXC4oanN8anN4KT8kL2ksXHJcbiAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXHJcbiAgICAgICAgdXNlOiB7XHJcbiAgICAgICAgICBsb2FkZXI6IFwiYmFiZWwtbG9hZGVyXCIsXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHByZXNldHM6IFtcIkBiYWJlbC9wcmVzZXQtZW52XCIsIFwiQGJhYmVsL3ByZXNldC1yZWFjdFwiXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRlc3Q6IC9cXC4oc2F8c2N8YylzcyQvaSxcclxuICAgICAgICB1c2U6IFtcInN0eWxlLWxvYWRlclwiLCBcImNzcy1sb2FkZXJcIiwgXCJzYXNzLWxvYWRlclwiXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRlc3Q6IC9cXC4oanBnfGpwZWcpJC9pLFxyXG4gICAgICAgIHVzZToge1xyXG4gICAgICAgICAgbG9hZGVyOiBcImZpbGUtbG9hZGVyXCIsXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiW25hbWVdLltoYXNoXS5bZXh0XVwiLFxyXG4gICAgICAgICAgICBvdXRwdXRQYXRoOiBcImltYWdlcy9cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRlc3Q6IC9cXC5odG1sJC8sXHJcbiAgICAgICAgdXNlOiBbeyBsb2FkZXI6IFwiaHRtbC1sb2FkZXJcIiB9XSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBleHRlbnNpb25zOiBbXCIqXCIsIFwiLmpzXCIsIFwiLmpzeFwiXSxcclxuICB9LFxyXG4gIHJlc29sdmVMb2FkZXI6IHtcclxuICAgIG1vZHVsZXM6IFtcIm5vZGVfbW9kdWxlc1wiXSxcclxuICB9LFxyXG4gIC8vIGRldlNlcnZlcjoge1xyXG4gIC8vICAgc3RhdGljOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vcHVibGljXCIpLFxyXG4gIC8vIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXdlYnBhY2stcGx1Z2luXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2Fzcy1sb2FkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIik7Il0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwicGF0aCIsIndlYnBhY2siLCJ3ZWJwYWNrRGV2TWlkZGxld2FyZSIsImFwcCIsIkRJU1RfRElSIiwiX19kaXJuYW1lIiwiSFRNTF9GSUxFIiwiam9pbiIsImNvbmZpZyIsImNvbXBpbGVyIiwiY29ycyIsImJvZHlQYXJzZXIiLCJ1c2UiLCJwdWJsaWNQYXRoIiwib3V0cHV0IiwiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwibm9kZUV4dGVybmFscyIsIkh0bWxXZWJwYWNrUGx1Z2luIiwic2Fzc0xvYWRlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnRyeSIsInNlcnZlciIsInBsdWdpbnMiLCJ0aXRsZSIsImZpbGVuYW1lIiwiY2xlYW4iLCJyZXNvbHZlIiwiZGV2dG9vbCIsImRldlNlcnZlciIsIm9wdGltaXphdGlvbiIsInJ1bnRpbWVDaHVuayIsInRhcmdldCIsIm5vZGUiLCJfX2ZpbGVuYW1lIiwiZXh0ZXJuYWxzIiwibW9kZSIsInJ1bGVzIiwidGVzdCIsImV4Y2x1ZGUiLCJsb2FkZXIiLCJvcHRpb25zIiwicHJlc2V0cyIsIm5hbWUiLCJvdXRwdXRQYXRoIiwiZXh0ZW5zaW9ucyIsInJlc29sdmVMb2FkZXIiLCJtb2R1bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==