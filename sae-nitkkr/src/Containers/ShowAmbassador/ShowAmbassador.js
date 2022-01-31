import React, { useState } from "react";
import "./ShowAmbassador.css";
import { Link, Redirect } from "react-router-dom";
import { FaLockOpen } from "react-icons/fa";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer(black)/FooterBlack";
import db from "../../Firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

export default function ShowAmbassador() {
  const params = new URL(document.location).searchParams;
  const password = params.get("username");

  var [tester, setTester] = useState(true);

  var [autData, setAutData] = useState([]);
  var [stuData, setStuData] = useState([]);

  async function getAmbRefInfo() {
    const autInfo = collection(db, "autokritiRegistration");
    const autInfo_doc = await getDocs(autInfo);
    autData = autInfo_doc.docs.map((doc) => doc.data());
    setAutData(autData);
  }

  async function getFinalAmbInfo() {
    const stuInfo = collection(db, "finalStudentAmbassador");
    const stuInfo_doc = await getDocs(stuInfo);
    stuData = stuInfo_doc.docs.map((doc) => doc.data());
    setStuData(stuData);
  }

  var temp = {}
  autData.map((value,i)=>{
    if(isNaN(temp[value.referalcode])) temp[value.referalcode] = 0;
    temp[value.referalcode]++;
  })

  var highLen = (temp.length > stuData.length)? temp.length : stuData.length;

  for(var i=0; i<highLen; i++){
     stuData[i].numberReferrals = temp[stuData[i].referralCode];
     if(temp[stuData[i].referralCode] == undefined)
     {
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
        <div className="amb_panel">
          <FaLockOpen
            onClick={(e) => {
              localStorage.removeItem("token");
              window.location.href = "/Ambassador/login";
            }}
          />
          
            {
              stuData.map((studata, i)=>{
                if(studata.referralCode == password){
                  return(
                    <span key={i}>
                    {studata.studentName}
                    </span>
                  );
                }
              })
            }
         
        </div>
        <span className="amb_yourRef">Your Referrals</span>

        <div className="ambFlex">
          <div className="showAmbDiv">
            {autData.map((data, i) => {
              if (data.referalcode == password) {
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

          <div>
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