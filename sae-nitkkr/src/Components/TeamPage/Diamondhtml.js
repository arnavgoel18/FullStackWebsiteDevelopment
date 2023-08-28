import React, { useState } from "react";
import Teammember from "./Teammember";
import Menu from "./Teamapi.js";
import { createGlobalStyle } from "styled-components";
import "./nav.css";

const Diamondhtml = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => filterItem("it")}>
            Core
          </button>
          <button className="btn-group__item" onClick={() => filterItem("dac")}>
            IT
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("core")}
          >
            DAC
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>

      <section className="sec">
        <div className="container">
          <div className="row flex-center sm-no-flex">
            <div className="pull-right sm-no-float col-md-8">
              <ul className="team-members">
                <li
                  style={{ textDecoration: "none", listStyleType: "none" }}
                  className="clearfix"
                >
                  <Teammember menuData={menuData} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Diamondhtml;
