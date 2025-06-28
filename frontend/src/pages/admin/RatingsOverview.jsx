"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function HospitalRating() {
    const [filterRating, setFilterRating] = useState("all")
    const [filterDepartment, setFilterDepartment] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    // Hospital Information
    const [hospitalInfo] = useState({
        name: "Nairobi Hospital",
        address: "Argwings Kodhek Road, Nairobi",
        phone: "+254 20 2845000",
        email: "info@nairobihospital.org",
        website: "www.nairobihospital.org",
        established: "1954",
        totalBeds: 350,
        totalDoctors: 120,
        totalRatings: 234,
        averageRating: 4.3,
        departments: ["Cardiology", "Gynecology", "Emergency", "Surgery", "Pediatrics", "Oncology"],
    })

    const [ratings] = useState([
        {
            id: 1,
            patientName: "Jane Doe",
            doctorName: "Dr. Sarah Smith",
            department: "Cardiology",
            rating: 5,
            review:
                "Excellent service and very professional staff. Dr. Smith was thorough and caring throughout my treatment.",
            date: "2025-01-14",
            verified: true,
            helpful: 12,
            treatmentType: "Heart Surgery",
        },
        {
            id: 2,
            patientName: "Michael Johnson",
            doctorName: "Dr. Emily Davis",
            department: "Pediatrics",
            rating: 5,
            review:
                "Amazing experience with my child's treatment. Dr. Davis was wonderful and very patient. Highly recommend this hospital.",
            date: "2025-01-13",
            verified: true,
            helpful: 15,
            treatmentType: "Child Checkup",
        },
        {
            id: 3,
            patientName: "Sarah Wilson",
            doctorName: "Dr. Lisa Taylor",
            department: "Gynecology",
            rating: 4,
            review: "Professional and knowledgeable doctor. Clean facilities and friendly staff. Wait time was reasonable.",
            date: "2025-01-12",
            verified: true,
            helpful: 9,
            treatmentType: "Routine Checkup",
        },
        {
            id: 4,
            patientName: "Robert Brown",
            doctorName: "Dr. James Anderson",
            department: "Surgery",
            rating: 5,
            review:
                "Outstanding surgical team and post-operative care. Recovery was smooth thanks to excellent nursing staff.",
            date: "2025-01-11",
            verified: true,
            helpful: 18,
            treatmentType: "Appendectomy",
        },
        {
            id: 5,
            patientName: "Mary Chen",
            doctorName: "Dr. David Wilson",
            department: "Emergency",
            rating: 4,
            review: "Quick response in emergency situation. Staff was efficient and caring during a stressful time.",
            date: "2025-01-10",
            verified: true,
            helpful: 11,
            treatmentType: "Emergency Care",
        },
        {
            id: 6,
            patientName: "John Lee",
            doctorName: "Dr. Maria Rodriguez",
            department: "Oncology",
            rating: 5,
            review:
                "Exceptional cancer care team. Dr. Rodriguez provided hope and excellent treatment throughout my journey.",
            date: "2025-01-09",
            verified: true,
            helpful: 22,
            treatmentType: "Cancer Treatment",
        },
        {
            id: 7,
            patientName: "Lisa Thompson",
            doctorName: "Dr. Ahmed Hassan",
            department: "Cardiology",
            rating: 3,
            review: "Good medical care but communication could be improved. Treatment was effective overall.",
            date: "2025-01-08",
            verified: false,
            helpful: 5,
            treatmentType: "Heart Consultation",
        },
        {
            id: 8,
            patientName: "David Kim",
            doctorName: "Dr. Grace Mwangi",
            department: "Pediatrics",
            rating: 4,
            review: "Great pediatric care. Dr. Mwangi was gentle with my daughter and explained everything clearly.",
            date: "2025-01-07",
            verified: true,
            helpful: 8,
            treatmentType: "Vaccination",
        },
    ])

    const [departmentStats] = useState([
        { department: "Cardiology", totalReviews: 45, averageRating: 4.5, satisfaction: 92 },
        { department: "Pediatrics", totalReviews: 38, averageRating: 4.7, satisfaction: 95 },
        { department: "Gynecology", totalReviews: 32, averageRating: 4.2, satisfaction: 88 },
        { department: "Surgery", totalReviews: 41, averageRating: 4.6, satisfaction: 94 },
        { department: "Emergency", totalReviews: 28, averageRating: 4.0, satisfaction: 85 },
        { department: "Oncology", totalReviews: 25, averageRating: 4.8, satisfaction: 97 },
    ])

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                style={{
                    color: index < rating ? "#fbbf24" : "#e5e7eb",
                    fontSize: "1.2rem",
                }}
            >
        ★
      </span>
        ))
    }

    const getRatingColor = (rating) => {
        if (rating >= 4) return "#4caf50"
        if (rating >= 3) return "#ff9800"
        return "#f44336"
    }

    const getRatingDistribution = () => {
        const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
        ratings.forEach((rating) => {
            distribution[rating.rating]++
        })
        return distribution
    }

    const ratingDistribution = getRatingDistribution()

    const filteredRatings = ratings.filter((rating) => {
        const matchesRating = filterRating === "all" || rating.rating.toString() === filterRating
        const matchesDepartment = filterDepartment === "all" || rating.department === filterDepartment
        const matchesSearch =
            rating.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            rating.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            rating.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            rating.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
            rating.treatmentType.toLowerCase().includes(searchTerm.toLowerCase())

        return matchesRating && matchesDepartment && matchesSearch
    })

    const handleFlagReview = (reviewId) => {
        alert(`Review ${reviewId} flagged for moderation`)
    }

    const handleDeleteReview = (reviewId) => {
        if (confirm("Are you sure you want to delete this review?")) {
            alert(`Review ${reviewId} deleted`)
        }
    }

    const handleVerifyReview = (reviewId) => {
        alert(`Review ${reviewId} verified`)
    }

    const handleRespondToReview = (reviewId) => {
        const response = prompt("Enter hospital response:")
        if (response) {
            alert(`Response added to review ${reviewId}`)
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
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: "32px" }}>
                    {hospitalInfo.name.toUpperCase()} - RATINGS & REVIEWS
                </h1>

                {/* Hospital Overview */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "12px",
                        padding: "32px",
                        marginBottom: "32px",
                    }}
                >
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "32px" }}>
                        {/* Hospital Info */}
                        <div>
                            <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#222", marginBottom: "16px" }}>
                                {hospitalInfo.name}
                            </h2>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                                <div>
                                    <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                                        <strong>Address:</strong> {hospitalInfo.address}
                                    </p>
                                    <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                                        <strong>Phone:</strong> {hospitalInfo.phone}
                                    </p>
                                    <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                                        <strong>Email:</strong> {hospitalInfo.email}
                                    </p>
                                </div>
                                <div>
                                    <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                                        <strong>Established:</strong> {hospitalInfo.established}
                                    </p>
                                    <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                                        <strong>Total Beds:</strong> {hospitalInfo.totalBeds}
                                    </p>
                                    <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                                        <strong>Total Doctors:</strong> {hospitalInfo.totalDoctors}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "8px" }}>Departments:</p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                    {hospitalInfo.departments.map((dept, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                backgroundColor: "#e3f2fd",
                                                color: "#1976d2",
                                                padding: "4px 12px",
                                                borderRadius: "16px",
                                                fontSize: "0.9rem",
                                                fontWeight: "500",
                                            }}
                                        >
                      {dept}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Rating Summary */}
                        <div style={{ textAlign: "center" }}>
                            <div
                                style={{
                                    fontSize: "4rem",
                                    fontWeight: "bold",
                                    color: getRatingColor(hospitalInfo.averageRating),
                                    marginBottom: "8px",
                                }}
                            >
                                {hospitalInfo.averageRating}
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginBottom: "8px" }}>
                                {renderStars(Math.round(hospitalInfo.averageRating))}
                            </div>
                            <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "16px" }}>
                                Based on {hospitalInfo.totalRatings} reviews
                            </p>

                            {/* Rating Distribution */}
                            <div style={{ textAlign: "left" }}>
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <div key={star} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                        <span style={{ fontSize: "0.9rem", width: "20px" }}>{star}★</span>
                                        <div
                                            style={{
                                                flex: 1,
                                                height: "8px",
                                                backgroundColor: "#e5e7eb",
                                                borderRadius: "4px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: `${(ratingDistribution[star] / ratings.length) * 100}%`,
                                                    height: "100%",
                                                    backgroundColor: "#fbbf24",
                                                }}
                                            />
                                        </div>
                                        <span style={{ fontSize: "0.8rem", color: "#666", width: "30px" }}>{ratingDistribution[star]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Department Performance */}
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
                        Department Performance
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
                        {departmentStats.map((dept, index) => (
                            <div
                                key={index}
                                style={{
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "8px",
                                    padding: "20px",
                                    backgroundColor: "#fafafa",
                                }}
                            >
                                <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#222", marginBottom: "12px" }}>
                                    {dept.department}
                                </h3>
                                <div style={{ marginBottom: "8px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                        <div style={{ display: "flex" }}>{renderStars(Math.round(dept.averageRating))}</div>
                                        <span
                                            style={{
                                                fontSize: "1.1rem",
                                                fontWeight: "bold",
                                                color: getRatingColor(dept.averageRating),
                                            }}
                                        >
                      {dept.averageRating}
                    </span>
                                    </div>
                                    <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 8px 0" }}>{dept.totalReviews} reviews</p>
                                    <div
                                        style={{
                                            backgroundColor: "#e8f5e8",
                                            color: "#2e7d32",
                                            padding: "4px 8px",
                                            borderRadius: "12px",
                                            fontSize: "0.8rem",
                                            fontWeight: "500",
                                            display: "inline-block",
                                        }}
                                    >
                                        {dept.satisfaction}% Satisfaction
                                    </div>
                                </div>
                            </div>
                        ))}
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
                                Search Reviews
                            </label>
                            <input
                                type="text"
                                placeholder="Search by patient, doctor, department, or review content..."
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

                        {/* Rating Filter */}
                        <div>
                            <label
                                style={{ display: "block", fontSize: "0.9rem", fontWeight: "500", color: "#222", marginBottom: "8px" }}
                            >
                                Rating
                            </label>
                            <select
                                value={filterRating}
                                onChange={(e) => setFilterRating(e.target.value)}
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
                                <option value="all">All Ratings</option>
                                <option value="5">5 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="1">1 Star</option>
                            </select>
                        </div>

                        {/* Department Filter */}
                        <div>
                            <label
                                style={{ display: "block", fontSize: "0.9rem", fontWeight: "500", color: "#222", marginBottom: "8px" }}
                            >
                                Department
                            </label>
                            <select
                                value={filterDepartment}
                                onChange={(e) => setFilterDepartment(e.target.value)}
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
                                <option value="all">All Departments</option>
                                {hospitalInfo.departments.map((dept, index) => (
                                    <option key={index} value={dept}>
                                        {dept}
                                    </option>
                                ))}
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
                            📊 Export Report
                        </button>
                    </div>
                </div>

                {/* Reviews List */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "12px",
                        padding: "32px",
                    }}
                >
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", marginBottom: "24px" }}>
                        Patient Reviews ({filteredRatings.length})
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {filteredRatings.map((rating) => (
                            <div
                                key={rating.id}
                                style={{
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "8px",
                                    padding: "24px",
                                    backgroundColor: "#fafafa",
                                }}
                            >
                                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "24px" }}>
                                    {/* Review Content */}
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                                            <div style={{ display: "flex" }}>{renderStars(rating.rating)}</div>
                                            <span
                                                style={{
                                                    fontSize: "1.1rem",
                                                    fontWeight: "bold",
                                                    color: getRatingColor(rating.rating),
                                                }}
                                            >
                        {rating.rating}/5
                      </span>
                                            {rating.verified && (
                                                <span
                                                    style={{
                                                        backgroundColor: "#4caf50",
                                                        color: "white",
                                                        padding: "2px 8px",
                                                        borderRadius: "12px",
                                                        fontSize: "0.8rem",
                                                        fontWeight: "500",
                                                    }}
                                                >
                          ✓ Verified
                        </span>
                                            )}
                                            <span
                                                style={{
                                                    backgroundColor: "#e3f2fd",
                                                    color: "#1976d2",
                                                    padding: "2px 8px",
                                                    borderRadius: "12px",
                                                    fontSize: "0.8rem",
                                                    fontWeight: "500",
                                                }}
                                            >
                        {rating.department}
                      </span>
                                        </div>

                                        <div style={{ marginBottom: "12px" }}>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 4px 0" }}>
                                                <strong>Patient:</strong> {rating.patientName} | <strong>Doctor:</strong> {rating.doctorName}
                                            </p>
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>
                                                <strong>Treatment:</strong> {rating.treatmentType} | <strong>Date:</strong> {rating.date}
                                            </p>
                                        </div>

                                        <p style={{ fontSize: "1rem", color: "#222", lineHeight: "1.6", margin: "0 0 12px 0" }}>
                                            "{rating.review}"
                                        </p>

                                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                            <span style={{ fontSize: "0.8rem", color: "#666" }}>👍 {rating.helpful} found this helpful</span>
                                        </div>
                                    </div>

                                    {/* Admin Actions */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "120px" }}>
                                        {!rating.verified && (
                                            <button
                                                onClick={() => handleVerifyReview(rating.id)}
                                                style={{
                                                    backgroundColor: "#4caf50",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "4px",
                                                    padding: "8px 12px",
                                                    fontSize: "0.8rem",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                ✓ Verify
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleRespondToReview(rating.id)}
                                            style={{
                                                backgroundColor: "#2196f3",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "4px",
                                                padding: "8px 12px",
                                                fontSize: "0.8rem",
                                                cursor: "pointer",
                                            }}
                                        >
                                            💬 Respond
                                        </button>
                                        <button
                                            onClick={() => handleFlagReview(rating.id)}
                                            style={{
                                                backgroundColor: "#ff9800",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "4px",
                                                padding: "8px 12px",
                                                fontSize: "0.8rem",
                                                cursor: "pointer",
                                            }}
                                        >
                                            🚩 Flag
                                        </button>
                                        <button
                                            onClick={() => handleDeleteReview(rating.id)}
                                            style={{
                                                backgroundColor: "#f44336",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "4px",
                                                padding: "8px 12px",
                                                fontSize: "0.8rem",
                                                cursor: "pointer",
                                            }}
                                        >
                                            🗑️ Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredRatings.length === 0 && (
                        <div style={{ textAlign: "center", padding: "48px", color: "#666" }}>
                            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>⭐</div>
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>No reviews found</h3>
                            <p>Try adjusting your search criteria or filters.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
