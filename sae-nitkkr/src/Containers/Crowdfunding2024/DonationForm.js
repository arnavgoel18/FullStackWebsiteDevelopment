import React, { useState } from 'react'
import "./Donationform.css"
import toast, { Toaster } from 'react-hot-toast';
import db from "../../Firebase.js";
import {
  updateDoc,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

const DonationForm = () => {
  const [textareaValue, setTextareaValue] = useState('');
  function submit() {
    var FirstName = document.getElementById("fname");
    var LastName = document.getElementById("lname");
    var amount = document.getElementById("amount");
    var phone = document.getElementById("phone-no");
    var email = document.getElementById("comp-email");
    var longAns1 = document.getElementById("text1");
    var checkbox = document.getElementById("check");

    const fundingdata = {
      FirstName: FirstName.value,
      LastName: LastName.value,
      amount: amount.value,
      phone: phone.value,
      email: email.value,
      longAnswer2: longAns1.value,
      // timestamp: serverTimestamp(),
      orderid: "",
      paymentid: "",
    };

    validateForm(fundingdata, checkbox);
  }

  const saveDatabase = async (fundingData) => {
    var timestamp = String(new Date().getTime());
    console.log(timestamp);
    await setDoc(doc(db, "DonationForm", timestamp), fundingData);
  }

  function validateForm(fundingdata, checkbox) {
    if (
      fundingdata.amount == "" ||
      fundingdata.FirstName == "" ||
      fundingdata.phone == ""
    ) {
      toast.error("Please fill The required details.");
    }
    else if (parseInt(fundingdata.amount) < 1) {
      toast.error("Entered amount should be greater than 0");
    }
    //  else if (fundingdata.phone.length != 10) {
    //    alert("phone number should be of length 10.");
    //  } 
    //  else if (
    //   !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fundingdata.email)
    // ) {
    //   alert("Please enter a valid email address.");
    //  } 
    //  else if (checkbox.checked == false) {
    //   toast.error("Please accept the terms and condition.");
    // }
    else if (parseInt(fundingdata.amount) >= 20000) {
      saveDatabase(fundingdata);
      // var bankDetails = document.getElementById("bank_details");
      // bankDetails.style.display = "flex";
    } else {
      // makePayment(fundingdata);
    }
  }

  const blockInvalidChar = (e) =>
    ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault()

  function SetAmountText(e) {
    var temp = e.target.innerText;
    var amountToBeSet = parseInt(temp.split(',').join(''));
    var amount = document.getElementById('amount');
    amount.value = amountToBeSet;
  }
  const handletestareaInputChange = (e) => {
    setTextareaValue(e.target.value);
  };
  return (
    <>
      <Toaster />
      <div class="funding-container">
        <div class="text">
          Contribute to SAE UNITY DRIVE
        </div>
        <form action="#">
          <div class="form-row">
            <div class="input-data">
              <input type="text" required name="fname" id="fname" />
              <div class="underline"></div>
              <label for="">First Name</label>
            </div>
            <div class="input-data">
              <input type="email" required name="lname" id="lname" />
              <div class="underline"></div>
              <label for="">Email Address</label>
            </div>
          </div>
          <div class="form-row">
            <div class="input-data">
              <input type="Number" required name="comp-email" id="comp-email" />
              <div class="underline"></div>
              <label for="">Phone No</label>
            </div>
            <div class="input-data">
              <select name="graduationYear">
                <option value="">Select Graduation Year</option>
                {[...Array(70).keys()].map((i) => (
                  <option key={i} value={1951 + i}>{1951 + i}</option>
                ))}
              </select>
              <div class="underline"></div>
            </div>
          </div>
          <div class="form-row">
            <div class="input-data">
              <select name="Team Name">
                <option value="">Select Team Name</option>
                <option value="">Nitrox</option>
                <option value="" key="">Accelerons</option>
                <option value="" key="">None</option>
              </select>
              <div class="underline"></div>
            </div>
          </div>
          <div class="form-row" style={{ flexDirection: "column", gap: "20px" }}>
            <div class="input-data" >
              <input
                type='number'
                onKeyDown={blockInvalidChar}
                min='1'
                name='amount'
                id='amount'
                required
                placeholder='Enter or Choose Amount'
              />
              <div class="underline"></div>
              {/* <label for="">Enter or Choose Amount</label> */}
            </div>
            <div className='sampleAmountDiv'>
              <span className='sampleAmount' onClick={SetAmountText}>
                2,00,000
              </span>
              <span className='sampleAmount' onClick={SetAmountText}>
                1,00,000
              </span>
              <span className='sampleAmount' onClick={SetAmountText}>
                75,000
              </span>{' '}
              <span className='sampleAmount' onClick={SetAmountText}>
                50,000
              </span>{' '}
              <span className='sampleAmount' onClick={SetAmountText}>
                20,000
              </span>{' '}
              <span className='sampleAmount' onClick={SetAmountText}>
                10,000
              </span>{' '}
              <span className='sampleAmount' onClick={SetAmountText}>
                5,000
              </span>
              <span className='sampleAmount' onClick={SetAmountText}>
                2,000
              </span>
            </div>
          </div>
          <div class="form-row">
            <div class="input-data textarea">
              <textarea rows="8" cols="80" id='text1' name="message" onChange={handletestareaInputChange}></textarea>
              <br />
              <div class="underline"></div>
              <label className={textareaValue.trim() !== '' ? 'active' : ''} for="message">Message You Want to Convey To Our Team</label>
              <br />
            </div>
          </div>
          <div class="form-row">
            <div class="upload__button input-data">
              <label className='upload__photo-label'>Upload Photo(Optional)</label>
              <input type="file" name="photograph" />
              {/* <div class="underline"></div> */}
            </div>  
          </div>
          <div className='form-row upload__description'>
            <div className='input-data'>
            <p>If you'd like, share a photograph to be featured in our alumni section</p>
            </div>
          </div>
          <div class="form-row submit-btn">
            <div class="input-data">
              <div class="inner"></div>
              <input type="submit" value="Continue To Pay" onClick={submit} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default DonationForm