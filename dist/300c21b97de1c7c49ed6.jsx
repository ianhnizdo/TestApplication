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

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
var Index = function Index() {
  return /*#__PURE__*/React.createElement("section", null, "WELCOME TO REACT APP!");
};
ReactDOM.render( /*#__PURE__*/React.createElement(Index, null), document.getElementBy);