import React from 'react';
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import DisplayQuizescard from "./DisplayQuizescard";
import "./DisplayAllQuizes.css";
import db from "../../../Firebase.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";

import { onValue } from "firebase/database";
import { Link } from "react-router-dom";
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

  //Get Information from Firebase into detailList array
  async function getInfo() {

    const autokritiRegisteration = collection(db, "autokritiRegistration");
    var amb_doc = await getDocs(autokritiRegisteration);
    detailList = amb_doc.docs.map((doc) => doc.data());
    detailListId = amb_doc.docs.map((doc) => doc.id);

    amb_doc.forEach((doc) => {
      cvsFileData = [
        [doc.data().studentName],
        [doc.data().email],
        [doc.data().collegeName],
        [doc.data().branch],
        [doc.data().semester],
        [doc.data().phone],
        [doc.data().referalcode],
        [doc.data().transaction],
      ];

      mergedCsvData.push(cvsFileData);
    });

    setDetail(detailList[index]);
    setDetailId(detailListId[index]);
    setDetailListLength(detailList.length);
    setCsvDetail(mergedCsvData);

    console.log(detailList);
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
      "StudentName,Collegename,Branch,Semester,PhoneNo,EmailId,referalCode, Payment ID ";
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
          <div className="LoginPage-header">
            <Link to="/admin/actions">
              <div id="ambassador-backBtn">

                <i className="fa fa-arrow-left fa-customize fa-fw"></i>
                Back
              </div>
            </Link>

            {/* <i className="fa fa-user fa-lg" aria-hidden="true"></i> */}
            <div
              type="submit"
              id="amb-signout"
              onClick={(e) => {
                localStorage.removeItem("token");
                window.location.href = "/admin/login";
              }}
            >
              Sign Out

              <i className="fa fa-sign-out fa-customize fa-fw"></i>
            </div>
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
          <div>
            <DisplayQuizescard
              key={index}
              docId={detailId}
              FullName={detail.studentName}
              ClgName={detail.collegeName}
              Branch={detail.branch}
              CurrentSem={detail.semester}
              Phoneno={detail.phone}
              Emailid={detail.email}
              referalCode={detail.referalcode}
              transaction={detail.transaction}
              slot = {detail.timeSlot}
            />
          </div>
        </div>
      </>
    );
  }
}

export default DisplayAllQuizes;



