import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Add this import
import './DoctorLogin.css';

const DoctorLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // <-- Add this line

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/auth/doctor/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg || 'Login failed');
      }
      const data = await response.json();
      // Handle successful login (e.g., save token, redirect)
      // localStorage.setItem('doctor', JSON.stringify(data)); // Optional: save doctor info
      navigate('/doctor/dashboard'); // <-- Redirect to DoctorDashboard
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
                <label className="form-label" htmlFor="email">Email</label>
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
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <div className="login-footer">
              <p>
                Don't have an account?{' '}
                <a href="/doctor/signup" className="doctor-link">Sign Up</a>
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
