import React from 'react';
import { Route } from 'react-router-dom';

export const Footer = () => {

    //Footer will only be rendered on mobile view

    return (
        <section>
            <Route exact path='/Dashboard' render={() => 
            <div className='footer-icons'>
                {/* magnifying glass on left, plus sign on right */}
            </div>
        }
        />
            <Link to='/Dashboard'>
                <div className='return-home'>
                    {/* back arrow icon  */}
                </div>
            </Link>
        </section>
    );
};

