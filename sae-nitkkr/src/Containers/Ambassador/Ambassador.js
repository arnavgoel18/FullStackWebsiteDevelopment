import React, { Component } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import AmbassadorLander from './AmbassadorLander/AmbassadorLander'
import Form from './FormDIV/FormDIV'
import AmbassadorBenefits from './AmbassadorBenefits/AmbassadorBenefits'
import AmbassadorRoles from './AmbassadorRoles/AmbassadorRoles'
import RedirectToForm from './RedirectToForm/RedirectToForm'
import RedirectToInfo from './RedirectToInfo/RedirectToInfo'
import Footer from '../../Components/Footer/Footer(black)/FooterBlack'


function Ambassador(){
    return(
        <>
            <NavBar/>
            {/* <AmbassadorLander/> */}
            <RedirectToInfo/>
            {/* <Form/> */}
            <AmbassadorBenefits/>
            <RedirectToForm/>
            <AmbassadorRoles/>
            <RedirectToForm/>
            <Footer/>
        </>
    )
}

export default Ambassador