package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.DoctorRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.DoctorResponseDTO;
import com.MediLink.OOP2_Project_MediLink.mapper.DoctorMapper;
import com.MediLink.OOP2_Project_MediLink.model.Doctor;
import com.MediLink.OOP2_Project_MediLink.repository.DoctorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth/doctor")
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerDoctor(@Valid @RequestBody DoctorRequestDTO request) {
        try {
            Doctor doctor = DoctorMapper.toEntity(request);
            Doctor saved = doctorRepository.save(doctor);
            return ResponseEntity.ok(DoctorMapper.toDTO(saved));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("An error occurred while registering the doctor.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginDoctor(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        Doctor doctor = doctorRepository.findByEmail(email);
        if (doctor == null || !doctor.getPassword().equals(password)) {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }

        return ResponseEntity.ok(DoctorMapper.toDTO(doctor));
    }

    @GetMapping
    public List<DoctorResponseDTO> getAllDoctors() {
        return doctorRepository.findAll()
                .stream()
                .map(DoctorMapper::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDoctorById(@PathVariable String id) {
        return doctorRepository.findById(id)
                .map(DoctorMapper::toDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDoctor(@PathVariable String id) {
        if (!doctorRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        doctorRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
