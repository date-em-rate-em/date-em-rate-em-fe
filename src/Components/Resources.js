import { useState } from 'react';

export const Resources = () => {

        const [ searchTerm, setSearchTerm ] = useState('');
        const allResources = [
        {name: 'Sex Workers Project', link: 'https://sexworkersproject.org/resources/'}, 
        {name: 'The Global Network of Sex Work Projects(NSWP)', link: 'https://www.nswp.org/resources'},
        {name: 'Urban Justice Center', link: 'https://swp.urbanjustice.org/news-room/'},
        {name: 'Bad Girls Bible', link: 'https://badgirlsbible.com/'},
        {name: 'Sex Workers Outreach Project USA', link: 'https://swopusa.org/'},
        {name: 'Molly House Project', link: 'https://www.mollyhouseproject.org/'},
        {name: 'Red Umbrella Fund', link: 'https://www.redumbrellafund.org/sex-workers-rights/'},
        {name: 'Resourcing Health & Education (RhED)', link: 'https://sexworker.org.au/sex-workers/'},
        {name: 'SAFE in Collingwood ', link: 'https://www.nswp.org/resources'},
        {name: 'Desiree Alliance', link: 'www.desireealliance.org'},
        {name: 'St. James Infirmary', link: 'https://www.stjamesinfirmary.org/wordpress/'}

        ] 

        const resource = allResources.filter((resource) => {
                if (searchTerm === '') {
                    return resource
                } else if (resource.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return resource 
                }
        }).map(resource => {
     return (
                <a target="_blank" href={resource.link}>
                        <button className={resource.name}>{resource.name}</button>
                </a>
    )
   })

    return (
        <section className='resources-sections'>
                <section className="search-container">
                <p>Please click on the links below for sex-work specific resources from around the world:</p>

                <input className='resources-search-bar'
                type='text' 
                placeholder='Search for Resources...'
                onChange={(event) => {
                        setSearchTerm(event.target.value);
                }} 
                />
                <div className='search-result-container'>
                {resource.length ? resource : <h2> There are no resources that match your search.</h2>} 
                </div>

                </section>
        </section>

    )
}

