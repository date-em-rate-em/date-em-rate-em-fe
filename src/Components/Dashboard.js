import { useState, useEffect } from 'react';
import React from 'react';
import ContactCard from './ContactCard';

export const Dashboard = ({ user, clients }) => {
    const [ highClientCard, setHigh ] = useState({});
    const [ lowClientCard, setLow ] = useState({});
    const [ featuredClient, setClientCard ] = useState({});

    console.log('DASHBOARD USER', user)
    console.log('DASHBOARD CLIENTS', clients)
// if we want to try to find high/low client...
// const mapClients = clients.map(client => client.email )
// console.log(mapClients)
// const topClient = sortedClients[0]
// setHigh(topClient);

// otherwise, we could just do a featured client of the day...
const randomClient = clients[Math.floor(Math.random() * clients.length)];  
console.log("gimmeRandom", randomClient.reviews[0].body)

useEffect(() => {
    if (randomClient) {
        setClientCard(randomClient);
        console.log("feature", featuredClient.email)
    }
  }, [randomClient]);

//   const sortedClients = clients.sort((a, b) => a.averageRating - b.averageRating)
// console.log(sortedClients)

// const sortClients = clients.sort((a, b) => b.averageRating - a.averageRating )
// console.log("sortClients", sortClients)

const sortByHighRatings = (clients) => {
    const allClients = [...clients]

    const sortAverages = allClients.sort((a, b) => a.averageRating - b.averageRating)
    return sortAverages
  }
  console.log("Sorted!", sortByHighRatings(clients))

 

    return (
        <section>
            {/* <h2>Welcome back, {userName}!</h2> */}
            <article>
                <h3>Today's Top Client:</h3>
                {clients && featuredClient && <ContactCard featuredClient={featuredClient}/>}
                {/* // {featuredClient.averageRating} */}
                {/* // {featuredClient.reviews[0].body} */}
                {/* {featuredClient.reviews[1]} */}
                {/* <Link to='/Profile'>
                    <ContactCard 
                    client={highClientCard}
                    />
                </Link>
                <h3>Here's one to avoid:</h3>
                <Link to='/Profile'>
                    <ContactCard 
                    client={lowClientCard}
                    />
                </Link> */}
            </article>
            <section className='resource'>
                {/* Resource?? */}
            </section>
        </section>
    );
};
