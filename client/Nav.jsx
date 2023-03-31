import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section>
      <nav>
        <li>
          <Link to={"/mongodb"}>SQL</Link>
        </li>
        <li>
          <Link to={"/SQL"}>MongoDB</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/ClimateModels"}>Climate Model</Link>
        </li>
      </nav>
    </section>
  );
};

export default Nav;
