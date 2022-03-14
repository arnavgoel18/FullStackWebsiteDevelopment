import Popup from "./Popup";
import { useState, useEffect } from "react";
import img1 from "./Images/autokirti.jpeg";
import {db1} from "../../../Firebase";
// import { getStorage, ref, deleteObject } from "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import "./Popup.css";
import { Link } from "react-router-dom";
// import db from "../../../Firebase";

function Compo_popup() {
  useEffect(() => {
    getpopupInfo();
  }, []);
  var [popupResult, setResult] = useState([]);
  async function getpopupInfo() {
    const popup = collection(db1, "popup");
    const popup_doc = await getDocs(popup);
    const popupList = popup_doc.docs.map((doc) => doc.data());
    setResult(popupList);
    return popupList;
  }
//   const [Popup, setBlogs] = useState([]);
//   const fetchPopup = async () => {
//     const response = db.collection("Popup");
//     const data = await response.get();
//     data.docs.forEach((item) => {
//       setBlogs([...Popup, item.data()]);
//     });
//   };

  const [open, setOpen] = useState(false);

  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
  
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000);
  }, []);

  const cardsInfo = [
    {
      image:
        "https://media.istockphoto.com/photos/quiz-time-concept-speech-bubble-with-pencil-on-yellow-background-picture-id1268465415?k=20&m=1268465415&s=612x612&w=0&h=dzRhC8EPw1bZTIDzxc0416FaL8IF71RCPNjBlYUgzQA=",
      title: "Register for Quiz ",
      link: " ",
    },
    {
      image:
        "https://image.freepik.com/free-vector/ambassador-concept-illustration_114360-7557.jpg",
      title: "Register for Ambassdor ",
      link: " ",
    },
    { image: img1, title: "register for autokirti ", link: " " },
  ];


  const renderCard = (card, index) => {
    return (
      <div className="popup_card_image_container" key={index}>
 <Link to={card.Link}> 
        <img src={img1} alt="burgur" className="popup_image" />
        <h3 className="popup_card_title">{card.Title}</h3>
        
       </Link>
      </div>
    );
  };

  return (
    <div className="App">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        {popupResult.map(renderCard)}
      </Popup>
    </div>
  );
}

export default Compo_popup;
