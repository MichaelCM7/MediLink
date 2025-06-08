package com.MediLink.OOP2_Project_MediLink.mapper;

import com.MediLink.OOP2_Project_MediLink.dto.DepartmentRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.DepartmentResponseDTO;
import com.MediLink.OOP2_Project_MediLink.model.Department;
import org.springframework.stereotype.Component;

@Component
public class DepartmentMapper {
    public Department toEntity(DepartmentRequestDTO dto) {
        return new Department(dto.getName(), dto.getHospitalName(), dto.getDoctorIds());
    }

    public DepartmentResponseDTO toDTO(Department department) {
        DepartmentResponseDTO dto = new DepartmentResponseDTO();
        dto.setDepartmentId(department.getDepartmentId());
        dto.setName(department.getName());
        dto.setHospitalName(department.getHospitalName());
        dto.setDoctorIds(department.getDoctorIds());
        return dto;
    }
}