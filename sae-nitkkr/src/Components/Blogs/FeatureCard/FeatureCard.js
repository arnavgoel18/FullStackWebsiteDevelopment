import React from 'react'
import { Link } from 'react-router-dom';

import './FeatureCard.css';
function FeatureCard() {
  return (
    <div id="featurecard_bigbox">
      <div id="featurecard_title">
        Want to Feature your own blog?
      </div>
      <div id="featurecard_button">
        <Link to="/contactus">
          <button id="learnmore_button">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FeatureCard
