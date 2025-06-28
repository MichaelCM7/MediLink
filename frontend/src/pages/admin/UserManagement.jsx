"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function UserManagement() {
    const [activeTab, setActiveTab] = useState("patients")
    const [searchTerm, setSearchTerm] = useState("")
    const [filterStatus, setFilterStatus] = useState("all")

    const [patients] = useState([
        {
            id: 1,
            name: "Jane Doe",
            email: "jane.doe@email.com",
            phone: "0712345678",
            dateJoined: "2024-12-15",
            status: "active",
            lastLogin: "2025-01-14",
            appointmentsCount: 5,
            emergencyReports: 1,
            bloodType: "A+",
            age: 28,
        },
        {
            id: 2,
            name: "John Wilson",
            email: "john.wilson@email.com",
            phone: "0723456789",
            dateJoined: "2024-11-20",
            status: "active",
            lastLogin: "2025-01-13",
            appointmentsCount: 3,
            emergencyReports: 0,
            bloodType: "O-",
            age: 35,
        },
        {
            id: 3,
            name: "Mary Brown",
            email: "mary.brown@email.com",
            phone: "0734567890",
            dateJoined: "2024-10-05",
            status: "suspended",
            lastLogin: "2024-12-20",
            appointmentsCount: 8,
            emergencyReports: 2,
            bloodType: "B+",
            age: 42,
        },
        {
            id: 4,
            name: "Robert Lee",
            email: "robert.lee@email.com",
            phone: "0745678901",
            dateJoined: "2024-09-12",
            status: "active",
            lastLogin: "2025-01-15",
            appointmentsCount: 12,
            emergencyReports: 0,
            bloodType: "AB+",
            age: 55,
        },
    ])

    const [doctors] = useState([
        {
            id: 1,
            name: "Dr. Sarah Smith",
            email: "dr.smith@hospital.com",
            phone: "0712345678",
            specialty: "Cardiology",
            hospital: "Nairobi Hospital",
            dateJoined: "2023-05-15",
            status: "active",
            lastLogin: "2025-01-15",
            appointmentsCount: 156,
            rating: 4.8,
            experience: "10 years",
        },
        {
            id: 2,
            name: "Dr. Michael Johnson",
            email: "dr.johnson@hospital.com",
            phone: "0723456789",
            specialty: "Dermatology",
            hospital: "Karen Hospital",
            dateJoined: "2023-03-20",
            status: "active",
            lastLogin: "2025-01-14",
            appointmentsCount: 89,
            rating: 4.6,
            experience: "8 years",
        },
        {
            id: 3,
            name: "Dr. Emily Davis",
            email: "dr.davis@hospital.com",
            phone: "0734567890",
            specialty: "Pediatrics",
            hospital: "Aga Khan Hospital",
            dateJoined: "2023-01-10",
            status: "inactive",
            lastLogin: "2024-12-01",
            appointmentsCount: 234,
            rating: 4.9,
            experience: "15 years",
        },
    ])

    const getStatusColor = (status) => {
        switch (status) {
            case "active":
                return "#4caf50"
            case "inactive":
                return "#ff9800"
            case "suspended":
                return "#f44336"
            default:
                return "#666"
        }
    }

    const getStatusBadge = (status) => {
        return (
            <span
                style={{
                    backgroundColor: getStatusColor(status),
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    textTransform: "capitalize",
                }}
            >
        {status}
      </span>
        )
    }

    const filteredPatients = patients.filter((patient) => {
        const matchesSearch =
            patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.phone.includes(searchTerm)
        const matchesStatus = filterStatus === "all" || patient.status === filterStatus
        return matchesSearch && matchesStatus
    })

    const filteredDoctors = doctors.filter((doctor) => {
        const matchesSearch =
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = filterStatus === "all" || doctor.status === filterStatus
        return matchesSearch && matchesStatus
    })

    const handleSuspendUser = (userId, userType) => {
        alert(`${userType} ${userId} suspended`)
    }

    const handleActivateUser = (userId, userType) => {
        alert(`${userType} ${userId} activated`)
    }

    const handleDeleteUser = (userId, userType) => {
        if (confirm(`Are you sure you want to delete this ${userType}?`)) {
            alert(`${userType} ${userId} deleted`)
        }
    }

    const handleViewDetails = (userId, userType) => {
        alert(`Viewing details for ${userType} ${userId}`)
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
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: "32px" }}>USER MANAGEMENT</h1>

                {/* Tab Navigation */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "12px",
                        padding: "24px",
                        marginBottom: "32px",
                    }}
                >
                    <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
                        <button
                            onClick={() => setActiveTab("patients")}
                            style={{
                                backgroundColor: activeTab === "patients" ? "#2196f3" : "transparent",
                                color: activeTab === "patients" ? "white" : "#666",
                                border: "1px solid #2196f3",
                                borderRadius: "6px",
                                padding: "12px 24px",
                                fontSize: "1rem",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            👥 Patients ({patients.length})
                        </button>
                        <button
                            onClick={() => setActiveTab("doctors")}
                            style={{
                                backgroundColor: activeTab === "doctors" ? "#2196f3" : "transparent",
                                color: activeTab === "doctors" ? "white" : "#666",
                                border: "1px solid #2196f3",
                                borderRadius: "6px",
                                padding: "12px 24px",
                                fontSize: "1rem",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            👨‍⚕️ Doctors ({doctors.length})
                        </button>
                    </div>

                    {/* Filters and Search */}
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "16px", alignItems: "end" }}>
                        {/* Search */}
                        <div>
                            <label
                                style={{ display: "block", fontSize: "0.9rem", fontWeight: "500", color: "#222", marginBottom: "8px" }}
                            >
                                Search {activeTab === "patients" ? "Patients" : "Doctors"}
                            </label>
                            <input
                                type="text"
                                placeholder={`Search by name, email, ${activeTab === "patients" ? "phone" : "specialty"}...`}
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
                                <option value="inactive">Inactive</option>
                                <option value="suspended">Suspended</option>
                            </select>
                        </div>

                        {/* Export Button */}
                        <button
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
                            📊 Export Data
                        </button>
                    </div>
                </div>

                {/* Users List */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "12px",
                        padding: "32px",
                    }}
                >
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", marginBottom: "24px" }}>
                        {activeTab === "patients" ? "Registered Patients" : "Registered Doctors"} (
                        {activeTab === "patients" ? filteredPatients.length : filteredDoctors.length})
                    </h2>

                    {activeTab === "patients" ? (
                        <div style={{ overflowX: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Patient</th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Contact</th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>
                                        Medical Info
                                    </th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Activity</th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Status</th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredPatients.map((patient) => (
                                    <tr key={patient.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                                        <td style={{ padding: "16px" }}>
                                            <div>
                                                <div style={{ fontWeight: "500", color: "#222" }}>{patient.name}</div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>ID: {patient.id}</div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px" }}>
                                            <div>
                                                <div style={{ fontSize: "0.9rem", color: "#222" }}>{patient.email}</div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>{patient.phone}</div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px" }}>
                                            <div>
                                                <div style={{ fontSize: "0.9rem", color: "#222" }}>Age: {patient.age}</div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Blood: {patient.bloodType}</div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px" }}>
                                            <div>
                                                <div style={{ fontSize: "0.9rem", color: "#222" }}>
                                                    {patient.appointmentsCount} appointments
                                                </div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                                                    {patient.emergencyReports} emergencies
                                                </div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Last: {patient.lastLogin}</div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px" }}>{getStatusBadge(patient.status)}</td>
                                        <td style={{ padding: "16px" }}>
                                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                                <button
                                                    onClick={() => handleViewDetails(patient.id, "patient")}
                                                    style={{
                                                        backgroundColor: "#2196f3",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: "4px",
                                                        padding: "6px 12px",
                                                        fontSize: "0.8rem",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    View
                                                </button>
                                                {patient.status === "active" ? (
                                                    <button
                                                        onClick={() => handleSuspendUser(patient.id, "patient")}
                                                        style={{
                                                            backgroundColor: "#ff9800",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "4px",
                                                            padding: "6px 12px",
                                                            fontSize: "0.8rem",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Suspend
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handleActivateUser(patient.id, "patient")}
                                                        style={{
                                                            backgroundColor: "#4caf50",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "4px",
                                                            padding: "6px 12px",
                                                            fontSize: "0.8rem",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Activate
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleDeleteUser(patient.id, "patient")}
                                                    style={{
                                                        backgroundColor: "#f44336",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: "4px",
                                                        padding: "6px 12px",
                                                        fontSize: "0.8rem",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div style={{ overflowX: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Doctor</th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Contact</th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>
                                        Professional Info
                                    </th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>
                                        Performance
                                    </th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Status</th>
                                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredDoctors.map((doctor) => (
                                    <tr key={doctor.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                                        <td style={{ padding: "16px" }}>
                                            <div>
                                                <div style={{ fontWeight: "500", color: "#222" }}>{doctor.name}</div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>ID: {doctor.id}</div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px" }}>
                                            <div>
                                                <div style={{ fontSize: "0.9rem", color: "#222" }}>{doctor.email}</div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>{doctor.phone}</div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px" }}>
                                            <div>
                                                <div style={{ fontSize: "0.9rem", color: "#222" }}>{doctor.specialty}</div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>{doctor.hospital}</div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>{doctor.experience}</div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px" }}>
                                            <div>
                                                <div style={{ fontSize: "0.9rem", color: "#222" }}>
                                                    {doctor.appointmentsCount} appointments
                                                </div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Rating: ⭐ {doctor.rating}</div>
                                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Last: {doctor.lastLogin}</div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px" }}>{getStatusBadge(doctor.status)}</td>
                                        <td style={{ padding: "16px" }}>
                                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                                <button
                                                    onClick={() => handleViewDetails(doctor.id, "doctor")}
                                                    style={{
                                                        backgroundColor: "#2196f3",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: "4px",
                                                        padding: "6px 12px",
                                                        fontSize: "0.8rem",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    View
                                                </button>
                                                {doctor.status === "active" ? (
                                                    <button
                                                        onClick={() => handleSuspendUser(doctor.id, "doctor")}
                                                        style={{
                                                            backgroundColor: "#ff9800",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "4px",
                                                            padding: "6px 12px",
                                                            fontSize: "0.8rem",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Suspend
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handleActivateUser(doctor.id, "doctor")}
                                                        style={{
                                                            backgroundColor: "#4caf50",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "4px",
                                                            padding: "6px 12px",
                                                            fontSize: "0.8rem",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Activate
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleDeleteUser(doctor.id, "doctor")}
                                                    style={{
                                                        backgroundColor: "#f44336",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: "4px",
                                                        padding: "6px 12px",
                                                        fontSize: "0.8rem",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {((activeTab === "patients" && filteredPatients.length === 0) ||
                        (activeTab === "doctors" && filteredDoctors.length === 0)) && (
                        <div style={{ textAlign: "center", padding: "48px", color: "#666" }}>
                            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>{activeTab === "patients" ? "👥" : "👨‍⚕️"}</div>
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>No {activeTab} found</h3>
                            <p>Try adjusting your search criteria or filters.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
