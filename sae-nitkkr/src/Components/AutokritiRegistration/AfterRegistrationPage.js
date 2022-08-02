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
import { useParams, Link} from "react-router-dom";

function AfterRegistrationPage() {
  var emailList=[];
  const { id } = useParams();
  const [authorised_user, setauthorised_user] = useState({});
  const [qrvisible, setqrvisible] = useState(false);
  const [imageURL, setimageURL] = useState("");
  const [certiUrl, setcertiUrl] = useState("");
  let user = {};

  async function getdata() {
    const docRef = doc(db, "paymentregistrationid", id);
    const docSnap = await getDoc(docRef);
    setauthorised_user(docSnap.data());
    setqrvisible(true);
  }
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

  
  return (
    <div>
      <NavBar />

      {/* <div className='payment-id-div'>
        <i className="fa fa-user" aria-hidden="true"></i>
        <p >{id}</p></div>
      <br /> */}
      <div className="qr_div">

          <div className='qr_code'>
          {qrvisible && (

            <QRCodeSVG
              value={
                `https://saenitkurukshetra.in/registered/${authorised_user.paymentid}`
              }
              size='220'
            //  className='qr-code'
            />

          )}
        </div>
        <div className="qr-inst">A mail has been sent to your email address confirming your registeration.
        <br/>
        Please Download this Qr code and show this at time of arrival for Workshop 
        <br/>
        For any queries Contact us at<br/>

        <a className='contactus-link'href="https://saenitkurukshetra.in/contactus">@saenitkurukshetra.in/contactus</a>
        <br/>
        {imageURL != "" ? (
            <a href={imageURL} download> <button className="qr-code-btn">Download Qr Code</button>
              {/* <img src={imageURL} alt="notfound" />{" "} */}
            </a>
          ) : null}
        </div>
          
        </div>
      
      <div className="afterregistration_box">
      <table border={1} className='after-reg-table'>
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
          <tr>
            <td className="td-first">TIMESLOT ({authorised_user.firstChoice})</td>
            <td>{authorised_user.timeSlot1} August</td>
          </tr>{" "}
          <tr>
            <td className="td-first">TIMESLOT 2</td>
            <td>{authorised_user.timeSlot2} August</td>
          </tr>{" "}
          <tr>
            <td className="td-first">REFERAL</td>
            <td>{authorised_user.referal}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">NEED ACCOMODATION</td>
            <td>{authorised_user.accomodation}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">DEPARTMENT</td>
            <td> {authorised_user.department} </td>
          </tr>{" "}
          <tr>
            <td className="td-first">STATUS</td>
            <td>{authorised_user.status}</td>
          </tr>
          <tr>
            <td className="td-first">Certificate</td>
            
            <td><Link to={`/register/certificate/${id}`} style={{color: "blue"}}>Download</Link>
            </td>
          </tr>
        </table>
       
      </div>
      <Footer />
    </div>
  );
}

export default AfterRegistrationPage;
