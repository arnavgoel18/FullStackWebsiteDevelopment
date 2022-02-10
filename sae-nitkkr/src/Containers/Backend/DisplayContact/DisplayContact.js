import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DisplayContactCard from "./DisplayContactCard";
import "./DisplayContact.css";
import db from "../../../Firebase.js";
import { collection, getDocs } from "firebase/firestore";
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";

function DisplayContactInfo() {
  var detailList = [];
  var cvsFileData = [];
  var mergedCsvData = [];
  
  const [characters, updateCharacters] = useState([]);
  var [tester, setTester] = useState(true);
  var [details, setDetails] = useState([]);
  var [CsvDetail, setCsvDetail] = useState({});

  //Get Information from Firebase into detailList array
  async function getContactInfo() {
    const contactUs = collection(db, "contactUs");
    var amb_doc = await getDocs(contactUs);
    detailList = amb_doc.docs.map((doc) => doc.data());

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
    setCsvDetail(mergedCsvData);
    updateCharacters(detailList);
  }

  if (tester == true) {
    window.addEventListener("load", getContactInfo());
    setTester(false);
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


  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
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
      <div className="displaycontact_displayContactBody">
        <PageHeader heading="ContactUs Responses" />
        <div className="displaycontact_displayDiv">
          <BackSignOutPanel />
          <div className="displaycontact_contactResponse">
            <div className="displaycontact_conResData">
              <div>Pending:</div>
              <div>Completed:</div>
            </div>
            <a className="displaycontact_downloadCsv">
              <i
                onClick={downloadCsv}
                className="fa fa-download"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <table className="displaycontact_contactResTable">
            <thead>
              <tr>
                <th className="displaycontact_heading">New Responses</th>
                <th className="displaycontact_heading">In Progress</th>
                <th className="displaycontact_heading">Finished</th>
              </tr>
            </thead>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <tbody
                    className="characters"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {characters.map((data, i) => {
                      return (
                          <Draggable key={i} draggableId={data.PhoneNo} index={i}>
                            {(provided) => (
                        <tr >
                              <td
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <DisplayContactCard
                                  name={data.Name}
                                  reason={data.s1}
                                  message={data.Message}
                                  emailid={data.EmailId}
                                  mobile={data.PhoneNo}
                                  person={data.s2}
                                  college={data.Organisation}
                                />
                              </td>
                        </tr>
                            )}
                          </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </tbody>
                )}
              </Droppable>
            </DragDropContext>
          </table>
        </div>
      </div>
    );
  }
}

export default DisplayContactInfo;
