import React from "react";
import "./ShowAmbassador.css";
import { FaLockOpen } from "react-icons/fa";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer(black)/FooterBlack";

function ShowAmbassador() {
  return (
    <>
      <NavBar />
      <div className="amb_panel">
        <FaLockOpen />
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

export default ShowAmbassador;
