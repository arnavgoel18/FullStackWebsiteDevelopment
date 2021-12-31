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
        color="yellow"
      />
      </Link>
      <Link to="/admin/displayInfo">
      <AfterLoginCard
        name="Ambassador Response"
        color="orange"
      />
      </Link>
      <AfterLoginCard
        name="Contact Us responses"
        color="yellow"
      />
      <AfterLoginCard
        name="SignUp Details"
        color="orange"
      />
      <AfterLoginCard
        name="Quiz Responses Recorded"
        color="yellow"
      />
      </div>
    </div>
  );
}
