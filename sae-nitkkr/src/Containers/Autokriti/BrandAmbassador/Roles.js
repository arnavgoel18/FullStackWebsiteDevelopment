import React from 'react';
import { useState,useEffect } from 'react';
import './Benifits.css';

function Roles() {
   var imgNames = ['recruit', 'spread', 'claimCertificate']
   var imgSubtitles = [
     {
       heading: '1. Recruiting students for Worskhop',
       data: 'You will help recruit interested candidates for workshops and courses. A traininig session will provide you with all the info you might need.',
     },
     {
       heading: '2. Spreading the Word of our workshop',
       data: 'Getting the word out using Social Media platmforms or Campus News Letters to enroll as many students as possible.',
     },
     {
       heading: '3. Claim your Ambassador Certificate',
       data: 'Must bring at least 2 entries in all the courses and workshops combined to avail the Ambassdor Certificate.',
     },
   ]
  const [slideIndex,setSlideIndex]=useState(0);
  
  useEffect(()=>{
const timer = setTimeout(() => {
  setSlideIndex((preValue) => {
    if (preValue < imgNames.length - 1) return preValue + 1
    else return 0
  })
}, 5000);

return () => clearTimeout(timer)
  })
 
  return (<>
    <div className='BenifitsBody'>
      <div className="foto">
        <div className="benifitheading">Roles of an Ambassador </div>
        <img src={`Imgs/${imgNames[slideIndex]}.jpg`} alt="not found" />
      </div>
      <h3>{imgSubtitles[slideIndex].heading}</h3>
      <p>{imgSubtitles[slideIndex].data}</p>
    </div>
    </>
  );
}

export default Roles;
