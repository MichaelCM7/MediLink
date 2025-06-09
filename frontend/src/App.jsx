import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserSignup from './pages/auth/UserSignup';
import './styles/global.css';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserSignup />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;