import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section className="Nav-Bar-Container">
      <nav className="Nav-Bar">
        <li className="Nav-Link">
          <Link to={"/mongodb"}>
            <button className="Nav-Button">MongoDB</button>
          </Link>
        </li>
        <li className="Nav-Link">
          <Link to={"/SQL"}>
            <button className="Nav-Button">SQL</button>
          </Link>
        </li>
        <li className="Nav-Link">
          <Link to={"/"}>
            <button className="Nav-Button">Home</button>
          </Link>
        </li>
        <li className="Nav-Link">
          <Link to={"/WeatherForecasts"}>
            <button className="Nav-Button">Weather Forecast</button>
          </Link>
        </li>
      </nav>
    </section>
  );
}

export default Nav;
