package com.MediLink.OOP2_Project_MediLink.dto;

import java.util.List;

public class DepartmentResponseDTO {
    private String departmentId;
    private String name;
    private String hospitalName;
    private List<String> doctorIds;

    // Getters and Setters
    public String getDepartmentId() {return departmentId;}
    public void setDepartmentId(String departmentId) {this.departmentId = departmentId;}

    public String getName() {return name;}
    public void setName(String name) {this.name = name;}

    public String getHospitalName() {return hospitalName;}
    public void setHospitalName(String hospitalName) {this.hospitalName = hospitalName;}

    public List<String> getDoctorIds() {return doctorIds;}
    public void setDoctorIds(List<String> doctorIds) {this.doctorIds = doctorIds;}
}