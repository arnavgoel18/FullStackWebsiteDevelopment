import React, {useState} from 'react';
import db from "../../../Firebase";

import {
  getStorage,
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import './Certificates.css'

// import { saveAs } from "file-saver";

function CertiImage() {
    const params = new URL(document.location).searchParams;
    const certiNo = params.get("certiNo");

    var [tester, setTester] = useState(true);
    var [certiUrl, setCertiUrl] = useState('none');


    async function getDbData() {
        //var imgNo = document.getElementsByClassName("imgNumber")[0].value;
        const storage = getStorage();
        let folder = ref(storage, `certificates//${certiNo}.jpg`);
    
        await getDownloadURL(folder).then((url) => {
          setCertiUrl(url);
          console.log(url);
          //alert("url link added");
        });
      }

      if (tester == true) {
        window.addEventListener("load", getDbData());
        setTester(false);
    }

    function download(e){
      var element = document.createElement("a");
    var file = new Blob(
      [
        certiUrl
      ],
      { type: "image/*" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "certificate.jpg";
    element.click();
    }

  
      
  return (
    <div className='certificate-image'>
      {/* <i
        onClick={download}
        style={{ float: 'right', border: 'none', marginRight: '10px' }}
        className='fa fa-download '
        aria-hidden='true'
      ></i> */}

      <a href={certiUrl} download>
      <img
        src={certiUrl}
        alt='Autokriti Certificate'
        className='downloadMe'
        style={{ height: '95vh', width: '95vw' }}
      />
      </a>
    </div>
  )
}

export default CertiImage;