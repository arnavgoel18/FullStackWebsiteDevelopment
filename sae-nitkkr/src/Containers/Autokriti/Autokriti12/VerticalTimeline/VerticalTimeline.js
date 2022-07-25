//Vertical TImeline used in Autokriti2
import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

function VerticalTimeline() {
  return (
    <>
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="** / ** / ****"
          dateInnerStyle={{ background: "#76bb7f", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ color: "blue", marginBottom: "15px" }}>Day 1</h3>
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Introduction</h4>
          <p>
            Everyone of us has enjoyed a ride in an automobile- whether as a
            driver or passenger. But ever thought, what makes this beast roar?{" "}
            <br />
            <br />
            Multiple systems synchronizes together, for the smooth run of a
            vehicle <br />
            <br />
            1. The engine, where the power is generated. <br /><br />
            2. The powertrain, which helps in altering the engine torque and rpm and supplies
power to the ground <br /><br />
3. And Brakes
<br /><br />
All these will be the part of day 1 of the workshop.
<br /><br />
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="** / ** / **** "
          dateInnerStyle={{ background: "#ffde00", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ color: "blue", marginBottom: "15px" }}>Day 2</h3>
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Fundamentals</h4>
          <p>
          Ok, is everything done? Or, are we forgetting something? Where is the vehicle body,
the shockers and dampers? Our ride can never be smooth without them. So, here
comes vehicle dynamics.

            <br />
            <br />
            The 2nd day of the workshop will involve <br /><br />
            1. Basics of Vehicle Dynamics <br /><br />
            2. Our star engine- Porsche Cayne <br /><br />
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="TBC"
          dateInnerStyle={{ background: "#ffbc00", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ color: "blue", marginBottom: "15px" }}>Day 3</h3>
          <h4 style={{ color: "blue", marginBottom: "15px" }}>
            Modelling Fundamentals Part 1
          </h4>
          <p>
          And now the time for some transition
          <br /><br />
          1. EV basics <br /><br />
          2. And an EV powertrain
<br /><br />
          </p>
        </TimelineItem>
      </Timeline>
    </>
  );
}

export default VerticalTimeline;
