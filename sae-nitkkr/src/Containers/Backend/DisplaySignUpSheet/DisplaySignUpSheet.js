import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";

import "./DisplaySignUpSheet.css";

import db from "../../../Firebase.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { BiDockBottom } from "react-icons/bi";

function DisplaySignUpSheet() {
  var cvsFileData = [];
  var mergedCsvData = [];
  var [splitData, setSplitData] = useState(false);

  var [tester, setTester] = useState(true); //to run code once. NOT TO BE CHANGED AND IS INSIGNIFICANT
  var [CsvDetail, setCsvDetail] = useState({});

  var [detailList, setDetailList] = useState([]);

  var [detailListSlot1, setDetailListSlot1] = useState([]);
  var [detailListSlot2, setDetailListSlot2] = useState([]);

  var [slotData, setSlotData] = useState([]);
  var [semData, setSemData] = useState([]);
  var [refData, setRefData] = useState([]);

  var [finalData, setFinalData] = useState([]);

  //for file upload
  var [isLoading, setLoading] = useState(true);
  //Get Information from Firebase into detailList array
  async function getInfo() {
    const autokritiRegisteration = collection(db, "autokritiRegistration");
    var amb_doc = await getDocs(autokritiRegisteration);
    detailList = amb_doc.docs.map((doc) => doc.data());

    //for downloading file
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
        [doc.data().timeSlot],
      ];
      mergedCsvData.push(cvsFileData);
    });

    setDetailList(detailList);
    setCsvDetail(mergedCsvData);

    return detailList;
  }
  //function to run getInfo once
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
      "ID,Student Name,Email,College,Branch,Semester,Phone Number,Referal Code,Payment ID,Slot";
    csv += "\n";

    //merge the data with CSV
    CsvDetail.forEach(function (row) {
      //to replace , with ;
      row.forEach(function (row1) {
        if (row1[0] !== undefined) {
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
  function csvObj(csv) {
    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = [];
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj.push(currentline[j]);
      }

      result.push(obj);
    }
    return result;
  }

  function triggerFileInput() {
    document.querySelector("#userFileInput").click();
  }

  async function processFile() {
    document.querySelector(".displayFInalAmbassador_loader").style.display =
      "block";
    const ref = await getDocs(collection(db, "LengthSelectedStudent"));
    var counter = ref.docs.map((doc) => doc.data())[0].len;
    var myFile = document.querySelector("#userFileInput").files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      var dataObj = csvObj(this.result);

      for (var i = 0; i < dataObj.length; i++) {
        if (dataObj[i][1] != undefined) {
          var obj = {
            studentName: dataObj[i][0],
            collegeName: dataObj[i][1],
            dateOfSubmission: new Date(Date.now()).toLocaleString(),
            branch: dataObj[i][2],
            semester: dataObj[i][3],
            email: dataObj[i][4],
            phone: dataObj[i][5],
            referalCode: dataObj[i][6],
            timeSlot: dataObj[i][7],
            transaction: dataObj[i][8],
          };
          (async () => {
            await setDoc(
              doc(db, "autokritiRegistration", `${Date.now()}`),
              obj
            );
          })();
          counter++;
        }
      }
      //update counter
      (async () => {
        await setDoc(doc(collection(db, "LengthSelectedStudent"), "1111"), {
          len: counter,
        });
        document.querySelector(".displayFInalAmbassador_loader").style.display =
          "none";
        document.querySelector(
          ".displayFInalAmbassador_responseText"
        ).style.display = "block";
        document.querySelector(
          ".displayFInalAmbassador_responseText"
        ).textContent = "upload done!";
        setLoading(true);
        getInfo();
        setTimeout(() => {
          document.querySelector(
            ".displayFInalAmbassador_responseText"
          ).style.display = "none";
        }, 3000);
      })();
    });
    reader.readAsText(myFile);
  }
  /*-------------------------------- End Functions for file upload --------------------------------*/

  function filterSlot() {
    var chosenSlot = document.getElementById("reg_slot").value;

    slotData = [];

    if (chosenSlot == "Both Slots") {
      for (var i = 0; i < detailList.length; i++) {
        slotData.push(detailList[i]);
      }
      detailListSlot1 = [];
      detailListSlot2 = [];
      splitData = false;
    } else if (chosenSlot == "Slot 1") {
      for (var i = 0; i < detailList.length; i++) {
        if (detailList[i].timeSlot == "12 Feb") {
          slotData.push(detailList[i]);
        }
      }
      detailListSlot1 = [];
      detailListSlot2 = [];
      splitData = false;
    } else if (chosenSlot == "Slot 2") {
      for (var i = 0; i < detailList.length; i++) {
        if (detailList[i].timeSlot == "26 Feb") {
          slotData.push(detailList[i]);
        }
      }
      detailListSlot1 = [];
      detailListSlot2 = [];
      splitData = false;
    } else {
      for (var i = 0; i < detailList.length; i++) {
        if (detailList[i].timeSlot == "26 Feb")
          detailListSlot2.push(detailList[i]);
        else detailListSlot1.push(detailList[i]);
      }

      splitData = true;

      setSplitData(splitData);
      setDetailListSlot1(detailListSlot1);
      setDetailListSlot2(detailListSlot2);
    }

    setSlotData(slotData);
  }

  function filterSemester() {
    var chosenSemester = document.getElementById("reg_sem").value;
    // console.log(slotData);

    if (chosenSemester == "All") {
      semData = detailList;
    } else {
      semData = [];
      for (var i = 0; i < detailList.length; i++) {
        if (detailList[i].semester == chosenSemester) {
          semData.push(detailList[i]);
        }
      }
    }

    setSemData(semData);
  }

  function filterReferal() {
    //Referal Code is not working. It is not filtering out all the refeal codes for some reason
    var showReferal = document.getElementById("reg_ref").value;

    // refData = [];

    if (showReferal == "YES") {
      //show referal
    //   for (var i = 0; i < detailList.length; i++) {
    //     if (detailList[i].referalcode != "") {
    //       refData.push(detailList[i]);
    //     }
    //   }
    //   setRefData(refData);
      return true;
    } else if (showReferal == "NO") {
      //don't show referal and don't do anything. Array will remain empty
    }

    return false;
  }

  function handleSubmit() {
    filterSlot();
    filterSemester();
    const calcRef = filterReferal();

    finalData = [];

    semData.map((entry) => {
      for (var i = 0; i < slotData.length; i++) {
        if (calcRef == true) {
          if (entry.phone == slotData[i].phone && entry.referalcode != "") {
            finalData.push(entry);
            break;
          }
        }
        else{
            if (entry.phone == slotData[i].phone) {
                finalData.push(entry);
                break;
              } 
        }
      }
    });

    console.log("Split: " + splitData);

    setFinalData(finalData);
  }

  return (
    <>
      <PageHeader heading="Autokriti Registeration" />
      <BackSignOutPanel />
      <div className="displayDiv">
        <div className="displayFInalAmbassador_uploadBox">
          <input
            type="file"
            id="userFileInput"
            onChange={processFile}
            accept=".csv"
          />
          <div
            className="displayFInalAmbassador_uploadFileButton"
            onClick={triggerFileInput}
          >
            Upload New
          </div>
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
      </div>

      <div className="display_analytics_reg">
        <div className="display_analytics_reg-filters">
          <div className="display_analytics_reg-filter">
            Slot:
            <br />
            <select onChange={filterSlot} id="reg_slot">
              <option value="Both Slots">Both Slots</option>
              <option value="Slot 1">Slot 1</option>
              <option value="Slot 2">Slot 2</option>
              <option value="Divide Slots">Divide Slots</option>
            </select>
          </div>
          {/* {
                        console.log("SLOT")
                    }
                    {
                        console.log(slotData)
                    }
                    {
                        console.log("SEM")
                    }
                    {
                        console.log(semData)
                    } */}
          <div className="display_analytics_reg-filter">
            Semester:
            <br />
            <select onChange={filterSemester} id="reg_sem">
              <option value="All">All Semesters</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>

          <div className="display_analytics_reg-filter">
            Referal Code:
            <br />
            <select onChange={filterReferal} id="reg_ref">
              <option value="NO">Show All</option>
              <option value="YES">Show Only Referals</option>
            </select>
          </div>

          <button className="display_analytics_reg-btn" onClick={handleSubmit}>
            Query Data
          </button>
        </div>

        <div className="displayResponses_slot1">
          Total Responses : {finalData.length}
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
              {finalData.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.studentName}</td>
                    <td>{item.collegeName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.transaction}</td>
                    <td>{item.referalcode}</td>
                    <td>{item.timeSlot}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* For Split */}
        {/* <div className="displayResponses_slot1">
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
                            {console.log(detailListSlot1)}
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
                </div> */}
      </div>
    </>
  );
}

export default DisplaySignUpSheet;
