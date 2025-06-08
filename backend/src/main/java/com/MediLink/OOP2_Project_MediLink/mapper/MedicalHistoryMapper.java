package com.MediLink.OOP2_Project_MediLink.mapper;

import com.MediLink.OOP2_Project_MediLink.dto.MedicalHistoryRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.MedicalHistoryResponseDTO;
import com.MediLink.OOP2_Project_MediLink.model.MedicalHistory;
import org.springframework.stereotype.Component;

@Component
public class MedicalHistoryMapper {

    public MedicalHistory toEntity(MedicalHistoryRequestDTO dto) {
        return new MedicalHistory(
                dto.getPatientId(),
                dto.getPastDiseases(),
                dto.getSurgeries(),
                dto.getMedications(),
                dto.getAllergies(),
                dto.getFamilyHistory(),
                dto.getLastUpdated()
        );
    }

    public MedicalHistoryResponseDTO toDTO(MedicalHistory entity) {
        MedicalHistoryResponseDTO dto = new MedicalHistoryResponseDTO();
        dto.setHistoryId(entity.getHistoryId());
        dto.setPatientId(entity.getPatientId());
        dto.setPastDiseases(entity.getPastDiseases());
        dto.setSurgeries(entity.getSurgeries());
        dto.setMedications(entity.getMedications());
        dto.setAllergies(entity.getAllergies());
        dto.setFamilyHistory(entity.getFamilyHistory());
        dto.setLastUpdated(entity.getLastUpdated());
        return dto;
    }
}
