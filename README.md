# MediLink: Revolutionizing Healthcare Access and Emergency Response

## Description

MediLink is a healthcare platform improving access and emergency response. It offers emergency alerts, doctor and hospital search, appointment booking, patient history management, and feedback tools. With secure, scalable dashboards for all users, it enhances communication, efficiency, and data-driven care across the healthcare system.

---

## Getting Started

Follow these steps to run the project locally.

### 1. Launch the Backend

- Navigate to the main Java folder where the `Oop2ProjectMediLinkApplication` file is located.
- Run the `Oop2ProjectMediLinkApplication` class directly, **or** execute the following command:

    ```bash
    mvn spring-boot:run
    ```

---

### 2. Launch the Frontend

In a terminal window, run:

```bash
cd frontend
npm run dev
```

---

## Access the Main Pages

Once both servers are running, you can explore MediLink through the logged-out interface or sign in for full access. Alternatively, visit these direct links in your browser:

- [User Dashboard](http://localhost:5173/user/dashboard)
- [Doctor Dashboard](http://localhost:5173/doctor/dashboard)
- [Admin Dashboard](http://localhost:5173/admin/dashboard)

---

## Features

- Emergency alert system with proximity-based notifications
- Doctor and hospital search with filters for specialization, location, and insurance
- Secure user authentication and profile management
- Appointment booking and management
- Patient history tracking (optional sharing with healthcare providers)
- Ratings and feedback for doctors and organizations
- Dashboards for patients, doctors, and administrators
- Scalable, user-friendly, and secure architecture

---

## Technologies Used

- Java (Spring Boot)
- Maven
- Mongo DB Atlas
- React
- Vite
