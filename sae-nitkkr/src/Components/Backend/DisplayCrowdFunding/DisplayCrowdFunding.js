import React from 'react';
import { useState } from "react";
import { Redirect } from "react-router-dom";
import BackSignOutPanel from '../../../Components/Backend/BackSignOutPanel/BackSignOutPanel';
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";
import "./DisplayCrowdFunding.css";
import db from "../../../Firebase.js";
import {collection, getDocs} from "firebase/firestore";


function DisplayCrowdFundnig() {

  var [index, setIndex] = useState(0);
  var cvsFileData = [];
  var mergedCsvData = [];
  var [tester, setTester] = useState(true);
  var [CsvDetail, setCsvDetail] = useState({});
  var [detailList, setDetailList] = useState([]);
  var [detailListId, setDetailListId] = useState([]);

  //Get Information from Firebase into detailList array
  async function getInfo() {
    const crowdFunding = collection(db, "FundingForm");
    var amb_doc = await getDocs(crowdFunding);
    detailList = amb_doc.docs.map((doc) => doc.data());
    detailListId = amb_doc.docs.map((doc) => doc.id);
    
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
    mergedCsvData.pop();
    setCsvDetail(mergedCsvData);

    return detailList;
  }

  if (tester == true) {
    window.addEventListener("load", getInfo());
    setTester(false);
  }

  function downloadCsv() {
    if (CsvDetail.length == 0) {
      alert("There are no responses yet!");
      return;
    }

    var csv =
      "ID,FirstName,Email,LastName,Phone Number,Payment ID,Message,Amount";
    csv += "\n";

    CsvDetail.forEach(function (row) {
      row.forEach(function (row1) {
        console.log(row1);
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

    hiddenElement.download = "CrowdFundingData.csv";
    hiddenElement.click();
  }

  const token = localStorage.getItem("token");
  let loggedin = true;
  if (token == null) {
    loggedin = false;
  }

  if (loggedin == false) {
    return <Redirect to="/admin/login" />;
  } else {
    return(
      <div>
        <PageHeader heading="CrowdFunding Details" />
        <div className="displayDiv">
          <BackSignOutPanel />
          <div>
              <a className="downloadCsv">
                <i
                  onClick={downloadCsv}
                  className="fa fa-download"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
        
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
                  <th>Time</th>

                </tr>
              </thead>
              <tbody>
                {detailList.map((item1,i) => {
                  return(
                  <tr key={i}>
                      <td>{item1.FirstName}</td>
                      <td>{item1.LastName}</td>
                      <td>{item1.email}</td>
                      <td>{item1.phone}</td>
                      <td>{item1.paymentid}</td>
                      <td>{item1.amount}</td>
                      <td>{item1.longAnswer2}</td>
                      <td>{detailListId[i]}</td>                    
                  </tr>);
                })}
              </tbody>
            </table>
          </div>

        </div> 
      </div>
    );
  }
}

export default DisplayCrowdFundnig;



