import React, { useEffect, useState } from "react";
import db from "../../Firebase.js";
import './AfterRegistrationPage.css'
import {QRCodeSVG} from 'qrcode.react';
import QRCode from 'qrcode'
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
const { id } = useParams()
const [authorised_user, setauthorised_user] = useState({});
const [qrvisible,setqrvisible]=useState(false)
const[imageURL,setimageURL]=useState("")
let user={}
    async function getdata () {
        const docRef = doc(db, "paymentregistrationid", id);
        const docSnap = await getDoc(docRef);
        setauthorised_user(docSnap.data())
        console.log(docSnap.data());
        setqrvisible(true)
        
      }
      
      const generateQrcode =async ()=>
      {
        try{
            const response =await QRCode.toDataURL(authorised_user.paymentid)
            setimageURL(response)

        }catch(error)
        {
            console.log(error)
        }
      }
useEffect(() => {
    getdata();
 }, [imageURL])
 window.onload=generateQrcode()
  return (
    
    <div >
        <NavBar/>
        <p>{id}</p>
        <p className='payform-heading'>AFTER REGISTRATION PAGE</p>
<div className="afterregistration_box">
        <table border={1}>
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
    
  </tr> <tr>
    <td>BRANCH</td>
    <td>{authorised_user.branch}</td>
    
  </tr>
  <tr>
    <td>SEMESTER</td>
    <td>{authorised_user.semester}</td>
    
  </tr> <tr>
    <td>PHONE NO.</td>
    <td>{authorised_user.phone}</td>
    
  </tr> <tr>
    <td>ORDER ID</td>
    <td>{authorised_user.orderid}</td>
    
  </tr> <tr>
    <td>PAYMENT ID</td>
    <td>{authorised_user.paymentid}</td>
    
  </tr> <tr>
    <td>TIMESLOT</td>
    <td>{authorised_user.timeSlot}</td>
    
  </tr> <tr>
    <td>REFERAL</td>
    <td>{authorised_user.referal}</td>
    
  </tr>
</table>
<div className="qr_div">
<h3> ONLY QR Code</h3>
{qrvisible && <a href="qr"><QRCodeSVG  value={authorised_user.paymentid}/></a>}
<br/>
<h3> QR CODE Image(click once to download)</h3>
{imageURL!=""?(<a href={imageURL} download><img src={imageURL} alt="notfound"/> </a>):null}
</div>
</div>
        <Footer/>
    </div>
  )
}

export default AfterRegistrationPage