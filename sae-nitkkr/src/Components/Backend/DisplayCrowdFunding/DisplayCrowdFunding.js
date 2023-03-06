import React from 'react';
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import BackSignOutPanel from '../../../Components/Backend/BackSignOutPanel/BackSignOutPanel';
// import DisplayQuizescard from "./DisplayQuizescard";
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";

import "./DisplayCrowdFunding.css";

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

  //for file upload
  var [isLoading, setLoading] = useState(true);

  //Get Information from Firebase into detailList array
  async function getInfo() {

    const crowdFunding = collection(db, "FundingForm");
    var amb_doc = await getDocs(crowdFunding);
    detailList = amb_doc.docs.map((doc) => doc.data());
    
    amb_doc.forEach((doc) => {
      cvsFileData = [
        [doc.id],
        [doc.data().FirstName],
        [doc.data().email],
        [doc.data().LastName],
        [doc.data().phone],
        [doc.data().paymentid],
        [doc.data().amount],
        [doc.data().longAnswer2],
        
      ];
      mergedCsvData.push(cvsFileData);
    });
    setDetailList(detailList);
    setDetailListId(detailListId);
    setCsvDetail(mergedCsvData);

    document.querySelector('.response-overview').textContent = "Total Responses: " + detailList.length  
    var todayList = detailList.filter(x => x.dateOfSubmission.split(",")[0] === new Date(Date.now()).toLocaleString().split(',')[0])
    document.querySelector('.today-response-overview').textContent = "Today's Responses: " + todayList.length  
    return detailList;
  }

  if (tester == true) {
    window.addEventListener("load", getInfo());
    setTester(false);
  }


  /*-------------------------------- Functions for file download --------------------------------*/
  function downloadCsv() {
    if (CsvDetail.length == 0) {
      alert("There are no responses yet!");
      return;
    }

    //define the heading for each row of the data
    var csv =
      "ID,FirstName,Email,LastName,Phone Number,Payment ID,Message,Amount";
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
    hiddenElement.download = "CrowdFundingData.csv";
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
    const ref = await getDocs(collection(db, "FundingForm"));
    var counter = ref.docs.map((doc) => doc.data())[0].len
    var myFile = document.querySelector('#userFileInput').files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function() {
        var dataObj = csvObj(this.result)

        for(var i = 0; i < dataObj.length; i++){
            if(dataObj[i][1]!= undefined){
                var obj = {
                    FirstName : dataObj[i][0],
                    LastName: dataObj[i][1],
                    dateOfSubmission: new Date(Date.now()).toLocaleString(),
                    email: dataObj[i][2],
                    phone: dataObj[i][3],
                    paymentid: dataObj[i][4],
                    Amount: dataObj[i][5],
                    longAnswer2: dataObj[i][6],                  
                };
                (async () => {
                    await setDoc(doc(db, "FundingForm", `${Date.now()}`), obj);    
                })();
                counter++;
            }
        }
       // update counter
        (async () => {await setDoc(doc(collection(db, "FundingForm"), "1111"), {"len": counter});
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
        <PageHeader heading="Funding Form" />
        <div className="displayDiv">
          <BackSignOutPanel />
          <div className="displayFInalAmbassador_uploadBox">
            <input type="file" id="userFileInput" 
            onChange={processFile}
             accept=".csv"/>
            <div className="displayFInalAmbassador_uploadFileButton" 
            onClick={triggerFileInput}
            >
              Upload New</div>
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

          {/* <h2 style={{marginBottom: '10px'}}>26th Feb</h2> */}
          <div className="displayResponses_slot1">
            Total Responses : {detailList.length}
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Payment_Id</th>
                  <th>Amount</th>
                  <th>Message</th>
              
                </tr>
              </thead>
              <tbody>
                {detailList.map(item1 => {
                  return<tr>
                      <td>{item1.FirstName}</td>
                      <td>{item1.LastName}</td>
                      <td>{item1.email}</td>
                      <td>{item1.phone}</td>
                      <td>{item1.paymentid}</td>
                      <td>{item1.amount}</td>
                      <td>{item1.longAnswer2}</td>
                     
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



