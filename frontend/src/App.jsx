import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserLogin from './pages/auth/UserLogin';
import UserSignup from './pages/auth/UserSignup';
import DoctorLogin from './pages/auth/DoctorLogin';
import DoctorSignup from './pages/auth/DoctorSignup';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import DoctorProfile from './pages/doctor/DoctorProfile';
import UserDashboard from './pages/user/userDashboard';
import EmergencyReport from './pages/user/EmergencyReport';
import About from "./pages/common/About.jsx";
import HomePage from "./pages/common/HomePage";
import './styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/signup" element={<UserSignup />} />
                <Route path="/doctor/login" element={<DoctorLogin />} />
                <Route path="/doctor/signup" element={<DoctorSignup />} />
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                <Route path="/doctor/profile" element={<DoctorProfile />} />
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route path="/user/EmergencyReport" element={<EmergencyReport />} />
                <Route path="/user/About" element={<About />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;