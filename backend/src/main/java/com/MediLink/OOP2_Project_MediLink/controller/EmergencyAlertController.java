package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.EmergencyAlertRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.EmergencyAlertResponseDTO;
import com.MediLink.OOP2_Project_MediLink.service.EmergencyAlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/emergency-alerts")
public class EmergencyAlertController {

    private final EmergencyAlertService emergencyAlertService;

    @Autowired
    public EmergencyAlertController(EmergencyAlertService emergencyAlertService) {
        this.emergencyAlertService = emergencyAlertService;
    }

    // CREATE
    @PostMapping
    public ResponseEntity<EmergencyAlertResponseDTO> createAlert(@RequestBody EmergencyAlertRequestDTO requestDTO) {
        EmergencyAlertResponseDTO createdAlert = emergencyAlertService.createAlert(requestDTO);
        return ResponseEntity.ok(createdAlert);
    }

    // READ all
    @GetMapping
    public ResponseEntity<List<EmergencyAlertResponseDTO>> getAllAlerts() {
        List<EmergencyAlertResponseDTO> alerts = emergencyAlertService.getAllAlerts();
        return ResponseEntity.ok(alerts);
    }

    // READ by ID
    @GetMapping("/{id}")
    public ResponseEntity<EmergencyAlertResponseDTO> getAlertById(@PathVariable String id) {
        EmergencyAlertResponseDTO alert = emergencyAlertService.getAlertById(id);
        return ResponseEntity.ok(alert);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<EmergencyAlertResponseDTO> updateAlert(@PathVariable String id,
                                                                 @RequestBody EmergencyAlertRequestDTO requestDTO) {
        EmergencyAlertResponseDTO updatedAlert = emergencyAlertService.updateAlert(id, requestDTO);
        return ResponseEntity.ok(updatedAlert);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAlert(@PathVariable String id) {
        emergencyAlertService.deleteAlert(id);
        return ResponseEntity.ok("Emergency alert with ID " + id + " deleted successfully.");
    }

    // GET only active alerts
    @GetMapping("/active")
    public ResponseEntity<List<EmergencyAlertResponseDTO>> getActiveAlerts() {
        List<EmergencyAlertResponseDTO> activeAlerts = emergencyAlertService.getAlertsByActiveStatus(true);
        return ResponseEntity.ok(activeAlerts);
    }
}
