import React from 'react';
import { Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import ReviewContainer from './ReviewContainer';

const Profile = ({id, key, email, reviews, averageRating}) => {

    return (
        <div>
            <h1>Client Profile</h1>
            <section className="client-contact-info">
                <h1>Client Contact Information:</h1>
                    <p>{email}</p>
            </section>
            <section className="client-average-rating">
                <h1>Client Average Rating:</h1>
                    <p>{averageRating}</p>
            </section>
                <Link to='/review-form-page-2'>
            <section className="add-review-btn-section">
            <button className="add-review-btn">
                        Add New Review
                </button>
            </section>
                    </Link>
            <section className="all-reviews">
                <ReviewContainer averageRating={averageRating} reviews={reviews}/>
            </section>
        </div>
    );
};

export default Profile;
