import { useState } from 'react';
import { ContactCard } from './ContactCard';


export const Search = ({ clients }) => {
   const allClients = [...clients]


   const [ searchTerm, setSearchTerm ] = useState('');

   const clientCard = allClients.filter((client) => {
      if (searchTerm === '') {
          return client
      } else if (client.email.toLowerCase().includes(searchTerm.toLowerCase())) {
          return client 
      }
   }).map(client => {
     return (
        <ContactCard 
        id={client.id}
        key={client.id}
        email={client.email}
        averageRating={client.averageRating}
        numReviews={client.reviews.length}
       />
    )
   })

   return (
    <section className='search-view'>
        <input className='search-bar'
            type='text' 
            placeholder='Search for client by email...'
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }} 
        />
        <div className='cards-container'>
        {clientCard.length ? clientCard : <h2> There are no clients that match your search.</h2>} 
        </div>
    </section>
)
}
