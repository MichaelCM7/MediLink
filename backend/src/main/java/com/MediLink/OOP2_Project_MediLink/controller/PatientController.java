package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.PatientRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.PatientResponseDTO;
import com.MediLink.OOP2_Project_MediLink.mapper.PatientMapper;
import com.MediLink.OOP2_Project_MediLink.model.Patient;
import com.MediLink.OOP2_Project_MediLink.repository.PatientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/register/patients")
    public ResponseEntity<?> registerPatient(@Valid @RequestBody PatientRequestDTO request) {
        try {
            Patient patient = PatientMapper.toEntity(request);
            Patient saved = patientRepository.save(patient);
            return ResponseEntity.ok(PatientMapper.toDTO(saved));
        } catch (Exception e) {
            e.printStackTrace(); // This will print the stack trace to your logs
            return ResponseEntity.status(500).body("An error occurred while registering the patient.");
        }
    }
    

    @GetMapping
    public List<PatientResponseDTO> getAllPatients() {
        return patientRepository.findAll()
                .stream()
                .map(PatientMapper::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public PatientResponseDTO getPatientById(@PathVariable String id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found"));
        return PatientMapper.toDTO(patient);
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable String id) {
        patientRepository.deleteById(id);
    }

    @PostMapping("/login/patients")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        Patient patient = patientRepository.findByEmail(email);
        if (patient == null) {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }

        // Simple password check (replace with hashed password check in production)
        if (!patient.getPassword().equals(password)) {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }

        // You can return a DTO or token here as needed
        return ResponseEntity.ok(PatientMapper.toDTO(patient));
    }
}
