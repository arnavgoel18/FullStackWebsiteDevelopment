import React from 'react'
import './Card_contain.css'
// import Clap from './Clap'

import TopicsCardHolder from '../../../Components/Blogs/TopicsCardHolder/TopicsCardHolder'
import daq from '../../../Assets/TopicsCardHolder/daq.png'
import brakes from '../../../Assets/TopicsCardHolder/brakes.png'
import FeatureCard from '../../../Components/Blogs/FeatureCard/FeatureCard'
import FollowUsCard from '../../../Components/Blogs/FollowUsCard/FollowUsCard'
import { Link } from 'react-router-dom'

function Card_contain() {
  return (
    <div id="blog_contain">
      <div id="card_contain">
        <Link to="/blogs/leftvsright">
          <TopicsCardHolder
          srcs={daq}
          title="Left Vs Right"
          date="09/09/2021"
          />
        </Link>
        <Link> 
          <TopicsCardHolder
          srcs={brakes}
          title="Beginer's Guide to Vehicle Dynamics"
          date="20/12/2021"
          />
        </Link> 
        <Link>
          <TopicsCardHolder
          srcs={daq}
          title="DAQ and Microcontrollers"
          date="21/12/2021"
          /> 
        </Link>    
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
