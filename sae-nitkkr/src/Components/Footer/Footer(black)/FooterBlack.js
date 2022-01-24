import React from "react";
import { Link } from "react-router-dom";
import "./FooterBlack.css";
import Coming from '../../../Assets/Coming Soon/Coming.png'
function Footer() {
  return (
    <div id="black_footer">
      <div id="black_footer_box1">
        <div id="black_heading_of_footers1">
          {" "}
          <h1 id="black_explore_us" className="black_footer_components">
            Explore US
          </h1>
        </div>
        <hr id="black_line_for_first" />
        <div
          id="black_explore_us_content"
          className="black_each_footer_content"
        >
          <Link to="/accelerons">
            <p className="black_things_to_explore">Team Accelerons </p>
          </Link>
          <Link to="/nitrox">
            <p className="black_things_to_explore">Team Nitrox</p>
          </Link>
          <Link to="/autokriti">
            <p className="black_things_to_explore">Autokriti</p>
          </Link>
          <Link to="/blogs">
            <p className="black_things_to_explore">Blogs</p>
          </Link>
          <Link to="/sponsors">
            <p className="black_things_to_explore">Sponsors</p>
          </Link>
          <Link to="/contactus">
            <p className="black_things_to_explore">Contact Us</p>
          </Link>
        </div>
      </div>
      <div id="black_footer_box2">
        <div id="black_heading_of_footers2">
          {" "}
          <h1 id="black_social" className="black_footer_components">
            Social
          </h1>
        </div>
        <hr id="black_line_for_second" />
        <div id="black_social_content" className="black_each_footer_content">
          <p>
            Team Accelerons
            <a
              href="https://instagram.com/accelerons_nitkkr?utm_medium=copy_link"
              target="_blank"
            >
              <img
                id="black_insta_image_acelerons"
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="insta_image_acelerons"
              />
            </a>
            <a href="https://www.facebook.com/teamaccelerons/" target="_blank">
              {" "}
              <img
                id="black_fb_image_acelerons"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"
                alt="fb_image_acelerons"
              />
            </a>
          </p>

          <p>
            Team Nitrox &nbsp;
            <a
              href="https://instagram.com/nitroxteam?utm_medium=copy_link"
              target="_blank"
            >
              <img
                id="black_insta_image_nitrox"
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="insta_image_nitrox"
              />
            </a>
            &nbsp;
            <a href="https://www.facebook.com/teamnitrox/" target="_blank">
              <img
                id="black_fb_image_nitrox"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"
                alt="fb_image_nitrox"
              />
            </a>
          </p>

          <p>
            Autokriti &nbsp;
            <a
              href="https://instagram.com/autokriti?utm_medium=copy_link"
              target="_blank"
            >
              <img
                id="black_insta_image_auto"
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="insta_image_auto"
              />
            </a>
            &nbsp;
            <a href="https://www.facebook.com/autokriti/" target="_blank">
              <img
                id="black_fb_image_auto"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"
                alt="fb_image_auto"
              />
            </a>
          </p>
        </div>
      </div>
      <div id="black_footer_box3">
        <div id="black_heading_of_footers3">
          <h1 id="black_contact_us" className="black_footer_components">
            Contact Us
          </h1>
        </div>
        <hr id="black_line_for_third" />
        <div
          id="black_contact_us_content"
          className="black_each_footer_content"
        >
          <p>
            {" "}
            <img
              className="black_contact_image"
              src="https://img.icons8.com/ios-filled/50/ffffff/mail.png"
              alt="contact_image"
            />
            <span id="black_email_text">
              {" "}
              <a href="mailto:saenitkurukshetra@gmail.com">
                saenitkurukshetra@gmail.com
              </a>
            </span>
          </p>

          <p>
            {" "}
            <img
              className="black_contact_image"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
              alt="contact_image"
            />
            <span id="black_linkedin_text">
              <a
                href="https://in.linkedin.com/company/sae-nit-kkr"
                target="_blank"
              >
                linked.com/company/sae-nit-kkr
              </a>
            </span>
          </p>

          <p>
            {" "}
            <img
              className="black_contact_image"
              src="https://img.icons8.com/material-outlined/24/ffffff/add-contact-to-company.png"
              alt="contact_image"
            />
            <span id="black_email_text">
              {" "}
              <Link to="/contactus">
                Contact Us
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div id="black_footer_box4">
        <div id="black_heading_of_footers4">
          <h1 id="black_newsletter" className="black_footer_components">
            {" "}
            Join Our Newsletter
          </h1>
        </div>
        <hr id="black_line_for_fourth" />
        
        <div
          id="black_newsletter_content"
          className="black_each_footer_content"
         >
         
          <img id="coming_soon"src={Coming}/>
          {/* <input
            id="black_getting_mail"
            type="text"
            placeholder="Enter your email..."
          />
          <button id="black_joinus"> Join</button>
          <br />
          <br />
          <input
            type="checkbox"
            id="black_select"
            name="select"
            value="got_it"
          />
          <span id="black_checkbox_disclaimer">
            Yes,I'd like to hear about updates on my mail
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
