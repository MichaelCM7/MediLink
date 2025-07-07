package com.MediLink.OOP2_Project_MediLink.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document(collection = "patient")
public class Patient extends User {
    @Id
    private String patientId;

    public Patient() {}

    public Patient(String firstName, String lastName, String email, String phone, String password) {
        super(firstName, lastName, email, phone, password, null);
    }

    public Patient(String firstName, String lastName, String email, String phone, String password, String description) {
        super(firstName, lastName, email, phone, password, description); // Call User constructor
    }

    public Patient(String patientId, String firstName, String lastName, String email, String phone, String password, String description) {
        super(firstName, lastName, email, phone, password, description); // Call User constructor
        this.patientId = patientId;
    }

    public String getPatientId() {
        return patientId;
    }

    // ⭐⭐⭐ THESE METHODS ARE CRUCIAL FOR OBJECT EQUALITY CHECKS ⭐⭐⭐
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        // Check for null and exact class type
        if (o == null || getClass() != o.getClass()) return false;
        Patient patient = (Patient) o;
        // Two Patient objects are considered equal if their patientId is the same.
        // Objects.equals handles null patientIds gracefully.
        return Objects.equals(patientId, patient.patientId);
    }

    @Override
    public int hashCode() {
        // The hashCode must be consistent with equals. If two objects are equal,
        // their hash codes must be the same.
        return Objects.hash(patientId);
    }
    // ⭐⭐⭐ END OF CRUCIAL METHODS ⭐⭐⭐

    // Optional: Add a toString() method for better debugging output
    @Override
    public String toString() {
        return "Patient{" +
                "patientId='" + patientId + '\'' +
                ", firstName='" + getFirstName() + '\'' +
                ", lastName='" + getLastName() + '\'' +
                ", email='" + getEmail() + '\'' +
                // Include other fields from User if you wish for a complete string representation
                '}';
    }
}