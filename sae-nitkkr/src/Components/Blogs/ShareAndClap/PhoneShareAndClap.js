import React, { useState,useEffect } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { RWebShare } from "react-web-share";
import "./PhoneShareAndClap.css";
import {db1} from "../../../Firebase.js";
// import ContactUS from "../../../Containers/ContactUs/contactus.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";
function Clapmobile(props) {
  var [clapResult, setResult] = useState([]);
  var [frequency, setfrequency] = useState(0);
  var [IPvalue,setIPvalue]=useState("");
  async function getclapInfo() {

    const clap = collection(db1, `${props.database}`);
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
    // console.log("set info called");
   var timestamp = String(new Date().getTime());
  
    setDoc(doc(db1,`${props.database}`,timestamp), clap_data);
    
  
     document.getElementById("clapmobile_first_white").style.opacity="0.2";
     

 }
 useEffect(() => {
  // console.log('first traversal');
  getclapInfo();
}, [props.database]);

var clap_data={
  IP_Address: "100",
  UserName:"website"
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
             document.getElementById("clapmobile_first_white").style.opacity="1";
            }, 550);
   
  }
  return (
    <Router>
      <div id="clapmobile_inside">
        <div id="clapmobile_bigbox">
          <div id="clapmobile_first">
            <div id="clapmobile_first_white">
              <img
                id="clapmobile_embed_clapimage_white"
                alt="clapmobile_embed_clapimage_white"
                src="https://img.icons8.com/ios/50/000000/applause.png"
              />
            </div>
            <div id="clapmobile_first_frequency">{frequency}</div>
          </div>
          <div id="clapmobile_second">
            <div id="clapmobile_second_black">
              <img
                id="clapmobile_embed_clapimage_black"
                alt=" clapmobile_embed_clapimage_black"
                onClick={clap_increase}
                src="https://img.icons8.com/ios-filled/50/000000/applause.png"
              />
            </div>
            <div id="clapmobile_second_claptext">Clap</div>
            <div id="clapmobile_second_share">
              {/* 
                <Link to='/home'><img
              id="clapmobile_embed_shareimage"
              alt="clapmobile_embed_shareimage"
              src="https://img.icons8.com/ios-filled/50/000000/forward-arrow.png"
            /> </Link> */}

              <RWebShare
                data={{
                  text: "You are sharing link of your favourite blog.",
                  url: `${props.shareUrl}`,
                  title: `${props.title}`,
                }}
                sites="facebook"
                onClick={() => console.log("shared successfully!")}
              >
                <img
                  id="clapmobile_embed_shareimage"
                  alt="clapmobile_embed_shareimage"
                  src="https://img.icons8.com/ios-filled/50/000000/forward-arrow.png"
                />
              </RWebShare>
            </div>
          </div>
        </div>
        {/* <hr/> */}
      </div>
    </Router>
  );
}

export default Clapmobile;
