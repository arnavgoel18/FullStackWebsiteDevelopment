import React from "react";
import "./Cards.scss";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
function Card(props) {
  return (
    <>
      <div class="card-wrapper">
        <div class="card profile-two">
          <div class="card-image profile-img--two">
            <img src={props.img} alt="profile two" />
          </div>

          <ul class="social-icons">
            <li>
              <a href={props.LinkedIn} target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href={"mailto:" + props.Email}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                  color: "black",
                  fontWeight: 600,
                }}
              >
                <MdOutlineMail className="fab" />
              </a>
            </li>
            {props.github && (
              <li>
                <a
                  href={props.github}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                    color: "black",
                    fontWeight: 600,
                  }}
                  target="_blank"
                >
                  <FaGithub className="fab" />
                </a>
              </li>
            )}
          </ul>

          <div
            class={
              props.metadata && props.metadata.position2
                ? "details jane len"
                : "details jane "
            }
          >
            <h2>{props.name}</h2>
            {props.metadata && (
              <span className="position1">{props.metadata.position1}</span>
            )}
            {props.metadata && props.metadata.position2 && (
              <span className="position2">{props.metadata.position2}</span>
            )}
            {props.Department && (
              <span className="Department">{props.Department}</span>
            )}
            <span className="team">{props.Team}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
