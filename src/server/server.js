// import express from "express";
const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const PORT = process.env.PORT || 8080;

const app = express(),
  DIST_DIR = path.join(__dirname, "../../dist"),
  HTML_FILE = path.join(DIST_DIR, "./index.html");

const config = require("../../webpack.config.js");
const compiler = webpack(config);

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static(DIST_DIR));

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// console.log("test");

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => console.log("Server started on port 3000"));
