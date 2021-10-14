import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="Testimonials-body">
      <div className="Testimonials-vertical"></div> <br />
      <div className="Testimonials-head">TESTIMONIALS</div>
      <div className="Testimonials-vertical"></div><br/><br/><br/>
      <div className="Testimonials-cards">
        <div className="Testimonials-cards13"></div>
        <div className="Testimonials-card2">
          <div className="Testimonials-text"> <br />
            I just wanted to share a quick note and let you know that you guys
            do a really good job. I’m glad I decided to work with you.
            <br /> <br /> 
            <div className="Testimonials-byname"><br/>
              <p id="Testimonials-nameChangedToBlack">-Emilia</p>
            </div>
          </div>
        </div>
        <div className="Testimonials-card13">
          <div className="Testimonials-card1">
            <div className="Testimonials-text"> <br />
              I just wanted to share a quick note and let you know that you guys
              do a really good job. I’m glad I decided to work with you. <br />{" "}
              <br /> <div className="Testimonials-byname"><br/>-Emilia</div>
            </div>
          </div>
          <div className="Testimonials-card3">
            <div className="Testimonials-text">
              <br />
              I just wanted to share a quick note and let you know that you guys
              do a really good job. I’m glad I decided to work with you. <br/>{" "}
              <br /> <div className="Testimonials-byname"><br/>-Emilia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;