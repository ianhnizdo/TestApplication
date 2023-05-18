const express = require('express');
const NWS = require('../controller/NWS Calls.js');

const router = express.Router();

// router.get('/api/points/:lat,:long', NWS.getGridEndpoint);

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/NWS/:lat,:long', NWS.getGridEndpoint, async (req, res, next) => {
  console.log('work dangit');
  return res.status(200).json(res.locals);
});

router.get('/test', (req, res) => {
  console.log('backend is connected to frontent');
  res.locals.text = 'its working';
  return res.status(200).json(res.locals);
});

module.exports = router;

// 40.543946, -76.834780
