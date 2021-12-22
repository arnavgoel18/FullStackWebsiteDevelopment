import React from 'react'
import './Card_contain.css'
// import Clap from './Clap'

import TopicsCardHolder from '../../../Components/Blogs/TopicsCardHolder/TopicsCardHolder'
import daq from '../../../Assets/TopicsCardHolder/daq.png'
import brakes from '../../../Assets/TopicsCardHolder/brakes.png'
import FeatureCard from '../../../Components/Blogs/FeatureCard/FeatureCard'
import FollowUsCard from '../../../Components/Blogs/FollowUsCard/FollowUsCard'
function Card_contain() {
  return (
      <div id="blog_contain">
    <div id="card_contain">
    <TopicsCardHolder
     srcs={daq}
     title="Left Vs Right"
     date="09/09/2021"
    /> 
    <TopicsCardHolder
    srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"
    /> 
    <TopicsCardHolder
    srcs={daq}
    title="DAQ and Microcontrollers"
    date="10/10/2021"
    /> 
    <TopicsCardHolder
    srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"
    /> 
    {/* <TopicsCardHolder
    srcs={daq}
    title="DAQ and Microcontrollers"
    date="21/10/2021"
    /> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"
    /> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="1/10/2021"
    /> 
    <TopicsCardHolder
    srcs={daq}
    title="DAQ and Microcontrollers"
    date="9/9/2021"
    /> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"/> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/9/2021"/> 
    <TopicsCardHolder
    srcs={daq}
    title="DAQ and Microcontrollers"
    date="1/1/2021"
    /> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"/> 
    <TopicsCardHolder
    srcs={daq}
    title="DAQ and Microcontrollers"
    date="10/10/2021"
    /> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"/> 
    <TopicsCardHolder
    srcs={daq}
    title="DAQ and Microcontrollers"
    
    /> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"/> 
    <TopicsCardHolder
    srcs={daq}
    title="DAQ and Microcontrollers"
    date="10/10/2021"
    /> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"/> 
    <TopicsCardHolder
    srcs={daq}
    title="DAQ and Microcontrollers"
    date="10/10/2021"
    /> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"/> 
    <TopicsCardHolder
    srcs={daq}
    title="DAQ and Microcontrollers"
    date="10/10/2021"
    /> 
    <TopicsCardHolder srcs={brakes}
    title="Brakes and What Materials to Use"
    date="10/10/2021"/>  */}
    
    </div>
    <div id="side_contain">
      {/* <div id="side_contain_hustle"> */}
      <FollowUsCard/>
      {/* </div> */}
        
    <FeatureCard/>
    </div>
    </div>
  )
}

export default Card_contain
