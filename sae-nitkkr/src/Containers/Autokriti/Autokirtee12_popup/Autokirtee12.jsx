import React from "react";
import "./Autokirtee12.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGearFill } from "react-icons/bs";
import { IoCarOutline } from "react-icons/io5";
import { MdEdgesensorHigh } from "react-icons/md";
import { GiGears } from "react-icons/gi";

function Autokirtee12() {
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
                    <BsGearFill className="Autokirtee12_content_list_icon" />
                    <p> Transmission</p>
                  </div>
                  <div className="Autokirtee12_content_list">
                    <IoCarOutline className="Autokirtee12_content_list_icon" />
                    <p> Vehical Dynamics</p>
                  </div>
                  <div className="Autokirtee12_content_list">
                    <BsGearFill className="Autokirtee12_content_list_icon" />
                    <p> Brakes</p>
                  </div>
                </div>
                <div className="Autokirtee12_content_right">
                  <div className="Autokirtee12_content_list">
                    <BsGearFill className="Autokirtee12_content_list_icon" />
                    <p>Overhauling of engines</p>
                  </div>
                  <div className="Autokirtee12_content_list">
                    <GiGears className="Autokirtee12_content_list_icon" />
                    <p> Drive train</p>
                  </div>
                  <div className="Autokirtee12_content_list">
                    <MdEdgesensorHigh className="Autokirtee12_content_list_icon" />
                    <p>DAQ</p>
                  </div>
                </div>
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

            <div className="Autokirtee12_img_container">
              <img
                src="https://www.picamon.com/wp-content/uploads/2020/10/Picamon-northern-lights-0-5f8b42955e1ad"
                alt=""
                className="Autokirtee12_img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Autokirtee12;
