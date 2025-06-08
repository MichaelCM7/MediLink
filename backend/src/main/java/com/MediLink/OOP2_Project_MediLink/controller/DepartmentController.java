package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.DepartmentRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.DepartmentResponseDTO;
import com.MediLink.OOP2_Project_MediLink.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    @Autowired
    private DepartmentService service;

    @PostMapping
    public DepartmentResponseDTO create(@RequestBody DepartmentRequestDTO request) {
        return service.create(request);
    }

    @GetMapping("/{id}")
    public DepartmentResponseDTO getById(@PathVariable String id) {
        return service.getById(id);
    }

    @GetMapping
    public List<DepartmentResponseDTO> getAll() {
        return service.getAll();
    }

    @PutMapping("/{id}")
    public DepartmentResponseDTO update(@PathVariable String id, @RequestBody DepartmentRequestDTO request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}
