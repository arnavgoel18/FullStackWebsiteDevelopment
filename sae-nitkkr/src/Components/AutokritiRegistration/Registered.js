import React, { useEffect, useState } from "react";
import db from "../../Firebase.js";
import {FaUser} from 'react-icons/fa';
import "./Registered.css";
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
function Registered() {
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

  function changestatus(){
    let status = document.getElementsByTagName('input')[0].value;
    if(status == 'saecode')
    {
        updateDoc(doc(db, "paymentregistrationid", id), {
            status: 'Arrived'
          }).then((res) => {
            alert("Status changed to arrived. Refresh the page.");
            });
    }
  }

  return (
    <>
      <NavBar />
      <div className="registered_id">
      <FaUser className="iconlarge"></FaUser>
      <h3>{id}</h3>
      </div>
      <table border={1} className='registered_table'>
          <tr>
            <th>TITLES</th>
            <th>VALUES</th>
          </tr>
          <tr>
            <td>NAME</td>
            <td>{authorised_user.name}</td>
          </tr>
          <tr>
            <td>EMAIL</td>
            <td>{authorised_user.email}</td>
          </tr>
          <tr>
            <td>COLLEGE</td>
            <td>{authorised_user.college}</td>
          </tr>{" "}
          <tr>
            <td>BRANCH</td>
            <td>{authorised_user.branch}</td>
          </tr>
          <tr>
            <td>SEMESTER</td>
            <td>{authorised_user.semester}</td>
          </tr>{" "}
          <tr>
            <td>PHONE NO.</td>
            <td>{authorised_user.phone}</td>
          </tr>{" "}
          <tr>
            <td>ORDER ID</td>
            <td>{authorised_user.orderid}</td>
          </tr>{" "}
          <tr>
            <td>PAYMENT ID</td>
            <td>{authorised_user.paymentid}</td>
          </tr>{" "}
          <tr>
            <td>TIMESLOT</td>
            <td>{authorised_user.timeSlot}</td>
          </tr>{" "}
          <tr>
            <td>REFERAL</td>
            <td>{authorised_user.referal}</td>
          </tr>{" "}
          <tr>
            <td>STATUS</td>
            <td>{authorised_user.status}</td>
          </tr>
        </table>

        <hr />
        <div className="registered_office">
            <h3>*Only for Office use</h3><br />
            <div>
            <p>Change the student status (Enter the code):</p>
            <input type="text" name="code" id="code" />
            </div>
            <button type="submit" onClick={changestatus}>Submit</button>
        </div>
      
      <Footer />
    </>
  );
}

export default Registered;
