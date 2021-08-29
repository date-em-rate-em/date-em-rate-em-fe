import React from 'react';

const ReviewForm = () => {
    return (
        <div>
            <header>
                <h2 className="form-heading">Enter new client information here to keep yourself and your community in the know about the current ClientTell out there. </h2>
            </header>
             <div className="form-container">
                 <p>Enter either or both of the following: </p>
            <input
                id="phoneNumberInput"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                // value=""
                // onChange={event => this.handleChange(event)}
            /> 
             <input
                id="emailInput"
                type="text"
                name="email"
                placeholder="Email Address"
                // value=""
                // onChange={event => this.handleChange(event)}
            /> 
        <button id="arrowBtn" className="arrow-button">➡️ </button>
        </div>

        </div>
    );
};

export default ReviewForm;