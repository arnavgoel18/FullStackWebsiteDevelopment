import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AutokritiEvent.css";
import $ from 'jquery';

function AutokritiEvent() {
  $(document).ready(function () {
    if (window.location.href.includes('?acc_container')) {
      $('html, body').animate({
        scrollTop: $('#acc_container').offset().top
      }, 'slow');
    }
  });


  function showRoadmap(e) {
    $(e.target).animate({
      width: '10%'
    }, 500, 'swing');
    $('.navigation-bar-right').animate({
      width: '90%'
    }, 500, 'linear');
  }
  function hideRoadmap(e) {
    $(e.target).animate({
      width: '10%'
    }, 500, 'swing');
    $('.navigation-bar-left').animate({
      width: '90%'
    }, 500, 'linear');
  }
  return (
    <div id="acc_main_container" >
      <div className="acc_container_main">
        <div className="acc_container_right_main">
          <div className="acc_container_right_main_part">
            <div className="acc_container_right_main_part1">
              <div className="acc_container_right_main_part1_text">
                Here we are, SAE NIT Kurukshetra presents e-Autokriti 2.0, where we would lay before you the technical know-how unfurled through years of experimentation & implementation. It will assure you a well-acknowledged welcome in the automotive world & also a direction for further exploration.
              </div>
              <div className="acc_container_right_main_part1_register">
                <Link to="/e-Autokriti2.0">
                <div className="acc_container_right_main_part1_register_btn">
                  <a>Register Here</a>
                </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="navigation_bar">
            <div className="navigation-bar-left" onClick={showRoadmap} title="What is E-Autokriti?">

            </div>
            <div className="navigation-bar-right" onClick={hideRoadmap} title="View Roadmap">

            </div>
          </div>
        </div>
        <div className="acc_container_left_main">
          <div className="acc_container_left_main_part1">
            <div>
              e-Autokriti 2.0 Is Here !!
            </div>
            <div className="acc_container_left_main_part1_timing">
              Sat, 12-Feb Onwards
            </div>
          </div>
          <div className="acc_container_left_main_part2">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutokritiEvent;
