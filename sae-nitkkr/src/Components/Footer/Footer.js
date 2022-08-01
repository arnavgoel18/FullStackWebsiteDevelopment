import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Coming from '../../Assets/Coming Soon/Coming.png'
import { white_icons, black_icons } from './icons'
import { AiFillLock } from "react-icons/ai";
import {FaRupeeSign} from "react-icons/fa";

import { useLayoutEffect } from 'react'

function Footer({ type = 'black' }) {
  var icons = type === 'black' ? black_icons : white_icons
  var color = type === 'black' ? 'white' : 'black';
  var background = type === 'black' ? 'black' : 'white';

  return (
    <div
      className='footer_bar'
      style={{ background: background, color: color }}
    >
      <div className='footer_box'>
        <div>
          {' '}
          <h1>Explore US</h1>
        </div>
        <hr className='hr_line' />
        <div className='social_bar_data'>
          <Link to='/accelerons'>
            <p>Team Accelerons </p>
          </Link>
          <Link to='/nitrox'>
            <p>Team Nitrox</p>
          </Link>
          <Link to='/autokriti'>
            <p>Autokriti</p>
          </Link>
          <Link to='/blogs'>
            <p>Blogs</p>
          </Link>
          <Link to='/sponsors'>
            <p>Sponsors</p>
          </Link>
          <Link to='/contactus'>
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
      <div className='footer_box'>
        <div>
          {' '}
          <h1>Social</h1>
        </div>
        <hr className='hr_line' />
        <div className='social_bar_data'>
          <p className='social_bars'>
            Team Accelerons
            <span className='social_span'>
              <a
                href='https://instagram.com/accelerons_nitkkr?utm_medium=copy_link'
                target='_blank'
              >
                <img
                  className='social_icons'
                  src={icons.instagram}
                  alt='insta_image_acelerons'
                />
              </a>
              <a
                href='https://www.facebook.com/teamaccelerons/'
                target='_blank'
              >
                {' '}
                <img
                  className='social_icons'
                  src={icons.facebook}
                  alt='fb_image_acelerons'
                />
              </a>
            </span>
          </p>

          <p className='social_bars'>
            Team Nitrox &nbsp;
            <span className='social_span'>
              <a
                href='https://instagram.com/nitroxteam?utm_medium=copy_link'
                target='_blank'
              >
                <img
                  className='social_icons'
                  src={icons.instagram}
                  alt='insta_image_nitrox'
                />
                {/* <BsInstagram/> */}
              </a>
              &nbsp;
              <a href='https://www.facebook.com/teamnitrox/' target='_blank'>
                <img
                  className='social_icons'
                  src={icons.facebook}
                  alt='fb_image_nitrox'
                />
              </a>
            </span>
          </p>

          <p className='social_bars'>
            Autokriti &nbsp;
            <span className='social_span'>
              <a
                href='https://instagram.com/autokriti?utm_medium=copy_link'
                target='_blank'
              >
                <img
                  className='social_icons'
                  src={icons.instagram}
                  alt='insta_image_auto'
                />
              </a>
              &nbsp;
              <a href='https://www.facebook.com/autokriti/' target='_blank'>
                <img
                  className='social_icons'
                  src={icons.facebook}
                  alt='fb_image_auto'
                />
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className='footer_box'>
        <div>
          <h1>Contact Us</h1>
        </div>
        <hr className='hr_line' />
        <div className='social_bar_data'>
          <p className='social_bars2'>
            {' '}
            <img
              className='social_icons'
              src={icons.mail}
              alt='contact_image'
            />
            <span>
              {' '}
              <a href='mailto:saenitkurukshetra@gmail.com'>
              saenitkurukshetra@gmail.com
              </a>
            </span>
          </p>

          <p className='social_bars2'>
            {' '}
            <img
              className='social_icons'
              src={icons.linkedIn}
              alt='contact_image'
            />
            <span>
              <a
                href='https://in.linkedin.com/company/sae-nit-kkr'
                target='_blank'
              >
                linkedin
              </a>
            </span>
          </p>

          <p className='social_bars2'>
            {' '}
            <img
              className='social_icons'
              src={icons.contactUs}
              alt='contact_image'
            />
            <span>
              {' '}
              <Link to='/contactus'>Contact Us</Link>
            </span>
          </p>
        </div>
      </div>
      <div className='footer_box'>

      <div>
          <h1>Guidelines</h1>
        </div>
        <hr className='hr_line' />
        <div className='social_bar_data'>
          <p className='social_bars2'>
            {' '}
            <img
              className='social_icons'
              src={icons.mail}
              alt='contact_image'
            />
            <span>
              {' '}
              <Link to="/termsandconditions" target="_blank">
                Terms And Conditions
              </Link>
            </span>
          </p>

          <p className='social_bars2'>
           
          <div className="horizontal">
            {" "}
            <div
              className="contact_icon"
            ><AiFillLock/></div>
            <span id="linkedin_text">
              <Link to="/privacypolicy"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </span>
          </div>  
          </p>

            
          <div className="horizontal">
            {" "}
            <div
              className="black_contact_icon"
            ><FaRupeeSign/></div>
            <span id="lllinkedin_text">
              <Link to="/refundandcancelpolicy"
                target="_blank"
              >
               Refund and Cancel Policy
              </Link>
            </span>
          </div>  
        </div>
        {/* <div>
          <h1> Join Our Newsletter</h1>
        </div> */}
        {/* <hr className='hr_line' /> */}

        {/* <div> */}
          {/* <img id='coming_soon' src={Coming} /> */}
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
        {/* </div> */}
      </div>
    </div>
  )
}

export default Footer
