import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import combineReducers from './reducer';
const store = createStore(combineReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

