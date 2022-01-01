import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import DisplayCard from './DisplayCard'
import db from '../../../Firebase.js'
import { collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore'

//function to get data form database
function DisplayInfo() {
  var [index, setIndex] = useState(0)
  var detailList=[]

  var [detail, setDetail] = useState({})

  //Get Information from Firebase into detailList array
  async function getInfo() {

    const studentAmbassador = collection(db, 'studentAmbassador')
    var amb_doc = await getDocs(studentAmbassador)
    detailList = amb_doc.docs.map((doc) => doc.data())
    
    setDetail(detailList[index])
    
    return detailList
  }
   
  function increment() {
    setIndex(++index);
    console.log(index);
  }
  
  function decrement() {
    setIndex(--index);
    console.log(index);
  }

  window.addEventListener('load', getInfo());

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
            ans1={detail.longAnswer1}
            ans2={detail.longAnswer2}
            ans3={detail.longAnswer3}
          />
      </div>
    </div>
  )
  }
}

export default DisplayInfo
