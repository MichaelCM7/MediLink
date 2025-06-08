package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.EmergencyAlertRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.EmergencyAlertResponseDTO;

import java.util.List;

public interface EmergencyAlertService {
    EmergencyAlertResponseDTO createAlert(EmergencyAlertRequestDTO dto);
    EmergencyAlertResponseDTO getAlertById(String id);
    List<EmergencyAlertResponseDTO> getAllAlerts();
    EmergencyAlertResponseDTO updateAlert(String id, EmergencyAlertRequestDTO dto);
    void deleteAlert(String id);
    List<EmergencyAlertResponseDTO> getAlertsByActiveStatus(boolean active);

}
