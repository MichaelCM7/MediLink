package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.MedicalHistoryRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.MedicalHistoryResponseDTO;

import java.util.List;

public interface MedicalHistoryService {
    MedicalHistoryResponseDTO create(MedicalHistoryRequestDTO request);
    MedicalHistoryResponseDTO getById(String id);
    List<MedicalHistoryResponseDTO> getAll();
    MedicalHistoryResponseDTO update(String id, MedicalHistoryRequestDTO request);
    void delete(String id);
}
