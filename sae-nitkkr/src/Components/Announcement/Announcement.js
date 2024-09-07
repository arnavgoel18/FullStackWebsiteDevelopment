import React from 'react'
import './Announcement.css'
// import {useNavigate} from 'react-router-dom'


import Marquee from 'react-fast-marquee'
const Announcement = () => {
//   const navigate = useNavigate();
//   const navigateToContact = () => {
//   navigate("/");
//   setTimeout(() => {
//    const contactSection = document.getElementById("contact");
//    if (contactSection) {
//      contactSection.scrollIntoView({ behavior: "smooth" });
//    }
//  }, 100);
  const handleclick=()=>{
    window.location = `/autokriti/register`
  }
  return (


    
    <div className='announcement' onClick={handleclick}>

        <Marquee speed={100} gradient={false} pauseOnHover direction='right'>
        <div className="announcement-text text1">

            <span>Welcome to SAE NIT KURUKSHETRA !   </span>
              <span>Autokriti 14.0 Registration Started !!</span> 
            <span>10% off on Registration upto 20 September</span>
            <span></span>
        </div>
        <div className="announcemnt-text text2">
            {/* <span>  <a href="/autokriti#ambassador">Click here </a> to register as Campus Ambassador. </span> */}
            {/* <button onClick={navigateToContact}>Click here to register</button> */}
        </div>
        </Marquee>
    </div>
  )
}

export default Announcement
