import React from "react";
import "./styles/main.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./containers/Home";
import Love from "./containers/Love";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/love" component={Love} />
    </Router>
  );
}

export default App;
