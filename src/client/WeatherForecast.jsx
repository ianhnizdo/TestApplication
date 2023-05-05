import React, { useState } from 'react';
import Nav from './Nav';

function WeatherForecasts() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  async function getGridID(event) {
    const hiddenInput = document.getElementById('Fetch-GridID');
    event.preventDefault();
    console.log(Number(latitude), longitude);
    try {
      // const url = `http://localhost:3000/serverRoutes/points/${39.7456},${-97.0892}`;
      const url = `/api/points/${latitude}/${longitude}`;
      console.log('test the ');
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
      });
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      console.log(response);
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log('There has been a problem with your fetch operation:', error);
    }
  }

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
                placeholder="Enter your latitude"
                onChange={(e) => setLongitude(Number(e.target.value))}
              />
              Longitude
            </label>
            <button type="submit">Get Grid ID</button>
          </form>
        </section>
        <input type="hidden" id="Fetch-GridID" />
      </section>
    </section>
  );
}

export default WeatherForecasts;
