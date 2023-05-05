// import express from "express";
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('../webpack.config.js');
const router = require('./routes.js');

const PORT = process.env.PORT || 3000;

const app = express();
(DIST_DIR = path.join(__dirname, '../dist')),
  (HTML_FILE = path.join(__dirname, '../src/public/index.html'));

app.use(express.json());
app.use(cors());

//This will not work
// app.use(express.static(__dirname, '../dist'));

if (process.env.NODE_ENV === 'production') {
  console.log('production');
  HTML_FILE = path.join(DIST_DIR, './index.html');
}

console.log('loading router...');

app.use('/api', router);

// app.get('*', (req, res) => {
//   res.sendFile(HTML_FILE);
// });

app.listen(PORT, () => console.log('Server started on port 3000'));
