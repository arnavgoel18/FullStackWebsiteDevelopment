import React, {useState} from 'react';
import db from "../../../Firebase";

import {
  getStorage,
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import './CAcerti.css'
import NavBar from '../../../Components/NavBar/NavBar';


// import { saveAs } from "file-saver";

function CAcertiImage() {
    const params = new URL(document.location).searchParams;
    const certiNo = params.get("certino");

    var [tester, setTester] = useState(true);
    var [certiUrl, setCertiUrl] = useState('none');


    async function getDbData() {
        //var imgNo = document.getElementsByClassName("imgNumber")[0].value;
        const storage = getStorage();
        let folder = ref(storage, `campusAmbassador//${certiNo}.jpg`);
    
        await getDownloadURL(folder).then((url) => {
          setCertiUrl(url);
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
    <>
      <NavBar/>
      <div className='certificate-download'>
        <a href={certiUrl}>
          <i
            // onClick={download}
            style={{ float: 'right', border: 'none', marginRight: '10px' }}
            className='fa fa-download '
            aria-hidden='true'
          ></i>
        </a>
      </div>
      <div className='certificate-image'>  
        <img
          src={certiUrl}
          alt='Ambassador Certificate'
          className='downloadMe'
        />
      </div>
    </>
  )
}

export default CAcertiImage;
