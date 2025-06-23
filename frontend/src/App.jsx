import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserLogin from './pages/auth/UserLogin';
import UserSignup from './pages/auth/UserSignup';
import UserDashboard from './pages/user/userDashboard';
import EmergencyReport from './pages/user/EmergencyReport';
import About from "./pages/common/About.jsx";
import DoctorDashboard from "./pages/doctor/DoctorDashboard.jsx";
import RatingsPage from "./pages/doctor/MyRatings.jsx";
import HomePage from "./pages/common/HomePage"; // <-- Import your homepage
import './styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Homepage route */}
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/signup" element={<UserSignup />} />
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route path="/user/emergencyReport" element={<EmergencyReport />} />
                <Route path="/user/about" element={<About />} />
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                <Route path="/doctor/ratings" element={<RatingsPage />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;