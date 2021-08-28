import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {

    const allReviews = allReviews.map(review => {
        return (
            <ReviewCard
                id={review.id}
                key={review.id}
                name={review.name}
                amount={review.amount}
            />
        )
    })

    return (
        <div>
            {/* {allReviews} */}
        </div>
    );
};

export default Review;
