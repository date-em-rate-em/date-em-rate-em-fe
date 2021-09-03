import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewContainer = ({reviews}) => {
    console.log("reviewContainer", reviews)

    const allReviews = reviews.map(review => {
        return (
            <ReviewCard
                id={review.id}
                key={review.id}
                date={review.date}
                title={review.title}
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
                // punctuality={review.punctuality}
                // hygiene={review.hygiene}
                // condomUsage={review.condomUsage}
                // dateDuration={review.dateDuratoin}
                // kinks={review.kinks}
            />
        )
    })

    return (
        <div>
            {allReviews}
        </div>
    );
};

export default ReviewContainer;
