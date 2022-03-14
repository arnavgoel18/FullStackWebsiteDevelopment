import React, { Component } from 'react'
import './Certificates.css'

import Footer from '../../../Components/Footer/Footer(black)/FooterBlack';
import NavBar from '../../../Components/NavBar/NavBar';

function Certificates(){
    return(
        <>
            <NavBar/>
            <div className='certificates'>
                <div className='certificates-phone-title'>
                    Enter your Phone Number: 
                </div>
                <div className='certificates-phone-input'>
                    <input type="text"></input>
                </div>
                <div className='certificates-phone-downloader'>
                    {/* icon and javascript functionality to download the image displayed to be added here */}
                </div>
            </div>

            {/* Add Div which will contain the certificate's image here */}

            <Footer/>
        </>
    )
}

export default Certificates;