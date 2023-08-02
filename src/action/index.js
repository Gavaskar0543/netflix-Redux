// {
//     type:'MOVIE_ADD',
//     movies:[]

// }
//action creaters
export const MoviesAdd = 'MOVIE_ADD';
export const FavMovie = 'FAV_MOVIE_ADD';
export const RemoveFav = 'REMOVE_FAV';
export const setShowSelected = 'SET_SHOW_SELECTED'
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
   const url = `http://www.omdbapi.com/?apikey=bb3de621&t=${encodeURIComponent(movie)}`;

   const response = await fetch(url);
   if (!response.ok) {
      throw new Error('Network response was not ok');
   }
   return await response.json();
   }