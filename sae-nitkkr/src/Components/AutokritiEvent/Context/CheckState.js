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
        "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works",
    },
    {
      id: "2",
      title: "Session #2",
      show: false,
      arrownature: "down",
      description:
        "The subsequent session takes you deeper into the manufacturing part. Here you’ll get to know the designing fundamentals of gearbox, axle, steering and braking system.",
    },
    {
      id: "3",
      title: "Modelling Session 1",
      show: false,
      arrownature: "down",
      description:
        "Once we have all the data for the components, the next step is modelling of the parts. So, the next we have is a session entirely dedicated to CAD in Solidworks. We’d go from basics of Solidworks to 3D modelling and assembly of the components from previous session. ",
    },
    {
      id: "4",
      title: "Modelling Session 2",
      show: false,
      arrownature: "down",
      description:
        "Ensuing it will be a session on Ansys, encompassing the structural analysis of designed components. An another software added to your skillset! ",
    },

    {
      id: "5",
      title: "Project",
      show: false,
      arrownature: "down",
      description:
        "And finally, you’ll get a hands on experience through a project, that will ensure the use of all your knowledge up till now. Wouldn’t it be exciting? ",
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
