import React from 'react';
import Navbar from './Navbar'
import {data} from '../data'
import MovieCard from './MovieCard'
import { addMovies,setshows} from '../action';
import {StoreContext} from '../index'

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
     store.subscribe(() => {
      console.log('updated')
      console.log(store.getState());
      this.forceUpdate();
     })
    store.dispatch(addMovies(data));
    console.log('state',this.props.store.getState());
   
    console.log(store)
  }
  handleFavMovie(movies){
    const {movie} = this.props.store.getState();
    
    let index = movie.favmovies.indexOf(movies);
    if(index !== -1){
      return true;
    }
    return false;
  }

  onchangeTab(val){
   this.props.store.dispatch(setshows(val));
  }
  render(){
   const {movie} = this.props.store.getState();
  const {list,favmovies,showSelected} = movie;
  const displayMovies = showSelected ? favmovies : list;
  
  return(
    <StoreContext.Consumer>
      {
        (() => {

          return (
            <>
           <Navbar/>
           <div className='container mt-5 d-flex-column justify-content-center align-item-center '>
             <div style={{cursor:'pointer'}} className=' w-25 d-flex align-item-cennter justify-content-between '>
              <div className='mb-5 w-auto '> <h5 onClick={() => this.onchangeTab(false)}>Movies</h5></div>
              <div  className=' mb-5 w-auto'> <h5  onClick={() => this.onchangeTab(true)}>Favourite Movie</h5></div>
             </div>
           
             <div className='container'>
               <div>
                 {displayMovies.map((movie,index) => 
                   <MovieCard movies={movie} key={`${index}`}  dispatch={this.props.store.dispatch} isFavMovie={this.handleFavMovie(movie)}/>
                 )}
                 </div>
           
             </div>
           
           </div>
            </>
             );

        })
      }
    </StoreContext.Consumer>
  )

 
}
}
export default App;
