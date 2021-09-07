import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <nav className='nav'>
            <div className='header-left'>
                <a target="_blank" href='https://weather.com/'>
                    <button className='exit-btn'>Quick Exit</button>
                </a>
                <Link to='/'>
                    <img className='logo' src='https://i.imgur.com/6y1TO2P.png' alt='clientell logo'></img>
                </Link>
            </div>
            <div className='header-links'>
                {/* <div className='home-search'> */}
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <Link to='/search'>
                        <button>Search Clients</button>
                    </Link>
                {/* </div> */}
                {/* <div className='Add-Resources'> */}
                <Link to='/new-client-form'>
                    <button>+ Add Client</button>
                </Link>
                <Link to='/resources'>
                    <button>Resources</button>
                </Link>
                <Link to='/about-us'>
                    <button>About Us</button>
                </Link>
                {/* </div> */}
            </div>
        </nav>
    );
};
