package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.AppointmentRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.AppointmentResponseDTO;
import com.MediLink.OOP2_Project_MediLink.service.AppointmentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public AppointmentResponseDTO create(@Valid @RequestBody AppointmentRequestDTO request) {
        return appointmentService.createAppointment(request);
    }

    @GetMapping
    public List<AppointmentResponseDTO> getAll() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/{id}")
    public AppointmentResponseDTO getById(@PathVariable String id) {
        return appointmentService.getAppointmentById(id);
    }

    @PutMapping("/{id}")
    public AppointmentResponseDTO update(@PathVariable String id, @Valid @RequestBody AppointmentRequestDTO request) {
        return appointmentService.updateAppointment(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        appointmentService.deleteAppointment(id);
    }
}
