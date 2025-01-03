import React from 'react'
import "./donation.css";
import CountUp from 'react-countup';

const Donation = () => {
  return (
    <>
      <div className='donation-container'>
          <div className='amount-raised-container'>
              <span className='Rupees-Sign'>Rs </span>
              <CountUp start={0} end={100000} duration={0.6} enableScrollSpy={true} scrollSpyOnce={true} className='counter-class'/>
              <p>Amount Raised</p>
          </div>
          <div className='amount-left-container'>
              <span className='Rupees-Sign'>Rs </span>
              <CountUp start={0} end={100000} duration={0.6} delay={1} enableScrollSpy={true} scrollSpyOnce={true} className='counter-class'/>
              <p>Amount Left</p>
          </div>
      </div>
      <div className='donate-now'>
        <button className='donate-now-btn'>Donate Now</button>
      </div>
    </>
  )
}

export default Donation