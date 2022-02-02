import React, { useEffect } from "react";
import { useContext } from "react";
// import "./test.css";
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

  return (
    <div id="acc_container" >
      <div id="acc_insidecontainer">
        <div id="acc_first" className="acc_component">
          <h2 className="CheckOurEvents-heading">
            <b className="CheckOurEvents-subheading">e</b> - Autorkriti 2.0 <b className="CheckOurEvents-subheading"> Journey </b>
          </h2>
        </div>
        <div id="acc_second" className="acc_component">
          Knowledge could be gained in two ways- by the path of prolonged experimentation and trial and error or by a mentor who could show you a circumscribed path to enlightenment. Isn't it better to learn the pros & cons of a process from someone who has already traversed that path and have them oversee our mistakes? So here we are, SAE NIT Kurukshetra present e-Autokriti 2.0, where we would lay before you the technical know-how unfurled through years of experimentation & implementation. It will assure you a well-acknowledged welcome in the automotive world & also a direction for further exploration.
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
          This won't be the end,rather it's a start of something interesting,
          And this workshop will give direction to your interest in automotive
          industry. Thus join us for e-Autokriti 2.0, for as there's a point
          where we begin; let this one be yours.
        </div>
      </div>
      {/* <div className="acc_container_main">
        <div className="acc_container_right_main">
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
