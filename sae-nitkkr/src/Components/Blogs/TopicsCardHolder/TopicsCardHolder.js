import './TopicsCardHolder.css'
import React from "react";
import image from '.topiccardholder1/.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="TopicsCardHolder-container">
        <Topic image={image} title1="DAQ and " title2="Multicontrollers" date="" />
        {/* <Session
      image={image}
      /> */}
      </div>

      {/* <div className="container">
      <Session
      image={image}
      />
      <Session
      image={image}
      />
    </div> */}
    </>
  );
}

function Topic(props) {
  return (
    <>
      <body>
        <div className="TopicsCardHolder-card">
          <img className="TopicsCardHolder-image" src={props.image} alt="" />

          <h1 className="TopicsCardHolder-title">
            <b>{props.title1}</b>
            <br />
            <b>{props.title2}</b>
          </h1>

          <footer className="TopicsCardHolder-footer">
            <ul className="TopicsCardHolder-footer-list">
              <li>
                <FontAwesomeIcon className="TopicsCardHolder-fontawesome" icon={faShare} />{" "}
                &nbsp; share
              </li>
              <li className="TopicsCardHolder-fontaweome1">
                <FontAwesomeIcon className="TopicsCardHolder-fontawesome1" icon={faCalendar} />
                &nbsp; {props.date}
              </li>
            </ul>
          </footer>
        </div>
      </body>
    </>
  );
}

export default App;
