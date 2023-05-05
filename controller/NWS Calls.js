exports.getGridEndpoint = async (req, res, next) => {
  const { lat, long } = req.params;
  console.log(lat, long);
  //   const url = `https://api.weather.gov/points/${lat},${long}`;
  //   console.log('NWS Call,', url);
  //   try {
  //     const request = await fetch(url, {
  //       method: 'GET',
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const result = await request.json();
  //     console.log(result);
  //     res.locals.info = result;
  //     return res;
  //   } catch (error) {
  //     console.log('Error:', error);
  //   }
};
