const asyncHandler = require('express-async-handler');

exports.getGridEndpoint = asyncHandler(async (req, res, next) => {
  const { lat, long } = req.params;
  const url = `https://api.weather.gov/points/${lat},${long}`;
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
      next();
    }
  } catch (error) {
    console.log('Error:', error);
  }
});

exports.getForecast = asyncHandler(async (req, res, next) => {
  const { office, x, y } = req.params;
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
    const coordinates = {
      latitude: Math.round(response.geometry.coordinates[0][0][0]),
      longitude: Math.round(response.geometry.coordinates[0][0][1]),
    };
    if (res.locals.bool) {
      try {
        const loc = await locationFetch(coordinates);
        console.log('the data has not been cached yet', loc);
      } catch (error) {
        console.log('Error with locationFetch:', error.message);
        res.redirect('/api/routes/error');
      }
    }
    next();
  } catch (error) {
    console.log('error with the data used,', error);
  }
});

async function locationFetch(coordinates) {
  const url = `https://api.weather.gov/points/${coordinates.latitude},${coordinates.longitude}`;

  const request = await fetch(url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await request.json();
  console.log('locationFetch,', data);
  if (data.status === 404) {
    throw new Error('invalid coordinates, coordinates must be inside the USA!');
  }
  return {
    city: data.properties.properties.city,
    state: data.properties.properties.state,
    timeZone: data.properties.properties.timeZone,
  };
}
