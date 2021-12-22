import React from 'react'
import { Link } from 'react-router-dom';
import "./FooterWhite.css";

function Footerautokriti() {
  return (
    <div id="white_footer">
    <div id="white_footer_box1">
      <div id="white_heading_of_footers1">
        {" "}
        <h1 id="white_explore_us" className="footer_components">
          Explore US
        </h1>
      </div>
      <hr id="white_line_for_first" />
      <div id="white_explore_us_content" className="each_footer_content">
        <Link to="/accelerons"><p className="white_things_to_explore">Team Accelerons </p></Link>
        <Link to="/nitrox"><p className="white_things_to_explore">Team Nitrox</p></Link>
        <Link to="/autokriti"><p className="white_things_to_explore">Autokriti</p></Link>
        <Link to="/blogs"><p className="white_things_to_explore">Blogs</p></Link>
        <Link to="/sponsors"><p className="white_things_to_explore">Sponsors</p></Link>
        <Link to="/contactus"><p className="white_things_to_explore">Contact Us</p></Link>
      </div>
    </div>
    <div id="white_footer_box2">
      <div id="white_heading_of_footers2">
        {" "}
        <h1 id="white_social" className="white_footer_components">
          Social
        </h1>
      </div>
      <hr id="white_line_for_second" />
      <div id="white_social_content" className="white_each_footer_content">
        <p>
          Team Accelerons
          <a href="https://instagram.com/accelerons_nitkkr?utm_medium=copy_link" target="_blank">
          <img
            id="white_insta_image_acelerons"
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="insta_image_acelerons"
          /></a>
           <a href="https://www.facebook.com/teamaccelerons/" target="_blank">
          <img
            id="white_fb_image_acelerons"
            src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png" 
            alt="fb_image_acelerons"
          /></a>
        </p>

        <p>
          Team Nitrox
          <a href="https://instagram.com/nitroxteam?utm_medium=copy_link" target="_blank">
         <img
            id="white_insta_image_nitrox"
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="insta_image_nitrox"
          /></a>
          <a href="https://www.facebook.com/teamnitrox/" target="_blank">
          <img
            id="white_fb_image_nitrox"
            src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png"
            alt="fb_image_nitrox"
          /></a>
        </p>

        <p>
          Autokriti
          <a href="https://instagram.com/autokriti?utm_medium=copy_link" target="_blank">
          <img
            id="white_insta_image_auto"
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="insta_image_auto"
          /></a>
           <a href="https://www.facebook.com/autokriti/" target="_blank">
          <img
            id="white_fb_image_auto"
            src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png"
            alt="fb_image_auto"
          /></a>
        </p>
      </div>
    </div>
    <div id="white_footer_box3">
      <div id="white_heading_of_footers3">
        <h1 id="white_contact_us" className="white_footer_components">
          Contact Us
        </h1>
      </div>
      <hr id="white_line_for_third" />
      <div id="white_contact_us_content" className="white_each_footer_content">
        <p>
          {" "}
          <img
            className="white_contact_image"
            src="https://img.icons8.com/material-outlined/24/000000/mail.png"
            alt="contact_image"
          />
          <span id="white_email_text"><a href="mailto:saenitkurukshetra@gmail.com">saenitkurukshetra@gmail.com</a></span>
        </p>

        <p>
          {" "}
          <img
            className="white_contact_image"
            src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
            alt="contact_image"
          />
          <span id="white_linkedin_text"><a href="https://in.linkedin.com/company/sae-nit-kkr" target="_blank">linked.com/company/sae-nit-kkr</a></span>
        </p>

        <p>
            {" "}
            <img
              className="white_contact_image"
              src="https://img.icons8.com/material-outlined/24/000000/add-contact-to-company.png"
              alt="contact_image"
            />
            <span id="white_email_text">
              {" "}
              <Link to="/contactus">
                Contact Us
              </Link>
            </span>
          </p>
      </div>
    </div>
    <div id="white_footer_box4">
      <div id="white_heading_of_footers4">
        <h1 id="white_newsletter" className="white_footer_components">
          {" "}
          Join Our Newsletter
        </h1>
      </div>
      <hr id="white_line_for_fourth" />
      <div id="white_newsletter_content" className="white_each_footer_content">
        <br />
        <input
          id="white_getting_mail"
          type="text"
          placeholder="Enter your email..."
        />
        <button id="white_joinus"> Join</button>
        <br />
        <br />
        <input type="checkbox" id="white_select" name="select" value="got_it" />
        <span id="white_checkbox_disclaimer">
          Yes,I'd like to hear about updates on my mail
        </span>
      </div>
    </div>
  </div>
  )
}

export default Footerautokriti;