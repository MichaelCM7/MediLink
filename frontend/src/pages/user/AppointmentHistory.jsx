"use client"

import React, { useState } from "react"
import MedicalReport from "./MedicalHistory.jsx"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function MedicalHistory() {
  const [selectedReport, setSelectedReport] = useState(null)

  const medicalHistory = [
    {
      id: 1,
      doctorName: "John Doe",
      date: "May 22, 2025",
      hospital: "Nairobi Hospital",
      department: "Cardiology",
      time: "11:30 AM",
      status: "Completed",
      appointmentDate: "May 22, 2025",
      appointmentTime: "11:30 AM",
      previousAppointment: "April 28, 2025",
      patientName: "James Mark",
      patientGender: "Male",
      patientAge: 25,
      condition: "Asthma",
      symptoms: "Shortness of breath",
      allergies: "Nuts",
      diagnosis: "Hypertension follow-up",
      doctorNotes: "Blood pressure stable, continue medication",
    },
    {
      id: 2,
      doctorName: "Kim Dean",
      date: "May 2, 2025",
      hospital: "Karen Hospital",
      department: "Radiology",
      time: "10:00 AM",
      status: "Completed",
      appointmentDate: "May 2, 2025",
      appointmentTime: "10:00 AM",
      previousAppointment: "April 15, 2025",
      patientName: "Sarah Johnson",
      patientGender: "Female",
      patientAge: 32,
      condition: "Migraine",
      symptoms: "Severe headaches",
      allergies: "Penicillin",
      diagnosis: "Chronic migraine",
      doctorNotes: "Prescribed new medication, follow up in 2 weeks",
    },
    {
      id: 3,
      doctorName: "James Ali",
      date: "April 12, 2025",
      hospital: "Nairobi Hospital",
      department: "Dermatology",
      time: "11:30 AM",
      status: "Cancelled",
      appointmentDate: "April 12, 2025",
      appointmentTime: "11:30 AM",
      previousAppointment: "March 20, 2025",
      patientName: "Michael Brown",
      patientGender: "Male",
      patientAge: 28,
      condition: "Eczema",
      symptoms: "Skin irritation",
      allergies: "None",
      diagnosis: "Atopic dermatitis",
      doctorNotes: "Treatment plan adjusted",
    },
    {
      id: 4,
      doctorName: "John Doe",
      date: "April 10, 2025",
      hospital: "Nairobi Hospital",
      department: "Cardiology",
      time: "11:30 AM",
      status: "Completed",
      appointmentDate: "April 10, 2025",
      appointmentTime: "11:30 AM",
      previousAppointment: "March 15, 2025",
      patientName: "Lisa Wilson",
      patientGender: "Female",
      patientAge: 45,
      condition: "Hypertension",
      symptoms: "High blood pressure",
      allergies: "Sulfa drugs",
      diagnosis: "Essential hypertension",
      doctorNotes: "Blood pressure well controlled",
    },
    {
      id: 5,
      doctorName: "Ray Kay",
      date: "April 5, 2025",
      hospital: "Nairobi Hospital",
      department: "Cardiology",
      time: "11:30 AM",
      status: "Completed",
      appointmentDate: "April 5, 2025",
      appointmentTime: "11:30 AM",
      previousAppointment: "March 10, 2025",
      patientName: "David Lee",
      patientGender: "Male",
      patientAge: 38,
      condition: "Diabetes",
      symptoms: "Frequent urination",
      allergies: "None",
      diagnosis: "Type 2 diabetes",
      doctorNotes: "Blood sugar levels improving",
    },
    {
      id: 6,
      doctorName: "Sally Sue",
      date: "April 1, 2025",
      hospital: "Aga Khan Hospital",
      department: "ENT",
      time: "11:30 AM",
      status: "Cancelled",
      appointmentDate: "April 1, 2025",
      appointmentTime: "11:30 AM",
      previousAppointment: "March 5, 2025",
      patientName: "Emma Davis",
      patientGender: "Female",
      patientAge: 29,
      condition: "Sinusitis",
      symptoms: "Nasal congestion",
      allergies: "Dust",
      diagnosis: "Chronic sinusitis",
      doctorNotes: "Recommended surgery consultation",
    },
    {
      id: 7,
      doctorName: "John Doe",
      date: "March 1, 2025",
      hospital: "Nairobi Hospital",
      department: "Cardiology",
      time: "11:30 AM",
      status: "Completed",
      appointmentDate: "March 1, 2025",
      appointmentTime: "11:30 AM",
      previousAppointment: "February 15, 2025",
      patientName: "Robert Taylor",
      patientGender: "Male",
      patientAge: 52,
      condition: "Heart disease",
      symptoms: "Chest pain",
      allergies: "Aspirin",
      diagnosis: "Coronary artery disease",
      doctorNotes: "Scheduled for cardiac catheterization",
    },
    {
      id: 8,
      doctorName: "John Doe",
      date: "March 1, 2025",
      hospital: "Nairobi Hospital",
      department: "Image",
      time: "11:30 AM",
      status: "Completed",
      appointmentDate: "March 1, 2025",
      appointmentTime: "11:30 AM",
      previousAppointment: "February 10, 2025",
      patientName: "Jennifer White",
      patientGender: "Female",
      patientAge: 41,
      condition: "Arthritis",
      symptoms: "Joint pain",
      allergies: "Ibuprofen",
      diagnosis: "Rheumatoid arthritis",
      doctorNotes: "Started on new medication regimen",
    },
  ]

  const handleViewReport = (report) => {
    setSelectedReport(report)
  }

  const handleBack = () => {
    setSelectedReport(null)
  }

  if (selectedReport) {
    return <MedicalReport report={selectedReport} onBack={handleBack} />
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
            <Link to={ROUTES.USER_DASHBOARD} style={{ color: "#222", fontWeight: "600" }}>
              Home
            </Link>
            <Link to={ROUTES.USER_SERVICES}>Services</Link>
            <Link to={ROUTES.USER_REVIEWS}>Ratings & Review</Link>
            <Link to={ROUTES.USER_APPOINTMENT_HISTORY}>History</Link>
            <Link to={ROUTES.USER_ABOUT}>About</Link>
            <Link to={ROUTES.USER_EMERGENCY} style={{ color: "#f44336" }}>
              Report Emergency
            </Link>
          </nav>

          <div className="homepage-nav">
            <Link to={ROUTES.USER_PROFILE} className="homepage-Sign-Up-btn">
              <button
                  style={{
                    background: "transparent",
                    color: "#222",
                    border: "1px solid #ddd",
                    padding: "11.5px 20px",
                    fontSize: "1rem",
                  }}
              >
                Profile
              </button>
            </Link>
            <Link to={ROUTES.USER_LOGIN}>
              <button className="homepage-login-btn, margin-left:0;">Logout</button>
            </Link>
            <Link to={ROUTES.USER_SETTINGS}>
              <div style={{ width: "32px", height: "32px", color: "#666",cursor: "pointer" }}>
                <img src="/settings-icon.png" alt="settings butoon" />
              </div>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: "32px" }}>HISTORY</h1>

          {/* History Cards Container */}
          <div style={{ border: "2px solid #333", borderRadius: "16px", padding: "32px", backgroundColor: "white" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
              {medicalHistory.map((record) => (
                  <div
                      key={record.id}
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        padding: "20px",
                        backgroundColor: "#f8f9fa",
                      }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "16px", alignItems: "start" }}>
                      <div>
                        <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                          <strong>Doctor's Name:</strong> {record.doctorName}
                        </p>
                        <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                          <strong>Date:</strong> {record.date}
                        </p>
                        <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                          <strong>Hospital:</strong> {record.hospital}
                        </p>
                        <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                          <strong>Department:</strong> {record.department}
                        </p>
                        <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                          <strong>Time:</strong> {record.time}
                        </p>
                        <p style={{ margin: "0", fontSize: "0.9rem" }}>
                          <strong>Status:</strong>{" "}
                          <span style={{ color: record.status === "Completed" ? "#16a34a" : "#dc2626" }}>
                        {record.status}
                      </span>
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <button
                            onClick={() => handleViewReport(record)}
                            style={{
                              backgroundColor: "#2196f3",
                              color: "white",
                              border: "none",
                              borderRadius: "6px",
                              padding: "8px 16px",
                              fontSize: "0.85rem",
                              cursor: "pointer",
                              fontWeight: "500",
                              whiteSpace: "nowrap",
                            }}
                        >
                          View Report
                        </button>
                        <button
                            style={{
                              backgroundColor: "transparent",
                              color: "#2196f3",
                              border: "1px solid #2196f3",
                              borderRadius: "6px",
                              padding: "8px 16px",
                              fontSize: "0.85rem",
                              cursor: "pointer",
                              fontWeight: "500",
                              whiteSpace: "nowrap",
                            }}
                        >
                          Rate & Review
                        </button>
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
