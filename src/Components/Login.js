import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { GET_ALL_CLIENT_DATA } from './../index';

export const Login = (validateLogin) => {   

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    const loginUser = (event) => {
        event.preventDefault()
        const userLogin = {
                userName: user,
                password: password
        }
        // validateLogin(userLogin); //will need to create a validateLogin func in App that sends the login info to the BE which sends us back that specific user's information
        clearInputs();
       }

    const clearInputs = () => {
        setUser('')
        setPassword('');
    }

    return (
        
        <section className='login'>
            <div>
    <FontAwesomeIcon icon="search" />
    <FontAwesomeIcon icon="plus" /> 
  </div>
            <h1>ClientTell</h1>
            {/* {!error && seeClients(clients)} */}
            {/* {!error && seeUser(users)} */}
            <article className='login-content'>
                <p>Account Login</p>
                <form className='login-credentials'>
                    <input 
                    type='text'
                    name='username' 
                    autocomplete='off' 
                    placeholder='Username'
                    value={user}
                    required
                    onChange={event => setUser(event.target.value)}
                    />
                    
                    <input 
                    type='password' 
                    autocomplete='off'
                    name='password'
                    placeholder='Password' 
                    value={password}
                    required
                    onChange={event => setPassword(event.target.value)}
                    />
                    {/* <Link to='/Dashboard'>
                        <button 
                        className='loginBtn'
                        onClick={(event) => loginUser(event)}>
                        Log in
                        </button>`
                    </Link> */}
                    {/* <p class='login-error hidden' id='loginError'>Login Error. Please try again.</p> */}
                </form>
            </article>
        </section>
    ); 

}