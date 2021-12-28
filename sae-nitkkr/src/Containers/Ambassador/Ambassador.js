import React, { Component } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import AmbassadorLander from './AmbassadorLander/AmbassadorLander'
import AmbassadorBenefits from './AmbassadorBenefits/AmbassadorBenefits'
import AmbassadorRoles from './AmbassadorRoles/AmbassadorRoles'
import RedirectToForm from './RedirectToForm/RedirectToForm'
import RedirectToInfo from './RedirectToInfo/RedirectToInfo'
import Footer from '../../Components/Footer/Footer(black)/FooterBlack'
import FormDIV from './FormDIV/FormDIV'

function Ambassador(){
    return(
        <>
            <NavBar/>
            {/* <AmbassadorLander/> */}
            <RedirectToInfo/>
            <FormDIV/>
            <AmbassadorBenefits/>
            <RedirectToForm/>
            <AmbassadorRoles/>
            <RedirectToForm/>
            <Footer/>
        </>
    )
}

export default Ambassador
