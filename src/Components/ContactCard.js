import React from 'react';
import { Search } from './Search';
import { NavLink } from 'react-router-dom';

export const ContactCard = ({ id, key, email, averageRating, reviews }) => {
    return (
        <NavLink to={`/profile/${id}`}>
            <article className='contact-card' id={id}>
                <h3>{email}</h3>
                <p>Average Rating:{averageRating}</p>
                <p># of reviews: {reviews.length}</p>
                <button class="view-details-btn">View Client</button>
            </article>
        </NavLink>
    );
};
