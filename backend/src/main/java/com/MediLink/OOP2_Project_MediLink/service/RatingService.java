package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.RatingRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.RatingResponseDTO;

import java.util.List;

public interface RatingService {
    RatingResponseDTO createRating(RatingRequestDTO ratingRequest);
    RatingResponseDTO getRatingById(String id);
    List<RatingResponseDTO> getAllRatings();
    RatingResponseDTO updateRating(String id, RatingRequestDTO ratingRequest);
    void deleteRating(String id);
}