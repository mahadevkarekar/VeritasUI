import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es7.object.values';

 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
//import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
/*import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';*/


import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, FetchPolicy } from 'apollo-boost';
import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
         console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
         ),
      );
   }
   if (networkError) {
      //logger.error(`[Network error]: ${networkError}`);
   }
});

const links=[];
links.push(errorLink);
links.push(
   new HttpLink({
    uri: 'http://gotenks1.fyre.ibm.com:9082/content-services-graphql/graphql',   
    fetchOptions: {
      mode: 'no-cors',
    },
    type:"POST",
      headers: { 
        AUTHORIZATION: 'Basic d2FzYWRtaW46cGFzc3dvcmRAMTIz',
         "Access-Control-Allow-Origin": "true",
         
         "Accept":"application/json"
      },
      
    
   }),
);

const client = new ApolloClient({
   link: ApolloLink.from(links),
   cache: new InMemoryCache(),
});
  
/*
import {decode as base64_decode, encode as base64_encode} from 'base-64';
const username="wasadmin";
const password="password@123"


const encoded = base64_encode('wasadmin:password@123');
console.log(encoded);
 const client = new ApolloClient({
 
  uri: 'https://graphql-veritas.router-default.apps.lambed.cp.fyre.ibm.com/content-services-graphql',   
  fetchOptions: {
    mode: 'no-cors',
  },
  headers: { 
    authorization: 'Basic d2FzYWRtaW46cGFzc3dvcmRAMTIz',   
  },
});   
/*
const httpLink = createHttpLink({
  uri: 'https://graphql-veritas.router-default.apps.lambed.cp.fyre.ibm.com/content-services-graphql',   
  fetchOptions: {
    mode: 'no-cors',
    
  },
  'Access-Control-Allow-Origin': 'true',
  credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  console.log(token);
  // return the headers to the context so httpLink can read them
  return {

    headers: {
      ...headers,
      
      authorization: token ? `Bearer ${token}` : "",
      
     
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
*/
 


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
