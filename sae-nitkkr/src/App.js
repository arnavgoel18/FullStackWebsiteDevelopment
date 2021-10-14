import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import HomePage from './Containers/HomePage/homePage'
// import Autokriti from "./Containers/Autokriti/Autokriti";
// import Accelerons from "./Containers/Accelerons/Accelerons";
import CheckEvents from './Containers/Autokriti/CheckOurEvents/CheckOurEvents'
// import Accelerons from "./Containers/Accelerons/Accelerons";
// import Nitrox from "./Containers/Nitrox/Nitrox"
// import Navbar from "./Components/NavigationBar/Navbar(big)/Navbar";
// import Hamburger from "./Components/NavigationBar/Navbar(hamsburger)/Menu"

function App() {
  return (
    <>
      <CheckEvents/>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/autokriti" exact component={() => <Autokriti />} />
          <Route path="/accelerons" exact component={() => <Accelerons />} />
          <Route path="/nitrox" exact component={() => <Nitrox />} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
