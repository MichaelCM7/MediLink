package com.MediLink.OOP2_Project_MediLink.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "emergency_alerts")
public class EmergencyAlert {

    @Id
    private String alertId;

    private String type;
    private String description;
    private String location;
    private String reportedBy;
    private LocalDateTime timestamp;
    private boolean active;

    public EmergencyAlert() {}

    public EmergencyAlert(String type, String description, String location, String reportedBy, LocalDateTime timestamp, boolean active) {
        this.type = type;
        this.description = description;
        this.location = location;
        this.reportedBy = reportedBy;
        this.timestamp = timestamp;
        this.active = active;
    }

    // Getters and Setters

    public String getAlertId() {
        return alertId;
    }

    public void setAlertId(String alertId) {
        this.alertId = alertId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getReportedBy() {
        return reportedBy;
    }

    public void setReportedBy(String reportedBy) {
        this.reportedBy = reportedBy;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}

