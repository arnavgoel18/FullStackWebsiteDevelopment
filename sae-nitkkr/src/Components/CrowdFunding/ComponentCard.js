import React from 'react'
import "./FundingTimeline.css";

function ComponentCard({title, image, status}) {
  return (
    <div className="component_main_conatiner" style={{
      border:status=="Reached"?"4px solid #61FF00 ":"4px solid grey"
      
      }}>
      <div className='component_title'>
      {title}
      </div>
      <div className='component_container'>
        <div style={{marginLeft:"15px"}}>
    <img src={image} height="70%"/>

        </div>
        <div style={{display:"flex", border:"0px solid black", alignItems:"flex-end"}}>
          <div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:status=="Reached"?"#61FF00":"white", margin:"10px"}}></div>
        </div>
      </div>
    </div>
  )
}

export default ComponentCard