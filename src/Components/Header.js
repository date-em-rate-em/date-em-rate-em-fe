import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

    const exitURL = 'https://weather.com/'
    return (
        <section>
            <div className='header-left'>
                <Link to={exitURL}>
                    <button>Quick Exit</button>
                </Link>
                <h1>ClienTell</h1>
            </div>
            <div className='header-links'>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/Search'>
                    <button>Search Clients</button>
                </Link>
                <Link to='/AddClient'>
                    <button>Add Client</button>
                </Link>
                <Link to='/Resources'>
                    <button>Resources</button>
                </Link>
            </div>
        </section>
    );
};
