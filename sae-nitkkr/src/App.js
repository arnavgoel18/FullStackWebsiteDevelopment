import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './Containers/HomePage/homePage'
import Autokriti from "./Containers/Autokriti/Autokriti";
import Accelerons from "./Containers/Accelerons/Accelerons";
import Nitrox from "./Containers/Nitrox/Nitrox"


function App() {
  document.title = "SAE NIT Kurukshtra";
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/autokriti" exact component={() => <Autokriti />} />
          <Route path="/accelerons" exact component={() => <Accelerons />} />
          <Route path="/nitrox" exact component={() => <Nitrox />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
