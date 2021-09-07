import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {

    return (
        <section>
            <Switch>
                <Route exact path='/' render={() => 
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
                <Link to='/'>
                    <div className='return-home'>
                        <FontAwesomeIcon icon="home" />
                    </div>
                </Link>
            </Switch>
        </section>

    );
};

