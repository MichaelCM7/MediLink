package com.MediLink.OOP2_Project_MediLink.repository;

import com.MediLink.OOP2_Project_MediLink.model.EmergencyAlert;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EmergencyAlertRepository extends MongoRepository<EmergencyAlert, String> {
    List<EmergencyAlert> findByActive(boolean active);
}

