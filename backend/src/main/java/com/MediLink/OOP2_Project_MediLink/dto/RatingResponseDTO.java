package com.MediLink.OOP2_Project_MediLink.dto;

public class RatingResponseDTO {
    private String ratingID;
    private int rating;
    private String comment;
    private int date;
    private int time;

    // Getters and setters
    public String getRatingID() { return ratingID; }
    public void setRatingID(String ratingID) { this.ratingID = ratingID; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public int getDate() { return date; }
    public void setDate(int date) { this.date = date; }

    public int getTime() { return time; }
    public void setTime(int time) { this.time = time; }
}
