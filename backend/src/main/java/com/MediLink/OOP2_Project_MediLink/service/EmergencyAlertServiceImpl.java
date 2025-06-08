package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.EmergencyAlertRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.EmergencyAlertResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.EmergencyAlertNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.EmergencyAlertMapper;
import com.MediLink.OOP2_Project_MediLink.model.EmergencyAlert;
import com.MediLink.OOP2_Project_MediLink.repository.EmergencyAlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmergencyAlertServiceImpl implements EmergencyAlertService {

    @Autowired
    private EmergencyAlertRepository repository;

    @Autowired
    private EmergencyAlertMapper mapper;

    @Override
    public EmergencyAlertResponseDTO createAlert(EmergencyAlertRequestDTO dto) {
        EmergencyAlert alert = mapper.toEntity(dto);
        EmergencyAlert saved = repository.save(alert);
        return mapper.toDTO(saved);
    }

    @Override
    public EmergencyAlertResponseDTO getAlertById(String id) {
        EmergencyAlert alert = repository.findById(id)
                .orElseThrow(() -> new EmergencyAlertNotFoundException("Alert not found with ID: " + id));
        return mapper.toDTO(alert);
    }

    @Override
    public List<EmergencyAlertResponseDTO> getAllAlerts() {
        return repository.findAll()
                .stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public EmergencyAlertResponseDTO updateAlert(String id, EmergencyAlertRequestDTO dto) {
        EmergencyAlert alert = repository.findById(id)
                .orElseThrow(() -> new EmergencyAlertNotFoundException("Alert not found with ID: " + id));

        alert.setType(dto.getType());
        alert.setDescription(dto.getDescription());
        alert.setLocation(dto.getLocation());
        alert.setReportedBy(dto.getReportedBy());
        alert.setTimestamp(dto.getTimestamp());
        alert.setActive(dto.isActive());

        EmergencyAlert updated = repository.save(alert);
        return mapper.toDTO(updated);
    }

    @Override
    public List<EmergencyAlertResponseDTO> getAlertsByActiveStatus(boolean active) {
        return repository.findByActive(active)
                .stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }


    @Override
    public void deleteAlert(String id) {
        EmergencyAlert alert = repository.findById(id)
                .orElseThrow(() -> new EmergencyAlertNotFoundException("Alert not found with ID: " + id));
        repository.delete(alert);
    }
}
