import React from "react";
import { Link } from "react-router-dom";

import Donate from "../../Assets/CrowdFunding/donate.png";
import "./FundingIntro.css";

export default function CrowdFunding() {
  return (
    <>
      <div className="cf_container">
        <div className="cf_car">
          <div className="cf_text">
            <div className="cf_text1">SAE</div>
            <div className="cf_text2">
            we have always aim to uplift and institute’s name where we go. Despite the adverse effects from pandemic the team has been able to raise the club back to its formal level but we require your support to achieve greater glory for the institute team nitrox rocks requires 5 lakhs and Team Accelerons  requires 3 lakhs to achieve the same. So help us raise 8 lakhs in 45 days and be a part of the hustle.
              <div className="button">Read More</div>
            </div>
          </div>
          <div className="cf_image">
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
          </div>
        </div>
        <div className="cf_help">
          <div className="cf_helpText">
            <b>help us achieve our goal</b>
            <button className="cf_button">
              <a href="/crowdfunding#funding_form">
                {" "}
                <b>DONATE</b>
              </a>
            </button>
          </div>
          <div className="cf_helpImg">
            <img src={Donate} alt="Steps" />
          </div>
        </div>
      </div>
    </>
  );
}
