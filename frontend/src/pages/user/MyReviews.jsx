"use client"

import React, { useState } from "react"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/constant.js";

export default function RatingsAndReview() {
  const [reviewType, setReviewType] = useState("doctor")
  const [doctorName, setDoctorName] = useState("")
  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState("")
  const [hoveredStar, setHoveredStar] = useState(0)

  const previousReviews = [
    {
      id: 1,
      type: "Doctor Review",
      name: "John Doe",
      rating: 4,
      description: "Thank you so much for your help!",
    },
    {
      id: 2,
      type: "Hospital Review",
      name: "Nairobi Hospital",
      rating: 5,
      description: "The facilities are amazing!",
    },
    {
      id: 3,
      type: "Doctor Review",
      name: "Jane Foster",
      rating: 2,
      description: "Knowledgeable but arrogant!",
    },
    {
      id: 4,
      type: "Hospital Review",
      name: "Karen Hospital",
      rating: 3,
      description: "The facilities are decent enough.",
    },
  ]

  const handleSubmitReview = (e) => {
    e.preventDefault()
    // Handle review submission
    console.log("Review submitted:", { reviewType, doctorName, rating, reviewText })
    // Reset form
    setDoctorName("")
    setRating(0)
    setReviewText("")
  }

  const renderStars = (currentRating, isInteractive = false) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starNumber = index + 1
      const isFilled = isInteractive ? starNumber <= (hoveredStar || rating) : starNumber <= currentRating

      return (
          <span
              key={index}
              style={{
                fontSize: "2rem",
                color: isFilled ? "#fbbf24" : "#e5e7eb",
                cursor: isInteractive ? "pointer" : "default",
                transition: "color 0.2s",
              }}
              onClick={isInteractive ? () => setRating(starNumber) : undefined}
              onMouseEnter={isInteractive ? () => setHoveredStar(starNumber) : undefined}
              onMouseLeave={isInteractive ? () => setHoveredStar(0) : undefined}
          >
          ★
        </span>
      )
    })
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
        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: "32px" }}>
            RATINGS AND REVIEW
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {/* Submit a Review Section */}
            <div style={{ border: "2px solid #333", borderRadius: "16px", padding: "32px", backgroundColor: "white" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#222", marginBottom: "8px" }}>
                Submit a Review
              </h2>
              <p style={{ color: "#666", marginBottom: "24px", fontSize: "0.9rem" }}>
                Your feedback helps improve healthcare services
              </p>

              <form onSubmit={handleSubmitReview}>
                {/* Review Type Selection */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
                  <button
                      type="button"
                      onClick={() => setReviewType("doctor")}
                      style={{
                        flex: 1,
                        padding: "12px",
                        backgroundColor: reviewType === "doctor" ? "#2196f3" : "transparent",
                        color: reviewType === "doctor" ? "white" : "#222",
                        border: "1px solid #2196f3",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500",
                      }}
                  >
                    Doctor's Review
                  </button>
                  <button
                      type="button"
                      onClick={() => setReviewType("hospital")}
                      style={{
                        flex: 1,
                        padding: "12px",
                        backgroundColor: reviewType === "hospital" ? "#2196f3" : "transparent",
                        color: reviewType === "hospital" ? "white" : "#222",
                        border: "1px solid #2196f3",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500",
                      }}
                  >
                    Hospital Review
                  </button>
                </div>

                {/* Doctor/Hospital Name */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                      style={{
                        display: "block",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#222",
                        marginBottom: "8px",
                      }}
                  >
                    {reviewType === "doctor" ? "<Doctor/" : "<Hospital/"} Name
                  </label>
                  <input
                      type="text"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontSize: "0.9rem",
                      }}
                      required
                  />
                </div>

                {/* Rating */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                      style={{
                        display: "block",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#222",
                        marginBottom: "8px",
                      }}
                  >
                    Rating
                  </label>
                  <div style={{ display: "flex", gap: "4px" }}>{renderStars(rating, true)}</div>
                </div>

                {/* Review Text */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                      style={{
                        display: "block",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#222",
                        marginBottom: "8px",
                      }}
                  >
                    Your Review
                  </label>
                  <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      rows={4}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontSize: "0.9rem",
                        resize: "vertical",
                      }}
                      required
                  />
                  <p style={{ fontSize: "0.8rem", color: "#666", margin: "4px 0 0 0" }}>Maximum of 50 characters</p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                      backgroundColor: "#2196f3",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "12px 24px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      cursor: "pointer",
                      float: "right",
                    }}
                >
                  Submit Review
                </button>
              </form>
            </div>

            {/* Previous Reviews Section */}
            <div style={{ border: "2px solid #333", borderRadius: "16px", padding: "32px", backgroundColor: "white" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#222", marginBottom: "24px" }}>
                Previous Reviews
              </h2>

              <div style={{ height: "500px", overflowY: "auto", paddingRight: "8px" }}>
                {previousReviews.map((review) => (
                    <div
                        key={review.id}
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          padding: "16px",
                          marginBottom: "16px",
                          backgroundColor: "#fafafa",
                        }}
                    >
                      <div style={{ marginBottom: "8px" }}>
                        <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#222", margin: "0 0 4px 0" }}>
                          {review.type}
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "#666", margin: "0 0 4px 0" }}>
                          {review.type.includes("Doctor") ? "Doctor's Name: " : "Hospital Name: "}
                          {review.name}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                          <span style={{ fontSize: "0.85rem", color: "#666" }}>Rating:</span>
                          <div style={{ display: "flex", gap: "2px" }}>{renderStars(review.rating)}</div>
                        </div>
                        <p style={{ fontSize: "0.85rem", color: "#666", margin: "0" }}>Description: {review.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}
