package com.MediLink.OOP2_Project_MediLink.controller;

import com.MediLink.OOP2_Project_MediLink.dto.RatingRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.RatingResponseDTO;
import com.MediLink.OOP2_Project_MediLink.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping
    public RatingResponseDTO createRating(@RequestBody RatingRequestDTO request) {
        return ratingService.createRating(request);
    }

    @GetMapping("/{id}")
    public RatingResponseDTO getRatingById(@PathVariable String id) {
        return ratingService.getRatingById(id);
    }

    @GetMapping
    public List<RatingResponseDTO> getAllRatings() {
        return ratingService.getAllRatings();
    }

    @PutMapping("/{id}")
    public RatingResponseDTO updateRating(@PathVariable String id, @RequestBody RatingRequestDTO request) {
        return ratingService.updateRating(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteRating(@PathVariable String id) {
        ratingService.deleteRating(id);
    }
}
