import { useState, useEffect } from 'react';
import React from 'react';
import ContactCard from './ContactCard';

export const Dashboard = ({ user, clients }) => {
    const [ highClientCard, setHigh ] = useState({});
    const [ lowClientCard, setLow ] = useState({});
    const [ featuredClient, setClientCard ] = useState({});

    // console.log('DASHBOARD USER', user)
    // console.log('DASHBOARD CLIENTS', clients)


// otherwise, we could just do a featured client of the day...
const randomClient = clients[Math.floor(Math.random() * clients.length)];  
// console.log("gimmeRandom", randomClient.reviews[0].body)

useEffect(() => {
    if (randomClient) {
        setClientCard(randomClient);
        // console.log("feature", featuredClient.email)
    }

    if(clients) {
        setHigh(sortByRatings(clients).pop())
        setLow(sortByRatings(clients).shift())
        console.log("highhhhhhh", highClientCard)
        console.log("lowwwwwwww", lowClientCard)
    }
  }, [randomClient, clients]);


const sortByRatings = (clients) => {
    const allClients = [...clients]

    const sortAverages = allClients.sort((a, b) => a.averageRating - b.averageRating)
    return sortAverages
  }


    return (
        <section>
            <h2>Welcome Back to ClienTell</h2>
            <article>
                {/* <h3>Today's Featured Client:</h3> */}
                {/* {clients && featuredClient && <ContactCard highlyRated={highClientCard} lowRated={lowClientCard} featuredClient={featuredClient}/>} */}
                {/* // {featuredClient.averageRating} */}
                {/* // {featuredClient.reviews[0].body} */}
                {/* {featuredClient.reviews[1]} */}
                {clients && featuredClient &&
                    <ContactCard 
                    id={featuredClient.id}
                    email={featuredClient.email}
                    averageRating={featuredClient.averageRating}
                    reviews={featuredClient.reviews}
                    // client={highClientCard}
                    />

                }
                {clients && highClientCard &&
                    <ContactCard 
                    id={highClientCard.id}
                    email={highClientCard.email}
                    averageRating={highClientCard.averageRating}
                    reviews={highClientCard.reviews}
                    // client={highClientCard}
                    />

                }
                <h3>Here's one to avoid:</h3>
                {clients && lowClientCard && 
                    <ContactCard 
                     id={lowClientCard.id}
                    email={lowClientCard.email}
                  averageRating={lowClientCard.averageRating}
                  reviews={lowClientCard.reviews}

                    />
                }
            </article>
            <section className='resource'>
                {/* Resource?? */}
            </section>
        </section>
    );
};
