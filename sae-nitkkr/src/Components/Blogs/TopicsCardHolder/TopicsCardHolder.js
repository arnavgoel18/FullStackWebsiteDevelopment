import "./TopicsCardHolder.css";
import React from "react";
import image from "./images1.png";

function TopicContainer() {
  return (
    <>
      <div className="container">
        <TopicCard image={image} title1="DAQ and " title2="Multicontrollers" />
        <TopicCard image={image} />
      </div>

      <div className="container">
        <TopicCard image={image} />
        <TopicCard image={image} />
      </div>
    </>
  );
}

function TopicCard(props) {
  return (
    <>
      <body>
        <div className="card">
          <img className="image" src={props.image} alt="" />
          <div className="container">
            <h1 className="title">
              <b>{props.title1}</b>
              <br />
              <b>{props.title2}</b>
            </h1>
          </div>
          <footer className="footer">
            <ul className="fotter-list">
              <li>
                <i className="fa fa-calendar-o" aria-hidden="true"></i>share
              </li>
              <li>
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                {props.date}
              </li>
            </ul>
          </footer>
        </div>
      </body>
    </>
  );
}

export default TopicContainer;
