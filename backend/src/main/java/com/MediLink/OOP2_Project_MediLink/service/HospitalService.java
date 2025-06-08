package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.HospitalRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.HospitalResponseDTO;

import java.util.List;

public interface HospitalService {
    HospitalResponseDTO createHospital(HospitalRequestDTO dto);
    HospitalResponseDTO getHospitalById(String id);
    List<HospitalResponseDTO> getAllHospitals();
    HospitalResponseDTO updateHospital(String id, HospitalRequestDTO dto);
    void deleteHospital(String id);
}
