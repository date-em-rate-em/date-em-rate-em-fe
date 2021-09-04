import React from 'react';
import { NavLink } from 'react-router-dom';
import { starRating } from '../utils/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactCard = ({ id, key, email, averageRating, reviews }) => {

    return (
        <NavLink to={`/profile/${id}`}>
            <article className='contact-card' id={id}>
                <button className='email'>
                    <FontAwesomeIcon icon='envelope-square'/>
                </button>
                <h3>{email}</h3>
                <p>Average Rating: {starRating(averageRating)}</p>
                <p># of reviews: {reviews.length}</p>
                <button class="view-details-btn">View Client</button>
            </article>
        </NavLink>
    );
};
