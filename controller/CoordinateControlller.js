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

  const queryString = `INSERT INTO coordinates (Latitude, Longitude, City, State, Timezone, gridX, gridY, gridId) VALUES (${Math.round(
    Number(lat)
  )}, ${Math.round(
    Number(long)
  )}, '${city}' , '${state}', '${timeZone}', '${gridX}', '${gridY}', '${gridId}') `;

  try {
    await pool.query(queryString);
    // next();
  } catch (error) {
    console.log('Error with inserCoord,', error);
    return;
    // next();
  }
}

module.exports = { checkExisting, insertCoord };