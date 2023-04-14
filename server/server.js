// import express from "express";
const express = require("express");
const path = require("path");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "../dist/public/index.html");

app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started on port 3000"));
