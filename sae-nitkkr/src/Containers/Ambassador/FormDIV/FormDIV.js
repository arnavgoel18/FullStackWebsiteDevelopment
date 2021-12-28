import React from "react";
import "./FormDIV.css";
import db from "../../../Firebase.js";
import { collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore';

export default function FormDIV() {
  return (
    <>
      
      <div className="Form-body" id="form_body">
        <div className="Form-container">
          <br />
          <div className="field">
            {" "}
            <input
              type="text"
              alt="Name"
              name="name"
              id="amb_name"
              required="required"
            />{" "}
            <span>Full Name * </span>
          </div>
          <div className="field">
            <input type="text" name="institute" id="amb_college" required="unrequired" />
            <span>College Name * </span>{" "}
          </div>
          <div className="field">
            <input type="text" name="Branch" id="amb_branch" required="unrequired" />
            <span>Branch * </span>{" "}
          </div>
          <div className="field">
            <input type="text" name="semester" id="amb_semester" required="unrequired" />
            <span>Current Semester </span>{" "}
          </div>
          <div className="field">
            <input type="number" name="phone" id="amb_phone" required="unrequired" />
            <span> Phone No. * </span>
          </div>
          <div className="field">
            {" "}
            <input
              type="email"
              name="email"
              alt="email"
              id="amb_email"
              required="required"
            />
            <span> Email Id * </span>
          </div>

         
          <div className="field">
            Why do you think you can be a Campus Ambassador * {" "}
            <select id="s1">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="submit blog" value="I am good in Marketing & promotions">
                I am good in Marketing & promotions
              </option>
              <option name="sponsership" value="I am not so good in the work, and want to learn">
              	I am not so good in the work, and want to learn
              </option>
              <option name="brand_ambassador" value="I don't know">
                I don't know
              </option>
              <option name="other" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="field">
            Have you ever been a Campus Ambassador * {" "}
            <select id="s2">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="club_alumni" value="Yes, I am, currently a CA of some other organization as well">
                Yes, I am, currently a CA of some other organization as well
              </option>
              <option name="companyrepresentative" value="Company Representative">
              	Yes, I was recently (within last 3 months)
              </option>
              <option name="student" value="Yes, but not that recently">
                Yes, but not that recently
              </option>
              <option name="professor" value="No">
                No
              </option>
            </select>
          </div>
         
        </div>
        <br/><br/>
        <div className="Form-container">
        <div className="question">
           If you answered “other” for the question - “Why do you think you can be a campus Ambassador?”, write your reason for other here.</div>   
        <div className="field">
            {" "}
            <textarea
              required="required"
              name="message"
              id="text1"
              placeholder="Type your answer here"
              // cols="65"
              rows="3"
            ></textarea>
            
          </div>
          <div className="question">
          What are your top 3 qualities related to being a Campus Ambassador? *
          </div>
          <div className="field">
            {" "}
            <textarea
              required="required"
              name="message"
              id="text2"
              placeholder="Type your answer here"
              // cols="65"
              rows="3"
            ></textarea>
            
          </div>
          <div className="question">What two channels do you think are the most effective for engaging with our target audience (18-22 Yrs) * </div>
          <div className="field">
            {" "}
            <textarea
              required="required"
              name="message"
              id="text3"
             placeholder="Type your answer here"
              // cols="65"
              rows="3"
            ></textarea>
            
          </div>
         <div className="form-button">
          <button id="amb-button" onClick={setInfo}> Submit </button>
        </div>
        </div>
        
      </div>
    </>
  );
}

//form validation



//save to database
async function setInfo(){
  var name = document.getElementById("amb_name");
  var college = document.getElementById("amb_college");
  var branch = document.getElementById("amb_branch");
  var semester = document.getElementById("amb_semester");
  var phone = document.getElementById("amb_phone");
  var email = document.getElementById("amb_email");
  var s1 = document.getElementById("s1");
  var s2 = document.getElementById("s2");
  var longAns1 = document.getElementById("text1");
  
  const docdata = {
    studentName: name.value,
    collegeName: college.value,
    branch: branch.value,
    semester: semester.value,
    phone: phone.value,
    email: email.value,
    s1: s1.value,
    s2: s2.value,
    longAnswer1: longAns1.value
  };
  
  var timestamp = String(new Date().getTime());
  await setDoc(doc(db, "studentAmbassador", timestamp), docdata);
  console.log(docdata);
  
}