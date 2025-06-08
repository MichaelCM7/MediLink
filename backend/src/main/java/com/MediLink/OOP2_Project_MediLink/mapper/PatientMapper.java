package com.MediLink.OOP2_Project_MediLink.mapper;

import com.MediLink.OOP2_Project_MediLink.dto.PatientRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.PatientResponseDTO;
import com.MediLink.OOP2_Project_MediLink.model.Patient;

public class PatientMapper {
    public static Patient toEntity(PatientRequestDTO dto) {
        Patient patient = new Patient(
                dto.getFirstName(),
                dto.getLastName(),
                dto.getEmail(),
                dto.getPhone(),
                dto.getPassword()
        );
        patient.setDescription(dto.getDescription());
        return patient;
    }

    public static PatientResponseDTO toDTO(Patient patient) {
        PatientResponseDTO dto = new PatientResponseDTO();
        dto.setPatientId(patient.getPatientId());
        dto.setFirstName(patient.getFirstName());
        dto.setLastName(patient.getLastName());
        dto.setEmail(patient.getEmail());
        dto.setPhone(patient.getPhone());
        dto.setDescription(patient.getDescription());
        return dto;
    }
}
