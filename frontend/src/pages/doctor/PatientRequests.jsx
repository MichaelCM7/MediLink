"use client"

import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function ManageAppointments() {
    const [upcomingAppointments] = useState([
        {
            id: 1,
            patientName: "Jane Doe",
            phoneNumber: "0712345678",
            date: "27th September 2025",
            time: "13:10 - 14:00",
        },
        {
            id: 2,
            patientName: "Mary Jane",
            phoneNumber: "0712545678",
            date: "27th September 2025",
            time: "11:10 - 12:00",
        },
        {
            id: 3,
            patientName: "Jack Stones",
            phoneNumber: "0722345678",
            date: "27th September 2025",
            time: "8:00 - 9:00",
        },
        {
            id: 4,
            patientName: "Harry Mason",
            phoneNumber: "0712245678",
            date: "27th September 2025",
            time: "14:00 - 14:30",
        },
        {
            id: 5,
            patientName: "Jeniffer Mayers",
            phoneNumber: "0712355678",
            date: "27th September 2025",
            time: "10:0 - 11:00",
        },
    ])

    const [pendingAppointments, setPendingAppointments] = useState([
            {
                id: 6,
                patientName: "Alice Mwangi",
                phoneNumber: "0721456789",
                date: "15th August 2025",
                time: "09:30 - 10:15"
            },
            {
                id: 7,
                patientName: "Brian Kamau",
                phoneNumber: "0743987654",
                date: "22nd September 2025",
                time: "11:00 - 11:45"
            },
            {
                id: 8,
                patientName: "Cynthia Otieno",
                phoneNumber: "0702567890",
                date: "5th October 2025",
                time: "14:20 - 15:00"
            },
            {
                id: 9,
                patientName: "David Njoroge",
                phoneNumber: "0718345671",
                date: "19th July 2025",
                time: "16:00 - 16:40"
            },
            {
                id: 10,
                patientName: "Esther Wanjiku",
                phoneNumber: "0791765432",
                date: "30th November 2025",
                time: "08:15 - 09:00"
            }
    ])

    const handleCallPatient = (appointment) => {
        alert(`Calling ${appointment.patientName} at ${appointment.phoneNumber}`)
    }

    const handleSeeDetails = (appointment) => {
        alert(`Viewing details for ${appointment.patientName}`)
    }

    const handleApprove = (appointmentId) => {
        setPendingAppointments((prev) => prev.filter((apt) => apt.id !== appointmentId))
        alert("Appointment approved!")
    }

    const handleCancel = (appointmentId) => {
        setPendingAppointments((prev) => prev.filter((apt) => apt.id !== appointmentId))
        alert("Appointment cancelled!")
    }

    const navigate = useNavigate();

    const profileNavigationBtn = () => {
        navigate("/doctor/profile");
    };

    const logoutNavigationBtn = () => {
        navigate("/");
    }

    const doctorSettingsNavigationBtn = () => {
        navigate("/doctor/settings");
    }

    return (
        <div className="homepage-root">
            {/* Header */}
            <header className="homepage-header">
                <div className="homepage-logo">
                    <img src="/MediLink.png" alt="Medilink Logo" className="homepage-logo-img"/>
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

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <button onClick={profileNavigationBtn}
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
                    <button onClick={logoutNavigationBtn} className="homepage-login-btn">Logout</button>
                    <div style={{ width: "32px", height: "32px", color: "#666",cursor: "pointer" }}>
                        <img src="/settings-icon.png" alt="settings butoon" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "32px",
                }}
            >
                {/* Greeting */}
                <h1
                    style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#222",
                        marginBottom: "32px",
                    }}
                >
                    Good Morning Dr.Doe
                </h1>

                {/* Main Layout */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "32px",
                        height: "calc(100vh - 200px)",
                    }}
                >
                    {/* Left Column */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {/* Appointment Overview */}
                        <div
                            style={{
                                border: "2px solid #333",
                                borderRadius: "12px",
                                padding: "24px",
                                backgroundColor: "white",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "600",
                                    color: "#222",
                                    marginBottom: "20px",
                                }}
                            >
                                Appointment Overview
                            </h2>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: "16px",
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "#2196f3",
                                        color: "white",
                                        padding: "20px",
                                        borderRadius: "12px",
                                        textAlign: "center",
                                    }}
                                >
                                    <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "8px" }}>20</div>
                                    <div style={{ fontSize: "0.9rem" }}>Today's Visits</div>
                                </div>

                                <div
                                    style={{
                                        backgroundColor: "#2196f3",
                                        color: "white",
                                        padding: "20px",
                                        borderRadius: "12px",
                                        textAlign: "center",
                                    }}
                                >
                                    <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "8px" }}>10</div>
                                    <div style={{ fontSize: "0.9rem" }}>New patients</div>
                                </div>

                                <div
                                    style={{
                                        backgroundColor: "#2196f3",
                                        color: "white",
                                        padding: "20px",
                                        borderRadius: "12px",
                                        textAlign: "center",
                                    }}
                                >
                                    <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "8px" }}>10</div>
                                    <div style={{ fontSize: "0.9rem" }}>Old patients</div>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Appointments */}
                        <div
                            style={{
                                border: "2px solid #333",
                                borderRadius: "12px",
                                padding: "24px",
                                backgroundColor: "white",
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "600",
                                    color: "#222",
                                    marginBottom: "20px",
                                }}
                            >
                                Upcoming Appointments
                            </h2>

                            <div
                                style={{
                                    flex: 1,
                                    overflowY: "auto",
                                    maxHeight: "560px",
                                    paddingRight: "8px",
                                }}
                            >
                                {upcomingAppointments.map((appointment) => (
                                    <div
                                        key={appointment.id}
                                        style={{
                                            border: "1px solid #ddd",
                                            borderRadius: "8px",
                                            padding: "16px",
                                            marginBottom: "12px",
                                            backgroundColor: "#f8f9fa",
                                        }}
                                    >
                                        <div style={{ marginBottom: "12px" }}>
                                            <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                                                <strong>Patient Name:</strong> {appointment.patientName}
                                            </p>
                                            <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                                                <strong>Phone Number:</strong> {appointment.phoneNumber}
                                            </p>
                                            <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                                                <strong>Date:</strong> {appointment.date}
                                            </p>
                                            <p style={{ margin: "0", fontSize: "0.9rem" }}>
                                                <strong>Time:</strong> {appointment.time}
                                            </p>
                                        </div>

                                        <div style={{ display: "flex", gap: "8px" }}>
                                            <button
                                                onClick={() => handleCallPatient(appointment)}
                                                style={{
                                                    backgroundColor: "#2196f3",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "6px",
                                                    padding: "8px 16px",
                                                    fontSize: "0.85rem",
                                                    cursor: "pointer",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Call Patient
                                            </button>
                                            <button
                                                onClick={() => handleSeeDetails(appointment)}
                                                style={{
                                                    backgroundColor: "#2196f3",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "6px",
                                                    padding: "8px 16px",
                                                    fontSize: "0.85rem",
                                                    cursor: "pointer",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                See Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Appointments Awaiting Approval */}
                    <div
                        style={{
                            border: "2px solid #333",
                            borderRadius: "12px",
                            padding: "24px",
                            backgroundColor: "white",
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            overflowY: "auto",
                            maxHeight: "920px",
                            paddingRight: "8px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                color: "#222",
                                marginBottom: "20px",
                            }}
                        >
                            Appointments Awaiting Approval
                        </h2>

                        <div
                            style={{
                                flex: 1,
                                overflowY: "auto",
                                paddingRight: "8px",
                            }}
                        >
                            {pendingAppointments.map((appointment) => (
                                <div
                                    key={appointment.id}
                                    style={{
                                        border: "1px solid #ddd",
                                        borderRadius: "8px",
                                        padding: "16px",
                                        marginBottom: "12px",
                                        backgroundColor: "#f8f9fa",
                                    }}
                                >
                                    <div style={{ marginBottom: "12px" }}>
                                        <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                                            <strong>Patient Name:</strong> {appointment.patientName}
                                        </p>
                                        <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                                            <strong>Phone Number:</strong> {appointment.phoneNumber}
                                        </p>
                                        <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                                            <strong>Date:</strong> {appointment.date}
                                        </p>
                                        <p style={{ margin: "0", fontSize: "0.9rem" }}>
                                            <strong>Time:</strong> {appointment.time}
                                        </p>
                                    </div>

                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <button
                                            onClick={() => handleApprove(appointment.id)}
                                            style={{
                                                backgroundColor: "#2196f3",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "6px",
                                                padding: "8px 16px",
                                                fontSize: "0.85rem",
                                                cursor: "pointer",
                                                fontWeight: "500",
                                            }}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => handleCancel(appointment.id)}
                                            style={{
                                                backgroundColor: "#2196f3",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "6px",
                                                padding: "8px 16px",
                                                fontSize: "0.85rem",
                                                cursor: "pointer",
                                                fontWeight: "500",
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
