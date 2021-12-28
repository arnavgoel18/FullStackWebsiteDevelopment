import React, { Component } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import AmbassadorBenefits from './AmbassadorBenefits/AmbassadorBenefits'
import Footer from '../../Components/Footer/Footer(black)/FooterBlack'

function Ambassador(){
    return(
        <>
            <NavBar/>
            <AmbassadorBenefits/>
            <Footer/>
        </>
    )
}

export default Ambassador