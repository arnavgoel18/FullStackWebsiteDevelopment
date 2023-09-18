import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./Containers/HomePage/homePage";
import Autokriti from "./Containers/Autokriti/Autokriti";
import Accelerons from "./Containers/Accelerons/Accelerons";
import Nitrox from "./Containers/Nitrox/Nitrox";
import ContactUS from "./Containers/ContactUs/contactus";
import Sponsors from "./Containers/Sponsors/Sponsors";

import Blogs from "./Containers/Blogs/Blogs";
import Topic1 from "./Containers/Blogs/Topic1/Topic1";

import AdminLogin from "./Containers/Backend/Login";
import AdminActions from "./Containers/Backend/AfterLogin/AfterLoginPage";

import DisplayBlogs from "./Containers/Backend/DisplayBlogs/AllBlogsPage";
// import DisplayPopups from "./Containers/Backend/DisplayPopUps/AllPopUpPage"
import QuillEditor from "./Containers/Backend/DisplayBlogs/QuillEditor/Add";

import DisplayAmb from "./Containers/Backend/DisplayAmbassador/DisplayAmbassador";
import DisplayCounter from "./Containers/Backend/DisplayCounterBackend/DisplayCounterBackend";
import DisplayEvent from "./Containers/Backend/DisplayEventBackend/DisplayEventBackend";
import DisplayContact from "./Containers/Backend/DisplayContact/DisplayContact";
import DisplayFinalAmbassador from "./Containers/Backend/DisplayFinalAmbassador/DisplayFinalAmbassador";
import DisplayClgRepresentatives from "./Containers/Backend/DisplayCollegeRepresentatives/DisplayClgRepresentatives";

import DisplaySignUpSheet from "./Containers/Backend/DisplaySignUpSheet/DisplaySignUpSheet";
import DisplayAllQuizes from "./Containers/Backend/DisplayAllQuizes/DisplayAllQuizes";

// import Autokriti2 from './Containers/Autokriti/Autokriti2/Autorkriti2';
import Autokriti12 from "./Containers/Autokriti/Autokriti12/Autorkriti12";
import Quizsignup from "./Components/AutokritiRegistration/AutokritiRegistration";
import ShowAmbassador from "./Containers/Autokriti/ShowAmbassador/ShowAmbassador";
import ShowAmbLogin from "./Containers/Autokriti/ShowAmbassador/ShowAmbLogin";
import Certificates from "./Containers/Autokriti/Certificates/Certificates.js";

import CheckState from "./Components/AutokritiEvent/Context/CheckState";
import Ambassador from "./Containers/Ambassador/Ambassador";
import SendEmail from "./Containers/Autokriti/RegistrationForm/RegistrationForm";

import CertiAdmin from "./Containers/Backend/CertiAdmin/CertiAdmin";
import CertiImage from "./Containers/Autokriti/Certificates/CertiImage";

import CAcerti from "./Containers/Ambassador/CAcerti/CAcerti";
import CAcertiImage from "./Containers/Ambassador/CAcerti/CAcertiImage";
import AfterRegistrationPage from "./Components/AutokritiRegistration/AfterRegistrationPage";
import Registered from "./Components/AutokritiRegistration/Registered";
import Certificate from "./Components/AutokritiRegistration/Certificate";
import RegistrationDetails from "./Components/AutokritiRegistration/RegistrationDetails";
import PrivacyPolicy from "./Components/Guidelines/privacypolicy";
import TermsAndConditions from "./Components/Guidelines/TermsAndConditions";
import RefundAndCancel from "./Components/Guidelines/refundandcancel";
import RegisteredCandidates from "./Components/Backend/RegisteredCandidates/RegisteredCandidates";

import Autokriti12CertiGetLink from "./Containers/Autokriti/Autokriti12Certificates/Autokriti12CertiGetLink";
import Autokriti12Certificate from "./Containers/Autokriti/Autokriti12Certificates/Autokriti12Certificate";

//import RegistrationForm from "./Containers/Autokriti/RegistrationForm/RegistrationForm";
import CrowdFunding from "./Containers/CrowdFunding/CrowdFunding";
import DisplayCrowdFunding from "./Components/Backend/DisplayCrowdFunding/DisplayCrowdFunding";
import Announcement from "./Components/Announcement/Announcement";

// imported merchandise component for linking
import { Merchandise } from "./Containers/Merchandise/Merchandise";

import Tshirt from "./Containers/Merchandise/Tshirt";
// imported cart component for linking from containers
import Cart from "./Containers/Cart/Cart";

import SecondaryPaymentPage from "./Containers/SecondaryPaymentPage/SecondaryPaymentPage";

function App() {
  document.title = "SAE NIT Kurukshetra";
  return (
    <>
      <Announcement />
      <CheckState>
        <Router>
          <Switch>
            {/* Frontend */}
            <Route path="/" exact component={() => <HomePage />} />
            <Route path="/autokriti" exact component={() => <Autokriti />} />
            <Route path="/ambassador" exact component={() => <Ambassador />} />
            <Route path="/accelerons" exact component={() => <Accelerons />} />
            <Route path="/nitrox" exact component={() => <Nitrox />} />
            <Route path="/sponsors" exact component={() => <Sponsors />} />
            <Route path="/contactus" exact component={() => <ContactUS />} />

            <Route path="/cart" exact component={() => <Cart />} />
            {/* todo: make merchandise card component under `product` component name - done
             * to be updated later with data - done (data in content.js)
             * include merchandise component on the top - done
             * update NavBar component to include merchandise option - done
             */}

            <Route
              path="/merchandise"
              exact
              component={() => <Merchandise />}
            />

            <Route
              path="/merchandise/tshirt"
              exact
              component={() => <Tshirt />}
            />

            <Route
              path="/makepayment"
              exact
              component={() => <SecondaryPaymentPage />}
            />
            <Route
              path="/register_confirmation/:id"
              exact
              component={() => <AfterRegistrationPage />}
            />
            <Route
              path="/registered/:id"
              exact
              component={() => <Registered />}
            />
            <Route
              path="/register/certificate/:id"
              exact
              component={() => <Certificate />}
            />
            <Route
              path="/register/registrationDetails"
              exact
              component={() => <RegistrationDetails />}
            />
            {/* Blogs */}
            <Route path="/blogs" exact component={() => <Blogs />} />
            <Route path="/blogs/yourblog" exact component={() => <Topic1 />} />

            {/* Backend */}
            <Route path="/admin/login" exact component={() => <AdminLogin />} />
            <Route
              path="/admin/actions"
              exact
              component={() => <AdminActions />}
            />

            <Route
              path="/admin/displayBlogs"
              exact
              component={() => <DisplayBlogs />}
            />
            {/* <Route path="/admin/displaypopups" exact component={() => <DisplayPopups/>}/> */}
            <Route
              path="/admin/displaycounterbackend"
              exact
              component={() => <DisplayCounter />}
            />
            <Route
              path="/admin/displayeventbackend"
              exact
              component={() => <DisplayEvent />}
            />
            <Route
              path="/admin/displayBlogs/editor"
              exact
              component={() => <QuillEditor />}
            />

            <Route
              path="/admin/ambassadorInfo"
              exact
              component={() => <DisplayAmb />}
            />
            <Route
              path="/admin/contactUsInfo"
              exact
              component={() => <DisplayContact />}
            />
            <Route
              path="/admin/finalAmbassador"
              exact
              component={() => <DisplayFinalAmbassador />}
            />
            <Route
              path="/admin/collegeRepresentatives"
              exact
              component={() => <DisplayClgRepresentatives />}
            />
            <Route
              path="/admin/signUpSheet"
              exact
              component={() => <DisplaySignUpSheet />}
            />
            <Route
              path="/admin/quizResponses"
              exact
              component={() => <DisplayAllQuizes />}
            />
            <Route
              path="/admin/registeredcandidates"
              exact
              component={() => <RegisteredCandidates />}
            />

            {/* e-Autokriti 2.0 */}
            {/* <Route path="/e-Autokriti2.0" exact component={()=><Autokriti2/>}/> */}
            <Route
              path="/Autokriti12"
              exact
              component={() => <Autokriti12 />}
            />
            <Route
              path="/autokriti/register"
              exact
              component={() => <Quizsignup />}
            />
            <Route
              path="/ShowAmbassador"
              exact
              component={() => <ShowAmbassador />}
            />
            <Route
              path="/Ambassador/login"
              exact
              component={() => <ShowAmbLogin />}
            />
            <Route
              path="/autokriti/certificates"
              exact
              component={() => <Certificates />}
            />

            {/* Not in Use */}
            <Route path="/sendEmail" exact component={() => <SendEmail />} />
            {/* <Route path="/test" exact component={()=><RegistrationForm/>}/> */}

            <Route
              path="/autokriti/certiAdmin"
              exact
              component={() => <CertiAdmin />}
            />
            <Route
              path="/autokriti/certificate"
              exact
              component={() => <CertiImage />}
            />
            <Route
              path="/privacypolicy"
              exact
              component={() => <PrivacyPolicy />}
            />
            <Route
              path="/termsandconditions"
              exact
              component={() => <TermsAndConditions />}
            />
            <Route
              path="/refundandcancelpolicy"
              exact
              component={() => <RefundAndCancel />}
            />

            <Route
              path="/crowdfunding"
              exact
              component={() => <CrowdFunding />}
            />
            <Route
              path="/admin/crowdfunding"
              exact
              component={() => <DisplayCrowdFunding />}
            />
            <Route
              path="/ambassador/cacerti"
              exact
              component={() => <CAcerti />}
            />
            <Route
              path="/ambassador/certificate"
              exact
              component={() => <CAcertiImage />}
            />

            <Route
              path="/autokriti12/certificates"
              exact
              component={() => <Autokriti12CertiGetLink />}
            />
            <Route
              path="/autokriti12/certificate"
              exact
              component={() => <Autokriti12Certificate />}
            />
          </Switch>
        </Router>
      </CheckState>
    </>
  );
}

export default App;
