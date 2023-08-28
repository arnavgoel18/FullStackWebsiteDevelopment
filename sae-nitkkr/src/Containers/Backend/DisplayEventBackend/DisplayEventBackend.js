import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";
import TopicCardHolderEvent from "../../../Components/Blogs/TopicsCardHolder/TopicCardHolderEvent";

//firestore
import { db1 } from "../../../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

function AllPopUpPage() {
  const [forreload, setForreload] = useState([]);
  const [eventtitle, seteventtitle] = useState("");
  const [eventdata,seteventdata]=useState("");
  const [eventdate,seteventdate]=useState("");
  const [eventregistrationlink,seteventregistrationlink]=useState("");

  const [popupdescription, setpopupdescription] = useState("");
  const [popuplink, setpopuplink] = useState("");
  const [addmodal, setaddmodal] = useState(false);
  var [popupResult, setResult] = useState([]);
  const storage = getStorage();
  async function getclapInfo() {
    const clap = collection(db1, "EventBackend");
    const clap_doc = await getDocs(clap);
    const clapList = clap_doc.docs.map((doc) => doc.data());

    setResult(clapList);
  }

  async function getpopupInfo() {
    const EventBackend = collection(db1, "EventBackend");
    const popup_doc = await getDocs(EventBackend);
    const popupList = popup_doc.docs.map((doc) => doc.data());
    setResult(popupList);
    return popupList;
  }
  async function deletePopup(timestamp) {
    console.log(timestamp);
    await deleteDoc(doc(db1, "EventBackend", `${timestamp}`));
    getclapInfo();
  }

  useEffect(() => {
    setForreload([...forreload, getpopupInfo()]);
  }, []);
  const token = localStorage.getItem("token");

  let loggedin = true;
  if (token == null) {
    loggedin = false;
  }

  if (loggedin == false) {
    return <Redirect to="/admin/login" />;
  }

  return (
    <div>
      <BackSignOutPanel />
      <div className="backendBlogPanel">
        <h4 id="totalHeading">
          Total no. of Counter Templates: {popupResult.length}
        </h4>

        <button
          className="addNewBlog"
          type="button"
          onClick={() => {
            console.log("hello");

            setaddmodal(true);
          }}
        >
          <i className="fa fa-plus fa-customize fa-fw"></i> Add new Template
        </button>
      </div>
      {addmodal == true ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "5%",
            marginRight: "5%",
            paddingBottom: "20px",
          }}
        >
          <br />
          <input
            id="popuptitle"
            type="text"
            placeholder="Topic Title"
            style={{ width: "40%", marginLeft: "30%" }}
            onChange={(e) => {
              seteventtitle(e.target.value);
              console.log(eventtitle);
            }}
          />
          <br />
         
          <input
            type="text"
            placeholder="Data"
            style={{ width: "40%", marginLeft: "30%" }}
            onChange={(e) => {
              seteventdata(e.target.value);
              console.log(eventdata);
            }}
          />
           <br />
          <input
            type="text"
            placeholder="Date"
            style={{ width: "40%", marginLeft: "30%" }}
            onChange={(e) => {
              seteventdate(e.target.value);
              console.log(eventdate);
            }}
          />
          <br />
    
          <input
            type="text"
            placeholder="Registration Link"
            style={{ width: "40%", marginLeft: "30%" }}
            onChange={(e) => {
              seteventregistrationlink(e.target.value);
              console.log(eventregistrationlink);
            }}
          />
          <br/>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                width: "10%",
                color: "white",
                backgroundColor: "red",
                marginRight: "10px",
                height: "30px",
                borderRadius: "10px",
              }}
              onClick={() => {
                // setpopupdescription("");
                // setpopuptitle("");
                // setaddmodal(false);
              }}
            >
              Discard
            </button>
            <button
              style={{
                width: "10%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "10px",
              }}
              onClick={() => {
                let clap_data = {
                  Data: eventtitle,
                  Date: eventdata,
                  RegistrationLink: eventregistrationlink,
                  Topic:eventtitle,
                  timestamp: "",
                };
                setInfo(clap_data);
                getclapInfo();
                function setInfo(clap_data) {
                  var timestamp = String(new Date().getTime());
                  clap_data.timestamp = timestamp;
                  setDoc(doc(db1, "EventBackend", timestamp), clap_data);
                }
                setaddmodal(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="card_contain">
        {popupResult.map((detail, index) => {
          return (
            <div key={index} style={{ width: "45%", padding: "20px" }}>
              <TopicCardHolderEvent
                eventdata={detail.Data}
                eventtpoic={detail.Topic}
                eventdate={detail.Date}
                eventpagelink={detail.RegistrationLink}
                srcs="https://img.icons8.com/ios/1000/000000/counter--v2.png"
              />

              <div className="blogIcons">
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => deletePopup(detail.timestamp)}
                ></i>
                <i
                  className="fa fa-pencil-square-o"
                  aria-hidden="true"
                  onClick={() => {
                    setaddmodal(true);
                    getpopupInfo();
                    popupResult.map((seconddetail, index) => {
                      if (detail.timestamp == seconddetail.timestamp) {
                        console.log("genius");
                      }
                    });
                   
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllPopUpPage;
