import React from "react";
import "../src/testimonials.css";

function Testimonials() {
  return (
    <>
      <div className="vertical"></div> <br />
      <div className="head">TESTIMONIALS</div>
      <div className="vertical"></div>
      <div className="cards">
        <div className="card2">
          <div className="text"> <br />
            I just wanted to share a quick note and let you know that you guys
            do a really good job. I’m glad I decided to work with you.
            <br /> <br /> <div className="byname">-Emilia</div>
          </div>
        </div>
        <div className="card13">
          <div className="card1">
            <div className="text"> <br />
              I just wanted to share a quick note and let you know that you guys
              do a really good job. I’m glad I decided to work with you. <br />{" "}
              <br /> <div className="byname">-Emilia</div>
            </div>
          </div>

          <div className="card3">
            <div className="text">
            <br />
              I just wanted to share a quick note and let you know that you guys
              do a really good job. I’m glad I decided to work with you. <br />{" "}
              <br /> <div className="byname">-Emilia</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
