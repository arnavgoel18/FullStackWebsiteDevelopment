import "./CheckOurEvents.css";
import React, { useState } from "react";
import Quiz from "../../../Assets/CheckOurEvents/quiz.webp";
import Autokriti2 from "../../../Assets/CheckOurEvents/Autokriti2.webp";
import Au2Poster from "../../../Assets/CheckOurEvents/Au2Poster.webp";
import autokriti12poster from '../../../Assets/Autokriti12/Autokriti12poster.jpg'


function CheckEvents() {
  return (
    <>
      <div className="CheckOurEvents-main">
        <div className="CheckOurEvents-main_container">
          <h2 className="CheckOurEvents-heading">
            Check out our <b className="CheckOurEvents-subheading"> EVENTS </b>
          </h2>
          <div className="CheckOurEvents-events">
            <Session
              title="Autokriti 12.0"
              status="Venue: NIT Kurukshetra"
              date="Date : Slot1=>(8-11 August) Slot2=>(11-14 August)-2022" 
              image={autokriti12poster}
              url="/autokriti12"
            />
            <Session
              title="Quiz"
              status="Venue: D2C"
              date="Date: 29-January-2022"
              image={Quiz}
              url="https://dare2compete.com/p/quiz-on-wheelsautomotive-quiz-national-institute-of-technology-nit-kurukshetra-256604?lb=rt7C3ad/"
            />

            {/* <Session title="Understanding Transmission"
          status="online"
          date="24th-January-2021"
          image={poster}/> */}
          </div>
          <div className="CheckOurEvents-showmore">
            {/* <p className="CheckOurEvents-heading1">
            NO EVENTS <b className="CheckOurEvents-subheading1"> AS OF NOW </b> 
            <FontAwesomeIcon id="CheckOurEvents-button1" className="CheckOurEvents-icon" icon={faAngleDoubleDown} />{" "}
          </p>*/}
          </div>
        </div>
      </div>
    </>
  );
}

function Session(props) {
  return (
    <>
      <div className="CheckOurEvents-card">
        <img className="CheckOurEvents-image" src={props.image} alt="Avatar" />
        <div className="CheckOurEvents-container">
          <h2>
            <b>{props.title}</b>
          </h2>
          <p style={{ fontSize: '18px' }}>
            {props.status}
            <br />
            <span style={{ fontSize: '18px', marginLeft: '19px', marginRight: '-5px', position: 'relative', left: '-6px' }}> {props.date} </span>


          </p>

          {/* <div className="CheckOurEvents-register"></div> */}
          <a
            className="CheckOurEvents-register"
            href={props.url}
            target="_blank"
          >
            <button id="event-register">Register Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default CheckEvents;
