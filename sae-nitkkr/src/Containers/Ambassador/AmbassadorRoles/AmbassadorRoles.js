import React from 'react'
import "./AmbassadorRoles.css";

function AmbassadorRoles(props) {
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

export default AmbassadorRoles;
