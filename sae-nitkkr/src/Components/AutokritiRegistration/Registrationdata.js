// Registrationdata.js
import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import db from "../../Firebase";
import './Registrationdata.css'; // Import the CSS file for styling

const Registrationdata = (props) => {
    const [userData, setUserData] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [isVerified, setIsVerified] = useState(props.verified);
    useEffect(() => {
        // Ensure that the hook runs only when props.iot is "group2" and groupid is not empty
        if (props.iot === "group2" && props.groupid != "") {
            const fetchUserById = async () => {
                try {
                    // Reference the document by its ID
                    const docRef = doc(db, "AutokritiRegistration2024", props.groupid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        // Document found, set the data
                        setUserData({ id: docSnap.id, ...docSnap.data() });
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching document:", error);
                }
            };

            fetchUserById();
        }
    }, [props.iot, props.groupid]);

    useEffect(() => {
        console.log(props.id);

        const fetchImageUrl = async () => {
            try {
                const storage = getStorage();
                const imageRef = ref(storage, `/AutokritiRegistration2024/${props.id}`); // Assuming your images are stored under 'images/' folder
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);  // Set the image URL once fetched
            } catch (error) {
                console.error("Error fetching image URL:", error);
            }
        };

        if (props.id) {
            fetchImageUrl();
        }
    }, [props.id]);
    const handleDownload = () => {
        if (imageUrl) {
            const link = document.createElement('a');
            link.href = imageUrl; // URL of the image from Firebase Storage
            link.setAttribute('download', `downloaded_image_${props.id}.jpg`); // Set the download attribute with the file name
            // link.setAttribute('target', '_blank'); // Open in a new tab
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up
        } else {
            console.error("Image URL is not available.");
        }
    };
    const sendEmail = async (userDetails) => {
        try {
          const response = await fetch('https://sae-backend.vercel.app/verify-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
          });
    
          const result = await response.json();
          // console.log(response);
          if (response.ok) {
            // alert(result.message);
          } else {
            // alert(result.error);
          }
        } catch (error) {
          console.error('Error:', error);
          return;
          // alert('Failed to send email');
        }
      }

    const verifyuser = async () => {
        try {
            const userDocRef = doc(db, "AutokritiRegistration2024", props.id); // Reference to the document
            await updateDoc(userDocRef, {
                verified: true, // Set the verified field to true
            });
            // console.log("User has been verified!");
        } catch (error) {
            console.error("Error updating document: ", error);
        }
        sendEmail(props)
        if (props.iot === "group2" && props.groupid != "") {
            try {
                const userDocRef = doc(db, "AutokritiRegistration2024", props.groupid); // Reference to the document
                await updateDoc(userDocRef, {
                    verified: true, // Set the verified field to true
                });
                if(userData){
                    sendEmail(userData)
                }
                // console.log("User has been verified!");
            } catch (error) {
                console.error("Error updating document: ", error);
            }
        }
        setIsVerified(true)
    }
    if (props.iot === "group2" && props.groupid === "") {
        return null; // Don't render anything if no groupid is provided
    }
    return (
        <div className="registration-data">
            <div style={{ marginRight: "10px" }}>
                <h2>{props.name}</h2>
                <p><strong>Email:</strong> {props.email}</p>
                <p><strong>Phone:</strong> {props.phone}</p>
                <p><strong>College:</strong> {props.college}</p>
                <p><strong>Branch:</strong> {props.branch}</p>
                <p><strong>Semester:</strong> {props.semester}</p>
                <p><strong>Accommodation:</strong> {props.accomodation}</p>
                <p><strong>Registration Time:</strong> {props.Registration_time}</p>
                <p><strong>Department:</strong> {props.department}</p>
                <p><strong>Amount:</strong> {props.amount}</p>
                <p><strong>Time Slot 1:</strong> {props.timeSlot1}</p>
                <p><strong>Registration ID:</strong> {props.registrationId}</p>
                {props.iot==="group2" &&
                    <p><strong>IOT:</strong> group of Two</p>
                }
            </div>
            {
                props.iot === "group2" && userData && (
                    <div style={{ marginRight: "10px" }}>
                        <h2>{userData?.name}</h2> {/* Render data from the fetched user */}
                        <p><strong>Email:</strong> {userData?.email}</p>
                        <p><strong>Phone:</strong> {userData?.phone}</p>
                        <p><strong>College:</strong> {userData?.college}</p>
                        <p><strong>Branch:</strong> {userData?.branch}</p>
                        <p><strong>Semester:</strong> {userData?.semester}</p>
                        <p><strong>Accommodation:</strong> {userData?.accomodation}</p>
                        <p><strong>Registration Time:</strong> {userData?.Registration_time}</p>
                        <p><strong>Department:</strong> {userData?.department}</p>
                        <p><strong>Amount:</strong> {userData?.amount}</p>
                        <p><strong>Time Slot 1:</strong> {userData?.timeSlot1}</p>
                        <p><strong>Registration ID:</strong> {userData?.registrationId}</p>
                        <p><strong>IOT:</strong> group of Two</p>
                    </div>
                )
            }
            <div className='verify-button' style={{ gap: "20px" }}>
                {!isVerified && (
                    imageUrl ? (
                        <div className='verify-button'>
                            <img src={imageUrl} alt="Uploaded file" style={{ width: '200px', height: '200px' }} onClick={handleDownload} />
                            <br />
                            <button onClick={handleDownload} className='btn-view'>view Image</button>
                        </div>
                    ) : (
                        <p>Loading image...</p>
                    )
                )
                }
                <button className='btn-verify' onClick={isVerified ? null : verifyuser} // Only allow click if not verified
                    disabled={isVerified} // Disable button if verified
                    style={{ backgroundColor: isVerified && 'gray' }} >{isVerified ? "verified" : "verify"}</button>
            </div>
        </div>
    );
};

export default Registrationdata;
