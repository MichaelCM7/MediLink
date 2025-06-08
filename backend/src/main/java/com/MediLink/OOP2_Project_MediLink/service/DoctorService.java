package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.DoctorRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.DoctorResponseDTO;

import java.util.List;

public interface DoctorService {
    DoctorResponseDTO createDoctor(DoctorRequestDTO request);
    DoctorResponseDTO getDoctorById(String id);
    List<DoctorResponseDTO> getAllDoctors();
    DoctorResponseDTO updateDoctor(String id, DoctorRequestDTO request);
    void deleteDoctor(String id);
}