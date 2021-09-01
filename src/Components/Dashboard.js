import { useState } from 'react';


export const Dashboard = (userName, clients) => {
    const [ highClientCard, setHigh ] = useState({});
    const [ lowClientCard, setLow ] = useState({});
    const [ featured, setclientCard ] = useState({});
//if we want to try to find high/low client...
// const sortedClients = clients.sort((a, b) => a.avgRating - b.avgRating)
// const topClient = sortedClients[0]
// setHigh(topClient);

//otherwise, we could just do a featured client of the day...
// const featuredClient = clients[Math.floor(Math.random() * clients.length)];  
// setClientCard(featuredClient); 

    return (
        <section>
            {/* <h2>Welcome back, {userName}!</h2> */}
            <article>
                <h3>Today's Top Client:</h3>
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
