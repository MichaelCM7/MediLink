package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.AppointmentRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.AppointmentResponseDTO;

import java.util.List;

public interface AppointmentService {
    AppointmentResponseDTO createAppointment(AppointmentRequestDTO request);
    AppointmentResponseDTO getAppointmentById(String id);
    List<AppointmentResponseDTO> getAllAppointments();
    AppointmentResponseDTO updateAppointment(String id, AppointmentRequestDTO request);
    void deleteAppointment(String id);
}
