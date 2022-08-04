//Information page for Autokriti 2.0 which was created a Day Before
import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Autokriti12.css";

import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer(black)/FooterBlack";

import Au2Poster from "../../../Assets/Autokriti12/Autokriti12poster.jpg";
import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import RegisterLine from "./VerticalTimeline/RegisterLine";
import CV from "../../../Assets/cv.png";
import EV from "../../../Assets/ev.png";
import IOT from "../../../Assets/iot.png";
import SW from "../../../Assets/sw.png";
import BK from "../../../Assets/bk.png";
import TM from "../../../Assets/tm.png";
import VD from "../../../Assets/vd.png";
import OH from "../../../Assets/oh.png"

function Autorkriti12() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="about_autokriti-container">
        <div className="about_autokriti-left">
          <h2 className="about_autokrit-left-heading">
            Details of{" "}
            <b className="about_autokrit-left-subheading"> Autokriti 12</b>{" "}
            Workshop
          </h2>
          <p>
            Evolution is the necessity of survival. Changes are the only thing
            consistent. The world is transforming and so is the technology – for
            better and to pave a path for future. For reducing the carbon
            footprint and for the health of this green planet electrical
            vehicles are the future of automotives. As a Society of Automotive
            Engineers, we are already deep inside the veins of these
            developments <br />
            <br />
            From overhauling of a 2 stroke engine of a scooter in Autokriti 1 to
            Toyota Camry’s Hybrid Engine in Autokriti 10, we have always matched
            our steps with innovation. It is our determination to keep up with
            the ever-changing technology that makes us north India’s largest
            automobile workshop. And this Autokriti will be a ride from CV to
            EV, with a spark of electricity to it. <b>#MOBILITY REDEFINED</b>
            <br />
            <br />
            It’s a 3 day workshop where the entire working of a vehicle will be
            explained with the addition of Porsche star engine and an EV
            powertrain
          </p>
          <Link to="/autokriti/register">
            <button>Register Here!</button>
          </Link>
        </div>
        <div className="about_autokriti-right">
          <img src={Au2Poster}></img>
        </div>
      </div>
      <div className="about_autokriti-container">
        <div className="bigbox">
        <a href="#transmission">
            <button className="smallbox">
              <img src={TM}></img>
              <h3>Transmission</h3>
            </button>
          </a>
          <a href="#iot">
            <button className="smallbox">
              <img src={IOT}></img>
              <h3>IOT</h3>
            </button>
          </a>
          <a href="#vd">
            <button className="smallbox">
              <img src={VD}></img>
              <h3>Vehicle Dynamics</h3>
            </button>
          </a>
          <a href="#ev">
            <button className="smallbox">
              <img src={EV}></img>
              <h3>Electric Vehicle</h3>
            </button>
          </a>
          <a href="#brakes">
            <button className="smallbox">
              <img src={BK}></img>
              <h3>Brakes</h3>
            </button>
          </a>
          <a href="#engines">
            {" "}
            <button className="smallbox">
              <img src={CV}></img>
              <h3>Engine Overhauling</h3>
            </button>
          </a>
          <a href="#softwares">
            <button className="smallbox">
              <img src={SW}></img>
              <h3>Softwares</h3>
            </button>
          </a>
        </div>
      </div>
      <div className="about_autokriti-container">
        <Link to="/autokriti/register">
          <button type="button" className="register">
            Register Here!
          </button>
        </Link>
      </div>
      <VerticalTimeline />
      <RegisterLine />
      <Footer />
    </>
  );
}

export default Autorkriti12;
