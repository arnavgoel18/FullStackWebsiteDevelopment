import React from 'react'
import { useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import FirstDisplayDiv from '../../Components/FirstDisplayDIV/FirstDisplayDIV'
import TeamsAboutUs from '../../Components/TeamsAboutUs/TeamsAboutUs'
import WhereDoWeParticipate from '../../Components/WhereWeParticipate/Wheredoweparticipate(nitrox)/Wherenitrox'
import Gallery from '../../Components/Gallery/NitroxGallery/Gallery'
import Saga from '../../Components/Saga/NitroxSaga'
import TeamLeads from '../../Components/TeamLeads/TeamLeads'
import Footer from '../../Components/Footer/Footer(white)/FooterWhite'

function Nitrox(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
            <NavBar/>
            <FirstDisplayDiv page="Nitrox"/>
            <TeamsAboutUs page="Nitrox"/>
            <WhereDoWeParticipate />
            <TeamLeads page="Nitrox"/>
            {/* <Saga/> */}
            <Gallery/>
            <Footer/>
        </>
    )
}

export default Nitrox;