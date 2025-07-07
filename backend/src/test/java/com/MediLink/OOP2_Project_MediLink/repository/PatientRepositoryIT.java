package com.MediLink.OOP2_Project_MediLink.repository;

import com.MediLink.OOP2_Project_MediLink.model.Patient;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

// @DataMongoTest focuses on testing Spring Data MongoDB components.
// It sets up an in-memory MongoDB (if embed.mongo is present) and configures MongoTemplate.
@DataMongoTest
@ActiveProfiles("test") // Ensures test-specific configurations are used
class PatientRepositoryIT {

    @Autowired
    private PatientRepository patientRepository;

    @BeforeEach
    void setup() {
        // Clear the collection before each test to ensure a clean state
        patientRepository.deleteAll();
    }

    @AfterEach
    void cleanUp() {
        // Clear the collection after each test as well
        patientRepository.deleteAll();
    }

    @Test
    @DisplayName("Should save and retrieve a patient successfully")
    void saveAndFindPatient() {
        // Arrange
        Patient patient = new Patient("John", "Doe", "john.doe@example.com", "1234567890", "password123", "Initial description");

        // Act
        Patient savedPatient = patientRepository.save(patient);

        // Assert
        assertThat(savedPatient).isNotNull();
        assertThat(savedPatient.getPatientId()).isNotBlank(); // MongoDB generates ID
        assertThat(savedPatient.getFirstName()).isEqualTo("John");
        assertThat(savedPatient.getDescription()).isEqualTo("Initial description");

        Optional<Patient> foundPatient = patientRepository.findById(savedPatient.getPatientId());
        assertThat(foundPatient).isPresent();
        assertThat(foundPatient.get().getPatientId()).isEqualTo(savedPatient.getPatientId());
        assertThat(foundPatient.get()).isEqualTo(savedPatient); // This relies on Patient.equals() and hashCode() being correctly overridden
    }

    @Test
    @DisplayName("Should find a patient by email")
    void findByEmail_ShouldReturnPatient() {
        // Arrange
        Patient patient = new Patient("Jane", "Doe", "jane.doe@example.com", "0987654321", "securepass", "Another description");
        patientRepository.save(patient);

        // Act
        Patient foundPatient = patientRepository.findByEmail("jane.doe@example.com");

        // Assert
        assertThat(foundPatient).isNotNull();
        assertThat(foundPatient.getFirstName()).isEqualTo("Jane");
        assertThat(foundPatient.getEmail()).isEqualTo("jane.doe@example.com");
    }

    @Test
    @DisplayName("Should return null when finding by non-existent email")
    void findByEmail_ShouldReturnNullForNonExistentEmail() {
        // Act
        Patient foundPatient = patientRepository.findByEmail("nonexistent@example.com");

        // Assert
        assertThat(foundPatient).isNull();
    }

    @Test
    @DisplayName("Should delete a patient by ID")
    void deletePatientById_ShouldRemovePatient() {
        // Arrange
        Patient patient = new Patient("Delete", "Me", "delete@example.com", "111222333", "pass", "For deletion");
        Patient savedPatient = patientRepository.save(patient);

        // Act
        patientRepository.deleteById(savedPatient.getPatientId());

        // Assert
        Optional<Patient> foundPatient = patientRepository.findById(savedPatient.getPatientId());
        assertThat(foundPatient).isNotPresent();
    }

    @Test
    @DisplayName("Should update a patient")
    void updatePatient_ShouldPersistChanges() {
        // Arrange
        Patient patient = new Patient("Original", "User", "original@example.com", "5555555555", "oldpass", "Initial note");
        Patient savedPatient = patientRepository.save(patient);

        // Modify the patient
        savedPatient.setFirstName("Updated");
        savedPatient.setEmail("updated@example.com");
        savedPatient.setDescription("Updated note");

        // Act
        Patient updatedPatient = patientRepository.save(savedPatient); // Save the modified patient

        // Assert
        assertThat(updatedPatient).isNotNull();
        assertThat(updatedPatient.getFirstName()).isEqualTo("Updated");
        assertThat(updatedPatient.getEmail()).isEqualTo("updated@example.com");
        assertThat(updatedPatient.getDescription()).isEqualTo("Updated note");

        Optional<Patient> foundInDb = patientRepository.findById(updatedPatient.getPatientId());
        assertThat(foundInDb).isPresent();
        assertThat(foundInDb.get().getFirstName()).isEqualTo("Updated");
        assertThat(foundInDb.get().getEmail()).isEqualTo("updated@example.com");
    }
}