//Registeration Page made for Autokriti 2.0
import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import stringSimilarity from "string-similarity";
import toast, { Toaster } from 'react-hot-toast';

import $ from "jquery";
import "./AutokritiRegistration.css";

import db from "../../Firebase.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { check } from "fontawesome";

var c = 0;
var valid = false;
var storeemail = false; //for nitkkr stuednts
var storecollege = false; //for nitkkr college

const AutokritiRegistration2 = ({ submit }) => {
  const [workshopamount, setWorkshopAmount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [checkboxes, setCheckboxes] = useState([
    { id: "mechanical", label: "Mechanical", price: 1999, checked: false },
    { id: "iot", label: "IoT", price: 2250, checked: false },
    { id: "ev", label: "EV", price: 1999, checked: false },
    { id: "software", label: "Software", price: 1999, checked: false },
  ]);
  const [checkboxessoftware, setCheckboxessoftware] = useState([
    { id: "solidworks", label: "SolidWorks", checked: false },
    { id: "catia", label: "Catia", checked: false },
    { id: "nx", label: "NX", checked: false }
  ]);
  const [iotoptions, setIotoptions] = useState([
    { id: "individual", label: "Individuals", checked: false },
    { id: "group2", label: "Group2", checked: false },
  ])
  const [show2, setShow2] = useState(false);

  let flag3 = 0;
  const handleCheckboxChange3 = (id) => {
    const updatedCheckboxes3 = iotoptions.map((checkbox3) => {
      if (checkbox3.id === id) {
        checkbox3.checked = !checkbox3.checked;
        if (id === "group2" && checkbox3.checked) {
          setShow2(true);
        }
        else {
          setShow2(false);
        }

        if (checkbox3.checked) {
          flag3 = flag3 + 1;
          setsetSoftware((prevdepartment) => {
            return [...prevdepartment, checkbox3.id.toUpperCase()];
          });
        }
        else {
          flag3 = flag3 - 1;
          setsetSoftware((prevActions) =>
            prevActions.filter((i) => {
              return i !== checkbox3.id.toUpperCase();
            }));
        }
      }
      //console.log(flag);
      return checkbox3;
    });

    const checkedCount3 = updatedCheckboxes3.reduce((count, checkbox) => {
      return checkbox.checked ? count + 1 : count;
    }, 0);

    if (checkedCount3 > 1) {
      toast.error("You cannot choose both.");
      const index = updatedCheckboxes3.findIndex(
        (checkbox) => checkbox.id === id
      );
      updatedCheckboxes3[index].checked = false;
    }
  }




  let flag2 = 0;
  const handleCheckboxChange2 = (id) => {
    const updatedCheckboxes2 = checkboxessoftware.map((checkbox2) => {
      if (checkbox2.id === id) {
        checkbox2.checked = !checkbox2.checked;
        if (checkbox2.checked) {
          flag2 = flag2 + 1;
          setsetSoftware((prevdepartment) => {
            return [...prevdepartment, checkbox2.id.toUpperCase()];
          });
        }
        else {
          flag2 = flag2 - 1;
          setsetSoftware((prevActions) =>
            prevActions.filter((i) => {
              return i !== checkbox2.id.toUpperCase();
            }));
        }
      }
      //console.log(flag);
      return checkbox2;
    });

    const checkedCount2 = updatedCheckboxes2.reduce((count, checkbox) => {
      return checkbox.checked ? count + 1 : count;
    }, 0);

    if (checkedCount2 > 1) {
      toast.error("You can choose a maximum of 1 Softwares.");
      const index = updatedCheckboxes2.findIndex(
        (checkbox) => checkbox.id === id
      );
      updatedCheckboxes2[index].checked = false;
    }
  }


  let flag = 0;
  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
          flag = flag + 1;
          setsettemp((prevdepartment) => {
            return [...prevdepartment, checkbox.id.toUpperCase()];
          });
        }
        else {
          flag = flag - 1;
          setsettemp((prevActions) =>
            prevActions.filter((i) => {
              return i !== checkbox.id.toUpperCase();
            }));
        }
      }
      //console.log(flag);
      return checkbox;
    });

    const checkedCount = updatedCheckboxes.reduce((count, checkbox) => {
      return checkbox.checked ? count + 1 : count;
    }, 0);

    if (checkedCount > 1) {
      toast.error("You can choose a maximum of 1 workshops.");
      const index = updatedCheckboxes.findIndex(
        (checkbox) => checkbox.id === id
      );
      updatedCheckboxes[index].checked = false;
    }

    const updatedWorkshopAmount = updatedCheckboxes.reduce(
      (total, checkbox) => {
        return total + (checkbox.checked ? checkbox.price : 0);
      },
      0
    );

    setCheckboxes(updatedCheckboxes);
    setWorkshopAmount(updatedWorkshopAmount);
    const today = new Date();
    const discountDeadline = new Date('2024-09-10'); // Change the year if needed

    if (today < discountDeadline) {
      setDiscountedAmount(() => {
        return parseInt(updatedWorkshopAmount * 0.9);
      });
    } else {
      setDiscountedAmount(parseInt(updatedWorkshopAmount));
    }
  };

  var [finalcost, setFinalcost] = useState(0);
  var [department, setDepartment] = useState([]);
  var [temp, setsettemp] = useState([]);
  var [setsoftware, setsetSoftware] = useState(["Ansys"]);
  // var nishant=[];
  // var [count, setCount] = useState(0);
  //to calculate finalcost
  const calculateAmount = async () => {
    // var count = 0;
    // var Mechanical = document.getElementById("amb_mechanical").checked;
    finalcost=0;
    var IOT = document.getElementById("amb_IOT2").checked;
    // var EV = document.getElementById("amb_EV").checked;
    // var software = document.getElementById("amb_software").checked;
    var accomo = document.getElementById("accomodation2").checked;

    if (IOT == true) {
      finalcost += discountedAmount<workshopamount ? discountedAmount : workshopamount;
    }
    if(accomo){
      finalcost+=279*3;
    }
    userData.amount = finalcost;
    submit.amount = finalcost //1 for testing only, later changed with finalcost;
    // console.log(submit.amount);
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
      const allCheckboxesEmpty = checkboxes.every(
        (checkbox) => !checkbox.checked
      );

      if (phone.length != 10) {
        toast.error("Please enter a valid mobile number");
        return false;
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        toast.error("Please enter a valid email address.");
        return false;
      } else if (count > 2) {
        toast.error("You can choose maximum two department");
        return false;
      } else if (allCheckboxesEmpty) {
        toast.error("Choose at least one department");
        return false;
      } else if (document.getElementById("agree").checked) {
        return true;
      } else {
        toast.error("Please tick the checkbox under instructions to proceed");
        return false;
      }
    } else {
      alert("Please fill the data");
      return false;
    }
  }
  //to save data in local storage and render to payment page
  function savetoLocal() {
    // localStorage.removeItem("userData");
    // localStorage.removeItem("department");
    const checkAllData = checkAllFields();
    if (checkAllData) {
      calculateAmount();
      localStorage.setItem("userData2", JSON.stringify(userData));
      // localStorage.setItem("department", JSON.stringify(temp));
      // window.location = `/register/registrationDetails`;
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
    // referal: "",
    // transaction: "",
    orderid: "",
    paymentid: "",
    timeSlot1: "",
    // timeSlot2: "",
    status: "Registered",
    // mechanical: "",
    // ev: "",
    iot: "group2",
    // software: "",
    Registration_time: "",
    amount: finalcost,
    // firstChoice: "",
    accomodation: "No",
    // cod: "No",
    verified:false
  });


  let name, value, checked, type;
  let workshopamountt = 2500;

  const updateAmount = (c) => {
    if (c.checked) {
      if (c.id === "iot") {
        workshopamountt += 2750;
      } else {
        workshopamountt += 2500;
      }
    } else {
      if (c.id === "iot") {
        workshopamountt -= 2750;
      } else {
        workshopamountt -= 2500;
      }
    }

    document.getElementById("workshopAmount").innerText = workshopamountt;
  };
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    checked = event.target.checked;
    type = event.target.type;
    console.log(userData.amount);
    // var valid = false;
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
        // document.getElementById("original_price").style.textDecoration =
        //   "line-through";
        // document.getElementById("original_price").style.color = "red";
        // document.getElementById("discounted_price").style.color = "blue";
        // document.getElementById("discounted_price").style.display = "block";
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

      // if(/@nitkkr.ac.in\s*$/.test(value)){
      //   storeemail = true;
      // }
    }

    // if(name == 'college' && (value.match(/^nit k.*$/) || value.match(/^NIT K.*$/) || value.match(/^NIT k.*$/) || value.match(/^nit K.*$/) || value.match(/^Nit K.*$/) || value.match(/^.*Kurukshetra$/) || value.match(/^.*kurukshetra$/))){
    //         storecollege = true;
    // }

    // if(storeemail == true || storecollege == true)
    // {
    //   document.getElementById('amb_software').disabled = true;
    //   document.getElementById('amb_timeslot').disabled = true;
    //   userData.timeSlot1 = '10-12';
    //   userData.timeSlot2 = '10-12';
    //   document.getElementById('kkrtime').innerText = "10-12 september";
    // }
    // else{
    //   document.getElementById('kkrtime').innerText = "Choose Timeslot";
    //   document.getElementById('amb_software').disabled = false;
    //   document.getElementById('amb_timeslot').disabled = false;
    // }
    // if (type == "checkbox" && name !== "accomodation" && name !== "cod") {
    //   var check = checked.toString();
    //   if (checked) {
    //     c++;
    //     console.log(check, c);
    //     setsettemp((prevdepartment) => {
    //       return [...prevdepartment, name.toUpperCase()];
    //     });
    //   } else {
    //     c--;
    //     console.log(check, c);
    //     setsettemp((prevActions) =>
    //       prevActions.filter((i) => {
    //         return i !== name.toUpperCase();
    //       })
    //     );
    //   }

    //   let currentWorkshopAmount = parseInt(
    //     document.getElementById("workshopAmount").innerText
    //   );

    //   if (c === 2 && name !== "iot") {
    //     if (name == "iot") currentWorkshopAmount = currentWorkshopAmount + 2250;
    //     else currentWorkshopAmount = currentWorkshopAmount + 2250;
    //   } else if (c === 1) {
    //     if (name === "iot") {
    //       currentWorkshopAmount = currentWorkshopAmount + 2250;
    //     } else {
    //       currentWorkshopAmount = currentWorkshopAmount + 2250;
    //     }
    //   } else if (c === 0) {
    //     currentWorkshopAmount = 0;
    //   }

    //   if (c > 2) {
    //     alert("You can choose a maximum of 2 workshops.");
    //     event.target.checked = false;
    //     c = 2;
    //   }

    //   document.getElementById("workshopAmount").innerText =
    //     currentWorkshopAmount.toString();
    //   setUserData({ ...userData, [name]: check });
    //   submit({ ...userData, [name]: check });
    // }
    if (name == "timeSlot1") {
      if (value == "27-29") {
        userData.timeSlot1 = "27-29";
        // userData.timeSlot2 = "8-11";
        // console.log(userData.timeSlot1);
        // console.log(userData.timeSlot2);
      }
      // else {
      //   userData.timeSlot2 = "5-8";
      //   userData.timeSlot1 = "8-11";
      //   // console.log(userData.timeSlot1);
      //   // console.log(userData.timeSlot2);
      // }
      // if (value == "25-28") {
      //   userData.timeSlot1 = "25-28";
      //   console.log(userData.timeSlot1);
      // } else {
      //   userData.timeSlot2 = "22-25";
      //   console.log(userData.timeSlot2);
      // }
    }
    userData.timeSlot1 = "27-29";

    if (name == "accomodation") {
      if (checked == true) {
        userData.accomodation = "Yes";
      } else {
        userData.accomodation = "No";
      }
    }

    // if (name == "cod") {
    //   if (checked == true) {
    //     userData.cod = "Yes";
    //   } else {
    //     userData.cod = "No";
    //   }
    // }

    // if (
    //   document.getElementById("workshopAmount").innerText >= 4500 &&
    //   document.getElementById("accomodation").checked == true
    // )
    //   document.getElementById("accomoAmount").innerText = 1000;
    // console.log(document.getElementById("accomodation").checked);
    if (name=="accomodation" && document.getElementById("accomodation2").checked == true){
      submit.accomodation="Yes";
      userData.accomodation="Yes";
      value="Yes";
      document.getElementById("accomoAmount2").innerText = 279 * 3;
    }
    else if(name=="accomodation") {
      submit.accomodation="No";
      userData.accomodation="No";
      value="No"
      // calculateAmount();
      document.getElementById("accomoAmount2").innerText = 0;
    }
    // calculateAmount();
    if (type != "radio") {
      setUserData({ ...userData, [name]: value });
      submit({ ...userData, [name]: value })
    }
    console.log(submit.accomodation);
    console.log(submit.amount);
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

  return (
    <>
      <Toaster/>
      <div method="POST" className="payform-form">
        <p style={{ fontWeight: "600", marginBottom: "3px" }}>Add Member: </p>
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
        {/* <div className="field">
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
          </div> */}
        {/* <div id="show_invalid">The Referal Code is Invalid</div> */}
        {/* Choose dempartment */}
        <div className="field">
          <span className="payform-label">
            {" "}
            Select Your Departments{" "}
          </span>

          {/* <div className="redcolortext">(Maximum two)</div> */}
          <br />
          <div className="main-chheckbox">
            <div className="department-checkbox" style={{ marginLeft: 0 }}>
              <input
                type="checkbox"
                name="iot"
                required="unrequired"
                id="amb_IOT2"
                checked={
                  checkboxes.find((checkbox) => checkbox.id === "iot").checked
                }
                onChange={() => handleCheckboxChange("iot")}
              />
              <label htmlFor="amb_IOT2">IoT</label>
              <div id="iot"></div>
            </div>
            <br />
            {/* <br />
              <p>Total Amount: ${workshopamount}</p> */}
          </div>
        </div>
        {/* <div className="cod">
            <input
              type="checkbox"
              value="cod"
              name="cod"
              id="cashondelivery"
              onChange={postUserData}
            />{" "}
            Pay cash on delivery
          </div> */}
        <div className="payform-lable">
          {/* <span>Workshop Amount (&#8377;) : </span> */}
          <span>Workshop Amount (&#8377;) : {discountedAmount < workshopamount ? <strike>{workshopamount}</strike> : workshopamount} {discountedAmount < workshopamount && discountedAmount} </span>
          <span style={{ display: "none" }} id="workshopAmount">
            0
          </span>
        </div>
        <div className="accomo">
          <input
            type="checkbox"
            value="accomodation"
            name="accomodation"
            id="accomodation2"
            onChange={postUserData}
          />{" "}
          Need Accomodation & food(279 per Day)
        </div>
        <div className="payform-lable">
          <span>Amount (&#8377;) : </span>
          <span id="accomoAmount2">0</span>
        </div>
      </div>
    </>
  )
}

export default AutokritiRegistration2