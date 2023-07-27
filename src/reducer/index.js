export default function movies(state = [1],action){
    if(action.type === 'MOVIE_ADD'){
        return action.movies;
    }
    return state;
}