import { MoviesAdd } from "../action";
export default function movies(state = [],action){
    if(action.type === MoviesAdd ){
        return action.movies;
    }
    return state;
}

