import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <nav>
            <div className='header-left'>
                <a target="_blank" href='https://weather.com/'>
                    <button>Quick Exit</button>
                </a>
                <h1 className='nav-logo'>ClienTell</h1>
            </div>
            <div className='header-links'>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/Search'>
                    <button>Search Clients</button>
                </Link>
                <Link to='/review-form-page-1'>
                    <button>Add Client</button>
                </Link>
                <Link to='/Resources'>
                    <button>Resources</button>
                </Link>
            </div>
        </nav>
    );
};
