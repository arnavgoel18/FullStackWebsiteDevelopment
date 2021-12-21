import React, {useState} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './PhoneShareAndClap.css'
function Clapmobile() {
  
    const [frequency,setfrequency]=useState(0);
    function clap_increase()
{
    let k=frequency;
    setfrequency(k+1);
}
return (
      <Router>
    <div id="clapmobile_inside">
        <div id="clapmobile_bigbox">
            <div id="clapmobile_first">
            <div id="clapmobile_first_white">
            <img 
          id="clapmobile_embed_clapimage_white"
          alt="clapmobile_embed_clapimage_white"
          src="https://img.icons8.com/ios/50/000000/applause.png"/>
            </div>
                <div id="clapmobile_first_frequency">{frequency}</div>
            </div>
            <div id="clapmobile_second">
                <div id="clapmobile_second_black">
                <img
          id="clapmobile_embed_clapimage_black"
          alt=" clapmobile_embed_clapimage_black"
          onClick={clap_increase}
          src="https://img.icons8.com/ios-filled/50/000000/applause.png"/>
                </div>
                <div id="clapmobile_second_claptext">Clap</div>
                <div id="clapmobile_second_share">

                <Link to='/home'><img
              id="clapmobile_embed_shareimage"
              alt="clapmobile_embed_shareimage"
              src="https://img.icons8.com/ios-filled/50/000000/forward-arrow.png"
            /> </Link>
                </div>
            </div>
        </div>
      {/* <hr/> */}
    </div>
    </Router>
    
  )
}

export default Clapmobile;
