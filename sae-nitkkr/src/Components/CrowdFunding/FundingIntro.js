import React from 'react'
import { Link } from 'react-router-dom'

import Donate from '../../Assets/CrowdFunding/donate.png'
import './FundingIntro.css'

export default function CrowdFunding({ netAmount, amountReceived }) {
  return (
    <>
      <div className="cf_container">
        <div className="cf_car">
          <div className="cf_text">
            <div className="cf_text1">Crowdfunding Mission 2023</div>
            <div className="cf_text2">
              SAE NIT Kurukshetra always aims to uplift the institute’s name wherever we go. Despite the adverse effects of the pandemic the team has been working tirelessly to raise the club back to its formal level. We now require your support to achieve greater glory for Team Nitrox which requires Rs.5,00,000 and Team Accelerons which requires Rs.3,00,000 to achieve the same. So help us raise 8 Lakhs in 45 days and be a part of the hustle.
            </div>
          </div>
          <div className="cf_image">
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qpq4O-wMBqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qpq4O-wMBqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
          </div>
        </div>

        <div className="cf_help">
          <div className="cf_helpText">
            <b>help us achieve our goal</b>
            <a href="/crowdfunding#funding_form">
            <button className="cf_button">
                {" "}
                <b style={{color: '#fff'}}>DONATE</b>
            </button>
              </a>
          </div>
          <div>
            <div className='fund-intro-fund-box'>
              <div style={{ color: '#00FF00' }} className='fund-intro-amount'>
                ₹ {`${amountReceived}`}
              </div>
              <div className='fund-intro-fund-text'>FUND RAISED</div>
            </div>
            <div className='fund-intro-fund-box'>
              <div style={{ color: '#FF0000' }} className='fund-intro-amount'>
                ₹ {`${netAmount - amountReceived}`}
              </div>
              <div className='fund-intro-fund-text'>REMAINING FUNDS</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
