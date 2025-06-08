package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.DoctorRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.DoctorResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.DoctorNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.DoctorMapper;
import com.MediLink.OOP2_Project_MediLink.model.Doctor;
import com.MediLink.OOP2_Project_MediLink.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public DoctorResponseDTO createDoctor(DoctorRequestDTO request) {
        Doctor doctor = DoctorMapper.toEntity(request);
        Doctor saved = doctorRepository.save(doctor);
        return DoctorMapper.toDTO(saved);
    }

    @Override
    public DoctorResponseDTO getDoctorById(String id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found with ID: " + id));
        return DoctorMapper.toDTO(doctor);
    }

    @Override
    public List<DoctorResponseDTO> getAllDoctors() {
        return doctorRepository.findAll()
                .stream()
                .map(DoctorMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public DoctorResponseDTO updateDoctor(String id, DoctorRequestDTO request) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found with ID: " + id));

        doctor.setFirstName(request.getFirstName());
        doctor.setLastName(request.getLastName());
        doctor.setEmail(request.getEmail());
        doctor.setPhone(request.getPhone());
        doctor.setPassword(request.getPassword());
        doctor.setSpecialisation(request.getSpecialisation());
        doctor.setHospitalName(request.getHospitalName());

        Doctor updated = doctorRepository.save(doctor);
        return DoctorMapper.toDTO(updated);
    }

    @Override
    public void deleteDoctor(String id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found with ID: " + id));
        doctorRepository.delete(doctor);
    }
}
