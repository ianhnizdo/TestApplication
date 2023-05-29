import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav';

function WeatherForecasts() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [xGrid, setXGrid] = useState(0);
  const [yGrid, setYGrid] = useState(0);
  const [gridId, setgridId] = useState('');
  const [showGrid, setGrid] = useState(false);
  const [weather, setWeather] = useState([]);
  const [showWeather, setShow] = useState(false);

  const gridIdRef = useRef(null);
  const gridXRef = useRef(null);
  const gridYRef = useRef(null);

  async function getGridID(event) {
    const hiddenInput = document.getElementById('Fetch-GridID');
    event.preventDefault();
    console.log(latitude, longitude);
    try {
      const url = `/api/routes/NWS/${latitude},${longitude}`;
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
      setGrid(true);
    } catch (error) {
      console.log('There has been a problem with your fetch operation:', error);
    }
  }

  async function getWeather(e) {
    e.preventDefault();
    const Id = gridIdRef.current.value;
    const x = gridXRef.current.value;
    const y = gridYRef.current.value;
    const url = `/api/routes/NWS/${Id},${x},${y}`;
    console.log('get Weather');
    try {
      const weather = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await weather.json();

      const today = data.forecast.properties.periods;
      const filter = today.filter(
        (el, i) => new Date(el.startTime).getDate() == new Date().getDate()
      );
      console.log(filter);
      setWeather(filter);
    } catch (error) {
      console.log('error with getWeather,', error);
    }
  }

  const GetDisplay = function (data) {
    // const location = fetch(`/api/routes/NWS/${latitude}`);
    return weather.map((cur, i) => {
      const detail = cur.detailedForecast.toLowerCase().match(/[a-z1-9\s]/g);
      return (
        <p key={i}>
          {cur.name} the temperature is {cur.temperature} degrees{' '}
          {cur.temperatureUnit} with winds of {cur.windSpeed} in the{' '}
          {cur.windDirection}. Overall the detailed forecast is {detail}.
        </p>
      );
    });
  };

  useEffect(() => {
    console.log('weather changed');
    GetDisplay(weather);
  }, [weather]);

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
        {showGrid && (
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

        <form onSubmit={(event) => getWeather(event)}>
          <p>
            Once you know the grid information you can place it inside this
            input request. The request will go to the back end and fetch
            information about the US locations weather for you.
          </p>
          office, put the gridId here
          <input type="text" ref={gridIdRef} placeholder="gridId" />
          <br />
          Put the gridX hear
          <input type="text" ref={gridXRef} placeholder="gridX" />
          <br />
          Put the gridY here
          <input type="text" ref={gridYRef} placeholder="gridId" />
          <br />
          <button type="submit">Get US weather</button>
        </form>

        <input type="hidden" id="Fetch-GridID" />
      </section>

      <section>
        <GetDisplay />
      </section>
    </section>
  );
}

export default WeatherForecasts;
