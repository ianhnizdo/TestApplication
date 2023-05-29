const asyncHandler = require('express-async-handler');

exports.getGridEndpoint = asyncHandler(async (req, res, next) => {
  const { lat, long } = req.params;
  const url = `https://api.weather.gov/points/${lat},${long}`;
  console.log('NWS Call,', typeof lat);
  try {
    const request = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await request.json();
    // console.log(result);
    if (result.status === 404) {
      // -72;
      res.locals.response =
        'invalid coordinates, coordinates must be within US territory!';
      next();
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
      next();
    }
  } catch (error) {
    console.log('Error:', error);
  }
});

exports.getForecast = asyncHandler(async (req, res, next) => {
  const { office, x, y } = req.params;
  console.log(office, x, y, typeof x);
  try {
    const url = `https://api.weather.gov/gridpoints/${office}/${x},${y}/forecast`;
    const weather = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await weather.json();
    res.locals.forecast = response;
    next();
  } catch (error) {
    console.log('error with the data used,', error);
  }
});
