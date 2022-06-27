import React from 'react'
import { useEffect } from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import FirstDisplayDiv from '../../Components/FirstDisplayDIV/FirstDisplayDIV'
import TeamsAboutUs from '../../Components/TeamsAboutUs/TeamsAboutUs'
import WhereDoWeParticipate from '../../Components/WhereWeParticipate/Wheredoweparticipate(accelerons)/Whereacclerons'
import Gallery from '../../Components/Gallery/AcceleronsGallery/Gallery'
import Saga from '../../Components/Saga/AcceleronsSaga'
import Footer from '../../Components/Footer/Footer'

function Accelerons(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
            <NavBar/>
            <FirstDisplayDiv page="Accelerons"/>
            <TeamsAboutUs page="Accelerons"/>
            <WhereDoWeParticipate/>
            {/* <Saga/> */}
            <Gallery/>
            <Footer type="white"/>
        </>
    )
}

export default Accelerons;