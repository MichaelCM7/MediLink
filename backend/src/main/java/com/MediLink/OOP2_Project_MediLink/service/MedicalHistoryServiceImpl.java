package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.MedicalHistoryRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.MedicalHistoryResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.MedicalHistoryNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.MedicalHistoryMapper;
import com.MediLink.OOP2_Project_MediLink.model.MedicalHistory;
import com.MediLink.OOP2_Project_MediLink.repository.MedicalHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MedicalHistoryServiceImpl implements MedicalHistoryService {

    @Autowired
    private MedicalHistoryRepository repository;

    @Autowired
    private MedicalHistoryMapper mapper;

    @Override
    public MedicalHistoryResponseDTO create(MedicalHistoryRequestDTO request) {
        MedicalHistory saved = repository.save(mapper.toEntity(request));
        return mapper.toDTO(saved);
    }

    @Override
    public MedicalHistoryResponseDTO getById(String id) {
        MedicalHistory history = repository.findById(id)
                .orElseThrow(() -> new MedicalHistoryNotFoundException("Not found with ID: " + id));
        return mapper.toDTO(history);
    }

    @Override
    public List<MedicalHistoryResponseDTO> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public MedicalHistoryResponseDTO update(String id, MedicalHistoryRequestDTO request) {
        MedicalHistory history = repository.findById(id)
                .orElseThrow(() -> new MedicalHistoryNotFoundException("Not found with ID: " + id));

        history.setPastDiseases(request.getPastDiseases());
        history.setSurgeries(request.getSurgeries());
        history.setMedications(request.getMedications());
        history.setAllergies(request.getAllergies());
        history.setFamilyHistory(request.getFamilyHistory());
        history.setLastUpdated(request.getLastUpdated());

        return mapper.toDTO(repository.save(history));
    }

    @Override
    public void delete(String id) {
        if (!repository.existsById(id)) {
            throw new MedicalHistoryNotFoundException("Not found with ID: " + id);
        }
        repository.deleteById(id);
    }
}
