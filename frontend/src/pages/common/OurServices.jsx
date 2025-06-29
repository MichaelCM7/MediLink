"use client"

import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";
import React from "react";

export default function OurServices() {
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
            <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px" }}>
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "12px",
                        padding: "48px",
                        lineHeight: "1.8",
                    }}
                >
                    <h1
                        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: "32px", textAlign: "center" }}
                    >
                        OUR SERVICES
                    </h1>

                    <div style={{ fontSize: "1.1rem", color: "#444", marginBottom: "32px" }}>
                        <p style={{ marginBottom: "24px", textAlign: "center", fontSize: "1.2rem", color: "#666" }}>
                            Discover the comprehensive healthcare solutions that MEDILINK offers to transform your medical experience.
                        </p>
                    </div>

                    {/* Doctor Services Section */}
                    <section style={{ marginBottom: "48px" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                color: "#2196f3",
                                marginBottom: "24px",
                                borderBottom: "2px solid #2196f3",
                                paddingBottom: "8px",
                            }}
                        >
                            🩺 Doctor Services
                        </h2>

                        <div style={{ fontSize: "1.1rem", color: "#444" }}>
                            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#222", marginBottom: "16px" }}>
                                Find the Right Doctor for You
                            </h3>
                            <p style={{ marginBottom: "16px" }}>
                                MEDILINK connects you with qualified healthcare professionals across Kenya. Our platform features over
                                500 verified doctors from leading hospitals including Nairobi Hospital, Aga Khan Hospital, Karen
                                Hospital, and MP Shah Hospital.
                            </p>

                            <h4 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#222", marginBottom: "12px" }}>
                                Specialties Available:
                            </h4>
                            <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>Cardiology:</strong> Heart specialists for cardiovascular health
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>Dermatology:</strong> Skin, hair, and nail care experts
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>Pediatrics:</strong> Specialized care for children and infants
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>Orthopedics:</strong> Bone, joint, and muscle specialists
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>Gynecology:</strong> Women's health and reproductive care
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>ENT:</strong> Ear, nose, and throat specialists
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>Ophthalmology:</strong> Eye care and vision specialists
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>Psychiatry:</strong> Mental health and wellness experts
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>Neurology:</strong> Brain and nervous system specialists
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <strong>General Medicine:</strong> Primary care physicians
                                </li>
                            </ul>

                            <p style={{ marginBottom: "16px" }}>
                                Each doctor profile includes detailed information about their experience, qualifications, patient
                                ratings, consultation fees, and availability. You can easily compare doctors and choose the best fit for
                                your needs.
                            </p>
                        </div>
                    </section>

                    {/* Appointment Booking Section */}
                    <section style={{ marginBottom: "48px" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                color: "#4caf50",
                                marginBottom: "24px",
                                borderBottom: "2px solid #4caf50",
                                paddingBottom: "8px",
                            }}
                        >
                            📅 Smart Appointment Booking
                        </h2>

                        <div style={{ fontSize: "1.1rem", color: "#444" }}>
                            <p style={{ marginBottom: "16px" }}>
                                Say goodbye to long waiting times and phone calls. MEDILINK's intelligent booking system allows you to:
                            </p>

                            <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                                <li style={{ marginBottom: "8px" }}>Book appointments 24/7 from anywhere</li>
                                <li style={{ marginBottom: "8px" }}>View real-time doctor availability</li>
                                <li style={{ marginBottom: "8px" }}>Choose your preferred time slots</li>
                                <li style={{ marginBottom: "8px" }}>Receive instant confirmation and reminders</li>
                                <li style={{ marginBottom: "8px" }}>Reschedule or cancel appointments easily</li>
                                <li style={{ marginBottom: "8px" }}>Add insurance information for seamless billing</li>
                                <li style={{ marginBottom: "8px" }}>Specify the reason for your visit</li>
                            </ul>

                            <p style={{ marginBottom: "16px" }}>
                                Our system automatically sends SMS and email reminders 24 hours before your appointment, reducing
                                no-shows and ensuring you never miss an important medical consultation.
                            </p>
                        </div>
                    </section>

                    {/* Patient Management Section */}
                    <section style={{ marginBottom: "48px" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                color: "#ff9800",
                                marginBottom: "24px",
                                borderBottom: "2px solid #ff9800",
                                paddingBottom: "8px",
                            }}
                        >
                            📋 Comprehensive Patient Management
                        </h2>

                        <div style={{ fontSize: "1.1rem", color: "#444" }}>
                            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#222", marginBottom: "16px" }}>
                                Digital Health Records
                            </h3>
                            <p style={{ marginBottom: "16px" }}>
                                MEDILINK provides a secure, centralized platform for managing your health information:
                            </p>

                            <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                                <li style={{ marginBottom: "8px" }}>Complete medical history tracking</li>
                                <li style={{ marginBottom: "8px" }}>Prescription and medication records</li>
                                <li style={{ marginBottom: "8px" }}>Lab results and diagnostic reports</li>
                                <li style={{ marginBottom: "8px" }}>Vaccination records and schedules</li>
                                <li style={{ marginBottom: "8px" }}>Allergy and medical condition alerts</li>
                                <li style={{ marginBottom: "8px" }}>Emergency contact information</li>
                                <li style={{ marginBottom: "8px" }}>Insurance and billing details</li>
                            </ul>

                            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#222", marginBottom: "16px" }}>
                                Patient Dashboard Features
                            </h3>
                            <p style={{ marginBottom: "16px" }}>
                                Our intuitive patient dashboard gives you complete control over your healthcare journey with features
                                like appointment tracking, medication reminders, health goal setting, and direct communication with your
                                healthcare providers.
                            </p>
                        </div>
                    </section>

                    {/* Emergency Services Section */}
                    <section style={{ marginBottom: "48px" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                color: "#f44336",
                                marginBottom: "24px",
                                borderBottom: "2px solid #f44336",
                                paddingBottom: "8px",
                            }}
                        >
                            🚨 Emergency Response System
                        </h2>

                        <div style={{ fontSize: "1.1rem", color: "#444" }}>
                            <p style={{ marginBottom: "16px" }}>
                                MEDILINK's emergency response system ensures immediate medical attention when you need it most:
                            </p>

                            <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                                <li style={{ marginBottom: "8px" }}>One-click emergency alert system</li>
                                <li style={{ marginBottom: "8px" }}>GPS location sharing with emergency contacts</li>
                                <li style={{ marginBottom: "8px" }}>Direct connection to nearest hospitals</li>
                                <li style={{ marginBottom: "8px" }}>Automatic medical history sharing with emergency responders</li>
                                <li style={{ marginBottom: "8px" }}>24/7 emergency hotline integration</li>
                                <li style={{ marginBottom: "8px" }}>Real-time ambulance tracking</li>
                                <li style={{ marginBottom: "8px" }}>Emergency medication and allergy alerts</li>
                            </ul>

                            <p style={{ marginBottom: "16px" }}>
                                Our system works with major hospitals across Kenya to ensure rapid response times and coordinated
                                emergency care.
                            </p>
                        </div>
                    </section>

                    {/* Hospital Network Section */}
                    <section style={{ marginBottom: "48px" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                color: "#9c27b0",
                                marginBottom: "24px",
                                borderBottom: "2px solid #9c27b0",
                                paddingBottom: "8px",
                            }}
                        >
                            🏥 Extensive Hospital Network
                        </h2>

                        <div style={{ fontSize: "1.1rem", color: "#444" }}>
                            <p style={{ marginBottom: "16px" }}>
                                MEDILINK partners with leading healthcare institutions across Kenya to provide you with access to
                                quality medical care:
                            </p>

                            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#222", marginBottom: "16px" }}>
                                Partner Hospitals Include:
                            </h3>
                            <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                                <li style={{ marginBottom: "8px" }}>
                                    Nairobi Hospital - Comprehensive medical services and emergency care
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    Aga Khan Hospital - Specialized treatments and advanced medical technology
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    Karen Hospital - Community-focused healthcare with personalized service
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    MP Shah Hospital - Multi-specialty care with international standards
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    Kenyatta National Hospital - Leading public healthcare institution
                                </li>
                                <li style={{ marginBottom: "8px" }}>Mater Hospital - Catholic healthcare with compassionate care</li>
                            </ul>

                            <p style={{ marginBottom: "16px" }}>
                                Each hospital in our network maintains high standards of care, modern facilities, and experienced
                                medical staff. You can easily compare hospitals, view available services, and check real-time bed
                                availability.
                            </p>
                        </div>
                    </section>

                    {/* Ratings and Reviews Section */}
                    <section style={{ marginBottom: "48px" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                color: "#607d8b",
                                marginBottom: "24px",
                                borderBottom: "2px solid #607d8b",
                                paddingBottom: "8px",
                            }}
                        >
                            ⭐ Ratings and Review System
                        </h2>

                        <div style={{ fontSize: "1.1rem", color: "#444" }}>
                            <p style={{ marginBottom: "16px" }}>
                                Make informed healthcare decisions with our comprehensive rating and review system:
                            </p>

                            <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                                <li style={{ marginBottom: "8px" }}>Verified patient reviews and ratings</li>
                                <li style={{ marginBottom: "8px" }}>Doctor performance metrics and patient satisfaction scores</li>
                                <li style={{ marginBottom: "8px" }}>Hospital service quality assessments</li>
                                <li style={{ marginBottom: "8px" }}>Treatment outcome tracking</li>
                                <li style={{ marginBottom: "8px" }}>Wait time and punctuality ratings</li>
                                <li style={{ marginBottom: "8px" }}>Facility cleanliness and comfort scores</li>
                                <li style={{ marginBottom: "8px" }}>Staff professionalism and communication ratings</li>
                            </ul>

                            <p style={{ marginBottom: "16px" }}>
                                Our transparent review system helps you choose the best healthcare providers while helping medical
                                professionals improve their services based on patient feedback.
                            </p>
                        </div>
                    </section>

                    {/* Technology Features Section */}
                    <section style={{ marginBottom: "48px" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                color: "#795548",
                                marginBottom: "24px",
                                borderBottom: "2px solid #795548",
                                paddingBottom: "8px",
                            }}
                        >
                            💻 Advanced Technology Features
                        </h2>

                        <div style={{ fontSize: "1.1rem", color: "#444" }}>
                            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#222", marginBottom: "16px" }}>
                                Smart Search and Filtering
                            </h3>
                            <p style={{ marginBottom: "16px" }}>
                                Our intelligent search system helps you find exactly what you need:
                            </p>

                            <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                                <li style={{ marginBottom: "8px" }}>AI-powered doctor and hospital recommendations</li>
                                <li style={{ marginBottom: "8px" }}>
                                    Advanced filtering by specialty, location, availability, and price
                                </li>
                                <li style={{ marginBottom: "8px" }}>Insurance plan compatibility checking</li>
                                <li style={{ marginBottom: "8px" }}>Language preference matching</li>
                                <li style={{ marginBottom: "8px" }}>Distance-based search with GPS integration</li>
                                <li style={{ marginBottom: "8px" }}>Real-time availability updates</li>
                            </ul>

                            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#222", marginBottom: "16px" }}>
                                Mobile-First Design
                            </h3>
                            <p style={{ marginBottom: "16px" }}>
                                MEDILINK is designed for modern life with full mobile optimization, offline capabilities for essential
                                features, push notifications for important updates, and seamless synchronization across all your
                                devices.
                            </p>
                        </div>
                    </section>

                    {/* Security and Privacy Section */}
                    <section style={{ marginBottom: "48px" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                color: "#3f51b5",
                                marginBottom: "24px",
                                borderBottom: "2px solid #3f51b5",
                                paddingBottom: "8px",
                            }}
                        >
                            🔒 Security and Privacy
                        </h2>

                        <div style={{ fontSize: "1.1rem", color: "#444" }}>
                            <p style={{ marginBottom: "16px" }}>
                                Your health information is protected with industry-leading security measures:
                            </p>

                            <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                                <li style={{ marginBottom: "8px" }}>End-to-end encryption for all medical data</li>
                                <li style={{ marginBottom: "8px" }}>HIPAA-compliant data handling and storage</li>
                                <li style={{ marginBottom: "8px" }}>Multi-factor authentication for account security</li>
                                <li style={{ marginBottom: "8px" }}>Regular security audits and updates</li>
                                <li style={{ marginBottom: "8px" }}>Granular privacy controls for data sharing</li>
                                <li style={{ marginBottom: "8px" }}>Secure communication channels with healthcare providers</li>
                                <li style={{ marginBottom: "8px" }}>Automatic data backup and recovery systems</li>
                            </ul>

                            <p style={{ marginBottom: "16px" }}>
                                We comply with all Kenyan data protection regulations and international healthcare privacy standards to
                                ensure your personal health information remains confidential and secure.
                            </p>
                        </div>
                    </section>

                    {/* Support and Accessibility Section */}
                    <section style={{ marginBottom: "32px" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                color: "#009688",
                                marginBottom: "24px",
                                borderBottom: "2px solid #009688",
                                paddingBottom: "8px",
                            }}
                        >
                            🤝 Support and Accessibility
                        </h2>

                        <div style={{ fontSize: "1.1rem", color: "#444" }}>
                            <p style={{ marginBottom: "16px" }}>MEDILINK is committed to making healthcare accessible to everyone:</p>

                            <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                                <li style={{ marginBottom: "8px" }}>24/7 customer support via phone, chat, and email</li>
                                <li style={{ marginBottom: "8px" }}>Multi-language support (English, Swahili, and local languages)</li>
                                <li style={{ marginBottom: "8px" }}>Accessibility features for users with disabilities</li>
                                <li style={{ marginBottom: "8px" }}>Comprehensive help documentation and tutorials</li>
                                <li style={{ marginBottom: "8px" }}>Community forums for peer support</li>
                                <li style={{ marginBottom: "8px" }}>Regular platform updates and feature improvements</li>
                                <li style={{ marginBottom: "8px" }}>Training programs for healthcare providers</li>
                            </ul>

                            <p
                                style={{
                                    marginBottom: "16px",
                                    textAlign: "center",
                                    fontSize: "1.2rem",
                                    fontWeight: "600",
                                    color: "#2196f3",
                                    padding: "24px",
                                    backgroundColor: "#f8f9fa",
                                    borderRadius: "8px",
                                }}
                            >
                                Join thousands of satisfied patients and healthcare providers who trust MEDILINK for their medical
                                needs. Experience the future of healthcare management today!
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
