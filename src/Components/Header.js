import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <nav className='nav'>
            <div className='header-left'>
                <a target="_blank" href='https://weather.com/'>
                    <button className='exit-btn'>Quick Exit</button>
                </a>
                <img className='nav-logo' src='https://i.imgur.com/6y1TO2P.png' alt='clientell logo'></img>
            </div>
            <div className='header-links'>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/Search'>
                    <button>Search Clients</button>
                </Link>
                <Link to='/new-client-form'>
                    <button>Add Client</button>
                </Link>
                <Link to='/Resources'>
                    <button>Resources</button>
                </Link>
            </div>
        </nav>
    );
};
