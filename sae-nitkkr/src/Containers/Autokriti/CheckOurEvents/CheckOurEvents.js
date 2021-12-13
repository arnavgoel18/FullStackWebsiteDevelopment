import "./CheckOurEvents.css";
import React, {useState} from 'react';

import poster from "../../../Assets/CheckOurEvents/poster.jpeg";

// import { FaAngleDoubleDown } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";


function CheckEvents() {
  return (
    <>
      <div className="CheckOurEvents-main_container">
        <h2 className="CheckOurEvents-heading">
          check out the <b className="CheckOurEvents-subheading"> EVENTS </b>
        </h2>
        <div  className="CheckOurEvents-events">
          <Session title="Understanding Transmission"
          status="online"
          date="24th-January-2021"
          image={poster}/>

          <Session title="Understanding Transmission"
          status="online"
          date="24th-January-2021"
          image={poster}/>
          
        </div>
        
        <div className="CheckOurEvents-showmore">
          <p className="CheckOurEvents-heading1">
            SOME MORE <b className="CheckOurEvents-subheading1"> EVENTS </b>
            <FontAwesomeIcon id="CheckOurEvents-button1" className="CheckOurEvents-icon" icon={faAngleDoubleDown} />{" "}
          </p>
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
           {props.date}
          </p>

          <div className="CheckOurEvents-register"></div>
          <a className="CheckOurEvents-register" href="">
            <b>REGISTER</b>
          </a>
        </div>
      </div>
    </>
  );
}

export default CheckEvents