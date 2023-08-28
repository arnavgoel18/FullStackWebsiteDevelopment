import React from "react";
import { useEffect } from "react";
import "../HomePage/ProfInchargesAndManagers/pm.css";
import PersonCard from "../HomePage/ProfInchargesAndManagers/PersonCard";
import "../HomePage/ProfInchargesAndManagers/ProfInchargesAndManagers.css";
import manager1 from "../../Assets/ProfIncharges/Yasharora.jpg";
import manager2 from "../../Assets/ProfIncharges/Bhupeksh.jpg";
import manager3 from "../../Assets/ProfIncharges/man.png";

import NavBar from "../../Components/NavBar/NavBar";
import FirstDisplayDiv from "../../Components/FirstDisplayDIV/FirstDisplayDIV";
import TeamsAboutUs from "../../Components/TeamsAboutUs/TeamsAboutUs";
import WhereDoWeParticipate from "../../Components/WhereWeParticipate/Wheredoweparticipate(accelerons)/Whereacclerons";
import Gallery from "../../Components/Gallery/AcceleronsGallery/Gallery";
import Saga from "../../Components/Saga/AcceleronsSaga";
import Footer from "../../Components/Footer/Footer";

function Accelerons() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <FirstDisplayDiv page="Accelerons" />
      <TeamsAboutUs page="Accelerons" />
      <WhereDoWeParticipate />
      {/* <Saga/> */}
      <Gallery />
      <div className="ProfInchargesandManagers-managers_container">
        <p className="ProfInchargesandManagers-Managers-Heading">
          Team Managers
        </p>

        <div className="ProfInchargesandManagers-persons_container">
          <PersonCard
            name={"Yash Arora"}
            designation={"Captain"}
            page={"manager"}
            url={manager1}
            linkedin={"blamk"}
            email={"mailto:yasharora1808@gmail.com"}
          />
          <PersonCard
            name={"Bhupeksh"}
            designation={"Vice-Captain"}
            page={"manager"}
            url={manager2}
            linkedin={"https://www.linkedin.com/in/bhupeksh-kaushik-360424222"}
            email={"mailto:kaushikbhupeksh@gmail.com "}
          />
          <PersonCard
            name={"Manikya"}
            designation={"EV-Head"}
            page={"manager"}
            url={manager3}
            linkedin={"Linkedin.com/in/Na"}
            email={"mailto:NA@gmail.com"}
          />
        </div>
      </div>
      <Footer type="white" />
    </>
  );
}

export default Accelerons;
