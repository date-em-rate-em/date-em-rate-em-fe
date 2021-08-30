import React from 'react';
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {

    //Footer will only be rendered on mobile view... need to look into how to do this to show/hide a component based on screen size 

    return (
        <section>
            <Route exact path='/Dashboard' render={() => 
            <div className='footer-icons'>
                <FontAwesomeIcon icon="search" />
                <FontAwesomeIcon icon="plus" /> 
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

