import React from 'react'
import Image from '../../Assets/CrowdFunding/Image.png'
import Car from "../../Assets/CrowdFunding/car.png";
import "./WhatisSae.css"

function WhatisSae() {
  return (
    
<div className="cf_about">
        <div className="cf_aboutHead">What is SAE?</div>
        <div className="cf_aboutContainer">
          <div className="cf_aboutText">
          SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions We bring our skills to many competitions
Baja SAE India <br/>
ATVC<br/>
SUPRA India<br/>
Formula Bharat<br/>
Read More<br/>
          </div>
          <div className="cf_aboutImg">
   <img src={Car} alt="SAE cars" />
          </div>
        </div>
      </div>
  )
}

export default WhatisSae;


