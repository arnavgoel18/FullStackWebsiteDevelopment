import React, { useState, useEffect } from "react";
import "./ShowAmbassador.css";
import { Redirect } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer(black)/FooterBlack";
import db from "../../Firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

export default function ShowAmbassador() {
  const params = new URL(document.location).searchParams;
  const username = localStorage.getItem("username");

  var [tester, setTester] = useState(true);

  var [autData, setAutData] = useState([]);
  var [stuData, setStuData] = useState([]);
  const [ownReferrals, setOwnreferrals] = useState([])

  async function getAmbRefInfo() {
    console.log("aad")
    const autInfo = collection(db, "autokritiRegistration");
    const autInfo_doc = await getDocs(autInfo);
    autData = autInfo_doc.docs.map((doc) => doc.data());
    setAutData(autData);
    setOwnreferrals(autData.filter(x => x.referalcode === username))
  }

  async function getFinalAmbInfo() {
    const stuInfo = collection(db, "finalStudentAmbassador");
    const stuInfo_doc = await getDocs(stuInfo);
    stuData = stuInfo_doc.docs.map((doc) => doc.data());
    setStuData(stuData);
  }

  var temp = {}
  autData.map((value, i) => {
    if (isNaN(temp[value.referalcode])) temp[value.referalcode] = 0;
    temp[value.referalcode]++;
  })

  var highLen = (temp.length > stuData.length) ? temp.length : stuData.length;

  for (var i = 0; i < highLen; i++) {
    stuData[i].numberReferrals = temp[stuData[i].referralCode];
    if (temp[stuData[i].referralCode] == undefined) {
      stuData[i].numberReferrals = 0;
    }
  }

  stuData.sort((a, b) => b.numberReferrals - a.numberReferrals);

  if (tester == true) {
    window.addEventListener("load", getAmbRefInfo());
    window.addEventListener("load", getFinalAmbInfo());
    setTester(false);
  }

  const token = localStorage.getItem("token");
  
  let loggedin = true;
  if (token == null) {
    loggedin = false;
  }
  if (loggedin == false) {
    return <Redirect to="/Ambassador/login" />;
  } else {
    return (
      <>
        <NavBar />
        <div className="amb_subnav">
          <div className="ambassador-profile-name">
            {
              stuData.map((studata, i) => {
                if (studata.referralCode == username) {
                  return (
                    <span key={i} style={{ color: "white" }}>
                      {studata.studentName}
                    </span>
                  );
                }
              })
            }
          </div>
          <div className="general-logout"
            onClick={(e) => {
              localStorage.removeItem("token");
              localStorage.removeItem("username");
              localStorage.removeItem("password");
              window.location.href = "/Ambassador/login";
            }} style={{ cursor: "pointer" }}>
            Logout
          </div>
        </div>

        <div className="ambFlexMain">
          <div className="ambassador-own-referrals-div">
            <div className="amb_yourRef">your referral count: {ownReferrals.length}</div>
            <div className="showAmbDiv">
              {autData.map((data, i) => {
                if (data.referalcode == username) {
                  return (
                    <div className="ambFlex" key={i}>
                      <div className="showPersonAmb">{data.studentName}</div>
                      <div className="showPersonAmbCollege">
                        {data.collegeName}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="amb_leaderboard_container">
            <div className="amb_leader_heading">Leaderboard</div>
            <div className="amb_leaderboard">
              {stuData.map((studata, i) => {
                return (
                  <div className="ambFlex" key={i}>
                    <div className="ambLeaderName">{studata.studentName}</div>
                    <div className="ambLeaderRefer">{studata.numberReferrals}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}