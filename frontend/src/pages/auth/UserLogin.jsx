import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, AlertCircle, HeartPulse } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { ROUTES, USER_ROLES } from "../../utils/constant";
import { validateEmail } from "../../utils/validators";
import { ButtonLoader } from "../../components/common/LoadingSpinner";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || ROUTES.USER_DASHBOARD;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (validateEmail(formData.email)) {
      newErrors.email = validateEmail(formData.email);
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const result = await login(
        { email: formData.email, password: formData.password },
        USER_ROLES.PATIENT
      );

      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setErrors({
          submit: result.error || "Login failed. Please try again.",
        });
      }
    } catch (error) {
      setErrors({ submit: "Unexpected error. Please try again." });
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
            <HeartPulse className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">User Portal</h1>
          <p className="text-blue-200">Sign in to access your account</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
          {errors.submit && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-sm text-red-200 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5" />
              <span>{errors.submit}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 border ${
                    errors.email ? "border-red-300" : "border-white/30"
                  } rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-300 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />{" "}
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className={`w-full pl-10 pr-10 py-3 bg-white/10 border ${
                    errors.password ? "border-red-300" : "border-white/30"
                  } rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-300 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />{" "}
                  <span>{errors.password}</span>
                </p>
              )}
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between text-sm text-blue-200">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <ButtonLoader /> <span className="ml-2">Signing In...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>

        {/* Account Redirect */}
        <div className="mt-6 text-center text-sm text-blue-200">
          Don't have an account?{" "}
          <Link to={ROUTES.USER_SIGNUP} className="underline hover:text-white">
            Sign up here
          </Link>
        </div>

        {/* Other Roles */}
        <div className="text-center mt-6 text-sm text-blue-300 space-y-2">
          <div>
            <span>Are you a doctor? </span>
            <Link to={ROUTES.DOCTOR_LOGIN} className="hover:underline">
              Doctor Login
            </Link>
          </div>
          <div>
            <span>Admin? </span>
            <Link to={ROUTES.ADMIN_LOGIN} className="hover:underline">
              Admin Login
            </Link>
          </div>
        </div>

        {/* Emergency Box */}
        <div className="mt-8 bg-red-500/20 border border-red-500/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-sm text-red-200">
            <AlertCircle className="w-5 h-5" />
            <span>
              Medical Emergency? Call 911 or{" "}
              <Link to="/emergency" className="underline font-semibold">
                use our emergency alert
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
