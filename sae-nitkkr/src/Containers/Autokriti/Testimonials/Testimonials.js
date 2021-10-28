import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="Testimonials-body">
      <div className="Testimonials-vertical"></div> <br />
      <div className="Testimonials-head">TESTIMONIALS</div>
      <div className="Testimonials-vertical"></div><br/>
      <div className="Testimonials-cards">
        <div className="Testimonials-cards13"></div>
        <div className="Testimonials-card2">
          <div className="Testimonials-text"> <br />
            Quite an informative workshop with knowledgeable people. They tauht with a lot of enthusiasm
            <br /> <br /> 
            <div className="Testimonials-byname"><br/>
              <p id="Testimonials-nameChangedToBlack">-Sakshi</p>
            </div>
          </div>
        </div>
        <div className="Testimonials-card13">
          <div className="Testimonials-card1">
            <div className="Testimonials-text"> <br />
            A lot of "hands on" experience and clear explanations of car dynamics  <br/><br />{" "}
              <br/> <div className="Testimonials-byname"><br/>-Anudeep Sethi</div>
            </div>
          </div>
          <div className="Testimonials-card3">
            <div className="Testimonials-text">
              <br />
              The workshop was fun, especially the display of Porche Cayenne and talented guests of honour.<br/> <br/>{" "}
              <br/> <div className="Testimonials-byname"><br/>-Abhishek Goel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;