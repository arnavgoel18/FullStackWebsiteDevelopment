import React from "react";
import { useEffect } from "react";
import "../HomePage/ProfInchargesAndManagers/pm.css";
import PersonCard from "../HomePage/ProfInchargesAndManagers/PersonCard";
import "../HomePage/ProfInchargesAndManagers/ProfInchargesAndManagers.css";
import manager1 from "../../Assets/ProfIncharges/Sachin.jpeg";
import manager2 from "../../Assets/ProfIncharges/yohannan.jpg";
import manager3 from "../../Assets/ProfIncharges/sugam.jpg";

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
            name={"Sachin Kumar"}
            designation={"Captain"}
            page={"manager"}
            url={manager1}
            linkedin={"https://www.linkedin.com/in/sachin-kumar-a827b7258/"}
            email={"mailto:sachinphalswal19@gmail.com"}
          />
          <PersonCard
            name={"Yohannan Jezaniah"}
            designation={"Vice-Captain"}
            page={"manager"}
            url={manager2}
            linkedin={"https://www.linkedin.com/in/yohannan-jezaniah-9436aa20b/"}
            email={"mailto:jezaniahyohannan@gmail.com"}
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

export default Accelerons;
