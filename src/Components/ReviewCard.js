import React from 'react';

const ReviewCard = () => {
    // const Review = ({id, date, review, title, rating, size, payment, kindness, vibe, gender, wouldIGoOutWithThemAgain, safety }) => {

    return (
        <div className="each-review">
 <h2 className="review-title">This Client....(title)</h2>
            <p className="short-review">(short review goes here)</p>
            <p className="extended-review">(Review Goes Here)</p>
            <p className="date">(date goes here) </p>   
            <p className="rating">(rating goes here) </p>       
            <p className="size-data">(size info goes here)</p>   
            <p className="payment-data">(payment info goes here)</p>            
            <p className="kindness-meter">(kindness meter goes here)</p>            
            <p className="vibe-data">(vibe info goes here)</p>   
            <p className="date-again">(Would i date again)</p>   
            <p className="safety-meter">(how safe did i feel)</p>   
            <p className="gender">(gender)</p>   
        </div>
    );
};

export default ReviewCard;