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

//function to get data form database
function DisplayAmbassador() {
    const [forreload, setForreload] = useState([])

    var [result, setResult] = useState([]);

    async function getInfo() {
        const studentAmbassador = collection(db, "studentAmbassador");
        const amb_doc = await getDocs(studentAmbassador);
        const detailList = amb_doc.docs.map((doc) =>  doc.data());

        setResult(detailList);

        dispSomeInfo();
        
        return detailList;
    }

    function dispSomeInfo(){
      console.log(result);
    }

    useEffect(() => {
        setForreload([...forreload,getInfo()])
      }, [])

  return (
    <div className="displayDiv">
      {result.map((detail, index) => {
        return (
          <DisplayCard
            key={index}
            FullName={detail.studentName}
            ClgName={detail.collegeName}
            Branch={detail.branch}
            CurrentSem={detail.semester}
            Phoneno={detail.phone}
            Emailid={detail.email}
            s1={detail.s1}
            s2={detail.s2}
            ans1={detail.longAnswer1}
            ans2={detail.longAnswer2}
            ans3={detail.longAnswer3}
          />
        );
      })}
    </div>
  );
}

export default DisplayAmbassador;
