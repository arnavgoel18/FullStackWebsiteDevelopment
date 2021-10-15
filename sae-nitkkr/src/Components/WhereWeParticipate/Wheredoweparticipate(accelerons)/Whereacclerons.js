import React from "react";
import "./Whereacclerons.css";

import AcceleronsFB1 from '../../../Assets/WhereWeParticipate/AcceleronsFB1.jpeg'
import AcceleronsFB2 from '../../../Assets/WhereWeParticipate/AcceleronsFB2.jpeg'
import AcceleronsSupra1 from '../../../Assets/WhereWeParticipate/AcceleronsSupra1.jpeg'
import AcceleronsSupra2 from '../../../Assets/WhereWeParticipate/AcceleronsSupra2.jpeg'

function Whereacclerons() {
  let image2;
  let image1;
  let image11;
  let image22;
  let acheck1=0;
  let acheck2=0;
  function swap()
  {
     image2=document.getElementById("Accelarons-image2");
     image1=document.getElementById("Accelarons-image1");
     if(acheck1==0)
     {
     image1.style.backgroundImage="url(/static/media/AcceleronsFB2.a6a8a136.jpeg)";
     image2.style.backgroundImage="url(/static/media/AcceleronsFB1.eec3ca49.jpeg)";
     acheck1=1;
     }
     else if(acheck1==1)
     {
      image2.style.backgroundImage="url(/static/media/AcceleronsFB2.a6a8a136.jpeg)";
      image1.style.backgroundImage="url(/static/media/AcceleronsFB1.eec3ca49.jpeg)";
      acheck1=0;
     }
     
  }
  function swap2()
  {
     image22=document.getElementById("Accelarons-image22");
     image11=document.getElementById("Accelarons-image11");
     if(acheck2==0)
     {
     image11.style.backgroundImage="url(/static/media/AcceleronsSupra2.8193467f.jpeg)";
     image22.style.backgroundImage="url(/static/media/AcceleronsSupra1.79517128.jpeg)";
     acheck2=1;
     }
     else if(acheck2==1)
     {
     image22.style.backgroundImage="url(/static/media/AcceleronsSupra2.8193467f.jpeg)";
     image11.style.backgroundImage="url(/static/media/AcceleronsSupra1.79517128.jpeg)";
     acheck2=0;
     }

  }
  
  return (
    <>
      <br/><br/><br/><br/>
      <div id="Accelarons-participate">     
        <div id="Accelarons-titlecomp1" className="Accelarons-content1">
          where do we <span id="Accelarons-participate1">PARTICIPATE?</span>
        </div>
        <br/>
        <br/>
        <div id="Accelarons-supra" className="Accelarons-content">
        <span id="Accelarons-supra_title"> SUPRA</span>
        <br/>
        <br/>
          <div id="Accelarons-supra_content">
            <div id="Accelarons-supra_text">
              SUPRA SAEINDIA Student Formula is a national engineering design
              competition held by the Society of Automotive Engineers
              Indian(SAEINDIA). The goal is to develop and provide a platform for
              student engineers to experience build and learn. <br />
              <br />
              <div id="Accelarons-supraline">
                Students gain and develop skills such as engineering,project
                management and team work.Points are earned in a series off
                track,"Static" events, and on track,"Dyanamic" events. The team
                with the most points at the end of the competion wins.
              </div>
            </div>
            <div id="Accelarons-supra_image">
              <div id="Accelarons-image1">
            
              </div>
              <div id="Accelarons-image2" onClick={swap}>
              
              </div>
            </div>
          </div>
        </div>
      
      <br/>
      <div id="Accelarons-formula" className="Accelarons-content">
        <span id="Accelarons-formula_title"> FORMULA BHARAT</span>
        <br/>
        <br/>
          <div id="Accelarons-formula_content">
          <div id="Accelarons-formula_image">
          <div id="Accelarons-image22" onClick={swap2}>
                
              </div>
          <div id="Accelarons-image11" >
                
              </div>
            
            </div>
              
            
            <div id="Accelarons-formula_text">
            Formula Bharat is an engineering design competitionin which
      Studentsfrom colleges and universities all over the country, compete
      with a life-size Formula-style vehicle in areas of engineering
      design,overall cost,marketability and dynamic performance. <br />
              <br />
              <div id="Accelarons-formulaline">
              These student teams are required to build a new vehicle from
        scratch year-after-year and seek sponsorship and donations by
        their own means to fund the project
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Whereacclerons;