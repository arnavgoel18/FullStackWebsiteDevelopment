import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

/* Import Images */
import nitroxCap from "../../Assets/ProfIncharges/nitroxCap.png";
import nitroxVicecap from "../../Assets/ProfIncharges/VicePres.jpg";
import acceleronsCap from "../../Assets/ProfIncharges/acceleronsCap.png";
import acceleronsVicecap from "../../Assets/ProfIncharges/acceleronsViceCap.png";
import "./TeamLeads.css";

function TeamLeads(props) {
  if (props.page == "Nitrox") {
    return (
      <>
        <div className="TeamLeads_div">
          <div className="teamLeadHeading">Our Team Lead</div>
          <div className="teamFlexBox">
          <div className="teamMemberCard">
            <div>
              <img
                src={nitroxCap}
                alt="Team Member Image"
                className="teamMemberPic"
              />
              <div className="teamDetail">
                <div className="teamMemberName">Udit Tripathi</div>
                <div className="teamMemberPosition">Team Captain</div>
              </div>
            </div>

            <div>
              <a href="">{" "}
              <FaEnvelope className="team-icons" /> </a>
              <Link to="https://www.linkedin.com/in/udit-tripathi-265104174"> <FaLinkedin className="team-icons" />{" "}
              </Link>
            </div>
          </div>
          <div className="teamMemberCard">
            <div>
              <img
                src={nitroxVicecap}
                alt="Team Member Image"
                className="teamMemberPic"
              />
              <div className="teamDetail">
                <div className="teamMemberName">Ritik Yadav</div>
                <div className="teamMemberPosition">Team Vice Captain</div>
              </div>
            </div>

            <div>
              <a href="">{" "}
              <FaEnvelope className="team-icons" /> </a>
              <Link to="https://www.linkedin.com/in/ritik-yadav6097"> <FaLinkedin className="team-icons" />{" "}
              </Link>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  } else if (props.page == "Accelerons") {
    return (
      <>
        <div className="TeamLeads_div">
          <div className="teamLeadHeading">Our Team Lead</div>
          <div className="teamFlexBox">
          <div className="teamMemberCard">
            <div>
              <img
                src={acceleronsCap}
                alt="Team Member Image"
                className="teamMemberPic"
              />
              <div className="teamDetail">
                <div className="teamMemberName">Aakash Singh Bisht</div>
                <div className="teamMemberPosition">Team Captain</div>
              </div>
            </div>

            <div>
              <a href="">{" "}
              <FaEnvelope className="team-icons" /> </a>
              <Link to="https://www.linkedin.com/in/aakash-singh-bisht-aaa3b0176"> <FaLinkedin className="team-icons" />{" "}
              </Link>
            </div>
          </div>
          <div className="teamMemberCard">
            <div>
              <img
                src={acceleronsVicecap}
                alt="Team Member Image"
                className="teamMemberPic"
              />
              <div className="teamDetail">
                <div className="teamMemberName">Amit Rawat</div>
                <div className="teamMemberPosition">Team Vice Captain</div>
              </div>
            </div>

            <div>
              <a href='mailto:amitsrawat2000@gmail.com'>{" "}
              <FaEnvelope className="team-icons" /> </a>
              <Link to="https://www.linkedin.com/in/amit-rawat-a628b01a1"> <FaLinkedin className="team-icons" />{" "}
              </Link>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default TeamLeads;
