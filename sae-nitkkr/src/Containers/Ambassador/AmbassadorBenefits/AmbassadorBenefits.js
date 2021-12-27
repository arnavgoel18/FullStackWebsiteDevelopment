import React from 'react'
import "./AmbassadorBenefits.css";

function AmbassadorBenefits(props) {
  return (
    <div className="benefitsBody">
        <div className='upperPart'>
     <div className='number'>{props.number}</div>
     <h3 className='benefitHeading'>{props.heading}</h3>
     </div>
     <div className='benefitContent'>{props.content}</div>
    </div>
  );
}

export default AmbassadorBenefits;
