import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import movies from './reducer';
const store = createStore(movies)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

