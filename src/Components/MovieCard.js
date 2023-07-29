import React from 'react';
import { addFavMovies ,removeFavMovies} from "../action";
class MovieCard extends React.Component {

 handleClick =() =>{
 const {movies} = this.props;
 this.props.dispatch(addFavMovies(movies));
 console.log(this.props);
}
handleunFavClick =() =>{
  const {movies} = this.props;
  this.props.dispatch(removeFavMovies(movies));
 }
   render(){
    const {movies} = this.props;
    const {isFavMovie} = this.props;
   return(
    <>
    <div className="d-flex mb-5">
      <div id="left">
        <img src={`${movies.Poster}`} alt="movie poster" />
      </div>
      <div className="mx-5 my-3" id="right">
        <h6>{movies.Title}</h6>
        <p>{movies.year}</p>
        <p>{movies.Director}</p>
        <p>{movies.Actors}</p>
        {
          isFavMovie ? ( <button className="btn btn-danger" onClick={this.handleunFavClick}>Remove Favourite</button>)
          :( <button className="btn btn-outline-warning" onClick={this.handleClick}>AddFavourite</button>)
        }
       
      </div>

    </div>
    </>
)
}
}
export default MovieCard;