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
import contri1 from "../../Assets/CrowdFunding/hardik_sachdeva.jpg";
import contri2 from "../../Assets/CrowdFunding/arwaz.png";
import contri3 from "../../Assets/CrowdFunding/Prathamesh_Apte.jpg";
import contri4 from "../../Assets/CrowdFunding/Rajat_Singla.jpg";
import contri5 from "../../Assets/CrowdFunding/rushikesh_bhujbal.jpeg"
import contri6 from "../../Assets/CrowdFunding/hitanshu_monga.jpeg"
import contri7 from "../../Assets/CrowdFunding/rahul_lamba.jpeg";
import contri8 from "../../Assets/CrowdFunding/sankalp.jpg";
import contri9 from "../../Assets/CrowdFunding/akshay_singh.jpeg";
import contri10 from "../../Assets/CrowdFunding/mohit_mahajan.jpeg";
import contri11 from "../../Assets/CrowdFunding/jodhjeet_singh.jpeg";
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
            name: "Rahul Lamba",
            profileImage: contri7,
            content:
              "I'm thrilled to have had the chance to give back to the place where I and many of my dear friends learned so much during our formative years. The priceless skills of courage, hard work, and not getting bogged down by failures helped me a lot to work in a startup and eventually Co-found one. I'm grateful for the lessons I learned and wish the team all the best in their future endeavours. Keep up the good work!",
          },
          {
            name: "Sankalp Arora",
            profileImage: contri8,
            content:
              "The dedication and hard work that SAE has been putting in is truly inspiring. It is no wonder that SAE has made a name for itself in national and international competitions. Despite the challenges posed by the pandemic, it is heartening to see that team has been working tirelessly to bring it all together, raising the bar. I urge everyone to contribute towards the crowdfunding for the projects, for every little bit counts. I am sure that with this passion and dedication, you will achieve even greater glory. So yeah! Keep up the excellent work, and continue to uphold the institute's name with pride.",
          },
          {
            name: "Mohit Mahajan",
            profileImage: contri10,
            content:
              "This is the second time I am supporting the SAE team at my alma mater. Have been super impressed with how innovative, focused and disciplined the team had been last tome around and how good the final product turned out to be. Hoping for a similar magic from the current students this time too. Go team and rock the competition. Will be cheering for your success from afar.",
          },
          {
            name: "Jodhjeet Singh",
            profileImage: contri11,
            content:
              "SAE Club, NIT Kurukshetra brings young minds together to design and create things using cutting edge technology. Being a part of this club has helped me a lot in shaping my career. I wish the whole club my best to achieve greater heights in all endeavours",
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
          {
            name: "Rushikesh Bhujbal",
            profileImage: contri5,
            content:
              "SAE is one of the few platforms that tests the technical and managerial skills of the young engineering minds through fierce competitions. SAE NIT KKR has always strived to achieve new heights and build upon a decade-long history. I am certain the new members will also achieve great milestones. All the best for your future endeavours.",
          },
          {
            name: "Hitanshu Monga",
            profileImage: contri6,
            content:
              "‘It’s encouraging to see the rigour, passion and commitment in members of SAE collegiate club. I will them all the best for theirs endeavours’.",
          },
          {
            name: "Akshay Singh",
            profileImage: contri9,
            content:
              "I wish the entire SAE Team - All The Best. May you guys make NIT Kurukshetra proud.",
          },
          {
            name: "Hardik Sachdeva",
            profileImage: contri1,
            content:
              "SAE NIT Kurukshetra has always proved themselves by bringing laurels to the institute. All the best to the team for their future endeavours.",
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
