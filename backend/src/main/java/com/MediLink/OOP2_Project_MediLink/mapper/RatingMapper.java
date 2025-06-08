package com.MediLink.OOP2_Project_MediLink.mapper;

import com.MediLink.OOP2_Project_MediLink.dto.RatingRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.RatingResponseDTO;
import com.MediLink.OOP2_Project_MediLink.model.Rating;

public class RatingMapper {
    public static Rating toEntity(RatingRequestDTO dto) {
        return new Rating(null, dto.getRating(), dto.getComment(), dto.getDate(), dto.getTime());
    }

    public static RatingResponseDTO toDTO(Rating rating) {
        RatingResponseDTO dto = new RatingResponseDTO();
        dto.setRatingID(rating.getRatingID());
        dto.setRating(rating.getRating());
        dto.setComment(rating.getComment());
        dto.setDate(rating.getDate());
        dto.setTime(rating.getTime());
        return dto;
    }
}
