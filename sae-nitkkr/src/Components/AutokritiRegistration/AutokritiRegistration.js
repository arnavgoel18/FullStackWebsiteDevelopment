//Registeration Page made for Autokriti 2.0
import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import stringSimilarity from "string-similarity";
import toast, { Toaster } from 'react-hot-toast';
import $, { event } from "jquery";
import "./AutokritiRegistration.css";

import db from "../../Firebase.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  Timestamp,
  query, where,
} from "firebase/firestore";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { check } from "fontawesome";
import AutokritiRegistration2 from "./AutokritiRegistration2.js";

var c = 0;
var valid = false;
var storeemail = false; //for nitkkr stuednts
var storecollege = false; //for nitkkr college
function Quizsignup() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSoftware, setSelectedSoftware] = useState('');
  const [workshopamount, setWorkshopAmount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [checkboxes, setCheckboxes] = useState([
    { id: "Mechanical", label: "Mechanical", price: 1999, checked: false },
    { id: "IOT", label: "IoT", price: 2500, checked: false },
    { id: "EV + PCB Designing", label: "EV + PCB Designing", price: 1999, checked: false },
    { id: "Software", label: "Software", price: 1999, checked: false },
  ]);
  const [isSoftware, setIsSoftware] = useState(false);
  const [isIOT, setIsIOT] = useState(false);
  const [checkboxessoftware, setCheckboxessoftware] = useState([
    { id: "solidworks", label: "SolidWorks", checked: false },
    { id: "catia", label: "Catia", checked: false },
    { id: "nx", label: "NX", checked: false }
  ]);
  const [iotoptions, setIotoptions] = useState([
    { id: "individual", label: "Individuals", price: 2500, checked: false },
    { id: "group2", label: "Group2", price: 2500, checked: false },
  ])
  const [show2, setShow2] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [category, setCategory] = useState("individual");
  const [getuserdata2, setGetuserdata2] = useState({});

  // const handleCheckboxChange3 = (id) => {
  //   const updatedCheckboxes3 = iotoptions.map((checkbox3) => {
  //     if (checkbox3.id === id) {
  //       checkbox3.checked = !checkbox3.checked;
  //       if (id === "group2" && checkbox3.checked) {
  //         setShow2(true);
  //       }
  //       else {
  //         setShow2(false);
  //       }

  //       if (checkbox3.checked) {
  //         setCategory(() => { return id });
  //       }
  //       else {
  //         setCategory("");
  //       }
  //     }
  //     //console.log(flag);
  //     return checkbox3;
  //   });

  //   const checkedCount3 = updatedCheckboxes3.reduce((count, checkbox) => {
  //     return checkbox.checked ? count + 1 : count;
  //   }, 0);

  //   if (checkedCount3 > 1) {
  //     toast.error("You cannot choose both.");
  //     if (id === "group2") {
  //       setShow2(false)
  //     }
  //     const index = updatedCheckboxes3.findIndex(
  //       (checkbox) => checkbox.id === id
  //     );
  //     updatedCheckboxes3[index].checked = false;
  //   }

  //   const updatedWorkshopAmount2 = iotoptions.reduce(
  //     (total, checkbox) => {
  //       return total + (checkbox.checked ? checkbox.price : 0);
  //     },
  //     0
  //   );

  //   setWorkshopAmount(updatedWorkshopAmount2);
  //   const today = new Date();
  //   const discountDeadline = new Date('2024-09-10'); // Change the year if needed

  //   if (today < discountDeadline) {
  //     setDiscountedAmount(() => {
  //       return parseInt(updatedWorkshopAmount2 * 0.9);
  //     });
  //   } else {
  //     setDiscountedAmount(parseInt(updatedWorkshopAmount2));
  //   }
  // }
  // const handleCheckboxChange2 = (id) => {
  //   const updatedCheckboxes2 = checkboxessoftware.map((checkbox2) => {
  //     if (checkbox2.id === id) {
  //       checkbox2.checked = !checkbox2.checked;
  //       if (checkbox2.checked) {
  //         setsettemp((prevdepartment) => {
  //           return [...prevdepartment, "Ansys", checkbox2.id.toUpperCase()];
  //         });
  //       }
  //       else {
  //         setsettemp((prevActions) =>
  //           prevActions.filter((i) => {
  //             return i !== checkbox2.id.toUpperCase();
  //           }));
  //       }
  //     }
  //     //console.log(flag);
  //     return checkbox2;
  //   });

  //   const checkedCount2 = updatedCheckboxes2.reduce((count, checkbox) => {
  //     return checkbox.checked ? count + 1 : count;
  //   }, 0);

  //   if (checkedCount2 > 1) {
  //     toast.error("You can choose a maximum of 1 Softwares.");
  //     const index = updatedCheckboxes2.findIndex(
  //       (checkbox) => checkbox.id === id
  //     );
  //     updatedCheckboxes2[index].checked = false;
  //   }
  // }
  // const handleiotcategory=(event)=>{
  //   const iotcategory=event.target.value
  //   setCategory(iotcategory);
  //   if(iotcategory==="group2"){
  //     setShow2(true);
  //   }
  //   else{
  //     setShow2(false);
  //   }
  //   const updatedWorkshopAmount = iotoptions.reduce(
  //     (total, checkbox) => {
  //       return total + (checkbox.id === iotcategory ? checkbox.price : 0);
  //     },
  //     0
  //   );
  //   setWorkshopAmount(updatedWorkshopAmount);
  //   const today = new Date();
  //   const discountDeadline = new Date('2024-09-20'); // Change the year if needed

  //   if (today < discountDeadline) {
  //     setDiscountedAmount(() => {
  //       return parseInt(updatedWorkshopAmount * 0.9);
  //     });
  //   } else {
  //     setDiscountedAmount(parseInt(updatedWorkshopAmount));
  //   }
  // }
  const [subsoftware ,setsubsoftware]=useState([]);
  const handleSoftwareChange = (event)=>{
    const software = event.target.value;
    setSelectedSoftware(software);
    setsubsoftware(["Ansys",software]);
  }
  const handleDepartmentChange = (event) => {
    const department = event.target.value;
    setSelectedDepartment(department);
    setsettemp([department]); // Store the selected department in the array
    if(department!=="Software"){
      setsubsoftware([]);
    }
    if(department!=="IOT"){
      setCategory("individual")
      setShow2(false);
    }
    const updatedWorkshopAmount = checkboxes.reduce(
      (total, checkbox) => {
        return total + (checkbox.id === department ? checkbox.price : 0);
      },
      0
    );
    setWorkshopAmount(updatedWorkshopAmount);
    const today = new Date();
    const discountDeadline = new Date('2024-09-21'); // Change the year if needed

    if (today < discountDeadline) {
      setDiscountedAmount(() => {
        return parseInt(updatedWorkshopAmount * 0.9);
      });
    } else {
      setDiscountedAmount(parseInt(updatedWorkshopAmount));
    }
    if (department === "Software") {
      setIsSoftware(true);
    }
    else {
      setIsSoftware(false);
    }
    if (department === "IOT") {
      setIsIOT(true)
    }
    else {
      setIsIOT(false);
    }
  };
  // const handleCheckboxChange = (id) => {
  //   const updatedCheckboxes = checkboxes.map((checkbox) => {
  //     if (checkbox.id === id) {
  //       checkbox.checked = !checkbox.checked;
  //       if (id === "software" && checkbox.checked) {
  //         setIsSoftware(true);
  //       }
  //       else {
  //         setIsSoftware(false);
  //       }

  //       if (id === "iot" && checkbox.checked) {
  //         setIsIOT(true);
  //       }
  //       else {
  //         setIsIOT(false);
  //         setShow2(() => { return false })
  //       }
  //       if (checkbox.checked) {
  //         setsettemp((prevdepartment) => {
  //           return [...prevdepartment, checkbox.label.toUpperCase()];
  //         });
  //       }
  //       else {
  //         setsettemp((prevActions) =>
  //           prevActions.filter((i) => {
  //             return i !== checkbox.label.toUpperCase();
  //           }));
  //       }
  //     }
  //     //console.log(flag);
  //     return checkbox;
  //   });

  //   const checkedCount = updatedCheckboxes.reduce((count, checkbox) => {
  //     return checkbox.checked ? count + 1 : count;
  //   }, 0);

  //   if (checkedCount > 1) {
  //     toast.error("You can choose a maximum of 1 workshops.");
  //     const index = updatedCheckboxes.findIndex(
  //       (checkbox) => checkbox.id === id
  //     );
  //     if (id === "software") {
  //       setIsSoftware(false);
  //     }
  //     if (id === "iot") {
  //       setIsIOT(false);
  //     }
  //     updatedCheckboxes[index].checked = false;
  //   }

  //   const updatedWorkshopAmount = updatedCheckboxes.reduce(
  //     (total, checkbox) => {
  //       return total + (checkbox.checked ? checkbox.price : 0);
  //     },
  //     0
  //   );

  //   setCheckboxes(updatedCheckboxes);
  //   setWorkshopAmount(updatedWorkshopAmount);
  //   const today = new Date();
  //   const discountDeadline = new Date('2024-09-10'); // Change the year if needed

  //   if (today < discountDeadline) {
  //     setDiscountedAmount(() => {
  //       return parseInt(updatedWorkshopAmount * 0.9);
  //     });
  //   } else {
  //     setDiscountedAmount(parseInt(updatedWorkshopAmount));
  //   }
  // };
  async function checkEmailExists(email) {
    const usersCollection = collection(db, "AutokritiRegistration2024"); // Replace with your collection name
    const q = query(usersCollection, where("email", "==", email));

    try {
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking email existence:", error);
      return false;
    }
  }
  // console.log(getuserdata2);

  var [finalcost, setFinalcost] = useState(0);
  var [department, setDepartment] = useState([]);
  var [temp, setsettemp] = useState([]);
  // var nishant=[];
  // var [count, setCount] = useState(0);
  //to calculate finalcost
  const calculateAmount = async () => {
    var Mechanical = document.getElementById("amb_mechanical").checked;
    var IOT = document.getElementById("amb_IOT").checked;
    var EV = document.getElementById("amb_EV").checked;
    var software = document.getElementById("amb_software").checked;
    var accomo = document.getElementById("accomodation").checked;

    if (Mechanical == true) {
      finalcost += (discountedAmount < workshopamount ? discountedAmount : workshopamount);
    }
    if (IOT == true) {
      finalcost += (discountedAmount < workshopamount ? discountedAmount : workshopamount);
    }
    if (EV == true) {
      finalcost += (discountedAmount < workshopamount ? discountedAmount : workshopamount);
    }
    if (software == true) {
      finalcost += (discountedAmount < workshopamount ? discountedAmount : workshopamount);
    }
    if (accomo === true) {
      finalcost += 279 * 3;
    }

    if (valid == true) finalcost = finalcost - 100;
    setFinalcost(finalcost);
    userData.amount = finalcost; //1 for testing only, later changed with finalcost;
    if (show2) {
      if (getuserdata2.accomodation == "Yes") {
        getuserdata2.amount = (discountedAmount < workshopamount ? discountedAmount : workshopamount) + 279 * 3;
      }
      else {
        getuserdata2.amount = (discountedAmount < workshopamount ? discountedAmount : workshopamount);
      }
    }
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
      // referal,
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
      department[count++] = "EV+PCB Designing";
    }
    if (software == "true") {
      department[count++] = "Software";
    }

    // console.log(department, count);
    if (name && email && phone && college && branch && semester && timeSlot1) {
      //if all fields are entered
      // const allCheckboxesEmpty = checkboxes.every(
      //   (checkbox) => !checkbox.checked
      // );
      console.log(temp.length);
      const allCheckboxesEmpty = temp.length>0 ? false : true;
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
      console.log("failed1");

      toast.error("Please fill the data");
      return false;
    }
  }
  function checkAllFields2() {
    const {
      name,
      email,
      phone,
      college,
      branch,
      semester,
    } = getuserdata2;


    if (name && email && phone && college && branch && semester) {
      //if all fields are entered

      if (phone.length != 10) {
        toast.error("Please enter a valid mobile number");
        return false;
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        toast.error("Please enter a valid email address.");
        return false;
      } else if (document.getElementById("agree").checked) {
        return true;
      }
    } else {
      console.log("failed");

      toast.error("Please fill the data");
      return false;
    }
  }
  //to save data in local storage and render to payment page
  function savetoLocal() {
    localStorage.removeItem("userData");
    localStorage.removeItem("department");
    localStorage.removeItem("userData2");
    if(temp.length>0 && temp[0]==="Software"){
      if(subsoftware.length>1){
        temp.push(subsoftware[0]);
        temp.push(subsoftware[1])
      }
    }
    const checkAllData = checkAllFields();
    if (show2) {
      var checkAllData2 = checkAllFields2();
    }
    if (!show2 && checkAllData) {
      calculateAmount();
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("department", JSON.stringify(temp));
      window.location = `/register/registrationDetails`;
    }
    else if (show2 && checkAllData && checkAllData2) {
      calculateAmount();
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("userData2", JSON.stringify(getuserdata2))
      localStorage.setItem("department", JSON.stringify(temp));
      window.location = `/register/registrationDetails`;
    }
  }

  var [stuData, setStuData] = useState([]);

  //Display Referal
  // function i_information_visible() {
  //   let k = document.getElementById("i_button_content");
  //   k.style.visibility = "visible";
  //   k.innerHTML =
  //     "Enter only if you are applying through an ambassador (max. 10% off)";
  // }

  // function i_information_nonvisible() {
  //   let k = document.getElementById("i_button_content");
  //   k.style.visibility = "hidden";
  // }
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
  // console.log(category);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    semester: "",
    // referal: "",
    paymentid: "",
    timeSlot1: "",
    // timeSlot2: "",
    status: "Registered",
    // mechanical: "",
    // ev: "",
    iot: category,
    // software: "",
    Registration_time: "",
    amount: finalcost,
    accomodation: "No",
    verified:false,
    groupid:"",
    cancelled:false,
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
    if (type == "checkbox" && name !== "accomodation" && name !== "cod") {
      var check = checked.toString();
      if (checked) {
        c++;
        console.log(check, c);
        setsettemp((prevdepartment) => {
          return [...prevdepartment, name.toUpperCase()];
        });
      } else {
        c--;
        console.log(check, c);
        setsettemp((prevActions) =>
          prevActions.filter((i) => {
            return i !== name.toUpperCase();
          })
        );
      }

      let currentWorkshopAmount = parseInt(
        document.getElementById("workshopAmount").innerText
      );

      if (c === 2 && name !== "iot") {
        if (name == "iot") currentWorkshopAmount = currentWorkshopAmount + 2500;
        else currentWorkshopAmount = currentWorkshopAmount + 2750;
      } else if (c === 1) {
        if (name === "iot") {
          currentWorkshopAmount = currentWorkshopAmount + 2750;
        } else {
          currentWorkshopAmount = currentWorkshopAmount + 2500;
        }
      } else if (c === 0) {
        currentWorkshopAmount = 0;
      }

      if (c > 1) {
        toast.success("You can choose a maximum of 1 workshops.");
        event.target.checked = false;
        c = 2;
      }

      document.getElementById("workshopAmount").innerText =
        currentWorkshopAmount.toString();
      setUserData({ ...userData, [name]: check });
    }
    userData.iot = category;
    if (name == "timeSlot1") {
      if (value == "27-29") {
        userData.timeSlot1 = "27-29";
        // userData.timeSlot2 = "8-11";
        // console.log(userData.timeSlot1);
        // console.log(userData.timeSlot2);
      }
      else if(value === "4-6") {
        userData.timeSlot1 = "4-6";
        // console.log(userData.timeSlot1);
        // console.log(userData.timeSlot2);
      }
      // if (value == "25-28") {
      //   userData.timeSlot1 = "25-28";
      //   console.log(userData.timeSlot1);
      // } else {
      //   userData.timeSlot2 = "22-25";
      //   console.log(userData.timeSlot2);
      // }
    }

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
    if (document.getElementById("accomodation").checked == true)
      document.getElementById("accomoAmount").innerText = 279 * 3;
    else document.getElementById("accomoAmount").innerText = 0;

    if (type != "checkbox" && type != "radio") {
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
  //       toast.success("Please tick the checkbox under instructions to proceed");
  //       return false;
  //     }
  //   } else {
  //     toast.success("Please fill the data");
  //   }
  // };
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Toaster />
      <NavBar />
      <br />
      <p className="payform-heading">REGISTRATION FORM</p>
      <div className="payform-container-2">
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
                  type="radio"
                  name="mechanical"
                  required="unrequired"
                  id="amb_mechanical"
                  value={"Mechanical"}
                  checked={
                    selectedDepartment === "Mechanical"
                  }
                  onChange={handleDepartmentChange}
                />
                <label htmlFor="amb_mechanical">Mechanical</label>
                <div id="mechanical"></div>
              </div>
              <div className="department-checkbox">
                <input
                  type="radio"
                  name="iot"
                  required="unrequired"
                  id="amb_IOT"
                  value={"IOT"}
                  checked={
                    selectedDepartment === "IOT"
                  }
                  onChange={handleDepartmentChange}
                />
                <label htmlFor="amb_IOT">IoT</label>
                <div id="iot"></div>
              </div>
              <div className="department-checkbox">
                <input
                  type="radio"
                  name="ev"
                  required="unrequired"
                  id="amb_EV"
                  value={"EV + PCB Designing"}
                  checked={
                    selectedDepartment === "EV + PCB Designing"
                  }
                  onChange={handleDepartmentChange}
                />
                <label htmlFor="amb_EV">EV+PCB Designing</label>
                <div id="ev"></div>
              </div>
              <br />
              {/* <br />
              <p>Total Amount: ${workshopamount}</p> */}
            </div>
            <div className="department-checkbox" id="software_disable" style={{ marginLeft: 0 }}>
              <input
                type="radio"
                name="software"
                required="unrequired"
                id="amb_software"
                value={"Software"}
                checked={
                  selectedDepartment === "Software"
                }
                onChange={handleDepartmentChange}
              />
              <label htmlFor="amb_software">Software</label>
              <div id="software"></div>
            </div>
            {isSoftware &&
              <div style={{ marginTop: "5px" }}>
                <span>Your First Software Domain :</span> <span>Ansys</span><br />
                <span>Choose Your Second Domain:</span><br />
                <div className="main-chheckbox">
                  <div className="department-checkbox" style={{ marginLeft: 0 }}>
                    <input
                      type="radio"
                      name="mechanical"
                      required="unrequired"
                      id="amb_solidworks"
                      value={"SolidWorks"}
                      checked={
                        selectedSoftware==="SolidWorks"
                      }
                      onChange={handleSoftwareChange}
                    />
                    <label htmlFor="amb_solidworks">SolidWorks</label>
                    <div id="mechanical"></div>
                  </div>
                  <div className="department-checkbox">
                    <input
                      type="radio"
                      name="catia"
                      required="unrequired"
                      id="amb_catia"
                      value={"Catia"}
                      checked={
                        selectedSoftware==="Catia"
                      }
                      onChange={handleSoftwareChange}
                    />
                    <label htmlFor="amb_catia">Catia</label>
                    <div id="iot"></div>
                  </div>
                  <div className="department-checkbox">
                    <input
                      type="radio"
                      name="ev"
                      required="unrequired"
                      id="amb_nx"
                      value={"NX"}
                      checked={
                        selectedSoftware==="NX"
                      }
                      onChange={handleSoftwareChange}
                    />
                    <label htmlFor="amb_nx">NX</label>
                    <div id="ev"></div>
                  </div>
                  <br />
                </div>
              </div>
            }
            {/* {isIOT &&
              <div>
                <span>Register As:</span>
                <div className="main-chheckbox">
                  <div className="department-checkbox" style={{ marginLeft: 0 }}>
                    <input
                      type="radio"
                      name="individuals"
                      required="unrequired"
                      id="amb_individuals"
                      value={"individual"}
                      checked={
                        category==="individual"
                      }
                      onChange={handleiotcategory}
                    />
                    <label htmlFor="amb_individuals">Individuals</label>
                    <div id="individuals"></div>
                  </div>
                  <div className="department-checkbox">
                    <input
                      type="radio"
                      name="group2"
                      required="unrequired"
                      id="amb_group2"
                      value={"group2"}
                      checked={
                        category==="group2"
                      }
                      onChange={handleiotcategory}
                    />
                    <label htmlFor="amb_group2">Group of Two</label>
                    <div id="group2"></div>
                  </div>

                  <br />
                </div>
                {windowWidth < 1130 && show2 && <AutokritiRegistration2 submit={setGetuserdata2} />}
              </div>
            } */}

            {/* <div className="main-chheckbox">
              <div className="department-checkbox">
                <input
                  type="checkbox"
                  name="mechanical"
                  required="unrequired"
                  id="amb_mechanical"
                  onChange={() => updateAmount(this)}
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
                  onChange={() => updateAmount(this)}
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
                  onChange={() => updateAmount(this)}
                />
                <span for="ev">EV</span>
                <div id="ev"></div>
              </div>
              <div className="department-checkbox" id="software_disable">
                <input
                  type="checkbox"
                  name="software"
                  required="unrequired"
                  id="amb_software"
                  onChange={() => updateAmount(this)}
                />
                <span for="software">Software</span>
                <div id="software"></div>
              </div>
            </div> */}
            {/* {checkboxes.map((checkbox) => (
              <div key={checkbox.id}>
                <input
                  type="checkbox"
                  id={checkbox.id}
                  checked={checkbox.checked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
                <label htmlFor={checkbox.id}>{checkbox.label}</label>
              </div>
            ))} */}
            <div className="payform-lable">
              {/* <span>Workshop Amount (&#8377;) : </span> */}
              <span>Workshop Amount (&#8377;) : {discountedAmount < workshopamount ? <strike>{workshopamount}</strike> : workshopamount} {discountedAmount < workshopamount && discountedAmount} </span>
              <span style={{ display: "none" }} id="workshopAmount">
                0
              </span>
            </div>
            <div className="department-timeslot">
              <div className="payform-label" id="chooseTimeslot">
                <div id="kkrtime">Choose Timeslot&nbsp;</div>
                {temp.length == 0 ? " " : <span>({temp[0]})</span>}
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
                {/*<option value="22-25">22-25 September</option>*/}
                <option value="27-29">27-29 September</option>
                <option value="4-6">4-6 October</option>
              </select>
            </div>
          </div>
          <div className="accomo">
            <input
              type="checkbox"
              value="accomodation"
              name="accomodation"
              id="accomodation"
              onChange={postUserData}
            />{" "}
            Need Accomodation & food(279 per Day)
          </div>
          <div className="payform-lable">
            <span>Amount (&#8377;) : </span>
            <span id="accomoAmount">0</span>
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
        {/* {windowWidth >= 1130 && show2 && <AutokritiRegistration2 submit={setGetuserdata2} />} */}
        <div className="payform-infocontain">
          <div className="payform-info">
            <FaInfoCircle /> &nbsp;{" "}
            <span id="quiz_registration">Instructions</span>
            <p className="instruction_para">
              * Make sure your email id is correct as you will be getting
              confirmation on that email
            </p>
            <p className="instruction_para">
              *Workshop Will be 3 Days
              Long
            </p>
            {/* <p className="instruction_para">
              * You have to Show Registration ID at the time of arrival.
            </p> */}
            <p className="instruction_para">
              * In case of any issue or payment failure, please contact-<br />
              Govind +91-9602562300
              Sourav +91-9306356371
            </p>
            {/*  <p className="instruction_para">* Referal IDs are case-sensitive</p> */}
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
  //     toast.success("Please fill up the required fields.");
  //   } else if (docdata.phone.length != 10) {
  //     toast.success("phone number should be of length 10.");
  //   } else if (
  //     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(docdata.email)
  //   ) {
  //     toast.success("Please enter a valid email address.");
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
  //       toast.success("Save Complete");
  //     },
  //     error: function (err) {
  //       console.log("error" + err);
  //     },
  //   });
  //   toast.success("Congratulations! You are registered successfully.");
  //   deletedata();
  //   window.location.reload();
  // }
}

export default Quizsignup;
