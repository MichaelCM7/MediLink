"use client"

import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";
import React from "react";

export default function PatientDetails({ patient, onBack }) {
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            color: "#222",
                            margin: "0",
                        }}
                    >
                        {patient.name.toUpperCase()}
                    </h1>
                    <button
                        onClick={onBack}
                        style={{
                            backgroundColor: "transparent",
                            color: "#222",
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            padding: "8px 16px",
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            fontWeight: "500",
                        }}
                    >
                        Back
                    </button>
                </div>

                {/* Patient Details Container */}
                <div
                    style={{
                        border: "2px solid #333",
                        borderRadius: "16px",
                        padding: "40px",
                        backgroundColor: "white",
                    }}
                >
                    <div style={{ fontSize: "1.1rem", lineHeight: "2.5" }}>
                        <div style={{ marginBottom: "20px" }}>
                            <strong>Age:</strong> {patient.age}
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <strong>Date of Birth:</strong> {patient.dateOfBirth}
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <strong>Gender:</strong> {patient.gender}
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <strong>Phone number:</strong> {patient.phone}
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <strong>Address:</strong> {patient.address}
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <strong>Condition:</strong> {patient.condition}
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <strong>Medical history:</strong> {patient.medicalHistory}
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <strong>Last visit:</strong> {patient.lastVisit}
                        </div>

                        <div style={{ marginBottom: "0" }}>
                            <strong style={{ color: "#f44336" }}>Allergies:</strong>{" "}
                            <span style={{ color: "#f44336" }}>{patient.allergies}</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
