export const API_BASE_URL = 'http://localhost:8080/api';

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    USER_LOGIN: '/user/login',
    USER_SIGNUP: '/user/signup',
    USER_PROFILE: '/user/profile',
    USER_DASHBOARD: '/user/dashboard',
    BOOK_APPOINTMENT: '/user/book-appointment',
    USER_EMERGENCY: '/user/emergencyReport',
    USER_APPOINTMENT_HISTORY: '/user/history',
    USER_MEDICAL_HISTORY: '/user/history/report',
    USER_REVIEWS: '/user/myReview',
    USER_SERVICES: '/user/services',
    USER_SETTINGS: '/user/settings',
    USER_ABOUT: '/user/userAbout',
    DOCTOR_LOGIN: '/doctor/login',
    DOCTOR_SIGNUP: '/doctor/signup',
    DOCTOR_DASHBOARD: '/doctor/dashboard',
    DOCTOR_PROFILE: '/doctor/profile',
    DOCTOR_RATINGS: '/doctor/ratings',
    DOCTOR_ABOUT: '/doctor/about',
    DOCTOR_APPOINTMENTS: '/doctor/appointments',
    DOCTOR_PATIENT_HISTORY: '/doctor/patientHistory',
    DOCTOR_PATIENT_DETAILS: '/doctor/patientHistory/patientDetails',
    DOCTOR_PATIENT_REQUESTS: '/doctor/manageAppointments',
    DOCTOR_SETTINGS: '/doctor/settings',
    ADMIN_LOGIN: '/admin/login',
    ADMIN_SIGNUP: '/admin/signup',
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    EMERGENCY: '/emergency',
    ABOUT: '/about',
    // ...add other routes as needed
};

export const STORAGE_KEYS = {
    AUTH_TOKEN: 'auth_token',
    USER_DATA: 'user_data',
};

export const USER_ROLES = {
    PATIENT: 'patient',
    DOCTOR: 'doctor',
    ADMIN: 'admin',
};
