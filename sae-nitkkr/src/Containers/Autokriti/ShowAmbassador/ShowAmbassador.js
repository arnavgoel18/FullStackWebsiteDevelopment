//Show ambssadors how many entries they brought in
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import "./ShowAmbassador.css";

import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";

import db from "../../../Firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

import {MdLogout} from 'react-icons/md'

export default function ShowAmbassador() {
  const params = new URL(document.location).searchParams;
  const username = params.get("username");
  // const username = localStorage.getItem("username");

  var [tester, setTester] = useState(true);

  var [autData, setAutData] = useState([]);
  var [stuData, setStuData] = useState([]);
  const [ownReferrals, setOwnreferrals] = useState([])

  async function getAmbRefInfo() {
    
    const autInfo = collection(db, "AutokritiRegistration2024");
    const autInfo_doc = await getDocs(autInfo);
    autData = autInfo_doc.docs.map((doc) => doc.data());
    setAutData(autData);
    setOwnreferrals(autData.filter(x => x.referal == username))
  }

  async function getFinalAmbInfo() {
    const stuInfo = collection(db, "finalStudentAmbassador");
    const stuInfo_doc = await getDocs(stuInfo);
    stuData = stuInfo_doc.docs.map((doc) => doc.data());
    
    const collInfo = collection(db, "collegeRepresentatives");
    const collInfo_doc = await getDocs(collInfo);
    const stuCollData = collInfo_doc.docs.map((doc) => doc.data());
    
    const arr = stuData.concat(stuCollData);
    setStuData(arr);
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
          <div className="general-logout" title="logout"
            onClick={(e) => {
              localStorage.removeItem("token");
              localStorage.removeItem("username");
              localStorage.removeItem("password");
              window.location.href = "/Ambassador/login";
            }} style={{ cursor: "pointer" }}>
            <MdLogout/>
          </div>
        </div>

        <div className="ambFlexMain">
          <div className="">**This Referal Count is temporary,<br></br>will update the count after verification of the registration.</div>
          <div className="ambassador-own-referrals-div">
          <div>Your Referal code: <b>{username}</b></div> <br></br>
            <div className="amb_yourRef">Your Referal Count: {ownReferrals.length}</div>
            <div className="showAmbDiv">
              {autData.map((data, i) => {
                if (data.referal == username) {
                  return (
                    <div className="ambFlex" key={i}>
                      <div className="showPersonAmb">{data.name}</div>
                      <div className="showPersonAmbCollege">
                        {data.college}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* <div className="amb_leaderboard_container">
            <div className="amb_leader_heading">Leaderboard</div>
            <div className="amb_leaderboard">
              {stuData.map((studata, i) => {
                if(i < 3){
                  return (
                    <div className="ambFlex" key={i}>
                      <div className="ambLeaderName" style={{background: '#33A129', color: '#fff'}}>{studata.studentName}</div>
                      <div className="ambLeaderRefer" style={{background: '#33A129', color: '#fff'}}>{studata.numberReferrals}</div>
                    </div>
                  );
                } 
                else if(i < 5){
                  return (
                    <div className="ambFlex" key={i}>
                      <div className="ambLeaderName" style={{background: '#C4C4C4'}}>{studata.studentName}</div>
                      <div className="ambLeaderRefer" style={{background: '#C4C4C4'}}>{studata.numberReferrals}</div>
                    </div>
                  );
                }
                else{
                  return(
                    <></>
                  )
                }
                
              })}
            </div>
          </div> */}
        </div>

        <Footer />
      </>
    );
  }
}