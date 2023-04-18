// import express from "express";
const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const PORT = process.env.PORT || 8080;

const app = express(),
  DIST_DIR = path.join(__dirname, "../../dist");

let HTML_FILE = path.join(DIST_DIR, "./index.html");
// let HTML_FILE = path.join(__dirname, "../public/index.html");

if (process.env.NODE_ENV === "development") {
  console.log("development");
  HTML_FILE = path.join(__dirname, "../public/index.html");
}

const config = require("../../webpack.config.js");
const compiler = webpack(config);

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static(DIST_DIR));

app.use(cors());

app.get("/*", (req, res) => {
  res.sendFile(HTML_FILE, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// app.get("*", (req, res) => {
//   res.sendFile(HTML_FILE);
// });

app.listen(PORT, () => console.log("Server started on port 3000"));
