import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import DisplayContactCard from "./DisplayContactCard";
import "./DisplayContact.css";
import db from "../../../Firebase.js";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { onValue } from "firebase/database";
import { Link } from "react-router-dom";
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";

var flag = false;
//function to get data form database
function DisplayContactInfo() {
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
  async function getContactInfo() {
    //console.log("ambassador info")
    const contactUs = collection(db, "contactUs");
    var amb_doc = await getDocs(contactUs);
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
      ];

      mergedCsvData.push(cvsFileData);
    });

    setDetail(detailList[index]);
    setDetailId(detailListId[index]);
    setDetailListLength(detailList.length);
    setCsvDetail(mergedCsvData);

    return detailList;
  }

  if (tester == true) {
    // console.log("RAN");
    window.addEventListener("load", getContactInfo());
    setTester(false);
  }

  function increment() {
    if (index < detailListLength - 1) {
      setIndex(++index);
      getContactInfo();
    } else {
      window.alert("MAXIMUM RESPONSES REACHED");
    }
  }

  function decrement() {
    if (index == 0) {
      window.alert("MINIMUM LIMIT REACHED");
    } else {
      setIndex(--index);
      getContactInfo();
    }
  }

  function downloadCsv() {
    if (CsvDetail.length == 0) {
      alert("There are no responses yet!");
      return;
    }

    //define the heading for each row of the data
    var csv =
      "Name,EmailId,phoneNo,Institute/Organisations(optional),Your Message *,Reason to Contact *,Person Contacting us is a *";
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
    hiddenElement.download = "ContactUsData.csv";
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
        <PageHeader heading="ContactUs Responses" />
        <div className="displayDiv">
          <div className="LoginPage-header">
            <Link to="/admin/actions">
              <button id="contact-backBtn">Back</button>
            </Link>

            {/* <i className="fa fa-user fa-lg" aria-hidden="true"></i> */}
            <button
              type="submit"
              id="amb-signout"
              onClick={(e) => {
                localStorage.removeItem("token");
                window.location.href = "/admin/login";
              }}
            >
              Sign Out
            </button>
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
            <a className="downloadCsv">
              <i
                onClick={downloadCsv}
                className="fa fa-download"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <DisplayContactCard
              key={index}
              docId={detailId}
              Name={detail.Name}
              Emailid={detail.EmailId}
              Phoneno={detail.PhoneNo}
              institute={detail.Organisation}
              message={detail.Message}
              reason={detail.s1}
              person={detail.s2}
            />
          </div>
        </div>
      </>
    );
  }
}

export default DisplayContactInfo;
