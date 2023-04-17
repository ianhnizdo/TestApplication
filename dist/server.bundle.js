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
var PORT = process.env.PORT || 8080;
var app = express(),
  DIST_DIR = path.join(__dirname, "../../dist"),
  HTML_FILE = path.join(DIST_DIR, "./index.html");
var config = __webpack_require__(/*! ../../webpack.config.js */ "./webpack.config.js");
var compiler = webpack(config);
var cors = __webpack_require__(/*! cors */ "cors");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
app.use(express["static"](DIST_DIR));
app.get("/", function (req, res) {
  res.sendFile(HTML_FILE);
});

// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// app.use(express.static(DIST_DIR));

// console.log("test");

// app.get("*", (req, res) => {
//   res.sendFile(HTML_FILE);
// });

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
    template: "./src/public/index.html",
    filename: "./index.html",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXIuanMiLCJ3ZWJwYWNrOi8vdGVzdGFwcGxpY2F0aW9uLy4vd2VicGFjay5jb25maWcuanMiLCJ3ZWJwYWNrOi8vdGVzdGFwcGxpY2F0aW9uL2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly90ZXN0YXBwbGljYXRpb24vZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vdGVzdGFwcGxpY2F0aW9uL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL3Rlc3RhcHBsaWNhdGlvbi9leHRlcm5hbCBjb21tb25qcyBcImh0bWwtd2VicGFjay1wbHVnaW5cIiIsIndlYnBhY2s6Ly90ZXN0YXBwbGljYXRpb24vZXh0ZXJuYWwgY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vdGVzdGFwcGxpY2F0aW9uL2V4dGVybmFsIGNvbW1vbmpzIFwic2Fzcy1sb2FkZXJcIiIsIndlYnBhY2s6Ly90ZXN0YXBwbGljYXRpb24vZXh0ZXJuYWwgY29tbW9uanMgXCJ3ZWJwYWNrXCIiLCJ3ZWJwYWNrOi8vdGVzdGFwcGxpY2F0aW9uL2V4dGVybmFsIGNvbW1vbmpzIFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiIiwid2VicGFjazovL3Rlc3RhcHBsaWNhdGlvbi9leHRlcm5hbCBjb21tb25qcyBcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5jb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3Qgd2VicGFjayA9IHJlcXVpcmUoXCJ3ZWJwYWNrXCIpO1xyXG5jb25zdCB3ZWJwYWNrRGV2TWlkZGxld2FyZSA9IHJlcXVpcmUoXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIpO1xyXG5cclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKSxcclxuICBESVNUX0RJUiA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vLi4vZGlzdFwiKSxcclxuICBIVE1MX0ZJTEUgPSBwYXRoLmpvaW4oRElTVF9ESVIsIFwiLi9pbmRleC5odG1sXCIpO1xyXG5cclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uLy4uL3dlYnBhY2suY29uZmlnLmpzXCIpO1xyXG5jb25zdCBjb21waWxlciA9IHdlYnBhY2soY29uZmlnKTtcclxuXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKTtcclxuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoRElTVF9ESVIpKTtcclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5zZW5kRmlsZShIVE1MX0ZJTEUpO1xyXG59KTtcclxuXHJcbi8vIGFwcC51c2UoXHJcbi8vICAgd2VicGFja0Rldk1pZGRsZXdhcmUoY29tcGlsZXIsIHtcclxuLy8gICAgIHB1YmxpY1BhdGg6IGNvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcclxuLy8gICB9KVxyXG4vLyApO1xyXG5cclxuLy8gYXBwLnVzZShleHByZXNzLnN0YXRpYyhESVNUX0RJUikpO1xyXG5cclxuLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xyXG5cclxuLy8gYXBwLmdldChcIipcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgcmVzLnNlbmRGaWxlKEhUTUxfRklMRSk7XHJcbi8vIH0pO1xyXG5cclxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiBjb25zb2xlLmxvZyhcIlNlcnZlciBzdGFydGVkIG9uIHBvcnQgMzAwMFwiKSk7XHJcbiIsImNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3Qgd2VicGFjayA9IHJlcXVpcmUoXCJ3ZWJwYWNrXCIpO1xyXG5jb25zdCBub2RlRXh0ZXJuYWxzID0gcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIik7XHJcbmNvbnN0IEh0bWxXZWJwYWNrUGx1Z2luID0gcmVxdWlyZShcImh0bWwtd2VicGFjay1wbHVnaW5cIik7XHJcbmNvbnN0IHNhc3NMb2FkZXIgPSByZXF1aXJlKFwic2Fzcy1sb2FkZXJcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBlbnRyeToge1xyXG4gICAgc2VydmVyOiBcIi4vc3JjL3NlcnZlci9zZXJ2ZXIuanNcIixcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XHJcbiAgICAgIHRlbXBsYXRlOiBcIi4vc3JjL3B1YmxpYy9pbmRleC5odG1sXCIsXHJcbiAgICAgIGZpbGVuYW1lOiBcIi4vaW5kZXguaHRtbFwiLFxyXG4gICAgICB0aXRsZTogXCJXZWF0aGVyIEFwcGxpY2F0aW9uXCIsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIG91dHB1dDoge1xyXG4gICAgZmlsZW5hbWU6IFwiW25hbWVdLmJ1bmRsZS5qc1wiLFxyXG4gICAgY2xlYW46IHRydWUsXHJcbiAgICBwYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImRpc3RcIiksXHJcbiAgICBwdWJsaWNQYXRoOiBcIi9cIixcclxuICB9LFxyXG4gIGRldnRvb2w6IFwiaW5saW5lLXNvdXJjZS1tYXBcIixcclxuICBkZXZTZXJ2ZXI6IHtcclxuICAgIHN0YXRpYzogXCIuL2Rpc3RcIixcclxuICB9LFxyXG4gIG9wdGltaXphdGlvbjoge1xyXG4gICAgcnVudGltZUNodW5rOiBcInNpbmdsZVwiLFxyXG4gIH0sXHJcbiAgdGFyZ2V0OiBcIm5vZGVcIixcclxuICBub2RlOiB7XHJcbiAgICBfX2Rpcm5hbWU6IGZhbHNlLCAvL2lmIHlvdSBkb24ndCBwdXQgdGhpcyBpcywgX19kaXJuYW1lXHJcbiAgICBfX2ZpbGVuYW1lOiBmYWxzZSwgLy9hbmQgX2ZsaWVuYW1lIHJldHVybiBibGFuayBvciAvXHJcbiAgfSxcclxuICBleHRlcm5hbHM6IFtub2RlRXh0ZXJuYWxzKCldLFxyXG4gIG1vZGU6IFwiZGV2ZWxvcG1lbnRcIixcclxuICBtb2R1bGU6IHtcclxuICAgIHJ1bGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0OiAvXFwuKGpzfGpzeCk/JC9pLFxyXG4gICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLFxyXG4gICAgICAgIHVzZToge1xyXG4gICAgICAgICAgbG9hZGVyOiBcImJhYmVsLWxvYWRlclwiLFxyXG4gICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBwcmVzZXRzOiBbXCJAYmFiZWwvcHJlc2V0LWVudlwiLCBcIkBiYWJlbC9wcmVzZXQtcmVhY3RcIl0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0OiAvXFwuKHNhfHNjfGMpc3MkL2ksXHJcbiAgICAgICAgdXNlOiBbXCJzdHlsZS1sb2FkZXJcIiwgXCJjc3MtbG9hZGVyXCIsIFwic2Fzcy1sb2FkZXJcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0OiAvXFwuKGpwZ3xqcGVnKSQvaSxcclxuICAgICAgICB1c2U6IHtcclxuICAgICAgICAgIGxvYWRlcjogXCJmaWxlLWxvYWRlclwiLFxyXG4gICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIltuYW1lXS5baGFzaF0uW2V4dF1cIixcclxuICAgICAgICAgICAgb3V0cHV0UGF0aDogXCJpbWFnZXMvXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0OiAvXFwuaHRtbCQvLFxyXG4gICAgICAgIHVzZTogW3sgbG9hZGVyOiBcImh0bWwtbG9hZGVyXCIgfV0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgZXh0ZW5zaW9uczogW1wiKlwiLCBcIi5qc1wiLCBcIi5qc3hcIl0sXHJcbiAgfSxcclxuICByZXNvbHZlTG9hZGVyOiB7XHJcbiAgICBtb2R1bGVzOiBbXCJub2RlX21vZHVsZXNcIl0sXHJcbiAgfSxcclxuICAvLyBkZXZTZXJ2ZXI6IHtcclxuICAvLyAgIHN0YXRpYzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3B1YmxpY1wiKSxcclxuICAvLyB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNhc3MtbG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpOyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBhdGgiLCJ3ZWJwYWNrIiwid2VicGFja0Rldk1pZGRsZXdhcmUiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsImFwcCIsIkRJU1RfRElSIiwiam9pbiIsIl9fZGlybmFtZSIsIkhUTUxfRklMRSIsImNvbmZpZyIsImNvbXBpbGVyIiwiY29ycyIsImJvZHlQYXJzZXIiLCJ1c2UiLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kRmlsZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJub2RlRXh0ZXJuYWxzIiwiSHRtbFdlYnBhY2tQbHVnaW4iLCJzYXNzTG9hZGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsImVudHJ5Iiwic2VydmVyIiwicGx1Z2lucyIsInRlbXBsYXRlIiwiZmlsZW5hbWUiLCJ0aXRsZSIsIm91dHB1dCIsImNsZWFuIiwicmVzb2x2ZSIsInB1YmxpY1BhdGgiLCJkZXZ0b29sIiwiZGV2U2VydmVyIiwib3B0aW1pemF0aW9uIiwicnVudGltZUNodW5rIiwidGFyZ2V0Iiwibm9kZSIsIl9fZmlsZW5hbWUiLCJleHRlcm5hbHMiLCJtb2RlIiwicnVsZXMiLCJ0ZXN0IiwiZXhjbHVkZSIsImxvYWRlciIsIm9wdGlvbnMiLCJwcmVzZXRzIiwibmFtZSIsIm91dHB1dFBhdGgiLCJleHRlbnNpb25zIiwicmVzb2x2ZUxvYWRlciIsIm1vZHVsZXMiXSwic291cmNlUm9vdCI6IiJ9