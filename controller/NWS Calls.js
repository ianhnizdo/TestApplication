getGridEndpoint = async (req, res, next) => {
  const { lat, long } = req.params;
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
    res.locals.info = result;
    return res;
  } catch (error) {
    console.log('Error:', error);
  }
};

module.exports = { getGridEndpoint };
