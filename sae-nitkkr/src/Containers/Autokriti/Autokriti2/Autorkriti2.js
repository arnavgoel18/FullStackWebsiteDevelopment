import React, { Component, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Autokriti2.css'

import NavBar from '../../../Components/NavBar/NavBar'
import Footer from '../../../Components/Footer/Footer(black)/FooterBlack'

import Au2Poster from '../../../Assets/CheckOurEvents/Au2Poster.webp'
import VerticalTimeline from './VerticalTimeline/VerticalTimeline'
import RegisterLine from './VerticalTimeline/RegisterLine'

function Autorkriti2(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
            <NavBar/>
            <div className="about_autokriti-container">
                <div className="about_autokriti-left">
                    <h2 className="about_autokrit-left-heading">
                        Details of <b className="about_autokrit-left-subheading">  e - Autokriti 2.0</b> Workshop
                    </h2>
                    <p>
                        Knowledge could be gained via two ways- by the path of prolong experimentation and trial & error or from a mentor who could show you a circumscribed path to learning. Isn’t latter the better option? 
                        <br/><br/>
                        SAE NIT Kurukshetra, with its subsidiaries- Team Nitrox and Team Accelerons, is already deep into the technical bog of vehicle designing and manufacturing. And this is what makes Autokriti North India’s largest automobile workshop. 
                        <br/><br/>
                        And so here we are with e-Autokriti 2.0, where we would lay before you the technical know-how unfurled through years of research & implementations. 
                        <br/><br/>
                        This workshop under e - Autokriti 2.0 is a 4-day workshop which will give you an overall idea of working and designing of vehicle’s powertrain. 
                    </p>
                    <Link to="/autokriti/register">
                        <button>Register Here!</button>
                    </Link>
                </div>
                <div className="about_autokriti-right">
                    <img src={Au2Poster}></img>
                </div>
            </div>
            <VerticalTimeline/>
            <RegisterLine/>
            <Footer/>
        </>
    )
}

export default Autorkriti2;