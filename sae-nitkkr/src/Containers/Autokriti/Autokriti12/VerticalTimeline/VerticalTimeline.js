//Vertical TImeline used in Autokriti2
import React, { Component } from "react";
import "./VerticalTimeline.css";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

function VerticalTimeline() {
  return (
    <>
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          id="transmission"
          dateText="Transmission"
          dateInnerStyle={{ background: "#76bb7f", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* <h3 style={{ color: "blue", marginBottom: "15px" }}>Day 1</h3> */}
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Introduction</h4>
          <p>1. What is transmission,</p>
          <p>2. Why it is used, </p>
          <p>3. Power and Torque.</p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Clutch</h4>
          <p>1. What is clutch,</p>
          <p>
            2. Type of Clutches- Dog, single plate, friction- multiplate, 
            centrifugal.
          </p>
          <p>3. Their advantages and disadvantage,</p>
          <p>4. Their uses</p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>
            {" "}
            Manual Transmission Gearbox
          </h4>
          <p>1. Slidind Mesh,</p>
          <p>2. Constant Mesh</p>
          <p>3. Synchromesh Gearbox </p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>
            Automatic Transmission{" "}
          </h4>
          <p>1. CVT,</p>
          <p>2. DCT,</p>
          <p>3. E CVT </p>
          <p>4. Torque Converter,</p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Differential </h4>
          <p>1. What is differential,</p>
          <p>2. Types of Differential,</p>
          <p>3. Uses, advantages and disadvantage.</p>
          <p>4. CV,UV.</p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>
            Drive train and shifting
          </h4>
          <p>1. 4wd,2wd- advantages, disadvantages,</p>
          <p>2. Front wd, rear wd</p>
        </TimelineItem>

        <TimelineItem
          key="002"
          id="vd"
          dateText="Vehicle Dynamics"
          dateInnerStyle={{ background: "#ffbc00", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* <h3 style={{ color: "blue", marginBottom: "15px" }}>Day 3</h3> */}
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Suspension </h4>
          <p>1. introduction</p>
          <p>2. Objective </p>
          <p>3. Basic terminology </p>
          <p className="subtext">3.1 Sprung & Unsprung Weight</p>
          <p className="subtext">3.2 Centre of Gravity</p>
          <p className="subtext">3.3 Roll Axis</p>
          <p className="subtext">3.4 Dynamic Load Transfer</p>
          <p className="subtext">3.5 Dive & Squat</p>
          <p className="subtext">3.6 Bump & Droop</p>
          <p>4. Types </p>
          <p className="subtext">4.1 Dependent Suspension</p>
          <p className="subsubtext">4.1.1 Hotchkiss Drive</p>
          <p className="subsubtext">4.1.2 Four Link Suspension</p>
          <p className="subtext">4.2 Independent Suspension</p>
          <p className="subsubtext">4.2.1 McPherson Suspension System</p>
          <p className="subsubtext">4.2.2 Double Wishbone Suspension</p>
          <p className="subsubtext"> 4.2.3 Trailing Link Suspension </p>
          <p className="subsubtext">4.2.4 Semi Trailing Arm Suspension</p>
          <p className="subsubtext">4.2.5 Push and Pull Rod Suspension</p>
          <p>5. Springs </p>
          <p>5.1 Types</p>
          <p className="subtext">5.1.1 Coil Springs</p>
          <p className="subtext">5.1.2 Leaf Springs</p>
          <p>5.2 Torsion Bars</p>
          <p>6. Dampers </p>
          <p className="subtext">6.1 Types</p>
          <p>7. Roll center analysis </p>
          <p>8. Instant Center</p>

          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Steering </h4>
          <p>1. introduction</p>
          <p>2. Objective </p>
          <p>3. Basic terminology </p>
          <p className="subtext">3.1 Cambor Angle</p>
          <p className="subtext">3.2 Castor Angle</p>
          <p className="subtext">3.3 Toe Angle</p>
          <p className="subtext">3.4 Kingpin Inclination</p>
          <p className="subtext">3.5 Steering Ratio </p>
          <p className="subtext">3.6 Bump Steer</p>
          <p className="subtext">3.7 Roll Steer</p>
          <p>4. Types </p>
          <p className="subtext">4.1 Pitman Arm Steering System</p>
          <p className="subtext">4.2 Rack and Pinion Steering System</p>
          <p>5. Ackermann geometry calculations </p>
          <p className="subtext">
            {" "}
            (Also Anti Ackermann & Parallel Geometry Overview only)
          </p>
          <p>6. Power steering </p>
          <p className="subtext">(HPS & EPS)</p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Tire dynamics</h4>
          <p>1. introduction</p>
          <p>2. Basic terminology </p>
          <p className="subtext">(& Tire Properties)</p>
          <p>3. Slip angle</p>
          <p>4. Oversteer and Understeer case study</p>
          <p>5. Rolling resistance</p>
          <p>6. Tire load transfers </p>
          <p>7. Wheel assembly </p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Aerodynamics</h4>
          <p>1. introduction</p>
          <p>2. Basic terminology </p>
          <p>3. Forces </p>
          <p>4. Parts </p>
        </TimelineItem>

        <TimelineItem
          key="003"
          id="brakes"
          dateText="Brakes"
          dateInnerStyle={{ background: "#ffbc00", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <p>1.1 Introduction </p>
          <p>1.2 Objective of Brakes</p>
          <p>1.3 Mechanical Advantages</p>
          <p>1.4 Pascal’s Law</p>
          <p>
            1.5 Types of Brakes(using graphical representation & video
            animations)
          </p>
          <p className="subtext">1.5.1 Drum Brakes</p>
          <p className="subsubtext">-Single leading edge</p>
          <p className="subsubtext">-Double leading edge</p>
          <p className="subtext">1.5.2 Disc Brakes</p>
          <p className="subsubtext">Types of Calipers</p>
          <p className="subsubsubtext">-Floating Calipers</p>
          <p className="subsubsubtext">-Fixed Calipers</p>

          <p className="subsubtext">
            Master Cylinders & Tendum Master Cylinders
          </p>
          <p className="subsubtext">Hydraulic Brakes</p>
          <p>1.6 Inboard & Outboard Braking</p>
          <p>1.7 Brake Biasing</p>
          <p>1.8 Proportioning Valve</p>
          <p>1.9 Evolution of Brakes</p>
          <p className="subtext">1.9.1 Anti-Locking Braking System</p>
          <p className="subtext">1.9.2 Power Brakes</p>
          <p>2.0 Types of Brake Fluids</p>
          <p className="subtext">Glycol Based(DOT 3 & DOT 4)</p>
          <p className="subtext">Silicon Based(DOT 5)</p>
          <p>2.1 Brake Fade</p>
          <p className="subtext">2.1.1 Methods to reduce brake fade</p>
          <p className="subsubtext">-Drilled Rotor</p>
          <p className="subsubtext">-Thermal Barriers</p>
          <p>2.2 The flow of Brake Fluid inside the entire brake assembly: </p>
          <p>2.3 What is Bleeding?</p>
          <p className="subtext">2.3.1 Methods to perform bleeding</p>
          <p className="subtext">2.3.2 Bleeding Activity: </p>
          <p>2.4 Glimpse to the Future segment: </p>
          <p className="subtext">2.4.1 What is regenerative braking?</p>
          <p className="subtext">
           2.4.2 Automatic Braking System Using Ultrasonic Sensor
          </p>
          <p>Bonus Gift: Calculation(Braking Distance)</p>
        </TimelineItem>

        <TimelineItem
          key="004"
          id="engines"
          dateText="Engines Overhauling"
          dateInnerStyle={{ background: "#ffbc00", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          {" "}
          <h4 style={{ color: "blue", marginBottom: "15px" }}>
            Overhauling of following engines
          </h4>
          <p>
            1. Honda city
            <br />
            2. Audi <br />
            3. Mercedes
            <br />
            4. Land cruiser
            <br />
            5. Porsche
            <br />
          </p>
          <h4 style={{ color: "blue", marginBottom: "15px" }}>
            Engine Syallabus
          </h4>
          <p>
            1. Introduction <br />
            2. Types of Engine
            <br />
            3. Classification of Engine
            <br />
            4.1 Petrol Engine
            <br />
            4.2 Diesel Engine
            <br />
            5. Basic Engine Parts
            <br />
            6. Fuel Injector
            <br />
            7. Variable Valve Timing
            <br />
            8. Turbochargers
            <br />
            9. Superchargers
            <br />
            10. Intercooler
            <br />
          </p>
        </TimelineItem>

        <TimelineItem
          key="005"
          dateText="IOT"
          id="iot"
          dateInnerStyle={{ background: "#ffde00", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* <h3 style={{ color: "blue", marginBottom: "15px" }}>Day 2</h3> */}
          <h4 style={{ color: "blue", marginBottom: "15px" }}>ARDUINO </h4>
          <p>1. Introduction to UART, SPI, I2C Communication</p>
          <p>2. How these works- start bit, data frame, stop bits</p>
          <p>3. Steps of Data Transmission</p>
          <p>4. Slave and Master Communication</p>
          <p>5. Advantages and Disadvantages</p>
          <p>6. Use Cases</p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>
            COMMUNICATION PROTOCOLS{" "}
          </h4>
          <p>1. Introduction to Arduino Boards </p>
          <p>2. In depth review of Arduino architecture</p>
          <p>3. Programming on Arduino IDE. </p>
          <p>4. Learning about extremely handy sensors</p>
          <p>5. Live data tracking of various sensors.</p>
          <p>
            6. Establishing master slave communication between two arduinos
            using inbuilt libraries.{" "}
          </p>
          <p>7. Hands-on intermediate to expert level projects. </p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>
            CAN COMMUNICATION{" "}
          </h4>
          <p>1. Introduction</p>
          <p>2. Need for CAN protocol</p>
          <p>3. Electrical properties of CAN</p>
          <p>4. Working</p>
          <p>5. Comparison with similar technologies</p>
          <p>6. Data transmission/ message framing</p>
          <p>7. Troubleshooting</p>
          <p>8. Practically implementing of logging CAN bus data</p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>TELEMETRY</h4>
          <p>1. Introduction.</p>
          <p>2. Need for telemetry.</p>
          <p>3. Application in EV and CV.</p>
          <p>
            4. How to implement a long distance telemetry using Arduino and RF
            signal models.
          </p>
          <p>5. Live data tracking of a vehicle.</p>
          <p>6. Tackling range, reliability and stability issues</p>
        </TimelineItem>

        <TimelineItem
          key="006"
          id="ev"
          dateText="Electric Vehicle"
          dateInnerStyle={{ background: "#ffbc00", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Battery</h4>
          <p>1. Mechanical design</p>
          <p>2. Thermal design </p>
          <p>3. Electrical design </p>
          <p>4. Cell stacking </p>
          <p>5. Types of cells(Shape/ Chemistry) </p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>BMS</h4>
          <p>1. Basics of BMS</p>
          <p>2. Cell Balancing </p>
          <p>3. Battery parameters Monitoring </p>
          {/* <p className="subtext">
            3.1 Gate Driver vs Integrated FET Driver: Power, Voltage, and
            Current Requirements
          </p>
          <p className="subtext">
            3.2 Three Use Cases: Speed, Torque, or Position
          </p>
          <p className="subtext">3.3 Control Methods: Trap, Sine, or FOC</p>
          <p className="subtext">3.4 Sensored Versus Sensor less</p> */}
          <p>4. Working Model of BMS </p>
          <p>5. PCB Designing </p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>
            Motor and Motor Controller
          </h4>
          <p>1. Motor Considerations and Why Brushless DC Motors?</p>
          <p>2. Characteristics of Motors </p>
          <p>3. Selection Of Power Rating </p>
          <p>4. Torque Encoder</p>
          <p>5. Motor Resolver  </p>
          <p>6. H Bridge </p>
          <p>7. PWM </p>
          <p>8. Motor Controller </p>
          {/* <br /> */}
          {/* <h4 style={{ color: "blue", marginBottom: "15px" }}>DAQ</h4>
          <p>1. Arduino (Functions, Variables ,Structure)</p>
          <p>2. Types of communication </p>
          <p>3. Telemetry </p>
          <p>4. IOT </p>
          <p>4. Sensors & IC </p> */}
        </TimelineItem>

        <TimelineItem
          key="007"
          id="softwares"
          dateText="Softwares"
          dateInnerStyle={{ background: "#ffbc00", color: "#fff" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          {" "}
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Solidworks/Catia/Siemens NX</h4>
          <p>
            1. Installation <br />
            2. Introduction to UI <br />
            3. Part file(Sketching 2D)
            <br />
            4. Part File(Sketching 3D)
            <br />
            5. Extrude/cut/revolve a pattern by an example (sheaves of CVT)
            <br />
            6. Assembly(Dampers)
            <br />
          </p>{" "}
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Ansys</h4>
          <p>1. Introduction to Ansys</p>
          <p>2. Design and Structural Analysis of components</p>{" "}
          <p>3. Design and Thermal Analysis of components</p>{" "}
          <p>4. Computational Fluid Analysis</p>
          <br />
          {/* <h4 style={{ color: "blue", marginBottom: "15px" }}>Catia</h4>
          <p>1. Introduction to Ansys</p>
          <p>2. Design and Structural Analysis of components</p>{" "}
          <p>3. Design and Thermal Analysis of components</p>{" "}
          <p>4. Computational Fluid Analysis</p>
          <br />
          <h4 style={{ color: "blue", marginBottom: "15px" }}>Seimens NX</h4>
          <p>1. Introduction to Ansys</p>
          <p>2. Design and Structural Analysis of components</p>{" "}
          <p>3. Design and Thermal Analysis of components</p>{" "}
          <p>4. Computational Fluid Analysis</p> */}
        </TimelineItem>
      </Timeline>
    </>
  );
}

export default VerticalTimeline;
