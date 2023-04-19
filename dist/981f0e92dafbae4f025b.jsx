import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Homepage from "./Homepage";
import MongoDB from "./MongoDB";
import SQL from "./SQL";
import WeatherForecasts from "./WeatherForecast";
import "./styles.scss";
var router = createBrowserRouter([{
  path: "/",
  element: /*#__PURE__*/React.createElement(Homepage, null)
}, {
  path: "/mongodb",
  element: /*#__PURE__*/React.createElement(MongoDB, null)
}, {
  path: "/SQL",
  element: /*#__PURE__*/React.createElement(SQL, null)
}, {
  path: "/WeatherForecasts",
  element: /*#__PURE__*/React.createElement(WeatherForecasts, null)
}]);
ReactDOM.createRoot(document.getElementById("root")).render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(RouterProvider, {
  router: router
})));

// const Index = () => {
//   return <section>WELCOME TO REACT APP!</section>;
// };

// ReactDOM.render(<Index />, document.getElementById("root"));