import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Homepage from "./Homepage";
import MongoDB from "./MongoDB";
import SQL from "./SQL";
import ClimateModels from "./ClimateModels";

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
    path: "/ClimateModels",
    element: <ClimateModels />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
