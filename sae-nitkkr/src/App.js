// import FooterWhite from "./Components/Footer/Footer(white)/FooterWhite";
import FirstDisplayDiv from './Components/FirstDisplayDIV/FirstDisplayDIV';
import ProfIncharges from './Containers/HomePage/ProfInchargesAndManagers/ProfIncharges'
import Managers from './Containers/HomePage/ProfInchargesAndManagers/Managers'
import AboutUs from './Components/AboutUs/AboutUs'


function App() {
  return (
    <>
      <FirstDisplayDiv page = "Accelerons"/>
      <AboutUs/>
      <ProfIncharges/>
      <Managers/>
    </>
  );
}

export default App;
