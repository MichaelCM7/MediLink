"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function EmergencyAlerts() {
    const [filterStatus, setFilterStatus] = useState("all")
    const [filterPriority, setFilterPriority] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const [emergencyAlerts] = useState([
        {
            id: 1,
            patientName: "Jane Doe",
            phone: "0712345678",
            emergencyType: "cardiac",
            description: "Severe chest pain and difficulty breathing",
            location: { latitude: -1.2921, longitude: 36.8219, address: "Nairobi CBD" },
            timestamp: "2025-01-15T10:30:00Z",
            status: "active",
            priority: "critical",
            respondingHospital: "Nairobi Hospital",
            estimatedArrival: "8 minutes",
            medicalInfo: {
                bloodType: "A+",
                allergies: "Penicillin",
                medications: "Lisinopril",
            },
        },
        {
            id: 2,
            patientName: "John Wilson",
            phone: "0723456789",
            emergencyType: "accident",
            description: "Motor vehicle accident with head injury",
            location: { latitude: -1.3032, longitude: 36.7073, address: "Karen Road" },
            timestamp: "2025-01-15T09:15:00Z",
            status: "responded",
            priority: "high",
            respondingHospital: "Karen Hospital",
            estimatedArrival: "Arrived",
            medicalInfo: {
                bloodType: "O-",
                allergies: "None",
                medications: "None",
            },
        },
        {
            id: 3,
            patientName: "Mary Brown",
            phone: "0734567890",
            emergencyType: "breathing",
            description: "Severe asthma attack, unable to breathe properly",
            location: { latitude: -1.2634, longitude: 36.8078, address: "Westlands" },
            timestamp: "2025-01-15T08:45:00Z",
            status: "resolved",
            priority: "high",
            respondingHospital: "Aga Khan Hospital",
            estimatedArrival: "Completed",
            medicalInfo: {
                bloodType: "B+",
                allergies: "Dust, Pollen",
                medications: "Albuterol inhaler",
            },
        },
        {
            id: 4,
            patientName: "Robert Lee",
            phone: "0745678901",
            emergencyType: "injury",
            description: "Severe laceration on arm from workplace accident",
            location: { latitude: -1.2841, longitude: 36.8155, address: "Industrial Area" },
            timestamp: "2025-01-15T07:20:00Z",
            status: "active",
            priority: "medium",
            respondingHospital: "MP Shah Hospital",
            estimatedArrival: "12 minutes",
            medicalInfo: {
                bloodType: "AB+",
                allergies: "Latex",
                medications: "None",
            },
        },
        {
            id: 5,
            patientName: "Sarah Kim",
            phone: "0756789012",
            emergencyType: "poisoning",
            description: "Suspected food poisoning with severe symptoms",
            location: { latitude: -1.2921, longitude: 36.8219, address: "CBD Restaurant" },
            timestamp: "2025-01-14T22:30:00Z",
            status: "resolved",
            priority: "medium",
            respondingHospital: "Kenyatta Hospital",
            estimatedArrival: "Completed",
            medicalInfo: {
                bloodType: "A-",
                allergies: "Shellfish",
                medications: "Birth control",
            },
        },
    ])

    const getStatusColor = (status) => {
        switch (status) {
            case "active":
                return "#f44336"
            case "responded":
                return "#ff9800"
            case "resolved":
                return "#4caf50"
            default:
                return "#666"
        }
    }

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "critical":
                return "#d32f2f"
            case "high":
                return "#f44336"
            case "medium":
                return "#ff9800"
            case "low":
                return "#4caf50"
            default:
                return "#666"
        }
    }

    const getEmergencyIcon = (type) => {
        switch (type) {
            case "cardiac":
                return "💓"
            case "accident":
                return "🚗"
            case "breathing":
                return "🫁"
            case "injury":
                return "🩹"
            case "poisoning":
                return "☠️"
            case "mental":
                return "🧠"
            default:
                return "🚨"
        }
    }

    const filteredAlerts = emergencyAlerts.filter((alert) => {
        const matchesStatus = filterStatus === "all" || alert.status === filterStatus
        const matchesPriority = filterPriority === "all" || alert.priority === filterPriority
        const matchesSearch =
            alert.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alert.emergencyType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alert.location.address.toLowerCase().includes(searchTerm.toLowerCase())

        return matchesStatus && matchesPriority && matchesSearch
    })

    const handleDispatchAmbulance = (alertId) => {
        alert(`Ambulance dispatched for emergency ${alertId}`)
    }

    const handleContactPatient = (phone) => {
        alert(`Calling patient at ${phone}`)
    }

    const handleMarkResolved = (alertId) => {
        alert(`Emergency ${alertId} marked as resolved`)
    }

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp)
        return date.toLocaleString()
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
            <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "48px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", margin: "0" }}>EMERGENCY ALERTS</h1>
                    <div
                        style={{
                            backgroundColor: "#f44336",
                            color: "white",
                            borderRadius: "12px",
                            padding: "8px 16px",
                            fontSize: "1rem",
                            fontWeight: "bold",
                        }}
                    >
                        {emergencyAlerts.filter((alert) => alert.status === "active").length} Active
                    </div>
                </div>

                {/* Filters and Search */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "12px",
                        padding: "24px",
                        marginBottom: "32px",
                    }}
                >
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "16px", alignItems: "end" }}>
                        {/* Search */}
                        <div>
                            <label
                                style={{ display: "block", fontSize: "0.9rem", fontWeight: "500", color: "#222", marginBottom: "8px" }}
                            >
                                Search Emergency Alerts
                            </label>
                            <input
                                type="text"
                                placeholder="Search by patient, type, or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "12px 16px",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    outline: "none",
                                }}
                            />
                        </div>

                        {/* Status Filter */}
                        <div>
                            <label
                                style={{ display: "block", fontSize: "0.9rem", fontWeight: "500", color: "#222", marginBottom: "8px" }}
                            >
                                Status
                            </label>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "12px 16px",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    outline: "none",
                                    backgroundColor: "white",
                                }}
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="responded">Responded</option>
                                <option value="resolved">Resolved</option>
                            </select>
                        </div>

                        {/* Priority Filter */}
                        <div>
                            <label
                                style={{ display: "block", fontSize: "0.9rem", fontWeight: "500", color: "#222", marginBottom: "8px" }}
                            >
                                Priority
                            </label>
                            <select
                                value={filterPriority}
                                onChange={(e) => setFilterPriority(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "12px 16px",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    outline: "none",
                                    backgroundColor: "white",
                                }}
                            >
                                <option value="all">All Priorities</option>
                                <option value="critical">Critical</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        {/* Emergency Broadcast */}
                        <button
                            style={{
                                backgroundColor: "#f44336",
                                color: "white",
                                border: "none",
                                borderRadius: "6px",
                                padding: "12px 24px",
                                fontSize: "1rem",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            🚨 Broadcast Alert
                        </button>
                    </div>
                </div>

                {/* Emergency Alerts List */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "12px",
                        padding: "32px",
                    }}
                >
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", marginBottom: "24px" }}>
                        Emergency Reports ({filteredAlerts.length})
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {filteredAlerts.map((alert) => (
                            <div
                                key={alert.id}
                                style={{
                                    border: `2px solid ${getStatusColor(alert.status)}`,
                                    borderRadius: "12px",
                                    padding: "24px",
                                    backgroundColor: alert.status === "active" ? "#fef2f2" : "#fafafa",
                                }}
                            >
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 300px", gap: "24px" }}>
                                    {/* Left Column - Emergency Details */}
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                                            <div style={{ fontSize: "2rem" }}>{getEmergencyIcon(alert.emergencyType)}</div>
                                            <div>
                                                <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#222", margin: "0 0 4px 0" }}>
                                                    {alert.patientName}
                                                </h3>
                                                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                          <span
                              style={{
                                  backgroundColor: getPriorityColor(alert.priority),
                                  color: "white",
                                  padding: "2px 8px",
                                  borderRadius: "8px",
                                  fontSize: "0.8rem",
                                  fontWeight: "500",
                                  textTransform: "uppercase",
                              }}
                          >
                            {alert.priority}
                          </span>
                                                    <span
                                                        style={{
                                                            backgroundColor: getStatusColor(alert.status),
                                                            color: "white",
                                                            padding: "2px 8px",
                                                            borderRadius: "8px",
                                                            fontSize: "0.8rem",
                                                            fontWeight: "500",
                                                            textTransform: "capitalize",
                                                        }}
                                                    >
                            {alert.status}
                          </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: "16px" }}>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 8px 0" }}>
                                                <strong>Emergency Type:</strong>{" "}
                                                {alert.emergencyType.charAt(0).toUpperCase() + alert.emergencyType.slice(1)}
                                            </p>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 8px 0" }}>
                                                <strong>Description:</strong> {alert.description}
                                            </p>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 8px 0" }}>
                                                <strong>Location:</strong> {alert.location.address}
                                            </p>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>
                                                <strong>Time:</strong> {formatTimestamp(alert.timestamp)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Middle Column - Medical Info */}
                                    <div>
                                        <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#222", marginBottom: "12px" }}>
                                            Medical Information
                                        </h4>
                                        <div
                                            style={{
                                                backgroundColor: "white",
                                                borderRadius: "8px",
                                                padding: "16px",
                                                border: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 8px 0" }}>
                                                <strong>Blood Type:</strong> {alert.medicalInfo.bloodType}
                                            </p>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 8px 0" }}>
                                                <strong>Allergies:</strong> {alert.medicalInfo.allergies}
                                            </p>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 8px 0" }}>
                                                <strong>Medications:</strong> {alert.medicalInfo.medications}
                                            </p>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>
                                                <strong>Phone:</strong> {alert.phone}
                                            </p>
                                        </div>

                                        <div style={{ marginTop: "16px" }}>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 4px 0" }}>
                                                <strong>Responding Hospital:</strong> {alert.respondingHospital}
                                            </p>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>
                                                <strong>ETA:</strong> {alert.estimatedArrival}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Column - Actions */}
                                    <div>
                                        <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#222", marginBottom: "12px" }}>
                                            Emergency Actions
                                        </h4>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                            {alert.status === "active" && (
                                                <>
                                                    <button
                                                        onClick={() => handleDispatchAmbulance(alert.id)}
                                                        style={{
                                                            backgroundColor: "#f44336",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "6px",
                                                            padding: "10px 16px",
                                                            fontSize: "0.9rem",
                                                            cursor: "pointer",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        🚑 Dispatch Ambulance
                                                    </button>
                                                    <button
                                                        onClick={() => handleContactPatient(alert.phone)}
                                                        style={{
                                                            backgroundColor: "#2196f3",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "6px",
                                                            padding: "10px 16px",
                                                            fontSize: "0.9rem",
                                                            cursor: "pointer",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        📞 Contact Patient
                                                    </button>
                                                    <button
                                                        onClick={() => handleMarkResolved(alert.id)}
                                                        style={{
                                                            backgroundColor: "#4caf50",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "6px",
                                                            padding: "10px 16px",
                                                            fontSize: "0.9rem",
                                                            cursor: "pointer",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        ✅ Mark Resolved
                                                    </button>
                                                </>
                                            )}
                                            {alert.status === "responded" && (
                                                <button
                                                    onClick={() => handleMarkResolved(alert.id)}
                                                    style={{
                                                        backgroundColor: "#4caf50",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: "6px",
                                                        padding: "10px 16px",
                                                        fontSize: "0.9rem",
                                                        cursor: "pointer",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    ✅ Mark Resolved
                                                </button>
                                            )}
                                            <button
                                                style={{
                                                    backgroundColor: "transparent",
                                                    color: "#666",
                                                    border: "1px solid #ddd",
                                                    borderRadius: "6px",
                                                    padding: "10px 16px",
                                                    fontSize: "0.9rem",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                📍 View Location
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredAlerts.length === 0 && (
                        <div style={{ textAlign: "center", padding: "48px", color: "#666" }}>
                            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🚨</div>
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>No emergency alerts found</h3>
                            <p>Try adjusting your search criteria or filters.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
