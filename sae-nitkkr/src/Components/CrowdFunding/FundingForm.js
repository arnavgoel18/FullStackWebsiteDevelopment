import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import "./FundingForm.css";
import saelogo from "../../Assets/SAELOGO.png";
import db from "../../Firebase.js";
import {
  updateDoc,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import emailjs from "@emailjs/browser";
import QrCode from "../../Assets/30993905530@sbi.png";
import Modal from "./Modal/Modal";

export default function FundingForm() {
  const [show, setShow] = useState(false);
  const blockInvalidChar = (e) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()

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
      timestamp: serverTimestamp(),
      orderid: "",
      paymentid: "",
    };

    validateForm(fundingdata, checkbox);
  }

  const sendEmail = (firstname,email) => {
    console.log("hello destination");
    const toSend = {
      name: firstname,
      email: email,
    };
    emailjs
      .send(
        "service_v2mc09h",
        "template_eeq49xm",
        toSend,
        "9MHjCKHFFUfBlu_xC"
      )
      .then(
        
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const saveDatabase = async (fundingData) => {
    var timestamp = String(new Date().getTime());
    await setDoc(doc(db, "FundingForm", timestamp), fundingData);
  }

  //form validation
  function validateForm(fundingdata, checkbox) {
    if (
      fundingdata.amount == ""  ||
       fundingdata.FirstName == "" ||
       fundingdata.phone == ""
    ) {
      alert("Please fill The required details.");
     } 
     else if(parseInt(fundingdata.amount) < 1){
        alert("Entered amount should be greater than 0");
     }
    //  else if (fundingdata.phone.length != 10) {
    //    alert("phone number should be of length 10.");
    //  } 
     //else if (
    //   !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fundingdata.email)
    // ) {
    //   alert("Please enter a valid email address.");
     //} 
     else if (checkbox.checked == false) {
      alert("Please accept the terms and condition.");
    } else if(parseInt(fundingdata.amount) >= 20000){
      saveDatabase(fundingdata);
      var bankDetails = document.getElementById("bank_details");
      bankDetails.style.display = "flex";
    }else{
      makePayment(fundingdata);
    }
  }

  function deletedata() {
    var FirstName = document.getElementById("fname");
    var LastName = document.getElementById("lname");
    var amount = document.getElementById("amount");
    var phone = document.getElementById("phone-no");
    var email = document.getElementById("comp-email");
    var longAns1 = document.getElementById("text1");

    FirstName.value = null;
    LastName.value = null;
    amount.value = null;
    phone.value = null;
    email.value = null;
    longAns1.value = null;
  }

  const makePayment = async (fundingdata) => {
    const res = await initializeRazorpay();

    var timestamp = String(new Date().getTime());
    await setDoc(doc(db, "FundingForm", timestamp), fundingdata);

    document.getElementById("comp-button").disabled = true;
    document.getElementById("comp-button").style.background = "grey";
    setTimeout(() => {
      document.getElementById("comp-button").disabled = false;
      document.getElementById("comp-button").style.background = "#E9910DFC";
    }, 8000);

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("https://saepayment.onrender.com/razorpay", {
      method: "POST",
      body: JSON.stringify({
        title: "Donation",
        body: fundingdata.amount,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((t) => t.json());

    var options = {
      key: "rzp_live_p9zIgcTn6FVaOD",
      name: "SAE NIT Kurukshetra",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for Donating",
      image: { saelogo },
      handler: async (response) => {
        await handler(response);
        await set_to_database(fundingdata.FirstName, fundingdata.email);
        //console.log(options);
      },
      prefill: {
        name: "SAE NIT Kurukshetra",
        email: "saenitkurukshetra@gmail.com",
        contact: "9650735458",
      },
    };

    const handler = async (response) => {
      fundingdata.orderid = response.razorpay_order_id;
      fundingdata.paymentid = response.razorpay_payment_id;
    };

    const set_to_database = async (firstname,email) => {
      sendEmail(firstname,email);

      //set progress bar
      const docRef = doc(db, "FundingForm", "progressBar");
      const docSnap = await getDoc(docRef);
      var amount = parseInt(fundingdata.amount);
      var temp = docSnap.data().collectedAmount + amount;
      console.log(amount, typeof(amount), temp);
      await updateDoc(docRef, { collectedAmount: temp });

      //alert("Thank you for your Donation. This has brought us a step closer to achieving our goals!");
      setShow(true);
      deletedata();
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function SetAmountText(e){
    var temp = e.target.innerText;
    var amountToBeSet = parseInt(temp.split(',').join(''));
    var amount = document.getElementById('amount');
    amount.value = amountToBeSet ;
  }
  return (
    <>
      <div className='FundingForm' id='funding_form'>
        <h3>DONATE HERE</h3>
        <div className='Form'>
          <form>
            <div className='Field'>
              <input
                type='text'
                name='First Name'
                placeholder='First Name*'
                required
                id='fname'
              />
              <input
                type='text'
                name='Last Name'
                id='lname'
                //required
                placeholder='Last Name'
              />
            </div>
            <input
              type='text'
              name='phone'
              required
              id='phone-no'
              placeholder='Phone No*'
            />
            <input
              type='email'
              name='Email'
              id='comp-email'
              //required
              placeholder='Email'
            />
            {/* <input
              type="text"
              name="CompanyName"
              id="comp-name"
              required
              placeholder="Company Name"
            /> */}

            <input
              type='number'
              onKeyDown={blockInvalidChar}
              min='1'
              name='amount'
              id='amount'
              required
              placeholder='Enter or Choose Amount*'
            />
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
            <div className='msg'>Message You Want to Convey To Our Team </div>
            <textarea
              type='text'
              id='text1'
              required
              placeholder='Type here...'
              rows='10'
            />
            <div className='check-Field'>
              <input type='checkbox' id='check' required />I accept &nbsp;
              <a
                href='/termsandconditions'
                target={'_blank'}
                style={{ color: 'blue' }}
              >
                {' '}
                <u> Terms and Conditions*</u>
              </a>
            </div>
            <div id='bank_details'>
              <h4 style={{ marginBottom: '10px' }}>
                The amount is greater than 20,000. To avoid transaction fee,
                Please Pay directly via <u>Bank Transfer</u>:
              </h4>
              <div>
                <span>Account Name: </span>
                <span>SAE INDIA NIT KKR COLLEGIATE CLUB</span>
              </div>
              <div>
                <span>Account Number: </span>
                <span>30993905530</span>
              </div>
              <div>
                <span>IFSC Code: </span>
                <span>SBIN0006260</span>
              </div>
              <div>
              <img
              src={QrCode}
              loading="lazy"
              className="QrCode"
              ></img>
              </div>
              <div style={{ marginTop: '12px' }}>
                <b>*NOTE:</b> Please add your contact details during Bank
                Transfer in comment Section.
              </div>
              {/* <div className="texti"><input type="checkbox" id="check" required />
              I accept </div> <span className="textt">
              {' '}
              <Link to="/termsandconditions" target="_blank">
                Terms and Conditions*
              </Link> */}
              {/* </span>  */}
            </div>
            <button
              className='pay'
              type='button'
              id='comp-button'
              onClick={submit}
            >
              CONTINUE TO PAY
            </button>
          </form>
          <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
            <p>SAE NIT KURUKSHETRA</p>
          </Modal>
        </div>
      </div>
    </>
  )
}
