import React from "react";
import "./AfterLoginPage.css";
import AfterLoginCard from "./AfterLoginCard";
import { Link, Redirect } from "react-router-dom";

export default function AfterLoginPage() {
  const token = localStorage.getItem("token");

  let loggedin = true;
  if (token == null) {
    loggedin = false;
  }

  if (loggedin == false) {
    return <Redirect to="/admin/login" />;
  } else {
    return (
      <div>
        <div className="LoginPage-header">
          <Link to="/admin/actions">
            <button id="AfterLogin-backBtn">Back</button>
          </Link>

          <div
            id="action-signout"
            onClick={(e) => {
              localStorage.removeItem("token");
              window.location.href = "/admin/login";
            }}
          >
            Sign Out
          </div>
        </div>

        <div className="allCards">
          <Link to="/admin/displayBlogs">
            <div className="iconimagediv">
            
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-blog-digital-marketing-flatart-icons-outline-flatarticons-1.png"className="iconimage"/>
              
            </div>
            <AfterLoginCard
              name="Website Blogs"
              id="yellow"
             
            />
          </Link>
          <Link to="/admin/ambassadorInfo">
          <div className="iconimagediv">
            
          <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-announcement-news-kiranshastry-lineal-kiranshastry-2.png"className="iconimage"/>
            
          </div>
            <AfterLoginCard name="Ambassador Response" id="orange" />
          </Link>
          <Link to="/admin/contactUsInfo">
          <div className="iconimagediv">
          <img src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-contact-us-contact-and-message-itim2101-lineal-itim2101-1.png"className="iconimage"/>
          </div>
            <AfterLoginCard name="Contact Us responses" id="yellow" />
          </Link>
          <Link to="/admin/signUpSheet">
          <div className="iconimagediv">
            
          <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-sign-up-call-to-action-bearicons-glyph-bearicons.png" className="iconimage"/>
            
          </div>
            <AfterLoginCard name="SignUp Details" id="orange" />
          </Link>
          <Link to="/admin/quizResponses">
          <div className="iconimagediv">
            
          <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-quiz-online-learning-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" className="iconimage"/>
            
          </div>
            <AfterLoginCard name="Quiz Responses Recorded" id="yellow" />
          </Link>
          <Link to="/admin/finalAmbassador">
          <div className="iconimagediv">
            
          <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-announcement-news-kiranshastry-lineal-kiranshastry-2.png"className="iconimage"/>
           
          </div>
            <AfterLoginCard name="Selected Ambassadors" id="orange" />
          </Link>
          <Link to="/admin/collegeRepresentatives">
          <div className="iconimagediv">
            
          <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-announcement-news-kiranshastry-lineal-kiranshastry-2.png"className="iconimage"/>
           
          </div>
            <AfterLoginCard name="College Reps" id="yellow" />
          </Link>

        </div>
      </div>
    );
  }
}
