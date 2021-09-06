import React from 'react';
import { starRating, formatPayment, formatSize, formatDate } from '../utils/util';

    const ReviewCard = ({id, key, body, rating, size, payment,vibe, gender, dateAgain, safetyMeter, date, hygiene, punctuality, condoms, duration }) => {

    return (
        <article className='each-review' id={id}>
            <div className='date-and-rating'>
                <p className='review-date'>{formatDate(date)}</p>
                {rating &&<p className='rating'>{starRating(rating)} </p>}   
            </div>
            {body && <p className='body'>"{body}"</p>}
            {gender && <p className='gender'><strong>Gender:</strong> {gender}</p>}  
            {punctuality && <p className='date-again'><strong>How Punctual Were They?</strong> {punctuality}</p>}   
            {duration && <p className='date-again'><strong>How Long Did the Date Last?</strong> {duration} hours</p>}  
            {payment >= 1 && <p className='payment-data'><strong>How Well Did They Pay?</strong> {formatPayment(payment)}</p>}            
            {safetyMeter && <p className='safety-meter'><strong>How Safe Did I Feel?</strong> {safetyMeter}/10</p>}  
            {vibe >= 1 && <p className='vibe-data'><strong>Vibe:</strong> {vibe}/10</p>}
            {hygiene && <p className='vibe-data'><strong>Hygiene:</strong> {hygiene}/10</p>}   
            {size >= 1 && <p className='size-data'><strong>Size:</strong> {formatSize(size)}</p>}
            {condoms && <p className='gender'><strong>Were They Willing To Use A Condom?</strong> {condoms}</p>} 
            <br></br> 
            {dateAgain && <p className='date-again'><strong>Would I Date Them Again?</strong> {dateAgain}</p>}
        </article>
    );
};

export default ReviewCard;