import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') /*It's looking on the document object for 
                                  for some element with ID of "root" and it's 
                                  replacing it with this (our)function that we saw that
                                  returns HTML */

);

/* That div with an ID of root is in index.html. This is the entry way
for our application*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
