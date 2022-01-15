import React from 'react'
import "./AmbassaderRolesCard.css";

function AmbassadorRolesCard(props) {
  return (
    <div className="roleBody">
        <div className='roleupperPart'>
     <div className='rolenumber'>{props.number}</div>
     <h3 className='roleHeading'>{props.heading}</h3>
     </div>
     <div className='roleContent'>{props.content}</div>
    </div>
  );
}

export default AmbassadorRolesCard;
