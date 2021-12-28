import React from "react";
import "./AmbassaderBenefitsCard.css";

function AmbassadorBenefitsCard(props) {
  return (
    <div className="benefitsBody">
      <div className="upperPart">
        <div className="number">{props.number}</div>
        <h3 className="benefitHeading">{props.heading}</h3>
      </div>
      <div className="benefitContent">{props.content}</div>
    </div>
  );
}

export default AmbassadorBenefitsCard;
