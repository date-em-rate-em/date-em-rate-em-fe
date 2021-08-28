import { useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Login = () => {   

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <section className='login'>
            <h1>ClientTell</h1>
            <article className='login-content'>
                <p>Account Login</p>
                <form className='login-credentials'>
                    <input 
                    type='text'
                    name='username' 
                    autocomplete='off' 
                    placeholder='Username'
                    required/>
                    <label for='password-input'>Password:</label>
                    <input 
                    type='password' 
                    autocomplete='off'
                    name='password'
                    placeholder='Password' 
                    required/>
                    <button className='loginBtn'>Log in</button>
                    {/* <p class='login-error hidden' id='loginError'>Login Error. Please try again.</p> */}
                </form>
            </article>
        </section>
    ); 

}