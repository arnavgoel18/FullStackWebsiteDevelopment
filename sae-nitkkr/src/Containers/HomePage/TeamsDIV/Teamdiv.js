import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./TeamDiv.css";

function Teamdiv() {
  function lastworkacc()
  {
  let acc=document.getElementById("acc");

    // console.log("navneet");
    window.location.href='/accelerons'
    
    
 
}
function lastworknitrox()
{

  let nitrox=document.getElementById("nitrox");

  window.location.href='/nitrox'
    //  console.log("nishant");
 
}
  // const [open, setOpen] = useState(false);
 return(
   <div id="large_box">
     {/* <Link to="/accelerons" onClick={() => setOpen(false)}> */}
     <div id="acc" className="participate" onClick={lastworkacc} >
      {/* <div id="acctext" className="heading"> TEAM ACCLERONS</div> */}
      TEAM <br/>ACCELERONS
     </div>
     {/* </Link> */}
     {/* <Link to="/nitrox" onClick={() => setOpen(false)}> */}
     <div id="nitrox" className="participate" onClick={lastworknitrox} >
     {/* <div id="acctext" className="heading">TEAM NITROX</div> */}
     TEAM <br/> NITROX
     </div>
    {/* </Link> */}
   </div>
 )
}

export default Teamdiv;
