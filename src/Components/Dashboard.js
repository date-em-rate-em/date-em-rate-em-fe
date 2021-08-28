import { useState } from 'react';

export const Dashboard = (userName, clients) => {
    const [ highClientCard, setHigh ] = useState({});
    const [ lowClientCard, setLow ] = useState({});
//if we want to try to find high/low client...
// const sortedClients = clients.sort((a, b) => a.avgRating - b.avgRating)
// const topClient = sortedClients[0]
// setHigh(topClient);

//otherwise, we could just do a random client of the day...
// const randomClient = clients[Math.floor(Math.random() * clients.length)];  
// setClientCard(randomClient); 

    return (
        <section>
            <h2>Welcome back, {userName}!</h2>
            <article>
                <h3>Today's Top Client:</h3>
                <Link to='/Profile'>
                    <ContactCard 
                    client={highClientCard}
                    />
                </Link>
                <h3>Avoid this one:</h3>
                <Link to='/Profile'>
                    <ContactCard 
                    client={lowClientCard}
                    />
                </Link>
            </article>
        </section>
    );
};
