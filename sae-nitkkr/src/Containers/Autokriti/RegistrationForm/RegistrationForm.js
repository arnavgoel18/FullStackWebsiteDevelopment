import user from '../../../Assets/RegistrationFormImages/user.jpg'
import name from '../../../Assets/RegistrationFormImages/name.jpg'
import semester from '../../../Assets/RegistrationFormImages/semesterr.jpg'
import hat from '../../../Assets/RegistrationFormImages/hat.png'
import mail from '../../../Assets/RegistrationFormImages/mail.jpg'
import phone from '../../../Assets/RegistrationFormImages/phone.jpg'

import db from '../../../Firebase'
import { collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore'
import { send, init } from 'emailjs-com'

import './RegistrationForm.css'

function RegistrationForm() {
  function submit() {
    var Name = document.getElementById('reg_name')
    var EmailId = document.getElementById('reg_mail')
    var Clg = document.getElementById('reg_college')
    var Sem = document.getElementById('reg_sem')
    var phone = document.getElementById('reg_pn')

    const contactUsData = {
      Name: Name.value,
      EmailId: EmailId.value,
      College: Clg.value,
      Semester: Sem.value,
      pno: phone.value,
    }

    validateForm(contactUsData)
  }
  function validateForm(contactUsData) {
    if (
      contactUsData.Name == '' ||
      contactUsData.EmailId == '' ||
      contactUsData.College == '' ||
      contactUsData.Semester == '' ||
      contactUsData.pno == ''
    ) {
      alert('Please fill up the required fields.')
    } else if (
      !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(contactUsData.EmailId)
    ) {
      alert('Please enter a valid email address.')
    } else {
      setInfo(contactUsData)
    }
  }

  async function setInfo(contactUsData) {
    document.getElementById('button').disabled = true
    document.getElementById('button').style.backgroundColor = 'gray'
    timestamp = String(new Date().getTime())

    //db
    await setDoc(doc(db, 'registration', timestamp), contactUsData)

    deletedata()
    // window.location.reload();
    sendEmail(contactUsData)
    alert('Congratulations! Your information has been saved successfully.')
    document.getElementById('button').disabled = false
    document.getElementById('button').style.backgroundColor = 'green'
  }
  function deletedata() {
    var Name = document.getElementById('reg_name')
    var EmailId = document.getElementById('reg_mail')
    var Clg = document.getElementById('reg_college')
    var Sem = document.getElementById('reg_sem')
    var Phone = document.getElementById('reg_pn')

    Name.value = null
    EmailId.value = null
    Clg.value = null
    Sem.value = null
    Phone.value = null
  }

  const sendEmail = (data) => {
    //console.log("enter")
    init('user_qet4RKd7C7UreliHN5dhq') //user id
    const toSend = {
      name: data.Name,
      sem: data.Semester,
      email: data.EmailId,
      clg: data.College,
      referenceId: timestamp,
      pno: data.Phone,
    }
    // console.log(toSend)
    //(serviceid,templateid,sendingdata)
    send('service_r8xht0n', 'template_eqh6a2c', toSend).then(
      (result) => {
        //console.log('exit')
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }
  // referenceId
  return (
    <div className='reg-center'>
      <img id='user' src={user} alt='' />
      <h1 id='center'>SIGN UP FOR QUIZ</h1>
      <form action='' className='txt-area'>
        <div id='name1'>
          <div id='reg_image_name'>
            <img id='name' src={name} alt='' />
          </div>
          <div id='red_title_name'>
            <input id='reg_name' type='text' placeholder='Name' />
          </div>
        </div>
        <div id='hat1'>
          <div id='reg_image_hat'>
            <img id='hat' src={hat} alt='' />
          </div>
          <div id='red_title_college'>
            <input id='reg_college' type='text' placeholder='College' />
          </div>
        </div>
        <br />
        <div id='sem1'>
          <div id='reg_image_semester'>
            <img id='semesterr' src={semester} alt='' />
          </div>
          <div id='red_title_semester'>
            <input id='reg_sem' type='number' placeholder='Semester' />
          </div>
        </div>
        <br />
        <div id='mail1'>
          <div id='reg_image_semester'>
            <img id='mail' src={mail} alt='' />
          </div>
          <div id='red_title_mail'>
            <input id='reg_mail' type='text' placeholder='Mail' />
          </div>
        </div>
        <div id='phone1'>
          <div id='reg_image_phone'>
            <img id='phone' src={phone} alt='' />
          </div>
          <div id='red_title_phone'>
            <input id='reg_pn' type='number' placeholder='Phone Number' />
          </div>
        </div>

        <button id='reg_button' onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
