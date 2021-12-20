import React from 'react'

import Sponsorlogo from '../../Assets/Sponsors Image/Sponsorlogo.png'

import './Become_sponsor.css'


function Become_sponsor() {
  return (
    <div id="become_sponsor_bigbox">
      <div id="become_sponsor_title">
      
         <div id="sponsor_content">
            BECOME <br/>A SPONSOR

         </div>
         <div id="spbutton">
            <button id="knowmore_button">
                Know More
            </button>
        </div>
      </div>
      <div id="become_sponsor_image">
      <img src={Sponsorlogo} id="splogo"/>
     
      </div>
    </div>
  )
}

export default Become_sponsor;
