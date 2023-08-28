import React, { useState } from 'react'
import "./FormDIV.css";
import db from '../../../Firebase.js'
import { collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore'

export default function FormContainer() {
  function showNext(){
    document.querySelector('.autokriti-form-body-forms').classList.add('logged')
  }
  function showPrev(){
    document.querySelector('.autokriti-form-body-forms').classList.remove('logged')
  }
  return (
    <div className='autokriti-form-body' id='form_body'>
      <div className='autokriti-form-body-forms'>
        <div className='Form-container form1'>
          <div className='field'>
            {' '}
            <input
              type='text'
              alt='Name'
              name='name'
              id='amb_name'
              required='required'
            />{' '}
            <span>Full Name * </span>
          </div>
          <div className='field'>
            <input
              type='text'
              name='institute'
              id='amb_college'
              required='required'
            />
            <span>College Name * </span>{' '}
          </div>
          <div className='field'>
            <input
              type='text'
              name='Branch'
              id='amb_branch'
              required='required'
            />
            <span>Branch * </span>{' '}
          </div>
          <div className='field'>
            <input
              type='text'
              name='semester'
              id='amb_semester'
              required='unrequired'
            />
            <span>Current Semester </span>{' '}
          </div>
          <div className='field'>
            <input
              type='number'
              name='phone'
              id='amb_phone'
              required='required'
            />
            <span> Phone No. * </span>
          </div>
          <div className='field'>
            {' '}
            <input
              type='email'
              name='email'
              alt='email'
              id='amb_email'
              required='required'
            />
            <span> Email Id * </span>
          </div>

          <div className='field'>
            Why do you think you can be a Campus Ambassador *{' '}
            <select id='s1'>
              <option selected hidden value=''>
                --Select any one--
              </option>
              <option
                name='submit blog'
                value='I am good in Marketing & promotions'
              >
                I am good at Marketing & promotion
              </option>
              <option
                name='sponsership'
                value='I am not so good in the work, and want to learn'
              >
                I am not so good in the work, and want to learn
              </option>
              <option name='brand_ambassador' value="I don't know">
                I don't know
              </option>
              <option name='other' value='Other'>
                Other
              </option>
            </select>
          </div>
          <div className='field'>
            Have you ever been a Campus Ambassador *{' '}
            <select id='s2'>
              <option selected hidden value=''>
                --Select any one--
              </option>
              <option
                name='club_alumni'
                value='Yes, I am, currently a CA of some other organization as well'
              >
                Yes, I am, currently a CA of some other organization as well
              </option>
              <option
                name='companyrepresentative'
                value='Yes, I was recently (within last 3 months)'
              >
                Yes, I was recently (within last 3 months)
              </option>
              <option name='student' value='Yes, but not that recently'>
                Yes, but not that recently
              </option>
              <option name='professor' value='No'>
                No
              </option>
            </select>
          </div>
          <div className='next-button'>
            <button id='form-next' className='amb-next-back' onClick={showNext}>
              next
            </button>
          </div>
        </div>

        <div className='Form-container form2'>
          <div className='question'>
            What are your top 3 qualities related to being a Campus Ambassador?
            *
          </div>
          <div className='field'>
            {' '}
            <textarea
              required='required'
              name='message'
              id='text2'
              placeholder='Type your answer here'
              // cols="65"
              rows='3'
            ></textarea>
          </div>
          <div className='question'>
            What two channels (eg. Social Media) do you think are the most
            effective for engaging with our target audience (18-22 Yrs) *{' '}
          </div>
          <div className='field'>
            {' '}
            <textarea
              required='required'
              name='message'
              id='text3'
              placeholder='Type your answer here'
              // cols="65"
              rows='3'
            ></textarea>
          </div>
          <div className='question'>
            How did you find out about this ambassador program? *
          </div>
          <div className='field'>
            <select id='s3'>
              <option selected hidden value=''>
                --Select any one--
              </option>
              <option name='submit blog' value='Instagram'>
                Instagram
              </option>
              <option name='sponsership' value='Facebook'>
                Facebook
              </option>
              <option name='brand_ambassador' value='LinkedIn'>
                LinkedIn
              </option>
              <option name='website' value='D2C'>
                D2C
              </option>
              <option name='other' value='Word of Mouth'>
                Word of Mouth
              </option>
              <option name='other' value='Website'>
                Website
              </option>
              <option name='other' value='Other'>
                Other
              </option>
            </select>
          </div>
          <div className='autokriti-form-buttons'>
            <div className='next-button'>
              <button
                id='form-back'
                className='amb-next-back'
                onClick={showPrev}
              >
                back
              </button>
            </div>
            <div className='next-button'>
              <button id='amb-button' onClick={submit}>
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
 //submit f(); working: onClick submit button;
async function submit() {
  const ref = await getDocs(collection(db, "LengthSelectedStudent"));
  var counter = ref.docs.map((doc) => doc.data())[0].len;

  var studentName = document.getElementById("amb_name");
  var collegeName = document.getElementById("amb_college");
  var branch = document.getElementById("amb_branch");
  var semester = document.getElementById("amb_semester");
  var phone = document.getElementById("amb_phone");
  var email = document.getElementById("amb_email");
  var s1 = document.getElementById("s1");
  var s2 = document.getElementById("s2");
  var s3 = document.getElementById("s3");
  var longAns2 = document.getElementById("text2");
  var longAns3 = document.getElementById("text3");

  const docdata = {
    studentName: studentName.value,
    collegeName: collegeName.value,
    branch: branch.value,
    semester: semester.value,
    phone: phone.value,
    email: email.value,
    s1: s1.value,
    s2: s2.value,
    s3: s3.value,
    longAnswer2: longAns2.value,
    longAnswer3: longAns3.value,
    referralCode:studentName.value.substring(0, 3) + counter,
  };
  const finalaambdata = {
    studentName: studentName.value,
    collegeName: collegeName.value,
    semester: semester.value,
    branch: branch.value,
    phone: phone.value,
    email: email.value,
    referralCode:studentName.value.substring(0, 3) + counter,
    numberReferrals:0,
  };

  counter++;

  
  counterInc(counter);
  validateForm(docdata, finalaambdata);
}

async function counterInc(counter){
  await setDoc(doc(collection(db, "LengthSelectedStudent"), "1111"), {"len": counter})}

//form validation
function validateForm(docdata, finalaambdata) {
  if (
    docdata.studentName == "" ||
    docdata.collegeName == "" ||
    docdata.branch == "" ||
    docdata.phone == "" ||
    docdata.email == "" ||
    docdata.s1 == "" ||
    docdata.s2 == "" )
    {
       alert("Please fill up the required fields.");
       document.getElementById('form-back').click();

    }
    else if(
    docdata.s3 == "" ||
    docdata.longAns2 == "" ||
    docdata.longAns3 == ""
  ) {
    alert("Please fill up the required fields.");
  } else if (docdata.phone.length != 10) {
    alert("phone number should be of length 10.");
    document.getElementById('form-back').click();

  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(docdata.email)
  ) {
    alert("Please enter a valid email address.");
    document.getElementById('form-back').click();
  } else {
    setInfo(docdata, finalaambdata);
  }
}
function deletedata()
{var studentName = document.getElementById("amb_name");
var collegeName = document.getElementById("amb_college");
var branch = document.getElementById("amb_branch");
var semester = document.getElementById("amb_semester");
var phone = document.getElementById("amb_phone");
var email = document.getElementById("amb_email");
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var longAns2 = document.getElementById("text2");
var longAns3 = document.getElementById("text3");
  studentName.value=null;
  collegeName.value=null;
  branch.value=null;
  semester.value=null;
  phone.value=null;
  email.value=null;
  s1.value="--Select any One--";
  s2.value="--Select any One--";
  s3.value="--Select any One--";
  longAns2.value=null;
  longAns3.value=null;
}

//save to database
async function setInfo(docdata, finalaambdata) {
  document.getElementById('amb-button').disabled = true
  document.getElementById('amb-button').style.backgroundColor = 'gray'
  var timestamp = String(new Date().getTime());
  await setDoc(doc(db, "studentAmbassador", timestamp), docdata);
  await setDoc(doc(db, "finalStudentAmbassador", timestamp), finalaambdata);
  alert("Congratulations! Your information saved successfully.");
  deletedata();
  document.getElementById('amb-button').disabled = false
  document.getElementById('amb-button').style.backgroundColor = '#E9910DFC'
  document.getElementById('form-back').click();
  // window.location.reload();
}
}