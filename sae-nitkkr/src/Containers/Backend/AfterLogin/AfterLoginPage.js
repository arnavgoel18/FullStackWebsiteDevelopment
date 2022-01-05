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

          {/* <i className="fa fa-user fa-lg" aria-hidden="true"></i> */}
          <button
            id="action-signout"
            onClick={(e) => {
              localStorage.removeItem("token");
              window.location.href = "/admin/login";
            }}
          >
            Sign Out
          </button>
        </div>

        <div className="allCards">
          <Link to="/admin/displayBlogs">
            <AfterLoginCard name="Website Blogs" id="yellow" />
          </Link>
          <Link to="/admin/ambassadorInfo">
            <AfterLoginCard name="Ambassador Response" id="orange" />
          </Link>
          <Link to="/admin/contactUsInfo">
            <AfterLoginCard name="Contact Us responses" id="orange" />
          </Link>
          <Link to="admin/signUpSheet">
            <AfterLoginCard name="SignUp Details" id="yellow" />
          </Link>
          <Link to="admin/quizResponses">
            <AfterLoginCard name="Quiz Responses Recorded" id="yellow" />
          </Link>
<<<<<<< HEAD
=======
          <AfterLoginCard
            name="SignUp Details"
            id="yellow"
            />
          <AfterLoginCard
            name="Quiz"
            id="yellow"
            />
>>>>>>> 36094c550936fa89142dc1b0fbf05e1a4d5f52e7
        </div>
      </div>
    );
  }
}
