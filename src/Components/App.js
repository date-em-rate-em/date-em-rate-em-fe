import { Login } from './Login';
import { Header } from './Header';
import { Search } from './Search';
import { Dashboard } from './Dashboard';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faPlus, faHome } from '@fortawesome/free-solid-svg-icons'
import { CLIENT_DATA_QUERY } from '../index'
import { USER_DATA_QUERY } from '../index'
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import Profile from './Profile'
import ReviewForm from './ReviewForm'
import ReviewFormDetails from './ReviewFormDetails';
import { Footer } from './Footer';
// import { Search } from 'history';

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
    <main>
      <div className="App">
        <Header />
        {userLoading && clientsLoading && <p>Loading...</p>}
        <Switch>
          <Route exact path="/" render={() => 
            <Dashboard 
            clients={clients} 
            user={user} 
            />
            }
          />
      <Route exact path="/Search" render={() => 
        <Search 
        clients={clients} 
        user={user} />
        }
      />
      <Route exact path="/profile/:id" render={({ match }) => {
        console.log('MATCH', match)
        let clientMatch = clients.find(client => client.id === match.params.id) 
            return ( 
            <Profile 
             id={clientMatch.id} 
             key={clientMatch.id}
             email={clientMatch.email} 
             averageRating={clientMatch.averageRating}
             reviews={clientMatch.reviews}
             />
           )}
            }/>
      <Route exact path="/review-form-page-1" render={() => 
            <ReviewForm 
            clients={clients} 
            user={user} 
            />
            }
          />
      <Route exact path="/add-review/:id" render={({ match }) => {
        console.log('MATCH', match.params.id)
        let clientMatch = clients.find(client => client.id === match.params.id) 
            return ( 
            <ReviewFormDetails
             id={clientMatch.id} 
             key={clientMatch.id}
             email={clientMatch.email} 
            //  averageRating={clientMatch.averageRating}
            //  reviews={clientMatch.reviews}
             />
           )}
            }/>
       {/* <Route exact path="/review-form-page-2" render={() => 
            <ReviewFormDetails 
            clients={clients} 
            user={user} 
            />
            }
          /> */}
        </Switch>
        <Footer/>
      </div>
    </main>
  );
}


export default App;
