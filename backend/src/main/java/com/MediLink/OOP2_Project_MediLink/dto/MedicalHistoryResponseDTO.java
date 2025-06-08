package com.MediLink.OOP2_Project_MediLink.dto;

import java.time.LocalDate;
import java.util.List;

public class MedicalHistoryResponseDTO {
    private String historyId;
    private String patientId;
    private List<String> pastDiseases;
    private List<String> surgeries;
    private List<String> medications;
    private List<String> allergies;
    private String familyHistory;
    private LocalDate lastUpdated;

    // Getters and Setters
    public String getHistoryId() {return historyId;}
    public void setHistoryId(String historyId) {this.historyId = historyId;}

    public String getPatientId() {return patientId;}
    public void setPatientId(String patientId) {this.patientId = patientId;}

    public List<String> getPastDiseases() {
        return pastDiseases;
    }
    public void setPastDiseases(List<String> pastDiseases) {
        this.pastDiseases = pastDiseases;
    }

    public List<String> getSurgeries() {
        return surgeries;
    }
    public void setSurgeries(List<String> surgeries) {
        this.surgeries = surgeries;
    }

    public List<String> getMedications() {
        return medications;
    }
    public void setMedications(List<String> medications) {
        this.medications = medications;
    }

    public List<String> getAllergies() {
        return allergies;
    }
    public void setAllergies(List<String> allergies) {
        this.allergies = allergies;
    }

    public String getFamilyHistory() {
        return familyHistory;
    }
    public void setFamilyHistory(String familyHistory) {
        this.familyHistory = familyHistory;
    }

    public LocalDate getLastUpdated() {
        return lastUpdated;
    }
    public void setLastUpdated(LocalDate lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
}
