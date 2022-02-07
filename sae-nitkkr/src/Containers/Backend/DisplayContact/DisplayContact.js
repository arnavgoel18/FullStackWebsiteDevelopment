import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import DisplayContactCard from "./DisplayContactCard";
import "./DisplayContact.css";
import db from "../../../Firebase.js";
import { collection, getDocs } from "firebase/firestore";
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";
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
    const contactUs = collection(db, "contactUs");
    var amb_doc = await getDocs(contactUs);
    detailList = amb_doc.docs.map((doc) => doc.data());
    detailListId = amb_doc.docs.map((doc) => doc.id);

    amb_doc.forEach((doc) => {
      cvsFileData = [
        [doc.data().Name],
        [doc.data().EmailId],
        [doc.data().PhoneNo],
        [doc.data().Organisation],
        [doc.data().Message],
        [doc.data().s1],
        [doc.data().s2],
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

    var csv =
      "Name,EmailId,phoneNo,Institute/Organisations(optional),Your Message *,Reason to Contact *,Person Contacting us is a *";
    csv += "\n";

    //merge the data with CSV
    CsvDetail.forEach(function (row) {
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
          <BackSignOutPanel />
          <div className="contactResponse">
            <div className="conResData">
              <div>Pending:</div>
              <div>Completed:</div>
            </div>
            <a className="downloadCsv">
              <i
                onClick={downloadCsv}
                className="fa fa-download"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <table className="contactResTable">
            <tr>
              <th>New Responses</th>
              <th>In Progress</th>
              <th>Finished</th>
            </tr>
            <tr>
              <td> <DisplayContactCard/> </td>
              <td> <DisplayContactCard/> </td>
              <td> <DisplayContactCard/> </td>      
            </tr>
            <tr>
              <td> <DisplayContactCard/> </td>
              <td> <DisplayContactCard/> </td>
              <td> <DisplayContactCard/> </td>
            </tr>
            <tr>
              <td> <DisplayContactCard/> </td>
              <td> <DisplayContactCard/> </td>
              <td> <DisplayContactCard/> </td>

            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default DisplayContactInfo;
