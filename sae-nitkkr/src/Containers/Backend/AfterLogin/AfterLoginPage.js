import React from "react";
import "./AfterLoginPage.css";
import AfterLoginCard from "./AfterLoginCard";
import { Link } from "react-router-dom";

export default function AfterLoginPage() {
  return (
    <div>
      <div className="LoginPage-header">
        <i className="fa fa-user fa-lg" aria-hidden="true"></i>
        <button type="submit">Sign Out</button>
      </div>
      <div className="allCards">
      <Link to="/admin/displayBlogs">
      <AfterLoginCard
        name="Website Blogs"
        id="yellow"
      />
      </Link>
      <Link to="/admin/displayInfo">
      <AfterLoginCard
        name="Ambassador Response"
        id="orange"
      />
      </Link>
      <AfterLoginCard
        name="Contact Us responses"
        id="orange"
      />
      <AfterLoginCard
        name="SignUp Details"
        id="yellow"
      />
      <AfterLoginCard
        name="Quiz Responses Recorded"
        id="yellow"
      />
      </div>
    </div>
  );
}
