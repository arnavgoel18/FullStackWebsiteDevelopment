import React from 'react'
import Navbar from '../../Components/NavigationBar/Navbar(big)/Navbar'
import FirstDisplayDiv from '../../Components/FirstDisplayDIV/FirstDisplayDIV'
import TeamsAboutUs from '../../Components/TeamsAboutUs/TeamsAboutUs'
import WhereDoWeParticipate from '../../Components/WhereWeParticipate/Wheredoweparticipate(accelerons)/Whereacclerons'
import Gallery from '../../Components/Gallery/Gallery'
// import Saga from '../../Components/Saga/AcceleronsSaga'
import Footer from '../../Components/Footer/Footer(black)/FooterBlack'

function Accelerons(){
    return(
        <>
            <Navbar/>
            <FirstDisplayDiv page="Accelerons"/>
            <TeamsAboutUs/>
            <WhereDoWeParticipate/>
            <Gallery/>
            {/* <Saga/> */}
            <Footer/>
        </>
    )
}

export default Accelerons;