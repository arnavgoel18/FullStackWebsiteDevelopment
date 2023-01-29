import React from "react";
import {useState} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import FundingForm from "../../Components/CrowdFunding/FundingForm";
import FundingIntro from "../../Components/CrowdFunding/FundingIntro";
import WhatisSae from "../../Components/CrowdFunding/WhatisSae";
import ProgressBar from "../../Components/CrowdFunding/Progressbar";

//Firebase
import db from "../../Firebase";
import {
  doc,
  getDoc,
} from "firebase/firestore";

export default function CrowdFunding() {
  var [tester, setTester] = useState(true);
  var [completed, setCompleted] = useState(0);

  async function getProgressBarInfo() {
    const docRef = doc(db, "FundingForm", "progressBar");
    const docSnap = await getDoc(docRef);
    const progressBar = docSnap.data();
    var temp = ((progressBar.requiredAmount - progressBar.collectedAmount)/progressBar.requiredAmount)*100;
    setCompleted(100-temp);
  }

  if (tester == true) {
    window.addEventListener("load", getProgressBarInfo());
    setTester(false);
  }

  return (
    <>
      <NavBar />
      <FundingIntro />
      <ProgressBar
        bgcolor= "#32ffff"
        completed={completed}
      />
      <WhatisSae />
      <FundingForm />
      <Footer />
    </>
  );
}
