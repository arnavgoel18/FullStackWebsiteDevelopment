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
    


  const sendEmail = (data) => {
    //console.log("enter")
    init("user_qet4RKd7C7UreliHN5dhq"); //user id
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
