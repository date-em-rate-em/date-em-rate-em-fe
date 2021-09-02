import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewContainer = () => {

    const allReviews = allReviews.reviews.map(review => {
        return (
            <ReviewCard
                id={review.id}
                key={review.id}
                date={review.date}
                review={review.review}
                title={title.title}
                rating={review.rating}
                body={review.body}
                extendedBody={review.extendedBody}
                size={review.size}
                payment={review.payment}
                kindness={title.kindness}
                vibe={review.vibe}
                gender={review.gender}
                dateAgain={review.dateAgain}
                safety={review.safety}
            />
        )
    })

    return (
        <div>
            {/* {allReviews} */}
        </div>
    );
};

export default ReviewContainer;
