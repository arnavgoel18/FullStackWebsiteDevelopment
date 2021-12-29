import React, { useState, useEffect} from "react";
import DisplayCard from "./DisplayCard";
import db from "../../../Firebase.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";

//function to get data form database;



function DisplayInfo() {
    const [navneet, setnavneet] = useState([])
    async function getInfo() {
        const studentAmbassador = collection(db, "studentAmbassador");
        const amb_doc = await getDocs(studentAmbassador);
        const detailList = amb_doc.docs.map((doc) =>  doc.data());
       
        // setnavneet(detailList);
       
        return detailList;
    }
    useEffect(() => {
        // getInfo();
        setnavneet([...navneet,getInfo()])
        console.log(navneet);
      }, [])
      
//    const detailList = getInfo();
//   detailList.then(function (result) {
//      console.log(result);
//   });

  return (
    <div className="displayDiv">
      {/* {result.map((detail, index) => {
        return (
          <DisplayCard
            key={index}
            FullName={detail.studentName}
            ClgName={detail.collegeName}
            Branch={detail.branch}
            CurrentSem={detail.semester}
            Phoneno=""
            Emailid=""
            ans1=""
            ans2=""
            ans3=""
            ans4=""
          />
        );
      })} */}
      {/* {getInfo} */}
    </div>
  );
}

export default DisplayInfo;
