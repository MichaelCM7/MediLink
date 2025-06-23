import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constant';

const HomePage = () => (
  <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="flex items-center justify-between px-10 py-6 border-b border-gray-100">
      <div className="flex items-center space-x-2">
        <img src="/MediLink.png" alt="MediLink Logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-primary-blue">MEDILINK</span>
      </div>
      <nav className="flex items-center space-x-8">
        <a href="#" className="text-gray-700 hover:text-primary-blue font-medium">Services</a>
        <a href="#" className="text-gray-700 hover:text-primary-blue font-medium">Join us</a>
        <a href="#" className="text-gray-700 hover:text-primary-blue font-medium">About Us</a>
        <a href="#" className="text-gray-700 hover:text-primary-blue font-medium">Sign-Up</a>
        <Link to={ROUTES.USER_LOGIN} className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">Login</Link>
      </nav>
    </header>

    {/* Hero Section */}
    <section className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="flex-1 md:pr-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Emergency Help & Medical Appointments, Instantly
        </h1>
        <p className="text-gray-700 mb-6">
          Connect with trusted doctors and hospitals in Nairobi. Book appointments, access emergency services, and manage your healthcare journey with ease.
        </p>
        <div className="flex space-x-4 mb-4">
          <Link to="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            REQUEST AMBULANCE
          </Link>
          <Link to="#" className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition">
            Book Appointment
          </Link>
        </div>
        <p className="text-sm text-gray-500 italic">Saving Time. Saving Lives</p>
      </div>
      {/* Right Illustration */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/Doctor_Home.png"
          alt="Doctor Illustration"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>

    {/* Features Section */}
    <section className="max-w-7xl mx-auto px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <img src="/Ambulance_home.png" alt="Ambulance" className="mx-auto mb-2 w-12 h-12" />
          <h3 className="font-semibold text-gray-900 mb-1">24/7 Ambulance Dispatch</h3>
        </div>
        <div>
          <img src="/Calendar_home.png" alt="Book Doctors" className="mx-auto mb-2 w-12 h-12" />
          <h3 className="font-semibold text-gray-900 mb-1">Book Doctors Instantly</h3>
        </div>
        <div>
          <img src="/Location_home.png" alt="Smart Location" className="mx-auto mb-2 w-12 h-12" />
          <h3 className="font-semibold text-gray-900 mb-1">Smart Location Detection</h3>
        </div>
        <div>
          <img src="/clipboard-home.png" alt="Emergency Profile" className="mx-auto mb-2 w-12 h-12" />
          <h3 className="font-semibold text-gray-900 mb-1">Emergency Profile</h3>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;