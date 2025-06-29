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
          <Link to={ROUTES.EMERGENCY} className="primary">
            REQUEST AMBULANCE
          </Link>
          <Link to={ROUTES.USER_LOGIN} className="secondary">
            Book Appointment
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
        <img src="/Ambulance_home.png" alt="Ambulance" className="homepage-feature-icon" />
        <h3 className="homepage-feature-title">24/7 Ambulance Dispatch</h3>
      </div>
      <div>
        <img src="/Calendar_home.png" alt="Book Doctors" className="homepage-feature-icon" />
        <h3 className="homepage-feature-title">Book Doctors Instantly</h3>
      </div>
      <div>
        <img src="/Location_home.png" alt="Smart Location" className="homepage-feature-icon" />
        <h3 className="homepage-feature-title">Smart Location Detection</h3>
      </div>
      <div>
        <img src="/clipboard-home.png" alt="Emergency Profile" className="homepage-feature-icon" />
        <h3 className="homepage-feature-title">Emergency Profile</h3>
      </div>
    </section>
  </div>
);

export default HomePage;
