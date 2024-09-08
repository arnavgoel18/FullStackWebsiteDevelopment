//Information page for Autokriti 2.0 which was created a Day Before
import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Autokriti12.css";
import { GrCircleInformation } from "react-icons/gr";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import Carousel from "../../../Components/Carousel/Carousel";

//These are autokriti 13 posters
import Au2Poster from "../../../Assets/Autokriti13/cv-ev posters (2).webp";
import El2Poster from "../../../Assets/Autokriti13/iot posters (1).webp"
import Sof2Poster from "../../../Assets/Autokriti13/software posters (1).webp"

//aut0kriti 13poster
import autokriti13 from "../../../Assets/CheckOurEvents/autokriti13.jpg"
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
  //const images=[autokriti13];

  return (
    <>
      <NavBar />
      <div className='about_autokriti-container'>
        <div className='about_autokriti-left'>
          <h2 className='about_autokrit-left-heading'>
            Details of{' '}
            <b className='about_autokrit-left-subheading'> Autokriti 14</b>{' '}
            Workshop
          </h2>
          <p>
          Interested in automobiles but unsure where to begin? Let this be your
          gateway to the future of mobility. Join us for Autokriti 14.0 and
          become a part of the revolution
          <br />
          <br />
          From dismantling a 2-stroke engine of a scooter in Autokriti 1.0 to
          exploring the intricacies of a Porsche Cayenne engine in Autokriti
          11.0, we have consistently aligned ourselves with cutting-edge
          innovation. Our commitment to staying abreast of evolving technology
          has solidified our status as North India's largest automotive
          workshop. In our ongoing pursuit of knowledge sharing, we proudly
          present Autokriti 14.0.
          <br />
          <br />
          This year, we're set to explore the future of mobility under the theme
          <b> Fueling the Future </b>, focusing on a journey that’s safe,
          steady, and insightful
          <br />
          <br />
          Autokriti 14.0 features four dynamic workshops: Combustion Vehicles
          (CV), Electric Vehicles (EV), Internet of Things (IoT), and Software.
          Each workshop is meticulously designed to offer both theoretical
          insights and hands-on practical experience, ensuring a comprehensive
          understanding of the respective fields.
          <br />
          <br />
          You'll have the opportunity to engage with physical models for a more
          personalized learning experience. Additionally, the event will include
          guest lectures by esteemed industry experts. Dive into the future with
          us and explore the content of these workshops for more details.
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
