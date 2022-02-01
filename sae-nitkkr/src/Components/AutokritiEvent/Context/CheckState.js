import { useState } from "react";

import CheckContext from "./CheckContext";
function CheckState(props) {
  const [visibility, setvisibility] = useState("no");

  const dataarray = [
    {
      id: "1",
      title: "Session #1",
      show: "no",
      arrownature: "down",
      description:
        "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works",
    },
    {
      id: "2",
      title: "Session #2",
      show: "no",
      arrownature: "down",
      description:
        "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works",
    },
    {
      id: "3",
      title: "Modelling Session 1",
      show: "no",
      arrownature: "down",
      description:
        "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works",
    },
    {
      id: "4",
      title: "Modelling Session 2",
      show: "no",
      arrownature: "down",
      description:
        "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works",
    },

    {
      id: "5",
      title: "Project",
      show: "no",
      arrownature: "down",
      description:
        "This 5 days workshop begins with an overview of vehicle, followed by the power-flow through drivetrain,steering system&braking system.By the end of the day,you'll have deep insight of how your vehicle works",
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
