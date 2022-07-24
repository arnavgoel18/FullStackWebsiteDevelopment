import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./TeamDiv.css";
import Aos from"aos";
import nitroximg from "../TeamsDIV/def1.webp"
import accimg from "../TeamsDIV/abc1new.webp"
import"aos/dist/aos.css";

function Teamdiv() {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[])

  const [open, setOpen] = useState(false);

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
 
  return(<>
  
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




 <section id="timeline"> 

  <div className="tl-item" style={{cursor:"pointer"}} onClick={lastworknitrox}>
    
    <div className="tl-bg"  style={{ backgroundImage: `url($nitroximg)`}}></div>
    
    <div className="tl-year">
      <div  classNAme="f2 heading--sanSerif">2013</div>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
      <div >Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</div>
    </div>

  </div>

  <div className="tl-item" style={{cursor:"pointer"}} onClick={lastworkacc}>
    
    <div className="tl-bg"style={{ backgroundImage: `url(accimg)`}}></div>
    
    <div className="tl-year">
      <div className="f2 heading--sanSerif">2014</div>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
      <div >Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</div>
    </div>

  </div>

  <div className="tl-item" style={{cursor:"pointer"}} onClick={lastworkautokriti}>
    
    <div className="tl-bg" style={{ backgroundImage: `url("https://placeimg.com/801/801/nature")`}}></div>
    
    <div className="tl-year">
      <div  className="f2 heading--sanSerif">2016</div>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
      <div >Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.</div>
    </div>

  </div>




</section>


    </>
 )

}

export default Teamdiv;
