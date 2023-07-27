
import Navbar from './Navbar'
import {data} from '../data'
import MovieCard from './MovieCard'
function App() {
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
      {data.map((movie,index) => 
        <MovieCard movies={movie} key={`${index}`}/>
      )}
      </div>

  </div>

</div>
 </>
  );
}

export default App;
