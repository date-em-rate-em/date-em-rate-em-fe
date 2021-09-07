import React from 'react';
import { Link } from "react-router-dom";
import { starRating } from '../utils/util';
import { ReviewContainer } from './ReviewContainer';

export const Profile = ({id, email, reviews, averageRating}) => {

    return (
        <div className='client-profile'>
            <h1>Client Profile</h1>
            <section className="client-contact-info">
                <h2>Client Contact Information:</h2>
                    <p>{email}</p>
            </section>
            <section className="client-average-rating">
                <h2>Client Average Rating:</h2>
                    <p className='profile-stars'>{starRating(averageRating)}</p>
            </section>
                <Link to={`/add-review/${id}`}>
            <section className="add-review-btn-section">
            <button className="add-review-btn" id={id}>
                        + Add New Review
                </button>
            </section>
                </Link>
                <ReviewContainer averageRating={averageRating} reviews={reviews}/>
        </div>
    );
};

