import React from 'react'
import { useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import FirstDisplayDiv from '../../Components/FirstDisplayDIV/FirstDisplayDIV'
import AboutUs from '../../Components/AboutUs/AboutUs'
import CheckOurEvents from '../../Containers/Autokriti/CheckOurEvents/CheckOurEvents'
// import Saga from '../../Components/Saga/AcceleronsSaga'
import BrandAmbassador from './BrandAmbassador/BrandAmbassador'
import AutokritiFirst from '../../Components/FirstDisplayDIV/Autokriti/Slider'
import Testimonials from './Testimonials/Testimonials'
import Gallery from '../../Components/Gallery/AutokritiGallery/Gallery'
import FooterWhite from "../../Components/Footer/Footer(white)/FooterWhite";
import AutokritiEvent from '../../Components/AutokritiEvent/AutokritiEvent'
import AutokritiCheckEvent from '../../Components/AutokritiEvent/AutokritiCheckEvent/AutokritiCheckEvent'
// import PopUs from './PopUps/popupapp'

function Autokriti(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
            <NavBar/>
            <AutokritiFirst/>
            {/* <PopUs/> */}
            {/* <FirstDisplayDiv page="Autokriti"/> */}
            <AboutUs page="Autokriti"/>
            <AutokritiEvent/>
            <CheckOurEvents/>
            <AutokritiCheckEvent/>
            {/* <Saga/> */}
            <BrandAmbassador/>
            {/* <Testimonials/>  */}
            <Gallery/>
            <FooterWhite/>
        </>
    )
}

export default Autokriti