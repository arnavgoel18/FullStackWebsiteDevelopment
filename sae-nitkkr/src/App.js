import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './Containers/HomePage/homePage'
import Autokriti from "./Containers/Autokriti/Autokriti";
import Accelerons from "./Containers/Accelerons/Accelerons";
import Nitrox from "./Containers/Nitrox/Nitrox"
import ContactUS from "./Containers/ContactUs/contactus";
import Sponsors from "./Containers/Sponsors/Sponsors";
import Blogs from './Containers/Blogs/Blogs'
import Topic1 from './Containers/Blogs/Topic1/Topic1'
import Topic2 from './Containers/Blogs/Topic2/Topic2'
import Ambassador from "./Containers/Ambassador/Ambassador";
import Login from "./Containers/Backend/Login";
import AfterLoginPage from "./Containers/Backend/AfterLogin/AfterLoginPage"
import DisplayInfo from "./Containers/Backend/DisplayInfo/DisplayInfo";
import DisplayBlogs from "./Containers/Backend/DisplayBlogs/AllBlogsPage"
import QuillEditor from "./Containers/Backend/DisplayBlogs/QuillEditor/Add"

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
          <Route path="/blogs" exact component={() => <Blogs/>}/>
          <Route path="/blogs/leftvsright" exact component={() => <Topic1/>}/>
          <Route path="/blogs/guidetovd" exact component={() => <Topic2/>}/>
          <Route path="/ambassador" exact component={() => <Ambassador/>}/>
          <Route path="/admin/login" exact component={() => <Login/>}/>
          <Route path="/admin/afterLogin" exact component={() => <AfterLoginPage/>}/>
          <Route path="/admin/displayInfo" exact component={() => <DisplayInfo/>}/>
          <Route path="/admin/displayBlogs" exact component={() => <DisplayBlogs/>}/>
          <Route path="/admin/displayBlogs/editor" exact component={() => <QuillEditor/>}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
