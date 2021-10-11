import React from "react";
import "./Wherenitrox.css";
function Wherenitrox() {
  let image2;
  let image1;
  let image11;
  let image22;
  let check1=0;
  let check2=0;
  function swap()
  {
    console.log("navneet");
     image2=document.getElementById("image2");
     image1=document.getElementById("image1");
     if (check1==0)
     {
     image1.style.backgroundImage="url(/static/media/def1.86edba72.jpeg)";
     image2.style.backgroundImage="url(/static/media/abc1new.79517128.jpeg)";
     check1=1;
     }
     else if(check1==1)
     {
      image2.style.backgroundImage="url(/static/media/def1.86edba72.jpeg)";
      image1.style.backgroundImage="url(/static/media/abc1new.79517128.jpeg)";
      check1=0;
     }
  }
  function swap2()
  {
    console.log("nishant");
     image22=document.getElementById("image22");
     image11=document.getElementById("image11");
     if(check2==0)
     {
     image11.style.backgroundImage="url(/static/media/def1.86edba72.jpeg)";
     image22.style.backgroundImage="url(/static/media/abc1new.79517128.jpeg)";
     check2=1;
     }
     else if(check2==1)
     {
      image22.style.backgroundImage="url(/static/media/def1.86edba72.jpeg)";
      image11.style.backgroundImage="url(/static/media/abc1new.79517128.jpeg)";
      check2=0;
     }
  }
  return (
    <div id="participate">
      <div id="titlecomp1" className="content1">
        where do we <span id="participate1">PARTICIPATE?</span>
      </div>
      <br />
      <br />
      <div id="baja" className="content">
        <span id="baja_title"> BAJA</span>
        <br />
        <br />
        <div id="baja_content">
          <div id="baja_text">
            Baja SAE is an Collegiate Design Series competition run by the
            Society Of Automotive Engineers International (SAE INTERNATIONAL)
            Teams of Students from universities all over the world design and
            build small off-road cars. <br />
            <br />
            <div id="bajaline">
              The goal in Baja SAE racing is to <b> design, build</b> and{" "}
              <b>race</b> off-road vehicles that can withstand the harshest
              elements of rough terrain. The vehicles used in Baja SAE racing
              are often similar in appearance to dune buggies.
            </div>
          </div>
          <div id="baja_image">
            <div id="image1">
              {/* <img src={abc1new} alt="imagee" id="car1" /> */}
            </div>
            <div id="image2" onClick={swap}>
              {/* <img
              src={def2}
              alt="imagee"
              id="car2"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <br />
      <div id="atvc" className="content">
        <span id="atvc_title"> ATVC</span>
        <br />
        <br />
        <div id="atvc_content">
          <div id="atvc_image">
            <div id="image22" onClick={swap2}>
              {/* <img src={abc1new} alt="imagee" id="car1" /> */}
            </div>
            <div id="image11">
              {/* <img
              src={def2}
              alt="imagee"
              id="car2"
              /> */}
            </div>
          </div>

          <div id="atvc_text">
            The Third season of Aravalli Terrain Vehicle Championship, powered
            by infi-league Motorsports is a natioanl championship earnmarking
            all the techno freaks across the country <br />
            <br />
            <div id="atvcline">
              The goal in Baja SAE racing is to <b> design, build</b> and{" "}
              <b>race</b> off-road vehicles that can withstand the harshest
              elements of rough terrain. The vehicles used in Baja SAE racing
              are often similar in appearance to dune buggies.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wherenitrox;
