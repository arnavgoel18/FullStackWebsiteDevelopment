import "./CheckOurEvents.css";
import React, { useState } from "react";
import Autokriti2 from "../../../Assets/CheckOurEvents/Autokriti2.webp";
import Au2Poster from "../../../Assets/CheckOurEvents/Au2Poster.webp";
import autokriti12poster from "../../../Assets/Autokriti12/Autokriti12poster.jpg";
import campusAmbass from '../../../Assets/CheckOurEvents/CampusAmbassador.png'

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
              date="Date : 8-14 Septmeber"
              image={autokriti12poster}
              url="/autokriti/register"
            />
            <Session
              title="Campus Ambassador"
              status="Venue: Online"
              date="August 2022"
              image={campusAmbass}
              url="https://www.saenitkurukshetra.in/autokriti#ambassador"
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
          <p>
            {props.status}
            <br />
            <span> {props.date} </span>
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
