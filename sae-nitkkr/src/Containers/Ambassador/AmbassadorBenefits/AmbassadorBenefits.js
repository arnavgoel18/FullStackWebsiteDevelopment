import React from 'react'
import AmbassadorBenefitsCard from './AmbassaderBenefitsCard.js';
import "./AmbassadorBenefits.css";

function AmbassadorBenefits() {
    return (
        <div className="mainBoxBenefit">
        <div className='benefitsTitle'>Benefits of being <br /> an Ambassador for <br /> e - Autokriti</div>
        <div className="ambassadorBenefits">
              <AmbassadorBenefitsCard
                  number="01."
                  heading="Performence Based Monetory Incentives"
                  content="You willl get monetory benfits based on the number of students who enroll in the workshops with your referall code."
              />
              <AmbassadorBenefitsCard
                  number="02."
                  heading="Earn Commission on Workshops & Webinars"
                  content="Get a chance to earn up to 10% commision on the base fare for workshops and webinars."
              />
              <AmbassadorBenefitsCard
                  number="03."
                  heading="Marketing and Management"
                  content="Regular free training workshops & session on marketing and management for Campus Ambassadors."
              />
              <AmbassadorBenefitsCard
                  number="04."
                  heading="Free Access to Concerned Courses"
                  content="Free access to the concerned course(s) on completing a total of 5 or more entries for a single course"
              />
              <AmbassadorBenefitsCard
                  number="05."
                  heading="Learn Communication Skills"
                  content="This program will allow you to improve your communication skills and your management skills."
              />
          </div>
          </div>
    );
  }
  
  export default AmbassadorBenefits;
