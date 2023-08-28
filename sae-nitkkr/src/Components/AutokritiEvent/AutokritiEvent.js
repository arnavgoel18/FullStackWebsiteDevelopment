import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./AutokritiEvent.css";
import { db1 } from "../../Firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
// import { getStorage, ref, deleteObject } from "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import $ from "jquery";

function AutokritiEvent() {
  useEffect(() => {
    getpopupInfo();
    // getpopupInfo();
  }, []);
  var [popupResult, setResult] = useState([]);
  async function getpopupInfo() {
    const popup = collection(db1, "EventBackend");
    const popup_doc = await getDocs(popup);
    const popupList = popup_doc.docs.map((doc) => doc.data());
    setResult(popupList);
    return popupList;
  }

  const renderCard = (card, index) => {
    return (
      <>
        <div id="acc_main_container">
          <div className="acc_container_main">
            <div className="acc_container_right_main">
              <div className="acc_container_right_main_part">
                <div className="acc_container_right_main_part1">
                  <div className="acc_container_right_main_part1_text">
                    {card.Data}
                  </div>
                  <div className="acc_container_right_main_part1_register">
                    <Link to="/e-Autokriti2.0">
                      <div className="acc_container_right_main_part1_register_btn">
                        <a>Register Here</a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="navigation_bar">
                <div
                  className="navigation-bar-left"
                  onClick={showRoadmap}
                  title="What is E-Autokriti?"
                ></div>
                <div
                  className="navigation-bar-right"
                  onClick={hideRoadmap}
                  title="View Roadmap"
                ></div>
              </div>
            </div>
            <div className="acc_container_left_main">
              <div className="acc_container_left_main_part1">
                <div>{card.Topic}</div>
                <div className="acc_container_left_main_part1_timing">
                  {card.Date}
                </div>
              </div>
              <div className="acc_container_left_main_part2"></div>
            </div>
          </div>
        </div>
      </>
    );
  };

  function showRoadmap(e) {
    $(e.target).animate(
      {
        width: "10%",
      },
      500,
      "swing"
    );
    $(".navigation-bar-right").animate(
      {
        width: "90%",
      },
      500,
      "linear"
    );
  }

  function hideRoadmap(e) {
    $(e.target).animate(
      {
        width: "10%",
      },
      500,
      "swing"
    );
    $(".navigation-bar-left").animate(
      {
        width: "90%",
      },
      500,
      "linear"
    );
  }

  return (
    <>
      {popupResult.map(renderCard)}
    </>
  );
}

export default AutokritiEvent;
