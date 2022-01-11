import React, { useState } from 'react'
import "./FormDIV.css";

export default function FormContainer() {
  function showNext(){
    document.querySelector('.autokriti-form-body-forms').classList.add('logged')
  }
  function showPrev(){
    document.querySelector('.autokriti-form-body-forms').classList.remove('logged')
  }
  return (

    <div className="autokriti-form-body" id="form_body">
      <div className='autokriti-form-body-forms'>
        <div className="Form-container form1">
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
            <input
              type="text"
              name="institute"
              id="amb_college"
              required="required"
            />
            <span>College Name * </span>{" "}
          </div>
          <div className="field">
            <input
              type="text"
              name="Branch"
              id="amb_branch"
              required="required"
            />
            <span>Branch * </span>{" "}
          </div>
          <div className="field">
            <input
              type="text"
              name="semester"
              id="amb_semester"
              required="unrequired"
            />
            <span>Current Semester </span>{" "}
          </div>
          <div className="field">
            <input
              type="number"
              name="phone"
              id="amb_phone"
              required="required"
            />
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
            Why do you think you can be a Campus Ambassador *{" "}
            <select id="s1">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option
                name="submit blog"
                value="I am good in Marketing & promotions"
              >
                I am good at Marketing & promotion
              </option>
              <option
                name="sponsership"
                value="I am not so good in the work, and want to learn"
              >
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
            Have you ever been a Campus Ambassador *{" "}
            <select id="s2">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option
                name="club_alumni"
                value="Yes, I am, currently a CA of some other organization as well"
              >
                Yes, I am, currently a CA of some other organization as well
              </option>
              <option
                name="companyrepresentative"
                value="Yes, I was recently (within last 3 months)"
              >
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
          <div className="next-button">
            <button id="form-next" onClick={showNext}>next</button>
          </div>
        </div>

        <div className="Form-container form2">
          <div className="question">
            What are your top 3 qualities related to being a Campus Ambassador?
            *
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
          <div className="question">
            What two channels (eg. Social Media) do you think are the most effective for engaging
            with our target audience (18-22 Yrs) *{" "}
          </div>
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
          <div className="question">
            How did you find out about this ambassador program? *</div>
          <div className="field">
            <select id="s3">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option
                name="submit blog"
                value="Instagram"
              >
                Instagram
              </option>
              <option
                name="sponsership"
                value="Facebook"
              >
                Facebook
              </option>
              <option name="brand_ambassador" value="LinkedIn">
                LinkedIn
              </option>
              <option name="website" value="D2C">
                D2C
              </option>
              <option name="other" value="Word of Mouth">
                Word of Mouth
              </option>
              <option name="other" value="Website">
                Website
              </option>
              <option name="other" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className='autokriti-form-buttons'>
            <div className="next-button">
              <button id="form-next" onClick={showPrev}>back</button>
            </div>
            <div className="next-button">
              <button id="form-next" >submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}