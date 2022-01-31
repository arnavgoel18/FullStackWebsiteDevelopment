import React from "react";
import { Link } from "react-router-dom";
import "./AutokritiEvent.css";

function AutokritiEvent() {
  return (
    <>
      <div className="AutokritiEvent">
        <div className="AutoKritiEvent-text1">Sat, 12 - Feb Onwards</div>
        <div>
          <div
            className="AutoKritiEvent-text2"
            style={{ marginBottom: "20px" }}
          >
            e-Autokriti 2.0
          </div>
          <div className="AutoKritiEvent-text3">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Is Here!!{" "}
          </div>
        </div>
        <div className="AutokritiEvent-button">
          <div className="AutokritiEvent-button">
            <Link to="/autokriti/register" target="_blank">
              <button className="AutokritiEvent-button1">Register Here</button>
            </Link>
            <Link to="/autokriti?ambassador">
              <button className="AutokritiEvent-button2">What is it ?</button>
            </Link>
          </div>
          {/* <div >
          
          </div> */}
        </div>
      </div>
    </>
  );
}

export default AutokritiEvent;
