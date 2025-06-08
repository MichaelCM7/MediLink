package com.MediLink.OOP2_Project_MediLink.dto;

public class HospitalResponseDTO {
    private String hospitalId;
    private String hospitalName;
    private String hospitalAddress;
    private String departments;
    private String email;
    private String phoneNo;

    // Getters and setters
    public String getHospitalId() { return hospitalId;}
    public void setHospitalId(String hospitalId) { this.hospitalId = hospitalId; }

    public String getHospitalName() { return hospitalName; }
    public void setHospitalName(String hospitalName) { this.hospitalName = hospitalName; }

    public String getHospitalAddress() { return hospitalAddress; }
    public void setHospitalAddress(String hospitalAddress) { this.hospitalAddress = hospitalAddress; }

    public String getDepartments() { return departments; }
    public void setDepartments(String departments) { this.departments = departments; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhoneNo() { return phoneNo; }
    public void setPhoneNo(String phoneNo) { this.phoneNo = phoneNo; }
}
