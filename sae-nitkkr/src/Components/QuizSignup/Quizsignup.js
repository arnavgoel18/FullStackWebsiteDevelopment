import React from 'react';
import "./Quizsignup.css";

function Quizsignup() {

  const routeChange = () =>{ 
    if(document.getElementById('agree').checked) { return true; } else { alert('Please tick on agree to the Terms and Conditions and Privacy Policy'); return false; }
    window.open("");
  }

  return (
    <>
      <p className="payform-heading">REGISTER FOR QUIZ</p>
      <div className="payform-container">
        <div className="payform-form">
          <div className="field">
            {" "}
            <span className="payform-label">Full Name * </span>
            <br />
            <input
              className="payform-input"
              type="text"
              alt="Name"
              name="name"
              id="amb_name"
              required="required"
            />{" "}
          </div>
          <div className="field">
            <span className="payform-label">Email id* </span>
            <br />
            <input
              className="payform-input"
              type="Email"
              name="institute"
              id="amb_college"
              required="required"
            />{" "}
          </div>
          <div className="field">
            <span className="payform-label">Phone No. * </span>
            <br />
            <input  className="payform-input" type="number" name="phone number" required="required" />
          </div>
          <div className="field">
            <span className="payform-label">College</span>
            <br />
            <input  className="payform-input" type="text" required="unrequired" />{" "}
          </div>
          <div className="field">
            <span className="payform-label"> Branch </span>
            <br />
            <input   className="payform-input" type="name" name="Branch" required="unrequired" />
          </div>
          <div className="field">
            {" "}
            <span className="payform-label"> Semester </span>
            <br />
            <input
             className="payform-input"
              type="email"
              name="semester"
              alt="semester"
              id=""
              required="unrequired"
            />
          </div>

          <div className="field">
            {" "}
            <span className="payform-label"> Referal Code(optional code) </span>
            <br />
            <input   className="payform-input" type="email" name="" alt="" id="" required="unrequired" />
            &nbsp; &nbsp;
            <img
              src="https://img.icons8.com/ios/20/000000/info--v4.png"
              style={{ margin: "-6px" }}
            />
          </div>
          <br />
          <br />
          <button className="payform-button" onClick={routeChange}>₹ &nbsp; Pay Now</button>

          <div className="field">
            {" "}
            <span className="payform-label"> Transaction ID </span>
            <br />
            <input  className="payform-input"  type="" name="" alt="" id="" required="" />
          </div>
          <br />

          <button className="payform-button2">Confirm Registration</button>
        </div>
        <div className="payform-infocontain">
          <div className="payform-info">
            <p>
              * Make sure your email id is correct as you will be getting
              confirmation on that email
            </p>

            <p>
              * After clicking on Pay, <b>NOTE TRANSACTION ID </b>you get from
              RazorPay and add it to Transaction ID Field
            </p>

            <p>
              * Transaction ID Field will be <b>activated</b> when payment is
              made.
            </p>
          </div>
          <br/>
          <div className="payform-checkbox">
          <input type="checkbox" id="agree" name="" value="" required="required" />
          <label for=""> I have read and understood the instructions</label>
          <br/>
          <br/>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    </>
  );
}

export default Quizsignup;
