import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import DisplayContactCard from "./DisplayContactCard";
import "./DisplayContact.css";
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";
import PageHeader from "../../../Components/Backend/PageHeader/PageHeader";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import db from "../../../Firebase.js";
import { collection, getDocs } from "firebase/firestore";

//function for drag and drop
const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    console.log(source.droppableId, sourceItems);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

//function that we are exporting
function DisplayContactInfo() {
  var detailList = [];
  var cvsFileData = [];
  var mergedCsvData = [];
  var todo = [];
  var progress = [];
  var done = [];

  //const [itemsFromBackend, setItemsFromBackend] = useState([]);
  const [columns, setColumns] = useState({});
  var [tester, setTester] = useState(true);
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
        [doc.data().status],
      ];

      mergedCsvData.push(cvsFileData);

      if (doc.data().status == "new") {
        todo.push(doc.data());
      }
      if (doc.data().status == "progress") {
        todo.push(doc.data());
      }
      if (doc.data().status == "done") {
        todo.push(doc.data());
      }
    });
    setCsvDetail(mergedCsvData);
    // setItemsFromBackend(detailList);

    const columnsFromBackend = {
      todo: {
        name: "To do",
        items: todo,
      },
      progress: {
        name: "In Progress",
        items: progress,
      },
      done: {
        name: "Completed",
        items: done,
      },
    };
    setColumns(columnsFromBackend);
    //console.log(todo, columnsFromBackend);
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
      "Name,EmailId,phoneNo,Institute/Organisations(optional),Your Message *,Reason to Contact *,Person Contacting us is a *, status";
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
      <div className="displaycontact_displayContactBody">
        <PageHeader heading="ContactUs Responses" />
        <BackSignOutPanel />
        <div className="displaycontact_contactResponse">
          <div className="displaycontact_conResData">
            <div>Pending: {progress.length}</div>
            <div>Completed: {done.length}</div>
          </div>
          <a className="displaycontact_downloadCsv">
            <i
              onClick={downloadCsv}
              className="fa fa-download"
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                  key={columnId}
                >
                  <h2>{column.name}</h2>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                              padding: 4,
                              width: 450,
                              minHeight: 500,
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={index}
                                  draggableId={item.PhoneNo}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <DisplayContactCard
                                          name={item.Name}
                                          reason={item.s1}
                                          message={item.Message}
                                          emailid={item.EmailId}
                                          mobile={item.PhoneNo}
                                          person={item.s2}
                                          college={item.Organisation}
                                        />
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default DisplayContactInfo;
