import React, { Component } from 'react'
import { useEffect } from 'react'

import ContactUS from '../../Components/ContactUs/ContactUs'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer(black)/FooterBlack'

function Contact(){
  
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  
    return(
        
        <>
            <NavBar/>
            <ContactUS/>
            <Footer/>
        </>
    )
}

export default Contact