import { useState, useEffect } from 'react';
import React from 'react';
import { ContactCard } from './ContactCard';

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
            <article className='featured-clients'>
            {user.length && <h2 className='welcome'>Welcome back, ClienTell User: SexWorkIsRealWork{user[0].id}!</h2>}
                <h3 className='dashboard-clients'>🔥 Highly Rated Client🔥</h3>
                {clients.length && highClientCard.id &&
                    <ContactCard 
                    id={highClientCard.id}
                    email={highClientCard.email}
                    averageRating={highClientCard.averageRating}
                    numReviews={highClientCard.reviews.length}
                    />
                }
                <h3 className='dashboard-clients'>Stay away from this one!</h3>
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
