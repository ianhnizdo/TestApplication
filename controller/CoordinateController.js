const pool = require('../util/database');

//This should check if the database has the info already. If it does it should not have to insert anything.
async function checkExisting(req, res, next) {
  const { lat, long } = res.locals.data;
  //   if(lat===undefined)
  const queryString = `SELECT Latitude, Longitude FROM coordinates WHERE Latitude = ? AND Longitude = ?`;
  try {
    const results = await pool.query(queryString, [lat, long]);
    const [rows] = results;
    console.log(rows);
    if (rows.length === 0) {
      console.log('not in database');
      insertCoord(res.locals.data);
    }
    next();
  } catch (error) {
    console.log('error with checkExisting function,', error);
    next(error);
  }
}

//This updates the database
async function insertCoord(data) {
  const { gridX, gridY, gridId, city, state, timeZone, lat, long } = data;

  const queryString = `INSERT INTO coordinates (Latitude, Longitude, City, State, Timezone, gridX, gridY, gridId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  try {
    await pool.query(queryString, [
      Math.round(Number(lat)),
      Math.round(Number(long)),
      city,
      state,
      timeZone,
      gridX,
      gridY,
      gridId,
    ]);
    // next();
  } catch (error) {
    console.log('Error with inserCoord,', error);
    return;
    // next();
  }
}

async function checkGrid(req, res, next) {
  console.log('checkGrid');
  const { gridId, gridX, gridY } = req.params;
  const queryString =
    'SELECT City, State, Timezone FROM coordinates WHERE gridX=? AND gridY=? AND gridId=?';
  try {
    const query = await pool.query(queryString, [gridX, gridY, gridId]);
    const [rows] = query;
    // console.log(rows);
    //If this occurs we need to fetch the coordinates from the weather forecast and automatically input it into the database ourselves. Basically do NWS-Call, grab coordinates, do the regular apply, regular database cache while holding the values we want, and finally return to the frontend with the data.
    if (rows.length === 0) {
      console.log('This data does not exist');
      res.locals.bool = true;
      next();
    } else {
      res.locals.location = {
        city: rows[0].City,
        state: rows[0].State,
        TimeZone: rows[0].Timezone,
      };
      // console.log(res.locals.data);
      next();
    }
  } catch (error) {
    console.log('error with checkGrid,', error);
  }
}

module.exports = { checkExisting, insertCoord, checkGrid };
