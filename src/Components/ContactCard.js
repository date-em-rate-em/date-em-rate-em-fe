import React from 'react';
import { NavLink } from 'react-router-dom';
import { starRating } from '../utils/util';

export const ContactCard = ({ id, key, email, averageRating, reviews }) => {

    return (
        <NavLink to={`/profile/${id}`}>
            <article className='contact-card' id={id}>
                <h3>{email}</h3>
                <p>Average Rating: {starRating(averageRating)}</p>
                <p># of reviews: {reviews.length}</p>
                <button class="view-details-btn">View Client</button>
            </article>
        </NavLink>
    );
};
