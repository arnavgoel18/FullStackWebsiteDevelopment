import React from 'react';
import { useState, useEffect } from 'react';
import './Benifits.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Benifits() {
  var imgNames = ['monetaryIncentives', 'workshopsCommissions', 'marketingManagamenet', 'freeAccess', 'communicationSkills']
  var imgSubtitles = [
    {
      heading: '1. Performence Based Monetary Incentives',
      data: 'You willl get monetory benfits based on the number of students who enroll in the workshops with your referall code.',
    },
    {
      heading: '2. Earn Commission on Workshops & Webinars',
      data: 'Get a chance to earn up to 10% commision on the base fare for workshops and webinars.',
    },
    {
      heading: '3. Marketing and Management Opportunity',
      data: 'Regular free training workshops & session on marketing and management for Campus Ambassadors.',
    },
    {
      heading: '4. Free Access to Concerned Courses',
      data: 'Free access to the concerned course(s) on completing a total of 5 or more entries for a single course',
    },
    {
      heading: '5. Improve Communication Skills',
      data: 'This program will allow you to improve your communication skills and your management skills.',
    }
  ]
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((preValue) => {
        if (preValue < imgNames.length - 1){
           return preValue + 1
          }
        else{
          return 0}
      })
    }, 4000);

    return () => clearTimeout(timer)
  })

  function leftarrow(){
    if(slideIndex>0){
    setSlideIndex(slideIndex-1);
    }
    else{
      setSlideIndex(imgNames.length-1);
    }
  }

  function rightarrow(){
    if(slideIndex<imgNames.length -1){
    setSlideIndex(slideIndex+1);
    }
    else{
      setSlideIndex(0);
    }
  }

  return (
    <div className='BenifitsBody'>
      <div className="foto">
        <div className="benifitheading">Benefits of being an Ambassador</div>
        <img src={`Imgs/${imgNames[slideIndex]}.jpg`}  alt="not found" />
      </div>
      <div className='amb-carousel-arrow'>
      <FaArrowLeft className='amb-arrow' onClick={leftarrow}/>
      <h3>{imgSubtitles[slideIndex].heading}</h3>
      <FaArrowRight className='amb-arrow' onClick={rightarrow}/>
      </div>
      <p>{imgSubtitles[slideIndex].data}</p>
    </div>
  );
}

export default Benifits;
