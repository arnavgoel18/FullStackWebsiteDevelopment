import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './Containers/HomePage/homePage'
import Autokriti from "./Containers/Autokriti/Autokriti";
import Accelerons from "./Containers/Accelerons/Accelerons";
import Nitrox from "./Containers/Nitrox/Nitrox"
import ContactUS from "./Containers/ContactUs/contactus";
import Sponsors from "./Containers/Sponsors/Sponsors";
import Blogs from './Containers/Blogs/Blogs'
import Topic1 from './Containers/Blogs/Topic1/Topic1'
import Topic2 from './Containers/Blogs/Topic2/Topic2'


function App() {
  document.title = "SAE NIT Kurukshetra";
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/autokriti" exact component={() => <Autokriti />} />
          <Route path="/accelerons" exact component={() => <Accelerons />} />
          <Route path="/nitrox" exact component={() => <Nitrox />} />
          <Route path="/contactus" exact component={() => <ContactUS/>} />
          <Route path="/sponsors" exact component={() => <Sponsors/>}/>
          <Route path="/blogs" exact component={() => <Blogs/>}/>
          <Route path="/blogs/leftvsright" exact component={() => <Topic1/>}/>
          <Route path="/blogs/guidetovd" exact component={() => <Topic2/>}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
