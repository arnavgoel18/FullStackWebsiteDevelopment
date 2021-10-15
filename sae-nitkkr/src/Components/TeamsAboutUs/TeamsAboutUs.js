import React from 'react'
import accleronspic from '../../Assets/TeamAboutUs/Accelrons.JPG'
import nitroxpic from '../../Assets/TeamAboutUs/Nitrox.jpg'
import './TeamsAboutUs.css'

function Acc(props) {

  var teamName, content, contentLine2;
  var comp1, comp2, picture;

  if(props.page === "Nitrox"){
    teamName = "NITROX";
    content = "TEAM NITROX is a group of junkies with a shared objective to create a fierce beast of an ATV (All-terrain vehicle). The team was founded back in 2010 under SAE NIT KURUKSHETRA. Since its foundation, the team has grown in all aspects, be its technical or competitive. From one of the few teams that design its own CVT to representing the country in BAJA SAE Illinois, the team has repeatedly provided evidence of its exceptional growth.";
    contentLine2 = "Till date, NITROX's ATV has shown its grip in the following competitions:";
    comp1 = "ATVC";
    comp2 = "BAJA";
    picture = nitroxpic;
  }
  else if(props.page === "Accelerons"){
    teamName = "ACCELERONS";
    content = "TEAM ACCELERONS is a student-led engineering team of SAE NIT Kurukshetra. The feeling of speed and precision, the tactical aspects, the way car looks, the way it behaves, that first lap excitement and the intrigues that surround it, are the things that drives the team to DESIGN, BUILD and RACE formula-style cars for the Formula Bharat and SUPRA competitions. From being a first-timer in SUPRA 2014 to standing on top among all NITS in SUPRA 2018, the Team has come a long way, upgrading itself with each passing season.. After all Felipe Massa rightly said, \"When you give up your hunger for success you are not racing full heartedly anymore.\"";
    contentLine2 = "Till date, ACCELRONS's F4 has shown its grip in the following competitions:";
    comp1 = "SUPRA";
    comp2 = "FORMULA BHARAT";
    picture = accleronspic;
  }


  return (
    <div className="TeamAboutUs-main_container">
      <div className="TeamAboutUs-heading">
         <h2 className="TeamAboutUs-weare"> we </h2>
         <h2 className="TeamAboutUs-weare"> are</h2>
         <h2 className="TeamAboutUs-boldcolor">{teamName}</h2>
      </div>
    <div className="TeamAboutUs-text_container">
      <div className="TeamAboutUs-text">{content}</div>
    </div>
    
    <div className="TeamAboutUs-bigcontainer">
      <div className="TeamAboutUs-lowertext">
        <div className="TeamAboutUs-text">{contentLine2}</div>
        <div className="TeamAboutUs-comp">
          {comp1} <br />
          {comp2}
        </div>
      </div>
      <div className="TeamAboutUs-image_container">
        <div className="TeamAboutUs-image">
          <img src={picture} alt="image" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Acc