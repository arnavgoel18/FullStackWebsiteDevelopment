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
