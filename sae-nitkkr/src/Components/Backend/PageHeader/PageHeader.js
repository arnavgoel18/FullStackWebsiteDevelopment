import React, { Component } from 'react'
import './PageHeader.css'

function PageHeader(props){
    return(
        <>
            <div className="PageHeader-container">
                <center><h2>{props.heading}</h2></center>
            </div>
        </>
    )
}

export default PageHeader