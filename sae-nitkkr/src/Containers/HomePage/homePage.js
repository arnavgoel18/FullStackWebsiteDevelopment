import React from 'react';
import { useEffect,useState } from 'react';

import NavBar from '../../Components/NavBar/NavBar'
import FirstDisplayDIV from '../../Components/FirstDisplayDIV/FirstDisplayDIV';
import AboutUs from '../../Components/AboutUs/AboutUs';
import TeamsDIV from '../../Containers/HomePage/TeamsDIV/Teamdiv';
// import ExploreUs from '../../Containers/HomePage/ExploreUs/ExploreUs';
// import ProfIncharges from '../../Containers/HomePage/ProfInchargesAndManagers/ProfIncharges';
import Managers from '../../Containers/HomePage/ProfInchargesAndManagers/Managers';
import Footer from '../../Components/Footer/Footer';
// import AutokritiEvent from '../../Components/AutokritiEvent/AutokritiEvent'
import Autokriti12 from '../Autokriti/Autokriti12Card/AutokritiCard'
// import ProgressBar from '../../Components/Loader/Progressbar';
import FundingIntro from '../../Components/CrowdFunding/FundingIntro';

//Firebase
import db from "../../Firebase";
import {
  doc,
  getDoc,
} from "firebase/firestore";


function HomePage() {

    let [amount, setamount] = useState(0)
    let [netAmount, setNewAmount] = useState(0)
    useEffect(() => {
        window.scrollTo(0, 0)
        getProgressBarInfo()
    }, [])
    async function getProgressBarInfo() {
          const docRef = doc(db, 'FundingForm', 'progressBar')
          const docSnap = await getDoc(docRef)
          const progressBar = docSnap.data();
          setamount(progressBar.collectedAmount)
          setNewAmount(progressBar.requiredAmount)
        }
    return (
      <>
        <NavBar />
        <FirstDisplayDIV page='Home' />
        <AboutUs page='Home' />
        <TeamsDIV />

        <br />
        <br />
        {/* <Autokriti12 /> */}
        {/* <ExploreUs /> */}
        {/* <FundingIntro netAmount={netAmount} amountReceived={amount} /> */}
        <Managers />
        <Footer />
      </>
    )
}

export default HomePage;