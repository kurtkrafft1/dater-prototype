import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Dater from './dater'

ReactDOM.render(
  <Router>
    <Dater />
  </Router>,
  document.getElementById("root")
);
