"use client"

import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";
import React from "react";

export default function Profile() {
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
          {/* Profile Header */}
          <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
              }}
          >
            <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#222",
                  margin: "0",
                }}
            >
              Profile
            </h1>
            <button
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
              Edit profile
            </button>
          </div>

          {/* Profile Card */}
          <div
              style={{
                backgroundColor: "white",
                border: "2px solid #333",
                borderRadius: "12px",
                padding: "40px",
              }}
          >
            {/* Hospital Info */}
            <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px",
                }}
            >
              <div
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#e3f2fd",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
              >
                <div
                    style={{
                      fontSize: "32px",
                      color: "#2196f3",
                    }}
                >
                  👤
                </div>
              </div>
              <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#222",
                    margin: "0",
                  }}
              >
                ABC Hospital
              </h2>
            </div>

            {/* Form Fields */}
            <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "24px",
                  marginBottom: "24px",
                }}
            >
              {/* Full name */}
              <div>
                <label
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                >
                  Full name
                </label>
                <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#2196f3"
                      e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                />
              </div>

              {/* Staff Id */}
              <div>
                <label
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                >
                  Staff Id
                </label>
                <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#2196f3"
                      e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                />
              </div>

              {/* Specialization */}
              <div>
                <label
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                >
                  Specialization
                </label>
                <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#2196f3"
                      e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                />
              </div>

              {/* Date Joined */}
              <div>
                <label
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                >
                  Date Joined
                </label>
                <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#2196f3"
                      e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                />
              </div>
            </div>

            {/* Biography */}
            <div>
              <label
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
              >
                Biography
              </label>
              <textarea
                  rows={4}
                  placeholder="Enter your biography..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    outline: "none",
                    resize: "none",
                    fontFamily: "inherit",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2196f3"
                    e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db"
                    e.target.style.boxShadow = "none"
                  }}
              />
            </div>

            {/* Save Button */}
            <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                }}
            >
              <button
                  style={{
                    backgroundColor: "white",
                    color: "#666",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    padding: "12px 24px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    fontWeight: "500",
                    marginBottom: "18px",
                  }}
              >
                Cancel
              </button>
              <button
                  className="homepage-hero-actions primary"
                  style={{
                    padding: "12px 24px",
                    fontSize: "1rem",
                  }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
  )
}
