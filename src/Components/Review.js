import React from 'react';

const Review = () => {
    // const Review = ({id, shortReview, title, rating, tagline, size, payment, extendedReview, kindness, vibe }) => {

    return (
        <div className="each-review">
 <h2 className="review-title">This Client....(title)</h2>
            <p className="short-review">(short review goes here)</p>
            <p className="extended-review">(Review Goes Here)</p>
            <p className="rating">(rating goes here) </p>          
        </div>
    );
};

export default Review;