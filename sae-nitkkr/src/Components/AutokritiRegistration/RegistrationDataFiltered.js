import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase";
import './Registrationdata.css'; // Import the CSS file for styling
import Registrationdata from './Registrationdata';
import MoonLoader from "react-spinners/MoonLoader.js";

// Normalize the college name based on certain patterns
const normalizeCollegeName = (name) => {
    const lowercasedName = name.toLowerCase();

    // Generalize the college normalization to detect similar institutions
    if (lowercasedName.includes("mangalam") || lowercasedName.includes("manglam") || lowercasedName.includes("krmu")) {
        return "KR Mangalam University";
    }

    // Return the original name if no match is found
    return name;
};

const RegistrationDataFiltered = () => {
    const [registrationData, setRegistrationData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [collegeName, setCollegeName] = useState("");
    const [departmentname, setDepartmentName] = useState("");
    const [loading, setLoading] = useState(false);
    const [verifiedFilter, setVerifiedFilter] = useState(null); // State for verified filter

    // Fetch data from Firestore
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            // No token found, redirect to login
            window.location.href = "/admin/login";
        }
        else{
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const querySnapshot = await getDocs(collection(db, "AutokritiRegistration2024"));
                    const data = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                        normalizedCollege: normalizeCollegeName(doc.data().college) // Normalize the college name
                    }));
                    setLoading(false);
                    setRegistrationData(data);
                } catch (error) {
                    console.error("Error fetching data from Firestore: ", error);
                    setLoading(false);
                }
            };
            fetchData();
        }

    }, []);

    // Filter data based on the entered college name, department name, and verified status
    useEffect(() => {
        const filtered = registrationData.filter((data) => {
            const collegeMatches = !collegeName || data.normalizedCollege.toLowerCase().includes(collegeName.toLowerCase());
            const departmentMatches = !departmentname || data.department[0].toLowerCase().includes(departmentname.toLowerCase());
            const verifiedMatches = verifiedFilter === null || data.verified === verifiedFilter;
            return collegeMatches && departmentMatches && verifiedMatches;
        });

        setFilteredData(filtered);
    }, [collegeName, departmentname, verifiedFilter, registrationData]);

    return (
        <div className="registration-data-container">
            <h1>Registration Data</h1>

            {/* Input to filter by college name */}
            <input
                type="text"
                placeholder="Enter College Name to Filter"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                className="college-filter-input"
            />
            <input
                type="text"
                placeholder="Enter Department Name to Filter"
                value={departmentname}
                onChange={(e) => setDepartmentName(e.target.value)}
                className="college-filter-input"
            />

            {/* Buttons for filtering by verified status */}
            <div className="filter-buttons">
                <button
                    onClick={() => setVerifiedFilter(true)}
                    className={verifiedFilter === true ? 'active' : ''}
                >
                    Verified
                </button>
                <button
                    onClick={() => setVerifiedFilter(false)}
                    className={verifiedFilter === false ? 'active' : ''}
                >
                    Not Verified
                </button>
                <button
                    onClick={() => setVerifiedFilter(null)}
                    className={verifiedFilter === null ? 'active' : ''}
                >
                    All
                </button>
            </div>

            <p>Total: {filteredData.length}</p>
            <div className="registration-list">
                {/* Render filtered registration data */}
                {loading && (
                    <div style={{ width: "auto", height: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <MoonLoader loading={loading} size={40} />
                    </div>
                )}
                {filteredData.length === 0 && !loading && <div>No Registration Data Present</div>}
                {filteredData.length > 0 &&
                    filteredData.map((data, index) => (
                        <Registrationdata
                            key={index}
                            name={data.name}
                            email={data.email}
                            phone={data.phone}
                            college={data.college}
                            branch={data.branch}
                            semester={data.semester}
                            accomodation={data.accomodation}
                            Registration_time={data.Registration_time}
                            department={data.department}
                            amount={data.amount}
                            timeSlot1={data.timeSlot1}
                            registrationId={data.registrationId}
                            iot={data.iot}
                            groupid={data.groupid}
                            verified={data.verified}
                            transactionid={data.transactionid}
                            id={data.id}
                            cancelled={data.cancelled}
                        />
                    ))}
            </div>
        </div>
    );
};

export default RegistrationDataFiltered;
