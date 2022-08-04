//Simple component containng a register button to be added to bottom of all the information on the Autokriti2 page
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import {IoInformationCircle} from "react-icons/io";

import './RegisterLine.css'

function RegisterLine(){

    return(
        <>
            <div className="register_line-container">
               
                    <h3>Guidelines and Pricing</h3>
                    <p>1. You can choose Max 2 Workshops</p>
                    <p>2. Each Workshop is 3 Days long</p>
                    <p>3. If you choose one workshop, your totoal duration will be 4 Days. 3 Days Workshop + 1 Day Guest Lecture</p>
                    <p>4. If you choose 2 workshops, your total duration will be 7 Days. 3 Days Workshop (Department 2) + 1 Day Guest Lecture + 3 Days Workshop (Department 1)</p>
                    <p>5. Each workshop is <b>2500/- INR</b></p>
                    <p>6. Accomodation and Food is <b>500/-</b> Extra per Slot</p> 
                    <p>7. For any queries on type of accomodation or food service, please contact us <Link to="/contactus" style={{color:'blue'}}> here</Link></p>
                    <h4> <p>Interested in automobiles, but don’t know where to start? Let’s this be your first step, to the world of electrification. Join Autokriti 12 and be the part of this remaking</p></h4>
                   <Link to="/autokriti/register">
                    <button className="register_line-btn">Register Here</button>
                </Link>
            </div>
        </>
    )
}

export default RegisterLine;