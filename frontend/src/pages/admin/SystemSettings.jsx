"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function AdminSettings() {
    const [notifications, setNotifications] = useState({
        userRegistrations: true,
        systemAlerts: true,
        emergencyAlerts: true,
        appointmentUpdates: false,
        systemMaintenance: true,
    })

    const [passwords, setPasswords] = useState({
        current: "",
        new: "",
        confirm: "",
    })

    const [systemSettings, setSystemSettings] = useState({
        maintenanceMode: false,
        allowNewRegistrations: true,
        emergencyMode: false,
        backupFrequency: "daily",
    })

    const handleNotificationToggle = (type) => {
        setNotifications((prev) => ({
            ...prev,
            [type]: !prev[type],
        }))
    }

    const handleSystemToggle = (type) => {
        setSystemSettings((prev) => ({
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
        if (passwords.new.length < 8) {
            alert("Password must be at least 8 characters long!")
            return
        }
        alert("Password updated successfully!")
        setPasswords({ current: "", new: "", confirm: "" })
    }

    const handleSaveSettings = () => {
        alert("Settings saved successfully!")
    }

    const handleExportData = () => {
        alert("Data export initiated. You will receive an email when ready.")
    }

    const handleSystemBackup = () => {
        alert("System backup started. This may take a few minutes.")
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
                    ADMIN SETTINGS
                </h1>

                {/* Settings Container */}
                <div
                    style={{
                        border: "2px solid #333",
                        borderRadius: "16px",
                        padding: "40px",
                        backgroundColor: "white",
                        marginBottom: "32px",
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

                        {/* User Registrations */}
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
                                    User Registrations
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#666",
                                        margin: "0",
                                    }}
                                >
                                    Get notified when new users register on the platform
                                </p>
                            </div>

                            {/* Toggle Switch */}
                            <div
                                onClick={() => handleNotificationToggle("userRegistrations")}
                                style={{
                                    width: "50px",
                                    height: "26px",
                                    backgroundColor: notifications.userRegistrations ? "#2196f3" : "#ccc",
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
                                        left: notifications.userRegistrations ? "26px" : "2px",
                                        transition: "left 0.3s",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                    }}
                                />
                            </div>
                        </div>

                        {/* System Alerts */}
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
                                    System Alerts
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#666",
                                        margin: "0",
                                    }}
                                >
                                    Critical system alerts and error notifications
                                </p>
                            </div>

                            <div
                                onClick={() => handleNotificationToggle("systemAlerts")}
                                style={{
                                    width: "50px",
                                    height: "26px",
                                    backgroundColor: notifications.systemAlerts ? "#2196f3" : "#ccc",
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
                                        left: notifications.systemAlerts ? "26px" : "2px",
                                        transition: "left 0.3s",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Emergency Alerts */}
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
                                    Emergency Alerts
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#666",
                                        margin: "0",
                                    }}
                                >
                                    Immediate notifications for patient emergency reports
                                </p>
                            </div>

                            <div
                                onClick={() => handleNotificationToggle("emergencyAlerts")}
                                style={{
                                    width: "50px",
                                    height: "26px",
                                    backgroundColor: notifications.emergencyAlerts ? "#f44336" : "#ccc",
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
                                        left: notifications.emergencyAlerts ? "26px" : "2px",
                                        transition: "left 0.3s",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Appointment Updates */}
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
                                    Appointment Updates
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#666",
                                        margin: "0",
                                    }}
                                >
                                    Notifications for appointment bookings and cancellations
                                </p>
                            </div>

                            <div
                                onClick={() => handleNotificationToggle("appointmentUpdates")}
                                style={{
                                    width: "50px",
                                    height: "26px",
                                    backgroundColor: notifications.appointmentUpdates ? "#2196f3" : "#ccc",
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
                                        left: notifications.appointmentUpdates ? "26px" : "2px",
                                        transition: "left 0.3s",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* System Settings Section */}
                    <div style={{ marginBottom: "48px" }}>
                        <h2
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                color: "#222",
                                marginBottom: "24px",
                            }}
                        >
                            System Settings
                        </h2>

                        {/* Maintenance Mode */}
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
                                    Maintenance Mode
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#666",
                                        margin: "0",
                                    }}
                                >
                                    Enable maintenance mode to restrict user access
                                </p>
                            </div>

                            <div
                                onClick={() => handleSystemToggle("maintenanceMode")}
                                style={{
                                    width: "50px",
                                    height: "26px",
                                    backgroundColor: systemSettings.maintenanceMode ? "#ff9800" : "#ccc",
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
                                        left: systemSettings.maintenanceMode ? "26px" : "2px",
                                        transition: "left 0.3s",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Allow New Registrations */}
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
                                    Allow New Registrations
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#666",
                                        margin: "0",
                                    }}
                                >
                                    Enable or disable new user registrations
                                </p>
                            </div>

                            <div
                                onClick={() => handleSystemToggle("allowNewRegistrations")}
                                style={{
                                    width: "50px",
                                    height: "26px",
                                    backgroundColor: systemSettings.allowNewRegistrations ? "#4caf50" : "#ccc",
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
                                        left: systemSettings.allowNewRegistrations ? "26px" : "2px",
                                        transition: "left 0.3s",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Backup Frequency */}
                        <div style={{ marginBottom: "24px" }}>
                            <h3
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                    color: "#222",
                                    marginBottom: "8px",
                                }}
                            >
                                Backup Frequency
                            </h3>
                            <select
                                value={systemSettings.backupFrequency}
                                onChange={(e) => setSystemSettings({ ...systemSettings, backupFrequency: e.target.value })}
                                style={{
                                    padding: "12px 16px",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    outline: "none",
                                    backgroundColor: "white",
                                    minWidth: "200px",
                                }}
                            >
                                <option value="hourly">Every Hour</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>

                        {/* System Actions */}
                        <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
                            <button
                                onClick={handleSystemBackup}
                                style={{
                                    backgroundColor: "#4caf50",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    padding: "12px 24px",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                }}
                            >
                                Backup Now
                            </button>
                            <button
                                onClick={handleExportData}
                                style={{
                                    backgroundColor: "#ff9800",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    padding: "12px 24px",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                }}
                            >
                                Export Data
                            </button>
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
