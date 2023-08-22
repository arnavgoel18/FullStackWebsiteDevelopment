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
  return (


    
    <div className='announcement'>

        <Marquee speed={100} gradient={false} pauseOnHover direction='right'>
        <div className="announcement-text text1">

            <span>Welcome to SAE NIT KURUKSHETRA !   </span>
              <span>Autokriti 13.0 coming soon !!</span> 
            <span>HURRY UP ! Campus ambassador registrations  are open !</span>
            <span></span>
        </div>

        <div className="announcemnt-text text2">
            
            <span>  <a href="/autokriti#ambassador">Click here </a> to register as Campus Ambassador. </span>
            {/* <button onClick={navigateToContact}>Click here to register</button> */}

        </div>
        </Marquee>
    </div>
  )
}

export default Announcement
