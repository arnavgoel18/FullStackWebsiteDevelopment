import React,{useRef} from "react";
import "./Autokirtee12.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGearFill } from "react-icons/bs";
import { IoCarOutline } from "react-icons/io5";
import { MdEdgesensorHigh } from "react-icons/md";
import { GiGears } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import autokriti12poster from "../../../Assets/Autokriti12/Autokriti12poster.jpg"
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

function Autokirtee12() {
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
  return (
    <>
      <div className="Autokirtee12_popup_main">
        <div className="Autokirtee12_outer">
          <div className="Autokirtee12_title">
            <p>AUTOKRITI 12.0</p>
          </div>
          <div className="Autokirtee12_text">
            <p>
              he main body of a book or other piece of writing, as distinct from
              other material such as notes, appendices, and illustrations: "the
              pictures are clear and relate well to the text" synonyms: words ·
              wording · subject matter · content · contents · body · main body ·
            </p>
          </div>
          <div className="Autokirtee12_rest">
            <div className="Autokirtee12_left">
            <div className="Autokirtee12_content">
                <div className="Autokirtee12_content_left">
                  <div className="Autokirtee12_content_list">
                    <div className="Autokirtee12_content_list_icon">
                      <img src={TM} style={{ height: "20px", width: "20px" }} />
                    </div>
                    <p> Transmission</p>
                  </div>
                  <div className="Autokirtee12_content_list">
                    <IoCarOutline />
                    <p> Vehical Dynamics</p>
                  </div>
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
                    <img src={ANS} style={{ height: "20px", width: "20px" }} />
                    <p> Ansys</p>
                  </div>
                </div>
                <div className="Autokirtee12_content_right">
                  <div className="Autokirtee12_content_list">
                    <img src={OH} style={{ height: "20px", width: "20px" }} />
                    <p>Overhauling of engines</p>
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
              <br/><br/>
             
            </div>
            

            <div className="Autokirtee12_img_container">
              <img
              src={autokriti12poster}
              alt=""
                className="Autokirtee12_img"
              />
            </div>
          </div>
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
                    COMMUNICATION PROTOCOLS<br/>
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
              <div className="Autokirtee12_buttons">
                <a href="/autokriti12">
                  {" "}
                  <button type="button" className="Autokirtee_12_button">
                    MORE INFORMATION
                  </button>
                </a>
                <a href="/autokriti/register">
                  <button type="button" className="Autokirtee_12_button">
                    REGISTER NOW
                  </button>
                </a>
              </div>
        </div>
      </div>
    </>
  );
}

export default Autokirtee12;
