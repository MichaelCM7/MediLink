package com.MediLink.OOP2_Project_MediLink.mapper;

import com.MediLink.OOP2_Project_MediLink.dto.AppointmentRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.AppointmentResponseDTO;
import com.MediLink.OOP2_Project_MediLink.model.Appointment;
import org.springframework.stereotype.Component;

@Component
public class AppointmentMapper {

    public Appointment toEntity(AppointmentRequestDTO dto) {
        return new Appointment(dto.getDate(), dto.getTime(), dto.getDoctorName(), dto.getHospitalName());
    }

    public AppointmentResponseDTO toDTO(Appointment appointment) {
        AppointmentResponseDTO dto = new AppointmentResponseDTO();
        dto.setAppointmentId(appointment.getAppointmentId());
        dto.setDate(appointment.getDate());
        dto.setTime(appointment.getTime());
        dto.setDoctorName(appointment.getDoctorName());
        dto.setHospitalName(appointment.getHospitalName());
        return dto;
    }
}
