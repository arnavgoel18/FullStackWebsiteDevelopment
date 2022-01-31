import React from "react";
import "./ShowAmbassador.css";
import { Link, Redirect } from "react-router-dom";
import { FaLockOpen } from "react-icons/fa";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer(black)/FooterBlack";

export default function ShowAmbassador() {
  const token = localStorage.getItem("token");
  let loggedin = true;
  if (token == null) {
    loggedin = false;
  }
  if (loggedin == false) {
    return <Redirect to="/Ambassador/login" />;
  }
  else {
  return (
    <>
      <NavBar />
      <div className="amb_panel">
        <FaLockOpen
        onClick={(e) => {
              localStorage.removeItem("token");
              window.location.href = "/Ambassador/login";}}
               />
        <span>Arnav Sir</span>
      </div>
      <span className="amb_yourRef">Your Referrals</span>

      <div className="ambFlex">
        <div className="showAmbDiv">
          <div className="ambFlex">
            <div className="showPersonAmb">hello</div>
            <div className="showPersonAmbCollege">bye</div>
          </div>
        </div>

        <div>
          <div className="amb_leader_heading">Leaderboard</div>
          <div className="amb_leaderboard">
            <div className="ambFlex">
              <div className="ambLeaderName">hello</div>
              <div className="ambLeaderRefer">bye</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
}
