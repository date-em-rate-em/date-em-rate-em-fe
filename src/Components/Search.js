import { useState } from 'react';
import PropTypes from 'prop-types';
import { ContactCard } from './ContactCard';


export const Search = ({ clients }) => {
   const allClients = [...clients]
   const [ searchTerm, setSearchTerm ] = useState('');

   //we will need to do some error handling with the way someone types in the phone number/email...
   const clientCard = allClients.filter((client) => {
      if (client.email.toLowerCase().includes(searchTerm.toLowerCase())) {
           return (
               <ContactCard 
               id={client.id}
               key={client.id}
               email={client.emailAddress}
               averageRating={client.averageRating}
              />
           )
       }
   });

   return (
    <section className='searchView'>
        <input className='search-bar'
            type='text' 
            placeholder='Search by client email...'
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }} 
        />
        <article className='cards-container'>
        {clientCard.length ? clientCard : <h2> There are no clients that match your search.</h2>} 
        </article>
    </section>
)
}

Search.propTypes = {

};

