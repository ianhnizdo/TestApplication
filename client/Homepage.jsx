import React from "react";
import Nav from "./Nav";
// import "./styles.scss";
import Footer from "./Footer";
import Coral from "../public/Coral-Bleaching.jpg";
import Cumulus from "../public/HurricaneMitch.jpg";
import Satellite from "../public/Satellite.jpg";
import SeaLevel from "../public/Sea-Level-Rise-Greenland-ice-loss_2022.jpg";

function Homepage() {
  return (
    <section className="Homepage">
      <Nav />
      <section className="Homepage-Container">
        <h1 className="Homepage-title">Climate Application</h1>
        <h2>Climate Change Database</h2>
        <p className="Purpose">
          Anthropogenic climate is an increasing part of everyday life and its
          dangers to coastal communities, fisheries, plant life, coral reefs,
          and well pretty much every aspect of life honestly. Temperature is a
          big deal and it has ripple effects throughout the planet. There are
          various climate models in existence to predict the future scenarios
          that Earth might encounter due to temperature changes based on how
          much greenhouse gas emissions are made. There are many databases in
          existence to help folks aquire information about the different
          parameters of sea level rise, ocean temperatures, atmospheric CO2
          concententrations, global average temperatures and various other
          parameters.
          <br />
          The purpose of this application is to showcase the data that NOAA has
          collected to better help understand how the data has helped us
          understand the governments work, and why the models say the things
          they do. Plus its good practice for me with web development and API
          calls.
        </p>
        <img alt="A picture of cumulus clouds" src={Cumulus}/>
      </section>
      <Footer />
    </section>
  );
}

export default Homepage;
