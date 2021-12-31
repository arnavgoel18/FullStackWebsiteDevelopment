import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./TeamDiv.css";

function Teamdiv() {

  const [open, setOpen] = useState(false);

  function lastworkacc()
  {
  // let acc=document.getElementById("acc");
    window.location.href='https://www.saenitkurukshetra.in/accelerons'
  }
  function lastworknitrox()
  {
  // let nitrox=document.getElementById("nitrox");
  window.location.href='https://www.saenitkurukshetra.in/nitrox'
  }
 
  return(
   <div id="large_box">
      <div id="acc" className="participate" onClick={lastworkacc} >
        TEAM <br/>ACCELERONS
      </div>
        <div id="nitrox" className="participate" onClick={lastworknitrox} >
      TEAM <br/> NITROX
      </div>
    </div>
 )

}

export default Teamdiv;
