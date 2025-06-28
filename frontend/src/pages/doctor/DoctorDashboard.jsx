import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constant';

const HomePage = () => (
  <div className="homepage-root">
    {/* Header */}
    <header className="homepage-header">
      <div className="homepage-logo">
        <img src="/MediLink.png" alt="MediLink Logo" className="homepage-logo-img" />
        <span className="homepage-logo-text">MEDILINK</span>
      </div>
      <nav className="homepage-nav">
        <Link to={ROUTES.DOCTOR_DASHBOARD} className="hover:text-blue-600">Home</Link>
        <Link to={ROUTES.DOCTOR_PATIENT_REQUESTS} className="hover:text-blue-600">Manage Appointments</Link>
        <Link to={ROUTES.DOCTOR_PATIENT_HISTORY} className="hover:text-blue-600">Patient Records</Link>
        <Link
          to={ROUTES.DOCTOR_RATINGS}
          className="homepage-Doctor_Ratings-btn"
        >
          Monitor Ratings
        </Link>
        <Link to={ROUTES.DOCTOR_ABOUT} className="hover:text-blue-600">About Us</Link>
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

    {/* Hero Section */}
    <section className="homepage-hero">
      {/* Left */}
      <div className="homepage-hero-content">
        <h1 className="homepage-hero-title">
          Emergency Help & Medical Appointments, Instantly
        </h1>
        <p className="homepage-hero-desc">
          Connect with trusted doctors and hospitals in Nairobi. Book appointments, access emergency services, and manage your healthcare journey with ease.
        </p>
        <div className="homepage-hero-actions">
          <Link to={ROUTES.DOCTOR_PATIENT_REQUESTS} className="primary">
            Manage Appointments
          </Link>
          <Link to={ROUTES.DOCTOR_PATIENT_HISTORY} className="secondary">
            Patient Records
          </Link>
        </div>
        <p className="homepage-hero-caption">Saving Time. Saving Lives</p>
      </div>
      {/* Right */}
      <div className="homepage-hero-img">
        <img src="/Doctor_Home.png" alt="Doctor Illustration" />
      </div>
    </section>

    {/* Features */}
    <section className="homepage-features">
      <div>
        <img src="/Calendar_home.png" alt="Book Doctors" className="homepage-feature-icon" />
        <h3 className="homepage-feature-title">Monitoring Appointments</h3>
      </div>
      <div>
        <img src="/clipboard-home.png" alt="Emergency Profile" className="homepage-feature-icon" />
        <h3 className="homepage-feature-title">Patient Records</h3>
      </div>
      <div>
        <img src="/Location_home.png" alt="Smart Location" className="homepage-feature-icon" />
        <h3 className="homepage-feature-title">Monitoring Ratings</h3>
      </div>
    </section>
  </div>
);

export default HomePage;
