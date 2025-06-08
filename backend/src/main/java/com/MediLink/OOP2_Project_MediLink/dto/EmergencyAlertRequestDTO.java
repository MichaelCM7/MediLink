package com.MediLink.OOP2_Project_MediLink.dto;

import java.time.LocalDateTime;

public class EmergencyAlertRequestDTO {
    private String type;
    private String description;
    private String location;
    private String reportedBy;
    private LocalDateTime timestamp;
    private boolean active;

    // Getters and Setters
    public String getType() {return type;}
    public void setType(String type) {this.type = type;}

    public String getDescription() {return description;}
    public void setDescription(String description) {this.description = description;}

    public String getLocation() {return location;}
    public void setLocation(String location) {this.location = location;}

    public String getReportedBy() {return reportedBy;}
    public void setReportedBy(String reportedBy) {this.reportedBy = reportedBy;}

    public LocalDateTime getTimestamp() {return timestamp;}
    public void setTimestamp(LocalDateTime timestamp) {this.timestamp = timestamp;}

    public boolean isActive() {return active;}
    public void setActive(boolean active) {this.active = active;}
}
