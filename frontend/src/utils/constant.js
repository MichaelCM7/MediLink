export const API_BASE_URL = 'http://localhost:8080/api';

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    USER_LOGIN: '/user/login',
    USER_SIGNUP: '/user/signup',
    DOCTOR_LOGIN: '/doctor/login',
    DOCTOR_SIGNUP: '/doctor/signup',
    DOCTOR_DASHBOARD: '/doctor/dashboard',
    DOCTOR_PROFILE: '/doctor/profile',
    ADMIN_LOGIN: '/admin/login',
    ADMIN_SIGNUP: '/admin/signup',
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    USER_DASHBOARD: '/user/dashboard',
    BOOK_APPOINTMENT: '/user/book-appointment',
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
