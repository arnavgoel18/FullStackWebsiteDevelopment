import React from "react";
import "./AutokritiCheckEvent.css";
import Autokritiacc_card from "../Autokritiacc_card/Autokritiacc_card";
function AutokritiCheckEvent() {
  const dataarray = [
    {
      id: "1",
      title: "Session #1",
      description:
        "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works"
    },
    {
        id: "2",
        title: "Session #2",
        description:
          "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works"
    },
    {
        id: "3",
        title: "Modelling Session 1",
        description:
          "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works"
    },
    {
        id: "4",
        title: "Modelling Session 2",
        description:
          "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works"
    },
    
    {
        id: "5",
        title: "Project",
        description:
          "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works"
    },
  ];
  return (
    <div id="acc_container">
      <div id="acc_insidecontainer">
        <div id="acc_first" className="acc_component">
          <h2 className="AutokritiCheckOurEvents-heading">
            Check out our <b className="AutokritiCheckOurEvents-subheading"> EVENTS </b>
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
                {dataarray.map((element)=>
                {
                return(
                    <Autokritiacc_card id={element.id} title={element.title} description={element.description}/>
                )
                })}
            
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

export default AutokritiCheckEvent;
