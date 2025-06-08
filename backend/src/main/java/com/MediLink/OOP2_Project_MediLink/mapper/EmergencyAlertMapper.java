package com.MediLink.OOP2_Project_MediLink.mapper;

import com.MediLink.OOP2_Project_MediLink.dto.EmergencyAlertRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.EmergencyAlertResponseDTO;
import com.MediLink.OOP2_Project_MediLink.model.EmergencyAlert;
import org.springframework.stereotype.Component;

@Component
public class EmergencyAlertMapper {

    public EmergencyAlert toEntity(EmergencyAlertRequestDTO dto) {
        return new EmergencyAlert(
                dto.getType(),
                dto.getDescription(),
                dto.getLocation(),
                dto.getReportedBy(),
                dto.getTimestamp(),
                dto.isActive()
        );
    }

    public EmergencyAlertResponseDTO toDTO(EmergencyAlert alert) {
        EmergencyAlertResponseDTO dto = new EmergencyAlertResponseDTO();
        dto.setAlertId(alert.getAlertId());
        dto.setType(alert.getType());
        dto.setDescription(alert.getDescription());
        dto.setLocation(alert.getLocation());
        dto.setReportedBy(alert.getReportedBy());
        dto.setTimestamp(alert.getTimestamp());
        dto.setActive(alert.isActive());
        return dto;
    }
}
