import React from 'react'
import "./FundingForm.css";
import db from "../../Firebase.js"
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function FundingForm() {
  return (
    <>
    <div className="FundingForm">
       <h3>DONATE US</h3>
       <div className="Form">
        <form>
        <div className="Field">
            <input type="text"
            name ="First Name"
            placeholder='Name'
            required="required"
            id='fname'/>
            <input type="text"
            name ="Last Name" 
            id='lname' 
            required="required"
            placeholder='Last Name'/>
            </div>
            <input type="number"
            name ="phone"
            required="required"
            id='phone-no'
            placeholder='phone No'/>
            <input type="email"
            name ="Email" 
            id='comp-email' 
            required="required"
            placeholder='Email'/>
            <input type="text"
            name ="CompanyName"
            id='comp-name'
            required="required"
            placeholder='Company Name'/>

            <input type="number"
            name ="amount"  
            id='amount'
            required="required"
            placeholder='amount'/>
            <div className="msg">Message You Want to Convey To Our Team </div>
            <textarea type="text"
            id='text1'
            required="unrequired"
            placeholder="Type here..."rows="10"
            />
           <div className="check-Field"><input type="checkbox"id="check"/>
           I accept Terms and Conditions*</div>
           <button className='pay'id='comp-button'
           onClick={submit}>CONTINUE TO PAY</button>
           
            </form>
      </div>
      </div>
    </>
 

  );}

  function submit() {
    //alert("Hello");
    var FirstName = document.getElementById("fname");
    var LastName = document.getElementById("lname");
    var CompanyName = document.getElementById("comp-name");
    var amount = document.getElementById("amount");
    var phone = document.getElementById("phone-no");
    var email = document.getElementById("comp_email");
    var longAns1 = document.getElementById("text1"); 

  
    const fundingdata = {
      FirstName: FirstName.value,
      LastName: LastName.value,
      CompanyName: CompanyName.value,
      amount: amount.value,
      phone: phone.value,
      email: email.value,  
      longAnswer2: longAns1.value,
      timestamp:serverTimestamp(),
    };
  //console.log(fundingdata);
    validateForm(fundingdata);
    // alert("Hello");
  }
  
  // //form validation
  function validateForm(fundingdata) {
    if (
      fundingdata.FirstName == "" ||
      fundingdata.LastName == "" ||
      fundingdata.CompanyName == "" ||
      fundingdata.phone == "" ||
      fundingdata.email == "" ||
      fundingdata.longAns1 == "" 
 
    ) {
      alert("Please fill up the required fields.");
    } else if (fundingdata.phone.length != 10) {
      alert("phone number should be of length 10.");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fundingdata.email)
    ) {
      alert("Please enter a valid email address.");
    } else {
     setInfo(fundingdata);
    }
  }
  function deletedata()
  {var FirstName = document.getElementById("fname");
  var LastName = document.getElementById("lname");
  var CompanyName = document.getElementById("comp-name");
  var amount = document.getElementById("amount");
  var phone = document.getElementById("phone-no");
  var email = document.getElementById("comp-email");
  var longAns1 = document.getElementById("text1");
 
    FirstName.value=null;
    LastName.value=null;
    CompanyName.value=null;
    amount.value=null;
    phone.value=null;
    email.value=null;
    longAns1.value=null;
 
  }
  
  //save to database
  async function setInfo(fundingdata) {
    document.getElementById('comp-button').disabled = true
    document.getElementById('comp-button').style.backgroundColor = 'gray'
    var timestamp = String(new Date().getTime());
    await setDoc(doc(db, "FundingForm", timestamp), fundingdata);
    alert("Congratulations! Your information saved successfully.");
    deletedata();
    document.getElementById('comp-button').disabled = false
    document.getElementById('comp-button').style.backgroundColor = '#E9910DFC'
    // window.location.reload();
  }
  

