package com.MediLink.OOP2_Project_MediLink.dto;

import jakarta.validation.constraints.NotBlank;

public class AppointmentRequestDTO {

    @NotBlank(message = "Date is required")
    private String date;

    @NotBlank(message = "Time is required")
    private String time;

    @NotBlank(message = "Doctor name is required")
    private String doctorName;

    @NotBlank(message = "Hospital name is required")
    private String hospitalName;

    // Getters and Setters
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getDoctorName() { return doctorName; }
    public void setDoctorName(String doctorName) { this.doctorName = doctorName; }

    public String getHospitalName() { return hospitalName; }
    public void setHospitalName(String hospitalName) { this.hospitalName = hospitalName; }
}
