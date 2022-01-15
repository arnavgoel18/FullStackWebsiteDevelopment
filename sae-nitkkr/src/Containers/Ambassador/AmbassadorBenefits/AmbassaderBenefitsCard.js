import React from "react";
import "./AmbassaderBenefitsCard.css";

function AmbassadorBenefitsCard(props) {
  return (
    <div className="AmbassadorBenefitsCard-benefitsBody">
      <div className="AmbassadorBenefitsCard-upperPart">
        <div className="AmbassadorBenefitsCard-number">{props.number}</div>
        <h3 className="AmbassadorBenefitsCard-benefitHeading">{props.heading}</h3>
      </div>
      <div className="AmbassadorBenefitsCard-benefitContent">{props.content}</div>
    </div>
  );
}

export default AmbassadorBenefitsCard;
