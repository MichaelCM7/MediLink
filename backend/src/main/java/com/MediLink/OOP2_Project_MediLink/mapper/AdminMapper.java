package com.MediLink.OOP2_Project_MediLink.mapper;

import com.MediLink.OOP2_Project_MediLink.dto.AdminRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.AdminResponseDTO;
import com.MediLink.OOP2_Project_MediLink.model.Admin;
import org.springframework.stereotype.Component;

@Component
public class AdminMapper {

    public static Admin toEntity(AdminRequestDTO dto) {
        Admin admin = new Admin(
                dto.getFirstName(),
                dto.getLastName(),
                dto.getEmail(),
                dto.getPhone(),
                dto.getPassword(),
                dto.getDescription()
        );
        return admin;

    }

    public AdminResponseDTO toDTO(Admin admin) {
        AdminResponseDTO dto = new AdminResponseDTO();
        dto.setAdminId(admin.getAdminId());
        dto.setFirstName(admin.getFirstName());
        dto.setLastName(admin.getLastName());
        dto.setEmail(admin.getEmail());
        dto.setPhone(admin.getPhone());
        dto.setDescription(admin.getDescription());
        return dto;
    }
}
