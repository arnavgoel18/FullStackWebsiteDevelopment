import React from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import FirstDisplayDiv from '../../Components/FirstDisplayDIV/FirstDisplayDIV'
import TeamsAboutUs from '../../Components/TeamsAboutUs/TeamsAboutUs'
import WhereDoWeParticipate from '../../Components/WhereWeParticipate/Wheredoweparticipate(accelerons)/Whereacclerons'
import Gallery from '../../Components/Gallery/Gallery'
// import Saga from '../../Components/Saga/AcceleronsSaga'
import Footer from '../../Components/Footer/Footer(black)/FooterBlack'

function Accelerons(){
    return(
        <>
            <NavBar/>
            <FirstDisplayDiv page="Accelerons"/>
            <TeamsAboutUs page="Accelerons"/>
            <WhereDoWeParticipate/>
            <Gallery/>
            {/* <Saga/> */}
            <Footer/>
        </>
    )
}

export default Accelerons;