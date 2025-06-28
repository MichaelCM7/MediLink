"use client"

import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";
import React from "react";

export default function AdminProfile() {
    return (
        <div className="homepage-root">
            {/* Header */}
            <header className="homepage-header">
                <div className="homepage-logo">
                    <img src="/MediLink.png" alt="MediLink Logo" className="homepage-logo-img" />
                    <span className="homepage-logo-text">MEDILINK</span>
                </div>

                <nav className="homepage-nav">
                    <Link to={ROUTES.ADMIN_DASHBOARD} className="hover:text-blue-600">Home</Link>
                    <Link to={ROUTES.ADMIN_APPOINTMENT_OVERVIEW} className="hover:text-blue-600">Appointments Overview</Link>
                    <Link to={ROUTES.ADMIN_EMERGENCY_ALERTS} className="hover:text-blue-600">Emergency Alerts</Link>
                    <Link to={ROUTES.ADMIN_USER_MANAGEMENT} className="homepage-Doctor_Ratings-btn">User Management</Link>
                    <Link to={ROUTES.ADMIN_RATINGS} className="hover:text-blue-600">Ratings</Link>
                </nav>

                <div className="homepage-nav">
                    <Link to={ROUTES.ADMIN_PROFILE} className="homepage-Sign-Up-btn">
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
                    <Link to={ROUTES.ADMIN_SETTINGS}>
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
                        Admin Profile
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
                    {/* Admin Info */}
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
                                👨‍💼
                            </div>
                        </div>
                        <div>
                            <h2
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "600",
                                    color: "#222",
                                    margin: "0 0 4px 0",
                                }}
                            >
                                System Administrator
                            </h2>
                            <p
                                style={{
                                    color: "#666",
                                    margin: "0",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Hospital Management System
                            </p>
                        </div>
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
                                Full Name
                            </label>
                            <input
                                type="text"
                                defaultValue="John Smith"
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

                        {/* Admin ID */}
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
                                Admin ID
                            </label>
                            <input
                                type="text"
                                defaultValue="ADM001"
                                disabled
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    outline: "none",
                                    backgroundColor: "#f9fafb",
                                    color: "#6b7280",
                                }}
                            />
                        </div>

                        {/* Email */}
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
                                Email Address
                            </label>
                            <input
                                type="email"
                                defaultValue="admin@medilink.com"
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

                        {/* Phone */}
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
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                defaultValue="+1 (555) 123-4567"
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

                        {/* Department */}
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
                                Department
                            </label>
                            <select
                                defaultValue="IT Administration"
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    outline: "none",
                                    transition: "border-color 0.2s, box-shadow 0.2s",
                                    backgroundColor: "white",
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = "#2196f3"
                                    e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)"
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "#d1d5db"
                                    e.target.style.boxShadow = "none"
                                }}
                            >
                                <option value="IT Administration">IT Administration</option>
                                <option value="Hospital Management">Hospital Management</option>
                                <option value="System Operations">System Operations</option>
                                <option value="Data Management">Data Management</option>
                            </select>
                        </div>

                        {/* Access Level */}
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
                                Access Level
                            </label>
                            <input
                                type="text"
                                defaultValue="Super Administrator"
                                disabled
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    outline: "none",
                                    backgroundColor: "#f9fafb",
                                    color: "#6b7280",
                                }}
                            />
                        </div>
                    </div>

                    {/* System Permissions */}
                    <div style={{ marginBottom: "24px" }}>
                        <h3
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: "600",
                                color: "#222",
                                marginBottom: "16px",
                            }}
                        >
                            System Permissions
                        </h3>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                gap: "12px",
                            }}
                        >
                            {[
                                "User Management",
                                "Appointment Management",
                                "Emergency Alerts",
                                "System Settings",
                                "Data Export",
                                "Backup Management",
                                "Analytics Access",
                                "Security Controls",
                            ].map((permission) => (
                                <div
                                    key={permission}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "8px 12px",
                                        backgroundColor: "#f8fafc",
                                        borderRadius: "6px",
                                        border: "1px solid #e2e8f0",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "16px",
                                            height: "16px",
                                            backgroundColor: "#10b981",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            fontSize: "10px",
                                        }}
                                    >
                                        ✓
                                    </div>
                                    <span style={{ fontSize: "0.9rem", color: "#374151" }}>{permission}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Last Login Info */}
                    <div
                        style={{
                            backgroundColor: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            borderRadius: "8px",
                            padding: "16px",
                            marginBottom: "24px",
                        }}
                    >
                        <h4
                            style={{
                                fontSize: "1rem",
                                fontWeight: "600",
                                color: "#222",
                                margin: "0 0 8px 0",
                            }}
                        >
                            Login Information
                        </h4>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "12px",
                                fontSize: "0.9rem",
                                color: "#6b7280",
                            }}
                        >
                            <div>
                                <strong>Last Login:</strong> Dec 28, 2024 at 2:30 PM
                            </div>
                            <div>
                                <strong>Login Count:</strong> 1,247 sessions
                            </div>
                            <div>
                                <strong>Account Created:</strong> Jan 15, 2023
                            </div>
                            <div>
                                <strong>Status:</strong> <span style={{ color: "#10b981", fontWeight: "600" }}>Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "12px",
                            flexWrap: "wrap",
                        }}
                    >
                        <div style={{ display: "flex", gap: "12px" }}>
                            <button
                                style={{
                                    backgroundColor: "#dc2626",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    padding: "10px 20px",
                                    fontSize: "0.9rem",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                }}
                            >
                                Change Password
                            </button>
                            <button
                                style={{
                                    backgroundColor: "#f59e0b",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    padding: "10px 20px",
                                    fontSize: "0.9rem",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                }}
                            >
                                View Activity Log
                            </button>
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                            <button
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
                </div>
            </main>
        </div>
    )
}
