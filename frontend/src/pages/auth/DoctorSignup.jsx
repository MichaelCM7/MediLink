import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { ROUTES, USER_ROLES } from '../../utils/constant';
import { validateForm } from '../../utils/validators';
import { ButtonLoader } from '../../components/common/LoadingSpinner';
import './DoctorSignUp.css';

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    specialisation: '',
    hospitalName: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  // Validation rules
  const validationRules = {
    firstName: [{ type: 'required' }],
    lastName: [{ type: 'required' }],
    email: [{ type: 'required' }, { type: 'email' }],
    phone: [{ type: 'required' }],
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
    ],
    specialisation: [{ type: 'required' }],
    hospitalName: [{ type: 'required' }],
    agreedToTerms: [
      {
        type: 'custom',
        validator: (value) => value ? null : 'You must agree to the terms.'
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

    // Only send the fields your backend expects
    const submitData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      specialisation: formData.specialisation,
      hospitalName: formData.hospitalName
    };

    try {
      const result = await register(submitData, USER_ROLES.DOCTOR);

      if (result.success) {
        alert('Registration successful! Please check your email to verify your account.');
        navigate(ROUTES.DOCTOR_LOGIN);
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
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`form-input${errors.firstName ? ' error' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <div className="form-error">{errors.firstName}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`form-input${errors.lastName ? ' error' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <div className="form-error">{errors.lastName}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input${errors.email ? ' error' : ''}`}
                  placeholder="Enter your email"
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Phone *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`form-input${errors.phone ? ' error' : ''}`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <div className="form-error">{errors.phone}</div>}
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
              <div className="form-group">
                <label className="form-label">Specialisation *</label>
                <input
                  type="text"
                  name="specialisation"
                  value={formData.specialisation}
                  onChange={handleInputChange}
                  className={`form-input${errors.specialisation ? ' error' : ''}`}
                  placeholder="Enter your specialisation"
                />
                {errors.specialisation && <div className="form-error">{errors.specialisation}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Hospital Name *</label>
                <input
                  type="text"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleInputChange}
                  className={`form-input${errors.hospitalName ? ' error' : ''}`}
                  placeholder="Enter your hospital name"
                />
                {errors.hospitalName && <div className="form-error">{errors.hospitalName}</div>}
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