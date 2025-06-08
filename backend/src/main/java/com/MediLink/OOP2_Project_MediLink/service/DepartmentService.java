package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.DepartmentRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.DepartmentResponseDTO;

import java.util.List;

public interface DepartmentService {
    DepartmentResponseDTO create(DepartmentRequestDTO request);
    DepartmentResponseDTO getById(String id);
    List<DepartmentResponseDTO> getAll();
    DepartmentResponseDTO update(String id, DepartmentRequestDTO request);
    void delete(String id);
}