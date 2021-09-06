import React from 'react';
import { useState, useEffect } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from '../utils/graphql_mutations';
import { NavLink } from 'react-router-dom';
import { CLIENT_DATA_QUERY } from '../utils/graphql_queries'; 
import { FaRegStar } from "react-icons/fa";

export const NewClientForm = () => {

const [email, setEmail] = useState('');
const [body, setBody] = useState('');
const [rating, setRating] = useState('');
const [safetyMeter, setSafetyMeter] = useState('1');
const [dateAgain, setDateAgain] = useState('');
const [gender, setGender] = useState('');
const [payment, setPayment] = useState('1');
const [size, setSize] = useState('1');
const [vibe, setVibe] = useState('1');
const [hygiene, setHygiene] = useState('1');
const [condoms, setCondomUsage] = useState('');
const [duration, setDuration] = useState('0');
const [punctuality, setPunctuality] = useState('');
const [missingInfo, setMissingInfo] = useState('');
const maxLength = 300;
const [charsLeft, setCharsLeft] = useState(maxLength);
const [isChecked1, setIsChecked1] = useState(false);
const [isChecked2, setIsChecked2] = useState(false);
const [isChecked3, setIsChecked3] = useState(false);
const [isChecked4, setIsChecked4] = useState(false);
const [isChecked5, setIsChecked5] = useState(false);

const [reviewCreate, { loading, error }] = useMutation(ADD_REVIEW, {
    refetchQueries: [CLIENT_DATA_QUERY]
  })
  
useEffect(() => {
    setCharsLeft(maxLength - body.length);
}, [body]);

const addRating = (num) => {
    if(num === 1) {
        setRating(num)
        setIsChecked1(true)
    } else if (num === 2) {
        setRating(num)
        setIsChecked1(true)
        setIsChecked2(true)
    } else if (num === 3) {
        setRating(num)
        setIsChecked1(true)
        setIsChecked2(true)
        setIsChecked3(true)
    } else if (num === 4) {
        setRating(num)
        setIsChecked1(true)
        setIsChecked2(true)
        setIsChecked3(true)
        setIsChecked4(true)
    } else {
        setRating(5)
        setIsChecked1(true)
        setIsChecked2(true)
        setIsChecked3(true)
        setIsChecked4(true)
        setIsChecked5(true)
    }
}

const removeRating = (num) => {
    setRating('')
 if(num === 1) {
    setIsChecked1(false)
 } else if(num === 2) {
    setIsChecked2(false)
 } else if (num === 3) {
    setIsChecked1(false)
    setIsChecked2(false)
    setIsChecked3(false)
} else if(num === 4) {
    setIsChecked1(false)
    setIsChecked2(false)
    setIsChecked3(false)
    setIsChecked4(false)
} else {
    setIsChecked1(false)
    setIsChecked2(false)
    setIsChecked3(false)
    setIsChecked4(false)
    setIsChecked5(false)
}
}

const submitReview = (event) => {
    console.log(rating)
    // event.preventDefault();
    if(rating && body && safetyMeter && email) {
        reviewCreate({
            variables: {
                userId: 1,
                clientEmail: email,
                rating: rating,
                safetyMeter: Number(safetyMeter),
                body: body,
                size: Number(size),
                payment: Number(payment),
                vibe: Number(vibe),
                dateAgain: dateAgain,
                gender: gender,
                hygiene: Number(hygiene),
                duration: Number(duration),
                punctuality: punctuality,
                condoms: condoms
            }
        });
    setMissingInfo('')
      clearInputs()
    //   console.log('ID', id)
    //   console.log("POST REVIEW??", clients)
      console.log("safetyMeter", safetyMeter)
      console.log("body", body)
      console.log("rating", rating)
      

    } else {
        setMissingInfo('You must input all required fields to post a review!')
        event.preventDefault()
      } 
  }


  const clearInputs = () => {
    setRating('');
    setBody('');
    setDateAgain('');
    setEmail('');
    setGender('');
  }


    return (
    <div className='new-client'>
            <h2 className="form-heading">Enter required new client information here to keep yourself and your community in the know about the current ClientTell out there. </h2>
         <div className="required-container">
             <p className='required-text'>Enter required information here:</p>
             <input
                id="emailInput"
                type="text"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={event => setEmail(event.target.value)}
            /> 
            <textarea
                id="body"
                type="text"
                name="body"
                className='review-input'
                placeholder="Write your review here."
                required
                autocomplete='off'
                value={body}
                maxLength= {maxLength}
                onChange={event => setBody(event.target.value)}
            /> 
            <div className='char-counter'>
                {charsLeft}/{maxLength}
            </div>
            <section className='rating-container'>
                <FaRegStar 
                className={!isChecked5 ? 'star' : 'checked5'} id="star5"
                onClick={!isChecked5 ? () => addRating(5) : () => removeRating(5)}
                />
                 <FaRegStar 
                className={!isChecked4 ? 'star' : 'checked4'} id="star4"
                onClick={!isChecked4 ? () => addRating(4) : () => removeRating(4)}
                />
                 <FaRegStar 
                className={!isChecked3 ? 'star' : 'checked3'} id="star3"
                onClick={!isChecked3 ? () => addRating(3) : () => removeRating(3)}
                />
                 <FaRegStar 
                className={!isChecked2 ? 'star' : 'checked2'} id="star2"
                onClick={!isChecked2 ? () => {addRating(2)}: () => {removeRating(2)}}
                />
                <FaRegStar 
                className={!isChecked1 ? 'star' : 'checked1'} id="star1"
                onClick={!isChecked1 ? () => addRating(1) : () => removeRating(1)}
                />
            </section>
          <label for="safety">Safety Meter</label>
         <input
                id="safetyMeter"
                type="range"
                name="safety"
                placeholder="Safety Meter"
                required
                min={ 1 } 
	            max={ 10 } 
                value={safetyMeter}
                onChange={event => setSafetyMeter(event.target.value)}
            />    
    
        </div>
        <div className="optional-container">
             <p className='optional-text'>Enter optional information here:</p>
         <label for="gender">Gender</label>
            <input
                id="gender"
                type="text"
                name="gender"
                placeholder="Client's Gender"
                value={gender}
                onChange={event => setGender(event.target.value)}
            /> 
          <label for="size">Size</label>
             <input
                id="size"
                className='size-slider'
                type="range"
                name="size"
                min={ 1 } 
	            max={ 10 } 
                value={size}
                onChange={event => setSize(event.target.value)}
            /> 
          <label for="payment">Payment</label>
            <input
                id="payment"
                type="range"
                name="payment"
                placeholder="Payment"
                min={ 1 } 
	            max={ 10 } 
                value={payment}
                onChange={event => setPayment(event.target.value)}
            /> 
        <label for="vibe">Vibe</label>
        <input
                id="vibe"
                type="range"
                name="vibe"
                placeholder="Vibe"
                min={ 1 } 
	            max={ 10 } 
                value={vibe}
                onChange={event => setVibe(event.target.value)}
            /> 
        <label for="hygiene">Hygiene</label>
            <input
                id="hygiene"
                type="range"
                name="hygiene"
                value={hygiene}
                min={ 1 } 
	            max={ 10 } 
                onChange={event => setHygiene(event.target.value)}
                />
          <label for="condom-usage">How Willing Were They To Use Condoms?</label>
            <input
                id="condomUsage"
                type="text"
                name="condom-usage"
                placeholder="Condom Use Willingness"
                value={condoms}
                onChange={event => setCondomUsage(event.target.value)}
                />
        <label for="punctuality">How Punctual Were They?</label>
         <input
                id="punctuality"
                type="text"
                name="punctuality"
                placeholder="How Punctual Were They?"
                value={punctuality}
                onChange={event => setPunctuality(event.target.value)}
            /> 
        <label for="date-duration">How Long Was the Date?</label>
            <input
                id="dateDuration"
                type="number"
                name="date-duration"
                min={ 0 } 
                max={ 24 } 
                value={duration}
                onChange={event => setDuration(event.target.value)}
                />
         <select id="dateAgain" name="date-again" onChange={event => setDateAgain(event.target.value)}>
           <option value="">Would You Date Them Again?</option>
           <option value="Yes">Yes</option>
           <option value="No">No</option>
         </select>
            <NavLink to={`/Search`}>
                <button id="submitBtn" className="submit-button" onClick={(event) => submitReview(event)}>Submit New Review{(!rating || !body || !safetyMeter || !email) && <p>{missingInfo}</p>}</button>
            </NavLink>
        </div>
    </div>
    );
};


 