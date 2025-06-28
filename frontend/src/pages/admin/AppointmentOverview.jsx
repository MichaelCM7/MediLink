"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function AppointmentsOverview() {
    const [filterStatus, setFilterStatus] = useState("all")
    const [filterDate, setFilterDate] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const [appointments] = useState([
        {
            id: 1,
            patientName: "Jane Doe",
            doctorName: "Dr. Smith",
            hospital: "Nairobi Hospital",
            department: "Cardiology",
            date: "2025-01-15",
            time: "10:30 AM",
            status: "confirmed",
            type: "consultation",
            phone: "0712345678",
        },
        {
            id: 2,
            patientName: "John Wilson",
            doctorName: "Dr. Johnson",
            hospital: "Karen Hospital",
            department: "Dermatology",
            date: "2025-01-15",
            time: "2:00 PM",
            status: "pending",
            type: "follow-up",
            phone: "0723456789",
        },
        {
            id: 3,
            patientName: "Mary Brown",
            doctorName: "Dr. Davis",
            hospital: "Aga Khan Hospital",
            department: "Pediatrics",
            date: "2025-01-16",
            time: "9:00 AM",
            status: "confirmed",
            type: "check-up",
            phone: "0734567890",
        },
        {
            id: 4,
            patientName: "Robert Lee",
            doctorName: "Dr. Wilson",
            hospital: "Nairobi Hospital",
            department: "Orthopedics",
            date: "2025-01-16",
            time: "11:30 AM",
            status: "cancelled",
            type: "surgery",
            phone: "0745678901",
        },
        {
            id: 5,
            patientName: "Sarah Kim",
            doctorName: "Dr. Taylor",
            hospital: "MP Shah Hospital",
            department: "Gynecology",
            date: "2025-01-17",
            time: "3:30 PM",
            status: "completed",
            type: "consultation",
            phone: "0756789012",
        },
        {
            id: 6,
            patientName: "Michael Chen",
            doctorName: "Dr. Anderson",
            hospital: "Karen Hospital",
            department: "ENT",
            date: "2025-01-17",
            time: "1:15 PM",
            status: "pending",
            type: "consultation",
            phone: "0767890123",
        },
    ])

    const getStatusColor = (status) => {
        switch (status) {
            case "confirmed":
                return "#4caf50"
            case "pending":
                return "#ff9800"
            case "cancelled":
                return "#f44336"
            case "completed":
                return "#2196f3"
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

    const filteredAppointments = appointments.filter((appointment) => {
        const matchesStatus = filterStatus === "all" || appointment.status === filterStatus
        const matchesSearch =
            appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.hospital.toLowerCase().includes(searchTerm.toLowerCase())

        let matchesDate = true
        if (filterDate === "today") {
            matchesDate = appointment.date === "2025-01-15"
        } else if (filterDate === "tomorrow") {
            matchesDate = appointment.date === "2025-01-16"
        } else if (filterDate === "week") {
            matchesDate = ["2025-01-15", "2025-01-16", "2025-01-17"].includes(appointment.date)
        }

        return matchesStatus && matchesSearch && matchesDate
    })

    const handleApprove = (appointmentId) => {
        alert(`Appointment ${appointmentId} approved!`)
    }

    const handleCancel = (appointmentId) => {
        alert(`Appointment ${appointmentId} cancelled!`)
    }

    const handleReschedule = (appointmentId) => {
        alert(`Reschedule appointment ${appointmentId}`)
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
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: "32px" }}>
                    APPOINTMENTS OVERVIEW
                </h1>

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
                                Search Appointments
                            </label>
                            <input
                                type="text"
                                placeholder="Search by patient, doctor, or hospital..."
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
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        {/* Date Filter */}
                        <div>
                            <label
                                style={{ display: "block", fontSize: "0.9rem", fontWeight: "500", color: "#222", marginBottom: "8px" }}
                            >
                                Date
                            </label>
                            <select
                                value={filterDate}
                                onChange={(e) => setFilterDate(e.target.value)}
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
                                <option value="all">All Dates</option>
                                <option value="today">Today</option>
                                <option value="tomorrow">Tomorrow</option>
                                <option value="week">This Week</option>
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
                            Export Data
                        </button>
                    </div>
                </div>

                {/* Appointments List */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "12px",
                        padding: "32px",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", margin: "0" }}>
                            All Appointments ({filteredAppointments.length})
                        </h2>
                    </div>

                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                            <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                                <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Patient</th>
                                <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Doctor</th>
                                <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Hospital</th>
                                <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Department</th>
                                <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Date & Time</th>
                                <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Status</th>
                                <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Type</th>
                                <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "#222" }}>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredAppointments.map((appointment) => (
                                <tr key={appointment.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                                    <td style={{ padding: "16px" }}>
                                        <div>
                                            <div style={{ fontWeight: "500", color: "#222" }}>{appointment.patientName}</div>
                                            <div style={{ fontSize: "0.8rem", color: "#666" }}>{appointment.phone}</div>
                                        </div>
                                    </td>
                                    <td style={{ padding: "16px", color: "#222" }}>{appointment.doctorName}</td>
                                    <td style={{ padding: "16px", color: "#222" }}>{appointment.hospital}</td>
                                    <td style={{ padding: "16px", color: "#222" }}>{appointment.department}</td>
                                    <td style={{ padding: "16px" }}>
                                        <div>
                                            <div style={{ color: "#222" }}>{appointment.date}</div>
                                            <div style={{ fontSize: "0.8rem", color: "#666" }}>{appointment.time}</div>
                                        </div>
                                    </td>
                                    <td style={{ padding: "16px" }}>{getStatusBadge(appointment.status)}</td>
                                    <td style={{ padding: "16px", color: "#222", textTransform: "capitalize" }}>{appointment.type}</td>
                                    <td style={{ padding: "16px" }}>
                                        <div style={{ display: "flex", gap: "8px" }}>
                                            {appointment.status === "pending" && (
                                                <>
                                                    <button
                                                        onClick={() => handleApprove(appointment.id)}
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
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => handleCancel(appointment.id)}
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
                                                        Cancel
                                                    </button>
                                                </>
                                            )}
                                            {appointment.status === "confirmed" && (
                                                <button
                                                    onClick={() => handleReschedule(appointment.id)}
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
                                                    Reschedule
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredAppointments.length === 0 && (
                        <div style={{ textAlign: "center", padding: "48px", color: "#666" }}>
                            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📅</div>
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>No appointments found</h3>
                            <p>Try adjusting your search criteria or filters.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
