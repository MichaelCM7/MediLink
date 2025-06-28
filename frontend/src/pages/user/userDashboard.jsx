"use client"

import React, { useState, useEffect } from "react"
import {ROUTES} from "../../utils/constant.js";
import {Link} from "react-router-dom";

export default function PatientDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState({
    upcomingAppointments: [],
    recentAppointments: [],
    healthSummary: {},
    quickStats: {},
  })

  // Mock user data
  const user = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@email.com",
  }

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      // Simulate API call
      setTimeout(() => {
        setDashboardData({
          upcomingAppointments: [
            {
              id: 1,
              doctorName: "Dr. Sarah Johnson",
              specialty: "Cardiology",
              date: "2024-06-15",
              time: "10:00 AM",
              location: "Main Hospital - Room 205",
              status: "confirmed",
            },
            {
              id: 2,
              doctorName: "Dr. Michael Chen",
              specialty: "General Practice",
              date: "2024-06-20",
              time: "2:30 PM",
              location: "City Clinic - Room 103",
              status: "pending",
            },
          ],
          recentAppointments: [
            {
              id: 3,
              doctorName: "Dr. Emily Rodriguez",
              specialty: "Dermatology",
              date: "2024-05-28",
              status: "completed",
            },
          ],
          healthSummary: {
            bloodPressure: "120/80",
            heartRate: "72 bpm",
            weight: "70 kg",
            lastCheckup: "2024-05-28",
          },
          quickStats: {
            totalAppointments: 15,
            completedAppointments: 12,
            doctorsVisited: 5,
            healthScore: 85,
          },
        })
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error loading dashboard data:", error)
      setIsLoading(false)
    }
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (isLoading) {
    return (
        <div className="homepage-root">
          <div
              style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "4px solid #f3f3f3",
                    borderTop: "4px solid #2196f3",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    margin: "0 auto 16px auto",
                  }}
              />
              <p style={{ color: "#666", fontSize: "1.1rem" }}>Loading your dashboard...</p>
            </div>
          </div>
        </div>
    )
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
              maxWidth: "1400px",
              margin: "0 auto",
              padding: "48px 32px",
            }}
        >
          {/* Welcome Section */}
          <div style={{ marginBottom: "32px" }}>
            <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
            >
              <div>
                <h1
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      color: "#222",
                      margin: "0 0 8px 0",
                    }}
                >
                  {getGreeting()}, {user?.firstName}!
                </h1>
                <p
                    style={{
                      color: "#666",
                      fontSize: "1.1rem",
                      margin: "0",
                    }}
                >
                  Here's what's happening with your health today.
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 4px 0" }}>Today's Date</p>
                <p
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#222",
                      margin: "0",
                    }}
                >
                  {formatDate(new Date())}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    style={{
                      backgroundColor: "#e3f2fd",
                      borderRadius: "12px",
                      padding: "12px",
                      marginRight: "16px",
                    }}
                >
                  <div style={{ fontSize: "24px" }}>📅</div>
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#666", margin: "0 0 4px 0" }}>
                    Total Appointments
                  </p>
                  <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#222", margin: "0" }}>
                    {dashboardData.quickStats.totalAppointments}
                  </p>
                </div>
              </div>
            </div>

            <div
                style={{
                  backgroundColor: "white",
                  border: "2px solid #333",
                  borderRadius: "12px",
                  padding: "24px",
                }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    style={{
                      backgroundColor: "#e8f5e8",
                      borderRadius: "12px",
                      padding: "12px",
                      marginRight: "16px",
                    }}
                >
                  <div style={{ fontSize: "24px" }}>📊</div>
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#666", margin: "0 0 4px 0" }}>
                    Health Score
                  </p>
                  <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#222", margin: "0" }}>
                    {dashboardData.quickStats.healthScore}%
                  </p>
                </div>
              </div>
            </div>

            <div
                style={{
                  backgroundColor: "white",
                  border: "2px solid #333",
                  borderRadius: "12px",
                  padding: "24px",
                }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    style={{
                      backgroundColor: "#f3e5f5",
                      borderRadius: "12px",
                      padding: "12px",
                      marginRight: "16px",
                    }}
                >
                  <div style={{ fontSize: "24px" }}>👨‍⚕️</div>
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#666", margin: "0 0 4px 0" }}>
                    Doctors Visited
                  </p>
                  <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#222", margin: "0" }}>
                    {dashboardData.quickStats.doctorsVisited}
                  </p>
                </div>
              </div>
            </div>

            <div
                style={{
                  backgroundColor: "white",
                  border: "2px solid #333",
                  borderRadius: "12px",
                  padding: "24px",
                }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    style={{
                      backgroundColor: "#fff3cd",
                      borderRadius: "12px",
                      padding: "12px",
                      marginRight: "16px",
                    }}
                >
                  <div style={{ fontSize: "24px" }}>📈</div>
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#666", margin: "0 0 4px 0" }}>This Month</p>
                  <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#222", margin: "0" }}>3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Layout */}
          <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "32px",
              }}
          >
            {/* Left Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {/* Upcoming Appointments */}
              <div
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #333",
                    borderRadius: "12px",
                    padding: "32px",
                  }}
              >
                <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "24px",
                    }}
                >
                  <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#222",
                        margin: "0",
                      }}
                  >
                    Upcoming Appointments
                  </h2>
                    <Link to={ROUTES.USER_SERVICES}>
                        <button
                            className="homepage-hero-actions primary"
                            style={{
                                padding: "8px 16px",
                                fontSize: "0.9rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                        <span style={{ fontSize: "25px",display: "flex", alignContent: "center",
                        justifyContent: "center",marginBottom: "2px" }}>+</span>
                            Book New
                        </button>
                    </Link>
                </div>

                {dashboardData.upcomingAppointments.length > 0 ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      {dashboardData.upcomingAppointments.map((appointment) => (
                          <div
                              key={appointment.id}
                              style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "20px",
                                backgroundColor: "#f8f9fa",
                              }}
                          >
                            <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "flex-start",
                                }}
                            >
                              <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "12px",
                                      marginBottom: "12px",
                                    }}
                                >
                                  <div
                                      style={{
                                        backgroundColor: "#e3f2fd",
                                        borderRadius: "50%",
                                        padding: "8px",
                                      }}
                                  >
                                    <div style={{ fontSize: "16px" }}>👤</div>
                                  </div>
                                  <div>
                                    <h3
                                        style={{
                                          fontWeight: "600",
                                          color: "#222",
                                          margin: "0 0 4px 0",
                                          fontSize: "1.1rem",
                                        }}
                                    >
                                      {appointment.doctorName}
                                    </h3>
                                    <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>{appointment.specialty}</p>
                                  </div>
                                </div>
                                <div
                                    style={{
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                      gap: "16px",
                                      fontSize: "0.9rem",
                                    }}
                                >
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ fontSize: "16px" }}>📅</span>
                                    <span>
                                {formatDate(appointment.date)} at {appointment.time}
                              </span>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ fontSize: "16px" }}>📍</span>
                                    <span>{appointment.location}</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                          <span
                              style={{
                                display: "inline-flex",
                                padding: "4px 12px",
                                fontSize: "0.8rem",
                                fontWeight: "600",
                                borderRadius: "12px",
                                backgroundColor: appointment.status === "confirmed" ? "#d4edda" : "#fff3cd",
                                color: appointment.status === "confirmed" ? "#155724" : "#856404",
                              }}
                          >
                            {appointment.status}
                          </span>
                              </div>
                            </div>
                          </div>
                      ))}
                    </div>
                ) : (
                    <div style={{ textAlign: "center", padding: "32px 0" }}>
                      <div style={{ fontSize: "48px", marginBottom: "16px" }}>📅</div>
                      <p style={{ color: "#666", marginBottom: "16px" }}>No upcoming appointments</p>
                      <button className="homepage-hero-actions primary">Book Your First Appointment</button>
                    </div>
                )}
              </div>

              {/* Quick Actions */}
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
                  Quick Actions
                </h2>
                <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                      gap: "16px",
                    }}
                >
                    <Link to={ROUTES.USER_SERVICES}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "20px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "background-color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#f8f9fa"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "white"
                            }}
                        >
                            <div style={{ fontSize: "32px", marginBottom: "8px" }}>📅</div>
                            <span style={{ fontSize: "0.9rem", fontWeight: "600", color: "#222", textAlign: "center" }}>
                    Book Appointment
                  </span>
                        </div>
                    </Link>

                    <Link to={ROUTES.USER_SERVICES}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "20px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "background-color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#f8f9fa"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "white"
                            }}
                        >
                            <div style={{ fontSize: "32px", marginBottom: "8px" }}>👨‍⚕️</div>
                            <span style={{ fontSize: "0.9rem", fontWeight: "600", color: "#222", textAlign: "center" }}>
                    Find Doctors
                  </span>
                        </div>
                    </Link>

                    <Link to={ROUTES.USER_APPOINTMENT_HISTORY}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "20px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "background-color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#f8f9fa"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "white"
                            }}
                        >
                            <div style={{ fontSize: "32px", marginBottom: "8px" }}>📋</div>
                            <span style={{ fontSize: "0.9rem", fontWeight: "600", color: "#222", textAlign: "center" }}>
                    Medical Records
                  </span>
                        </div>
                    </Link>

                    <Link to={ROUTES.USER_EMERGENCY}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "20px",
                                border: "1px solid #f5c6cb",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "background-color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#f8d7da"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "white"
                            }}
                        >
                            <div style={{ fontSize: "32px", marginBottom: "8px" }}>🚨</div>
                            <span style={{ fontSize: "0.9rem", fontWeight: "600", color: "#721c24", textAlign: "center" }}>
                    Emergency
                  </span>
                        </div>
                    </Link>

                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {/* Profile Card */}
              <div
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #333",
                    borderRadius: "12px",
                    padding: "32px",
                    textAlign: "center",
                  }}
              >
                <div
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#2196f3",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px auto",
                    }}
                >
                  <div style={{ fontSize: "40px", color: "white" }}>👤</div>
                </div>
                <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#222",
                      margin: "0 0 8px 0",
                    }}
                >
                  {user?.firstName} {user?.lastName}
                </h3>
                <p style={{ color: "#666", marginBottom: "16px" }}>{user?.email}</p>
                <Link to={ROUTES.USER_PROFILE}>
                    <button
                        style={{
                            width: "100%",
                            backgroundColor: "transparent",
                            color: "#222",
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            padding: "12px 24px",
                            fontSize: "1rem",
                            cursor: "pointer",
                            fontWeight: "500",
                        }}
                    >
                        Edit Profile
                    </button>
                </Link>
              </div>

              {/* Health Summary */}
              <div
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #333",
                    borderRadius: "12px",
                    padding: "32px",
                  }}
              >
                <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#222",
                      marginBottom: "20px",
                    }}
                >
                  Health Summary
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#666" }}>Blood Pressure</span>
                    <span style={{ fontWeight: "600", color: "#222" }}>{dashboardData.healthSummary.bloodPressure}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#666" }}>Heart Rate</span>
                    <span style={{ fontWeight: "600", color: "#222" }}>{dashboardData.healthSummary.heartRate}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#666" }}>Weight</span>
                    <span style={{ fontWeight: "600", color: "#222" }}>{dashboardData.healthSummary.weight}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#666" }}>Last Checkup</span>
                    <span style={{ fontWeight: "600", color: "#222" }}>
                    {formatDate(dashboardData.healthSummary.lastCheckup)}
                  </span>
                  </div>
                </div>
                <div style={{ marginTop: "24px" }}>
                  <button
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        color: "#222",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        padding: "12px 24px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        fontWeight: "500",
                      }}
                  >
                    View Complete Records
                  </button>
                </div>
              </div>

              {/* Emergency Contact */}
              <div
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #f5c6cb",
                    borderRadius: "12px",
                    padding: "32px",
                  }}
              >
                <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "16px",
                      padding: "12px",
                      backgroundColor: "#f8d7da",
                      borderRadius: "8px",
                    }}
                >
                  <div style={{ fontSize: "20px" }}>🚨</div>
                  <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: "#721c24",
                        margin: "0",
                      }}
                  >
                    Emergency
                  </h3>
                </div>
                <p
                    style={{
                      color: "#333",
                      fontSize: "0.9rem",
                      marginBottom: "16px",
                    }}
                >
                  Need immediate medical assistance?
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <button
                      style={{
                        width: "100%",
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        padding: "12px 24px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                  >
                    Call 911
                  </button>
                    <Link to={ROUTES.USER_EMERGENCY}>
                        <button
                            style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                color: "#dc3545",
                                border: "1px solid #f5c6cb",
                                borderRadius: "6px",
                                padding: "12px 24px",
                                fontSize: "1rem",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            Emergency Alert
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* CSS Animation for Loading Spinner */}
        <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      </div>
  )
}
