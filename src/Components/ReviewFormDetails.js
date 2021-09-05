import React from 'react';
import { useState, useEffect } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from '../utils/graphql_mutations';
import { NavLink } from 'react-router-dom';
import { CLIENT_DATA_QUERY } from '../utils/graphql_queries';
import { FaRegStar } from "react-icons/fa";

const ReviewFormDetails = ({clients, id, email}) => {
// console.log("clientssssss", clients)

const [body, setBody] = useState('');
const [rating, setRating] = useState('');
const [safetyMeter, setSafetyMeter] = useState('');
const [dateAgain, setDateAgain] = useState('');
const [gender, setGender] = useState('');
const [kindness, setKindness] = useState('');
const [payment, setPayment] = useState('');
const [size, setSize] = useState('');
const [vibe, setVibe] = useState('');
const [kinks, setKinks] = useState('');
const [hygiene, setHygiene] = useState('');
const [condomUsage, setCondomUsage] = useState('');
const [duration, setDuration] = useState('');
const [punctuality, setPunctuality] = useState('');
const [date, setDate] = useState('');
const [missingInfo, setMissingInfo] = useState('');
const [isChecked1, setIsChecked1] = useState(false);
const [isChecked2, setIsChecked2] = useState(false);
const [isChecked3, setIsChecked3] = useState(false);
const [isChecked4, setIsChecked4] = useState(false);
const [isChecked5, setIsChecked5] = useState(false);

const [reviewCreate, { loading, error }] = useMutation(ADD_REVIEW, {
    refetchQueries: [CLIENT_DATA_QUERY]
  })
console.log("setMissing", missingInfo)

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
    // if(numStars) {
    //     setRating(5)
    // } else if (isChecked4) {
    //     setRating(4)
    // } else if (isChecked3) {
    //     setRating(3)
    // } else if (isChecked2) {
    //     setRating(2) 
    // } else {
    //     setRating(1)
    // }
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
    if(rating && body && safetyMeter) {
        reviewCreate({
            variables: {
                userId: 1,
                clientEmail: email,
                rating: rating,
                safetyMeter: Number(safetyMeter),
                body: body,
                size: Number(size),
                payment: Number(payment),
                kindness: Number(kindness),
                vibe: Number(vibe),
                dateAgain: dateAgain,
                gender: gender
            }
        });
    setMissingInfo('')
      clearInputs()
      console.log('ID', id)
      console.log("POST REVIEW??", clients)

    } else {
        setMissingInfo('You must input all required fields to post a review!')
        event.preventDefault()
      } 
  }

  const clearInputs = () => {
    setRating('');
    setBody('');
    setDateAgain('');
  }


    return (
    <div>
        <header>
           <h2 className="form-heading">Enter the Juicy Details Here! </h2>
         </header>
         <div className="form-container">
             <p>Enter required information here:</p>
             <label for="body">Body</label>
            <input
                id="body"
                type="text"
                name="body"
                placeholder="Short Review"
                required
                value={body}
                onChange={event => setBody(event.target.value)}
            /> 
            <label for="rating">Rating</label>
            <FaRegStar 
            className={!isChecked1 ? 'star' : 'checked1'}
            onClick={!isChecked1 ? () => addRating(1) : () => removeRating(1)}
            />
             <FaRegStar 
            className={!isChecked2 ? 'star' : 'checked2'}
            onClick={!isChecked2 ? () => addRating(2): () => removeRating(2)}
            />
             <FaRegStar 
            className={!isChecked3 ? 'star' : 'checked3'}
            onClick={!isChecked3 ? () => addRating(3) : () => removeRating(3)}
            />
             <FaRegStar 
            className={!isChecked4 ? 'star' : 'checked4'}
            onClick={!isChecked4 ? () => addRating(4) : () => removeRating(4)}
            />
             <FaRegStar 
            className={!isChecked5 ? 'star' : 'checked5'}
            onClick={!isChecked5 ? () => addRating(5) : () => removeRating(5)}
            />
            {/* <i class="far fa-star"></i> */}
             {/* <input
                id="rating"
                type="range"
                name="rating"
                placeholder="Rating"
                required
                min={ 0 } 
	            max={ 5 } 
                value={rating}
                onChange={event => setRating(event.target.value)}

            />  */}
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
        <div className="form-container">
             <p>Enter optional information here:</p>
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
        <label for="kindness">Kindness</label>
        <input
                id="kindness"
                type="range"
                name="kindness"
                placeholder="Kindness"
                min={ 1 } 
	            max={ 10 } 
                value={kindness}
                onChange={event => setKindness(event.target.value)}
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
        <label for="date-again">Date Again</label>
         <select id="dateAgain" name="date-again" onChange={event => setDateAgain(event.target.value)}>
           <option value="">Would You Date Them Again?</option>
           <option value="Yes">Yes</option>
           <option value="">No</option>
         </select>
         {/* <label for="kinks">Kinks</label> */}
         {/* <input
                id="kinks"
                type="text"
                name="kinks"
                placeholder="Kinks/Activities?"
                value={kinks}
                onChange={event => setKinks(event.target.value)}
            />
          <label for="hygiene">Hygiene</label>
         <input
                id="hygiene"
                type="text"
                name="hygiene"
                placeholder="How Was Their Hygiene?"
                value={hygiene}
                onChange={event => setHygiene(event.target.value)}
            />
          <label for="condom-usage">How Willing Were They To Use Condoms?</label>
          <input
                id="condomUsage"
                type="text"
                name="condom-usage"
                placeholder="Condom Use Willingness"
                value={condomUsage}
                onChange={event => setCondomUsage(event.target.value)}
            />
        <label for="date-duration">How Long Was the Date?</label>
           <input
                id="dateDuration"
                type="number"
                name="date-duration"
                min={ 1 } 
	            max={ 5 } 
                placeholder="How Long was the Date?"
                value={duration}
                onChange={event => setDuration(event.target.value)}
            />
        <label for="punctuality">How Punctual Were They?</label>
         <input
                id="punctuality"
                type="text"
                name="punctuality"
                placeholder="How Punctual Were They?"
                value={punctuality}
                onChange={event => setPunctuality(event.target.value)}
            /> */}
            <NavLink to={`/profile/${id}`}>
                <button id="submitBtn" className="submit-button" onClick={(event) => submitReview(event)}>Submit New Review{(!rating || !body || !safetyMeter) && <p>{missingInfo}</p>}</button>
            </NavLink>
        </div>

    </div>
    );
};

export default ReviewFormDetails;

 