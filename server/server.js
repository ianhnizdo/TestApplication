// import express from "express";
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('../webpack.config.js');

const PORT = process.env.PORT || 3000;

const app = express();
(DIST_DIR = path.join(__dirname, '../../dist')),
  (HTML_FILE = path.join(__dirname, '../src/public/index.html'));

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  console.log('production');
  HTML_FILE = path.join(DIST_DIR, './index.html');
}
// const compiler = webpack(config);

// app.use(express.static(DIST_DIR));

// app.get('/serverRoutes', (req, res) => {
//   res.send('nuts');
// });

// app.get('/api/points', (req, res) => {
//   // res.sendFile(HTML_FILE, function (err) {
//   //   if (err) {
//   //     res.status(500).send(err);
//   //   }
//   });
// // });

// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );
app.get('/api/points/:lat,:long', (req, res) => {
  console.log('test on backend');
  const { lat, long } = req.params;
  console.log(lat, long);
  res.locals.coordinates = [lat, long];
  return res.status(200).json(res.locals.coordinates);
});

// app.get('*', (req, res) => {
//   res.sendFile(HTML_FILE);
// });

app.listen(PORT, () => console.log('Server started on port 3000'));
