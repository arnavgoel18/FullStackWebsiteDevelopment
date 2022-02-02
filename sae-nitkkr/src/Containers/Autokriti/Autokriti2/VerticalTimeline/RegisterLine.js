import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './RegisterLine.css'

function RegisterLine(){

    return(
        <>
            <div className="register_line-container">
                <p>So it’s a start of something interesting. And this workshop will give direction to your interest in automotive industry. Thus join us for e- Autokriti 2.0, for as there’s a point where we begin; let this one be yours. See you there!</p>
                <Link to="/autokriti/register">
                    <button className="register_line-btn">Register Here</button>
                </Link>
            </div>
        </>
    )
}

export default RegisterLine;