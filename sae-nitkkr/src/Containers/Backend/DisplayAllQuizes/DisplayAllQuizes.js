import React from 'react';
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import BackSignOutPanel from '../../../Components/Backend/BackSignOutPanel/BackSignOutPanel';
import DisplayQuizescard from "./DisplayQuizescard";
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";

import "./DisplayAllQuizes.css";

import db from "../../../Firebase.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
  addDoc
} from "firebase/firestore";
import { BiDockBottom } from 'react-icons/bi';


var flag = false;
//function to get data form database
function DisplayAllQuizes() {


  var [index, setIndex] = useState(0);
  var cvsFileData = [];
  var mergedCsvData = [];

  var [tester, setTester] = useState(true);
  var [CsvDetail, setCsvDetail] = useState({});
  var [detailList, setDetailList] = useState([]);
  var [detailListId, setDetailListId] = useState([]);

  var [detailListSlot1, setDetailListSlot1] = useState([]);
  var [detailListSlot2, setDetailListSlot2] = useState([]);

  //for file upload
  var [isLoading, setLoading] = useState(true);

  //Get Information from Firebase into detailList array
  async function getInfo() {

    const autokritiRegisteration = collection(db, "autokritiRegistration");
    var amb_doc = await getDocs(autokritiRegisteration);
    detailList = amb_doc.docs.map((doc) => doc.data());
    
    amb_doc.forEach((doc) => {
      cvsFileData = [
        [doc.id],
        [doc.data().studentName],
        [doc.data().email],
        [doc.data().collegeName],
        [doc.data().branch],
        [doc.data().semester],
        [doc.data().phone],
        [doc.data().referalcode],
        [doc.data().transaction],
        [doc.data().timeSlot]
      ];
      mergedCsvData.push(cvsFileData);
    });

    // detailList.sort((a, b) => Number(b.id) - Number(a.id))

    for(var i = 0;i < detailList.length;i++){
      if(detailList[i].timeSlot == '26 Feb')
        detailListSlot2.push(detailList[i]);
      else
        detailListSlot1.push(detailList[i]);
    }
    
    setDetailListSlot1(detailListSlot1);
    setDetailListSlot2(detailListSlot2);
    setDetailList(detailList);
    setDetailListId(detailListId);
    setCsvDetail(mergedCsvData);

    // console.log("SLOT 1:")
    // console.log(detailListSlot1);
    // console.log("SLOT 2:")
    // console.log(detailListSlot2);

    document.querySelector('.response-overview').textContent = "Total Responses: " + detailList.length  
    var todayList = detailList.filter(x => x.dateOfSubmission.split(",")[0] === new Date(Date.now()).toLocaleString().split(',')[0])
    document.querySelector('.today-response-overview').textContent = "Today's Responses: " + todayList.length  
    return detailList;
  }

  if (tester == true) {
    window.addEventListener("load", getInfo());
    setTester(false);
  }

  // function increment() {
  //   if (index < detailListLength - 1) {
  //     setIndex(++index);
  //     getInfo();
  //   } else {
  //     window.alert("MAXIMUM RESPONSES REACHED");
  //   }
  // }

  // function decrement() {
  //   if (index == 0) {
  //     window.alert("MINIMUM LIMIT REACHED");
  //   } else {
  //     setIndex(--index);
  //     getInfo();
  //   }
  // }

  /*-------------------------------- Functions for file download --------------------------------*/
  function downloadCsv() {
    if (CsvDetail.length == 0) {
      alert("There are no responses yet!");
      return;
    }

    //define the heading for each row of the data
    var csv =
      "ID,Student Name,Email,College,Branch,Semester,Phone Number,Referal Code,Payment ID,Slot";
    csv += "\n";

    //merge the data with CSV
    CsvDetail.forEach(function (row) {
      //to replace , with ;
      row.forEach(function (row1) {
        if(row1[0] !== undefined){
          row1[0] = row1[0].replace(/,/g, ";");
          row1[0] = row1[0].replace(/\n/g, ";");
        }
        
      });
      csv += row.join(",");
      csv += "\n";
    });

    var hiddenElement = document.createElement("a");
    hiddenElement.href =
      "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csv);
    hiddenElement.target = "_blank";

    //provide the name for the CSV file to be downloaded
    hiddenElement.download = "autokritiRegisterationData.csv";
    hiddenElement.click();
  }
  /*-------------------------------- End Functions for file download --------------------------------*/
  /*-------------------------------- Functions for file upload --------------------------------*/
  function csvObj(csv){

    var lines=csv.split("\n");

    var result = [];

    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){

        var obj = [];
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            obj.push(currentline[j]);
        }

        result.push(obj);
    }
    return result; 
  }
  
  function triggerFileInput(){
    document.querySelector('#userFileInput').click();
  }

  async function processFile(){
    document.querySelector('.displayFInalAmbassador_loader').style.display = 'block';
    const ref = await getDocs(collection(db, "LengthSelectedStudent"));
    var counter = ref.docs.map((doc) => doc.data())[0].len
    var myFile = document.querySelector('#userFileInput').files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function() {
        var dataObj = csvObj(this.result)

        for(var i = 0; i < dataObj.length; i++){
            if(dataObj[i][1]!= undefined){
                var obj = {
                    studentName : dataObj[i][0],
                    collegeName: dataObj[i][1],
                    dateOfSubmission: new Date(Date.now()).toLocaleString(),
                    branch: dataObj[i][2],
                    semester: dataObj[i][3],
                    email: dataObj[i][4],
                    phone: dataObj[i][5],
                    referalCode: dataObj[i][6],
                    timeSlot: dataObj[i][7],
                    transaction: dataObj[i][8]
                };
                (async () => {
                    await setDoc(doc(db, "autokritiRegistration", `${Date.now()}`), obj);    
                })();
                counter++;
            }
        }
        //update counter
        (async () => {await setDoc(doc(collection(db, "LengthSelectedStudent"), "1111"), {"len": counter});
        document.querySelector('.displayFInalAmbassador_loader').style.display = 'none';
        document.querySelector('.displayFInalAmbassador_responseText').style.display = 'block';
        document.querySelector('.displayFInalAmbassador_responseText').textContent = 'upload done!';
        setLoading(true)
        getInfo()
        setTimeout(()=>{
            document.querySelector('.displayFInalAmbassador_responseText').style.display = 'none';
        }, 3000)
    })();
    });
    reader.readAsText(myFile);
}
/*-------------------------------- End Functions for file upload --------------------------------*/

  const token = localStorage.getItem("token");

  let loggedin = true;
  if (token == null) {
    loggedin = false;
  }

  if (loggedin == false) {
    return <Redirect to="/admin/login" />;
  } else {
    return (
      <>
        {/* ---------------------------------------------------------------------------------------- */}
        <PageHeader heading="Autokriti Registeration" />
        <div className="displayDiv">
          <BackSignOutPanel />
          <div className="displayFInalAmbassador_uploadBox">
            <input type="file" id="userFileInput" onChange={processFile} accept=".csv"/>
            <div className="displayFInalAmbassador_uploadFileButton" onClick={triggerFileInput}>Upload New</div>
            <div className="displayFInalAmbassador_loader"></div>
            <div className="displayFInalAmbassador_responseText"></div>

            <div>
              <a className="downloadCsv">
                <i
                  onClick={downloadCsv}
                  className="fa fa-download"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------- */}
        
          <div className="response_container"> 
            <div className='response-overview'></div>
            <div className='today-response-overview'></div>
          </div>

          <h2 style={{marginBottom: '10px'}}>26th Feb</h2>
          <div className="displayResponses_slot1">
            Total Responses : {detailListSlot2.length}
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>College Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Payment_Id</th>
                  <th>Referal Code</th>
                  <th>Slot</th>
                </tr>
              </thead>
              <tbody>
                {detailListSlot2.map(item1 => {
                  return<tr>
                      <td>{item1.studentName}</td>
                      <td>{item1.collegeName}</td>
                      <td>{item1.email}</td>
                      <td>{item1.phone}</td>
                      <td>{item1.transaction}</td>
                      <td>{item1.referalcode}</td>
                      <td>{item1.timeSlot}</td>
                    </tr>
                  })}
                </tbody>
            </table>
          </div>

          <h2 style={{marginBottom: '10px'}}>12th Feb</h2>
          <div className="displayResponses_slot1">
            Total Responses : {detailListSlot1.length}
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>College Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Payment_Id</th>
                  <th>Referal Code</th>
                  <th>Slot</th>
                </tr>
              </thead>
              <tbody>
                {detailListSlot1.map(item2 => {
                  return<tr>
                      <td>{item2.studentName}</td>
                      <td>{item2.collegeName}</td>
                      <td>{item2.email}</td>
                      <td>{item2.phone}</td>
                      <td>{item2.transaction}</td>
                      <td>{item2.referalcode}</td>
                      <td>{item2.timeSlot}</td>
                    </tr>
                  })}
                </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default DisplayAllQuizes;



