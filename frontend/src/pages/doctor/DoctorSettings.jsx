"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    newAppointments: true,
    appointmentReminders: true,
  })

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const handleNotificationToggle = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  const handlePasswordChange = (field, value) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleUpdatePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match!")
      return
    }
    alert("Password updated successfully!")
    setPasswords({ current: "", new: "", confirm: "" })
  }

  const handleSaveSettings = () => {
    alert("Settings saved successfully!")
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
              maxWidth: "1000px",
              margin: "0 auto",
              padding: "48px 32px",
            }}
        >
          {/* Page Title */}
          <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#222",
                marginBottom: "32px",
              }}
          >
            SETTINGS
          </h1>

          {/* Settings Container */}
          <div
              style={{
                border: "2px solid #333",
                borderRadius: "16px",
                padding: "40px",
                backgroundColor: "white",
              }}
          >
            {/* Notification Preferences Section */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "24px",
                  }}
              >
                Notification Preferences
              </h2>

              {/* New Appointments */}
              <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "24px",
                  }}
              >
                <div>
                  <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#222",
                        marginBottom: "4px",
                      }}
                  >
                    New Appointments
                  </h3>
                  <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        margin: "0",
                      }}
                  >
                    Get notified when patients book appointments
                  </p>
                </div>

                {/* Toggle Switch */}
                <div
                    onClick={() => handleNotificationToggle("newAppointments")}
                    style={{
                      width: "50px",
                      height: "26px",
                      backgroundColor: notifications.newAppointments ? "#2196f3" : "#ccc",
                      borderRadius: "13px",
                      position: "relative",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                >
                  <div
                      style={{
                        width: "22px",
                        height: "22px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "2px",
                        left: notifications.newAppointments ? "26px" : "2px",
                        transition: "left 0.3s",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                  />
                </div>
              </div>

              {/* Appointment Reminders */}
              <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
              >
                <div>
                  <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#222",
                        marginBottom: "4px",
                      }}
                  >
                    Appointment Reminders
                  </h3>
                  <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        margin: "0",
                      }}
                  >
                    Reminders for upcoming appointments
                  </p>
                </div>

                {/* Toggle Switch */}
                <div
                    onClick={() => handleNotificationToggle("appointmentReminders")}
                    style={{
                      width: "50px",
                      height: "26px",
                      backgroundColor: notifications.appointmentReminders ? "#2196f3" : "#ccc",
                      borderRadius: "13px",
                      position: "relative",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                >
                  <div
                      style={{
                        width: "22px",
                        height: "22px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "2px",
                        left: notifications.appointmentReminders ? "26px" : "2px",
                        transition: "left 0.3s",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                  />
                </div>
              </div>
            </div>

            {/* Change Password Section */}
            <div>
              <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "24px",
                  }}
              >
                Change Password
              </h2>

              {/* Password Fields */}
              <div style={{ marginBottom: "32px" }}>
                <input
                    type="password"
                    placeholder="Current Password"
                    value={passwords.current}
                    onChange={(e) => handlePasswordChange("current", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      marginBottom: "16px",
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

                <input
                    type="password"
                    placeholder="New Password"
                    value={passwords.new}
                    onChange={(e) => handlePasswordChange("new", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      marginBottom: "16px",
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

                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={passwords.confirm}
                    onChange={(e) => handlePasswordChange("confirm", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
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

              {/* Action Buttons */}
              <div
                  style={{
                    display: "flex",
                    gap: "16px",
                  }}
              >
                <button
                    onClick={handleUpdatePassword}
                    style={{
                      backgroundColor: "transparent",
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
                  Update Password
                </button>
                <button
                    onClick={handleSaveSettings}
                    className="homepage-hero-actions primary"
                    style={{
                      padding: "12px 24px",
                      fontSize: "1rem",
                    }}
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}
