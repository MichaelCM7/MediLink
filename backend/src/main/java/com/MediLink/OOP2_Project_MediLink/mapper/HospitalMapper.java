package com.MediLink.OOP2_Project_MediLink.mapper;

import com.MediLink.OOP2_Project_MediLink.dto.HospitalRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.HospitalResponseDTO;
import com.MediLink.OOP2_Project_MediLink.model.Hospital;
import org.springframework.stereotype.Component;

@Component
public class HospitalMapper {

    public Hospital toEntity(HospitalRequestDTO dto) {
        return new Hospital(
                dto.getHospitalName(),
                dto.getHospitalAddress(),
                dto.getDepartments(),
                dto.getEmail(),
                dto.getPhoneNo(),
                dto.getPassword()
        );
    }

    public HospitalResponseDTO toDTO(Hospital hospital) {
        HospitalResponseDTO dto = new HospitalResponseDTO();
        dto.setHospitalId(hospital.getHospitalId());
        dto.setHospitalName(hospital.getHospitalName());
        dto.setHospitalAddress(hospital.getHospitalAddress());
        dto.setDepartments(hospital.getDepartments());
        dto.setEmail(hospital.getEmail());
        dto.setPhoneNo(hospital.getPhoneNo());
        return dto;
    }
}
