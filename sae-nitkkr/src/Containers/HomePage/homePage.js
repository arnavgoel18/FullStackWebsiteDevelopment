import React from 'react';
import { useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar'
import FirstDisplayDIV from '../../Components/FirstDisplayDIV/FirstDisplayDIV';
import AboutUs from '../../Components/AboutUs/AboutUs';
import TeamsDIV from '../../Containers/HomePage/TeamsDIV/Teamdiv';
import ExploreUs from '../../Containers/HomePage/ExploreUs/ExploreUs';
import ProfIncharges from '../../Containers/HomePage/ProfInchargesAndManagers/ProfIncharges';
import Managers from '../../Containers/HomePage/ProfInchargesAndManagers/Managers';
import Footer from '../../Components/Footer/Footer(black)/FooterBlack';
import AutokritiEvent from '../../Components/AutokritiEvent/AutokritiEvent'
import Autokirtee12 from '../Autokriti/Autokirtee12_popup/Autokirtee12';


function HomePage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar />
            <FirstDisplayDIV page="Home" />
            <AboutUs page="Home" />
            <Autokirtee12/>
            <TeamsDIV />
            <br />
            {/* <ExploreUs /> */}

            <Managers />

            <Footer />
        </>
    )
}

export default HomePage;