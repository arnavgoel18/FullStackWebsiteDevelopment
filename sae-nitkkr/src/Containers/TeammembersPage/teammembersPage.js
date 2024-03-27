import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Teammembers from "../../Components/Teammembers/Teammembers";
const TeammembersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <Teammembers />
    </>
  );
};

export default TeammembersPage;
