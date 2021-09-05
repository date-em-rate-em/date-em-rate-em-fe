import React from 'react';
import { NavLink } from 'react-router-dom';
import { starRating } from '../utils/util';
import { HiOutlineMail } from "react-icons/hi";
export const ContactCard = ({ id, key, email, averageRating, numReviews }) => {

    return (
        <NavLink to={`/profile/${id}`}>
            <article className='contact-card' id={id}>
                <div className='email'>
                    <HiOutlineMail className='email-icon'/>
                    <h3 className='contact-email'>{email}</h3>
                </div>
                <p>average rating: {starRating(averageRating)}</p>
                <p># of reviews: {numReviews}</p>
                <button class="view-details-btn">View Client</button>
            </article>
        </NavLink>
    );
};
