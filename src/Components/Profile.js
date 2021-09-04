import React from 'react';
import { Link } from "react-router-dom";
import ReviewContainer from './ReviewContainer';

const Profile = ({id, email, reviews, averageRating}) => {

    return (
        <div className='client-profile'>
            <h1>Client Profile</h1>
            <section className="client-contact-info">
                <h1>Client Contact Information:</h1>
                    <p>{email}</p>
            </section>
            <section className="client-average-rating">
                <h1>Client Average Rating:</h1>
                    <p>{averageRating.toFixed(1)}</p>
            </section>
                <Link to={`/add-review/${id}`}>
            <section className="add-review-btn-section">
            <button className="add-review-btn" id={id}>
                        + Add New Review
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