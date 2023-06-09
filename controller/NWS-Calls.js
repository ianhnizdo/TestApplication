const asyncHandler = require('express-async-handler');
const CoordCont = require('./CoordinateController');

exports.getGridEndpoint = asyncHandler(async (req, res, next) => {
  const { lat, long } = req.params;
  const url = `https://api.weather.gov/points/${Math.round(lat)},${Math.round(
    long
  )}`;
  console.log('NWS Call,', lat, long);
  try {
    const request = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await request.json();
    // console.log(typeof result.status);
    if (result.status) {
      res.redirect('/api/routes/error');
    } else {
      const {
        gridX,
        gridY,
        gridId,
        relativeLocation: {
          properties: { city, state },
        },
        timeZone,
      } = result.properties;
      console.log(gridX, gridY, gridId, city, state, timeZone);
      res.locals.data = {
        gridX,
        gridY,
        gridId,
        city,
        state,
        timeZone,
        lat,
        long,
      };
      console.log('go to insert');
      next();
    }
  } catch (error) {
    console.log('Error:', error);
  }
});

exports.getForecast = asyncHandler(async (req, res, next) => {
  const { gridId, gridX, gridY } = req.params;
  try {
    const url = `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`;
    const weather = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await weather.json();
    res.locals.forecast = response;
    const coordinates = {
      lat: Math.round(response.geometry.coordinates[0][0][1]),
      long: Math.round(response.geometry.coordinates[0][0][0]),
    };
    if (res.locals.bool) {
      console.log(gridX, gridY, gridId, coordinates.lat, coordinates.long);
      try {
        const loc = await locationFetch(coordinates);
        const { city, state, timeZone } = loc;
        const { lat, long } = coordinates;
        res.locals.location = { city, state, timeZone };
        console.log('the data has not been cached yet', loc);
        const input = {
          gridX,
          gridY,
          gridId,
          city,
          state,
          timeZone,
          lat,
          long,
        };
        CoordCont.insertCoord(input);
      } catch (error) {
        console.log('Error with locationFetch:', error.message);
        res.locals.error = 'invalid coordinates';
      }
    }
    next();
  } catch (error) {
    console.log('error with the data used,', error);
  }
});

async function locationFetch(coord) {
  const url = `https://api.weather.gov/points/${coord.lat},${coord.long}`;
  console.log(url);
  const request = await fetch(url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await request.json();
  // console.log('locationFetch,', data);
  if (data.status === 404) {
    throw new Error('invalid coordinates, coordinates must be inside the USA!');
  }
  // console.log(
  //   'this should be the info we need',
  //   data.properties.relativeLocation
  // );
  return {
    city: data.properties.relativeLocation.properties.city,
    state: data.properties.relativeLocation.properties.state,
    timeZone: data.properties.timeZone,
  };
}
