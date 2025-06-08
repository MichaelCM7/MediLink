package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.PatientRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.PatientResponseDTO;
import com.MediLink.OOP2_Project_MediLink.mapper.PatientMapper;
import com.MediLink.OOP2_Project_MediLink.model.Patient;
import com.MediLink.OOP2_Project_MediLink.repository.PatientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping
    public PatientResponseDTO createPatient(@Valid @RequestBody PatientRequestDTO request) {
        Patient patient = PatientMapper.toEntity(request);
        Patient saved = patientRepository.save(patient);
        return PatientMapper.toDTO(saved);
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
}
