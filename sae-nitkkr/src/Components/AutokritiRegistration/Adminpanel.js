import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase";
import Registrationdata from "./Registrationdata";
const Adminpanel = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token found, redirect to login
      window.location.href = "/admin/login";
    } else {
      const fetchUsers = async () => {
        try {
          const querySnapshot = await getDocs(
            collection(db, "AutokritiRegistration2024")
          );
          const usersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(usersData);
          setUsers(usersData);
          //   console.log(users);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchUsers();
    }
  }, []);
  return (
    <div>
      <h1>Admin Panel</h1>
      {users.map((user, index) => {

            return (
              <Registrationdata
                key={index}
                name={user.name}
                email={user.email}
                phone={user.phone}
                college={user.college}
                branch={user.branch}
                semester={user.semester}
                accomodation={user.accomodation}
                Registration_time={user.Registration_time}
                department={user.department}
                amount={user.amount}
                timeSlot1={user.timeSlot1}
                registrationId={user.registrationId}
                iot={user.iot}
                groupid={user.groupid}
                verified={user.verified}
                id={user.id}
              />
            );
      })}
    </div>
  );
};

export default Adminpanel;
