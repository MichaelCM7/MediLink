package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.DepartmentRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.DepartmentResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.DepartmentNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.DepartmentMapper;
import com.MediLink.OOP2_Project_MediLink.model.Department;
import com.MediLink.OOP2_Project_MediLink.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    @Autowired
    private DepartmentRepository repository;

    @Autowired
    private DepartmentMapper mapper;

    @Override
    public DepartmentResponseDTO create(DepartmentRequestDTO request) {
        Department saved = repository.save(mapper.toEntity(request));
        return mapper.toDTO(saved);
    }

    @Override
    public DepartmentResponseDTO getById(String id) {
        Department department = repository.findById(id)
                .orElseThrow(() -> new DepartmentNotFoundException("Department not found: " + id));
        return mapper.toDTO(department);
    }

    @Override
    public List<DepartmentResponseDTO> getAll() {
        return repository.findAll().stream().map(mapper::toDTO).collect(Collectors.toList());
    }

    @Override
    public DepartmentResponseDTO update(String id, DepartmentRequestDTO request) {
        Department department = repository.findById(id)
                .orElseThrow(() -> new DepartmentNotFoundException("Department not found: " + id));

        department.setName(request.getName());
        department.setHospitalName(request.getHospitalName());
        department.setDoctorIds(request.getDoctorIds());

        return mapper.toDTO(repository.save(department));
    }

    @Override
    public void delete(String id) {
        if (!repository.existsById(id)) {
            throw new DepartmentNotFoundException("Department not found: " + id);
        }
        repository.deleteById(id);
    }
}