import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import DisplayCard from './DisplayCard'
import db from '../../../Firebase.js'
import { collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore'

var flag=false
//function to get data form database
function DisplayInfo() {
  var [index, setIndex] = useState(0)
  var detailList=[]
  var [tester, setTester] = useState(true);

  var [detail, setDetail] = useState({})
  var [detailListLength, setDetailListLength] = useState(0);

  //Get Information from Firebase into detailList array
  async function getInfo() {
    // console.log("ambassador info")
    const studentAmbassador = collection(db, 'studentAmbassador')
    var amb_doc = await getDocs(studentAmbassador)
    detailList = amb_doc.docs.map((doc) => doc.data())

    
    setDetail(detailList[index])
    setDetailListLength(detailList.length);
    
    return detailList
  }
  
  if(tester == true){
    // console.log("RAN");
    window.addEventListener('load', getInfo());
    setTester(false);
  }
  
  function increment() {
    if(index < detailListLength - 1){
      setIndex(++index);
      getInfo();
    }
    else{
      window.alert("MAXIMUM RESPONSES REACHED");
    }
  }
  
  function decrement() {
    if(index == 0){
      window.alert("MINIMUM LIMIT REACHED");
    }
    else{
      setIndex(--index);
      getInfo();
    }
  }

  const token=localStorage.getItem("token");

  let loggedin=true;
  if(token==null)
  {
    loggedin=false;
  }


  if(loggedin==false)
  {
    return <Redirect to="/admin/login"/>
  }
  else{

  return (
    <div className='displayDiv'>
      <div>
        <div>
          <button onClick={decrement}>-</button>
          <div>{index+1}</div>
          <button onClick={increment}>+</button>
        </div>
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
            s3={detail.s3}
            ans2={detail.longAnswer2}
            ans3={detail.longAnswer3}
          />
      </div>
    </div>
  )
  }
}

export default DisplayInfo