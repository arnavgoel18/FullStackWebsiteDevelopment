import React, { useEffect } from "react";
import { useContext } from "react";
import "./AutokritiCheckEvent.css";
import Autokritiacc_card from "../Autokritiacc_card/Autokritiacc_card";
import CheckContext from "../Context/CheckContext";
import $ from 'jquery';

export default function AutokritiCheckEvent() {

  $(document).ready(function () {
    if(window.location.href.includes('?acc_container')){
      $('html, body').animate({
        scrollTop: $('#acc_container').offset().top
      }, 'slow');
    }
});

  let variable = useContext(CheckContext);

  useEffect(() => {
    variable.getalldata();
  }, []);
  //  console.log(variable.dataarray);
  return (
    <div id="acc_container" >
      <div id="acc_insidecontainer">
        <div id="acc_first" className="acc_component">
          <h2 className="CheckOurEvents-heading">
            <b className="CheckOurEvents-subheading">e</b> - Autorkriti 2.0 <b className="CheckOurEvents-subheading"> Journey </b>
          </h2>
        </div>
        <div id="acc_second" className="acc_component">
          Knowledge could be gained via two ways- by the path of prolong
          experimentation and trial and error orfrom a mentor who could show you
          a circumscribed path to enlightenment.Isn't it better to learn the
          pros & cons of a process from someone who has already traversed that
          path and have them to oversee our mistakes. So here we are, SAE NIT
          Kurukshetra present e-Autokriti 2.0, where we would lay before you the
          technical know-how unfurled through years of experimentation &
          implementation. It will assure you a well acknowledged welcome in
          automotive world & also a direction for further exploration.
        </div>
        <div id="acc_third" className="acc_component">
          <div id="acc_card_container">
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

            {/* <Autokritiacc_card/>
           
            <Autokritiacc_card/>
          
            <Autokritiacc_card/>
        
            <Autokritiacc_card/> */}
          </div>
          {/* Knowledge could be gained via two ways- by the path of prolong
          experimentation and trial and error orfrom a mentor who could show you
          a circumscribed path to enlightenment.Isn't it better to learn the
          pros & cons of a process from someone who has already traversed that
          path and have them to oversee our mistakes. So here we are, SAE NIT
          Kurukshetra present e-Autokriti 2.0, where we would lay before you the
          technical know-how unfurled through years of experimentation &
          implementation. It will assure you a well acknowledged welcome in
          automotive world & also a direction for further exploration. Knowledge
          could be gained via two ways- by the path of prolong experimentation
          and trial and error orfrom a mentor who could show you a circumscribed
          path to enlightenment.Isn't it better to learn the pros & cons of a
          process from someone who has already traversed that path and have them
          to oversee our mistakes. So here we are, SAE NIT Kurukshetra present
          e-Autokriti 2.0, where we would lay before you the technical know-how
          unfurled through years of experimentation & implementation. It will
          assure you a well acknowledged welcome in automotive world & also a
          direction for further exploration. */}
        </div>
        <div id="acc_fourth" className="acc_component">
          This won't be the end,rather it's a start of something interesting,
          And this workshop will give direction to your interest in automotive
          industry. Thus join us for e-Autokriti 2.0, for as there's a point
          where we begin; let this one be yours.
        </div>
      </div>
    </div>
  );
}

