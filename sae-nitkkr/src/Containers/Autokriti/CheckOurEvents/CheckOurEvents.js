import "./CheckOurEvents.css";
import React, {useState} from 'react';

import eventimg from "../../../Assets/eventimg.jpeg";

import { FaAngleDoubleDown } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";


function App() {
  
  
  return (
    <>
      <h2 className="heading">
        check out the <b className="subheading"> EVENTS </b>
      </h2>
      <div  className="events">
        <Session title="Understanding Transmission"
         status="online"
         date="24th-January-2021"/>

        <Session title="Understanding Transmission"
         status="online"
         date="24th-January-2021"/>
        <Session  title="Understanding Transmission"
         status="offline"
         date="24th-January-2021"/>
      </div>
      
      <div className="showmore">
        <p className="heading1">
          SOME MORE <b className="subheading1"> EVENTS </b>
          <FontAwesomeIcon id="button1" className="icon" icon={faAngleDoubleDown} />{" "}
          
        </p>
      </div>
    </>
  );
}

function Session(props) {
  return (
    <>
      <div className="card">
        <img src={eventimg} alt="Avatar" />
        <div className="container">
          <h2>
            <b>{props.title}</b>
          </h2>
          <p>
            {props.status}
            <br />
           {props.date}
          </p>

          <div className="register"></div>
          <a href="">
            <b>REGISTER</b>
          </a>
        </div>
      </div>
    </>
  );
}




export default App;
