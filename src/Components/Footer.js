import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {

    //Footer will only be rendered on mobile view... need to look into how to do this to show/hide a component based on screen size 

    return (
        <section>
            <Switch>
                <Route exact path='/Dashboard' render={() => 
                <div className='footer-icons'>
                    <Link to='/Search'>
                        <FontAwesomeIcon icon="search" />
                    </Link>
                    <Link to='/ReviewForm'>
                        <FontAwesomeIcon icon="plus" />
                    </Link>
                </div>
            }
            /> 
                <Link to='/Dashboard'>
                    <div className='return-home'>
                        <FontAwesomeIcon icon="home" />
                    </div>
                </Link>
            </Switch>
        </section>

    );
};

