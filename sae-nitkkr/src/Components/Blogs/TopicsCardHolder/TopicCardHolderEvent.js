// Not Removing The Commented Code Because Of use oF RwebShare Which can be used later on
import React from "react";
import "./TopicCardHolderEvent.css";
import { RWebShare } from "react-web-share";
function TopicsCardHolderEvent(props) {
  return (
    <div id="card_container">
      <div id="card-image">
        <img src={props.srcs} id="daq_blog_image" />
      </div>
      <div id="card-title">{props.eventdata}</div>
      <div id="card-title">{props.eventtopic}</div>
      <div id="card-title">{props.eventdate}</div>
      <div id="card-title">{props.Topic}</div>

      <div id="card-actions">
        <div id="shareincard">
          <div id="shareincard_image">
            {/* <RWebShare
              data={{
                text: 'You are sharing link of your favourite blog.',
                url: `${props.shareUrl}`,
                title: `${props.title}`,
              }}
              onClick={() => console.log('shared successfully!')}
            >
              <img
                id='blog_embed_shareimage'
                alt='clap_embed_shareimage'
                src='https://img.icons8.com/ios/50/000000/forward-arrow.png'
              />
            </RWebShare> */}

            {/* <a href='/home'>
             <img
              id="blog_embed_shareimage"
              alt="clap_embed_shareimage"
              src="https://img.icons8.com/ios/50/000000/forward-arrow.png"/>
              </a> */}
          </div>
          {/* <div id='shareincard_title'>Share</div> */}
          {/* <img src="https://img.icons8.com/material-outlined/50/000000/planner.png"/> */}
        </div>
        <div id="card_date">
          <div id="card_date_image">
            {/* <a href='/home'>
              <img
                id='blog_embed_calender'
                alt='blog_embed_calender'
                src='https://img.icons8.com/material-outlined/50/000000/planner.png'
              />
            </a> */}
          </div>
          {/* <div id='card_date_title'>{props.date}</div> */}
        </div>
      </div>
    </div>
  );
}

export default TopicsCardHolderEvent;
