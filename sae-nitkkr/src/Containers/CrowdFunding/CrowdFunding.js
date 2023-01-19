import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import FundingForm from '../../Components/CrowdFunding/FundingForm'
import FundingIntro from '../../Components/CrowdFunding/FundingIntro'
import WhatisSae from '../../Components/CrowdFunding/WhatisSae'

export default function CrowdFunding() {
  return (
    <>
    <NavBar/>
    <FundingIntro/>
    <WhatisSae/>
<FundingForm/>
<Footer/>
   
    </>
  )
}
