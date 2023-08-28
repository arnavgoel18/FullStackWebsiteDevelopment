import React, { Component, useState } from "react";
import '../Certificates/Certificates.css';
import Footer from "../../../Components/Footer/Footer";
import NavBar from "../../../Components/NavBar/NavBar";
import db from "../../../Firebase";
import {
  getStorage,
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";


function Certificates() {
  
  var [img, setImg] = useState("none");

  // var [tester, setTester] = useState(true);
  // var [allData, setAllData] = useState('');
  // var [CsvDetail, setcsv] = useState({});

  // var mergedCsvData = [];
  // var cvsFileData =[];
  
  async function getDbData() {
    var imgNo = document.getElementsByClassName("imgNumber")[0].value;
    const storage = getStorage();
    let folder = ref(storage, `autokriti12Certificates//${imgNo}.jpg`);
    setImg(imgNo);

    await getDownloadURL(folder).then((url) => {
      console.log(url);
      window.location.href = '/autokriti12/certificate?certiNo=' + imgNo;
    });
  }

  // async function getallurl(){
  //   const all = collection(db, "autokritiRegistration");
  //   var amb_doc = await getDocs(all);
  //   amb_doc.forEach((doc) => {
  //     cvsFileData = [
  //       [doc.data().email],
  //       ['www.saenitkurukshetra.in/autokriti/certificate?certiNo='+doc.data().phone],
  //     ];

  //     mergedCsvData.push(cvsFileData);
  //   });
  //   setcsv(mergedCsvData);

    
  // }

  // function downloadCsv() {
  //   var csv =
  //   'Email, URL';
  //   csv += "\n";

  // CsvDetail.forEach(function (row) {
  //   //to replace , with ;
  //   row.forEach(function (row1) {
  //     row1[0] = row1[0].replace(/,/g, ";");
  //     row1[0] = row1[0].replace(/\n/g, ";");
  //   });
  //   csv += row.join(",");
  //   csv += "\n";
  // });

  // var hiddenElement = document.createElement("a");
  // hiddenElement.href =
  //   "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csv);
  // hiddenElement.target = "_blank";

  // //provide the name for the CSV file to be downloaded
  // hiddenElement.download = "url.csv";
  // hiddenElement.click();
  // }

  // if (tester == true) {
  //   window.addEventListener("load", getallurl());
  //   setTester(false);
  // }
  

  return (
    <>
      <NavBar />
      <div className='App'>
        <h2>Enter Phone no (for Autokriti 12 certificates)</h2>
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
        {/* <button onClick={downloadCsv}>csv</button> */}
       
      </div>

      <Footer />
    </>
  )
}

export default Certificates;
