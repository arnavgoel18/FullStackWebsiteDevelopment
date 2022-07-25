//Simple component containng a register button to be added to bottom of all the information on the Autokriti2 page
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './RegisterLine.css'

function RegisterLine(){

    return(
        <>
            <div className="register_line-container">
                <p>Interested in automobiles, but don’t know where to start? Let’s this be your first step, to the
world of electrification. Join Autokriti 12 and be the part of this remaking</p>
                <Link to="/autokriti/register">
                    <button className="register_line-btn">Register Here</button>
                </Link>
            </div>
        </>
    )
}

export default RegisterLine;