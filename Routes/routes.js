const express = require('express');
const NWS = require('../controller/NWS Calls.js');

const router = express.Router();

// router.get('/api/points/:lat,:long', NWS.getGridEndpoint);

router.get('/api/test', (req, res, next) => {
  console.log('work dangit');
  res.send('Response');
});

module.exports = router;

// 40.543946, -76.834780
