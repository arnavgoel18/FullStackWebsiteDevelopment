import React, { useState, useEffect } from 'react'
import DisplayCard from './DisplayCard'
import db from '../../../Firebase.js'
import { collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore'

//function to get data form database
function DisplayInfo() {
  var counter=0
  var [index, setIndex] = useState(0)
  var detailList=[]
 

  const [forreload, setForreload] = useState([])
  var [detail, setDetail] = useState({})

  async function getInfo() {

    const studentAmbassador = collection(db, 'studentAmbassador')
    var amb_doc = await getDocs(studentAmbassador)
    detailList = amb_doc.docs.map((doc) => doc.data())
    
    exporting(detailList)
    
    console.log(detailList)

    
    // dispSomeInfo(detailList);
    

    return detailList
  }
 
  function exporting(e)
  {
   setDetail(e[index])
   console.log(detail)
  }

  // function dispSomeInfo(x){

  // }

  
function increment(e) {
   counter++
  setIndex(counter)
  //console.log(index)
  setDetail(detailList[index])
 //console.log(detailList.length)
  //console.log(detail)
  e.preventDefault()
}

function decrement(e) {
  counter--
  setIndex(counter)
  //console.log(index)
  setDetail(detailList[index])
  //console.log(detail)
  e.preventDefault()
}


  
   useEffect(() => {
     setForreload([...forreload, getInfo()])
   }, [])

  return (
    <div className='displayDiv'>
      <div>
        <div>
          <button onClick={decrement}>-</button>
          <div>{index}</div>
          <button onClick={increment}>+</button>
        </div>
        
        {/* <DisplayCard
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
            /> */}
      </div>
    </div>
  )
}

export default DisplayInfo
