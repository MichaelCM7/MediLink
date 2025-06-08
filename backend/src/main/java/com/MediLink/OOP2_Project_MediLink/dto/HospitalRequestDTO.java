package com.MediLink.OOP2_Project_MediLink.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class HospitalRequestDTO {

    @NotBlank(message = "Hospital name is required")
    private String hospitalName;

    @NotBlank(message = "Hospital address is required")
    private String hospitalAddress;

    @NotBlank(message = "Departments are required")
    private String departments;

    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Phone number is required")
    private String phoneNo;

    @NotBlank(message = "Password is required")
    private String password;

    // Getters and setters
    public String getHospitalName() { return hospitalName;}
    public void setHospitalName(String hospitalName) { this.hospitalName = hospitalName;}

    public String getHospitalAddress() { return hospitalAddress;}
    public void setHospitalAddress(String hospitalAddress) { this.hospitalAddress = hospitalAddress;}

    public String getDepartments() { return departments;}
    public void setDepartments(String departments) { this.departments = departments;}

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhoneNo() { return phoneNo; }
    public void setPhoneNo(String phoneNo) { this.phoneNo = phoneNo; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }


}
