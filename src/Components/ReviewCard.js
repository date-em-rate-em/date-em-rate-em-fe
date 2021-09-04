import React from 'react';
import { starRating } from '../utils/util';

// const ReviewCard = () => {
    const ReviewCard = ({id, key, date, body, title, rating, size, payment, kindness, vibe, gender, dateAgain, safetyMeter }) => {

    return (
        <div className="each-review">
        <h2 className="review-title">Client's Review from the date on {date}:</h2>
            <p className="body">Review From This Date: {body}</p>
            <p className="safety-meter">How Safe Did I Feel: {safetyMeter}</p>   
            <p className="rating">Rating: {starRating(rating)} </p>       
            <p className="size-data">Size: {size}</p>   
            <p className="payment-data">How Well Did They Pay: {payment}</p>            
            <p className="kindness-meter">Kindness: {kindness}</p>            
            <p className="vibe-data">Vibe: {vibe}</p>   
            <p className="date-again">Would I Date Them Again? {dateAgain}</p>   
            <p className="gender">Gender: {gender}</p>  
            {/* <p className="date">{date}</p>    */}
            {/* <p className="vibe-data">Hygiene: {hygiene}</p>   
            <p className="date-again">How Punctual Were They? {punctuality}</p>   
            <p className="gender">Condom Usage: {condomUsage}</p>   
            <p className="date-again">How Long Did the Date Last? {dateDuration}</p>   
            <p className="gender">Kinks: {kinks}</p>    */}
        </div>
    );
};

export default ReviewCard;