import React from 'react';
import {createStore , applyMiddleware} from 'redux';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import thunk from 'redux-thunk';
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
  if(typeof action !== 'function'){
  console.log('Action_TYPE =', action.type);}
  next(action);
}
const store = createStore(combineReducers  , applyMiddleware(logger,thunk));
const StoreContext = createContext();
class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return(
      <StoreContext value={store}>
        {this.props.childern}
      </StoreContext>
    )
  }
}
console.log(StoreContext);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App store={store} />
    </Provider>
  
);

