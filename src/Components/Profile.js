import React from 'react';
import { Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
// import Review from './Review';

//this page will be the client profile. We will need to pass props for the reviews to load on here, as well as the 
//client's contact information info 
//The button to add a review will need to take the client's ID and route them to the ReviewForm page 

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
