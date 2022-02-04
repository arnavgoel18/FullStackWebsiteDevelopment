import { useState } from "react";

import CheckContext from "./CheckContext";
function CheckState(props) {
  const [visibility, setvisibility] = useState(false);

  const dataarray = [
    {
      id: "1",
      title: "Session #1",
      show: false,
      arrownature: "down",
      description:
        "Starting with the various components composing an automobile’s transmission, Day 1 involves- 1. Relation between power, torque and rpm. 2. Why do need transmission 3. Different types of transmission 4. Gear types and related terminology. By the end of the day, you’ll have deep insight of what really happens when gears are changed or when clutch pedal is pressed.",
    },
    {
      id: "2",
      title: "Session #2",
      show: false,
      arrownature: "down",
      description:
        "Once we are thorough with the functioning of different units of a drivetrain, we'll move to the designing part. And the first step towards designing is the knowledge of what numbers we wish achieve from our machine i.e., 1. Max Torque, power and rpm 2. No. of gears, etc. . The subsequent session takes you deeper into designing fundamentals of gearbox, axle and shafts. And together we’ll do the calculations, taking into consideration all the constraints (space, cost and design limitations), to get the desired output.",
    },
    {
      id: "3",
      title: "Modelling Session 1",
      show: false,
      arrownature: "down",
      description:
        "With all the required data in hand, the next step is modelling of the parts. So, the succeeding session is entirely dedicated to CAD in SolidWorks. We’d go from basics of SolidWorks to 3D modelling and assembly of the components from previous session.",
    },
    {
      id: "4",
      title: "Modelling Session 2",
      show: false,
      arrownature: "down",
      description:
        "Ensuing it will be a session on Ansys, encompassing the structural analysis of designed components. From meshing to material selection and selecting boundary conditions, the session will be hugely insightful. An another software added to your skillset!",
    },

    {
      id: "5",
      title: "Project",
      show: false,
      arrownature: "down",
      description:
        "And finally, you’ll get a hands on experience through a project involving implementing the learning from all 4 days. Wouldn’t it be exciting? When all is said and done, you’ll be in your own right to judge how a mechanism can be designed.",
    },
  ];

  const [backupdata, setbackupdata] = useState(dataarray);
  const [arrow, setarrow] = useState("down");
  // let arrownature="down";
  function show(id) {
    dataarray.map((Element) => {
      if (Element.id == id) {
        Element.show = visibility;
        setbackupdata(dataarray);
        Element.arrownature = arrow;
        //    console.log(id);
        //    console.log(Element.arrow);

        //    console.log(Element.show);
      }
    });
  }
  function notshow(id) {
    dataarray.map((Element) => {
      if (Element.id == id) {
        Element.show = visibility;
        Element.arrownature = arrow;
        // console.log(id);

        setbackupdata(dataarray);
        // console.log(Element.show);
      }
    });
  }
  function getalldata() {
    setbackupdata(dataarray);
  }

  return (
    <CheckContext.Provider
      value={{
        getalldata: getalldata,
        backupdata: backupdata,
        show: show,
        notshow: notshow,
        setvisibility: setvisibility,
        setarrow: setarrow,
        //   arrownature:arrownature,
        //   setarrownature:setarrownature
      }}
    >
      {props.children}
    </CheckContext.Provider>
  );
}
export default CheckState;
