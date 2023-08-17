// {
//     type:'MOVIE_ADD',
//     movies:[]

// }
//action creaters
export const MoviesAdd = 'MOVIE_ADD';
export const FavMovie = 'FAV_MOVIE_ADD';
export const RemoveFav = 'REMOVE_FAV';
export const setShowSelected = 'SET_SHOW_SELECTED';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export function addMovies(movies) {
   return {
      type: MoviesAdd,
      movies
   }
}

export function addFavMovies(movie) {
   return {
      type: FavMovie,
      movie
   }
}

export function removeFavMovies(movie) {
   return {
      type: RemoveFav,
      movie
   }
}

export function setshows(val) {
   return {
      type: setShowSelected,
      val
   }
}

export async function handleMovieSearch(movie) {
   const url = `http://www.omdbapi.com/?apikey=bb3de621&t=${movie}`;

   await fetch(url)
      .then(response => console.log(response.json()))
   dispatchEvent(addSearchResult(movie));
}

export async function addSearchResult(movie) {
   return {
      type: ADD_SEARCH_RESULT,
      movie
   }
}