//Information page for Autokriti 2.0 which was created a Day Before
import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Autokriti12.css";
import { GrCircleInformation } from "react-icons/gr";
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
import OH from "../../../Assets/oh.png";

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
            Interested in automobiles, but don’t know where to start? Let this
            be your first stepping stone to the redefined world of mobility.
            Join Autokriti 12 and be a part of this remaking.
            <br />
            <br />
            From overhauling of a 2 stroke engine of a scooter in Autokriti 1 to
            Porsche Cayenne Engine in Autokriti 11, we have always matched our
            steps with innovation. It is our determination to keep up with the
            ever-changing technology that makes us North India’s largest
            automobile workshop. To continue our endeavour of knowledge sharing,
            we are here with Autokriti 12. This time it will be a ride on both
            CV and EV, not a rash one but a safe and steady one.
            <b> #MobilityRedefined</b>
            <br />
            <br />
            There are four workshops in Autokriti 12: CV, EV, IoT and Software.
            All these workshops will help you create a proper theoretical as
            well as practical understanding of their domain. You shall get a
            personalised learning experience on physical models. Along with all
            these, the workshop will have guest lectures from some reputed
            dignitaries. Please visit the content of these workshops for more
            details.
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
          <a href="#vd">
            <button className="smallbox">
              <img src={VD}></img>
              <h3>Vehicle Dynamics</h3>
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
          <a href="#iot">
            <button className="smallbox">
              <img src={IOT}></img>
              <h3>IOT</h3>
            </button>
          </a>

          <a href="#ev">
            <button className="smallbox">
              <img src={EV}></img>
              <h3>Electric Vehicle</h3>
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
          You can choose Max 2 Departments
        </p>
        <p>2. Each Department/Workshop is 3 Days long</p>
        <p>
          3. If you choose 1 workshop, your totoal duration will be 4 Days. 3
          Days Workshop + 1 Day Guest Lecture
        </p>
        <p>
          4. If you choose 2 workshops, your total duration will be 7 Days. 3
          Days Workshop (Department 1) + 1 Day Guest Lecture + 3 Days Workshop
          (Department 2)
        </p>
        <p>
          5. Each workshop is <b>2500/- INR</b>
        </p>
        <p>
          6. Accomodation and Food is <b>500/-</b> Extra per Slot
        </p>
        <p>
          7. For any queries on type of accomodation or food service, please
          contact us{" "}
          <Link to="/contactus" style={{ color: "blue" }}>
            {" "}
            here
          </Link>
        </p>
        <h4>
          {" "}
          <p className="register_line-last">
            Interested in automobiles, but don’t know where to start? Let’s this
            be your first step, to the world of electrification. Join Autokriti
            12 and be the part of this remaking
          </p>
        </h4>
        <Link to="/autokriti/register">
          <center>
            <button className="register_line-btn">Register Here</button>
          </center>
        </Link>
      </div>
      <VerticalTimeline />
      <RegisterLine />
      <Footer />
    </>
  );
}

export default Autorkriti12;
