import React from 'react'
import Navbar from '../../Components/NavigationBar/Navbar(big)/Navbar'
import FirstDisplayDiv from '../../Components/FirstDisplayDIV/FirstDisplayDIV'
import TeamsAboutUs from '../../Components/TeamsAboutUs/TeamsAboutUs'
import WhereDoWeParticipate from '../../Components/WhereWeParticipate/Wheredoweparticipate(nitrox)/Wherenitrox'
import Gallery from '../../Components/Gallery/Gallery'
import Saga from '../../Components/Saga/NitroxSaga'
import Footer from '../../Components/Footer/Footer(black)/FooterBlack'

function Nitrox(){
    return(
        <>
            <Navbar/>
            <FirstDisplayDiv page="Nitrox"/>
            <TeamsAboutUs/>
            <WhereDoWeParticipate/>
            <Gallery/>
            <Saga/>
            <Footer/>
        </>
    )
}

export default Nitrox;