// import express from "express";
const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "../dist/public/index.html");
const config = require("../../webpack.config.js");
const compiler = webpack(config);

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// app.use(express.static(DIST_DIR));

// console.log("test");

// app.get("*", (req, res) => {
//   res.sendFile(HTML_FILE);
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started on port 3000"));
