//No need for this one now. It's an old one made just like that
//Can delete
import {useState} from 'react';
import db from "../../../Firebase";
import {
  doc,
  getDocs,
  collection,
} from "firebase/firestore";
import { send, init } from "emailjs-com";

import "./RegistrationForm.css";

var timestamp;

function RegistrationForm() {
  var emailList=[];
  var [tester, setTester] = useState(true);
  //var [autokritiData, setAutokritiData] = useState({});

  async function getContactInfo() {
    const contactUs = collection(db, "autokritiRegistration");
    var amb_doc = await getDocs(contactUs);
    emailList = amb_doc.docs.map((doc) => doc.data().email);
    //setAutokritiData(detailList);
    console.log(emailList);
  }

  if (tester == true) {
    window.addEventListener("load", getContactInfo());
    setTester(false);
  }

  const sendEmail = (data) => {
    init("user_qet4RKd7C7UreliHN5dhq");
    const toSend = {
      name: data.Name,
      sem: data.Semester,
      email: data.EmailId,
      clg: data.College,
      id: timestamp,
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
      <form>
        <button id="reg_button" onClick={sendEmail}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
