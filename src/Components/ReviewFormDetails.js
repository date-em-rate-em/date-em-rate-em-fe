import React from 'react';

const ReviewFormDetails = () => {
    return (
    <div>
        <header>
           <h2 className="form-heading">Enter the Juicy Details Here! </h2>
         </header>
         <div className="form-container">
             <p>Enter required information here:</p>
            <input
                id="review"
                type="text"
                name="review"
                placeholder="Short Review"
                required
                // value=""
                // onChange={event => this.handleChange(event)}
            /> 
             <input
                id="ratingInput"
                type="number"
                name="email"
                placeholder="0"
                required
                min={ 0 } 
	            max={ 5 } 
                // value=""
                // onChange={event => this.handleChange(event)}
            /> 
        </div>
        <div className="form-container">
             <p>Enter optional information here:</p>
            <input
                id="gender"
                type="text"
                name="review"
                placeholder="Client's Gender"
                // value=""
                // onChange={event => this.handleChange(event)}
            /> 
             <input
                id="size"
                type="number"
                name="size"
                placeholder="Size"
                min={ 0 } 
	            max={ 10 } 
                // value=""
                // onChange={event => this.handleChange(event)}
            /> 
             <input
                id="payment"
                type="number"
                name="payment"
                placeholder="Payment"
                min={ 0 } 
	            max={ 10 } 
                // value=""
                // onChange={event => this.handleChange(event)}
            /> 
        <input
                id="kindness"
                type="number"
                name="kindness"
                placeholder="Kindness"
                min={ 0 } 
	            max={ 10 } 
                // value=""
                // onChange={event => this.handleChange(event)}
            /> 
        <input
                id="vibe"
                type="number"
                name="vibe"
                placeholder="Vibe"
                min={ 0 } 
	            max={ 10 } 
                // value=""
                // onChange={event => this.handleChange(event)}
            /> 
        <input
                id="safety"
                type="number"
                name="safety"
                placeholder="Safety"
                min={ 0 } 
	            max={ 10 } 
                // value=""
                // onChange={event => this.handleChange(event)}
            />
    {/* This will have them check if they would go out with them again or not */}
        <input
        // onChange={(e) => {
        //   setRadioState(e.target.value);
        //   onChange(e.target.value === "yes");
        // }}
        type="checkbox"
        name="answer"
        // value={option.name}
        // checked={option.name === radioState}
      />
             <button id="submitBtn" className="submit-button">Submit New Review </button>
        </div>

    </div>
    );
};

export default ReviewFormDetails;

