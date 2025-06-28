"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function AdminHome() {
    const [stats] = useState({
        totalPatients: 1247,
        totalDoctors: 89,
        todayAppointments: 156,
        pendingAppointments: 23,
        emergencyAlerts: 7,
        systemHealth: 98.5,
        newRegistrations: 12,
        totalRatings: 892,
    })

    const [recentActivity] = useState([
        {
            id: 1,
            type: "emergency",
            message: "Emergency alert from Jane Doe - Cardiac Event",
            time: "2 minutes ago",
            priority: "high",
        },
        {
            id: 2,
            type: "appointment",
            message: "New appointment booked with Dr. Smith",
            time: "15 minutes ago",
            priority: "normal",
        },
        {
            id: 3,
            type: "registration",
            message: "New patient registration: John Wilson",
            time: "1 hour ago",
            priority: "normal",
        },
        {
            id: 4,
            type: "rating",
            message: "New 5-star rating for Dr. Johnson",
            time: "2 hours ago",
            priority: "low",
        },
        {
            id: 5,
            type: "system",
            message: "System backup completed successfully",
            time: "3 hours ago",
            priority: "low",
        },
    ])

    const [quickActions] = useState([
        { name: "View Emergency Alerts", icon: "🚨", color: "#f44336", count: stats.emergencyAlerts },
        { name: "Manage Appointments", icon: "📅", color: "#2196f3", count: stats.pendingAppointments },
        { name: "User Management", icon: "👥", color: "#4caf50", count: stats.newRegistrations },
        { name: "System Settings", icon: "⚙️", color: "#ff9800", count: null },
    ])

    const getActivityIcon = (type) => {
        switch (type) {
            case "emergency":
                return "🚨"
            case "appointment":
                return "📅"
            case "registration":
                return "👤"
            case "rating":
                return "⭐"
            case "system":
                return "🔧"
            default:
                return "📋"
        }
    }

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high":
                return "#f44336"
            case "normal":
                return "#2196f3"
            case "low":
                return "#4caf50"
            default:
                return "#666"
        }
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
                {/* Welcome Section */}
                <div style={{ marginBottom: "32px" }}>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: "8px" }}>
                        Welcome Back, Admin
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "#666" }}>Here's what's happening with your medical platform today.</p>
                </div>

                {/* Stats Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "24px",
                        marginBottom: "32px",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            border: "2px solid #333",
                            borderRadius: "12px",
                            padding: "24px",
                            textAlign: "center",
                        }}
                    >
                        <div style={{ fontSize: "2.5rem", color: "#2196f3", marginBottom: "8px" }}>👥</div>
                        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#222", marginBottom: "4px" }}>
                            {stats.totalPatients.toLocaleString()}
                        </div>
                        <div style={{ fontSize: "0.9rem", color: "#666" }}>Total Patients</div>
                    </div>

                    <div
                        style={{
                            backgroundColor: "white",
                            border: "2px solid #333",
                            borderRadius: "12px",
                            padding: "24px",
                            textAlign: "center",
                        }}
                    >
                        <div style={{ fontSize: "2.5rem", color: "#4caf50", marginBottom: "8px" }}>👨‍⚕️</div>
                        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#222", marginBottom: "4px" }}>
                            {stats.totalDoctors}
                        </div>
                        <div style={{ fontSize: "0.9rem", color: "#666" }}>Total Doctors</div>
                    </div>

                    <div
                        style={{
                            backgroundColor: "white",
                            border: "2px solid #333",
                            borderRadius: "12px",
                            padding: "24px",
                            textAlign: "center",
                        }}
                    >
                        <div style={{ fontSize: "2.5rem", color: "#ff9800", marginBottom: "8px" }}>📅</div>
                        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#222", marginBottom: "4px" }}>
                            {stats.todayAppointments}
                        </div>
                        <div style={{ fontSize: "0.9rem", color: "#666" }}>Today's Appointments</div>
                    </div>

                    <div
                        style={{
                            backgroundColor: "white",
                            border: "2px solid #333",
                            borderRadius: "12px",
                            padding: "24px",
                            textAlign: "center",
                        }}
                    >
                        <div style={{ fontSize: "2.5rem", color: "#f44336", marginBottom: "8px" }}>🚨</div>
                        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#222", marginBottom: "4px" }}>
                            {stats.emergencyAlerts}
                        </div>
                        <div style={{ fontSize: "0.9rem", color: "#666" }}>Emergency Alerts</div>
                    </div>
                </div>

                {/* Main Dashboard Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "32px" }}>
                    {/* Left Column */}
                    <div>
                        {/* Quick Actions */}
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "2px solid #333",
                                borderRadius: "12px",
                                padding: "32px",
                                marginBottom: "32px",
                            }}
                        >
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", marginBottom: "24px" }}>
                                Quick Actions
                            </h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                                {quickActions.map((action, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "8px",
                                            padding: "20px",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                            backgroundColor: "#fafafa",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.borderColor = action.color
                                            e.target.style.backgroundColor = action.color + "10"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderColor = "#e5e7eb"
                                            e.target.style.backgroundColor = "#fafafa"
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                                <div style={{ fontSize: "1.5rem" }}>{action.icon}</div>
                                                <span style={{ fontWeight: "500", color: "#222" }}>{action.name}</span>
                                            </div>
                                            {action.count && (
                                                <div
                                                    style={{
                                                        backgroundColor: action.color,
                                                        color: "white",
                                                        borderRadius: "12px",
                                                        padding: "4px 8px",
                                                        fontSize: "0.8rem",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {action.count}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "2px solid #333",
                                borderRadius: "12px",
                                padding: "32px",
                            }}
                        >
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", marginBottom: "24px" }}>
                                Recent Activity
                            </h2>
                            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                                {recentActivity.map((activity) => (
                                    <div
                                        key={activity.id}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "16px",
                                            padding: "16px",
                                            borderBottom: "1px solid #f0f0f0",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        <div style={{ fontSize: "1.5rem" }}>{getActivityIcon(activity.type)}</div>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ margin: "0 0 4px 0", color: "#222", fontWeight: "500" }}>{activity.message}</p>
                                            <p style={{ margin: "0", fontSize: "0.8rem", color: "#666" }}>{activity.time}</p>
                                        </div>
                                        <div
                                            style={{
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "50%",
                                                backgroundColor: getPriorityColor(activity.priority),
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        {/* System Health */}
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "2px solid #333",
                                borderRadius: "12px",
                                padding: "32px",
                                marginBottom: "32px",
                            }}
                        >
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", marginBottom: "24px" }}>
                                System Health
                            </h2>
                            <div style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: "bold",
                                        color: stats.systemHealth > 95 ? "#4caf50" : stats.systemHealth > 85 ? "#ff9800" : "#f44336",
                                        marginBottom: "8px",
                                    }}
                                >
                                    {stats.systemHealth}%
                                </div>
                                <p style={{ color: "#666", marginBottom: "16px" }}>Overall System Performance</p>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "8px",
                                        backgroundColor: "#f0f0f0",
                                        borderRadius: "4px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: `${stats.systemHealth}%`,
                                            height: "100%",
                                            backgroundColor:
                                                stats.systemHealth > 95 ? "#4caf50" : stats.systemHealth > 85 ? "#ff9800" : "#f44336",
                                            transition: "width 0.3s",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Platform Summary */}
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "2px solid #333",
                                borderRadius: "12px",
                                padding: "32px",
                            }}
                        >
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", marginBottom: "24px" }}>
                                Platform Summary
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ color: "#666" }}>Pending Appointments</span>
                                    <span style={{ fontWeight: "600", color: "#222" }}>{stats.pendingAppointments}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ color: "#666" }}>New Registrations</span>
                                    <span style={{ fontWeight: "600", color: "#222" }}>{stats.newRegistrations}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ color: "#666" }}>Total Ratings</span>
                                    <span style={{ fontWeight: "600", color: "#222" }}>{stats.totalRatings}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ color: "#666" }}>Active Emergencies</span>
                                    <span style={{ fontWeight: "600", color: "#f44336" }}>{stats.emergencyAlerts}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
