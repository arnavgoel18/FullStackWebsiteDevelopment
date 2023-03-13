import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import FundingForm from "../../Components/CrowdFunding/FundingForm";
import FundingIntro from "../../Components/CrowdFunding/FundingIntro";
// import WhatisSae from "../../Components/CrowdFunding/WhatisSae";
import ProgressBar from "../../Components/CrowdFunding/Progressbar";
import TeamAchievements from "../../Components/CrowdFunding/TeamAchievements";
import FundingTimeline from "../../Components/CrowdFunding/FundingTimeline";
import contri1 from "../../Assets/CrowdFunding/contri1.jpg";
import contri2 from "../../Assets/CrowdFunding/contri2.jpg";
import contri3 from "../../Assets/CrowdFunding/contri3.jpg";
import contri4 from "../../Assets/CrowdFunding/contri4.jpg";
// import Testimonial_crowds from "../../Components/CrowdFunding/Testimonials_crowd";
import Testimonials from "../../Components/CrowdFunding/Testimonials";


//Firebase
import db from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";

export default function CrowdFunding() {
  var [tester, setTester] = useState(true);
  var [completed, setCompleted] = useState(0);
  let [amount, setamount] = useState(0);
  let [netAmount, setNewAmount] = useState(0);

  useEffect(() => {
    getProgressBarInfo();
  }, []);

  async function getProgressBarInfo() {
    const docRef = doc(db, "FundingForm", "progressBar");
    const docSnap = await getDoc(docRef);
    const progressBar = docSnap.data();
    //console.log(progressBar.timestamp)
    setamount(progressBar.collectedAmount);
    setNewAmount(progressBar.requiredAmount);
    var temp =
      ((progressBar.requiredAmount - progressBar.collectedAmount) /
        progressBar.requiredAmount) *
      100;
    setCompleted(100 - temp);
  }

  if (tester === true) {
    window.addEventListener("load", getProgressBarInfo());
    setTester(false);
  }

  return (
    <>
      <NavBar />
      <FundingIntro netAmount={netAmount} amountReceived={amount} />
      <ProgressBar
        bgcolor="#32ffff"
        completed={completed}
        amountReceived={amount}
      />
      <FundingTimeline amount={amount} />
      {/* <WhatisSae /> */}
      <TeamAchievements />
      {/* <Testimonial_crowds/> */}
      <Testimonials
        testimonials={[
          {
            name: "Hardik Sachdeva",
            profileImage: contri1,
            content:
              "SAE NIT Kurukshetra has always proved themselves by bringing laurels to the institute. All the best to the team for their future endeavours.",
          },
          {
            name: "Arzaw Tiwari",
            profileImage: contri2,
            content:
              "When the pandemic hit us, SAE was impacted just like any other college group and probably more than that because it was not just software for them.Butnevertheless they came back with a bang against all odds. Now, it's time for us as a college and as a community to step up and help them out with our contributions to strengthen the very technical foundation of SAE. And for my juniors out there in SAE, I am dead sure you'll make us proud again with your name on numerous trophies",
          },
          {
            name: "Prathamesh Apte",
            profileImage: contri3,
            content:
              "There will always be huge obstacles in your way when you are willing to follow your passion. The only solution is to put in the hard work consistently and work as a team. Always aiming to achieve more than anyone has ever imagined. I wish SAE NIT KK all the success in their future endeavours.Keep up the good work!",
          },
          {
            name: "Rajat Singla",
            profileImage: contri4,
            content:
              "I have always been inspired by the efforts put by the members of SAE NIT Kurukshetra. I have seen my friends burning midnight oil to learn about and then run ATVs. I am happy that the legacy still lives on. All the best to SAE NIT Kurukshetra!",
          },
        ]}
      />
      <br />
      <br />
      <FundingForm />
      <Footer />
    </>
  );
}
