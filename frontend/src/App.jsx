import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserLogin from './pages/auth/UserLogin';
import UserSignup from './pages/auth/UserSignup';
import UserDashboard from './pages/user/userDashboard'; // <-- Import the dashboard
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
            </Routes>
        </BrowserRouter>
    );
};

export default App;