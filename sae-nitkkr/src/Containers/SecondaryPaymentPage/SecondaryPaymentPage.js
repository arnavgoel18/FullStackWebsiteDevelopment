import React, { useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import NavBar from '../../Components/NavBar/NavBar'
import "../../Components/AutokritiRegistration/AutokritiRegistration.css";
import PAYTMQR from "../../Assets/PaymentQR/KeshavPaytmQR.jpeg"
import emailjs from 'emailjs-com';

function SecondaryPaymentPage() {
  const params = new URL(document.location).searchParams;
  const timestamp = params.get("id");

  const [image, setImage] = useState('');

  const upload = () => {
    document.getElementById("payform-button1").disabled = true;
    document.getElementById("payform-button1").style.background = "grey";

      if (image == null)
          return;
          const storage = getStorage();
          const coverPhotoRef = ref(storage, `/AutokritiRegistration2024/${timestamp}`);
          uploadBytes(coverPhotoRef, image).then((res) => {
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
   <NavBar/>
   <br/>
    <p className="payform-heading">SCAN THIS QR TO MAKE YOUR PAYMENT</p>
    <div className='payform-container'>
    <p>Due to some Reasons our Payment Gateway is disabled for now. &#128546;</p>
    </div>
   <div className='payform-container'>
        <div style={{display:"flex", justifyContent:"center"}} >
            <img src={PAYTMQR} height="500"  width="300"/>
        </div>
       
   </div>
   <h4 className="payform-heading">Upload the Screenshot of Payment Made:</h4>
   <div className='payform-container'>
   <input type="file" width="200" 
   onChange={(e) => { setImage(e.target.files[0]) }}/>
   </div>
   <div id="paynow">
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
    <br/>
    <div className='payform-container'>
   Keshav : +91 7011253726
    <br/>
    Navneet : +91 7493828342
    </div>
   </p>
   </div>
   
   </>
  )
}

export default SecondaryPaymentPage