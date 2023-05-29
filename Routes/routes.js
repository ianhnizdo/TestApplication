const express = require('express');
const NWS = require('../controller/NWS-Calls.js');
const CoordCont = require('../controller/CoordinateControlller.js');

const router = express.Router();

// router.get('/api/points/:lat,:long', NWS.getGridEndpoint);

router.get('/NWS/:office,:x,:y', NWS.getForecast, (req, res) => {
  // console.log('forecast');
  return res.status(200).json(res.locals);
});

router.get(
  '/NWS/:lat,:long',
  NWS.getGridEndpoint,
  CoordCont.checkExisting,
  (req, res) => {
    // console.log('work dangit');
    return res.status(200).json(res.locals);
  }
);

router.get('/test', (req, res) => {
  console.log('backend is connected to frontent');
  res.locals.text = 'its working';
  return res.status(200).json(res.locals);
});

router.use('/error', (req, res) => {
  res.status(200).json({ error: 'invalid coordinates' });
});

router.use((req, res) => {
  console.log('Time:', Date.now());
  res.locals.message = 'yup';
  return res.status(200).json(res.locals);
});

module.exports = router;

// 40.543946, -76.834780
