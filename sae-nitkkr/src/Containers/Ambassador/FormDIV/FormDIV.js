import React from "react";
import "./FormDIV.css";

export default function FormDIV() {
  return (
    <>
      
      <div className="Form-body">
        <div className="Form-container">
          <br />
          <div className="field">
            {" "}
            <input
              type="text"
              alt="Name"
              name="name"
              required="required"
            />{" "}
            <span> Full Name </span>
          </div>
          <div className="field">
            <input type="text" name="institute" id="" required="unrequired" />
            <span>College Name </span>{" "}
          </div>
          <div className="field">
            <input type="text" name="Branch" id="" required="unrequired" />
            <span>Branch</span>{" "}
          </div>
          <div className="field">
            <input type="text" name="semester" id="" required="unrequired" />
            <span>Current Semester </span>{" "}
          </div>
          <div className="field">
            <input type="number" name="phone" id="" required="unrequired" />
            <span> Phone No.(optional)</span>
          </div>
          <div className="field">
            {" "}
            <input
              type="email"
              name="email"
              alt="email"
              id=""
              required="required"
            />
            <span> Email Id.. </span>
          </div>

         
          <div className="field">
            Why do you think you can be a Campus Ambassador{" "}
            <select id="s1">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="submit blog" value="option">
                To submit a blog
              </option>
              <option name="sponsership" value="option">
                Sponsorship
              </option>
              <option name="brand_ambassador" value="option">
                Brand Ambassador
              </option>
              <option name="content was abusive" value="option">
                Content was abusive
              </option>
              <option name="other" value="option">
                Other
              </option>
            </select>
          </div>
          <div className="field">
            Have you ever been a Campus Ambassador{" "}
            <select id="s2">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="club_alumni" value="option">
                Club Alumni
              </option>
              <option name="companyrepresentative" value="option">
                Company Representative
              </option>
              <option name="student" value="option">
                Student
              </option>
              <option name="professor" value="option">
                Professor
              </option>
              <option name="other" value="option">
                Other
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
              id=""
              placeholder="Type your answer here"
              // cols="65"
              rows="3"
            ></textarea>
            
          </div>
          <div className="question">
          What are your top 3 qualities related to being a Campus Ambassador?
          </div>
          <div className="field">
            {" "}
            <textarea
              required="required"
              name="message"
              id=""
              placeholder="Type your answer here"
              // cols="65"
              rows="3"
            ></textarea>
            
          </div>
          <div className="question">What two channels do you think are the most effective for engaging with our target audience (18-22 Yrs)</div>
          <div className="field">
            {" "}
            <textarea
              required="required"
              name="message"
              id=""
             placeholder="Type your answer here"
              // cols="65"
              rows="3"
            ></textarea>
            
          </div>
         <div className="form-button">
          <button id="amb-button">  Submit </button>
        </div>
        </div>
        
      </div>
    </>
  );
}
