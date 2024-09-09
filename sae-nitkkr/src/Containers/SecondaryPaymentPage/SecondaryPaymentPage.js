import React, { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import NavBar from '../../Components/NavBar/NavBar'
import "../../Components/AutokritiRegistration/AutokritiRegistration.css";
import PAYTMQR from "../../Assets/PaymentQR/QRcode.jpg"
import emailjs from 'emailjs-com';
import db from "../../Firebase.js";
import {
  collection,
  getDocs, query, where, doc, setDoc, orderBy, limit,
} from "firebase/firestore";
import { toast, Toaster } from 'react-hot-toast';
import MoonLoader from "react-spinners/MoonLoader.js";

function SecondaryPaymentPage() {
  const params = new URL(document.location).searchParams;
  const timestamp = params.get("id");
  // console.log(timestamp);
  const [image, setImage] = useState('');
  let [department, setDepartment] = useState([]);
  const [authorised_user, setauthorised_user] = useState({});
  const [authorised_user2, setauthorised_user2] = useState({});
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [transactionid, setTransactionid] = useState(0);
  // const upiID = "9389755501@ybl"; // Replace with your UPI ID
  // const payeeName = "Vivek Kumar"; // Replace with your name
  // const transactionNote = "Payment for autokriti"; // Reason for the payment
  // const totalamount = amount; // Amount to pay (you can leave it blank if dynamic)
  // const currency = "INR"; // Currency (INR for India)
  // const upiLink = `upi://pay?pa=${upiID}&pn=${payeeName}&tn=${transactionNote}&am=${amount}&cu=${currency}`;
  useEffect(() => {
    // console.log("run");
    // flag = false;
    const items = JSON.parse(localStorage.getItem("userData"));
    const depart = JSON.parse(localStorage.getItem("department"));
    const items2 = JSON.parse(localStorage.getItem("userData2"));

    if (items) {
      setauthorised_user(items);
      setDepartment(depart);
      if (items.amount) {
        setAmount(items.amount);
      }
    }
    if (items2) {
      setauthorised_user2(items2);
      if (items2.amount) {
        setAmount((prev) => prev + items2.amount);
      }
    }
  }, []);
  // useEffect(()=>{
  //   if (authorised_user) {
  //     setAmount(authorised_user.amount);
  //   }
  //   if (authorised_user2) {
  //     setAmount((prev)=> prev+authorised_user2.amount)
  //   }
  //   console.log(amount);
  // },[])
  const sendEmail = async (userDetails) => {
    try {
      const response = await fetch('https://sae-backend.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });

      const result = await response.json();
      // console.log(response);
      if (response.ok) {
        // alert(result.message);
      } else {
        // alert(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      // alert('Failed to send email');
    }
  }

  async function fetchLatestRegistrationId() {
    const usersCollection = collection(db, "AutokritiRegistration2024"); // Replace with your collection name
    const q = query(usersCollection, orderBy("registrationId", "desc"), limit(1));

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const latestDoc = querySnapshot.docs[0];
        return latestDoc.data().registrationId;
      } else {
        return 124001; // Default start registrationId if no documents exist
      }
    } catch (error) {
      console.log("Error fetching latest registrationId:", error);
      return null;
    }
  }
  const upload = async () => {
    if (image === '') {
      toast.error('Please upload Screenshot')
      return;
    }
    if (transactionid === 0 || !transactionid) {
      toast.error('Plase Provide Transaction ID')
      return;
    }

    setLoading(true);
    document.getElementById("payform-button1").disabled = true;
    document.getElementById("payform-button1").style.background = "grey";
    if (image == null) {
      setLoading(false)
      return;
    }
    const storage = getStorage();
    const coverPhotoRef = ref(storage, `/AutokritiRegistration2024/${timestamp}`);
    authorised_user["department"] = department;
    authorised_user.paymentid = timestamp;
    authorised_user.transactionid = transactionid;
    const latestRegistrationId = await fetchLatestRegistrationId();
    authorised_user.registrationId = latestRegistrationId + 1;
    if (authorised_user2.iot === "group2") {
      let increasedTimestamp = Number(timestamp) + 1;
      var newTimestamp2 = String(increasedTimestamp);
      authorised_user.groupid = newTimestamp2;
    }
    console.log(authorised_user.registrationId);
    const Saving_user_data2 = authorised_user2;
    const Saving_user_data = authorised_user;
    Saving_user_data.Registration_time = new Date().toString();
    let gotit = await setDoc(
      doc(db, 'AutokritiRegistration2024', timestamp),
      Saving_user_data
    )
    sendEmail(authorised_user);
    if (authorised_user.iot === "group2") {
      let increasedTimestamp = Number(timestamp) + 1;
      var newTimestamp2 = String(increasedTimestamp);
      const latestRegistrationId2 = await fetchLatestRegistrationId();
      authorised_user2.registrationId = latestRegistrationId2 + 1;
      authorised_user2["department"] = department;
      authorised_user2.transactionid = transactionid;
      Saving_user_data2.Registration_time = new Date().toString();
      sendEmail(authorised_user2)
      let gotit = await setDoc(
        doc(db, 'AutokritiRegistration2024', newTimestamp2),
        Saving_user_data2
      )
    }

    // toast.success("Registration Completed")
    uploadBytes(coverPhotoRef, image).then((res) => {
      setLoading(false);
      alert("Your Registration is confirmed !! Email will be send after verification.");
      document.getElementById("payform-button1").disabled = false;
      document.getElementById("payform-button1").style.background = "#1a3c7f";
      window.location = `/autokriti`;
    });
    // emailjs.sendForm(
    //   'service_coet73h',  // Replace with your Service ID
    //   'template_gx6w4wq',  // Replace with your Template ID
    //   form.current,
    //   'vu8NQbdo_al3pcY5td'       // Replace with your User ID
    // )
    // .then((result) => {
    //     console.log(result.text);
    //     alert('Email sent successfully!');
    // }, (error) => {
    //     console.log(error.text);
    //     alert('Failed to send email. Please try again.');
    // });

  }
  return (
    <>
      <Toaster />
      <NavBar />
      <br />
      <p className="payform-heading">SCAN THIS QR TO MAKE YOUR PAYMENT</p>
      <div className='payform-container'>
        <p>Due to some Reasons our Payment Gateway is disabled for now. &#128546;</p>
      </div>
      <div className='payform-container'>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", justifyContent: "center" }} >
          <img src={PAYTMQR} height="500" width="300" />
          <p>UPI ID: 9389755501@ybl</p>
          <h3 style={{ fontSize: "30px" }}>Amount to be Paid: {amount} /-</h3>
        </div>
      </div>
      <h4 className="payform-heading">Upload the Screenshot of Payment Made:</h4>
      <div className='payform-container-3'>
        <input type="file" style={{ width: "unset" }}
          onChange={(e) => { setImage(e.target.files[0]) }} />
        <input type="text" style={{ width: "unset" }} placeholder='Enter Transaction ID' onChange={(e) => setTransactionid(e.target.value)} />
      </div>
      <div id="paynow">
        {loading &&
          <div style={{ width: "auto", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
            <MoonLoader loading={loading} size={30} />
          </div>}
        <button
          className="payform-button"
          id="payform-button1"
          onClick={upload}
        >
          Confirm
        </button>
      </div>

      <div className='payform-container'>
        <p> For any Payment Queries feel free to Reach us at
          <br />
          <div className='payform-container'>
            Vivek : +91 9389755501
            <br />
            Vipul : +91 9520417250
          </div>
        </p>
      </div>

    </>
  )
}

export default SecondaryPaymentPage