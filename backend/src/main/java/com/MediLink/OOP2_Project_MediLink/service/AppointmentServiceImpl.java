package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.AppointmentRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.AppointmentResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.AppointmentNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.AppointmentMapper;
import com.MediLink.OOP2_Project_MediLink.model.Appointment;
import com.MediLink.OOP2_Project_MediLink.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private AppointmentMapper appointmentMapper;

    @Override
    public AppointmentResponseDTO createAppointment(AppointmentRequestDTO request) {
        Appointment appointment = appointmentMapper.toEntity(request);
        Appointment saved = appointmentRepository.save(appointment);
        return appointmentMapper.toDTO(saved);
    }

    @Override
    public AppointmentResponseDTO getAppointmentById(String id) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new AppointmentNotFoundException("Appointment not found with ID: " + id));
        return appointmentMapper.toDTO(appointment);
    }

    @Override
    public List<AppointmentResponseDTO> getAllAppointments() {
        return appointmentRepository.findAll()
                .stream()
                .map(appointmentMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public AppointmentResponseDTO updateAppointment(String id, AppointmentRequestDTO request) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new AppointmentNotFoundException("Appointment not found with ID: " + id));
        appointment.setDate(request.getDate());
        appointment.setTime(request.getTime());
        appointment.setDoctorName(request.getDoctorName());
        appointment.setHospitalName(request.getHospitalName());
        return appointmentMapper.toDTO(appointmentRepository.save(appointment));
    }

    @Override
    public void deleteAppointment(String id) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new AppointmentNotFoundException("Appointment not found with ID: " + id));
        appointmentRepository.delete(appointment);
    }
}
