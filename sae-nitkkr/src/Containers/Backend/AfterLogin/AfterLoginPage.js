import React from "react";
import "./AfterLoginPage.css";
import AfterLoginCard from "./AfterLoginCard";
import { Link, Redirect } from "react-router-dom";

export default function AfterLoginPage() {
  
  
  const token=localStorage.getItem("token");

  let loggedin=true;
  if(token==null)
  {
    loggedin=false;
  }

 if(loggedin==false)
  {
    return <Redirect to="/admin/login"/>
  }
  else{

    return (
      <div>
        <div className="LoginPage-header">
          
          <Link to="/admin/actions"><button id="AfterLogin-backBtn">Back</button></Link>
          
          {/* <i className="fa fa-user fa-lg" aria-hidden="true"></i> */}
          <button id="signout" onClick={(e)=>{
            
            localStorage.removeItem("token")
            window.location.href="/admin/login"}}>Sign Out</button>
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
}
