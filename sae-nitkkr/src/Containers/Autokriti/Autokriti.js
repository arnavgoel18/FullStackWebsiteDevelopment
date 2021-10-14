import React from 'react'
import Navbar from '../../Components/NavigationBar/Navbar(big)/Navbar'
import FirstDisplayDiv from '../../Components/FirstDisplayDIV/FirstDisplayDIV'
import AboutUs from '../../Components/AboutUs/AboutUs'
import CheckOurEvents from '../../Containers/Autokriti/CheckOurEvents/CheckOurEvents'
// import Saga from '../../Components/Saga/AcceleronsSaga'
import BrandAmbassador from './BrandAmbassador/BrandAmbassador'
import Testimonials from './Testimonials/Testimonials'
import Gallery from '../../Components/Gallery/Gallery'
// import Footer from '../../Components/Footer/Footer(white)/FooterWhite'
import FooterWhite from "../../Components/Footer/Footer(white)/FooterWhite";


function Autokriti(){
    return(
        <>
            <Navbar/>
            <FirstDisplayDiv page="Autokriti"/>
            <AboutUs/>
            <CheckOurEvents/>
            {/* <Saga/> */}
            <BrandAmbassador/>
            <Testimonials/>
            <Gallery/>
            {/* <Footer/> */}
            <FooterWhite/>
        </>
    )
}

export default Autokriti