import React from 'react'
import { useRef } from 'react';

import './AutokritiCard.css'

//icons
import SW from "../../../Assets/Tech/sw.png";
import TM from "../../../Assets/Tech/tm.png";
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
import { GiGears } from 'react-icons/gi';
import { MdEdgesensorHigh } from 'react-icons/md';
import { IoIosArrowDropdown } from "react-icons/io";

//poster
import autokriti12poster from "../../../Assets/Autokriti12/Autokriti12poster.jpg"


export default function AutokritiCard(){
    let software=useRef();
  let combustion=useRef();
  let iot=useRef();
  let ev=useRef();

  const hello=()=>
  {
    software.current.style.display=="none"?software.current.style.display="block":software.current.style.display="none"
    combustion.current.style.display="none"
    iot.current.style.display="none"
    ev.current.style.display="none"
    // software.current.style.display=="block"?software.current.style.display="none":software.current.style.display="block"
  }
  const hello2=()=>
  {
    combustion.current.style.display=="none"?combustion.current.style.display="block":combustion.current.style.display="none"
    software.current.style.display="none"
    ev.current.style.display="none"
    iot.current.style.display="none"
  }
  const hello3=()=>
  {
    iot.current.style.display=="none"?iot.current.style.display="block":iot.current.style.display="none"
    software.current.style.display="none"
    ev.current.style.display="none"
    combustion.current.style.display="none"
  }
  const hello4=()=>
  {
    ev.current.style.display=="none"?ev.current.style.display="block":ev.current.style.display="none"
    software.current.style.display="none"
    iot.current.style.display="none"
    combustion.current.style.display="none"
  }
    return(
    <>
        <div className='AutokritiCard-Container'>
            <div className='AutokritiCard-Heading'>
                <h1 className="CheckOurEvents-heading">
                    Autokriti <b className="CheckOurEvents-subheading">12.0</b>
                </h1>
            </div>
            <div className='AutokritiCard-Intro'>
                Interested in automobiles, but don’t know where to start? Let this be your first stepping stone to the redefined world of mobility. Join Autokriti 12 and be a part of this remaking. 
                    <br/><br/>
                From overhauling of a 2 stroke engine of a scooter in Autokriti 1 to Porsche Cayenne Engine in Autokriti 11, we have always matched our steps with innovation. It is our determination to keep up with the ever-changing technology that makes us North India’s largest automobile workshop. To continue our endeavour of knowledge sharing, we are here with Autokriti 12. This time it will be a ride on both CV and EV, not a rash one but a safe and steady one.<b> #MobilityRedefined</b>
                <br/><br/>
                There are four workshops in Autokriti 12: CV, EV, IoT and Software. All these workshops will help you create a proper theoretical as well as practical understanding of their domain. You shall get a personalised learning experience on physical models. Along with all these, the workshop will have guest lectures from some reputed dignitaries. Please visit the content of these workshops for more details.
            </div>
            <div className='AutokritiCard-Body'>
                <div className='AutokritiCard-Icons'>
                    <div className='AutokritiCard-Icons-Left'>
                        <div className="Autokirtee12_content_list">
                            <img src={BK} style={{ height: "20px", width: "20px" }} />
                            <p> Brakes</p>
                        </div>
                        <div className="Autokirtee12_content_list">
                            <img src={SW} style={{ height: "20px", width: "20px" }} />
                            <p> Solidworks</p>
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
                            <img src={ET} style={{ height: "20px", width: "20px" }} />
                            <p> EV Powertrain</p>
                        </div>
                        <div className="Autokirtee12_content_list">
                        <img src={OH} style={{ height: "20px", width: "20px" }} />
                        <p>Overhauling of engines</p>
                        </div>
                    </div>
                    <div className='AutokritiCard-Icons-Right'>
                        <div className="Autokirtee12_content_list">
                            <img src={ANS} style={{ height: "20px", width: "20px" }} />
                            <p> Ansys</p>
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
                <div className='AutokritiCard-Poster'>
                    <img src={autokriti12poster} width="100%"></img>
                </div>
            </div>
            <div className='AutokritiCard-Dropdown'>
                <div className="Autokirtee12_dropdowns">
                    <button className="Autokirtee_12_dropdown">
                    <div className="Autokirtee_12_dropdown-text">
                        Combustion Vehicle
                    </div>
                    <div className="Autokirtee_12_icons">
                        <IoIosArrowDropdown onClick={hello2}  />
                    </div>
                    <div className="Autokirtee_12_dropdown-content" ref={combustion}>
                        <div className="Autokirtee_12_dropdown-content1">
                        Engine <br/>
                        Transmission<br/>
                        Vehicle Dynamics<br/>
                        Suspension <br />
                        Steering <br />
                        Brakes<br/>
                        </div>
                    </div>
                    </button>
                    <button className="Autokirtee_12_dropdown">
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
                        DAQ <br />
                        Power Train <br />                     </div>
                    </div>
                    </button>
                    <button className="Autokirtee_12_dropdown">
                    <div className="Autokirtee_12_dropdown-text">IOT</div>
                    <div className="Autokirtee_12_icons">
                        <IoIosArrowDropdown onClick={hello3} />
                    </div>
                    <div className="Autokirtee_12_dropdown-content" ref={iot}>
                        <div className="Autokirtee_12_dropdown-content1">
                        COMM PROTOCOLS<br/>
                        ARDUINO<br/>
                        CANBUS<br/>
                        TELEMETRY<br/>
                        PROJECTS<br/>
                        </div>
                    </div>
                    </button>
                    <button className="Autokirtee_12_dropdown">
                    <div className="Autokirtee_12_dropdown-text">Softwares</div>
                    <div className="Autokirtee_12_icons">
                        <IoIosArrowDropdown onClick={hello} />
                    </div>
                    <div className="Autokirtee_12_dropdown-content" ref={software} >
                        <div className="Autokirtee_12_dropdown-content1" >
                        Solidworks <br/>
                        Ansys
                        </div>
                    </div>
                    </button>
                </div>
            </div>
            <div className='AutokritiCard-Buttons'>
                <a href="/autokriti12">
                    {" "}
                    <button type="button" className="Autokirti_12_button">
                        MORE INFORMATION
                    </button>
                    </a>
                    <a href="/autokriti/register">
                    <button type="button" className="Autokirti_12_button">
                        REGISTER NOW
                    </button>
                </a>
            </div>
        </div>
    </>
    )
}
