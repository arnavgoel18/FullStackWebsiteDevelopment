import React from "react";
import { useRef, useState } from "react";
import Carousel from "../../../Components/Carousel/Carousel";
import "./AutokritiCard.css";

//icons
import SW from "../../../Assets/Tech/sw.png";
// import TM from "../../../Assets/Tech/tm.png";
import OH from "../../../Assets/Tech/oh.png";
import SP from "../../../Assets/Tech/sp.png";
import ST from "../../../Assets/Tech/st.png";
import BK from "../../../Assets/Tech/bk.png";
import IOT from "../../../Assets/Tech/iot.png";
import BMS from "../../../Assets/Tech/bms.png";
import AC from "../../../Assets/Tech/ac.png";
import MT from "../../../Assets/Tech/mt.png";
import EG from "../../../Assets/Tech/eg.png";
import ET from "../../../Assets/Tech/et.png";
import MTC from "../../../Assets/Tech/mtc.png";
import ANS from "../../../Assets/Tech/ans.png";
import CT from "../../../Assets/Tech/ct.png";
import NX from "../../../Assets/Tech/nx.png";
import PCB from "../../../Assets/Tech/pcb.png";
import { GiConsoleController, GiGears } from "react-icons/gi";
import { MdEdgesensorHigh } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";

//poster
//import autokriti12poster from "../../../Assets/Autokriti12/Autokriti12poster.jpg";
import autokriti13poster from "../../../Assets/CheckOurEvents/coming soon copy.jpg";
import cv from "../../../Assets/Autokriti13/cv-ev posters.webp";
import iotposter from "../../../Assets/Autokriti13/iot posters.webp";
import softwareposter from "../../../Assets/Autokriti13/software posters.webp";

export default function AutokritiCard() {
  let software = useRef();
  let combustion = useRef();
  let iot = useRef();
  let ev = useRef();

  const posters = [autokriti13poster, cv, iotposter, softwareposter];

  const [poster_idx, setPoster_idx] = useState(0);
  const hello = () => {
    software.current.style.display == "none"
      ? (software.current.style.display = "block")
      : (software.current.style.display = "none");
    combustion.current.style.display = "none";
    iot.current.style.display = "none";
    ev.current.style.display = "none";
    // software.current.style.display=="block"?software.current.style.display="none":software.current.style.display="block"
  };
  const hello2 = () => {
    combustion.current.style.display == "none"
      ? (combustion.current.style.display = "block")
      : (combustion.current.style.display = "none");
    software.current.style.display = "none";
    ev.current.style.display = "none";
    iot.current.style.display = "none";
  };
  const hello3 = () => {
    iot.current.style.display == "none"
      ? (iot.current.style.display = "block")
      : (iot.current.style.display = "none");
    software.current.style.display = "none";
    ev.current.style.display = "none";
    combustion.current.style.display = "none";
  };
  const hello4 = () => {
    ev.current.style.display == "none"
      ? (ev.current.style.display = "block")
      : (ev.current.style.display = "none");
    software.current.style.display = "none";
    iot.current.style.display = "none";
    combustion.current.style.display = "none";
  };
  return (
    <>
      <div className="AutokritiCard-Container">
        <div className="AutokritiCard-Heading">
          <h1 className="CheckOurEvents-heading">
            Autokriti <b className="CheckOurEvents-subheading">14.0</b>
          </h1>
        </div>
        <div className="AutokritiCard-Intro">
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
        </div>
        <div className="AutokritiCard-Body">
          <div className="AutokritiCard-Icons">
            <div className="AutokritiCard-Icons-Left">
              <div className="Autokirtee12_content_list">
                <img src={BK} style={{ height: "20px", width: "20px" }} />
                <p> Brakes</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={SW} style={{ height: "20px", width: "20px" }} />
                <p> Solidworks</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={CT} style={{ height: "20px", width: "20px" }} />
                <p>Catia</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={SP} style={{ height: "20px", width: "20px" }} />
                <p> Suspension</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={BMS} style={{ height: "20px", width: "20px" }} />
                <p>BMS</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={MT} style={{ height: "20px", width: "20px" }} />
                <p> Motor</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={PCB} style={{ height: "20px", width: "20px" }} />
                <p> PCB Designing</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={ET} style={{ height: "20px", width: "20px" }} />
                <p> EV Powertrain</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={OH} style={{ height: "20px", width: "20px" }} />
                <p>Overhauling of engines</p>
              </div>
            </div>
            <div className="AutokritiCard-Icons-Right">
              <div className="Autokirtee12_content_list">
                <img src={ANS} style={{ height: "20px", width: "20px" }} />
                <p> Ansys</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={NX} style={{ height: "20px", width: "20px" }} />
                <p> NX</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={ST} style={{ height: "20px", width: "20px" }} />
                <p> Steering</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={IOT} style={{ height: "20px", width: "20px" }} />
                <p> IOT</p>
              </div>
              <div className="Autokirtee12_content_list">
                <GiGears />
                <p> Drive train</p>
              </div>
              <div className="Autokirtee12_content_list">
                <MdEdgesensorHigh />
                <p>DAQ</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={AC} style={{ height: "20px", width: "20px" }} />
                <p> Accumulator</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={EG} style={{ height: "20px", width: "20px" }} />
                <p> Engine</p>
              </div>
              <div className="Autokirtee12_content_list">
                <img src={MTC} style={{ height: "20px", width: "20px" }} />
                <p> Motor Controller</p>
              </div>
            </div>
          </div>
          <div className="AutokritiCard-Poster">
            <img src={posters[poster_idx]} loading="lazy" width="100%"></img>
          </div>
        </div>
        <div className="AutokritiCard-Dropdown">
          <div className="Autokirtee12_dropdowns">
            <button
              className="Autokirtee_12_dropdown"
              onMouseEnter={() => setPoster_idx(1)}
              onMouseLeave={() => setPoster_idx(0)}
            >
              <div className="Autokirtee_12_dropdown-text">
                Combustion Vehicle
              </div>
              <div className="Autokirtee_12_icons">
                <IoIosArrowDropdown onClick={hello2} />
              </div>
              <div className="Autokirtee_12_dropdown-content" ref={combustion}>
                <div className="Autokirtee_12_dropdown-content1">
                  Engine <br />
                  Transmission
                  <br />
                  Vehicle Dynamics
                  <br />
                  Suspension <br />
                  Steering <br />
                  Brakes
                  <br />
                  Software Basics
                  <br />
                </div>
              </div>
            </button>
            <button
              className="Autokirtee_12_dropdown"
              onMouseEnter={() => setPoster_idx(1)}
              onMouseLeave={() => setPoster_idx(0)}
            >
              <div className="Autokirtee_12_dropdown-text">
                Electric Vehicle
              </div>
              <div className="Autokirtee_12_icons">
                <IoIosArrowDropdown onClick={hello4} />
              </div>
              <div className="Autokirtee_12_dropdown-content" ref={ev}>
                <div className="Autokirtee_12_dropdown-content1">
                  Battery <br />
                  BMS <br />
                  Motor <br />
                  Motor Controller <br />
                  Power Train <br /> PCB Designing <br />
                </div>
              </div>
            </button>
            <button
              className="Autokirtee_12_dropdown"
              onMouseEnter={() => setPoster_idx(2)}
              onMouseLeave={() => setPoster_idx(0)}
            >
              <div className="Autokirtee_12_dropdown-text">IOT</div>
              <div className="Autokirtee_12_icons">
                <IoIosArrowDropdown onClick={hello3} />
              </div>
              <div className="Autokirtee_12_dropdown-content" ref={iot}>
                <div className="Autokirtee_12_dropdown-content1">
                  COMM PROTOCOLS
                  <br />
                  ARDUINO
                  <br />
                  CANBUS
                  <br />
                  DAQ
                  <br />
                  TELEMETRY
                  <br />
                  PROJECTS
                  <br />
                </div>
              </div>
            </button>
            <button
              className="Autokirtee_12_dropdown"
              onMouseEnter={() => setPoster_idx(3)}
              onMouseLeave={() => setPoster_idx(0)}
            >
              <div className="Autokirtee_12_dropdown-text">Softwares</div>
              <div className="Autokirtee_12_icons">
                <IoIosArrowDropdown onClick={hello} />
              </div>
              <div className="Autokirtee_12_dropdown-content" ref={software}>
                <div className="Autokirtee_12_dropdown-content1">
                  Solidworks <br />
                  Ansys
                  <br />
                  Catia <br />
                  NX
                  <br />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="AutokritiCard-Buttons">
          {/* remove disabled, style and change button content to MORE INFORMATION */}
          <a href="/autokriti12">
            {" "}
            <button
              type="button"
              className="Autokirti_12_button"
              // style={{ backgroundColor: 'Grey' }}
            >
              MORE INFORMATION
            </button>
          </a>

          {/* remove disabled, style and change button content to register NOW */}
          <a href="/autokriti/register">
            <button
              type="button"
              className="Autokirti_12_button"
              style={{ backgroundColor: "lightcoral" }}
            >
              Register NOW !!
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
