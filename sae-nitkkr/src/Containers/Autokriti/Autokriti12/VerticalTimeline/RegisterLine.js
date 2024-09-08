//Simple component containng a register button to be added to bottom of all the information on the Autokriti2 page
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GrCircleInformation } from "react-icons/gr";

import "./RegisterLine.css";

function RegisterLine() {
  return (
    <>
      <div className="register_line-container">
        <div className="register_line-icon">
          <GrCircleInformation />
          <h3>Guidelines and Pricing</h3>
        </div>
        <p>
          1. There are 4 Departments - <br />
          <br />
          <ul style={{ marginLeft: "2em" }}>
            <li>Mechanical</li>
            <li>EV</li>
            <li>IOT</li>
            <li>Softwares</li>
          </ul>
          <br />
          You can choose Max 1 Departments
        </p>
        <p>2. Each Department/Workshop is 3 Days long</p>
        <p>
          5. Each workshop (except IOT) is <b>2000/- INR</b>. IOT workshop is <b>2500/- INR</b>
        </p>
        <p>
          6. Accomodation and Food is <b>279/-</b> Per Day
        </p>
        <p>
          7. For any queries on type of accomodation or food service, please
          contact{" "}
          {/* <Link to="/contactus" style={{ color: "blue" }}>
            {" "}
            here
          </Link> */}
          Vivek : 9389755501
        </p>
        <h4>
          {" "}
          <p className="register_line-last">
            Interested in automobiles, but don’t know where to start? Let’s this
            be your first step, to the world of electrification. Join Autokriti
            13 and be the part of this remaking
          </p>
        </h4>
        <Link to="/autokriti/register">
          <center>
            <button className="register_line-btn">Register Here</button>
          </center>
        </Link>
      </div>
    </>
  );
}

export default RegisterLine;
