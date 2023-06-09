import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav';

const usePersistentState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    console.log('storedValue', storedValue, 'defaultValue', defaultValue);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });
  console.log('this is persistentState', key, state);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

function WeatherForecasts() {
  const [latitude, setLatitude] = usePersistentState('latitude', '');
  const [longitude, setLongitude] = usePersistentState('longitude', '');
  const [xGrid, setXGrid] = usePersistentState('xGrid', '');
  const [yGrid, setYGrid] = usePersistentState('yGrid', '');
  const [gridId, setgridId] = usePersistentState('gridId', '');
  const [location, setLocation] = useState({});
  const [showGrid, setGrid] = useState(false);
  const [weather, setWeather] = useState([]);
  // const [showWeather, setShow] = useState(false);
  const [alert, setAlert] = usePersistentState('alert', false);

  // const inputValue = latitude !== null ? latitude : '';

  const gridIdRef = useRef(null);
  const gridXRef = useRef(null);
  const gridYRef = useRef(null);

  const handleInputChange = (key, value, setValue) => {
    if (value === '' || value === '0') {
      setValue(value === '' ? '' : 0);
    } else {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) {
        setValue(Number(value));
      }
    }
  };

  function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  if (storageAvailable('localStorage')) {
    console.log('local Storage is availalbe');
    console.log(latitude);
  } else {
    console.log('local storage is not available or something went wrong');
  }

  function populateStorage() {
    localStorage.setItem('latitude', latitude);
    localStorage.setItem('longitude', longitude);
    // localSorate.set
  }

  async function getGridID(event) {
    event.preventDefault();
    console.log(latitude, longitude);
    handleInputChange('showGrid', false, setGrid);
    handleInputChange('alert', false, setAlert);
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
      console.log(result.error, 'success');
      if (result.error) {
        setAlert(true);
        return;
      }
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
      const { city, state, TimeZone } = data.location;
      console.log(city, state, TimeZone, data.location);
      setLocation(data.location);
      console.log(location);
      if (data.error) {
        console.log('invalid coord');
        setWeather([false]);
        return;
      }
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
    if (weather[0] === false) {
      return (
        <p className="GetDisplayText">
          You have used invalid coordinates in your gridX, gridY, and/or office.
          Try again or use the Find GridId tool with latitude and longitude to
          find your numbers if your not sure.
        </p>
      );
    }
    return (
      <p>
        {' '}
        This is the weather at {location.city} in {location.state} within the{' '}
        {location.TimeZone} timezone.
        {weather.map((cur, i) => {
          const detail = cur.detailedForecast
            .toLowerCase()
            .match(/[a-z1-9\s]/g);
          return (
            <p className="GetDisplayText" key={i}>
              {cur.name} the temperature is {cur.temperature} degrees{' '}
              {cur.temperatureUnit} with winds of {cur.windSpeed} in the{' '}
              {cur.windDirection}. Overall the detailed forecast is {detail}.
            </p>
          );
        })}
      </p>
    );
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
                value={latitude}
                required
                onChange={(e) =>
                  handleInputChange('latitude', e.target.value, setLatitude)
                }
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
                value={longitude}
                onChange={(e) =>
                  handleInputChange('longitude', e.target.value, setLongitude)
                }
              />
              Longitude
            </label>
            <button type="submit">Get Grid ID</button>
          </form>
        </section>
        {showGrid ? (
          <div class="gridInfo">
            <p className="coordinateInfo">
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
        ) : alert ? (
          <div className="Bad_Coordinates">
            <p className="coordinateInfo">
              {' '}
              You have input coordinates outside the US. They need to be within
              the US.
            </p>
          </div>
        ) : (
          <div className="default">
            <p className="coordinateInfo">
              You need to put in latitude and longitude coordinates to see
              information about the grid coordinates and office
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
      </section>

      <section>
        <GetDisplay />
      </section>
    </section>
  );
}

export default WeatherForecasts;
