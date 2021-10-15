import React from 'react';

import NavBar from '../../Components/NavBar/NavBar'
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
            <NavBar/>
            <FirstDisplayDIV page="Home"/>
            <AboutUs/>
            <TeamsDIV/>
            <br/>
            <ExploreUs/>
            <ProfIncharges/>
            <Managers/>
            <Footer/>
        </>
    )
}

export default HomePage;