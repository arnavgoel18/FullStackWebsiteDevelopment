// import FooterWhite from "./Components/Footer/Footer(white)/FooterWhite";
// import FirstDisplayDiv from './Components/FirstDisplayDIV/FirstDisplayDIV';
// import ProfIncharges from './Containers/HomePage/ProfInchargesAndManagers/ProfIncharges'
// import Managers from './Containers/HomePage/ProfInchargesAndManagers/Managers'
// import AboutUs from './Components/AboutUs/AboutUs'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer(black)/FooterBlack'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Footer />} />
          <Route path="/about" exact component={() => <AboutUs />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
