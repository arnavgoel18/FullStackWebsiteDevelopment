import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase";
import * as XLSX from 'xlsx';

const RegistrationDataExport = () => {
    const [registrationData, setRegistrationData] = useState([]);

    // Fetch all data from Firestore
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            // No token found, redirect to login
            window.location.href = "/admin/login";
        }
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "AutokritiRegistration2024"));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRegistrationData(data);
            } catch (error) {
                console.error("Error fetching data from Firestore: ", error);
            }
        };

        fetchData();
    }, []);

    // Function to export data as Excel
    const exportToExcel = () => {
        // Prepare worksheet data
        const worksheetData = registrationData.map((data) => ({
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
            College: data.college,
            Branch: data.branch,
            Semester: data.semester,
            Accommodation: data.accomodation,
            RegistrationTime: data.Registration_time,
            Department: Array.isArray(data.department) ? data.department.join(', ') : data.department, // Convert array to string
            Amount: data.amount,
            TimeSlot1: data.timeSlot1,
            RegistrationID: data.registrationId,
            Verified: data.verified ? 'Yes' : 'No' // Example for verified field
        }));

        // Create a new workbook
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(worksheetData);

        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "Registration Data");

        // Export the Excel file
        XLSX.writeFile(workbook, "Autokriti_Registration_Data.xlsx");
    };

    return (
        <div>
            <h1>Export Registration Data</h1>
            <button onClick={exportToExcel}>Download Excel</button>
        </div>
    );
};

export default RegistrationDataExport;
