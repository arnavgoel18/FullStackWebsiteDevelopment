import React from "react";
import { useEffect } from "react";
import "../HomePage/ProfInchargesAndManagers/pm.css";
import PersonCard from "../HomePage/ProfInchargesAndManagers/PersonCard";
import "../HomePage/ProfInchargesAndManagers/ProfInchargesAndManagers.css";
import manager1 from "../../Assets/ProfIncharges/VicePre.jpg";
import manager2 from "../../Assets/ProfIncharges/Anmoll.jpg";
import manager3 from "../../Assets/ProfIncharges/Parn.jpg";
import NavBar from "../../Components/NavBar/NavBar";
import FirstDisplayDiv from "../../Components/FirstDisplayDIV/FirstDisplayDIV";
import TeamsAboutUs from "../../Components/TeamsAboutUs/TeamsAboutUs";
import WhereDoWeParticipate from "../../Components/WhereWeParticipate/Wheredoweparticipate(nitrox)/Wherenitrox";
import Gallery from "../../Components/Gallery/NitroxGallery/Gallery";
import Saga from "../../Components/Saga/NitroxSaga";
import Footer from "../../Components/Footer/Footer";

function Nitrox() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <FirstDisplayDiv page="Nitrox" />
      <TeamsAboutUs page="Nitrox" />
      <WhereDoWeParticipate />
      {/* <Saga/> */}

      <Gallery />
      <div className="ProfInchargesandManagers-managers_container">
        <p className="ProfInchargesandManagers-Managers-Heading">
          Team Managers
        </p>

        <div className="ProfInchargesandManagers-persons_container">
          <PersonCard
            name={"Himanshu Khatri"}
            designation={"Captain"}
            page={"manager"}
            url={manager1}
            linkedin={"https://www.linkedin.com/in/hk2107/"}
            email={"mailto:hkhatri2107@gmail.com"}
          />
          <PersonCard
            name={"Anmol"}
            designation={"Vice-Captain"}
            page={"manager"}
            url={manager2}
            linkedin={"https://www.linkedin.com/in/anmol-chaudhary-278a22225/"}
            email={"mailto:anmolchaudhary854@gmail.com "}
          />
          <PersonCard
            name={"Parv Sarin"}
            designation={"EV-Head"}
            page={"manager"}
            url={manager3}
            linkedin={"https://www.linkedin.com/in/parv-sarin"}
            email={"mailto:Parvsarin01@gmail.com"}
          />
        </div>
      </div>
      <Footer type="white" />
    </>
  );
}

export default Nitrox;
