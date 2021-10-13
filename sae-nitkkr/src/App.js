import FooterBlack from "./Components/Footer/Footer(black)/FooterBlack";
// import FooterWhite from "./Components/Footer/Footer(white)/FooterWhite";
import FirstDisplayDiv from './Components/FirstDisplayDIV/FirstDisplayDIV';
import ExploreUs from './Containers/HomePage/ExploreUs/ExploreUs'
import ProfIncharges from './Containers/HomePage/ProfInchargesAndManagers/ProfIncharges'
import Managers from './Containers/HomePage/ProfInchargesAndManagers/Managers'
import Teamdiv from "./Containers/HomePage/TeamsDIV/Teamdiv";
import AboutUs from './Components/AboutUs/AboutUs'

function App() {
  return (
    <>
      <FirstDisplayDiv page = "Home"/>
      <ExploreUs/>
      <Teamdiv/>
      <ProfIncharges/>
      <Managers/>
    </>
  );
}

export default App;
