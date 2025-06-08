package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.AdminRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.AdminResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.AdminNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.AdminMapper;
import com.MediLink.OOP2_Project_MediLink.model.Admin;
import com.MediLink.OOP2_Project_MediLink.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private AdminMapper adminMapper;

    @Override
    public AdminResponseDTO createAdmin(AdminRequestDTO request) {
        Admin admin = AdminMapper.toEntity(request);
        Admin saved = adminRepository.save(admin);
        return adminMapper.toDTO(saved);
    }

    @Override
    public AdminResponseDTO getAdminById(String id) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with ID: " + id));
        return adminMapper.toDTO(admin);
    }

    @Override
    public List<AdminResponseDTO> getAllAdmins() {
        return adminRepository.findAll()
                .stream()
                .map(adminMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public AdminResponseDTO updateAdmin(String id, AdminRequestDTO request) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with ID: " + id));

        admin.setFirstName(request.getFirstName());
        admin.setLastName(request.getLastName());
        admin.setEmail(request.getEmail());
        admin.setPhone(request.getPhone());
        admin.setPassword(request.getPassword());
        //admin.setDescription(request.getDescription());

        return adminMapper.toDTO(adminRepository.save(admin));
    }

    @Override
    public void deleteAdmin(String id) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException("Admin not found with ID: " + id));
        adminRepository.delete(admin);
    }
}
