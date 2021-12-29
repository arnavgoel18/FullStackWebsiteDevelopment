import React from "react";
import "./ContactUs.css";

import db from "../../Firebase.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";

import location from "../../Assets/ContactUs/lc.jpg";
import nx from "../../Assets/ContactUs/nx.jpg";
import ac from "../../Assets/ContactUs/ac.jpg";
import mail from "../../Assets/ContactUs/msg.jpg";

function ContactUS() {
  return (
    <>
      <h1 className="heading">CONTACT US</h1>
      <br />
      <br />
      <div className="whole-body">
        <div className="details">
          <div className="abc" id="abcd">
            <div className="icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <a
              className="location"
              href="https://www.google.com/maps/dir/29.5070878,75.0449986/WRV9%2BW46+Gol+Canteen+(SAE+NITKKR),+NIT,+Thanesar,+Haryana+136119/@29.7293325,74.8076003,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390e3f5100000001:0x7f8e5219d122c23e!2m2!1d76.8178281!2d29.9447794"
            >
              {" "}
              <div className="tt"> Gol,NIT Kurukshetra</div>
            </a>
          </div>
          <div className="abc">
            <div className="icon">
              {" "}
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="tt"> saenitkurukshetra@gmail.com</div>
          </div>
          <br />
          <br />
          <div className="abc">
            {" "}
            <div className="iconimgnx">
              <img src={nx} alt="" />{" "}
            </div>{" "}
            <div className="tt"> teamnitrox@gmail.com</div>
          </div>
          <br />
          <br />
          <div className="abc">
            <div className="iconimgacc">
              {" "}
              <img src={ac} alt="" />
            </div>{" "}
            <div className="tt"> teamaccelerons@gmail.com</div>
          </div>
        </div>

        <div className="container">
          <br />
          <div className="field">
            {" "}
            <input
              type="text"
              alt="Name"
              name="name"
              id="cont_name"
              required="required"
            />{" "}
            <span> Name.. </span>
          </div>
          <div className="field">
            {" "}
            <input
              type="email"
              name="email"
              alt="email"
              id="cont_email"
              required="required"
            />
            <span> Email Id.. </span>
          </div>
          <div className="field">
            <input type="number" name="phone" id="cont_phone" required="required" />
            <span> Phone No.(optional)</span>
          </div>
          <div className="field">
            <input type="text" name="institute" id="cont_organisation" required="unrequired" />
            <span>Institute/Organisations(optional) </span>{" "}
          </div>
          <div className="field">
            {" "}
            <textarea
              required="required"
              name="message"
              id="cont_message"
              // cols="65"
              // rows="6"
            ></textarea>
            <span>Your Message </span>
          </div>
          <div className="field">
            Reason to Contact{" "}
            <select id="s1">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="submit blog" value="To submit a blog">
                To submit a blog
              </option>
              <option name="sponsership" value="Sponsorship">
                Sponsorship
              </option>
              <option name="brand_ambassador" value="Brand Ambassador">
                Brand Ambassador
              </option>
              <option name="content was abusive" value="Content was abusive">
                Content was abusive
              </option>
              <option name="other" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="field">
            Person Contacting us is a{" "}
            <select id="s2">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="club_alumni" value=" Club Alumni">
                Club Alumni
              </option>
              <option name="companyrepresentative" value="Company Representative">
                Company Representative
              </option>
              <option name="student" value="Student">
                Student
              </option>
              <option name="professor" value="Professor">
                Professor
              </option>
              <option name="other" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="button">
            <button id="contact_button" onClick={submit}> Submit </button>
          </div>

        </div>
      </div>
    </>
  );

  function submit(){
    var Name = document.getElementById("cont_name");
    var EmailId = document.getElementById("cont_email");
    var PhoneNo = document.getElementById("cont_phone");
    var Organisation = document.getElementById("cont_organisation");
    var Message = document.getElementById("cont_messsage");
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
  
    const contactUsData = {
      Name: Name.value,
      EmailId: EmailId.value,
      PhoneNo: PhoneNo.value,
      Organisation: Organisation.value,
      Message: Message.value,
      s1: s1.value,
      s2: s2.value
    }

    setInfo(contactUsData)
  }

  async function setInfo(contactUsData) {
    var timestamp = String(new Date().getTime());
    await setDoc(doc(db, "contactUs", timestamp), contactUsData);
    alert("Congratulations! Your information has been saved successfully.");
    window.location.reload();
  }

}




export default ContactUS;

{/* <div className="abc" id="abcd" ><img src={location} alt="" />
          <a className="location" href="https://www.google.com/maps/dir/29.5070878,75.0449986/WRV9%2BW46+Gol+Canteen+(SAE+NITKKR),+NIT,+Thanesar,+Haryana+136119/@29.7293325,74.8076003,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390e3f5100000001:0x7f8e5219d122c23e!2m2!1d76.8178281!2d29.9447794">  <div className="tt"> Gol,NIT Kurukshetra</div></a>
      </div>
      <div className="abc"> <img src={mail} alt="" />  <div className="tt"> saenitkurukshetra@gmail.com</div></div>
      <br /><br />
      <div className="abc"> <img src={nx} alt="" />  <div className="tt"> teamnitrox@gmail.com</div></div>
      <br /><br />
      <div className="abc"> <img src={ac} alt="" /> <div className="tt"> teamaccelerons@gmail.com</div></div>
</div>

<div className="container">
      <br />
      <div className="field">Name: <div className="input"><input type="text" alt="Name"  /></div></div>
      <div className="field">Email:<div className="input"> <input type="email" name="email" id="" /></div></div>
      <div className="field">Mobile No.: <div className="input"><input type="number" name="" id="" /></div></div>
      <div className="field">Institute: <div className="input"><input type="text" name="" id="" /></div></div>
      <div className="field">Message: <div className="input"><input type="text" name="" id="" /></div></div>
      <div className="field">Reason to contact us:<div className="input"> <select name="--slect any one--" id="s1">
          <option value="option">Want to write a blog</option>
          <option value="option">Sponsership</option>
          <option value="option">Brand Ambassador</option>
          <option value="option">Fault in content on Website</option>
      </select></div></div>
      <div className="field">Person contacting us is: <div className="input"><select name="--select any one--" id="s2">
          <option value="option">Club Alumni</option>
          <option value="option">Company Representative</option>
          <option value="option">Student</option>
          <option value="option">Proffesor</option>
      </select></div></div>
      <div className="button"><button>Submit </button></div> */}