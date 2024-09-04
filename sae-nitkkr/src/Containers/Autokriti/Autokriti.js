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
import Footer from '../../Components/Footer/Footer'
import AutokritiEvent from '../../Components/AutokritiEvent/AutokritiEvent'
import AutokritiCheckEvent from '../../Components/AutokritiEvent/AutokritiCheckEvent/AutokritiCheckEvent'
import PopupCard from './PopUps/PopupCard'
import Autokirtee12 from './Autokirtee12_popup/Autokirtee12'
import AutokritiCard from './Autokriti12Card/AutokritiCard'
import FundingIntro from '../../Components/CrowdFunding/FundingIntro'

function Autokriti(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
            <NavBar/>
            <AutokritiFirst/>
           { /*<PopupCard/>*/}
            {/* <FirstDisplayDiv page="Autokriti"/> */}
            <AboutUs page="Autokriti"/>
            <AutokritiEvent/>
            {/* <Autokirtee12/> */}
            
            {/* <CheckOurEvents/> */}
            <AutokritiCard/>
            {/* <Saga/> */}
            {/* <BrandAmbassador/> */}
            {/* <Testimonials/>  */}
            <Gallery/>
            <Footer type="black"/>
        </>
    )
}

export default Autokriti