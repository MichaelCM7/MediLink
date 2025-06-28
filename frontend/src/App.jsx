import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/auth/UserLogin';
import UserSignup from './pages/auth/UserSignup';
import DoctorLogin from './pages/auth/DoctorLogin';
import DoctorSignup from './pages/auth/DoctorSignup';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import PatientDetails from "./pages/doctor/PatientHistory.jsx";
import PatientRecords from "./pages/doctor/PatientRecords.jsx";
import ManageAppointments from "./pages/doctor/PatientRequests.jsx";
import SettingsPage from "./pages/doctor/DoctorSettings.jsx";
import DoctorProfile from './pages/doctor/DoctorProfile';
import DoctorRatings from './pages/doctor/DoctorRatings.jsx';
import UserProfile from './pages/user/UserProfile.jsx';
import UserDashboard from './pages/user/userDashboard';
import EmergencyReport from './pages/user/EmergencyReport';
import About from "./pages/common/About.jsx";
import HomePage from "./pages/common/HomePage";
import './styles/global.css';
import MyReviews from "./pages/user/MyReviews.jsx";
import MedicalHistory from "./pages/user/AppointmentHistory.jsx";
import PatientSettings from "./pages/user/UserSettings.jsx";
import Services from "./pages/user/userServices.jsx";
import MedicalReport from "./pages/user/MedicalHistory.jsx";
import UserAbout from "./pages/user/userAbout.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/signup" element={<UserSignup />} />
                <Route path="/user/profile" element={<UserProfile />} />
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route path="/user/emergencyReport" element={<EmergencyReport />} />
                <Route path="/user/myReview" element={<MyReviews />} />
                <Route path="/user/history" element={<MedicalHistory />} />
                <Route path="/user/history/report" element={<MedicalReport />} />
                <Route path="/user/settings" element={<PatientSettings />} />
                <Route path="/user/services" element={<Services />} />
                <Route path="/user/userAbout" element={<UserAbout />} />
                <Route path="/doctor/login" element={<DoctorLogin />} />
                <Route path="/doctor/signup" element={<DoctorSignup />} />
                <Route path="/doctor/About" element={<About />} />
                <Route path="/doctor/patientHistory/patientDetails" element={<PatientDetails />}/>
                <Route path="/doctor/patientHistory" element={<PatientRecords />}/>
                <Route path="/doctor/manageAppointments" element={<ManageAppointments />} />
                <Route path="/doctor/settings" element={<SettingsPage />} />
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                <Route path="/doctor/profile" element={<DoctorProfile />} />
                <Route path="/doctor/ratings" element={<DoctorRatings />} />
                <Route path="" element={<HomePage />} />

                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;