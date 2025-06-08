package com.MediLink.OOP2_Project_MediLink.service;

import com.MediLink.OOP2_Project_MediLink.dto.RatingRequestDTO;
import com.MediLink.OOP2_Project_MediLink.dto.RatingResponseDTO;
import com.MediLink.OOP2_Project_MediLink.exception.RatingNotFoundException;
import com.MediLink.OOP2_Project_MediLink.mapper.RatingMapper;
import com.MediLink.OOP2_Project_MediLink.model.Rating;
import com.MediLink.OOP2_Project_MediLink.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RatingServiceImpl implements RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public RatingResponseDTO createRating(RatingRequestDTO ratingRequest) {
        Rating rating = RatingMapper.toEntity(ratingRequest);
        Rating saved = ratingRepository.save(rating);
        return RatingMapper.toDTO(saved);
    }

    @Override
    public RatingResponseDTO getRatingById(String id) {
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new RatingNotFoundException("Rating not found with ID: " + id));
        return RatingMapper.toDTO(rating);
    }

    @Override
    public List<RatingResponseDTO> getAllRatings() {
        return ratingRepository.findAll().stream()
                .map(RatingMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public RatingResponseDTO updateRating(String id, RatingRequestDTO ratingRequest) {
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new RatingNotFoundException("Rating not found with ID: " + id));

        rating.setRating(ratingRequest.getRating());
        rating.setComment(ratingRequest.getComment());
        rating.setDate(ratingRequest.getDate());
        rating.setTime(ratingRequest.getTime());

        Rating updated = ratingRepository.save(rating);
        return RatingMapper.toDTO(updated);
    }

    @Override
    public void deleteRating(String id) {
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new RatingNotFoundException("Rating not found with ID: " + id));
        ratingRepository.delete(rating);
    }
}