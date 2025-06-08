package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.MedicalHistoryRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.MedicalHistoryResponseDTO;
import com.MediLink.OOP2_Project_MediLink.service.MedicalHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medical-history")
public class MedicalHistoryController {

    @Autowired
    private MedicalHistoryService service;

    @PostMapping
    public MedicalHistoryResponseDTO create(@RequestBody MedicalHistoryRequestDTO request) {
        return service.create(request);
    }

    @GetMapping("/{id}")
    public MedicalHistoryResponseDTO getById(@PathVariable String id) {
        return service.getById(id);
    }

    @GetMapping
    public List<MedicalHistoryResponseDTO> getAll() {
        return service.getAll();
    }

    @PutMapping("/{id}")
    public MedicalHistoryResponseDTO update(@PathVariable String id, @RequestBody MedicalHistoryRequestDTO request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}
