import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="Testimonials-body">
      <div className="Testimonials-vertical"></div> <br />
      <div className="Testimonials-head">TESTIMONIALS</div>
      <div className="Testimonials-vertical"></div><br/> <br /> <br /> <br />
     <div className="cards">
       <div className="card1">
        <div className="text">Quite an informative workshop with knowledgeable people. They tauht with a lot of enthusiasm
         <br /> <br />
        <div className="name">-Sakshi</div>
        </div>
        
       </div>
       <div className="card23">
       <div className="card2">
        <div className="text">A lot of "hands on" experience and clear explanations of car dynamics
        <br /> <br />
        <div className="name">-Anudeep Sethi</div>
        </div>
        
       </div>
       <div className="card3">
        <div className="text">The workshop was fun, especially the display of Porche Cayenne and talented guests of honour.
        <br /> <br /> 
        <div className="name">-Abhishek Goel</div>
        </div>
       
       </div></div> 
     </div>
    </div>
  );
}

export default Testimonials;