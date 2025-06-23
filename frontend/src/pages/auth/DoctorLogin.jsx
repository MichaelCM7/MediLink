import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, BriefcaseMedical, Building, AlertCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ROUTES, USER_ROLES } from '../../utils/constant';

const DoctorLogin = () => {
  const [formData, setFormData] = useState({
    staffId: '',
    hospital: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hospitals, setHospitals] = useState([]);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.DOCTOR_DASHBOARD;

  // Simulate hospital fetch (replace with real fetch later)
  useEffect(() => {
    // TODO: Replace with API call to fetch registered hospitals from backend
    setHospitals([
      { id: 'h1', name: 'General Hospital Lagos' },
      { id: 'h2', name: 'Federal Medical Center Abuja' },
      { id: 'h3', name: 'University Teaching Hospital Ibadan' }
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.staffId.trim()) newErrors.staffId = 'Staff ID is required';
    if (!formData.hospital) newErrors.hospital = 'Select your hospital';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const result = await login(
        {
          staffId: formData.staffId,
          hospital: formData.hospital,
          password: formData.password
        },
        USER_ROLES.DOCTOR
      );

      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setErrors({ submit: result.error || 'Login failed. Please try again.' });
      }
    } catch (err) {
      setErrors({ submit: 'Unexpected error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full mb-4">
            <BriefcaseMedical className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Doctor Portal</h1>
          <p className="text-blue-200">Sign in to access your dashboard</p>
        </div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
          {errors.submit && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-sm text-red-200 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5" />
              <span>{errors.submit}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Staff ID */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Staff ID</label>
              <input
                type="text"
                name="staffId"
                value={formData.staffId}
                onChange={handleChange}
                placeholder="Enter your staff ID"
                className={`w-full px-4 py-3 bg-white/10 border ${
                  errors.staffId ? 'border-red-300' : 'border-white/30'
                } rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
              />
              {errors.staffId && (
                <p className="mt-1 text-sm text-red-300 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" /> <span>{errors.staffId}</span>
                </p>
              )}
            </div>

            {/* Hospital Dropdown */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Select Hospital</label>
              <div className="relative">
                <select
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  className={`w-full appearance-none bg-white/10 border ${
                    errors.hospital ? 'border-red-300' : 'border-white/30'
                  } text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                >
                  <option value="">-- Choose your hospital --</option>
                  {hospitals.map(h => (
                    <option key={h.id} value={h.name}>
                      {h.name}
                    </option>
                  ))}
                </select>
                <Building className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5 pointer-events-none" />
              </div>
              {errors.hospital && (
                <p className="mt-1 text-sm text-red-300 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" /> <span>{errors.hospital}</span>
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className={`w-full pl-10 pr-10 py-3 bg-white/10 border ${
                    errors.password ? 'border-red-300' : 'border-white/30'
                  } rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-300 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" /> <span>{errors.password}</span>
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <span className="loader mr-2 border-b-2 border-blue-900 h-5 w-5 rounded-full animate-spin" />
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        {/* Role Switch */}
        <div className="text-center mt-6 text-sm text-blue-200 space-y-2">
          <div>
            <span>Are you a patient? </span>
            <Link to={ROUTES.USER_LOGIN} className="hover:underline">
              User Login
            </Link>
          </div>
          <div>
            <span>Hospital administrator? </span>
            <Link to={ROUTES.ADMIN_LOGIN} className="hover:underline">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
