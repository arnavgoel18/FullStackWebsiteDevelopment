import React from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import FirstDisplayDiv from '../../Components/FirstDisplayDIV/FirstDisplayDIV'
import TeamsAboutUs from '../../Components/TeamsAboutUs/TeamsAboutUs'
import WhereDoWeParticipate from '../../Components/WhereWeParticipate/Wheredoweparticipate(nitrox)/Wherenitrox'
import Gallery from '../../Components/Gallery/Gallery'
// import Saga from '../../Components/Saga/NitroxSaga'
import Footer from '../../Components/Footer/Footer(white)/FooterWhite'

function Nitrox(){
    return(
        <>
            <NavBar/>
            <FirstDisplayDiv page="Nitrox"/>
            <TeamsAboutUs page="Nitrox"/>
            <WhereDoWeParticipate />
            <Gallery/>
            {/* <Saga/> */}
            <Footer/>
        </>
    )
}

export default Nitrox;