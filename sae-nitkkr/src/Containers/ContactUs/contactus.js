import React, { Component } from 'react'

import ContactUS from '../../Components/ContactUs/ContactUs'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer(black)/FooterBlack'

function contact(){
    return(
        <>
            <NavBar/>
            <ContactUS/>
            <Footer/>
        </>
    )
}

export default contact