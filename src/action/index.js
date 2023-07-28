// {
//     type:'MOVIE_ADD',
//     movies:[]

// }
//action creaters
export const MoviesAdd = 'MOVIE_ADD';
export function addMovies(movies){
 return{
    type:MoviesAdd,
    movies
 }
    }