import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './Containers/HomePage/homePage'
import Autokriti from "./Containers/Autokriti/Autokriti";
import Accelerons from "./Containers/Accelerons/Accelerons";
import Nitrox from "./Containers/Nitrox/Nitrox"

import ContactUS from "./Containers/ContactUs/contactus";
import Sponsors from "./Containers/Sponsors/Sponsors";
import Ambassador from "./Containers/Ambassador/Ambassador";

import Blogs from './Containers/Blogs/Blogs'
import Topic1 from './Containers/Blogs/Topic1/Topic1'

import Login from "./Containers/Backend/Login";
import AdminActions from "./Containers/Backend/AfterLogin/AfterLoginPage"
import DisplayAmb from "./Containers/Backend/DisplayAmbassador/DisplayAmbassador"
import DisplayContact from './Containers/Backend/DisplayContact/DisplayContact'
import DisplaySignUpSheet from './Containers/Backend/DisplaySignUpSheet/DisplaySignUpSheet'
import DisplayQuizResponses from './Containers/Backend/DisplayQuizResponses/DisplayQuizResponses'

import DisplayBlogs from "./Containers/Backend/DisplayBlogs/AllBlogsPage"
import QuillEditor from "./Containers/Backend/DisplayBlogs/QuillEditor/Add"
//import RegistrationForm from "./Containers/Autokriti/RegistrationForm/RegistrationForm";
function App() {
  document.title = "SAE NIT Kurukshetra";
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/autokriti" exact component={() => <Autokriti />} />
          <Route path="/accelerons" exact component={() => <Accelerons />} />
          <Route path="/nitrox" exact component={() => <Nitrox />} />
          <Route path="/contactus" exact component={() => <ContactUS/>} />
          <Route path="/sponsors" exact component={() => <Sponsors/>}/>
          <Route path="/ambassador" exact component={() => <Ambassador/>}/>

          <Route path="/blogs" exact component={() => <Blogs/>}/>
          <Route path="/blogs/leftvsright" exact component={() => <Topic1/>}/>
          
          <Route path="/admin/login" exact component={() => <Login/>}/>
          <Route path="/admin/actions" exact component={() => <AdminActions/>}/>
          <Route path="/admin/ambassadorInfo" exact component={() => <DisplayAmb/>}/>
          <Route path="/admin/contactUsInfo" exact component={() => <DisplayContact/>}/>
          <Route path="admin/signUpSheet" exact component={() => <DisplaySignUpSheet/>}/>
          <Route path="admin/quizResponses" exact component={() => <DisplayQuizResponses/>}/>

          {/* <Route path="/registrationform" exact component={() => <RegistrationForm/>}/> */}

          <Route path="/admin/displayBlogs" exact component={() => <DisplayBlogs/>}/>
          <Route path="/admin/displayBlogs/editor" exact component={() => <QuillEditor/>}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
