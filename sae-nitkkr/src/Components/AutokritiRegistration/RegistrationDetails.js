import React, { useEffect, useState } from "react";
import db from "../../Firebase.js";

import "./RegistrationDetails.css";
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
function RegistrationDetails() {

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
    <NavBar/>
    <div className="reg-details-heading">
    <h1 className="reg-details-h1">Registeration Details</h1>
    <button className='pay-btn'>Pay Now</button></div>
    
    <div className='reg-details'>
 <table border={1} className='reg-details-table'>
          <tr>
            <th>TITLES</th>
            <th>VALUES</th>
          </tr>
          <tr>
            <td className="td-first">NAME</td>
            <td>{authorised_user.name}</td>
          </tr>
          <tr>
            <td className="td-first">EMAIL</td>
            <td>{authorised_user.email}</td>
          </tr>
          <tr>
            <td className="td-first">COLLEGE</td>
            <td>
              {authorised_user.college}
            </td>
          </tr>{" "}
          <tr>
            <td className="td-first">BRANCH</td>
            <td>
              {authorised_user.branch}
            </td>
          </tr>
          <tr>
            <td className="td-first">SEMESTER</td>
            <td>{authorised_user.semester}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">PHONE NO.</td>
            <td>{authorised_user.phone}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">ORDER ID</td>
            <td>{authorised_user.orderid}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">PAYMENT ID</td>
            <td>{authorised_user.paymentid}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">TIMESLOT</td>
            <td>{authorised_user.timeSlot}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">REFERAL</td>
            <td>{authorised_user.referal}</td>
          </tr>{" "}
          
         
        
        </table>
      
      
    </div>
    <Footer/>
    </>
  )
}

export default RegistrationDetails;
