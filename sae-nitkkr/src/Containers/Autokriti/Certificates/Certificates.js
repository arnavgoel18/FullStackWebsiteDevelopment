import React, { Component, useState } from "react";
import "./Certificates.css";
import Footer from "../../../Components/Footer/Footer(black)/FooterBlack";
import NavBar from "../../../Components/NavBar/NavBar";
import db from "../../../Firebase";
import {
  getStorage,
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { Link } from "react-router-dom";
// import jsPDF from 'jspdf';


function Certificates() {
  
  var [img, setImg] = useState("none");

  async function getDbData() {
 

    var imgNo = document.getElementsByClassName("imgNumber")[0].value;
    const storage = getStorage();
    let folder = ref(storage, `certificates//${imgNo}.jpg`);
    setImg(imgNo);

    await getDownloadURL(folder).then((url) => {
      console.log(url);
      window.location.href = '/autokriti/certificate?certiNo=' + imgNo;
      // alert("certificate added");
    });

  
  }

  

  return (
    <>
      <NavBar />
      <div className='App'>
        <h2>Enter Phone no</h2>
        <input
          type='tel'
          className='imgNumber'
          style={{
            marginTop: '20px',
            width: '50vw',
            textAlign: 'center',
            color: 'black',
          }}
        />
        <button className='shrbtn' onClick={getDbData}>
          GetLink
        </button>
       
      </div>

      <Footer />
    </>
  )
}

export default Certificates;
