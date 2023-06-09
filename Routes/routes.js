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
  CoordCont.insertCoord,
  (req, res) => {
    // console.log('work dangit');
    return res.status(200).json(res.locals);
  }
);

router.get('/present', (req, res) => {
  console.log('data already in database', res.locals.data);
  return res.status(200).json(res.locals);
});

router.get('/test', (req, res) => {
  console.log('backend is connected to frontent');
  res.locals.text = 'its working';
  return res.status(200).json(res.locals);
});

router.use('/error', (req, res) => {
  console.log('there has been an error');
  res.status(200).json({ error: 'invalid coordinates' });
});

module.exports = router;
