import React, { useEffect, useState } from "react";
import db from "../../Firebase.js";
import "./AfterRegistrationPage.css";
import { QRCodeSVG } from "qrcode.react";
import QRCode from "qrcode";
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

function AfterRegistrationPage() {
  const { id } = useParams();
  const [authorised_user, setauthorised_user] = useState({});
  const [qrvisible, setqrvisible] = useState(false);
  const [imageURL, setimageURL] = useState("");
  let user = {};
  async function getdata() {
    const docRef = doc(db, "paymentregistrationid", id);
    const docSnap = await getDoc(docRef);
    setauthorised_user(docSnap.data());
    console.log(docSnap.data());
    setqrvisible(true);
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm("service_4o6ffqm", "template_9cvft8w", form.current, "USER_ID").then(
  //     (result) => {
  //       alert("Message Sent Successfully");
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
  // };
  const generateQrcode = async () => {
    try {
      const response = await QRCode.toDataURL(`https://saenitkurukshetra.in/registered/${authorised_user.paymentid}`);
      setimageURL(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, [imageURL]);
  window.onload = generateQrcode();

  // function sendemail(){
  //   var emailTo = "muskan626bidani@gmail.com" 
  //   var emailSub = "test" 
  //   var emailBody = "Hello world" 
  //   window.open("mailto:"+emailTo+'?cc='+'&subject='+emailSub+'&body='+emailBody,'_self');
  //   console.log('page is fully loaded');
    // document.write("<form name="form" action= \"mailto :"+ email +"\?subject="+ subject +"\&body="+ body +"\" method=\"post\" enctype=\"text/plain\"></form>");
  //    document.form.submit();
  // }
  // window.onload = (event) => {
  //   console.log('page is fully loaded');
  // };
  // window.onload=sendemail();
  return (
    <div>
      <NavBar />
      <div className='payment-id-div'>
      <i className="fa fa-user" aria-hidden="true"></i>
      <p >{id}</p></div>
      <br/>
      <p className="payform-heading">AFTER REGISTRATION PAGE</p>
      <div className="afterregistration_box">
        <table>
          <tr className="table_head">
            <th className="table_cell first_cell">TITLES</th>
            <th className="table_cell">VALUES</th>
          </tr>
          <tr className="table_row">
            <td className="table_cell first_cell">NAME</td>
            <td className="table_cell">{authorised_user.name}</td>
          </tr>
          <tr className="table_row">
            <td className="table_cell first_cell">EMAIL</td>
            <td className="table_cell">{authorised_user.email}</td>
          </tr>
          <tr className="table_row">
            <td className="table_cell first_cell">COLLEGE</td>
            <td className="table_cell">{authorised_user.college}</td>
          </tr>{" "}
          <tr className="table_row">
            <td className="table_cell first_cell">BRANCH</td>
            <td className="table_cell">{authorised_user.branch}</td>
          </tr>
          <tr className="table_row">
            <td className="table_cell first_cell">SEMESTER</td>
            <td className="table_cell">{authorised_user.semester}</td>
          </tr>{" "}
          <tr className="table_row">
            <td className="table_cell first_cell">PHONE NO.</td>
            <td className="table_cell">{authorised_user.phone}</td>
          </tr>{" "}
          <tr className="table_row">
            <td className="table_cell first_cell">ORDER ID</td>
            <td className="table_cell">{authorised_user.orderid}</td>
          </tr>{" "}
          <tr className="table_row">
            <td className="table_cell first_cell">PAYMENT ID</td>
            <td className="table_cell">{authorised_user.paymentid}</td>
          </tr>{" "}
          <tr className="table_row">
            <td className="table_cell first_cell">TIMESLOT</td>
            <td className="table_cell">{authorised_user.timeSlot}</td>
          </tr>{" "}
          <tr className="table_row">
            <td className="table_cell first_cell">REFERAL</td>
            <td className="table_cell">{authorised_user.referal}</td>
          </tr>
          <tr className="table_row">{" "}
            <td className="table_cell first_cell">STATUS</td>
            <td className="table_cell">{authorised_user.status}</td>
          </tr>
        </table>
        <div className="qr_div">
          <h3> ONLY QR Code</h3>
          {qrvisible && (
            <a href="qr">
              <QRCodeSVG
                value={
                  `https://saenitkurukshetra.in/registered/${authorised_user.paymentid}`
                }
              />
            </a>
          )}
          <br />
          <h3> QR CODE Image(click once to download)</h3>
          {imageURL != "" ? (
            <a href={imageURL} download>
              <img src={imageURL} alt="notfound" />{" "}
            </a>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AfterRegistrationPage;
