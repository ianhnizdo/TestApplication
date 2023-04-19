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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/mongodb",
    element: <MongoDB />,
  },
  {
    path: "/SQL",
    element: <SQL />,
  },
  {
    path: "/WeatherForecasts",
    element: <WeatherForecasts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// const Index = () => {
//   return <section>WELCOME TO REACT APP!</section>;
// };

// ReactDOM.render(<Index />, document.getElementById("root"));
