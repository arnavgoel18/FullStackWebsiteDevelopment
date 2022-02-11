import React from 'react';
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import BackSignOutPanel from '../../../Components/Backend/BackSignOutPanel/BackSignOutPanel';
import DisplayQuizescard from "./DisplayQuizescard";
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
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";


var flag = false;
//function to get data form database
function DisplayAllQuizes() {


  var [index, setIndex] = useState(0);
  var detailList = [];
  var detailListId = [];
  var cvsFileData = [];
  var mergedCsvData = [];

  var [tester, setTester] = useState(true);
  var [detail, setDetail] = useState({});
  var [detailId, setDetailId] = useState(0);
  var [CsvDetail, setCsvDetail] = useState({});
  var [detailListLength, setDetailListLength] = useState(0);
  //for file upload
  var [isLoading, setLoading] = useState(true);

  //Get Information from Firebase into detailList array
  async function getInfo() {

    const autokritiRegisteration = collection(db, "autokritiRegistration");
    var amb_doc = await getDocs(autokritiRegisteration);
    detailList = amb_doc.docs.map((doc) => doc.data());
    detailListId = amb_doc.docs.map((doc) => doc.id);

    for(var i = 0; i < detailList.length; i++){
      detailList[i]['id'] = detailListId[i]
    }

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
    detailList.sort((a, b) => Number(b.id) - Number(a.id))
    setDetail(detailList[index]);
    setDetailId(detailListId[index]);
    setDetailListLength(detailList.length);
    setCsvDetail(mergedCsvData);

    document.querySelector('.response-overview').textContent = "Total Responses: " + detailList.length  
    var todayList = detailList.filter(x => x.dateOfSubmission.split(",")[0] === new Date(Date.now()).().split(',')[0])
    document.querySelector('.today-response-overview').textContent = "Today's Responses: " + todayList.length  
    return detailList;
  }

  if (tester == true) {
    window.addEventListener("load", getInfo());
    setTester(false);
  }

  function increment() {
    if (index < detailListLength - 1) {
      setIndex(++index);
      getInfo();
    } else {
      window.alert("MAXIMUM RESPONSES REACHED");
    }
  }

  function decrement() {
    if (index == 0) {
      window.alert("MINIMUM LIMIT REACHED");
    } else {
      setIndex(--index);
      getInfo();
    }
  }

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
        row1[0] = row1[0].replace(/,/g, ";");
        row1[0] = row1[0].replace(/\n/g, ";");
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

  //functions for file upload
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
        <PageHeader heading="Autokriti Registeration" />
        <div className="displayDiv">
          <BackSignOutPanel />
          <div className="displayFInalAmbassador_uploadBox">
            <input type="file" id="userFileInput" onChange={processFile} accept=".csv"/>
            <div className="displayFInalAmbassador_uploadFileButton" onClick={triggerFileInput}>Upload New</div>
            <div className="displayFInalAmbassador_loader"></div>
            <div className="displayFInalAmbassador_responseText"></div>
          </div>
          <div className="response-num-div">
            <div className="response-num">Response Number</div>
            <div className="response-num-btn">
              <button id="decrement" onClick={decrement}>
                -
              </button>
              <div>{index + 1}</div>
              <button id="increment" onClick={increment}>
                +
              </button>
            </div>
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
          <div className='response-overview'>

          </div>
          <div className='today-response-overview'>

          </div>
          <div>
            <DisplayQuizescard
              key={index}
              docId={detailId}
              dateOfSubmission={detail.dateOfSubmission}
              FullName={detail.studentName}
              ClgName={detail.collegeName}
              Branch={detail.branch}
              CurrentSem={detail.semester}
              Phoneno={detail.phone}
              Emailid={detail.email}
              referalCode={detail.referalcode}
              transaction={detail.transaction}
              slot={detail.timeSlot}
            />
          </div>
        </div>
      </>
    );
  }
}

export default DisplayAllQuizes;



