exports.getGridEndpoint = async (req, res, next) => {
  console.log('request,');
  const { lat, long } = req.params;
  console.log(lat, long);
  const url = `https://api.weather.gov/points/${lat},${long}`;
  console.log('NWS Call,', url);
  try {
    const request = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await request.json();
    console.log(result);
    if (result.info.status === 404) {
      res.locals.response =
        'invalid coordinates, coordinates must be within US territory!';
      next();
    }
    res.locals.info = result;
    next();
  } catch (error) {
    console.log('Error:', error);
  }
};
