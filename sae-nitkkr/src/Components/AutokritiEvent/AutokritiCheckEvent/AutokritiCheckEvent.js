import React, { useEffect } from "react";
import { useContext } from "react";
import "./AutokritiCheckEvent.css";
import Autokritiacc_card from "../Autokritiacc_card/Autokritiacc_card";
import CheckContext from "../Context/CheckContext"; import $ from 'jquery';

function AutokritiCheckEvent() {
  $(document).ready(function () {
    if (window.location.href.includes('?acc_container')) {
      $('html, body').animate({
        scrollTop: $('#acc_container').offset().top
      }, 'slow');
    }
  });

  let variable = useContext(CheckContext);

  useEffect(() => {
    variable.getalldata();
  }, []);

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
    <div id="acc_container" >
      <div id="acc_insidecontainer">
        <div id="acc_first" className="acc_component">
          <h2 className="CheckOurEvents-heading">
            <b className="CheckOurEvents-subheading">e</b> - Autorkriti 2.0 <b className="CheckOurEvents-subheading"> Journey </b>
          </h2>
        </div>
        <div id="acc_second" className="acc_component">
        Knowledge could be gained via two ways- by the path of prolong experimentation and trial & error or from a mentor who could show you a circumscribed path to learning. Isn’t latter the better option? 
        <br/><br/>
        SAE NIT Kurukshetra, with its subsidiaries- Team Nitrox and Team Accelerons, is already deep into the technical bog of vehicle designing and manufacturing. And this is what makes Autokriti North India’s largest automobile workshop. The huge participation in previous years is the impetus behind our consistent effort to bring meticulous content for you each year. 
        <br/><br/>
        And so here we are with e-Autokriti 2.0, where we would lay before you the technical know-how unfurled through years of research & implementations. 
        <br/><br/>
        It’s a five day workshop which will give you an overall idea of working and designing of vehicle’s powertrain. 

        </div>
        <div id="acc_third" className="acc_component">
          <div id="acc_card_container" >
            {variable.backupdata.map((element) => {
              return (
                <Autokritiacc_card
                  arrow={element.arrownature}
                  id={element.id}
                  visibility={element.show}
                  title={element.title}
                  description={element.description}
                />
              );
            })}
          </div>
         
        </div>
        <div id="acc_fourth" className="acc_component" >
        So it’s a start of something interesting. And this workshop will give direction to your interest in automotive industry. Thus join us for e- Autokriti 2.0, for as there’s a point where we begin; let this one be yours. 
        <br/><br/>
        📌 Certificates signed by professors of NIT Kurukshetra will be provided

        </div>
      </div>
      {/* <div className="acc_container_main">
        <div className="acc_container_right_main">
          <div className="acc_container_right_main_part">
            <div className="acc_container_right_main_part1">
              <div className="acc_container_right_main_part1_text">
                Here we are, SAE NIT Kurukshetra presents e-Autokriti 2.0, where we would lay before you the technical know-how unfurled through years of experimentation & implementation. It will assure you a well-acknowledged welcome in the automotive world & also a direction for further exploration.
              </div>
              <div className="acc_container_right_main_part1_register">
                <div className="acc_container_right_main_part1_register_btn">
                  <a href='https://www.saenitkurukshetra.in/autokriti/register'>Register Here</a>
                </div>
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
      </div> */}
    </div>
  );
}

export default AutokritiCheckEvent;
