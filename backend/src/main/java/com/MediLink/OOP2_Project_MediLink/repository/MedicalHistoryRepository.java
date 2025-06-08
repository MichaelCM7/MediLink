package com.MediLink.OOP2_Project_MediLink.repository;

import com.MediLink.OOP2_Project_MediLink.model.MedicalHistory;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedicalHistoryRepository extends MongoRepository<MedicalHistory, String> {
}
