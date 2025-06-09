import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/auth/UserLogin';
import UserSignup from './pages/auth/UserSignup';
import './styles/global.css';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/signup" element={<UserSignup />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;