import React, { useState } from "react";
import Nav from "./Nav";
// import "./styles.scss";
import Footer from "./Footer";
import Coral from "../public/Coral-Bleaching.jpg";
import Cumulus from "../public/Cumulus-Clouds.jpg";
import Satellite from "../public/Satellite.jpg";
import SeaLevel from "../public/Sea-Level-Rise-Greenland-ice-loss_2022.jpg";
import Hurricane from "../public/HurricaneMitch.jpg";

function Homepage() {
  const [slide, setSlide] = useState(0);

  const slides = [
    { id: 0, title: "Footer", image: Hurricane },
    { id: 1, title: "Coral", image: Coral },
    { id: 2, title: "Cumulus", image: Cumulus },
    { id: 3, title: "Satellite", image: Satellite },
    { id: 4, title: "SeaLevel", image: SeaLevel },
  ];

  function plusSlide() {
    console.log(slide);
    if (slide === slides.length - 1) {
      setSlide(0);
      return;
    }
    setSlide(slide + 1);
    return;
  }

  function minusSlide() {
    console.log(slide);
    if (slide === 0) {
      setSlide(slides.length - 1);
      return;
    }
    setSlide(slide - 1);
    return;
  }

  function currentSlide(num) {
    // console.log(typeof(num));
    if (typeof num !== "number") {
      return;
    }
    setSlide(num);
  }

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
        <section className="Slides-and-Dots">
          <section className="slide-show">
            <a className="SlideRight" onClick={minusSlide}>
              &#10094;
            </a>
            {/* <center> */}
            <img
              className="Slide"
              src={slides[slide].image}
              alt="Current slide"
            />
            {/* </center> */}
            <a className="SlideLeft" onClick={plusSlide}>
              &#10095;
            </a>
          </section>
          <aside className="dots">
            <span className="dot" onClick={() => currentSlide(0)}></span>
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
            <span className="dot" onClick={() => currentSlide(4)}></span>
          </aside>
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default Homepage;
