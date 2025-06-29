"use client"

import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function GeneralEmergencyReport() {
    // Mock user data - in real app this would come from useAuth
    const user = {
        id: "1",
        firstName: "Jane",
        lastName: "Doe",
        phone: "0712345678",
        bloodType: "A+",
        allergies: "Penicillin",
        medications: "Lisinopril 10mg daily",
    }

    const [location, setLocation] = useState(null)
    const [emergencyType, setEmergencyType] = useState("")
    const [description, setDescription] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [alertSent, setAlertSent] = useState(false)
    const [trackingId, setTrackingId] = useState("")

    const emergencyTypes = [
        { id: "medical", name: "🚑 Medical Emergency", color: "red" },
        { id: "accident", name: "🚗 Accident", color: "orange" },
        { id: "cardiac", name: "💓 Cardiac Event", color: "red" },
        { id: "breathing", name: "🫁 Breathing Difficulty", color: "blue" },
        { id: "injury", name: "🩹 Serious Injury", color: "yellow" },
        { id: "poisoning", name: "☠️ Poisoning", color: "purple" },
        { id: "mental", name: "🧠 Mental Health Crisis", color: "green" },
        { id: "other", name: "⚠️ Other Emergency", color: "gray" },
    ]

    useEffect(() => {
        getCurrentLocation()
    }, [])

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        accuracy: position.coords.accuracy,
                    })
                },
                (error) => {
                    console.error("Error getting location:", error)
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
            )
        }
    }

    const sendEmergencyAlert = async (alertData) => {
        // Mock API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    alertId: "EMG-" + Math.random().toString(36).substr(2, 9),
                })
            }, 2000)
        })
    }

    const handleQuickEmergency = async () => {
        setIsSubmitting(true)
        try {
            const alertData = {
                type: "immediate",
                location: location,
                timestamp: new Date().toISOString(),
                userId: user?.id,
                userInfo: user
                    ? {
                        name: `${user.firstName} ${user.lastName}`,
                        phone: user.phone,
                        bloodType: user.bloodType,
                        allergies: user.allergies,
                        medications: user.medications,
                    }
                    : null,
            }

            const result = await sendEmergencyAlert(alertData)
            if (result.success) {
                setAlertSent(true)
                setTrackingId(result.alertId || "EMG-" + Math.random().toString(36).substr(2, 9))
            }
        } catch (error) {
            console.error("Emergency alert failed:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDetailedSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const alertData = {
                type: "detailed",
                emergencyType,
                description,
                location,
                timestamp: new Date().toISOString(),
                userId: user?.id,
                userInfo: user
                    ? {
                        name: `${user.firstName} ${user.lastName}`,
                        phone: user.phone,
                        bloodType: user.bloodType,
                        allergies: user.allergies,
                    }
                    : null,
            }

            const result = await sendEmergencyAlert(alertData)
            if (result.success) {
                setAlertSent(true)
                setTrackingId(result.alertId || "EMG-" + Math.random().toString(36).substr(2, 9))
            }
        } catch (error) {
            console.error("Emergency alert failed:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (alertSent) {
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

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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

                {/* Success Content */}
                <main
                    style={{
                        minHeight: "calc(100vh - 80px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fef2f2",
                        padding: "32px",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "500px",
                            width: "100%",
                            backgroundColor: "white",
                            borderRadius: "12px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                            padding: "48px 32px",
                            textAlign: "center",
                            border: "2px solid #333",
                        }}
                    >
                        <div style={{ fontSize: "4rem", marginBottom: "24px" }}>✅</div>
                        <h1
                            style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                color: "#16a34a",
                                marginBottom: "16px",
                            }}
                        >
                            Emergency Alert Sent!
                        </h1>
                        <p
                            style={{
                                color: "#666",
                                fontSize: "1.1rem",
                                marginBottom: "32px",
                                lineHeight: "1.6",
                            }}
                        >
                            Your emergency alert has been successfully sent to nearby hospitals and emergency services.
                        </p>

                        <div
                            style={{
                                backgroundColor: "#f8f9fa",
                                borderRadius: "8px",
                                padding: "20px",
                                marginBottom: "32px",
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#374151",
                                    marginBottom: "8px",
                                }}
                            >
                                Tracking ID:
                            </p>
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    fontFamily: "monospace",
                                    color: "#2196f3",
                                    fontWeight: "bold",
                                    margin: "0",
                                }}
                            >
                                {trackingId}
                            </p>
                        </div>

                        <div
                            style={{
                                marginBottom: "32px",
                                textAlign: "left",
                            }}
                        >
                            {[
                                "• Emergency services have been notified",
                                "• Your location has been shared",
                                "• Medical information has been provided",
                                "• Help is on the way",
                            ].map((item, index) => (
                                <p
                                    key={index}
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "#666",
                                        margin: "8px 0",
                                    }}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                setAlertSent(false)
                                setEmergencyType("")
                                setDescription("")
                            }}
                            className="homepage-hero-actions primary"
                            style={{
                                width: "100%",
                                padding: "16px 24px",
                                fontSize: "1rem",
                            }}
                        >
                            Send Another Alert
                        </button>
                    </div>
                </main>
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
                    <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                    <Link to={ROUTES.OUR_SERVICES} className="hover:text-blue-600">Our Services</Link>
                    <Link to={ROUTES.EMERGENCY} className="hover:text-blue-600">Emergency Report</Link>
                    <Link to={ROUTES.ABOUT} className="hover:text-blue-600">About Us</Link>
                </nav>

                <div className="homepage-nav">
                    <Link to={ROUTES.USER_SIGNUP} className="homepage-Sign-Up-btn">
                        <button style={{
                            background: "transparent",
                            color: "#222",
                            border: "1px solid #ddd",
                            padding: "11.5px 20px",
                            fontSize: "1rem",
                        }}>
                            Sign Up
                        </button>
                    </Link>
                    <Link to={ROUTES.USER_LOGIN}>
                        <button className="homepage-login-btn, margin-left:0;">Login</button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main
                style={{
                    backgroundColor: "#fef2f2",
                    minHeight: "calc(100vh - 80px)",
                    padding: "48px 32px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}
                >
                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "48px" }}>
                        <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🚨</div>
                        <h1
                            style={{
                                fontSize: "2.5rem",
                                fontWeight: "bold",
                                color: "#dc2626",
                                marginBottom: "8px",
                            }}
                        >
                            Emergency Alert
                        </h1>
                        <p
                            style={{
                                color: "#374151",
                                fontSize: "1.1rem",
                            }}
                        >
                            Get immediate help from nearby medical facilities
                        </p>
                    </div>

                    {/* Quick Emergency Button */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            padding: "40px",
                            marginBottom: "32px",
                            borderLeft: "6px solid #dc2626",
                            border: "2px solid #333",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                color: "#dc2626",
                                marginBottom: "16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            🚨 IMMEDIATE EMERGENCY
                        </h2>
                        <p
                            style={{
                                color: "#374151",
                                marginBottom: "32px",
                                fontSize: "1.1rem",
                                lineHeight: "1.6",
                            }}
                        >
                            If this is a life-threatening emergency, click the button below to immediately alert nearby hospitals with
                            your location.
                        </p>
                        <button
                            onClick={handleQuickEmergency}
                            disabled={isSubmitting}
                            style={{
                                width: "100%",
                                backgroundColor: "#dc2626",
                                color: "white",
                                padding: "20px 24px",
                                borderRadius: "8px",
                                border: "none",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                cursor: isSubmitting ? "not-allowed" : "pointer",
                                opacity: isSubmitting ? "0.5" : "1",
                                transition: "all 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                if (!isSubmitting) {
                                    e.target.style.backgroundColor = "#b91c1c"
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isSubmitting) {
                                    e.target.style.backgroundColor = "#dc2626"
                                }
                            }}
                        >
                            {isSubmitting ? "Sending Alert..." : "SEND EMERGENCY ALERT NOW"}
                        </button>
                        <p
                            style={{
                                fontSize: "0.9rem",
                                color: "#6b7280",
                                marginTop: "12px",
                                textAlign: "center",
                            }}
                        >
                            This will share your location and medical information with emergency services
                        </p>
                    </div>

                    {/* Detailed Emergency Form */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            padding: "40px",
                            border: "2px solid #333",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                color: "#222",
                                marginBottom: "32px",
                            }}
                        >
                            Detailed Emergency Report
                        </h2>

                        <form onSubmit={handleDetailedSubmit}>
                            {/* Emergency Type Selection */}
                            <div style={{ marginBottom: "32px" }}>
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#374151",
                                        marginBottom: "16px",
                                    }}
                                >
                                    Type of Emergency *
                                </label>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                        gap: "12px",
                                    }}
                                >
                                    {emergencyTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => setEmergencyType(type.id)}
                                            style={{
                                                padding: "16px 12px",
                                                borderRadius: "8px",
                                                border: emergencyType === type.id ? "2px solid #dc2626" : "2px solid #e5e7eb",
                                                backgroundColor: emergencyType === type.id ? "#fef2f2" : "white",
                                                color: emergencyType === type.id ? "#dc2626" : "#374151",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                cursor: "pointer",
                                                transition: "all 0.2s",
                                                textAlign: "center",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (emergencyType !== type.id) {
                                                    e.target.style.borderColor = "#d1d5db"
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (emergencyType !== type.id) {
                                                    e.target.style.borderColor = "#e5e7eb"
                                                }
                                            }}
                                        >
                                            {type.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div style={{ marginBottom: "32px" }}>
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#374151",
                                        marginBottom: "8px",
                                    }}
                                >
                                    Description of Emergency *
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={4}
                                    placeholder="Please describe what happened, symptoms, or situation..."
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "8px",
                                        fontSize: "1rem",
                                        outline: "none",
                                        resize: "vertical",
                                        fontFamily: "inherit",
                                        transition: "border-color 0.2s, box-shadow 0.2s",
                                        boxSizing: "border-box",
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = "#dc2626"
                                        e.target.style.boxShadow = "0 0 0 3px rgba(220, 38, 38, 0.1)"
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = "#d1d5db"
                                        e.target.style.boxShadow = "none"
                                    }}
                                />
                            </div>

                            {/* Location Status */}
                            <div
                                style={{
                                    backgroundColor: "#eff6ff",
                                    borderRadius: "8px",
                                    padding: "20px",
                                    marginBottom: "32px",
                                    border: "1px solid #bfdbfe",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#1e40af",
                                        marginBottom: "12px",
                                    }}
                                >
                                    📍 Location Status
                                </h3>
                                {location ? (
                                    <div style={{ fontSize: "0.9rem", color: "#1e40af" }}>
                                        <p style={{ margin: "0 0 8px 0" }}>
                                            ✅ Location detected (Accuracy: ~{Math.round(location.accuracy)}m)
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "#3b82f6",
                                                margin: "0",
                                            }}
                                        >
                                            Lat: {location.latitude.toFixed(6)}, Lng: {location.longitude.toFixed(6)}
                                        </p>
                                    </div>
                                ) : (
                                    <div style={{ fontSize: "0.9rem", color: "#d97706" }}>
                                        <p style={{ margin: "0 0 8px 0" }}>⚠️ Location not available</p>
                                        <button
                                            type="button"
                                            onClick={getCurrentLocation}
                                            style={{
                                                color: "#2196f3",
                                                textDecoration: "underline",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            Try to get location again
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* User Information Display */}
                            {user && (
                                <div
                                    style={{
                                        backgroundColor: "#f8f9fa",
                                        borderRadius: "8px",
                                        padding: "20px",
                                        marginBottom: "32px",
                                        border: "1px solid #e5e7eb",
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "0.9rem",
                                            fontWeight: "600",
                                            color: "#222",
                                            marginBottom: "16px",
                                        }}
                                    >
                                        Your Information (will be shared)
                                    </h3>
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                            gap: "16px",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        <div>
                                            <span style={{ fontWeight: "600" }}>Name:</span> {user.firstName} {user.lastName}
                                        </div>
                                        <div>
                                            <span style={{ fontWeight: "600" }}>Phone:</span> {user.phone || "Not provided"}
                                        </div>
                                        <div>
                                            <span style={{ fontWeight: "600" }}>Blood Type:</span> {user.bloodType || "Unknown"}
                                        </div>
                                        <div>
                                            <span style={{ fontWeight: "600" }}>Allergies:</span> {user.allergies || "None listed"}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!emergencyType || !description || isSubmitting}
                                style={{
                                    width: "100%",
                                    backgroundColor: "#dc2626",
                                    color: "white",
                                    padding: "16px 24px",
                                    borderRadius: "8px",
                                    border: "none",
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                    cursor: !emergencyType || !description || isSubmitting ? "not-allowed" : "pointer",
                                    opacity: !emergencyType || !description || isSubmitting ? "0.5" : "1",
                                    transition: "all 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    if (emergencyType && description && !isSubmitting) {
                                        e.target.style.backgroundColor = "#b91c1c"
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (emergencyType && description && !isSubmitting) {
                                        e.target.style.backgroundColor = "#dc2626"
                                    }
                                }}
                            >
                                {isSubmitting ? "Sending Alert..." : "Send Detailed Emergency Alert"}
                            </button>
                        </form>

                        {/* Emergency Contacts */}
                        <div
                            style={{
                                marginTop: "48px",
                                paddingTop: "32px",
                                borderTop: "1px solid #e5e7eb",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "600",
                                    color: "#222",
                                    marginBottom: "24px",
                                }}
                            >
                                Emergency Contacts
                            </h3>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                    gap: "16px",
                                }}
                            >
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "24px 16px",
                                        backgroundColor: "#fef2f2",
                                        borderRadius: "8px",
                                        border: "1px solid #fecaca",
                                    }}
                                >
                                    <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🚑</div>
                                    <p style={{ fontWeight: "600", margin: "0 0 4px 0" }}>Emergency Services</p>
                                    <p
                                        style={{
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                            color: "#dc2626",
                                            margin: "0",
                                        }}
                                    >
                                        911
                                    </p>
                                </div>
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "24px 16px",
                                        backgroundColor: "#eff6ff",
                                        borderRadius: "8px",
                                        border: "1px solid #bfdbfe",
                                    }}
                                >
                                    <div style={{ fontSize: "2rem", marginBottom: "8px" }}>☠️</div>
                                    <p style={{ fontWeight: "600", margin: "0 0 4px 0" }}>Poison Control</p>
                                    <p
                                        style={{
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                            color: "#2563eb",
                                            margin: "0",
                                        }}
                                    >
                                        1-800-222-1222
                                    </p>
                                </div>
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "24px 16px",
                                        backgroundColor: "#f0fdf4",
                                        borderRadius: "8px",
                                        border: "1px solid #bbf7d0",
                                    }}
                                >
                                    <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🧠</div>
                                    <p style={{ fontWeight: "600", margin: "0 0 4px 0" }}>Crisis Hotline</p>
                                    <p
                                        style={{
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                            color: "#16a34a",
                                            margin: "0",
                                        }}
                                    >
                                        988
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
