import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://date-em-rate-em-be.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

export const GET_ALL_CLIENT_DATA = gql `
  query {
    allClients {
      id
      email
      reviews {
          id
          clientId
          userId
          rating
          safetyMeter
          body
          extendedBody
          title
          size
          payment
          kindness
          vibe
          dateAgain
          gender
      }
    }
  }
`;

export const GET_ALL_USER_DATA = gql `
  query {
    allUsers {
      id
      email
    }
  }
`;


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
