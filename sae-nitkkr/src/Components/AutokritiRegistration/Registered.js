import React, { useEffect, useState } from "react";
import db from "../../Firebase.js";
import { FaUser } from "react-icons/fa";
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
import Footer from "../Footer/Footer.js";
import { useParams } from "react-router-dom";

var flag = true;
function Registered() {
  const { id } = useParams();
  const [authorised_user, setauthorised_user] = useState({});
  var [depart, setDepart] = useState([]);

  async function getdata() {
    const docRef = doc(db, "AutokritiRegistration2024", id);
    const docSnap = await getDoc(docRef);
    setauthorised_user(docSnap.data());
    setDepart(docSnap.data().department);
  }

  useEffect(() => {
    console.log("run");
    flag = false;
    getdata();
  }, []);

  function changestatus() {
    let status = document.getElementsByTagName("input")[0].value;
    if (status == "saecode") {
      updateDoc(doc(db, "AutokritiRegistration2024", id), {
        status: "Arrived",
      }).then((res) => {
        alert("Status changed to arrived. Refresh the page.");
      });
    }
  }

  return (
    <>
      <NavBar />

      <table border={1} className="registered_table">
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
          <td>{authorised_user.college}</td>
        </tr>{" "}
        <tr>
          <td className="td-first">BRANCH</td>
          <td>{authorised_user.branch}</td>
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
        {depart.map((e,i)=>
          { 
            return(
            <tr>
            <td className="td-first">{e} WORKSHOP</td>
            {i==0?<td>{authorised_user.timeSlot1} September</td>:<td>{authorised_user.timeSlot2} September</td>}
          </tr>)

          })}
        <tr>
          <td className="td-first">REFERAL</td>
          <td>{authorised_user.referal}</td>
        </tr>{" "}
        <tr>
            <td className="td-first">NEED ACCOMODATION</td>
            <td>{authorised_user.accomodation}</td>
          </tr>{" "}
        <tr>
            <td className="td-first">AMOUNT PAID</td>
            <td>{authorised_user.amount}</td>
          </tr>{" "}
      
        <tr>
            <td className="td-first">CASH ON DELIVERY</td>
            <td>{authorised_user.cod}</td>
          </tr>{" "}
        <tr>
          <td className="td-first">DEPARTMENT</td>
          <td>{depart[0]},{depart[1]}</td>
        </tr>{" "}
        <tr>
          <td className="td-first">STATUS</td>
          <td>{authorised_user.status}</td>
        </tr>
        <tr>
          <td className="td-first">TIME</td>
          <td>{authorised_user.Registration_time}</td>
        </tr>
      </table>

      <hr />
      <div className="registered_office">
        <h3>*Only for Office use</h3>
        <br />
        <div>
          <p>Change the student status (Enter the code):</p>
          <input type="text" name="code" id="code" />
        </div>
        <button type="submit" onClick={changestatus}>
          Submit
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Registered;
