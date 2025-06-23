import React, { useState } from 'react';
import './DoctorLogin.css';

const DoctorLogin = () => {
  const [formData, setFormData] = useState({
    staffID: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="login-root">
      <div className="login-card">
        {/* Left: Form */}
        <div className="login-form-section">
          <div className="login-header">
            <a href="/" className="logo-link">
              <div className="logo-icon">
                <img src="/MediLink.png" alt="MediLink Logo" width={32} height={32} />
              </div>
              <span className="logo-text">MEDILINK</span>
            </a>
            <h1>Welcome Back</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="login-card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Staff ID</label>
                <input
                  id="staffID"
                  name="staffID"
                  type="staffID"
                  className="form-input"
                  placeholder="Enter your staff ID"
                  value={formData.staffID}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary">Login</button>
            </form>
            <div className="login-footer">
              <p>
                Don't have an account?{' '}
                <a href="/doctor/login" className="doctor-link">Sign Up</a>
              </p>
              <p>
                Are you a doctor?{' '}
                <a href="/user/signup" className="signup-link">Doctor Login</a>
              </p>
            </div>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="login-illustration-section">
          <img src="/Doctor-Sign_Up.png" alt="Doctor Illustration" />
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
