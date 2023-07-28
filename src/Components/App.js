import React from 'react';
import Navbar from './Navbar'
import {data} from '../data'
import MovieCard from './MovieCard'
import { addMovies } from '../action';
class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
     store.subscribe(() => {
      console.log('updated')
      this.forceUpdate();
     })
    store.dispatch(addMovies(data));
    console.log('state',this.props.store.getState());
   
    console.log(store)
  }
  render(){
   
  const movies = this.props.store.getState();
  return (
 <>
<Navbar/>
<div className='container mt-5 d-flex-column justify-content-center align-item-center border border-1'>
  <div className=' w-25 d-flex align-item-cennter justify-content-between '>
    <h5>Movies</h5>
    <h5>Favourite Movie</h5>
  </div>

  <div className='container'>
    <div>
      {movies.map((movie,index) => 
        <MovieCard movies={movie} key={`${index}`}/>
      )}
      </div>

  </div>

</div>
 </>
  );
}
}
export default App;
