import React from "react";
import "./AfterLoginPage.css";
import AfterLoginCard from "./AfterLoginCard";
import { Link } from "react-router-dom";

export default function AfterLoginPage() {

  function redirect(){
    window.alert("Logged Out!");
    window.location.href="https://www.saenitkurukshetra.in/admin/login";
  }

  return (
    <div>
      <div className="LoginPage-header">
        <i className="fa fa-user fa-lg" aria-hidden="true"></i>
        <button type="submit" onClick={redirect}>Sign Out</button>
      </div>
      <div className="allCards">
        <Link to="/admin/displayBlogs">
          <AfterLoginCard
            name="Website Blogs"
            id="yellow"
          />
        </Link>
        
        <Link to="/admin/ambassadorInfo">
          <AfterLoginCard
            name="Ambassador Response"
            id="orange"
          />
        </Link>
        
        <Link to="/admin/contactUsInfo">
          <AfterLoginCard
            name="Contact Us responses"
            id="orange"
          />
        </Link>
        
        <Link to="/admin/signUpSheet">
          <AfterLoginCard
            name="SignUp Details"
            id="yellow"
          />
        </Link>
        
        <Link to="/admin/quizResponses">
          <AfterLoginCard
            name="Quiz Responses Recorded"
            id="yellow"
          />
          </Link>
      </div>
    </div>
  );
}
