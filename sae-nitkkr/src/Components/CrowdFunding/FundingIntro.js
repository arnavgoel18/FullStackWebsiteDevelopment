import React from "react";
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
              kjkjasdhldshkhg lkdshlkdlkfd hdkjdbhl;kdfj fsdjp;fjfjfdj
              sfdkhbsdfjhlk slkhsdflkjh
            </div>
          </div>
          <div className="cf_image">
            <img src={Car} alt="SAE cars" />
          </div>
        </div>
        <div className="cf_help">
          <div className="cf_helpText">
            <b>help us achieve our goal</b>
            <button className="cf_button">DONATE</button>
          </div>
          <div className="cf_helpImg">
            <img src={Donate} alt="Steps" />
          </div>
        </div>
      </div>
    </>
  );
}
