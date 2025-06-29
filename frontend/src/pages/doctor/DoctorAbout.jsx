"use client"

import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";
import React from "react";

const DoctorAbout = () => {
    const values = [
        {
            icon: "❤️",
            title: "Patient-Centered Care",
            description:
                "We put patients at the heart of everything we do, ensuring accessible and compassionate healthcare.",
        },
        {
            icon: "🛡️",
            title: "Privacy & Security",
            description: "Your health data is protected with industry-leading security measures and HIPAA compliance.",
        },
        {
            icon: "👥",
            title: "Collaboration",
            description: "Bridging the gap between patients and healthcare providers through seamless communication.",
        },
        {
            icon: "🏆",
            title: "Excellence",
            description: "We strive for excellence in healthcare delivery and patient satisfaction.",
        },
    ]

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
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "48px 32px",
                }}
            >
                {/* Page Title */}
                <h1 className="homepage-hero-title" style={{ textAlign: "center", marginBottom: "32px" }}>
                    About Us
                </h1>

                {/* Introduction */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "48px",
                        fontSize: "1.15rem",
                        lineHeight: "1.6",
                        color: "#333",
                    }}
                >
                    <p>
                        At <span style={{ color: "#2196f3", fontWeight: "600" }}>Medi-Link</span>, we believe that transforming your
                        daily healthcare experience is empowering, personal, and practical. Our platform exists to help you take the
                        guesswork out of accessing medical services, connect with trusted professionals, and build sustainable
                        habits for your health journey.
                    </p>
                </div>

                {/* Mission Section */}
                <div
                    style={{
                        marginBottom: "48px",
                        padding: "32px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            color: "#2196f3",
                            marginBottom: "16px",
                        }}
                    >
                        Our Mission
                    </h2>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.6",
                            color: "#333",
                            margin: "0",
                        }}
                    >
                        To simplify access to quality healthcare services by offering personalized, practical, and innovative
                        solutions that support your health goals — whether you're managing ongoing care or seeking a new provider.
                    </p>
                </div>

                {/* Vision Section */}
                <div
                    style={{
                        marginBottom: "48px",
                        padding: "32px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            color: "#2196f3",
                            marginBottom: "16px",
                        }}
                    >
                        Our Vision
                    </h2>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.6",
                            color: "#333",
                            margin: "0",
                        }}
                    >
                        We envision a world where equitable healthcare access is second nature — where everyone feels confident in
                        their care choices, empowered by knowledge, and supported in their wellness journey.
                    </p>
                </div>

                {/* Our Story Section */}
                <div
                    style={{
                        marginBottom: "48px",
                        padding: "32px",
                        border: "2px solid #2196f3",
                        borderRadius: "12px",
                        backgroundColor: "white",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#222",
                            marginBottom: "16px",
                        }}
                    >
                        Our Story
                    </h2>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.6",
                            color: "#333",
                            margin: "0",
                        }}
                    >
                        The idea for <span style={{ color: "#2196f3", fontWeight: "600" }}>Medi-Link</span> started with a common
                        frustration: navigating healthcare shouldn't feel like a chore. We've made it our mission to simplify the
                        healthcare journey by combining technology with a human touch.
                        <br />
                        <br />
                        Spanning decades of experience in healthcare, tech, and patient engagement, our team shares a vision for
                        accessible care that's modern, caring, and reliable. We're driven to make a real impact in the lives of
                        patients, families, and healthcare providers alike.
                    </p>
                </div>

                {/* Our Values Section */}
                <div style={{ marginBottom: "48px" }}>
                    <h2
                        style={{
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            color: "#222",
                            marginBottom: "32px",
                            textAlign: "center",
                        }}
                    >
                        Our Values
                    </h2>

                    <div className="homepage-features">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "#e3f2fd",
                                    padding: "32px 24px",
                                    borderRadius: "12px",
                                    textAlign: "center",
                                    border: "1px solid #bbdefb",
                                    transition: "box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow = "0 8px 25px rgba(33, 150, 243, 0.15)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow = "none"
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "2.5rem",
                                        marginBottom: "16px",
                                    }}
                                >
                                    {value.icon}
                                </div>
                                <h3 className="homepage-feature-title" style={{ marginBottom: "12px" }}>
                                    {value.title}
                                </h3>
                                <p
                                    style={{
                                        color: "#666",
                                        fontSize: "0.95rem",
                                        lineHeight: "1.5",
                                        margin: "0",
                                    }}
                                >
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action Section */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        border: "2px solid #2196f3",
                        borderRadius: "12px",
                        padding: "48px 32px",
                        textAlign: "center",
                        backgroundColor: "white",
                    }}
                >
                    <p style={{
                        display: "block",
                        fontSize: "1.15rem",
                        lineHeight: "1.6",
                        color: "#333",
                        marginBottom: "32px",
                    }}
                    >
                        Whether you're new to managing your health or a seasoned healthcare professional,{" "}
                        <span style={{ color: "#2196f3", fontWeight: "600" }}>Medi-Link</span> is here to help you take the
                        guesswork out of healthcare. Start your journey today and discover how quality healthcare can be more
                        accessible than ever.
                    </p>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Link to={ROUTES.USER_SIGNUP} >
                            <button
                                className="homepage-hero-actions primary"
                                style={{
                                    fontSize: "1.1rem",
                                    padding: "16px 32px",
                                    textAlign: "center",
                                    width: "100%",
                                }}
                            >
                                Get Started Today
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DoctorAbout
