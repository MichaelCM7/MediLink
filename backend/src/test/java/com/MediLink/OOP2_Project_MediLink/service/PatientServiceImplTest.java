package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.PatientRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.PatientResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.PatientNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.PatientMapper;
import com.MediLink.OOP2_Project_MediLink.model.Patient;
import com.MediLink.OOP2_Project_MediLink.repository.PatientRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PatientServiceImplTest {

    @Mock
    private PatientRepository patientRepository;

    @InjectMocks
    private PatientServiceImpl patientService;

    // --- createPatient Tests ---
    @Test
    @DisplayName("Should create a patient successfully")
    void createPatient_ShouldSucceed() {
        // Arrange
        PatientRequestDTO requestDTO = new PatientRequestDTO("John", "Doe", "john@example.com",
                "1234567890", "password", "Initial description");

        // Simulate PatientMapper.toEntity behavior:
        // Now using the Patient constructor that passes description to User's constructor
        Patient patientEntityToSave = new Patient("John", "Doe", "john@example.com", "1234567890",
                "password", "Initial description");

        // Simulate the patient object returned by the repository after saving (with ID)
        Patient savedPatient = new Patient("patient-id-1", "John", "Doe",
                "john@example.com", "1234567890", "password", "Initial description");

        // Simulate PatientMapper.toDTO behavior:
        PatientResponseDTO responseDTO = new PatientResponseDTO();
        responseDTO.setPatientId("patient-id-1");
        responseDTO.setFirstName("John");
        responseDTO.setLastName("Doe");
        responseDTO.setEmail("john@example.com");
        responseDTO.setPhone("1234567890");
        responseDTO.setDescription("Initial description");

        try (MockedStatic<PatientMapper> mockedMapper = mockStatic(PatientMapper.class)) {
            mockedMapper.when(() -> PatientMapper.toEntity(requestDTO)).thenReturn(patientEntityToSave);
            when(patientRepository.save(patientEntityToSave)).thenReturn(savedPatient);
            mockedMapper.when(() -> PatientMapper.toDTO(savedPatient)).thenReturn(responseDTO);

            // Act
            PatientResponseDTO result = patientService.createPatient(requestDTO);

            // Assert
            assertNotNull(result);
            assertEquals("patient-id-1", result.getPatientId());
            assertEquals("John", result.getFirstName());
            assertEquals("john@example.com", result.getEmail());
            assertEquals("Initial description", result.getDescription());

            // Verify interactions
            mockedMapper.verify(() -> PatientMapper.toEntity(requestDTO), times(1));
            verify(patientRepository, times(1)).save(patientEntityToSave);
            mockedMapper.verify(() -> PatientMapper.toDTO(savedPatient), times(1));
        }
    }

    // --- getPatientById Tests ---
    @Test
    @DisplayName("Should return patient by ID when found")
    void getPatientById_ShouldReturnPatientWhenFound() {
        // Arrange
        String patientId = "existing-id-1";
        // Patient constructor now takes description
        Patient patientEntity = new Patient(patientId, "Jane", "Doe", "jane@example.com",
                "0987654321", "pass", "Jane's description");

        PatientResponseDTO responseDTO = new PatientResponseDTO();
        responseDTO.setPatientId(patientId);
        responseDTO.setFirstName("Jane");
        responseDTO.setLastName("Doe");
        responseDTO.setEmail("jane@example.com");
        responseDTO.setPhone("0987654321");
        responseDTO.setDescription("Jane's description");

        when(patientRepository.findById(patientId)).thenReturn(Optional.of(patientEntity));

        try (MockedStatic<PatientMapper> mockedMapper = mockStatic(PatientMapper.class)) {
            mockedMapper.when(() -> PatientMapper.toDTO(patientEntity)).thenReturn(responseDTO);

            // Act
            PatientResponseDTO result = patientService.getPatientById(patientId);

            // Assert
            assertNotNull(result);
            assertEquals(patientId, result.getPatientId());
            assertEquals("Jane", result.getFirstName());
            assertEquals("Jane's description", result.getDescription());

            // Verify interactions
            verify(patientRepository, times(1)).findById(patientId);
            mockedMapper.verify(() -> PatientMapper.toDTO(patientEntity), times(1));
        }
    }

    @Test
    @DisplayName("Should throw PatientNotFoundException when patient ID not found")
    void getPatientById_ShouldThrowExceptionWhenNotFound() {
        // Arrange
        String nonExistentId = "non-existent-id";
        when(patientRepository.findById(nonExistentId)).thenReturn(Optional.empty());

        // Act & Assert
        PatientNotFoundException exception = assertThrows(PatientNotFoundException.class, () -> {
            patientService.getPatientById(nonExistentId);
        });

        assertEquals("Patient not found with ID: " + nonExistentId, exception.getMessage());

        verify(patientRepository, times(1)).findById(nonExistentId);
        try (MockedStatic<PatientMapper> mockedMapper = mockStatic(PatientMapper.class)) {
            mockedMapper.verify(() -> PatientMapper.toDTO(any(Patient.class)), never());
        }
    }

    // --- getAllPatients Tests ---
    @Test
    @DisplayName("Should return all patients successfully")
    void getAllPatients_ShouldReturnAll() {
        // Arrange
        // Patient constructor now takes description
        Patient patient1 = new Patient("id1", "Alice", "A", "alice@example.com", "111", "pass1", "Desc A");
        Patient patient2 = new Patient("id2", "Bob", "B", "bob@example.com", "222", "pass2", "Desc B");
        List<Patient> patientEntities = Arrays.asList(patient1, patient2);

        PatientResponseDTO dto1 = new PatientResponseDTO();
        dto1.setPatientId("id1"); dto1.setFirstName("Alice"); dto1.setLastName("A"); dto1.setEmail("alice@example.com"); dto1.setPhone("111"); dto1.setDescription("Desc A");

        PatientResponseDTO dto2 = new PatientResponseDTO();
        dto2.setPatientId("id2"); dto2.setFirstName("Bob"); dto2.setLastName("B"); dto2.setEmail("bob@example.com"); dto2.setPhone("222"); dto2.setDescription("Desc B");

        List<PatientResponseDTO> expectedDTOs = Arrays.asList(dto1, dto2);

        when(patientRepository.findAll()).thenReturn(patientEntities);

        try (MockedStatic<PatientMapper> mockedMapper = mockStatic(PatientMapper.class)) {
            mockedMapper.when(() -> PatientMapper.toDTO(patient1)).thenReturn(dto1);
            mockedMapper.when(() -> PatientMapper.toDTO(patient2)).thenReturn(dto2);

            // Act
            List<PatientResponseDTO> result = patientService.getAllPatients();

            // Assert
            assertNotNull(result);
            assertEquals(2, result.size());
            assertTrue(result.containsAll(expectedDTOs) && expectedDTOs.containsAll(result));

            verify(patientRepository, times(1)).findAll();
            mockedMapper.verify(() -> PatientMapper.toDTO(patient1), times(1));
            mockedMapper.verify(() -> PatientMapper.toDTO(patient2), times(1));
            mockedMapper.verify(() -> PatientMapper.toDTO(any(Patient.class)), times(2));
        }
    }

    @Test
    @DisplayName("Should return empty list if no patients exist")
    void getAllPatients_ShouldReturnEmptyListWhenNoneExist() {
        // Arrange
        when(patientRepository.findAll()).thenReturn(Arrays.asList());

        try (MockedStatic<PatientMapper> mockedMapper = mockStatic(PatientMapper.class)) {
            // Act
            List<PatientResponseDTO> result = patientService.getAllPatients();

            // Assert
            assertNotNull(result);
            assertTrue(result.isEmpty());

            verify(patientRepository, times(1)).findAll();
            mockedMapper.verify(() -> PatientMapper.toDTO(any(Patient.class)), never());
        }
    }

    // --- updatePatient Tests ---
    @Test
    @DisplayName("Should update a patient successfully")
    void updatePatient_ShouldSucceed() {
        // Arrange
        String patientId = "update-id-1";
        // Request DTO provides new description
        PatientRequestDTO requestDTO = new PatientRequestDTO("Updated John", "Updated Doe", "updated@example.com", "0998877665", "newpass", "Updated description from request");

        // The existing patient BEFORE updates (as retrieved from repo)
        // Patient constructor now takes description
        Patient existingPatient = new Patient(patientId, "Original John", "Original Doe", "john@example.com", "123", "oldpass", "Original description");

        // Patient entity AFTER service updates it.
        // Description *will* be updated by the service method now.
        Patient patientAfterServiceUpdate = new Patient(patientId, "Updated John", "Updated Doe", "updated@example.com", "0998877665", "newpass", "Updated description from request");

        // Manually update existingPatient to reflect how service modifies it
        existingPatient.setFirstName(requestDTO.getFirstName());
        existingPatient.setLastName(requestDTO.getLastName());
        existingPatient.setEmail(requestDTO.getEmail());
        existingPatient.setPhone(requestDTO.getPhone());
        existingPatient.setPassword(requestDTO.getPassword());
        existingPatient.setDescription(requestDTO.getDescription()); // This line *is* in your service now

        when(patientRepository.findById(patientId)).thenReturn(Optional.of(existingPatient));
        when(patientRepository.save(existingPatient)).thenReturn(patientAfterServiceUpdate); // Use existingPatient directly

        // Simulate PatientMapper.toDTO behavior:
        PatientResponseDTO responseDTO = new PatientResponseDTO();
        responseDTO.setPatientId(patientId);
        responseDTO.setFirstName("Updated John");
        responseDTO.setLastName("Updated Doe");
        responseDTO.setEmail("updated@example.com");
        responseDTO.setPhone("0998877665");
        responseDTO.setDescription("Updated description from request"); // Mapper returns the updated description

        try (MockedStatic<PatientMapper> mockedMapper = mockStatic(PatientMapper.class)) {
            mockedMapper.when(() -> PatientMapper.toDTO(patientAfterServiceUpdate)).thenReturn(responseDTO);

            // Act
            PatientResponseDTO result = patientService.updatePatient(patientId, requestDTO);

            // Assert
            assertNotNull(result);
            assertEquals("Updated John", result.getFirstName());
            assertEquals("updated@example.com", result.getEmail());
            // Assert that description IS updated, as per your service logic now
            assertEquals("Updated description from request", result.getDescription());

            // Verify interactions
            verify(patientRepository, times(1)).findById(patientId);
            verify(patientRepository, times(1)).save(existingPatient);
            mockedMapper.verify(() -> PatientMapper.toDTO(patientAfterServiceUpdate), times(1));
        }
    }

    @Test
    @DisplayName("Should throw PatientNotFoundException when updating a non-existent patient")
    void updatePatient_ShouldThrowExceptionWhenNotFound() {
        // Arrange
        String nonExistentId = "non-existent-update-id";
        PatientRequestDTO requestDTO = new PatientRequestDTO("Fake", "Patient", "fake@example.com", "111", "pass", "Fake description");
        when(patientRepository.findById(nonExistentId)).thenReturn(Optional.empty());

        // Act & Assert
        PatientNotFoundException exception = assertThrows(PatientNotFoundException.class, () -> {
            patientService.updatePatient(nonExistentId, requestDTO);
        });

        assertEquals("Patient not found with ID: " + nonExistentId, exception.getMessage());

        verify(patientRepository, never()).save(any(Patient.class));
        try (MockedStatic<PatientMapper> mockedMapper = mockStatic(PatientMapper.class)) {
            mockedMapper.verify(() -> PatientMapper.toDTO(any(Patient.class)), never());
        }
    }

    // --- deletePatient Tests ---
    @Test
    @DisplayName("Should delete a patient successfully")
    void deletePatient_ShouldSucceed() {
        // Arrange
        // Patient constructor now takes description
        String patientId = "delete-id-1";
        Patient patientEntity = new Patient(patientId, "Delete Me", "Now", "delete@example.com", "333", "pass", "Description to delete");
        when(patientRepository.findById(patientId)).thenReturn(Optional.of(patientEntity));
        doNothing().when(patientRepository).delete(patientEntity);

        // Act
        patientService.deletePatient(patientId);

        // Assert
        verify(patientRepository, times(1)).findById(patientId);
        verify(patientRepository, times(1)).delete(patientEntity);
        try (MockedStatic<PatientMapper> mockedMapper = mockStatic(PatientMapper.class)) {
            mockedMapper.verify(() -> PatientMapper.toDTO(any(Patient.class)), never());
        }
    }

    @Test
    @DisplayName("Should throw PatientNotFoundException when deleting a non-existent patient")
    void deletePatient_ShouldThrowExceptionWhenNotFound() {
        // Arrange
        String nonExistentId = "non-existent-delete-id";
        when(patientRepository.findById(nonExistentId)).thenReturn(Optional.empty());

        // Act & Assert
        PatientNotFoundException exception = assertThrows(PatientNotFoundException.class, () -> {
            patientService.deletePatient(nonExistentId);
        });

        assertEquals("Patient not found with ID: " + nonExistentId, exception.getMessage());

        verify(patientRepository, never()).delete(any(Patient.class));
    }
}