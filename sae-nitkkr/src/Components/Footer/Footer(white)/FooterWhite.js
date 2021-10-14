import React from 'react'
import "./Footerautokriti.css";
function Footerautokriti() {
  return (
    <div id="footer">
    <div id="footer_box1">
      <div id="heading_of_footers1">
        {" "}
        <h1 id="explore_us" className="footer_components">
          Explore US
        </h1>
      </div>
      <hr id="line_for_first" />
      <div id="explore_us_content" className="each_footer_content">
        <p className="things_to_explore">Team Accelerons </p>
        <p className="things_to_explore">Team Nitrox</p>
        <p className="things_to_explore">Autokriti</p>
        <p className="things_to_explore">Support Us</p>
        <p className="things_to_explore">Gallery</p>
        <p className="things_to_explore">Sponsors</p>
      </div>
    </div>
    <div id="footer_box2">
      <div id="heading_of_footers2">
        {" "}
        <h1 id="social" className="footer_components">
          Social
        </h1>
      </div>
      <hr id="line_for_second" />
      <div id="social_content" className="each_footer_content">
        <p>
          Team Accelerons
          <img
            id="insta_image_acelerons"
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="insta_image_acelerons"
          />
          <img
            id="fb_image_acelerons"
            src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png" 
            alt="fb_image_acelerons"
          />
        </p>

        <p>
          Team Nitrox
          <img
            id="insta_image_nitrox"
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="insta_image_nitrox"
          />
          <img
            id="fb_image_nitrox"
            src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png"
            alt="fb_image_nitrox"
          />
        </p>

        <p>
          Autokriti
          <img
            id="insta_image_auto"
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="insta_image_auto"
          />
          <img
            id="fb_image_auto"
            src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png"
            alt="fb_image_auto"
          />
        </p>
      </div>
    </div>
    <div id="footer_box3">
      <div id="heading_of_footers3">
        <h1 id="contact_us" className="footer_components">
          Contact Us
        </h1>
      </div>
      <hr id="line_for_third" />
      <div id="contact_us_content" className="each_footer_content">
        <p>
          {" "}
          <img
            className="contact_image"
            src="https://img.icons8.com/material-outlined/24/000000/mail.png"
            alt="contact_image"
          />
          <span id="email_text"> saenitkurukshetra@gmail.com</span>
        </p>

        <p>
          {" "}
          <img
            className="contact_image"
            src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
            alt="contact_image"
          />
          <span id="linkedin_text">linked.com/company/sae-nit-kkr</span>
        </p>
      </div>
    </div>
    <div id="footer_box4">
      <div id="heading_of_footers4">
        <h1 id="newsletter" className="footer_components">
          {" "}
          Join Our Newsletter
        </h1>
      </div>
      <hr id="line_for_fourth" />
      <div id="newsletter_content" className="each_footer_content">
        <br />
        <input
          id="getting_mail"
          type="text"
          placeholder="Enter your email..."
        />
        <button id="joinus"> Join</button>
        <br />
        <br />
        <input type="checkbox" id="select" name="select" value="got_it" />
        <span id="checkbox_disclaimer">
          Yes,I'd like to hear about updates on my mail
        </span>
      </div>
    </div>
  </div>
  )
}

export default Footerautokriti;
