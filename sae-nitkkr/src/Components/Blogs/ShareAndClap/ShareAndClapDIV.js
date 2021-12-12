import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import "./Clap.css";

function Clap() {
    const[frequency,setfrequency]=useState(0);
    function clap_increase()
{
    let k=frequency;
    setfrequency(k+1);
}
  return (
    <Router>
    <div id="clap_inside">
      <div id="clap_bigbox">
        <div id="clap_first">
          <div id="clap_first_shareimage">
            <Link to='/home'><img
              id="clap_embed_shareimage"
              alt="clap_embed_shareimage"
              src="https://img.icons8.com/ios-filled/50/000000/forward-arrow.png"
            /> </Link>
          </div>
          <div id="clap_first_sharetitle">
            <h1 id="clap_sharepost">
              <b>Share Post</b>{" "}
            </h1>
          </div>
        </div>
        <div id="clap_second">
          <div id="clap_second_clapimage_black">
          <img
          id=" clap_embed_clapimage_black"
          alt=" clap_embed_clapimage_black"
          onClick={clap_increase}
          src="https://img.icons8.com/ios-filled/50/000000/applause.png"/>
          <div id="clap_clap">Clap</div>
          </div>
          <div id="clap_second_clapimage_white">
          <img id="clap_straight_hand" alt="clap_straight_hand" src="https://img.icons8.com/fluency-systems-regular/48/000000/hand.png"/>
          <img 
          id="clap_embed_clapimage_white"
          alt="clap_embed_clapimage_white"
          src="https://img.icons8.com/ios/50/000000/applause.png"/>
           <div id="clap_feed_data">{frequency}</div>
          </div>
        </div>
        <div id="clap_third">
          <div id="clap_third_report_title">
            <h1 id="clap_report_an_issue">
              <b>Report an Issue</b>{" "}
            </h1>
          </div>
        </div>
        <div id="clap_fourth">
          <div id="clap_fourth_reportcontent">
            If you found some<br/> misinformation or<br/> inappropriate content, you<br/> can
            report to us and we<br/> will recitify it.
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}
export default Clap;
