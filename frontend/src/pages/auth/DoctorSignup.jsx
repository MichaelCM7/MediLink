import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Heart, Hospital, Mail, Phone } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { ROUTES, USER_ROLES } from '../../utils/constant';
import { validateForm } from '../../utils/validators';
import { ButtonLoader } from '../../components/common/LoadingSpinner';
import './DoctorSignUp.css';

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    staffID: '',
    Hospital: '',
    specialization: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  // Validation rules
  const validationRules = {
    fullname: [{ type: 'required' }],
    staffID: [{ type: 'required' }],
    Hospital: [{ type: 'required' }],
    specialization: [{ type: 'required' }],
    password: [{ type: 'required' }, { type: 'password' }],
    confirmPassword: [
      { type: 'required' },
      {
        type: 'custom',
        validator: (value, formData) => {
          if (value !== formData.password) {
            return 'Passwords do not match';
          }
          return null;
        }
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validateForm(formData, validationRules);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const result = await register(formData, USER_ROLES.PATIENT);

      if (result.success) {
        // Show success message and redirect to login
        alert('Registration successful! Please check your email to verify your account.');
        navigate(ROUTES.DOCTOR_SIGNUP);
      } else {
        setErrors({ submit: result.error || 'Registration failed. Please try again.' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ submit: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-root">
      <div className="signup-card">
        {/* Left: Form */}
        <div className="signup-form-section">
          <div className="signup-header">
            <Link to={ROUTES.HOME} className="logo-link">
              <div className="logo-icon">
                <Heart size={28} color="#fff" style={{ background: "#2196f3", borderRadius: 8, padding: 4 }} />
              </div>
              <span className="logo-text">Medi-Link</span>
            </Link>
            <h1>Create Your Doctor Account</h1>
            <p className="signup-subtitle">Join our network of healthcare professionals</p>
          </div>
          <div className="signup-card-body">
            {errors.submit && (
              <div className="form-error" style={{ marginBottom: 16 }}>
                {errors.submit}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">FullName *</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className={`form-input${errors.fullname ? ' error' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.fullname && <div className="form-error">{errors.fullname}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">StaffID *</label>
                <input
                  type="text"
                  name="staffID"
                  value={formData.staffID}
                  onChange={handleInputChange}
                  className={`form-input${errors.staffID ? ' error' : ''}`}
                  placeholder="Enter your staff ID"
                />
                {errors.staffID && <div className="form-error">{errors.staffID}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Hospital *</label>
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="Hospital"
                    value={formData.Hospital}
                    onChange={handleInputChange}
                    className={`form-input${errors.Hospital ? ' error' : ''}`}
                    placeholder="Enter your employed hospital"
                  />
                </div>
                {errors.Hospital && <div className="form-error">{errors.Hospital}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Specialization *</label>
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className={`form-input${errors.specialization ? ' error' : ''}`}
                    placeholder="Enter your specialization"
                  />
                </div>
                {errors.specialization && <div className="form-error">{errors.specialization}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Password *</label>
                <div className="input-with-toggle">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`form-input${errors.password ? ' error' : ''}`}
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                {errors.password && <div className="form-error">{errors.password}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password *</label>
                <div className="input-with-toggle">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`form-input${errors.confirmPassword ? ' error' : ''}`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                {errors.confirmPassword && <div className="form-error">{errors.confirmPassword}</div>}
              </div>
              <div className="form-group" style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <input
                    type="checkbox"
                    id="agreedToTerms"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    style={{ marginTop: 2 }}
                  />
                  <label htmlFor="agreedToTerms" style={{ fontSize: '0.97rem', color: '#444' }}>
                    I agree to the{' '}
                    <Link to="/terms" className="signup-footer login-link">Terms and Conditions</Link> and{' '}
                    <Link to="/privacy" className="signup-footer login-link">Privacy Policy</Link> *
                  </label>
                </div>
                {errors.agreedToTerms && <div className="form-error">{errors.agreedToTerms}</div>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary"
              >
                {isLoading && <ButtonLoader />}
                Create Account
              </button>
            </form>
          </div>
          <div className="signup-footer">
            <p>
              Already have an account?{' '}
              <Link to={ROUTES.DOCTOR_LOGIN} className="login-link">Sign in here</Link>
            </p>
            <p>
              Are you a patient?{' '}
              <Link to={ROUTES.USER_LOGIN} className="doctor-link">Register as a patient</Link>
            </p>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="signup-illustration-section">
          <img
            src="/Doctor-Sign_Up.png"
            alt="Doctor Sign Up Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;