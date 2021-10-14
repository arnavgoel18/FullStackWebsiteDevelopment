import React from 'react'
import accimg from '../../Assets/TeamAboutUs/Accelrons.JPG'
import './TeamsAboutUs.css'

function Acc() {
  return (
    <div className="TeamAboutUs_main_main">
    <div className="TeamAboutUs-main_container">
      <div className="TeamAboutUs-heading">
         <h2 className="TeamAboutUs-weare"> we </h2>
         <h2 className="TeamAboutUs-weare"> are</h2>
         <h2 className="TeamAboutUs-boldcolor">ACCELERONS</h2>
      </div>
      <div className="TeamAboutUs-text_container">
       <div className="TeamAboutUs-text">TEAM ACCELERONS is a student-led engineering team of SAE NIT Kurukshetra. The feeling of speed and precision, the tactical aspects, the way car looks, the way it behaves, that first lap excitement and the intrigues that surround it, are the things that drives the team to DESIGN, BUILD and RACE formula-style cars for the Formula Bharat and SUPRA competitions.

        From being a first-timer in SUPRA 2014 to standing on top among all NITS in SUPRA 2018, the Team has come a long way, upgrading itself with each passing season.. After all Felipe Massa rightly said, "When you give up your hunger for success you are not racing full heartedly anymore.
        </div>
      </div>
   
      <div className="TeamAboutUs-bigcontainer">
        <div className="TeamAboutUs-lowertext">
          <div className="TeamAboutUs-text">Till date, ACCELRONS's F4 has shown its grip in the
            following competitions:
          </div>
          <div className="TeamAboutUs-comp">
            SUPRA <br />
            FORMULA BHARAT
          </div>
        </div>
        <div className="TeamAboutUs-image_container">
          <div className="TeamAboutUs-image">
            <img src={accimg} alt="image" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Acc