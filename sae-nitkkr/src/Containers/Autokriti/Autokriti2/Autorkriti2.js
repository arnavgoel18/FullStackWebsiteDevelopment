import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Autokriti2.css'

import NavBar from '../../../Components/NavBar/NavBar'
import Footer from '../../../Components/Footer/Footer(black)/FooterBlack'

import Au2Poster from '../../../Assets/CheckOurEvents/Au2Poster.jpg'
import VerticalTimeline from './VerticalTimeline/VerticalTimeline'

function Autorkriti2(){
    return(
        <>
            <NavBar/>
            <div className="about_autokriti-container">
                <div className="about_autokriti-left">
                    <h2 className="about_autokrit-left-heading">
                        what you'll learn in <b className="about_autokrit-left-subheading">  e - Autokriti 2.0 ?</b>
                    </h2>
                    <p>
                        Knowledge could be gained via two ways- by the path of prolong experimentation and trial & error or from a mentor who could show you a circumscribed path to learning. Isn’t latter the better option? 
                        <br/><br/>
                        SAE NIT Kurukshetra, with its subsidiaries- Team Nitrox and Team Accelerons, is already deep into the technical bog of vehicle designing and manufacturing. And this is what makes Autokriti North India’s largest automobile workshop. The huge participation in previous years is the impetus behind our consistent effort to bring meticulous content for you each year. 
                        <br/><br/>
                        And so here we are with e-Autokriti 2.0, where we would lay before you the technical know-how unfurled through years of research & implementations. 
                        <br/><br/>
                        It’s a five day workshop which will give you an overall idea of working and designing of vehicle’s powertrain. 
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
            <Footer/>
        </>
    )
}

export default Autorkriti2;