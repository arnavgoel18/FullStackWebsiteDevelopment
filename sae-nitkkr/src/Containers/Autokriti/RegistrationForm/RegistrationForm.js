
import user from '../../../Assets/RegistrationFormImages/user.jpg';
import name from '../../../Assets/RegistrationFormImages/name.jpg';
import semester from '../../../Assets/RegistrationFormImages/semesterr.jpg';
import hat from '../../../Assets/RegistrationFormImages/hat.png';
import mail from '../../../Assets/RegistrationFormImages/mail.jpg';
import phone from '../../../Assets/RegistrationFormImages/phone.jpg';

import './RegistrationForm.css';

function RegistrationForm() {
  return (
    <div className="reg-center">
      <img id="user" src={user} alt="" />
      <h1 id="center">SIGN UP FOR QUIZ</h1>
      <form action="" className="txt-area">
        <div id="name1">
            <div id="reg_image_name">
          <img id="name" src={name} alt="" />
          </div>
          <div id="red_title_name">
          <input id="one" type="text" placeholder="Name" />
          </div>
        </div>
        <div id="hat1">
        <div id="reg_image_hat">
            <img id="hat" src={hat} alt="" />
            </div>
            <div id="red_title_college">
          <input id="two" type="text" placeholder="College" />
          </div>
        </div>
        <br />
        <div id="sem1">
        <div id="reg_image_semester">
          <img id="semesterr" src={semester} alt="" />
          </div>
          <div id="red_title_semester">
          <input id="three" type="number" placeholder="Semester" />
          </div>
        </div>
        <br />
        <div id="mail1">
        <div id="reg_image_semester">
          <img id="mail" src={mail} alt="" />
          </div>
          <div id="red_title_mail">
          <input id="four" type="text" placeholder="Mail" />
          </div>
        </div>
        <div id="phone1">
        <div id="reg_image_phone">
          <img id="phone" src={phone} alt="" />
          </div>
          <div id="red_title_phone">
          <input id="five" type="number" placeholder="Phone Number" />
          </div>
        </div>

        <button id="submit">Submit</button>
      </form>

    </div>
  );
}

export default RegistrationForm;
