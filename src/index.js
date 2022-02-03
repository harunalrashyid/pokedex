import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from "@apollo/client";

import App from './routes'
import client from './services/client'
import * as serviceWorker from './utilities/serviceWorker'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />  
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
