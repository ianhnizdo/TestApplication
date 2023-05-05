// import express from "express";
const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('../Routes/routes.js');

const PORT = process.env.PORT || 3000;

const app = express(),
  DIST_DIR = path.join(__dirname, '../dist');

//Development
let HTML_FILE = path.join(__dirname, '../src/public/index.html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//This will not work
// app.use(express.static(__dirname, '../dist'));

//Production
if (process.env.NODE_ENV === 'production') {
  console.log('production');
  HTML_FILE = path.join(DIST_DIR, './index.html');
}

// app.use('/api', (req, res) => res.send('hello'));
app.use('/api', router);

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
