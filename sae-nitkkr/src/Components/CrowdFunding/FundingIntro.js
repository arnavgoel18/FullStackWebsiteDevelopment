import React from "react";
import { Link } from "react-router-dom";
import Car from "../../Assets/CrowdFunding/car.png";
import Donate from "../../Assets/CrowdFunding/donate.png";
import "./FundingIntro.css";

export default function CrowdFunding() {
  return (
    <>
      <div className="cf_container">
        <div className="cf_car">
          <div className="cf_text">
            <div className="cf_text1">hello there</div>
            <div className="cf_text2">
            SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions

We bring our skills to many competitions <br/>
Baja SAE India<br/>
ATVC<br/>
SUPRA India<br/>
Formula Bharat<br/>

<div className="button" >Read More</div>
            </div>
          </div>
          <div className="cf_image">
            <img src={Car} alt="SAE cars" />
          </div>
        </div>
        <div className="cf_help">
          <div className="cf_helpText">
            <b>help us achieve our goal</b>
            <button className="cf_button"><a href="#funding_form"> <b>DONATE</b></a></button>
          </div>
          <div className="cf_helpImg">
            <img src={Donate} alt="Steps" />
          </div>
        </div>
      </div>
    </>
  );
}
