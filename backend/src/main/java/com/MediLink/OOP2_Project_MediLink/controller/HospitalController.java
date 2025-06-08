package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.HospitalRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.HospitalResponseDTO;
import com.MediLink.OOP2_Project_MediLink.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/hospitals")
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @PostMapping
    public HospitalResponseDTO createHospital(@Valid @RequestBody HospitalRequestDTO dto) {
        return hospitalService.createHospital(dto);
    }

    @GetMapping("/{id}")
    public HospitalResponseDTO getHospitalById(@PathVariable String id) {
        return hospitalService.getHospitalById(id);
    }

    @GetMapping
    public List<HospitalResponseDTO> getAllHospitals() {
        return hospitalService.getAllHospitals();
    }

    @PutMapping("/{id}")
    public HospitalResponseDTO updateHospital(@PathVariable String id, @Valid @RequestBody HospitalRequestDTO dto) {
        return hospitalService.updateHospital(id, dto);
    }

    @DeleteMapping("/{id}")
    public void deleteHospital(@PathVariable String id) {
        hospitalService.deleteHospital(id);
    }
}
