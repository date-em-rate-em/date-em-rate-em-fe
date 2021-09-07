import { NavLink, useLocation } from 'react-router-dom';

export const MobileMenu = () => {
  const location = useLocation().pathname

  return (     
    <nav className='mobile-menu'>
      <div className='links-container'>
          <NavLink className={`mobile-link ${location === '/search' && 'active'}`}  to='/search'>Search</NavLink>
          <NavLink className={`mobile-link ${location === '/new-client-form' && 'active'}`} to='/new-client-form'>Add New Client</NavLink>
          <NavLink className={`mobile-link ${location === '/resources' && 'active'}`}   to='/resources'>Resources</NavLink>
          <NavLink className={`mobile-link ${location === '/about-us' && 'active'}`}   to='/about-us'>About Us</NavLink>
      </div>
    </nav>
  )
};