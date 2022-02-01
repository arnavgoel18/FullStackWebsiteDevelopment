import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./TeamDiv.css";
import Aos from"aos";
import"aos/dist/aos.css";

function Teamdiv() {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[])

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
      <div data-aos="fade-right"
      data-aos-duration="200"
      data-aos-offset="300" id="acc" className="participate" onClick={lastworkacc} >
        TEAM <br/>ACCELERONS
      </div>
        <div data-aos="fade-left"
        data-aos-duration="200"
      data-aos-offset="300" id="nitrox" className="participate" onClick={lastworknitrox} >
      TEAM <br/> NITROX
      </div>
    </div>
 )

}

export default Teamdiv;
