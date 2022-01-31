import React from "react";
import "./AutokritiEvent.css";

function AutokritiEvent() {
  return (
    <>
      <div className="AutokritiEvent">
        <div className="AutoKritiEvent-text1">Sat, 12 - Feb Onwards</div>
        <div>
        <div className="AutoKritiEvent-text2" style={{marginBottom: "20px"}}>
          e-Autokriti 2.0
        </div>
        <div className="AutoKritiEvent-text3">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Is
            Here!!{" "}
        </div>
        </div>
        <div className="AutokritiEvent-button">
          <div className="AutokritiEvent-button">
            <button className="AutokritiEvent-button1">Register Here</button>
            <button className="AutokritiEvent-button2">What is it ?</button>
          </div>
          {/* <div >
          
          </div> */}
        </div>
      </div>
    </>
  );
}

export default AutokritiEvent;
