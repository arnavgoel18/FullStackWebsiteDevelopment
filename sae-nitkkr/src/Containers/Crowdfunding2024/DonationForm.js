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
import NavBar from '../../Components/NavBar/NavBar.js';
import paytmQR from "../../Assets/PaymentQR/QRcode-2.jpg";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    amount: "",
    phone: "",
    email: "",
    message: "",
    graduationYear:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const validateForm = () => {
    const { fname, amount, phone, email,graduationYear } = formData;

    if (!fname || !amount || !phone || !email || !graduationYear) {
      toast.error("Please fill all required fields.");
      return false;
    }

    if (parseInt(amount) <= 0) {
      toast.error("Amount should be greater than 0.");
      return false;
    }

    if ((phone.length > 11 || phone.length<10) || !/^\d+$/.test(phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return false;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const saveToFirestore = async () => {
    const timestamp = String(new Date().getTime());
    try {
      await setDoc(doc(db, "DonationForm", timestamp), {
        ...formData,
        timestamp: new Date(),
      });
      toast.success("Thank you for your Contribution!");
      setTimeout(() => {
        window.location = "/crowdfunding"; // Redirect after a short delay
      }, 1000);
    } catch (error) {
      toast.error("Error saving data. Please try again.");
      console.error("Firestore Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      saveToFirestore();
    }
  };

  const blockInvalidChar = (e) =>
    ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault()

  function SetAmountText(e) {
    var temp = e.target.innerText;
    var amountToBeSet = parseInt(temp.split(',').join(''));
    var amount = document.getElementById('amount');
    amount.value = amountToBeSet;
    setFormData((prev) => ({ ...prev, amount: amountToBeSet }));
  }
  return (
    <>
      <NavBar />
      <Toaster />
      <div className='crowdfunding__form__outercontainer'>
        <div class="funding-container">
          <div class="text">
            Contribute to SAE UNITY DRIVE
          </div>
          <form action="#">
            <div class="form-row">
              <div class="input-data">
                <input type="text" required name="fname" id="fname" onChange={handleInputChange}/>
                <div class="underline"></div>
                <label for="">Full Name</label>
              </div>
              <div class="input-data">
                <input type="email" required name="email" id="lname" onChange={handleInputChange} />
                <div class="underline"></div>
                <label for="">Email Address</label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data">
                <input type="Number" required name="phone" id="phone" onChange={handleInputChange} />
                <div class="underline"></div>
                <label for="">Phone No</label>
              </div>
              <div class="input-data">
                <select name="graduationYear" onChange={handleInputChange}>
                  <option value="">Select Graduation Year</option>
                  {[...Array(74).keys()].map((i) => (
                    <option key={i} value={1951 + i}>{1951 + i}</option>
                  ))}
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
                  onChange={handleInputChange}
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
                <textarea rows="8" cols="80" id='text1' name="message" onChange={handleInputChange}></textarea>
                <br />
                <div class="underline"></div>
                <label className={formData.message.trim() !== '' ? 'active' : ''} for="message">Message You Want to Convey To Our Team</label>
                <br />
              </div>
            </div>
            {/* <div class="form-row">
            <div class="upload__button input-data">
            <label className='upload__photo-label'>Upload Photo(Optional)</label>
            <input type="file" name="photograph" />
            <div class="underline"></div>
            </div>  
            </div> */}
            {/* <div className='form-row upload__description'>
            <div className='input-data'>
            <p>If you'd like, share a photograph to be featured in our alumni section</p>
            </div>
            </div> */}
            <div class="form-row submit-btn">
              <div class="input-data">
                <div class="inner"></div>
                <input type="submit" value="Confirm" onClick={handleSubmit} />
              </div>
            </div>
          </form>
        </div>
        <div className='QRCode__div'>
          <div>
            <p>SCAN THIS QR TO MAKE YOUR PAYMENT</p>
          </div>
          <img src={paytmQR} alt="" className='' />
        </div>
      </div>
      <div class="form-row another-btn">
        <div class="input-data">
          <button type="submit" onClick={handleSubmit} >Confirm</button>
        </div>
      </div>
    </>
  )
}

export default DonationForm