import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './RegisterLine.css'

function RegisterLine(){
    return(
        <>
            <div className="register_line-container">
                <Link to="/autokriti/register">
                    <button className="register_line-btn">Register Here For e - Autokriti 2.0</button>
                </Link>
            </div>
        </>
    )
}

export default RegisterLine;