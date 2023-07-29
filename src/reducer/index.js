import { MoviesAdd,FavMovie,RemoveFav,setShowSelected } from "../action";

const initialState = {
    list :[],
    favmovies:[],
    showSelected:false,
}

export default function movies(state = initialState,action){
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

