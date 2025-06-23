import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserLogin from './pages/auth/UserLogin';
import UserSignup from './pages/auth/UserSignup';
import UserDashboard from './pages/user/userDashboard';// <-- Import the dashboard
import EmergencyReport from './pages/user/EmergencyReport';
import About from "./pages/common/About.jsx";
import './styles/global.css';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/user/signup" replace />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/signup" element={<UserSignup />} />
                <Route path="/user/dashboard" element={<UserDashboard />} /> {/* Dashboard route */}
                {<Route path="*" element={<div>Page Not Found</div>} />}
                <Route path="/user/EmergencyReport" element={<EmergencyReport />} />
                <Route path="/user/About" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;