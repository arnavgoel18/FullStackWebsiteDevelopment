//No need for this one now. It's an old one made just like that
//Can delete
import db from "../../../Firebase";
import {
  doc,
  setDoc,
} from "firebase/firestore";
import { send, init } from "emailjs-com";

import "./RegistrationForm.css";

var timestamp;

function RegistrationForm() {
  function submit() {
    var Name = document.getElementById("reg_name");
    var EmailId = document.getElementById("reg_mail");
    var Clg = document.getElementById("reg_college");
    var Sem = document.getElementById("reg_sem");
    var phone = document.getElementById("reg_pn");

    const contactUsData = {
      Name: Name.value,
      EmailId: EmailId.value,
      College: Clg.value,
      Semester: Sem.value,
      pno: phone.value,
    };

    validateForm(contactUsData);
  }
  function validateForm(contactUsData) {
    if (
      contactUsData.Name == "" ||
      contactUsData.EmailId == "" ||
      contactUsData.College == "" ||
      contactUsData.Semester == "" ||
      contactUsData.pno == ""
    ) {
      alert("Please fill up the required fields.");
    } else if (contactUsData.pno.length != 10) {
      alert("Please enter a valid phone number");
    } else if (
      !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(contactUsData.EmailId)
    ) {
      alert("Please enter a valid email address.");
    } else {
      setInfo(contactUsData);
    }
  }

  async function setInfo(contactUsData) {
    // console.log("enter")
    document.getElementById("reg_button").disabled = true;
    document.getElementById("reg_button").style.backgroundColor = "gray";
    timestamp = String(new Date().getTime());

    //db
    await setDoc(doc(db, "registration", timestamp), contactUsData);

    deletedata();

    // window.location.reload();
    sendEmail(contactUsData);
    alert("Congratulations! Your information has been saved successfully.");
    document.getElementById("reg_button").disabled = false;
    document.getElementById("reg_button").style.backgroundColor = "green";
  }
  function deletedata() {
    var Name = document.getElementById("reg_name");
    var EmailId = document.getElementById("reg_mail");
    var Clg = document.getElementById("reg_college");
    var Sem = document.getElementById("reg_sem");
    var Phone = document.getElementById("reg_pn");

    Name.value = null;
    EmailId.value = null;
    Clg.value = null;
    Sem.value = null;
    Phone.value = null;
  }

  const sendEmail = (data) => {
    //console.log("enter")
    init("user_qet4RKd7C7UreliHN5dhq"); //user id
    const toSend = {
      name: data.Name,
      sem: data.Semester,
      email: data.EmailId,
      clg: data.College,
      referenceId: timestamp,
      pno: data.Phone,
    };
    // console.log(toSend)
    //(serviceid,templateid,sendingdata)
    send("service_r8xht0n", "template_eqh6a2c", toSend).then(
      (result) => {
        //console.log('exit')
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  // referenceId
  return (
    <div className="reg-center">
      <div className="reg-heading">
        <i className="fa fa-user-circle-o reg-signUp-sign" aria-hidden="true"></i>
        <h1 id="center">SIGN UP FOR QUIZ</h1>
      </div>
      <form action="" className="reg-form">
        <div className="reg-input-div" id="reg-div-name">
          <i className="fa fa-user" aria-hidden="true"></i>
          <input id="reg_name" type="text" placeholder="Name" />
        </div>

        <div className="reg-input-div">
          <i className="fa fa-graduation-cap" aria-hidden="true"></i>
          <input id="reg_college" type="text" placeholder="College" />
        </div>

        <div className="reg-input-div">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <input id="reg_sem" type="number" placeholder="Semester" />
        </div>

        <div className="reg-input-div">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <input id="reg_mail" type="email" placeholder="Mail" />
        </div>

        <div className="reg-input-div">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <input id="reg_pn" type="number" placeholder="Phone Number" />
        </div>

        <button id="reg_button" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
