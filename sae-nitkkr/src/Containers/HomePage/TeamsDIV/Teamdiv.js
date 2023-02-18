import React from 'react';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import "./TeamDiv.css";
import Aos from"aos";
import nitroximg from "../TeamsDIV/def1.webp"
import accimg from "../TeamsDIV/abc1new.webp"
import autokritiimg from "../../../Assets/TeamAboutUs/Autokriti.jpg"
import"aos/dist/aos.css";

function Teamdiv() {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[])

  // const [open, setOpen] = useState(false);

  function lastworkacc()
  {
  // let acc=document.getElementById("acc");
    window.location.href='/accelerons'
  }
  function lastworknitrox()
  {
  // let nitrox=document.getElementById("nitrox");
  window.location.href='/nitrox'
  }
  function lastworkautokriti()
  {
  window.location.href='/autokriti'
  }
 
  return (
    <>
      {/* <div id="large_box">
   
      <div 
      // data-aos="fade-right"
      data-aos="zoom-in-right"
      data-aos-duration="400"
      data-aos-once="true"
      data-aos-offset="100" id="acc" className="participate" 
      onClick={lastworkacc}
       >
        TEAM <br/>ACCELERONS
      </div>
   
        <div
        //  data-aos="fade-left"
        data-aos="zoom-in-left"
        data-aos-duration="400"
        data-aos-once="true"
        data-aos-offset="100" id="nitrox" className="participate" 
        onClick={lastworknitrox}
       >
      TEAM <br/> NITROX
      </div>
      
    </div> */}

      <section id='timeline'>
        <div
          className='tl-item'
          style={{ cursor: 'pointer' }}
          onClick={lastworkacc}
        >
          <div
            className='tl-bg'
            loading='lazy'
            style={{ backgroundImage: `url(${accimg})` }}
          ></div>

          <div className='tl-year'>
            <div className='f2 heading--sanSerif'>ACCELERONS</div>
          </div>
        </div>

        <div
          className='tl-item'
          style={{ cursor: 'pointer' }}
          onClick={lastworkautokriti}
        >
          <div
            className='tl-bg'
            loading='lazy'
            style={{ backgroundImage: `url(${autokritiimg})` }}
          ></div>

          <div className='tl-year'>
            <div className='f2 heading--sanSerif'>AUTOKRITI</div>
          </div>
        </div>
        <div
          className='tl-item'
          style={{ cursor: 'pointer' }}
          onClick={lastworknitrox}
        >
          <div
            className='tl-bg'
            style={{ backgroundImage: `url(${nitroximg})` }}
            loading='lazy'
          ></div>

          <div className='tl-year'>
            <div className='f2 heading--sanSerif'>NITROX</div>
          </div>
        </div>
      </section>
    </>
  )

}

export default Teamdiv;
