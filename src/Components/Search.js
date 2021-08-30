import React, from 'react';
import PropTypes from 'prop-types';

export const Search = ({clients}) => {
   const [ searchTerm, setSearchTerm ] = useState('');

   //we will need to do some error handling with the way someone types in the phone number/email...
   const clientCard = clients.filter(client => {
      if (client.phoneNumber.includes(searchTerm) || client.emailAddress.includes(searchTerm)) {
           return client;
       }
   }).map(client => {
       return (
           <ContactCard 
               id={client.id}
               key={client.id}
               phoneNumber={client.phoneNumber}
               email={client.emailAddress}
           />
       )
   });

   return (
    <section className='searchView'>
        <input className='search-bar'
            type='text' 
            placeholder='Search by phone number or email...'
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

