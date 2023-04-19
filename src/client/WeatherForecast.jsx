import React, { useState } from 'react';
import Nav from './Nav';

function WeatherForecasts() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  async function getGridID(event) {
    const hiddenInput = document.getElementById('Fetch-GridID');
    event.preventDefault();
    console.log(latitude, longitude);
    try {
      const url = `https://api.weather.gov/points/${latitude},${longitude}`;
      console.log('test');
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      const jsonData = await response.json();
      console.log(jsonData, 'test');
      // const gridID = jsonData.properties.gridId;
      // hiddenInput.value = gridID;
      // hiddenInput.type = "active";
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
                onChange={(e) => console.log(e.value)}
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
                onChange={(e) => console.log(e.value)}
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
