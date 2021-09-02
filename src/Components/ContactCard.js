import React from 'react';

const ContactCard = ({featuredClient, lowRated, highlyRated}) => {

    return (
        <section className="contact-card-section">
            <div className="featured-client-contact-card">
                <h2>Client's Data</h2>
                <p className="email">Email: {featuredClient.email} </p>
                <p className="average-rating">Average Rating: {featuredClient.averageRating} </p>
            </div>
            <div className="high-rated-client-card">
                <h2>Highly Rated Client's Data</h2>
                <p className="email">Email: {highlyRated.email} </p>
                <p className="average-rating">Average Rating: {highlyRated.averageRating} </p>
            </div>
            <div className="low-rated-client-card">
                <h2>Low Rated Client's Data</h2>
                <p className="email">Email: {lowRated.email} </p>
                <p className="average-rating">Average Rating: {lowRated.averageRating} </p>
            </div>

        </section>
    );
};

export default ContactCard;
