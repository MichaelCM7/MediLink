package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.AdminRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.AdminResponseDTO;
import com.MediLink.OOP2_Project_MediLink.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping
    public AdminResponseDTO createAdmin(@Valid @RequestBody AdminRequestDTO request) {
        return adminService.createAdmin(request);
    }

    @GetMapping("/{id}")
    public AdminResponseDTO getAdminById(@PathVariable String id) {
        return adminService.getAdminById(id);
    }

    @GetMapping
    public List<AdminResponseDTO> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @PutMapping("/{id}")
    public AdminResponseDTO updateAdmin(@PathVariable String id,
                                        @Valid @RequestBody AdminRequestDTO request) {
        return adminService.updateAdmin(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable String id) {
        adminService.deleteAdmin(id);
    }
}
