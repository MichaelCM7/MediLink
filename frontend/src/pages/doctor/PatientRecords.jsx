"use client"

import React, { useState } from "react"
import PatientDetails from "./PatientHistory.jsx"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function PatientRecords() {
    const [selectedPatient, setSelectedPatient] = useState(null)

    const patients = [
        {
            id: 1,
            name: "John Doe",
            age: 40,
            condition: "Asthma",
            lastVisit: "May 22, 2025",
            dateOfBirth: "1989-03-15",
            gender: "Male",
            phone: "0765234515",
            address: "Main street, 123",
            medicalHistory: "Hypertension, Anxiety",
            allergies: "Penicillin",
        },
        {
            id: 2,
            name: "Mary Doe",
            age: 65,
            condition: "Hypertension",
            lastVisit: "May 22, 2024",
            dateOfBirth: "1959-08-10",
            gender: "Female",
            phone: "0712345678",
            address: "Oak Avenue, 456",
            medicalHistory: "Diabetes, High Blood Pressure",
            allergies: "Sulfa drugs",
        },
        {
            id: 3,
            name: "James Ali",
            age: 39,
            condition: "Diabetes Type II",
            lastVisit: "May 25, 2025",
            dateOfBirth: "1985-12-03",
            gender: "Male",
            phone: "0798765432",
            address: "Pine Street, 789",
            medicalHistory: "Obesity, Pre-diabetes",
            allergies: "None known",
        },
        {
            id: 4,
            name: "Sally Sue",
            age: 80,
            condition: "Asthma",
            lastVisit: "July 21, 2024",
            dateOfBirth: "1944-04-20",
            gender: "Female",
            phone: "0723456789",
            address: "Elm Road, 321",
            medicalHistory: "COPD, Arthritis",
            allergies: "Aspirin",
        },
        {
            id: 5,
            name: "Kay Ray",
            age: 54,
            condition: "Asthma",
            lastVisit: "May 28, 2025",
            dateOfBirth: "1970-11-15",
            gender: "Female",
            phone: "0734567890",
            address: "Maple Drive, 654",
            medicalHistory: "Allergic Rhinitis",
            allergies: "Dust mites, Pollen",
        },
        {
            id: 6,
            name: "Kim Dean",
            age: 90,
            condition: "Diabetes Type II",
            lastVisit: "Feb 2, 2025",
            dateOfBirth: "1934-06-08",
            gender: "Male",
            phone: "0745678901",
            address: "Cedar Lane, 987",
            medicalHistory: "Heart Disease, Stroke",
            allergies: "Iodine",
        },
        {
            id: 7,
            name: "Jack Doe",
            age: 60,
            condition: "Hypertension",
            lastVisit: "April 1, 2025",
            dateOfBirth: "1964-09-25",
            gender: "Male",
            phone: "0756789012",
            address: "Birch Street, 147",
            medicalHistory: "High Cholesterol",
            allergies: "Latex",
        },
        {
            id: 8,
            name: "Jack Joe",
            age: 58,
            condition: "Cancer",
            lastVisit: "Jan 23, 2025",
            dateOfBirth: "1966-02-14",
            gender: "Male",
            phone: "0767890123",
            address: "Willow Court, 258",
            medicalHistory: "Prostate Cancer, Chemotherapy",
            allergies: "Morphine",
        },
    ]

    const handleViewDetails = (patient) => {
        setSelectedPatient(patient)
    }

    const handleBack = () => {
        setSelectedPatient(null)
    }

    if (selectedPatient) {
        return <PatientDetails patient={selectedPatient} onBack={handleBack} />
    }

    return (
        <div className="homepage-root">
            {/* Header */}
            <header className="homepage-header">
                <div className="homepage-logo">
                    <img src="/MediLink.png" alt="MediLink Logo" className="homepage-logo-img" />
                    <span className="homepage-logo-text">MEDILINK</span>
                </div>

                <nav className="homepage-nav">
                    <Link to={ROUTES.DOCTOR_DASHBOARD}>Home</Link>
                    <Link to={ROUTES.DOCTOR_PATIENT_REQUESTS} style={{ color: "#222", fontWeight: "600" }}>
                        Manage appointments
                    </Link>
                    <Link to={ROUTES.DOCTOR_PATIENT_HISTORY}>Patient records</Link>
                    <Link to={ROUTES.DOCTOR_RATINGS}>Monitor ratings</Link>
                    <Link to={ROUTES.DOCTOR_ABOUT}>About Us</Link>
                </nav>

                <div className="homepage-nav">
                    <Link to={ROUTES.DOCTOR_PROFILE} className="homepage-Sign-Up-btn">
                        <button
                            style={{
                                background: "transparent",
                                color: "#222",
                                border: "1px solid #ddd",
                                padding: "10px 20px",
                                fontSize: "1rem",
                            }}
                        >
                            Profile
                        </button>
                    </Link>
                    <Link to={ROUTES.USER_LOGIN}>
                        <button className="homepage-login-btn, margin-left:0;">Logout</button>
                    </Link>
                    <Link to={ROUTES.DOCTOR_SETTINGS}>
                        <div style={{ width: "32px", height: "32px", color: "#666",cursor: "pointer" }}>
                            <img src="/settings-icon.png" alt="settings butoon" />
                        </div>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "48px 32px",
                }}
            >
                <h1
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        color: "#222",
                        marginBottom: "32px",
                    }}
                >
                    PATIENT RECORDS
                </h1>

                {/* Patient Cards Container */}
                <div
                    style={{
                        border: "2px solid #333",
                        borderRadius: "16px",
                        padding: "32px",
                        backgroundColor: "white",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "24px",
                        }}
                    >
                        {patients.map((patient) => (
                            <div
                                key={patient.id}
                                style={{
                                    border: "2px solid #333",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    backgroundColor: "#f8f9fa",
                                    position: "relative",
                                }}
                            >
                                <div style={{ marginBottom: "16px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                                                <strong>Patients Name:</strong> {patient.name}
                                            </p>
                                            <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                                                <strong>Age:</strong> {patient.age}
                                            </p>
                                            <p style={{ margin: "0", fontSize: "0.95rem" }}>
                                                <strong>Condition:</strong> {patient.condition}
                                            </p>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <p style={{ margin: "0 0 16px 0", fontSize: "0.95rem" }}>
                                                <strong>Last visit:</strong> {patient.lastVisit}
                                            </p>
                                            <button
                                                onClick={() => handleViewDetails(patient)}
                                                style={{
                                                    backgroundColor: "#2196f3",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "6px",
                                                    padding: "8px 16px",
                                                    fontSize: "0.9rem",
                                                    cursor: "pointer",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                View details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
