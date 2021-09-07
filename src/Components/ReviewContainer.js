import React from 'react';
import ReviewCard from './ReviewCard';

export const ReviewContainer = ({reviews}) => {

    const allReviews = reviews.map(review => {
        return (
            <ReviewCard
                id={review.id}
                key={review.id}
                rating={review.rating}
                body={review.body}
                extendedBody={review.extendedBody}
                size={review.size}
                payment={review.payment}
                kindness={review.kindness}
                vibe={review.vibe}
                gender={review.gender}
                dateAgain={review.dateAgain}
                safetyMeter={review.safetyMeter}
                date={review.createdAt}
                punctuality={review.punctuality}
                hygiene={review.hygiene}
                condoms={review.condoms}
                duration={review.dateDuration}
            />
        )
    })

    return (
        <div className='all-reviews'>
            {allReviews}
        </div>
    );
};

