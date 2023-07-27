
const MovieCard = ({movies}) => {
   
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
        <button className="btn btn-outline-warning">Add Favourite</button>
      </div>

    </div>
    </>
)
}
export default MovieCard;