import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <h1>The Movie Database</h1> */}
    <Navibar />
  </React.StrictMode>,
  document.getElementById("root")
);
