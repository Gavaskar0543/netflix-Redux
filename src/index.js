import React from 'react';
import {createStore , applyMiddleware} from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import combineReducers from './reducer';
// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log('Action_Type =' , action.type);
//       next(action);
//     }
//   }
// }
const logger = ({dispatch,getState}) => (next) => (action) =>{
  console.log('Action_TYPE =', action.type);
  next(action);
}
const store = createStore(combineReducers , applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

