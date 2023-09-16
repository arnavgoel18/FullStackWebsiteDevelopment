import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import "../../Components/AutokritiRegistration/AutokritiRegistration.css";
import PAYTMQR from "../../Assets/PaymentQR/KeshavPaytmQR.jpeg"
function SecondaryPaymentPage() {
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
   <input type="file" width="200"/>
   </div>
   <div id="paynow">
              <button
                className="payform-button"
                id="payform-button1"
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