import React from "react";
import "./AutokritiEvent.css";

function AutokritiEvent() {
  return (
    <>
      <div className="AutokritiEvent">
        <div className="AutoKritiEvent-text1">Sat, 12Feb Onwards</div>
        <div>
        <div className="AutoKritiEvent-text2" style={{marginBottom: "20px"}}>
          <i>e-Autokriti 2.0 </i>
        </div>
        <div className="AutoKritiEvent-text3">
          <i>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Is
            Here!!{" "}
          </i>
        </div>
        </div>
        <div className="AutokritiEvent-button">
          <div className="AutokritiEvent-button">
            <button className="AutokritiEvent-button1"><i>Register Here </i></button>
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
