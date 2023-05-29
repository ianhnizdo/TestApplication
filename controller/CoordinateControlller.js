const pool = require('../util/database');

async function checkExisting(req, res, next) {
  let { lat, long } = req.params;
  const queryString = `SELECT Latitude, Longitude FROM coordinates WHERE Latitude = ${lat} AND Longitude = ${long}`;
  try {
    const results = await pool.query(queryString);
    console.log(results);
  } catch (error) {
    console.log('error with checkExisting function,', error);
    next(error);
  }
}

module.exports = { checkExisting };
