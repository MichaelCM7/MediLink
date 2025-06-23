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
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Manage Appointments</a>
        <a href="#" className="hover:text-blue-600">Patient Records</a>
        <a href="#" className="hover:text-blue-600">Monitor Ratings</a>
        <a href="#" className="hover:text-blue-600">About Us</a>
        <Link
          to={ROUTES.DOCTOR_PROFILE}
          className="homepage-Sign-Up-btn"
        >
          Profile
        </Link>
        <Link
          to={ROUTES.USER_LOGIN}
          className="homepage-login-btn"
        >
          Logout
        </Link>
      </nav>
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
          <Link to="#" className="primary">
            Manage Appointments
          </Link>
          <Link to="#" className="secondary">
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
