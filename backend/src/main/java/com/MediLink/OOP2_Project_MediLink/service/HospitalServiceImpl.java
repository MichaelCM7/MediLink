package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.HospitalRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.HospitalResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.HospitalNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.HospitalMapper;
import com.MediLink.OOP2_Project_MediLink.model.Hospital;
import com.MediLink.OOP2_Project_MediLink.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HospitalServiceImpl implements HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private HospitalMapper hospitalMapper;

    @Override
    public HospitalResponseDTO createHospital(HospitalRequestDTO dto) {
        Hospital hospital = hospitalMapper.toEntity(dto);
        return hospitalMapper.toDTO(hospitalRepository.save(hospital));
    }

    @Override
    public HospitalResponseDTO getHospitalById(String id) {
        Hospital hospital = hospitalRepository.findById(id)
                .orElseThrow(() -> new HospitalNotFoundException("Hospital not found with ID: " + id));
        return hospitalMapper.toDTO(hospital);
    }

    @Override
    public List<HospitalResponseDTO> getAllHospitals() {
        return hospitalRepository.findAll()
                .stream()
                .map(hospitalMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public HospitalResponseDTO updateHospital(String id, HospitalRequestDTO dto) {
        Hospital hospital = hospitalRepository.findById(id)
                .orElseThrow(() -> new HospitalNotFoundException("Hospital not found with ID: " + id));

        hospital.setHospitalName(dto.getHospitalName());
        hospital.setHospitalAddress(dto.getHospitalAddress());
        hospital.setDepartments(dto.getDepartments());
        hospital.setEmail(dto.getEmail());
        hospital.setPhoneNo(dto.getPhoneNo());
        hospital.setPassword(dto.getPassword());

        return hospitalMapper.toDTO(hospitalRepository.save(hospital));
    }

    @Override
    public void deleteHospital(String id) {
        Hospital hospital = hospitalRepository.findById(id)
                .orElseThrow(() -> new HospitalNotFoundException("Hospital not found with ID: " + id));
        hospitalRepository.delete(hospital);
    }
}
