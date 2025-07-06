import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ROUTES, USER_ROLES } from '../../utils/constant';
import './UserLogin.css';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData, USER_ROLES.PATIENT);
    if (result.success) {
      navigate(ROUTES.USER_DASHBOARD);
    } else {
      alert(result.error || "Login failed. Please try again.");
    }
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
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
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
                <a href="/user/signup" className="signup-link">Sign Up</a>
              </p>
              <p>
                Are you a doctor?{' '}
                <a href="/doctor/login" className="doctor-link">Doctor Login</a>
              </p>
            </div>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="login-illustration-section">
          <img src="/Patient_Sign-Up.png" alt="Patient Illustration" />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
