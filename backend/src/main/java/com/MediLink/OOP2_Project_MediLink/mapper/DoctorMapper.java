package com.MediLink.OOP2_Project_MediLink.mapper;

import com.MediLink.OOP2_Project_MediLink.dto.DoctorRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.DoctorResponseDTO;
import com.MediLink.OOP2_Project_MediLink.model.Doctor;

public class DoctorMapper {
    public static Doctor toEntity(DoctorRequestDTO dto) {
        return new Doctor(
                dto.getFirstName(),
                dto.getLastName(),
                dto.getEmail(),
                dto.getPhone(),
                dto.getPassword(),
                dto.getSpecialisation(),
                dto.getHospitalName()
        );
    }

    public static DoctorResponseDTO toDTO(Doctor doctor) {
        DoctorResponseDTO dto = new DoctorResponseDTO();
        dto.setDoctorId(doctor.getDoctorId());
        dto.setFirstName(doctor.getFirstName());
        dto.setLastName(doctor.getLastName());
        dto.setEmail(doctor.getEmail());
        dto.setPhone(doctor.getPhone());
        dto.setSpecialisation(doctor.getSpecialisation());
        dto.setHospitalName(doctor.getHospitalName());
        return dto;
    }
}