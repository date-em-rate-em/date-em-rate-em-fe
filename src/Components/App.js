import { Login } from './Login';
import { Header } from './Header';
import { Search } from './Search';
import { Dashboard } from './Dashboard';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faPlus, faHome } from '@fortawesome/free-solid-svg-icons'
import { CLIENT_DATA_QUERY } from '../index'
import { USER_DATA_QUERY } from '../index'
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

const App = () => {
  library.add(fab, faSearch, faPlus, faHome)
  const [clients, setClients] = useState('');
  const [user, setUser] = useState('');

  const { loading: userLoading, error: userError, data: userData } = useQuery(USER_DATA_QUERY);
  const { loading: clientsLoading, error: clientsError, data: clientsData } = useQuery(CLIENT_DATA_QUERY);
    
    useEffect(() => {
        if ((!userLoading && userData) && (!clientsLoading && clientsData)) {
          setUser(userData.allUsers);
          setClients(clientsData.allClients);
          // console.log('user', users)
          // console.log("clients", clients)
        }
      }, [clients, clientsData, clientsLoading, userData, userLoading, user]);

  return (
    <div className="App">
      {clients && user && 
      <Search
      clients={clients}
      user={user}
      />}
      {/* <Footer />
     */}
    </div>
  );
}

export default App;
