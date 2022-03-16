import React, { useState, useEffect } from "react";
// import PopForm from './PopForm'
import { Redirect } from "react-router-dom";
import TopicCardHolder from "../../../Components/Blogs/TopicsCardHolder/TopicsCardHolder";
import { db1 } from "../../../Firebase";
// import { getStorage, ref, deleteObject } from "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";
import TopicsCardHolderCounter from "../../../Components/Blogs/TopicsCardHolder/TopicsCardHolderCounter";
function AllPopUpPage() {
  const [forreload, setForreload] = useState([]);
  const [popuptitle, setpopuptitle] = useState("");
  const [popupdescription, setpopupdescription] = useState("");
  const [popuplink, setpopuplink] = useState("");
  const [addmodal, setaddmodal] = useState(false);
  var [popupResult, setResult] = useState([]);
  const storage = getStorage();
  async function getclapInfo() {
    const clap = collection(db1, "counterbackend");
    const clap_doc = await getDocs(clap);
    const clapList = clap_doc.docs.map((doc) => doc.data());

    setResult(clapList);
  }

  async function getpopupInfo() {
    const counterbackend = collection(db1, "counterbackend");
    const popup_doc = await getDocs(counterbackend);
    const popupList = popup_doc.docs.map((doc) => doc.data());
    setResult(popupList);
    return popupList;
  }
  async function deletePopup(timestamp) {
    console.log(timestamp);
    await deleteDoc(doc(db1, "counterbackend", `${timestamp}`));
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
            placeholder="Title Of counter"
            style={{ width: "40%", marginLeft: "30%" }}
            onChange={(e) => {
              setpopuptitle(e.target.value);
              console.log(popuptitle);
            }}
          />
          <br />
          {/* <input type="file" placeholder="Description" style={{"width":"40%","marginLeft":"30%"}}
               onChange={(e)=>
                {
                    setpopupdescription(e.target.value);
                    console.log(popupdescription);
                }}
              /> */}
          <br />
          <input
            type="text"
            placeholder="Number associated to it"
            style={{ width: "40%", marginLeft: "30%" }}
            onChange={(e) => {
              setpopuplink(e.target.value);
              console.log(popuplink);
            }}
          />
          <br />
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
                setpopupdescription("");
                setpopuptitle("");
                setaddmodal(false);
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
                  Title: popuptitle,
                  Description: popupdescription,
                  Link: popuplink,
                  timestamp: "",
                };
                setInfo(clap_data);
                getclapInfo();
                function setInfo(clap_data) {
                  //  console.log("set info called");
                  var timestamp = String(new Date().getTime());
                  clap_data.timestamp = timestamp;
                  setDoc(doc(db1, "counterbackend", timestamp), clap_data);

                  //   document.getElementById("clap_second_clapimage_white").style.opacity="0.2";
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
          //  console.log(detail);
          return (
            <div key={index} style={{ width: "45%", padding: "20px" }}>
              <TopicsCardHolderCounter
                title={detail.Title}
                number={detail.Link}
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
                    // editBlog(detail.timestamp)
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
