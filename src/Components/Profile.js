import React from 'react';
import { Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
// import Review from './Review';

const Profile = () => {
    return (
        <div>
            <h1>Client Profile</h1>
            <section className="client-contact-info">
                <h1>Client Contact Information</h1>
                    <p>(this is where the client's phone number/email/contact information will go from state)</p>
            </section>
            <section className="add-review-btn-section">
                <Link exact path='/AddReview'>
            <button className="add-review-btn">
                        Add New Review
                </button>
                    </Link>
            </section>
            <section>
                {/* <Review/> */}
            </section>
        </div>
    );
};

export default Profile;
