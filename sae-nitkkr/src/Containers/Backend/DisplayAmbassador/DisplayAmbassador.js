//This Page is to display entries for those people applying to become ambassadors
import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import "./DisplayAmbassador.css";
import DisplayCard from "./DisplayCard";
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";

//Firebase
import db from "../../../Firebase.js";
import {
  collection,
  getDocs,
} from "firebase/firestore";


//function to get data form database
function DisplayInfo() {
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
    
    const studentAmbassador = collection(db, "studentAmbassador");
    var amb_doc = await getDocs(studentAmbassador);
    detailList = amb_doc.docs.map((doc) => doc.data());
    detailListId = amb_doc.docs.map((doc) => doc.id);

    amb_doc.forEach((doc) => {
      cvsFileData = [
        [doc.data().studentName],
        [doc.data().collegeName],
        [doc.data().branch],
        [doc.data().semester],
        [doc.data().phone],
        [doc.data().email],
        [doc.data().s1],
        [doc.data().s2],
        [doc.data().longAnswer2],
        [doc.data().longAnswer3],
        [doc.data().s3],
        [doc.data().referralCode],
      ];

      mergedCsvData.push(cvsFileData);
    });

    setDetail(detailList[index]);
    setDetailId(detailListId[index]);
    setDetailListLength(detailList.length);
    setCsvDetail(mergedCsvData);

    console.log(detail);
    return detailList;
  }

  if (tester == true) {
    // console.log("RAN");
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
      "StudentName,Collegename,Branch,Semester,PhoneNo,EmailId,Why do you think you can be a Campus Ambassador? *,Have you ever been a Campus Ambassador? *,What are your top 3 qualities related to being a Campus Ambassador? *,What two channels do you think are the most effective for engaging with our target audience (18-22 Yrs)? *,How did you find out about this ambassador program? *,referralCode";
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
    hiddenElement.download = "StudentAmbassadorData.csv";
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
        <PageHeader heading="Ambassador Responses"/>
        <div className="displayDiv">
          <BackSignOutPanel/>
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
            <div className="totalAmbassadorResponses">Total Responses={detailListLength}</div>
            <a className="downloadCsv">
              <i
                onClick={downloadCsv}
                className="fa fa-download"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <DisplayCard
              key={index}
              docId={detailId}
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
              referralCode={detail.referralCode}
            />
          </div>
        </div>
      </>
    );
  }
}

export default DisplayInfo;
