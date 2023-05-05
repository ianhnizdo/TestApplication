const express = require('express');
const NWS = require('../controller/NWS Calls.js');

const router = express.Router();

const path = require('path');

// router.get('/api/points/:lat,:long', NWS.getGridEndpoint);

router.get('/api/points', (req, res) => {
  console.log('router');
});

module.exports = router;

// 40.543946, -76.834780
