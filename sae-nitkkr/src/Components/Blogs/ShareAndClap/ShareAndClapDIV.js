import React, { useEffect, useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { RWebShare } from "react-web-share";
import db from "../../../Firebase.js";
// import ContactUS from "../../../Containers/ContactUs/contactus.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";

import "./ShareAndClapDIV.css";
function Clap(props) {
  var [clapResult, setResult] = useState([]);
  var [frequency, setfrequency] = useState(0);
  var [IPvalue,setIPvalue]=useState("");
  

   async function getclapInfo() {

    const clap = collection(db, `${props.database}`);
    const clap_doc =  await getDocs(clap);
    const clapList = clap_doc.docs.map((doc) => doc.data());
    setfrequency(clapList.length); 
    setResult(clapList);
    // console.log(clapResult);
        
    // console.log(clapList.length);
    
  }
  const getip = async () => {
    const url = `https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0`;
    const response= await fetch(url);
   
    var unique="";
     unique= await response.json();
    setIPvalue(unique.IPv4);
  };
  
     function setInfo(clap_data) {
    //  console.log("set info called");
    var timestamp = String(new Date().getTime());
   
     setDoc(doc(db,`${props.database}`,timestamp), clap_data);
     
   
      document.getElementById("clap_second_clapimage_white").style.opacity="0.2";
      

  }

 
  useEffect(() => {
    // console.log('first traversal');
    getclapInfo();
  }, [props.database]);
  
  var clap_data={
    IP_Address: "100",
    UserName:"sae_website"
   }
  function clap_increase() {
    // getip();
     
      let check=0; 
      clapResult.map((Element)=>
        {
          
            if(Element.IP_Address=="10")
            {
              check=check+1;
             
              
            }
        })
        // if(check==0)
        
          setInfo(clap_data);
          getclapInfo();
          setTimeout(() => {
            document.getElementById("clap_second_clapimage_white").style.opacity="1";
           }, 550);
        
       
}
  

  return (
    <Router>
      <div id="clap_inside">
        <div id="clap_bigbox">
          <div id="clap_first">
            <div id="clap_first_shareimage">
              <RWebShare
                data={{
                  text: "You are sharing link of your favourite blog.",
                  url: `${props.shareUrl}`,
                  title: `${props.title}`,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <img
                  id="clap_embed_shareimage"
                  alt="clap_embed_shareimage"
                  src="https://img.icons8.com/ios-filled/50/000000/forward-arrow.png"
                />
              </RWebShare>

              {/* <Link to="/home">
                
              </Link> */}
            </div>
            <div id="clap_first_sharetitle">
              <h1 id="clap_sharepost">
                <b>Share Post</b>{" "}
              </h1>
            </div>
          </div>
          <div id="clap_second">
            <div id="clap_second_clapimage_white">
              {/* <img id="clap_straight_hand" alt="clap_straight_hand" src="https://img.icons8.com/fluency-systems-regular/48/000000/hand.png"/> */}
              <img
                id="clap_embed_clapimage_white"
                alt="clap_embed_clapimage_white"
                src="https://img.icons8.com/ios/50/000000/applause.png"
              />
              <div id="clap_feed_data">{frequency}</div>
            </div>
            <div id="clap_second_clapimage_black">
              <img
                id="clap_embed_clapimage_black"
                alt=" clap_embed_clapimage_black"
                onClick={clap_increase}
                src="https://img.icons8.com/ios-filled/50/000000/applause.png"
              />
              <div id="clap_clap">Clap</div>
            </div>
          </div>
          <div id="clap_third">
            <div id="clap_third_report_title">
              <h1 id="clap_report_an_issue">
                <Link to="/contactus" target="_blank">
                  Report an Issue
                </Link>
              </h1>
            </div>
          </div>
          <div id="clap_fourth">
            <div id="clap_fourth_reportcontent">
              If you found some misinformation or inappropriate content, you can
              report to us and we will recitify it.
            </div>
          </div>
        </div>
      </div>
      {/* <Route path="/contactus" exact component={() => <ContactUS/>} /> */}
    </Router>
  );
}
export default Clap;
