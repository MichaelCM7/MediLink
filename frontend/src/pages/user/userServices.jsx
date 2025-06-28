"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function Services() {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchType, setSearchType] = useState("doctors") // "doctors" or "hospitals"
    const [selectedSpecialty, setSelectedSpecialty] = useState("")
    const [selectedAvailability, setSelectedAvailability] = useState("")
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [selectedDate, setSelectedDate] = useState("")
    const [selectedTime, setSelectedTime] = useState("")
    const [insurancePlan, setInsurancePlan] = useState("")
    const [showBookingForm, setShowBookingForm] = useState(false)

    const specialties = [
        { id: "cardiology", name: "Cardiology", icon: "❤️" },
        { id: "dermatology", name: "Dermatology", icon: "🧴" },
        { id: "pediatrics", name: "Pediatrics", icon: "👶" },
        { id: "orthopedics", name: "Orthopedics", icon: "🦴" },
        { id: "neurology", name: "Neurology", icon: "🧠" },
        { id: "gynecology", name: "Gynecology", icon: "👩‍⚕️" },
        { id: "psychiatry", name: "Psychiatry", icon: "🧘" },
        { id: "ent", name: "ENT", icon: "👂" },
        { id: "ophthalmology", name: "Ophthalmology", icon: "👁️" },
        { id: "general", name: "General Practice", icon: "🩺" },
    ]

    const availabilityOptions = [
        { id: "today", name: "Today" },
        { id: "tomorrow", name: "Tomorrow" },
        { id: "this-week", name: "This Week" },
        { id: "next-week", name: "Next Week" },
        { id: "anytime", name: "Anytime" },
    ]

    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialty: "Cardiology",
            hospital: "Nairobi Hospital",
            rating: 4.8,
            experience: "15 years",
            availability: "Available Today",
            nextSlot: "2:30 PM",
            image: "👩‍⚕️",
            consultationFee: "KSh 3,500",
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            specialty: "Dermatology",
            hospital: "Karen Hospital",
            rating: 4.9,
            experience: "12 years",
            availability: "Available Tomorrow",
            nextSlot: "10:00 AM",
            image: "👨‍⚕️",
            consultationFee: "KSh 2,800",
        },
        {
            id: 3,
            name: "Dr. Emily Rodriguez",
            specialty: "Pediatrics",
            hospital: "Aga Khan Hospital",
            rating: 4.7,
            experience: "10 years",
            availability: "Available Today",
            nextSlot: "4:00 PM",
            image: "👩‍⚕️",
            consultationFee: "KSh 3,000",
        },
        {
            id: 4,
            name: "Dr. James Wilson",
            specialty: "Orthopedics",
            hospital: "Nairobi Hospital",
            rating: 4.6,
            experience: "18 years",
            availability: "Available This Week",
            nextSlot: "Mon 9:00 AM",
            image: "👨‍⚕️",
            consultationFee: "KSh 4,000",
        },
        {
            id: 5,
            name: "Dr. Lisa Thompson",
            specialty: "Neurology",
            hospital: "Karen Hospital",
            rating: 4.9,
            experience: "20 years",
            availability: "Available Next Week",
            nextSlot: "Wed 11:30 AM",
            image: "👩‍⚕️",
            consultationFee: "KSh 5,000",
        },
        {
            id: 6,
            name: "Dr. David Kim",
            specialty: "General Practice",
            hospital: "City Clinic",
            rating: 4.5,
            experience: "8 years",
            availability: "Available Today",
            nextSlot: "1:15 PM",
            image: "👨‍⚕️",
            consultationFee: "KSh 2,000",
        },
    ]

    const hospitals = [
        {
            id: 1,
            name: "Nairobi Hospital",
            location: "Upper Hill, Nairobi",
            rating: 4.7,
            specialties: ["Cardiology", "Orthopedics", "General Practice"],
            availableDoctors: 15,
            image: "🏥",
            emergencyServices: true,
        },
        {
            id: 2,
            name: "Karen Hospital",
            location: "Karen, Nairobi",
            rating: 4.8,
            specialties: ["Dermatology", "Neurology", "Pediatrics"],
            availableDoctors: 12,
            image: "🏥",
            emergencyServices: true,
        },
        {
            id: 3,
            name: "Aga Khan Hospital",
            location: "Parklands, Nairobi",
            rating: 4.9,
            specialties: ["Pediatrics", "Gynecology", "ENT"],
            availableDoctors: 20,
            image: "🏥",
            emergencyServices: true,
        },
        {
            id: 4,
            name: "City Clinic",
            location: "CBD, Nairobi",
            rating: 4.4,
            specialties: ["General Practice", "Psychiatry"],
            availableDoctors: 8,
            image: "🏥",
            emergencyServices: false,
        },
    ]

    const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM", "6:00 PM"]

    const filteredResults = () => {
        if (searchType === "doctors") {
            return doctors.filter((doctor) => {
                const matchesSearch =
                    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase())

                const matchesSpecialty =
                    !selectedSpecialty || doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase())

                return matchesSearch && matchesSpecialty
            })
        } else {
            return hospitals.filter((hospital) => {
                const matchesSearch =
                    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    hospital.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    hospital.specialties.some((spec) => spec.toLowerCase().includes(searchQuery.toLowerCase()))

                return matchesSearch
            })
        }
    }

    const handleBookAppointment = (doctor) => {
        setSelectedDoctor(doctor)
        setShowBookingForm(true)
    }

    const handleConfirmBooking = () => {
        if (selectedDoctor && selectedDate && selectedTime) {
            alert(`Appointment booked with ${selectedDoctor.name} on ${selectedDate} at ${selectedTime}`)
            setShowBookingForm(false)
            setSelectedDoctor(null)
            setSelectedDate("")
            setSelectedTime("")
            setInsurancePlan("")
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
            <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "48px 32px" }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: "32px" }}>
                    MEDICAL SERVICES
                </h1>

                {/* Search Section */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "16px",
                        padding: "32px",
                        marginBottom: "32px",
                    }}
                >
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#222", marginBottom: "24px" }}>
                        Find Healthcare Providers
                    </h2>

                    {/* Search Type Toggle */}
                    <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
                        <button
                            onClick={() => setSearchType("doctors")}
                            style={{
                                padding: "12px 24px",
                                backgroundColor: searchType === "doctors" ? "#2196f3" : "transparent",
                                color: searchType === "doctors" ? "white" : "#222",
                                border: "1px solid #2196f3",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            🩺 Find Doctors
                        </button>
                        <button
                            onClick={() => setSearchType("hospitals")}
                            style={{
                                padding: "12px 24px",
                                backgroundColor: searchType === "hospitals" ? "#2196f3" : "transparent",
                                color: searchType === "hospitals" ? "white" : "#222",
                                border: "1px solid #2196f3",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            🏥 Find Hospitals
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div style={{ marginBottom: "24px" }}>
                        <input
                            type="text"
                            placeholder={`Search for ${searchType === "doctors" ? "doctors, specialties, or hospitals" : "hospitals or locations"}...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "16px 20px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                fontSize: "1rem",
                                outline: "none",
                                transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = "#2196f3"
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = "#ddd"
                            }}
                        />
                    </div>

                    {/* Specialty Filters (for doctors) */}
                    {searchType === "doctors" && (
                        <div style={{ marginBottom: "24px" }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#222", marginBottom: "16px" }}>
                                Filter by Specialty
                            </h3>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                                    gap: "12px",
                                }}
                            >
                                {specialties.map((specialty) => (
                                    <button
                                        key={specialty.id}
                                        onClick={() => setSelectedSpecialty(selectedSpecialty === specialty.name ? "" : specialty.name)}
                                        style={{
                                            padding: "12px 16px",
                                            backgroundColor: selectedSpecialty === specialty.name ? "#258AE9" : "#258AE9",
                                            border: selectedSpecialty === specialty.name ? "2px solid #2196f3" : "1px solid #e5e7eb",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            fontSize: "0.9rem",
                                            fontWeight: "500",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            transition: "all 0.2s",
                                        }}
                                    >
                                        <span style={{ fontSize: "1.2rem" }}>{specialty.icon}</span>
                                        {specialty.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Availability Filters */}
                    <div>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#222", marginBottom: "16px" }}>
                            Filter by Availability
                        </h3>
                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                            {availabilityOptions.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => setSelectedAvailability(selectedAvailability === option.id ? "" : option.id)}
                                    style={{
                                        padding: "8px 16px",
                                        backgroundColor: selectedAvailability === option.id ? "#2196f3" : "transparent",
                                        color: selectedAvailability === option.id ? "white" : "#222",
                                        border: "1px solid #2196f3",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        fontSize: "0.9rem",
                                        fontWeight: "500",
                                    }}
                                >
                                    {option.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #333",
                        borderRadius: "16px",
                        padding: "32px",
                    }}
                >
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#222", marginBottom: "24px" }}>
                        {searchType === "doctors" ? "Available Doctors" : "Available Hospitals"} ({filteredResults().length})
                    </h2>

                    {/* Results Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                            gap: "24px",
                        }}
                    >
                        {filteredResults().map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "12px",
                                    padding: "24px",
                                    backgroundColor: "#f8f9fa",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)"
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)"
                                    e.currentTarget.style.boxShadow = "none"
                                }}
                            >
                                {searchType === "doctors" ? (
                                    // Doctor Card
                                    <>
                                        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                                            <div
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    backgroundColor: "#e3f2fd",
                                                    borderRadius: "50%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "2rem",
                                                }}
                                            >
                                                {item.image}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#222", margin: "0 0 4px 0" }}>
                                                    {item.name}
                                                </h3>
                                                <p style={{ color: "#666", margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                                                    {item.specialty} • {item.experience}
                                                </p>
                                                <p style={{ color: "#666", margin: "0", fontSize: "0.9rem" }}>📍 {item.hospital}</p>
                                            </div>
                                            <div style={{ textAlign: "right" }}>
                                                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
                                                    <span style={{ color: "#fbbf24", fontSize: "1rem" }}>⭐</span>
                                                    <span style={{ fontSize: "0.9rem", fontWeight: "600" }}>{item.rating}</span>
                                                </div>
                                                <p style={{ fontSize: "0.8rem", color: "#666", margin: "0" }}>{item.consultationFee}</p>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                paddingTop: "16px",
                                                borderTop: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <div>
                                                <p style={{ fontSize: "0.9rem", color: "#16a34a", fontWeight: "600", margin: "0 0 4px 0" }}>
                                                    {item.availability}
                                                </p>
                                                <p style={{ fontSize: "0.8rem", color: "#666", margin: "0" }}>
                                                    Next available: {item.nextSlot}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => handleBookAppointment(item)}
                                                style={{
                                                    backgroundColor: "#2196f3",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "6px",
                                                    padding: "10px 20px",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "500",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Book Appointment
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    // Hospital Card
                                    <>
                                        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                                            <div
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    backgroundColor: "#e3f2fd",
                                                    borderRadius: "12px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "2rem",
                                                }}
                                            >
                                                {item.image}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#222", margin: "0 0 4px 0" }}>
                                                    {item.name}
                                                </h3>
                                                <p style={{ color: "#666", margin: "0 0 4px 0", fontSize: "0.9rem" }}>📍 {item.location}</p>
                                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                    <span style={{ color: "#fbbf24", fontSize: "1rem" }}>⭐</span>
                                                    <span style={{ fontSize: "0.9rem", fontWeight: "600" }}>{item.rating}</span>
                                                    {item.emergencyServices && (
                                                        <span
                                                            style={{
                                                                backgroundColor: "#dc2626",
                                                                color: "white",
                                                                padding: "2px 8px",
                                                                borderRadius: "4px",
                                                                fontSize: "0.7rem",
                                                                fontWeight: "600",
                                                                marginLeft: "8px",
                                                            }}
                                                        >
                              24/7 Emergency
                            </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: "16px" }}>
                                            <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#222", margin: "0 0 8px 0" }}>
                                                Specialties:
                                            </p>
                                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                                {item.specialties.map((specialty, index) => (
                                                    <span
                                                        key={index}
                                                        style={{
                                                            backgroundColor: "#e3f2fd",
                                                            color: "#1565c0",
                                                            padding: "4px 8px",
                                                            borderRadius: "4px",
                                                            fontSize: "0.8rem",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                            {specialty}
                          </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                paddingTop: "16px",
                                                borderTop: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>
                                                {item.availableDoctors} doctors available
                                            </p>
                                            <button
                                                style={{
                                                    backgroundColor: "transparent",
                                                    color: "#2196f3",
                                                    border: "1px solid #2196f3",
                                                    borderRadius: "6px",
                                                    padding: "10px 20px",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "500",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                View Doctors
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    {filteredResults().length === 0 && (
                        <div style={{ textAlign: "center", padding: "48px 0" }}>
                            <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🔍</div>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#666", marginBottom: "8px" }}>
                                No results found
                            </h3>
                            <p style={{ color: "#666", fontSize: "0.9rem" }}>Try adjusting your search criteria or filters</p>
                        </div>
                    )}
                </div>

                {/* Booking Modal */}
                {showBookingForm && selectedDoctor && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0,0,0,0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1000,
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "32px",
                                maxWidth: "500px",
                                width: "90%",
                                maxHeight: "80vh",
                                overflowY: "auto",
                            }}
                        >
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#222", marginBottom: "24px" }}>
                                Book Appointment with {selectedDoctor.name}
                            </h2>

                            {/* Doctor Info */}
                            <div
                                style={{
                                    backgroundColor: "#f8f9fa",
                                    borderRadius: "8px",
                                    padding: "16px",
                                    marginBottom: "24px",
                                }}
                            >
                                <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                                    <strong>Specialty:</strong> {selectedDoctor.specialty}
                                </p>
                                <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                                    <strong>Hospital:</strong> {selectedDoctor.hospital}
                                </p>
                                <p style={{ margin: "0", fontSize: "0.9rem" }}>
                                    <strong>Consultation Fee:</strong> {selectedDoctor.consultationFee}
                                </p>
                            </div>

                            {/* Insurance Plan */}
                            <div style={{ marginBottom: "24px" }}>
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#222",
                                        marginBottom: "8px",
                                    }}
                                >
                                    Insurance Plan (Optional)
                                </label>
                                <input
                                    type="text"
                                    value={insurancePlan}
                                    onChange={(e) => setInsurancePlan(e.target.value)}
                                    placeholder="Enter your insurance plan"
                                    style={{
                                        width: "100%",
                                        padding: "12px",
                                        border: "1px solid #ddd",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                    }}
                                />
                            </div>

                            {/* Date Selection */}
                            <div style={{ marginBottom: "24px" }}>
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#222",
                                        marginBottom: "8px",
                                    }}
                                >
                                    Select Date
                                </label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={new Date().toISOString().split("T")[0]}
                                    style={{
                                        width: "100%",
                                        padding: "12px",
                                        border: "1px solid #ddd",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                    }}
                                />
                            </div>

                            {/* Time Selection */}
                            <div style={{ marginBottom: "32px" }}>
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#222",
                                        marginBottom: "8px",
                                    }}
                                >
                                    Select Time
                                </label>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            style={{
                                                padding: "10px",
                                                backgroundColor: selectedTime === time ? "#2196f3" : "transparent",
                                                color: selectedTime === time ? "white" : "#222",
                                                border: "1px solid #2196f3",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: "flex", gap: "12px" }}>
                                <button
                                    onClick={() => setShowBookingForm(false)}
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        backgroundColor: "transparent",
                                        color: "#666",
                                        border: "1px solid #ddd",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmBooking}
                                    disabled={!selectedDate || !selectedTime}
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        backgroundColor: selectedDate && selectedTime ? "#2196f3" : "#ccc",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: selectedDate && selectedTime ? "pointer" : "not-allowed",
                                        fontSize: "0.9rem",
                                        fontWeight: "500",
                                    }}
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
