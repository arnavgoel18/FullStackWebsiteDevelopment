import React, { useRef,useEffect, useState} from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./Certificate.css";
import db from "../../Firebase.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer(black)/FooterBlack";
import { useParams } from "react-router-dom";
var flag = true;

const Chart = React.forwardRef((props, ref) => {
  const { id } = useParams();
  const [authorised_user, setauthorised_user] = useState({});
  async function getdata() {
    const docRef = doc(db, "paymentregistrationid", id);
    const docSnap = await getDoc(docRef);
    setauthorised_user(docSnap.data());
  }

  useEffect(() => {
    console.log('run');
    flag = false;
    getdata();
  }, []);

  return (
    <>

    <div ref={ref} style={{ maxWidth: "800px" }}>
      <div className='certi'>
This is to certify that 
      </div>
      {authorised_user.name}
      <div id="certi-id" style={{ textAlign: "center", visibility: "hidden" }}>
      
      </div> {/* Visibility set to hidden using css */}
    </div>
  
    </>
  );
});

const Certificate = () => {

  const componentRef = useRef();
  
  return (
    <>
        <NavBar/>
    <React.Fragment>
      <Chart ref={componentRef} />
     
      <button
        style={{ margin: "30px" }}
        onClick={() => exportComponentAsPNG(componentRef, {
            html2CanvasOptions: {
              onclone: (clonedDoc) => {
                clonedDoc.getElementById("certi-id").style.visibility = "visible";
                // Visibility set to visible using `onclone` method
              },
            },
          })
        }
      >
        Download
      </button>
    
    </React.Fragment> 
    <Footer/>
    </>
  );
};

export default Certificate;
