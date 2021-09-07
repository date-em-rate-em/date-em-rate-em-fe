import { useState, useEffect } from 'react';
import React from 'react';
import { ContactCard } from './ContactCard';
import { FaUserCircle } from 'react-icons/fa'

export const Dashboard = ({ user, clients }) => {
    const [ highClientCard, setHigh ] = useState({});
    const [ lowClientCard, setLow ] = useState({});
    const [ featuredClient, setClientCard ] = useState({});

const randomClient = clients[Math.floor(Math.random() * clients.length)];  

useEffect(() => {
    if (randomClient) {
        setClientCard(randomClient);
    }

    if(clients) {
        setHigh(sortByRatings(clients).pop())
        setLow(sortByRatings(clients).shift())
    }
  }, [randomClient, clients]);


const sortByRatings = (clients) => {
    const allClients = [...clients]

    const sortAverages = allClients.sort((a, b) => a.averageRating - b.averageRating)
    return sortAverages
  }


    return (
        <>
                <div className='welcome'>
                    <FaUserCircle className='user-icon'/>
                    <h2>Welcome back, SexWorkIsRealWork{user[0].id}!</h2>
                </div>
            <article className='featured-clients'>
                <h3 className='dashboard-clients'>Highest Rated Client:</h3>
                {clients.length && highClientCard.id &&
                    <ContactCard 
                    id={highClientCard.id}
                    email={highClientCard.email}
                    averageRating={highClientCard.averageRating}
                    numReviews={highClientCard.reviews.length}
                    />
                }
                <h3 className='dashboard-clients'>Lowest Rated Client:</h3>
                {clients.length && lowClientCard.id && 
                    <ContactCard 
                    id={lowClientCard.id}
                    email={lowClientCard.email}
                    averageRating={lowClientCard.averageRating}
                    numReviews={lowClientCard.reviews.length}
                    />
                }
                <h3 className='dashboard-clients'>Featured Client:</h3>
                {clients.length && featuredClient.id &&
                    <ContactCard 
                    id={featuredClient.id}
                    email={featuredClient.email}
                    averageRating={featuredClient.averageRating}
                    numReviews={featuredClient.reviews.length}
                    />

                }
            </article>
        </>
    );
};
