import { combineReducers } from "redux";
import { MoviesAdd,FavMovie,RemoveFav,setShowSelected } from "../action";

const initialMovieState = {
    list :[],
    favmovies:[],
    showSelected:false,
}

export  function movies(state = initialMovieState,action){
    // if(action.type === MoviesAdd ){
    //     return {
    //         ...state,
    //         list :action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case MoviesAdd:
            return{

                ...state,
                list: action.movies
            }
        case FavMovie:
            return{
                ...state,
                favmovies: [action.movie, ...state.favmovies]
            }
        case RemoveFav:
            const filteredArray = state.favmovies.filter(
                movie => movie.Title !== action.movie.Title
            )
            return{
                ...state,
                favmovies:filteredArray
            
            }
        case setShowSelected:
            return{
                ...state,
                showSelected:action.val
            }
        default:
            return state
    }
}
const initialSearchState={
    result:{}
}
//search state
export function search(state = initialSearchState,action){
  return state;
}
// //rootreducer initialstate
// const instialRootState={
//     movie : initialMovieState,
//     search: initialSearchState
// }
// //rootReducer
// export default function rootReducer(state = instialRootState,action){
//     return{
//         movie: movies(state.movie,action),
//         search: search(state.search,action)
//     }
    
// }
export default combineReducers({
   movie: movies,
    search:search
});