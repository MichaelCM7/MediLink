package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.PatientRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.PatientResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.PatientNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.PatientMapper;
import com.MediLink.OOP2_Project_MediLink.model.Patient;
import com.MediLink.OOP2_Project_MediLink.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public PatientResponseDTO createPatient(PatientRequestDTO patientRequest) {
        Patient patient = PatientMapper.toEntity(patientRequest);
        Patient saved = patientRepository.save(patient);
        return PatientMapper.toDTO(saved);
    }

    @Override
    public PatientResponseDTO getPatientById(String id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found with ID: " + id));
        return PatientMapper.toDTO(patient);
    }

    @Override
    public List<PatientResponseDTO> getAllPatients() {
        return patientRepository.findAll()
                .stream()
                .map(PatientMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PatientResponseDTO updatePatient(String id, PatientRequestDTO patientRequest) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found with ID: " + id));

        patient.setFirstName(patientRequest.getFirstName());
        patient.setLastName(patientRequest.getLastName());
        patient.setEmail(patientRequest.getEmail());
        patient.setPhone(patientRequest.getPhone());
        patient.setPassword(patientRequest.getPassword());

        Patient updated = patientRepository.save(patient);
        return PatientMapper.toDTO(updated);
    }

    @Override
    public void deletePatient(String id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found with ID: " + id));
        patientRepository.delete(patient);
    }
}
