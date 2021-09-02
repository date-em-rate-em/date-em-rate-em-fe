import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewContainer = (clients) => {
    console.log("reviewContainer", clients.clients)

    const allClients = clients.reviews.map(review => {
        return (
            <ReviewCard
                id={review.id}
                key={review.id}
                date={review.date}
                review={review.review}
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
