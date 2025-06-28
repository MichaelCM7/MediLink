"use client"

import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";
import React from "react";

export default function MedicalReport({ report, onBack }) {
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
        <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 32px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: "32px" }}>MEDICAL REPORT</h1>

          {/* Medical Report Container */}
          <div style={{ border: "2px solid #333", borderRadius: "16px", padding: "40px", backgroundColor: "white" }}>
            {/* Appointment Details */}
            <div style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#222", marginBottom: "16px" }}>
                Appointment Details
              </h2>
              <div
                  style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px", backgroundColor: "#f8f9fa" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                      <strong>Doctor's Name:</strong> {report.doctorName}
                    </p>
                    <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                      <strong>Hospital:</strong> {report.hospital}
                    </p>
                    <p style={{ margin: "0", fontSize: "0.95rem" }}>
                      <strong>Department:</strong> {report.department}
                    </p>
                  </div>
                  <div>
                    <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                      <strong>Appointment Date:</strong> {report.appointmentDate}
                    </p>
                    <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                      <strong>Appointment Time:</strong> {report.appointmentTime}
                    </p>
                    <p style={{ margin: "0", fontSize: "0.95rem" }}>
                      <strong>Previous Appointment:</strong> {report.previousAppointment}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Details */}
            <div style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#222", marginBottom: "16px" }}>
                Patient Details
              </h2>
              <div
                  style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px", backgroundColor: "#f8f9fa" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                      <strong>Name:</strong> {report.patientName}
                    </p>
                    <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                      <strong>Gender:</strong> {report.patientGender}
                    </p>
                    <p style={{ margin: "0", fontSize: "0.95rem" }}>
                      <strong>Age:</strong> {report.patientAge}
                    </p>
                  </div>
                  <div>
                    <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                      <strong>Condition:</strong> {report.condition}
                    </p>
                    <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                      <strong>Reported Symptoms:</strong> {report.symptoms}
                    </p>
                    <p style={{ margin: "0", fontSize: "0.95rem" }}>
                      <strong>Allergies:</strong> {report.allergies}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnosis */}
            <div style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#222", marginBottom: "16px" }}>Diagnosis</h2>
              <div
                  style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px", backgroundColor: "#f8f9fa" }}
              >
                <p style={{ margin: "0", fontSize: "0.95rem" }}>{report.diagnosis}</p>
              </div>
            </div>

            {/* Doctor's Notes */}
            <div style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#222", marginBottom: "16px" }}>
                Doctor's Notes
              </h2>
              <div
                  style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px", backgroundColor: "#f8f9fa" }}
              >
                <p style={{ margin: "0", fontSize: "0.95rem" }}>{report.doctorNotes}</p>
              </div>
            </div>

            {/* Back Button */}
            <div style={{ textAlign: "right" }}>
              <button
                  onClick={onBack}
                  style={{
                    backgroundColor: "#2196f3",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    padding: "12px 24px",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
              >
                Back
              </button>
            </div>
          </div>
        </main>
      </div>
  )
}
