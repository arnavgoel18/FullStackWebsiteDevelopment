import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import FundingForm from "../../Components/CrowdFunding/FundingForm";
import FundingIntro from "../../Components/CrowdFunding/FundingIntro";
import WhatisSae from "../../Components/CrowdFunding/WhatisSae";
import ProgressBar from "../../Components/CrowdFunding/Progressbar";

export default function CrowdFunding() {
  return (
    <>
      <NavBar />
      <FundingIntro />
      <ProgressBar
        bgcolor= "#32ffff"
        completed="30"
      />
      <WhatisSae />
      <FundingForm />
      <Footer />
    </>
  );
}
