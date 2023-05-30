const express = require('express');
const NWS = require('../controller/NWS-Calls.js');
const CoordCont = require('../controller/CoordinateController.js');

const router = express.Router();

// router.get('/api/points/:lat,:long', NWS.getGridEndpoint);

router.get(
  '/NWS/:gridId,:gridX,:gridY',
  CoordCont.checkGrid,
  NWS.getForecast,
  (req, res) => {
    // console.log('forecast');
    return res.status(200).json(res.locals);
  }
);

router.get(
  '/NWS/:lat,:long',
  CoordCont.checkExisting,
  NWS.getGridEndpoint,
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
  console.log('there has been an error');
  res.status(200).json({ error: 'invalid coordinates' });
});

router.use((req, res) => {
  console.log('Time:', Date.now());
  res.locals.message = 'yup';
  return res.status(200).json(res.locals);
});

module.exports = router;

// 40.543946, -76.834780
