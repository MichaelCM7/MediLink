"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function PatientProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@email.com",
    phone: "0712345678",
    dateOfBirth: "1990-03-15",
    gender: "female",
    address: "123 Main Street",
    city: "Nairobi",
    state: "Nairobi County",
    zipCode: "00100",
    emergencyContact: "John Doe",
    emergencyPhone: "0798765432",
    bloodType: "A+",
    allergies: "Penicillin, Shellfish",
    medications: "Lisinopril 10mg daily, Metformin 500mg twice daily",
    insurance: "NHIF - National Hospital Insurance Fund",
    medicalHistory: "Hypertension, Type 2 Diabetes",
    primaryDoctor: "Dr. Smith - Cardiology",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMessage("Profile updated successfully!")
      setIsEditing(false)
    } catch (error) {
      setMessage("An error occurred while updating profile")
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setMessage("")
    // Reset form data to original values
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
                backgroundColor: "white",
                border: "2px solid #333",
                borderRadius: "12px",
                padding: "32px",
                marginBottom: "32px",
              }}
          >
            <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
            >
              <div>
                <h1
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#222",
                      margin: "0 0 8px 0",
                    }}
                >
                  My Profile
                </h1>
                <p
                    style={{
                      color: "#666",
                      fontSize: "1rem",
                      margin: "0",
                    }}
                >
                  Manage your personal and medical information
                </p>
              </div>

              {!isEditing ? (
                  <button
                      onClick={() => setIsEditing(true)}
                      className="homepage-hero-actions primary"
                      style={{
                        padding: "12px 24px",
                        fontSize: "1rem",
                      }}
                  >
                    Edit Profile
                  </button>
              ) : (
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button
                        onClick={handleCancel}
                        style={{
                          backgroundColor: "transparent",
                          color: "#666",
                          border: "1px solid #ddd",
                          borderRadius: "6px",
                          padding: "12px 24px",
                          fontSize: "1rem",
                          cursor: "pointer",
                          fontWeight: "500",
                        }}
                    >
                      Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="homepage-hero-actions primary"
                        style={{
                          padding: "12px 24px",
                          fontSize: "1rem",
                          opacity: loading ? "0.5" : "1",
                        }}
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
              )}
            </div>

            {message && (
                <div
                    style={{
                      marginTop: "16px",
                      padding: "12px",
                      borderRadius: "6px",
                      backgroundColor: message.includes("success") ? "#d4edda" : "#f8d7da",
                      color: message.includes("success") ? "#155724" : "#721c24",
                      border: `1px solid ${message.includes("success") ? "#c3e6cb" : "#f5c6cb"}`,
                    }}
                >
                  {message}
                </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div
                style={{
                  backgroundColor: "white",
                  border: "2px solid #333",
                  borderRadius: "12px",
                  padding: "32px",
                  marginBottom: "32px",
                }}
            >
              <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "24px",
                  }}
              >
                Personal Information
              </h2>

              <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "24px",
                  }}
              >
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
                    First Name
                  </label>
                  <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>

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
                    Last Name
                  </label>
                  <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>

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
                    Email
                  </label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>

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
                    Phone
                  </label>
                  <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>

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
                    Date of Birth
                  </label>
                  <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>

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
                    Gender
                  </label>
                  <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

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
                    Address
                  </label>
                  <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>

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
                    City
                  </label>
                  <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact Information */}
            <div
                style={{
                  backgroundColor: "white",
                  border: "2px solid #333",
                  borderRadius: "12px",
                  padding: "32px",
                  marginBottom: "32px",
                }}
            >
              <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "24px",
                  }}
              >
                Emergency Contact
              </h2>

              <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "24px",
                  }}
              >
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
                    Emergency Contact Name
                  </label>
                  <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>

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
                    Emergency Contact Phone
                  </label>
                  <input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div
                style={{
                  backgroundColor: "white",
                  border: "2px solid #333",
                  borderRadius: "12px",
                  padding: "32px",
                }}
            >
              <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "24px",
                  }}
              >
                Medical Information
              </h2>

              <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "24px",
                    marginBottom: "24px",
                  }}
              >
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
                    Blood Type
                  </label>
                  <select
                      name="bloodType"
                      value={formData.bloodType}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  >
                    <option value="">Select blood type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

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
                    Insurance Provider
                  </label>
                  <input
                      type="text"
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>

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
                    Primary Doctor
                  </label>
                  <input
                      type="text"
                      name="primaryDoctor"
                      value={formData.primaryDoctor}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        outline: "none",
                        backgroundColor: !isEditing ? "#f9f9f9" : "white",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        if (isEditing) {
                          e.target.style.borderColor = "#2196f3"
                          e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db"
                        e.target.style.boxShadow = "none"
                      }}
                  />
                </div>
              </div>

              {/* Medical History */}
              <div style={{ marginBottom: "24px" }}>
                <label
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                >
                  Medical History
                </label>
                <textarea
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={handleChange}
                    disabled={!isEditing}
                    rows={3}
                    placeholder="List any chronic conditions, past surgeries, or significant medical history..."
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      resize: "none",
                      fontFamily: "inherit",
                      backgroundColor: !isEditing ? "#f9f9f9" : "white",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) => {
                      if (isEditing) {
                        e.target.style.borderColor = "#2196f3"
                        e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                />
              </div>

              {/* Allergies */}
              <div style={{ marginBottom: "24px" }}>
                <label
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                >
                  Allergies
                </label>
                <textarea
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    disabled={!isEditing}
                    rows={3}
                    placeholder="List any allergies to medications, foods, or other substances..."
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      resize: "none",
                      fontFamily: "inherit",
                      backgroundColor: !isEditing ? "#f9f9f9" : "white",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) => {
                      if (isEditing) {
                        e.target.style.borderColor = "#2196f3"
                        e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                />
              </div>

              {/* Current Medications */}
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
                  Current Medications
                </label>
                <textarea
                    name="medications"
                    value={formData.medications}
                    onChange={handleChange}
                    disabled={!isEditing}
                    rows={3}
                    placeholder="List current medications with dosages and frequency..."
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      outline: "none",
                      resize: "none",
                      fontFamily: "inherit",
                      backgroundColor: !isEditing ? "#f9f9f9" : "white",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) => {
                      if (isEditing) {
                        e.target.style.borderColor = "#2196f3"
                        e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                />
              </div>
            </div>
          </form>
        </main>
      </div>
  )
}
