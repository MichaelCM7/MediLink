package com.MediLink.OOP2_Project_MediLink.dto;

import java.util.List;

public class DepartmentRequestDTO {
    private String name;
    private String hospitalName;
    private List<String> doctorIds;

    // Getters and Setters
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}

    public String getHospitalName() {return hospitalName;}
    public void setHospitalName(String hospitalName) {this.hospitalName = hospitalName;}

    public List<String> getDoctorIds() {return doctorIds;}
    public void setDoctorIds(List<String> doctorIds) {this.doctorIds = doctorIds;}
}