package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.DoctorRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.DoctorResponseDTO;
import com.MediLink.OOP2_Project_MediLink.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping
    public DoctorResponseDTO createDoctor(@Valid @RequestBody DoctorRequestDTO request) {
        return doctorService.createDoctor(request);
    }

    @GetMapping("/{id}")
    public DoctorResponseDTO getDoctor(@PathVariable String id) {
        return doctorService.getDoctorById(id);
    }

    @GetMapping
    public List<DoctorResponseDTO> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @PutMapping("/{id}")
    public DoctorResponseDTO updateDoctor(@PathVariable String id, @Valid @RequestBody DoctorRequestDTO request) {
        return doctorService.updateDoctor(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable String id) {
        doctorService.deleteDoctor(id);
    }
}
