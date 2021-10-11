import React from "react";
import "./Menu.css";
function Menu() {
  function change() {
    // let first=document.getElementById("navbar");
    let hamsmenu = document.getElementById("hamsmenu");
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    first.style.display = "none";
    second.style.display = "block";
    // first.style.display="none";
    hamsmenu.style.display = "block";
    hamsmenu.style.animation = " animate1 0.5s  ";
    // let hams=document.getElementById("burger");
    // hams.setAttribute("onclick",{change_back});
  }
  function change_back() {
    let hamsmenu = document.getElementById("hamsmenu");
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    first.style.display = "block";
    second.style.display = "none";

    // first.style.display="flex";
    // second.style.display="none";
    hamsmenu.style.animation = " animate2 0.5s ";

    setTimeout(() => {
      hamsmenu.style.display = "none";
    }, 500);
  }

  return (
    <>
      <div id="hamsburger">
        <div id="but">
          {" "}
          <button id="first" onClick={change}>
            <img
              id="burger"
              src="https://th.bing.com/th/id/OIP.mcRBPQNgjpICYSCV2BRK2wHaHa?pid=ImgDet&rs=1"
              alt="burger"
            />
          </button>
          <button id="second" style={{ display: "none" }} onClick={change_back}>
            X
          </button>
        </div>

        <br />
        <div id="hamsmenu" style={{ display: "none" }}>
          <div className="nav0" id="nav11">
            {" "}
            ACCELERONS
          </div>
          <div className="nav0" id="nav22">
            {" "}
            NITROX
          </div>
          <div className="nav0" id="nav33">
            {" "}
            AUTOKRITI
          </div>
          <div className="nav0" id="nav44">
            {" "}
            EXPLORE
          </div>
          <div className="nav0" id="nav55">
            {" "}
            SPONSOR US
          </div>
          <div className="nav0" id="nav66">
            {" "}
            CONTACT US
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
