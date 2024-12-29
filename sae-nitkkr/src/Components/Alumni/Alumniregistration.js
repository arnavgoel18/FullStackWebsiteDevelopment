import React, { useState } from 'react';
import './Alumniregistration.css';
import { Toaster, toast } from 'react-hot-toast';
import db from "../../Firebase.js";
import {
    collection,
    getDocs,
    doc,
    setDoc,
    updateDoc,
    Timestamp,
    query, where,
    addDoc
} from "firebase/firestore";
import MoonLoader from "react-spinners/MoonLoader.js";

const Alumniregistration = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 6;
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: '',
        contactNumber: '',
        email: '',
        currentAddress: '',
        permanentAddress: '',
        graduationYear: '',
        branch: '',
        rollNumber: '',
        hostelAccommodation: '',
        scholarship: '',
        occupation: '',
        companyName: '',
        designation: '',
        workExperience: '',
        keySkills: '',
        linkedin: '',
        website: '',
        mentorWillingness: '',
        contributeToEvents: '',
        communicationMode: [],
        photograph: null,
        termsAgreement: false,
        dataConsent: false,
    });

    const [loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
    };
    const [errors, setErrors] = useState({});
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            communicationMode: checked
                ? [...prevData.communicationMode, value]
                : prevData.communicationMode.filter((mode) => mode !== value),
        }));
    };
    const handlesubmit = async () => {
        if (step === totalSteps) {
            if (formData.termsAgreement && formData.dataConsent) {
                try {
                    setLoading(true);
                    // Use addDoc for auto-generated document ID
                    const docRef = await addDoc(collection(db, "Alumni Registration 2024"), formData);
                    console.log("Document written with ID: ", docRef.id);
    
                    toast.success('Form submitted successfully');
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                    toast.error("Something went wrong");
                    console.error("Error adding document: ", error);
                }
            } else {
                toast.error('Please agree to the terms and conditions');
            }
        } else {
            setStep(step + 1);
        }
    };

    const validateStep = () => {
        let stepErrors = {};

        switch (step) {
            case 1:
                if (!formData.fullName) {
                    stepErrors.fullName = 'Full Name is required';
                    toast.error('Full Name is required');
                    break;
                }
                if (!formData.dateOfBirth) {
                    stepErrors.dateOfBirth = 'Date of Birth is required';
                    toast.error('Date of Birth is required');
                    break;
                }
                if (!formData.gender) {
                    stepErrors.gender = 'Gender is required';
                    toast.error('Gender is required');
                    break;
                }
                if (!formData.contactNumber) {
                    stepErrors.contactNumber = 'Contact Number is required';
                    toast.error('Contact Number is required');
                    break;
                }
                if (!formData.email) {
                    stepErrors.email = 'Email is required';
                    toast.error('Email is required');
                    break;
                }
                if (!formData.currentAddress) {
                    stepErrors.currentAddress = 'Current Address is required';
                    toast.error('Current Address is required');
                    break;
                }
                if (!formData.permanentAddress) {
                    stepErrors.permanentAddress = 'Permanent Address is required';
                    toast.error('Permanent Address is required');
                    break;
                }
                break;
            case 2:
                if (!formData.graduationYear) {
                    stepErrors.graduationYear = 'Graduation Year is required';
                    toast.error('Graduation Year is required');
                    break;
                }
                if (!formData.branch) {
                    stepErrors.branch = 'Branch is required';
                    toast.error('Branch is required');
                    break;
                }
                if (!formData.rollNumber) {
                    stepErrors.rollNumber = 'Roll Number is required';
                    toast.error('Roll Number is required');
                    break;
                }
                if (!formData.hostelAccommodation) {
                    stepErrors.hostelAccommodation = 'Hostel Accommodation is required';
                    toast.error('Hostel Accommodation is required');
                    break;
                }
                if (!formData.scholarship) {
                    stepErrors.scholarship = 'Scholarship information is required';
                    toast.error('Scholarship information is required');
                    break;
                }
                break;
            case 3:
                if (!formData.occupation) {
                    stepErrors.occupation = 'Occupation is required';
                    toast.error('Occupation is required');
                    break;
                }
                if (formData.occupation === 'Other' && !formData.occupationOther) {
                    stepErrors.occupationOther = 'Specify your Occupation';
                    toast.error('Specify your Occupation');
                    break;
                }
                if (!formData.companyName) {
                    stepErrors.companyName = 'Company Name is required';
                    toast.error('Company Name is required');
                    break;
                }
                if (!formData.designation) {
                    stepErrors.designation = 'Designation is required';
                    toast.error('Designation is required');
                    break;
                }
                break;
            case 4:
                if (!formData.linkedin) {
                    stepErrors.linkedin = 'LinkedIn Profile is required';
                    toast.error('LinkedIn Profile is required');
                    break;
                }
                break;
            case 5:
                if (!formData.mentorWillingness) {
                    stepErrors.mentorWillingness = 'Mentorship willingness is required';
                    toast.error('Mentorship willingness is required');
                    break;
                }
                if (!formData.contributeToEvents) {
                    stepErrors.contributeToEvents = 'Event contribution willingness is required';
                    toast.error('Event contribution willingness is required');
                    break;
                }
                break;
            case 6:
                if (!formData.photograph) {
                    stepErrors.photograph = 'Photograph is required';
                    toast.error('Photograph is required');
                    break;
                }
                if (!formData.termsAgreement) {
                    stepErrors.termsAgreement = 'You must agree to the terms';
                    toast.error('You must agree to the terms');
                    break;
                }
                if (!formData.dataConsent) {
                    stepErrors.dataConsent = 'You must consent to data usage';
                    toast.error('You must consent to data usage');
                    break;
                }
                break;
            default:
                break;
        }

        setErrors(stepErrors);
        return Object.keys(stepErrors).length === 0;
    };

    const nextStep = () => {
        if (step < totalSteps && validateStep()) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="personal-info">
                        <h2 className="step-title">Personal Information</h2>
                        <input className="input-full-name" type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} />
                        <input className="input-dob" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
                        <select className="select-gender" name="gender" value={formData.gender} onChange={handleInputChange}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Non-Binary">Non-Binary</option>
                            <option value="Prefer Not to Say">Prefer Not to Say</option>
                        </select>
                        <input className="input-contact-number" type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleInputChange} />
                        <input className="input-email" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
                        <textarea className="textarea-current-address" name="currentAddress" placeholder="Current Address" value={formData.currentAddress} onChange={handleInputChange} />
                        <textarea className="textarea-permanent-address" name="permanentAddress" placeholder="Permanent Address" value={formData.permanentAddress} onChange={handleInputChange} />
                    </div>
                );
            case 2:
                return (
                    <div className="academic-details">
                        <h2 className="step-title">Academic Details</h2>
                        <select className="select-graduation-year" name="graduationYear" value={formData.graduationYear} onChange={handleInputChange}>
                            <option value="">Select Graduation Year</option>
                            {[...Array(70).keys()].map((i) => (
                                <option key={i} value={1951 + i}>{1951 + i}</option>
                            ))}
                        </select>
                        <select className="select-branch" name="branch" value={formData.branch} onChange={handleInputChange}>
                            <option value="">Select Branch</option>
                            <option value="CSE">Computer Science and Engineering</option>
                            <option value="ECE">Electronics and Communication Engineering</option>
                            <option value="Mechanical">Mechanical Engineering</option>
                            <option value="Civil">Civil Engineering</option>
                            <option value="Electrical">Electrical Engineering</option>
                            <option value="IT">Information Technology</option>
                            <option value="Other">Other</option>
                        </select>
                        {formData.branch === 'Other' && (
                            <input className="input-branch-other" type="text" name="branchOther" placeholder="Specify Branch" value={formData.branchOther || ''} onChange={handleInputChange} />
                        )}
                        <input className="input-roll-number" type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleInputChange} />
                        <select className="select-hostel" name="hostelAccommodation" value={formData.hostelAccommodation} onChange={handleInputChange}>
                            <option value="">Did you stay in Hostel?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <select className="select-scholarship" name="scholarship" value={formData.scholarship} onChange={handleInputChange}>
                            <option value="">Did you receive Scholarship/Financial Aid?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                );
            case 3:
                return (
                    <div className="professional-details">
                        <h2 className="step-title">Professional Details</h2>
                        <select className="select-occupation" name="occupation" value={formData.occupation} onChange={handleInputChange}>
                            <option value="">Select Occupation</option>
                            <option value="Student">Student (Higher Studies)</option>
                            <option value="Employed">Employed</option>
                            <option value="Entrepreneur">Entrepreneur</option>
                            <option value="Other">Other</option>
                        </select>
                        {formData.occupation === 'Other' && (
                            <input className="input-occupation-other" type="text" name="occupationOther" placeholder="Specify Occupation" value={formData.occupationOther || ''} onChange={handleInputChange} />
                        )}
                        <input className="input-company-name" type="text" name="companyName" placeholder="Company/Organization Name" value={formData.companyName} onChange={handleInputChange} />
                        <input className="input-designation" type="text" name="designation" placeholder="Designation/Role" value={formData.designation} onChange={handleInputChange} />
                        <input className="input-work-experience" type="number" name="workExperience" placeholder="Years of Work Experience" value={formData.workExperience} onChange={handleInputChange} />
                        <input className="input-key-skills" type="text" name="keySkills" placeholder="Key Skills" value={formData.keySkills} onChange={handleInputChange} />
                    </div>
                );
            case 4:
                return (
                    <div className="social-networking-details">
                        <h2 className="step-title">Social and Networking Details</h2>
                        <input className="input-linkedin" type="url" name="linkedin" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleInputChange} />
                        <input className="input-website" type="url" name="website" placeholder="Personal/Professional Website (if any)" value={formData.website} onChange={handleInputChange} />
                    </div>
                );
            case 5:
                return (
                    <div className="alumni-engagement">
                        <h2 className="step-title">Alumni Engagement</h2>
                        <select className="select-mentor" name="mentorWillingness" value={formData.mentorWillingness} onChange={handleInputChange}>
                            <option value="">Willing to Mentor Current Students?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <select className="select-contribute" name="contributeToEvents" value={formData.contributeToEvents} onChange={handleInputChange}>
                            <option value="">Interested in Alumni Events or Talks?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label className="label-communication-mode">
                            Preferred Mode of Communication:<br />
                            <div className='preferredmode-of-comm'>
                                <input className="checkbox-email" type="checkbox" name="communicationMode" value="Email" onChange={handleCheckboxChange} /> Email
                            </div>
                            <div className='preferredmode-of-comm'>
                                <input className="checkbox-phone" type="checkbox" name="communicationMode" value="Phone" onChange={handleCheckboxChange} /> Phone
                            </div>
                            <div className='preferredmode-of-comm'>
                                <input className="checkbox-whatsapp" type="checkbox" name="communicationMode" value="WhatsApp" onChange={handleCheckboxChange} /> WhatsApp
                            </div>
                            <div className='preferredmode-of-comm'>
                                <input className="checkbox-postal" type="checkbox" name="communicationMode" value="Postal" onChange={handleCheckboxChange} /> Postal
                            </div>
                        </label>
                    </div>
                );
            case 6:
                return (
                    <div className="authentication-consent">
                        <h2 className="step-title">Authentication & Consent</h2>
                        <input className="input-photograph" type="file" name="photograph" onChange={handleInputChange} />
                        <label className="label-terms-agreement">
                            <input className="checkbox-terms-agreement" type="checkbox" name="termsAgreement" checked={formData.termsAgreement} onChange={handleInputChange} />
                            I agree to the terms and conditions.
                        </label>
                        <label className="label-data-consent">
                            <input className="checkbox-data-consent" type="checkbox" name="dataConsent" checked={formData.dataConsent} onChange={handleInputChange} />
                            I consent to receive communications.
                        </label>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Toaster />
            <div className='progressbar-outerdiv'>
                <div className="progress-bar">
                    <div style={{ width: `${(step / totalSteps) * 100}%` }} className="progress"></div>
                </div>
            </div>
            <div className="form-container">
                {renderStep()}
                <div className="form-navigation">
                    {step > 1 && <button className="btn-prev" onClick={prevStep}>Previous</button>}
                    {step < totalSteps && <button className="btn-next" onClick={nextStep}>Next</button>}
                    <div style={{ display: "flex", gap: "2rem" }}>
                        {step === totalSteps && <button className="btn-submit" onClick={() => handlesubmit()}>Submit</button>}
                        {loading && <div style={{ width: "auto", height: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <MoonLoader loading={loading} size={40} />
                        </div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Alumniregistration;