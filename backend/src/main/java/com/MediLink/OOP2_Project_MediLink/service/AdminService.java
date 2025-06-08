package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.AdminRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.AdminResponseDTO;

import java.util.List;

public interface AdminService {
    AdminResponseDTO createAdmin(AdminRequestDTO request);
    AdminResponseDTO getAdminById(String id);
    List<AdminResponseDTO> getAllAdmins();
    AdminResponseDTO updateAdmin(String id, AdminRequestDTO request);
    void deleteAdmin(String id);
}
