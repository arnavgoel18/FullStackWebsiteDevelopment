import React from 'react'
import "./FundingTimeline.css";

function ComponentCard({title, image, status, price}) {
  return (
    <div className="component_main_conatiner" style={{
      border:status=="Reached"?"4px solid #61FF00 ":"4px solid grey",
      cursor:'default'
      
      }}>
      <div className='component_title'>
      {title} 
      <p style={{color:"red", fontSize:"12px"}}>&#8377; {price}</p>
      </div>
      <div className='component_container'>
        <div style={{marginLeft:"15px",marginTop:"10px"}}>
    <img src={image} height="96%"/>

        </div>
        <div style={{display:"flex", border:"0px solid black", alignItems:"flex-end"}}>
          <div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:status=="Reached"?"#61FF00":"white", margin:"10px"}}></div>
        </div>
      </div>
    </div>
  )
}

export default ComponentCard