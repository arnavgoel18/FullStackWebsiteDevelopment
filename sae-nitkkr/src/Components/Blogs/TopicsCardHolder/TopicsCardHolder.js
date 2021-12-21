import React from 'react'
import './TopicsCardHolder.css'
// import daq from '../src/Cards Images/daq.png'
// import brakes from '../src/Cards Images/brakes.png'
function TopicsCardHolder(props) {
  return (
    <div id="card_container">
      <div id="card-image">
          <img src={props.srcs} id="daq_blog_image"/>
      </div>
      <div id="card-title">
          {props.title}
      </div>
      {/* <img src="https://img.icons8.com/ios/50/000000/forward-arrow.png"/> */}
      <div id="card-actions">
          <div id="shareincard">
              <div id="shareincard_image">
              <a href='/home'>
             <img
              id="blog_embed_shareimage"
              alt="clap_embed_shareimage"
              src="https://img.icons8.com/ios/50/000000/forward-arrow.png"/>
              </a>
              </div>
              <div id="shareincard_title">
               Share
              </div>
              {/* <img src="https://img.icons8.com/material-outlined/50/000000/planner.png"/> */}
          </div>
          <div id="card_date">
          <div id="card_date_image">
              <a href='/home'><img
              id="blog_embed_calender"
              alt="blog_embed_calender"
              src="https://img.icons8.com/material-outlined/50/000000/planner.png"/>
              </a>
              </div>
              <div id="card_date_title">
               3/09/21
              </div>
          </div>
      </div>
    </div>
  )
}

export default TopicsCardHolder
