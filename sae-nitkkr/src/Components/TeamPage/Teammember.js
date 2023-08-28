import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { FaGithub, FaMailBulk, FaLinkedin } from "react-icons/fa";

const Teammember = ({ menuData }) => {
  const Wrapper = styled.div`
    .flex-container {
      display: flex;
      /* background-color: "black"; */
      background: rgb(175, 30, 30);
      /* flex-direction: column; */
      flex-wrap: wrap;
      justify-content: center;
      /* gap: 19px; */
      max-width: 700px;
      margin: 0 auto;
      margin-top: 60px;
    }

    .col {
      width: 100%;
      max-width: 380px;
      border: 1px solid #eee;
      border-radius: 15px;

      padding: 12px;
      /* background-color: #fff; */
      box-shadow: 1px 1px 16px -6px rgba(0, 0, 0, 0.5);
    }

    .card img {
      /* width: 100%; */
      max-width: 350px;

      /* position: cover; */
      /* height: auto; */
    }

    .img-placeholder {
      position: relative;
      max-height: 250px;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 1px 1px 16px -6px rgba(0, 0, 0, 0.75);
    }

    h3 {
      font-weight: 500;
      margin-top: 10px;
    }

    p {
      font-weight: 400;
    }

    a {
      color: #888;
      text-decoration: none;
    }

    a:hover {
      color: inherit;
    }

    .outerdiv {
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .icon {
      margin-right: 10px;
    }
    @media (max-width: 768px) {
      .flex-container {
        display: flex;
        /* margin-left: -330px; */

        background-color: black;
      }

      .img {
        background-color: blue;
      }
    }
  `;

  return (
    <>
      <div className="grid">
        <ul id="hexGrid">
          {menuData.map((currElem) => {
            return (
              <li className="hex" key={currElem.id}>
                <div className="hexIn">
                  <a className="hexLink" href="#">
                    <Popup
                      trigger={
                        <div
                          className="img"
                          style={{
                            backgroundImage: `url("${currElem.image}")`,
                          }}
                        ></div>
                      }
                      position=" center"
                    >
                      <Wrapper>
                        <div className="flex-container">
                          <div className="col card">
                            <div className="img-placeholder">
                              <img src={currElem.image} alt="Team Member" />
                            </div>
                            <div className="outerdiv">
                              <h3>{currElem.name}</h3>
                              <p>
                                <b>Role:</b> Web Developer
                              </p>
                              <p>
                                <b>Graduation:</b> 2023
                              </p>
                              <p>
                                <b>Branch:</b> IT
                              </p>
                              <p>
                                <b>Department:</b> DAQ•WebD
                              </p>
                              <div>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="#"
                                >
                                  <FaGithub className="icon" />
                                </a>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="#"
                                >
                                  <FaMailBulk className="icon" />
                                </a>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="#"
                                >
                                  <FaLinkedin className="icon" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Wrapper>
                    </Popup>
                    <h1 id="demo1">{currElem.name}</h1>
                    <p id="demo2">{currElem.branch}</p>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Teammember;
