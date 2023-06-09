// import express from "express";
const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('../Routes/routes.js');

const PORT = process.env.PORT || 3000;

const db = require('../util/database.js');

//This is an example of how to interact with things on the database.
// db.execute('SELECT * FROM coordinates')
//   .then(([rows]) => console.log(rows))
//   .catch((err) => console.log('database error,', err));

const app = express(),
  DIST_DIR = path.join(__dirname, '../dist');

//Development
let HTML_FILE = path.join(__dirname, '../src/public/index.html');
// const urlencodedParser = bodyParser.

//use body-parser to parse JSON bodies
app.use(express.json());

//This lets us parse URL-Encoded data. The library used depends on whether extended is set to true or false.
app.use(express.urlencoded({ extended: false }));

app.use(cors());

//Production
if (process.env.NODE_ENV === 'production') {
  console.log('production');
  HTML_FILE = path.join(DIST_DIR, './index.html');
}
app.use('/api/routes', router);

// This works
// app.use('/api/routes', router, (req, res) => {
//   console.log('hi');
//   return res.status(200).json(res.locals);
// });

app.use('/api/test', (req, res, next) => {
  console.log('something is hitting');
  res.json({ response: 'test' });
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(PORT, () => console.log('Server started on port 3000'));
