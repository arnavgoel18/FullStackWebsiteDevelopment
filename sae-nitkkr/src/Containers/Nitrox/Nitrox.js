import React from "react";
import { useEffect } from "react";
import "../HomePage/ProfInchargesAndManagers/pm.css";
import PersonCard from "../HomePage/ProfInchargesAndManagers/PersonCard";
import "../HomePage/ProfInchargesAndManagers/ProfInchargesAndManagers.css";
import manager1 from "../../Assets/ProfIncharges/Aryan Kushan.jpg";
import manager2 from "../../Assets/ProfIncharges/Aryan Sharma.jpeg";
import manager3 from "../../Assets/ProfIncharges/sugam.jpg";
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
            name={"Aryan Kushan"}
            designation={"Captain"}
            page={"manager"}
            url={manager1}
            linkedin={"https://www.linkedin.com/in/aryan-kushan-048415250"}
            email={"mailto:kushan8nov@gmail.com"}
          />
          <PersonCard
            name={"Aryan Sharma"}
            designation={"Vice-Captain"}
            page={"manager"}
            url={manager2}
            linkedin={"https://www.linkedin.com/in/aryan-sharma-950684229"}
            email={"mailto:sharmaaryanjmu@gmail.com"}
          />
          <PersonCard
            name={"Sugam Tripathi"}
            designation={"EV-Head"}
            page={"manager"}
            url={manager3}
            linkedin={"https://www.linkedin.com/in/sugam-tripathi-6aa67b226/"}
            email={"mailto:12114020@nitkkr.ac.in"}
          />
        </div>
      </div>
      <Footer type="white" />
    </>
  );
}

export default Nitrox;
