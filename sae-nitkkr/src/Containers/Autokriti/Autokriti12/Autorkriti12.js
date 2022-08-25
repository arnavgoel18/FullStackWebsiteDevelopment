//Information page for Autokriti 2.0 which was created a Day Before
import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Autokriti12.css";
import { GrCircleInformation } from "react-icons/gr";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer(black)/FooterBlack";
import Carousel from "../../../Components/Carousel/Carousel";

import Au2Poster from "../../../Assets/Autokriti12/Autokriti12poster.jpg";
import El2Poster from "../../../Assets/Autokriti12/ElectrionicsPoster.jpg"
import Sof2Poster from "../../../Assets/Autokriti12/Software.jpg"
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


  const images=[Au2Poster,El2Poster,Sof2Poster];

  return (
    <>
      <NavBar />
      <div className='about_autokriti-container'>
        <div className='about_autokriti-left'>
          <h2 className='about_autokrit-left-heading'>
            Details of{' '}
            <b className='about_autokrit-left-subheading'> Autokriti 12</b>{' '}
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
          <Link to='/autokriti/register'>
            <button>Register Here!</button>
          </Link>
        </div>
        <div className='about_autokriti-right'>
          {/* <img src={Au2Poster}></img> */}
          
          <Carousel imgNames ={images}/>
        </div>
      </div>
      <div className='about_autokriti-container'>
        <div className='bigbox'>
          <a href='#transmission'>
            <button className='smallbox'>
              <img src={TM}></img>
              <h3>Transmission</h3>
            </button>
          </a>
          <a href='#vd'>
            <button className='smallbox'>
              <img src={VD}></img>
              <h3>Vehicle Dynamics</h3>
            </button>
          </a>
          <a href='#brakes'>
            <button className='smallbox'>
              <img src={BK}></img>
              <h3>Brakes</h3>
            </button>
          </a>
          <a href='#engines'>
            {' '}
            <button className='smallbox'>
              <img src={CV}></img>
              <h3>Engine Overhauling</h3>
            </button>
          </a>
          <a href='#iot'>
            <button className='smallbox'>
              <img src={IOT}></img>
              <h3>IOT</h3>
            </button>
          </a>

          <a href='#ev'>
            <button className='smallbox'>
              <img src={EV}></img>
              <h3>Electric Vehicle</h3>
            </button>
          </a>

          <a href='#softwares'>
            <button className='smallbox'>
              <img src={SW}></img>
              <h3>Softwares</h3>
            </button>
          </a>
        </div>
      </div>
      <RegisterLine />
      <VerticalTimeline />
      <RegisterLine />
      <Footer />
    </>
  )
}

export default Autorkriti12;
