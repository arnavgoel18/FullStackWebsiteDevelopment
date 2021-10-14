import Navbar from '../../Components/NavigationBar/Navbar(big)/Navbar';
import Hamburger from '../../Components/NavigationBar/Navbar(hamsburger)/Menu'
import FirstDisplayDIV from '../../Components/FirstDisplayDIV/FirstDisplayDIV';
import AboutUs from '../../Components/AboutUs/AboutUs';
import TeamsDIV from '../../Containers/HomePage/TeamsDIV/Teamdiv';
import ExploreUs from '../../Containers/HomePage/ExploreUs/ExploreUs';
import ProfIncharges from '../../Containers/HomePage/ProfInchargesAndManagers/ProfIncharges';
import Managers from '../../Containers/HomePage/ProfInchargesAndManagers/Managers';
import Footer from '../../Components/Footer/Footer(black)/FooterBlack';

function HomePage(){
    return(
        <>
            <Navbar/>
            <Hamburger/>
            <FirstDisplayDIV page="Home"/>
            <AboutUs/>
            <TeamsDIV/>
            <ExploreUs/>
            <ProfIncharges/>
            <Managers/>
            <Footer/>
        </>
    )
}

export default HomePage;