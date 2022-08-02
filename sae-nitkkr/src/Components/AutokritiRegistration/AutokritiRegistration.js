//Registeration Page made for Autokriti 2.0
import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import $ from "jquery";
import "./AutokritiRegistration.css";

import db from "../../Firebase.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer(black)/FooterBlack";
import { check } from "fontawesome";

var done = 1;
function Quizsignup() {
  var [finalcost, setFinalcost] = useState(0);
  var [department, setDepartment] = useState([]);
  var [temp,setsettemp]=useState([]);
  // var nishant=[];
  // var [count, setCount] = useState(0);
  //to calculate finalcost
  const calculateAmount = async () => {
    var count = 0;

    var Mechanical = document.getElementById("amb_mechanical").checked;
    var IOT = document.getElementById("amb_IOT").checked;
    var EV = document.getElementById("amb_EV").checked;
    var software = document.getElementById("amb_software").checked;
    var accomo = document.getElementById("accomodation").checked;

    if (Mechanical == true) {
      finalcost += 1;
    }
    if (IOT == true) {
      finalcost += 1;
    }
    if (EV == true) {
      finalcost += 1;
    }
    if (software == true) {
      finalcost += 1;
    }
    if(accomo == true){
      finalcost += 1;
    }

    setFinalcost(finalcost);
    userData.amount = finalcost;
  };

  //to check all fields are filled or not
  function checkAllFields() {
    const {
      name,
      email,
      phone,
      college,
      branch,
      semester,
      referal,
      timeSlot1,
      mechanical,
      ev,
      iot,
      software,
    } = userData;

    var count = 0;
    setDepartment([]);
    if (mechanical == "true") {
      department[count++] = "Mechanical";
    }
    if (iot == "true") {
      department[count++] = "IOT";
    }
    if (ev == "true") {
      department[count++] = "EV";
    }
    if (software == "true") {
      department[count++] = "Software";
    }

    console.log(department, count);
    if (name && email && phone && college && branch && semester && timeSlot1) {
      //if all fields are entered
      if (phone.length != 10) {
        alert("Please enter a valid mobile number");
        return false;
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      } else if (count > 2) {
        alert("You can choose maximum two department");
        return false;
      } else if (count == 0) {
        alert("Choose at least one department");
        return false;
      } else if (document.getElementById("agree").checked) {
        return true;
      } else {
        alert("Please tick the checkbox under instructions to proceed");
        return false;
      }
    } else {
      alert("Please fill the data");
      return false;
    }
  }
  //to save data in local storage and render to payment page
  function savetoLocal() {
    localStorage.removeItem("userData");
    localStorage.removeItem("department");
    const checkAllData = checkAllFields();
    if (checkAllData) {
      calculateAmount();
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("department", JSON.stringify(temp));
      window.location = `/register/registrationDetails`;
    }
  }

  var [stuData, setStuData] = useState([]);

  //Display Referal
  function i_information_visible() {
    let k = document.getElementById("i_button_content");
    k.style.visibility = "visible";
    k.innerHTML =
      "Enter only if you are applying through an ambassador (max. 10% off)";
  }

  function i_information_nonvisible() {
    let k = document.getElementById("i_button_content");
    k.style.visibility = "hidden";
  }
  //Display TimeSLot
  // function i_information_visible_time()
  // {
  //   let j=document.getElementById('i_button_content');
  //   j.style.visibility="visible"
  //   j.innerHTML = "Slot-2 is specifically for students having their exams till 25th Feb, so please prefer Slot-1 unless you have similar problem / reason) ";
  // }

  // function i_information_nonvisible_time()
  // {
  //   let j=document.getElementById('i_button_content');
  //   j.style.visibility="hidden"
  // }

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    semester: "",
    referal: "",
    transaction: "",
    orderid: "",
    paymentid: "",
    timeSlot1: "",
    timeSlot2: "",
    status: "Registered",
    mechanical: "",
    ev: "",
    iot: "",
    software: "",
    amount: finalcost,
    firstChoice: "",
    accomodation:"",
  });

  let name, value, checked, type;
  
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    checked = event.target.checked;
    type = event.target.type;
  
    var valid = false;
    //to check referal code
    if (name === "referal") {
      for (var i = 0; i < stuData.length; i++) {
        if (value == stuData[i]) {
          valid = true;
          break;
        }
      }
      if (valid === true) {
        document.querySelector(".referral_code_verified").style.display =
          "inline";
        event.target.setAttribute("readonly", "true");
        event.target.style.boxShadow = "none";
        event.target.style.border = "none";
        document.getElementById("original_price").style.textDecoration =
          "line-through";
        document.getElementById("original_price").style.color = "red";
        document.getElementById("discounted_price").style.color = "blue";
        document.getElementById("discounted_price").style.display = "block";
        document.getElementById("show_invalid").style.display = "none";
      } else {
        if (value.length >= 6) {
          document.getElementById("show_invalid").style.display = "block";
        } else {
          document.getElementById("show_invalid").style.display = "none";
        }
        document.querySelector(".referral_code_verified").style.display =
          "none";
      }
    }

    //to make sure same person is not registering again
    if (name == "email") {
      for (var i = 0; i < emailData.length; i++) {
        if (value == emailData[i]) {
          document.getElementById("show_email_is_registered").style.display =
            "block";
          document.getElementById("payform-button1").disabled = true;
          document.getElementById("payform-button1").style.background = "grey";
          //document.getElementById("payform-button2").disabled = true;
          break;
        } else {
          document.getElementById("show_email_is_registered").style.display =
            "none";
          document.getElementById("payform-button1").disabled = false;
          document.getElementById("payform-button1").style.background =
            "#1a3c7f";
          //document.getElementById("payform-button2").disabled = false;
        }
      }
    }

    if (type == "checkbox") {
      var check = checked.toString();
  console.log(check)
      if (checked == true) {

        // document.getElementById(
        //   "chooseTimeslot"
        // ).innerText += `(${name.toUpperCase()}) `;
        // userData.firstChoice = name.toUpperCase();
        // (newUser) => {
        //   setsettemp(state => [newUser, ...state])
        // }
        setsettemp((prevdepartment)=>
        {
         return [...prevdepartment,name.toUpperCase()];
        })
        // setDepartment(name);
        // setsettemp((prevdepartment)=>
        // {
        //  return [name.toUpperCase(),...prevdepartment];
        // })
        // nishant.push(name);
        // console.log(settemp);
        done = 0;
      }
      else
      {
        setsettemp(prevActions => (
          // Filter out the item with the matching index
          prevActions.filter((i)=>
          {
          return(i!=name.toUpperCase())
          })
        ));
        console.log(temp);
      }
      setUserData({ ...userData, [name]: check });
    }

    if (name == "timeSlot1") {
      if (value == "8-11") {
        userData.timeSlot2 = "11-14";
      } else {
        userData.timeSlot2 = "8-11";
      }
    }

    if(type == 'radio' && checked == true)
    {
      userData.accomodation = 'Yes';
    }else{
      userData.accomodation = 'No';
    }

    if (type != "checkbox" && type != 'radio') {
      setUserData({ ...userData, [name]: value });
    }
    //console.log(userData);
  };

  var [stuData, setStuData] = useState([]);
  var [colStuData, setColStuData] = useState([]);

  var [refData, setRefData] = useState([]);
  var [colRefData, setColRefData] = useState([]);

  var [docIdData, setDocIdData] = useState([]);
  var [colDocIdData, setColDocIdData] = useState([]);

  var [emailData, setEmailData] = useState([]);

  //this async function is to check for applying discount while typing referal code
  async function getFinalAmbInfo() {
    //final ambassadors
    const stuInfo = collection(db, "finalStudentAmbassador");
    const stuInfo_doc = await getDocs(stuInfo);
    //final college representatives
    const colStuInfo = collection(db, "collegeRepresentatives");
    const colStuInfo_doc = await getDocs(colStuInfo);

    colStuData = colStuInfo_doc.docs.map((doc) => doc.data().referralCode);
    stuData = stuInfo_doc.docs.map((doc) => doc.data().referralCode);

    stuData = stuData.concat(colStuData);

    setStuData(stuData);

    //email data
    const emailsDatabase = collection(db, "autokritiRegistration");
    const emailsDatabase_doc = await getDocs(emailsDatabase);

    emailData = emailsDatabase_doc.docs.map((doc) => doc.data().email);

    setEmailData(emailData);
  }

  useEffect(() => {
    if (stuData.length === 0) {
      getFinalAmbInfo();
    }
  });

  //this function runs when you click on paynow

  // const routeChange = async (event) => {
  //   event.preventDefault();
  //   const { name, email, phone, college, branch, semester, referal, timeSlot } =
  //     userData;

  //   async function getFinalAmbInfo() {
  //     //final ambassadors
  //     const stuInfo = collection(db, "finalStudentAmbassador");
  //     const stuInfo_doc = await getDocs(stuInfo);
  //     stuData = stuInfo_doc.docs.map((doc) => doc.data().referralCode);

  //     //final college representatives
  //     const colStuInfo = collection(db, "collegeRepresentatives");
  //     const colStuInfo_doc = await getDocs(colStuInfo);
  //     colStuData = colStuInfo_doc.docs.map((doc) => doc.data().referralCode);

  //     refData = stuInfo_doc.docs.map((doc) => doc.data().numberReferrals); //final ambassadors
  //     colRefData = colStuInfo_doc.docs.map((doc) => doc.data().numberReferrals); //final college representatives

  //     docIdData = stuInfo_doc.docs.map((doc) => doc.id); //final ambassadors
  //     colDocIdData = colStuInfo_doc.docs.map((doc) => doc.id); //final college representatives

  //     setStuData(stuData);
  //     setColStuData(colStuData);
  //     setRefData(refData);
  //     setDocIdData(docIdData);

  //     setColRefData(colRefData);
  //     setColDocIdData(colDocIdData);
  //   }

  //   getFinalAmbInfo();

  //   if (name && email && phone && college && branch && semester) {
  //     //if all fields are entered
  //     if (document.getElementById("agree").checked) {
  //       if (referal) {
  //         var valid = false;
  //         for (var i = 0; i < stuData.length; i++) {
  //           if (referal == stuData[i]) {
  //             valid = true;
  //             break;
  //           }
  //           //college student
  //           else if (i < colStuData.length) {
  //             if (referal == colStuData[i]) {
  //               valid = true;
  //               break;
  //             }
  //           }
  //         }

  //         if (valid) {
  //           window.open("https://rzp.io/l/uIZPhx2y"); //discount
  //         } else {
  //           window.open("https://rzp.io/l/e87mGYT"); //no discount
  //         }
  //       } else {
  //         window.open("https://rzp.io/l/e87mGYT"); //no discount
  //       }

  //       document.getElementById("payform-button2").disabled = false;
  //       document.getElementById("transaction").disabled = false;

  //       return true;
  //     } else {
  //       alert("Please tick the checkbox under instructions to proceed");
  //       return false;
  //     }
  //   } else {
  //     alert("Please fill the data");
  //   }
  // };

  return (
    <>
      <NavBar />
      <br />
      <p className="payform-heading">REGISTRATION FORM</p>
      <div className="payform-container">
        <div method="POST" className="payform-form">
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
              value={userData.name}
              onChange={postUserData}
            />{" "}
          </div>
          <div className="field">
            <span className="payform-label">Email id* </span>
            <br />
            <input
              className="payform-input"
              type="Email"
              name="email"
              id="amb_email"
              required="required"
              value={userData.email}
              onChange={postUserData}
            />{" "}
          </div>
          <div id="show_email_is_registered">
            This email has alreay been Registered
          </div>
          <div className="field">
            <span className="payform-label">Phone No * </span>
            <br />
            <input
              className="payform-input"
              type="number"
              name="phone"
              required="required"
              id="amb_phone"
              value={userData.phone}
              onChange={postUserData}
            />
          </div>
          <div className="field">
            <span className="payform-label">College</span>
            <br />
            <input
              className="payform-input"
              type="text"
              required="unrequired"
              name="college"
              id="amb_college"
              value={userData.college}
              onChange={postUserData}
            />{" "}
          </div>
          <div className="field">
            <span className="payform-label"> Branch </span>
            <br />
            <input
              className="payform-input"
              type="name"
              name="branch"
              required="unrequired"
              id="amb_branch"
              value={userData.branch}
              onChange={postUserData}
            />
          </div>
          <div className="field_select">
            <span className="payform-label">Semester</span>
            <select
              className="payform-dropdown"
              name="semester"
              id="amb_semester"
              required="unrequired"
              value={userData.semester}
              onChange={postUserData}
            >
              <option defaultValue={"DEFAULT"} disabled hidden>
                Choose here
              </option>
              <option value="DEFAULT">--None Selected--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          <div className="field">
            {" "}
            <span className="payform-label"> Referal Code(optional code) </span>
            <img
              className="referral_code_verified"
              alt="sos"
              id="referral_code_verified"
              src="https://img.icons8.com/color/48/000000/checked-2--v1.png"
            />
            <br />
            <div id="referal_check">
              <input
                className="payform-input"
                type="email"
                name="referal"
                alt=""
                id="referal_code"
                required="unrequired"
                value={userData.referal}
                onChange={postUserData}
              />
              <img
                id="ref_image"
                alt="sos"
                src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-information-camping-dreamstale-lineal-dreamstale.png"
                onMouseOver={i_information_visible}
                onMouseOut={i_information_nonvisible}
              />
            </div>
          </div>
          <div id="show_invalid">The Referal Code is Invalid</div>
          {/* Choose dempartment */}
          <div className="field">
            <span className="payform-label">
              {" "}
              Select Your Departments(max. two){" "}
            </span>

            {/* <div className="redcolortext">(Maximum two)</div> */}
            <br />
            <div className="main-chheckbox">
              <div className="department-checkbox">
                <input
                  type="checkbox"
                  name="mechanical"
                  required="unrequired"
                  id="amb_mechanical"
                  onChange={postUserData}
                />
                <span for="mechanical">Mechanical</span>
                <div id="mechanical"></div>
              </div>
              <div className="department-checkbox">
                <input
                  type="checkbox"
                  name="iot"
                  required="unrequired"
                  id="amb_IOT"
                  onChange={postUserData}
                />
                <span for="iot">IOT</span>
                <div id="iot"></div>
              </div>
              <div className="department-checkbox">
                <input
                  type="checkbox"
                  name="ev"
                  required="unrequired"
                  id="amb_EV"
                  onChange={postUserData}
                />
                <span for="ev">EV</span>
                <div id="ev"></div>
              </div>
              <div className="department-checkbox">
                <input
                  type="checkbox"
                  name="software"
                  required="unrequired"
                  id="amb_software"
                  onChange={postUserData}
                />
                <span for="software">Software</span>
                <div id="software"></div>
              </div>
            </div>
            <div className="department-timeslot">
              <div className="payform-label" id="chooseTimeslot">
                Choose timeSlot&nbsp; 
                {(temp.length==0)?" ":<span>({temp[0]})</span>}
                
              </div>
              <select
                name="timeSlot1"
                className="payform-dropdown"
                id="amb_timeslot"
                onChange={postUserData}
              >
                <option defaultValue={"DEFAULT"} disabled hidden>
                  Choose here
                </option>
                <option value="DEFAULT">--None Selected--</option>
                <option value="8-11">8-11 August</option>
                <option value="11-14">11-14 August</option>
              </select>
            </div>
          </div>
            <div className="accomo">
            <input type="radio" value="accomodation" name="accomodation" id="accomodation"  onChange={postUserData}/> Need Accomodation & food
            </div>
        
          <div id="pay_button">
            <div id="paynow">
              <button
                onClick={savetoLocal}
                className="payform-button"
                id="payform-button1"
              >
                Confirm
              </button>
            </div>
            <div id="i_button_content">
              <h4></h4>
            </div>
          </div>
        </div>

        <div className="payform-infocontain">
          <div className="payform-info">
            <FaInfoCircle /> &nbsp;{" "}
            <span id="quiz_registration">Instructions</span>
            <p className="instruction_para">
              * Make sure your email id is correct as you will be getting
              confirmation on that email
            </p>
            <p className="instruction_para">
              * You can choose Maximum 2 Departments. Each department is 3 Days Long + 1 Day Guest Lecture
            </p>
            <p className="instruction_para">
              * You have to show QR code at the time of arrival.
            </p>
            <p className="instruction_para">
              * In case of any issue or payment failure, please contact
              +91-9650735458
            </p>
            <p className="instruction_para">* Referal IDs are case-sensitive</p>
          </div>

          <br />

          <div className="payform-checkbox">
            <input type="checkbox" id="agree" name="" value="" />
            <div id="read_content">
              I have read and understood the instructions
            </div>

            <br />
            <br />
          </div>

          <br />
          <br />
        </div>
      </div>

      <br />

      <Footer />
    </>
  );

  // function submit() {
  //   var studentName = document.getElementById("amb_name");
  //   var collegeName = document.getElementById("amb_college");
  //   var branch = document.getElementById("amb_branch");
  //   var semester = document.getElementById("amb_semester");
  //   var phone = document.getElementById("amb_phone");
  //   var email = document.getElementById("amb_email");
  //   var referalcode = document.getElementById("referal_code");
  //   var transaction = document.getElementById("transaction");
  //   var dateOfSubmission = new Date().toLocaleString() + "";
  //   var timeSlot = "26 Feb";

  //   const docdata = {
  //     dateOfSubmission: dateOfSubmission,
  //     studentName: studentName.value,
  //     collegeName: collegeName.value,
  //     branch: branch.value,
  //     semester: semester.value,
  //     phone: phone.value,
  //     email: email.value,
  //     referalcode: referalcode.value,
  //     transaction: transaction.value,
  //     timeSlot: timeSlot,
  //   };

  //   validateForm(docdata);
  // }

  // //form validation
  // function validateForm(docdata) {
  //   if (
  //     docdata.studentName == "" ||
  //     docdata.collegeName == "" ||
  //     docdata.branch == "" ||
  //     docdata.phone == "" ||
  //     docdata.email == "" ||
  //     docdata.transaction == ""
  //   ) {
  //     alert("Please fill up the required fields.");
  //   } else if (docdata.phone.length != 10) {
  //     alert("phone number should be of length 10.");
  //   } else if (
  //     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(docdata.email)
  //   ) {
  //     alert("Please enter a valid email address.");
  //   } else {
  //     setInfo(docdata);
  //   }
  // }

  // function deletedata() {
  //   var studentName = document.getElementById("amb_name");
  //   var collegeName = document.getElementById("amb_college");
  //   var branch = document.getElementById("amb_branch");
  //   var semester = document.getElementById("amb_semester");
  //   var phone = document.getElementById("amb_phone");
  //   var email = document.getElementById("amb_email");
  //   var referalcode = document.getElementById("referal_code");
  //   var transaction = document.getElementById("transaction");
  //   studentName.value = null;
  //   collegeName.value = null;
  //   branch.value = null;
  //   semester.value = null;
  //   phone.value = null;
  //   email.value = null;
  //   referalcode.value = null;
  //   transaction.value = null;
  // }

  // //save to database
  // async function setInfo(docdata) {
  //   document.getElementById("payform-button2").disabled = true;
  //   document.getElementById("payform-button2").style.backgroundColor = "gray";

  //   //check if referal code is present and update database by 1 count
  //   //this code will work only if number of college representatives are less than or equal in number to final ambasadors
  //   for (var i = 0; i < stuData.length; i++) {
  //     if (docdata.referalcode == stuData[i]) {
  //       refData[i] += 1;
  //       await updateDoc(doc(db, "finalStudentAmbassador", docIdData[i]), {
  //         numberReferrals: refData[i],
  //       });
  //       break;
  //     } else if (i < colStuData.length) {
  //       if (docdata.referalcode == colStuData[i]) {
  //         colRefData[i] += 1;
  //         await updateDoc(doc(db, "collegeRepresentatives", colDocIdData[i]), {
  //           numberReferrals: colRefData[i],
  //         });
  //         break;
  //       }
  //     }
  //   }

  //   var timestamp = String(new Date().getTime());
  //   await setDoc(doc(db, "autokritiRegistration", timestamp), docdata);
  //   // sending data for sending mail
  //   $.ajax({
  //     type: "POST",
  //     // url: 'http://localhost:5000/send_confirmation_mail',
  //     url: "https://mail-sender-nodemailer.herokuapp.com/send_confirmation_mail",
  //     data: JSON.stringify(docdata),
  //     contentType: "application/json",
  //     dataType: "json",
  //     success: function (resultData) {
  //       alert("Save Complete");
  //     },
  //     error: function (err) {
  //       console.log("error" + err);
  //     },
  //   });
  //   alert("Congratulations! You are registered successfully.");
  //   deletedata();
  //   window.location.reload();
  // }
}

export default Quizsignup;
