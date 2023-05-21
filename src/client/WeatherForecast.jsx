import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav';

function WeatherForecasts() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [xGrid, setXGrid] = useState();
  const [yGrid, setYGrid] = useState();
  const [gridId, setgridId] = useState('');
  const [showResults, setResults] = useState(false);

  async function getGridID(event) {
    const hiddenInput = document.getElementById('Fetch-GridID');
    event.preventDefault();
    console.log(latitude, longitude, typeof latitude);
    try {
      const url = `/api/routes/NWS/${latitude},${longitude}`;
      console.log(url);
      // const url2 = '/api/routes/test';
      console.log(
        'test the request to the express server,',
        latitude,
        longitude
      );
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      console.log(result, 'success');
      setXGrid(result.data.gridX);
      setYGrid(result.data.gridY);
      setgridId(result.data.gridId);
      setResults(true);
    } catch (error) {
      console.log('There has been a problem with your fetch operation:', error);
    }
  }

  async function getWeather(x, y, id) {
    const url = `/api/routes/NWS/${id},${x},${y}`;
  }
  // useEffect(() => {
  //   console.log('useEffect Scope');
  //   return async function startFetching() {
  //     try {
  //       const test = await fetch('/api/test').then((res) => res.json());
  //       // const parse = test.json();
  //       console.log(test);
  //     } catch (error) {
  //       console.log('error with useEffect in WeatherForecast!', error);
  //     }
  //   };
  // }, []);

  return (
    <section className="Weather-Forecast">
      <Nav />
      <section className="Weather-Container">
        <h1 className="Weather-Title">Weather Forecasts</h1>
        <section className="GridID">
          <h3>Please </h3>
          <p className="GridID-description">
            In order to find the correct weather forecast in your area you need
            the gridID. Ente in your latitude and longitude coordinates to find
            that out. Bear in mind that this will only work for US based
            coordinates.
          </p>
          <h2>Find Grid ID</h2>
          <form onSubmit={getGridID}>
            <label>
              <input
                type="number"
                id="Latitude"
                name="decimal"
                step=".01"
                placeholder="Enter your latitude"
                required
                onChange={(e) => setLatitude(Number(e.target.value))}
              />
              Latitude
            </label>
            <label>
              <input
                type="number"
                id="Longitude"
                name="decimal"
                step=".01"
                required
                placeholder="Enter your longitude"
                onChange={(e) => setLongitude(Number(e.target.value))}
              />
              Longitude
            </label>
            <button type="submit">Get Grid ID</button>
          </form>
        </section>
        {showResults && (
          <div class="gridInfo">
            <p>
              Your gridX is {xGrid}, gridY is {yGrid} and gridId is {gridId}.
              Use that information in the weather lookup now or click the button
              here to just instantly look up the info.
              <button
                className="presentLookup"
                onClick={() => getWeather(xGrid, yGrid, gridId)}
              >
                Click
              </button>
            </p>
          </div>
        )}

        <form>
          <p>
            Once you know the grid information you can place it inside this
            input request. The request will go to the back end and fetch
            information about the US locations weather for you.
          </p>
          office, put the gridId here
          <input type="text" placeholder="gridId" />
          <br />
          Put the gridX hear
          <input type="text" placeholder="gridX" />
          <br />
          Put the gridY here
          <input type="text" placeholder="gridId" />
          <br />
          <button type="submit">Get US weather</button>
        </form>

        <input type="hidden" id="Fetch-GridID" />
      </section>
    </section>
  );
}

export default WeatherForecasts;
