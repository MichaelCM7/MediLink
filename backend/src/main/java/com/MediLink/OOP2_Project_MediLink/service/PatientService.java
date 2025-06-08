package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.PatientRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.PatientResponseDTO;

import java.util.List;

public interface PatientService {
    PatientResponseDTO createPatient(PatientRequestDTO patientRequest);
    PatientResponseDTO getPatientById(String id);
    List<PatientResponseDTO> getAllPatients();
    PatientResponseDTO updatePatient(String id, PatientRequestDTO patientRequest);
    void deletePatient(String id);
}
