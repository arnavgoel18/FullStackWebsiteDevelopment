import React from "react";
import "./Whereacclerons.css";
// import { useState } from "react";
import abc1new from "./abc1new.jpeg";
import def2 from "./def2.jpeg";
function Whereacclerons() {
  let image2;
  let image1;
  let image11;
  let image22;
  let acheck1=0;
  let acheck2=0;
  function swap()
  {
    console.log("navneet");
     image2=document.getElementById("image2");
     image1=document.getElementById("image1");
     if(acheck1==0)
     {
     image1.style.backgroundImage="url(/static/media/def1.86edba72.jpeg)";
     image2.style.backgroundImage="url(/static/media/abc1new.79517128.jpeg)";
     acheck1=1;
     }
     else if(acheck1==1)
     {
      image2.style.backgroundImage="url(/static/media/def1.86edba72.jpeg)";
      image1.style.backgroundImage="url(/static/media/abc1new.79517128.jpeg)";
      acheck1=0;
     }
     
  }
  function swap2()
  {
    console.log("nishant");
     image22=document.getElementById("image22");
     image11=document.getElementById("image11");
     if(acheck2==0)
     {
     image11.style.backgroundImage="url(/static/media/def1.86edba72.jpeg)";
     image22.style.backgroundImage="url(/static/media/abc1new.79517128.jpeg)";
     acheck2=1;
     }
     else if(acheck2==1)
     {
     image22.style.backgroundImage="url(/static/media/def1.86edba72.jpeg)";
     image11.style.backgroundImage="url(/static/media/abc1new.79517128.jpeg)";
     acheck2=0;
     }

  }
  
  return (
    <div id="participate">
      <div id="titlecomp1" className="content1">
        where do we <span id="participate1">PARTICIPATE?</span>
      </div>
      <br/>
      <br/>
      <div id="supra" className="content">
       <span id="supra_title"> SUPRA</span>
       <br/>
       <br/>
        <div id="supra_content">
          <div id="supra_text">
            SUPRA SAEINDIA Student Formula is a national engineering design
            competition held by the Society of Automotive Engineers
            Indian(SAEINDIA). The goal is to develop and provide a platform for
            student engineers to experience build and learn. <br />
            <br />
            <div id="supraline">
              Students gain and develop skills such as engineering,project
              management and team work.Points are earned in a series off
              track,"Static" events, and on track,"Dyanamic" events. The team
              with the most points at the end of the competion wins.
            </div>
          </div>
          <div id="supra_image">
            <div id="image1">
           
            </div>
            <div id="image2" onClick={swap}>
            
            </div>
          </div>
        </div>
      </div>
    
    <br/>
    <div id="formula" className="content">
       <span id="formula_title"> FORMULA BHARAT</span>
       <br/>
       <br/>
        <div id="formula_content">
        <div id="formula_image">
        <div id="image22" onClick={swap2}>
              
            </div>
        <div id="image11" >
              
            </div>
           
          </div>
            
          
          <div id="formula_text">
          Formula Bharat is an engineering design competitionin which
     Studentsfrom colleges and universities all over the country, compete
     with a life-size Formula-style vehicle in areas of engineering
     design,overall cost,marketability and dynamic performance. <br />
            <br />
            <div id="formulaline">
            These student teams are required to build a new vehicle from
       scratch year-after-year and seek sponsorship and donations by
       their own means to fund the project
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Whereacclerons;
