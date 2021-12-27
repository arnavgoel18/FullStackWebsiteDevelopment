import React, {useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import logo1 from "../../../Components/LEFT vs RIGHT/images/logo1.png";
import topic2pic1 from "../../../Assets/Topic2/staicar.jpg";
import topic2pic2 from "../../../Assets/Topic2/steerSystem.jpg";
import topic2pic3 from "../../../Assets/Topic2/orderOfGravity.jpeg";
import topiccardpic from "../../../Components/LEFT vs RIGHT/images/topiccardholder1.png";

import "./Topic2.css";
import NavBar from "../../../Components/NavBar/NavBar";
import ShareAndClapDIV from "../../../Components/Blogs/ShareAndClap/ShareAndClapDIV";
import TopicsCardHolder from "../../../Components/Blogs/TopicsCardHolder/TopicsCardHolder";
import PhoneShareAndClap from "../../../Components/Blogs/ShareAndClap/PhoneShareAndClap";
import Footer from "../../../Components/Footer/Footer(black)/FooterBlack";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className="header">
        <NavBar />
      </div>

      <div className="bodyhead_extraspace">
        <div className="imgcircle">
          <img src={logo1} id="logo1" alt="not" />
        </div>

        <div className="topicname">
          <span>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp; A BEGINNER'S GUIDE TO VEHICLE DYNAMICS &emsp;
          </span>
          {/* &nbsp; for spaces to count similar type code for  &ensp -2spaces; &emsp; -4spaces */}
        </div>

        <div className="extraspace "></div>
      </div>

      <div className="body">
        <div id="bodyContent">
          <div id="image">
            <img
              src={topic2pic1}
              alt="im not known"
              className="pic"
              height="100px"
            />
          </div>
          <br />
          {/* <div className="right">(Image Source: www.todayifoundout.com)</div> */}
          <br />
          {/* <div>Last updated: July 4, 2020</div> */}
          On dissecting the term "vehicle dynamics", we get " vehicle" and
          "dynamics". Anything that carries us from one place to another can be
          called a vehicle, be it manually powered bicycles or fuel powered
          rockets that'll take us to the moon or other celestial bodies! The
          term "dynamics" owes its origin to the Greek word "dunamis" meaning
          power. When a force is applied to any static vehicle (or object), it
          sets into motion, hence vehicle dynamics (VD) is the study of vehicles
          under motion. What type of vehicles come under the study - the ones
          that move on roads or those that move in space? In its broadest
          approach, it covers all sorts of vehicles from ships, trains to
          rubber-tyred vehicles. Here, we shall be dealing only with those that
          move on a solid surface (roads) i.e. automobiles.
          <br />
          <div id="image">
            <img
              src={topic2pic2}
              alt="im not known"
              className="pic"
              height="100px"
            />
          </div>
          <br />
          {/* <div className="right">(Image source: caracademyenglish.com)</div> */}
          <br />
          <h3>3 C's</h3>
          <br></br>
          For a vehicle to move as per his/her will, the driver gives input to
          the vehicle, the vehicle processes according to the ambient factors
          and gives the output in the form of ride experience, analogous to how
          our computers work. However, in the case of vehicles, the output given
          by the vehicle affects the driver along with passengers physically as
          well as mentally. The three fundamental principles which VD engineers
          work to optimise are: <br />
          <br />
          <h3 className="right"> comfort, control and contact (3 C's)</h3>
          <br /> <b>Comfort</b> is a feeling of ease. The notion of comfort may
          be different for different individuals. This gives rise to another
          question: what are the parameters that define comfort? Comfort in a
          general sense can be stated that no significant disturbance should be
          caused by the ride to the physical and mental stability of the driver
          (this definition is with respect to vehicle's output). However, to
          ensure better comfort for drivers, there is a need to work upon
          various other factors (we are not going to dive into those factors in
          this article). <br />
          <br />A better <b>control</b> over the vehicle can make the ride a
          happier experience. Of course a better control over the vehicle
          decreases the probability of accidents. <br /> <br />
          Engineers design every vehicle with many expectations in their head;
          one of them is to maintain continuous <b>contact</b> of wheels with
          the road. This ensures a maximum grip and thus an optimum use of
          available friction (traction). <br />
          <br /> These 3 C's are interlaced intricately. Change in the parameter
          of one can affect that of the other. Any vehicle acts over a broad
          range of motions and accordingly forces act on the vehicle, some of
          them being developed due to features of the road. Resultant of these
          forces causes three types of motion in vehicles (roll, pitch and yaw:
          insights on these will be provided in the upcoming articles). To
          obtain the desired response against these ambient interferences,
          accordingly designing of the vehicle should be done; two approaches
          are there for this purpose: empirical and analytical approach.
          Empirical approach is based on practical results. This approach is
          dependent on trial and error methods to arrive at the most preferable
          design and configuration. Analytical approach has two aspects: virtual
          modelling and simulation of real circumstances. The equations of
          forces and motions are solved using computers. With the help of such
          virtualization using software, engineers arrive at the results.
          <div id="image">
            <img
              src={topic2pic3}
              alt="im not known"
              className="pic"
              height="100px"
            />
          </div>
          <br />
          {/* <div className="right">(Image source: www.local21news.com)</div> */}
          <br />
          <h3>Classification of Vehicle Dynamics</h3>
          <br />
          Broadly, the study of VD can be grouped under 3 categories:- <br />
          <br />
          <h3>1. Tyre Dynamics:</h3> It is quite an important task to understand
          the behaviour of tyres and the physics of these rolling tyres. Tyre
          materials and tyre design have much to do with the grip and
          durability. Tyre rolling resistance has a significant contribution (up
          to 7%) in the total energy consumption of a vehicle. Oh! our poor
          engines. They work so hard to generate power, and look who shamelessly
          eats up their effort! So bad! <br />
          <br />
          <h3>2. Suspension:</h3> To ensure a smooth ride, the role of
          suspension comes into play. Suspension system has its part in
          isolating ride vibrations and also has a major impact on load
          transfer, ride quality, understeer and oversteer. <br />
          <br />
          <h3>3. Steering:</h3> We establish turning control over our vehicle
          through the steering wheel. The rotational motion that we impart to
          the steering wheel gets transformed into translational motion through
          the "rack and pinion" mechanism (a famous star in the field of
          steering!), which further changes the direction of the wheel. Note:
          You will be having a memorable tryst with the detailed explanation of
          all these topics very soon. Stay in touch. <br />
          <br />
          {/* <div id="image">
            <img src={four} alt="im not known" className="pic" height="100px" />
          </div>
          <br />
          <div className="right">
            {" "}
            Ford Model T(Image source: auto.howstuffworks.com)
          </div> */}
        </div>
        <div className="extraspace a">
          <ShareAndClapDIV />
        </div>
      </div>
      <div id="extra">
        <PhoneShareAndClap />
      </div>
      <hr />

      <h2 className="other_blogs">Other Blogs</h2>
      <div className="end">
        <Link to="/blogs/leftvsright">
        <TopicsCardHolder
          srcs={topiccardpic}
          title="Left vs Right"
        /></Link>
      </div>
      {/* <div className="footer"></div> */}
      <Footer />
    </div>
  );
}

export default App;
